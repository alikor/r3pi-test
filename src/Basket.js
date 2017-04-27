
import map from 'lodash/map';

const initialState = {
    
};

const calculatItemPrice = (item) => {
    let discount = 0;
    if (item.discount && item.quantity >= item.discount.applicableQuantity) {
        discount = (Math.floor(item.quantity / item.discount.applicableQuantity) * item.discount.percentage) * item.unitPrice;
    }
    return (item.quantity * item.unitPrice) - discount;
}

export class Basket {
    constructor() {
        this.shopApi = new ShopApi();
        this.__state = { 
            items: {}, 
            total: 0.00
        };
    }

    add(item) {
        const lineItem = this.__state.items[item]
        this.__state.items[item] = {
            ...lineItem, 
            quantity: 1 + ((lineItem && lineItem.quantity) || 0),
            ...this.shopApi.getItem(item)};
        this.__state.total = parseFloat(Object.keys(this.__state.items).reduce((total, key) => {
                const item = this.__state.items[key]
                return total += calculatItemPrice(item);
            }, 0.0).toFixed(2));
    }

    getState() {
        return {...this.__state};
    }
}

const items = {
    "Apple": { unitPrice: 0.25 },
    "Orange": { unitPrice: 0.30 },
    "Garlic": { unitPrice: 0.15 },
    "Papayas": { unitPrice: 0.50, discount: { applicableQuantity: 3, percentage: 1 }},
}
export class ShopApi {
    
    getItem(item) {
        return {...items[item]};
    }
}