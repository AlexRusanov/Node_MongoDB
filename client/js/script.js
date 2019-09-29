const content = DOMManager.getElement('.content');
let url = "http://192.168.1.163:3000";
fetch(`${url}/clients/`)
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        let list = '';
        if (!!res.status) {
            list = DOMManager.createList(
                res.data
                    .map(
                        client => new Client(client)
                    ),
                (item) => item.render(),
                'col-12 '
            )
        }
        content.innerHTML = list;
    })
    .catch((err) => {
        console.log(err)
    });


content.addEventListener('click', onContentClick);


function onContentClick(event) {
    event.preventDefault();
    const element = event.target;
    if (DOMManager.hasClass(element, 'client-element')) {
        const dataId = DOMManager.getAttribute(element, 'data-id');
        const collapsed = DOMManager.getAttribute(element,
            'collapsed');

        if (dataId && !collapsed) {
            fetch(`${url}/payments/clients/${dataId}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const list = DOMManager.createList(
                        data.data.map(
                            item => new Payment(item)
                        ),
                        item => item.render(),
                        `payments-${dataId}`
                    );

                    element.insertAdjacentHTML('afterend', list);
                    DOMManager.setAttribute(element,'collapsed','collapsed');

                })
        }
        else {
            DOMManager.setAttribute(element,'collapsed','');
            DOMManager.deleteBySelector(`.payments-${dataId}`);
        }
    }


}
