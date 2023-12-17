let product = document.querySelectorAll('.product'); 
let image = document.querySelectorAll('.product__image');
let product__quantityValue = document.querySelectorAll('.product__quantity-value');// количество товара
let decrement = document.querySelectorAll('.product__quantity-control_dec');//уменьшение товара "-"
let increment = document.querySelectorAll('.product__quantity-control_inc');//прибавление товара "+"
let product__add = document.querySelectorAll('.product__add');




let id = "";
let cartProducts = document.querySelector('.cart__products'); 
let src = "";



for (let i = 0; i < product.length; i++) {	 
	let quantity = Number(product__quantityValue[i].textContent);
	//добавление в корзину товара 1шт без нажатия на + или -
	if(quantity === 1) {
		product__add[i].addEventListener('click', () => {
			id = product[i].getAttribute('data-id');
			src = image[i].getAttribute('src');			
			let productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
	
				if(productInCart) {
					productInCart.querySelector(".cart__product-count").textContent = quantity;				
				} else {
					let html = document.createElement("div");
					html.setAttribute("class", "cart__product");
					html.setAttribute("data-id", `${id}`);
					html.innerHTML = `
					<img class="cart__product-image" src=${src}>
					<div class="cart__product-count">${quantity}</div>
					<!--<div class="cart__product-delete">Удалить</div>-->
					`;
					cartProducts.appendChild(html);
				}
		})
	}
	//добавление в корзину после нажатия на "+" 
	increment[i].addEventListener('click', () => {	
		++quantity;
		product__quantityValue[i].textContent = quantity;

		product__add[i].addEventListener('click', () => {
			id = product[i].getAttribute('data-id');
			src = image[i].getAttribute('src');			
			let productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
	
				if(productInCart) {
					productInCart.querySelector(".cart__product-count").textContent = quantity;				
				} else {
					let html = document.createElement("div");
					html.setAttribute("class", "cart__product");
					html.setAttribute("data-id", `${id}`);
					html.innerHTML = `
					<img class="cart__product-image" src=${src}>
					<div class="cart__product-count">${quantity}</div>
					<!--<div class="cart__product-delete">Удалить</div>-->
					`;
					cartProducts.appendChild(html);
				}
		})	
	})

	//добавление в корзину после нажатия на "-" 
	decrement[i].addEventListener('click', () => {

		if(quantity > 1) {
			--quantity;
			product__quantityValue[i].textContent = quantity;
		}
		
		product__add[i].addEventListener('click', () => {
			id = product[i].getAttribute('data-id');
			src = image[i].getAttribute('src');			
			let productInCart = cartProducts.querySelector(`[data-id="${id}"]`);
	
				if(productInCart) {
					productInCart.querySelector(".cart__product-count").textContent = quantity;				
				} else {
					let html = document.createElement("div");
					html.setAttribute("class", "cart__product");
					html.setAttribute("data-id", `${id}`);
					html.innerHTML = `
					<img class="cart__product-image" src=${src}>
					<div class="cart__product-count">${quantity}</div>
					<!--<div class="cart__product-delete">Удалить</div>-->
					`;
					cartProducts.appendChild(html);
				}
		})
	})
}
