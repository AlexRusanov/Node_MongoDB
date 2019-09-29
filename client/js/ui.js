class DOMManager {
    /**
     * @param {Object} element
     **/
    static getElement(element){
        return document.querySelector(element);
    }

    /**
     * @param {Array} list
     * @param {Function} callback
     * @param {String} classes
     **/
    static createList(list, callback = () => {
        return `<div>Not Set</div>`;
    }, classes='') {
        return Array.isArray(list) && list.map(item => {
                return `<div class="${classes}">${callback(item)}</div>`
            }).join('') || ''
    }

    /**
     * @param {String} tag
     * @param {Object} attributes
     **/
    static createElement(tag = 'div', attributes = {}, content = null) {
        const element = document.createElement(tag);
        for (let attr  in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
        if(content){
            element.innerHTML = content;
        }
        return element;
    }

    /**
     * @param {String} selector
     **/
    static deleteBySelector(selector) {
        const elements = document.querySelectorAll(selector);

        for(let element of elements){
            element.remove();
        }
    }

    /**
     * @param {Object} element
     * @param {Object} attribute
     **/
    static getAttribute(element, attribute){
        return element.getAttribute(attribute);
    }

    /**
     * @param {Object} element
     * @param {String} attribute
     * @param {String} value
     **/
    static setAttribute(element, attribute, value){
        return element.setAttribute(attribute, value);
    }

    /**
     * @param {Object} element
     * @param {String} className
     **/
    static hasClass(element, className){
        return element.classList.contains(className)
    }

}

class Client {
    constructor({_id, firstName, lastName}) {
        this.clientId = _id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    render() {
        const elem = DOMManager.createElement('a', {
            'href': '#',
            'data-id': this.clientId,
            'class': 'client-element'

        }, `${this.firstName}  ${this.lastName}`);
        return elem.outerHTML;

    }
}
class Payment {
    constructor({description, balance, sum}){
        this.description = description;
        this.balance = balance;
        this.sum = sum;
    }
    render(){
        const elem = DOMManager.createElement('div', {
            'class': 'payment-element'
        }, `description: ${this.description}, balance: ${this.balance}, sum: ${this.sum}`);
        return elem.outerHTML;
    }
}
