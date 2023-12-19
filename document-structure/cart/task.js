const productDec = document.querySelectorAll('.product__quantity-control_dec');
const productInc = document.querySelectorAll('.product__quantity-control_inc');
let productQuantity = document.querySelectorAll('.product__quantity-value');

const product = document.querySelectorAll('.product');
const productImage = document.querySelectorAll('.product__image');
const productAdd =  document.querySelectorAll('.product__add');

let cartProducts = document.querySelector('.cart__products');
let cartQuantity = cartProducts.querySelector('.cart__product-count');
let productInCart = cartProducts.querySelectorAll('.cart__product');


function quantitySelection() {
	for (let i = 0; i < product.length; i++) {				
		productInc[i].addEventListener('click', () => {			
			++productQuantity[i].textContent;			
		})		
		productDec[i].addEventListener('click', () => {
			if(productQuantity[i].textContent > 1) {
				--productQuantity[i].textContent;				
			}				
		})					
	}
}

function addShoppingCart() {
	for (let i = 0; i < product.length; i++) {
		productAdd[i].addEventListener('click', () => {			
			let id = product[i].getAttribute('data-id');
			let src = productImage[i].getAttribute('src');
			let productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
			if(productInCart) {	
				let itog = Number(productInCart.querySelector(".cart__product-count").textContent) + Number(productQuantity[i].textContent);					
				productInCart.querySelector(".cart__product-count").textContent = itog;
			} else {
				let html = document.createElement("div");
				html.setAttribute("class", "cart__product");
				html.setAttribute("data-id", `${id}`);
				html.insertAdjacentHTML('beforeend', `
				<img class="cart__product-image" src=${src}>
				<div class="cart__product-count">${productQuantity[i].textContent}</div>
				`);
				cartProducts.appendChild(html);	
			}
			productQuantity[i].textContent = 1;										
		})		
	}
}

quantitySelection();
addShoppingCart();



