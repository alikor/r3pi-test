import "console.table";
import { Basket } from "./Basket";

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase().toLowerCase();


const basket = new Basket();


process.argv.slice(2).forEach((val, index) => {
  basket.add(capitalizeFirstLetter(val));
});

const state = basket.getState();
const items = state.items;
var table = Object.keys(items).reduce((table, key) => {
                const item = items[key]
                return [...table, {item: key, ...item}]
            },[]);

console.table(table);
console.log("Total: £" + state.total.toFixed(2));