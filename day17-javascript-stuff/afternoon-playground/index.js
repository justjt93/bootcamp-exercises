class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(){
        if (this.quantity > 0) {this.quantity = this.quantity -1;
        construct();
        }
    }
    store(count){
        this.quantity = quantity + count;
    }
}

const products = [
new Product ('TV', 2000, 3),
new Product ('MP3', 520, 2),
new Product ('USB stick', 350, 13),
new Product ('Gramofon', 2350, 5),
new Product ('Plant', 120, 2),
new Product ('Snickers', 20, 113),
new Product ('Pepsi', 16, 25),
];

const construct = () =>{
    const listElm = document.querySelector('.eshop');
    listElm.innerHTML = ''; 
        for (const product of products) {
            const listElm = document.querySelector('.eshop');
            const prodElm = document.createElement('div');
            prodElm.className = `product-section`;
            prodElm.innerHTML = (
            `<h3>${product.name}</h3>
            <span>${product.price}czk</span>
            <span>${product.quantity}pcs</span><br><button class="buy-btn">Buy</button>`
            );
            prodElm.querySelector('.buy-btn').addEventListener('click', (event) => {
            product.sell();});
        listElm.appendChild(prodElm);
        }
    }




document.addEventListener('DOMContentLoaded', () => {
construct();
  });