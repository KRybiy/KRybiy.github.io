//add-to-cart

var productsCountEl = document.getElementById('products-count');
var addToCartButtons = document.querySelectorAll('.addtocart');

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		var prevProductsCount =+productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1
	})
}

//Change like button state

var likeButtons = document.querySelectorAll('.like-image');

for(var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function(){
		if(this.classList.contains("liked")){
			this.classList.remove("liked")
		} else {
			this.classList.add("liked")
		}
	})
	}

// change product quantity

let decrementButton = document.querySelectorAll(".decrement-button")  
let incrementButton = document.querySelectorAll(".increment-button")
let productQuantity = document.querySelectorAll(".quantity-input input")

console.log(decrementButton)
console.log(incrementButton)
console.log(productQuantity)
let minProductCount = 1;
let maxProductCount = 5;

function toggleButtonState(count) {
	decrementButton.disabled = count <= minProductCount
	incrementButton.disabled = count >= maxProductCount
}
// function toggleButtonState(count) {
// 	if(count<=1) {
// 		decrementButton.disabled = true
// 	} else if (count>=5) {
// 		incrementButton.disabled = true
// 	}
// 	else {
// 		decrementButton.disabled = false
// 		incrementButton.disabled = false
// 	}
	
// }




let currentCount = +productQuantity.value
		toggleButtonState(currentCount)

for(let k = 0; k < +incrementButton.length; k++) {
+incrementButton[k].addEventListener("click", function() {
	let currentCount = +productQuantity.value

	let nextCount = +currentCount + 1
	productQuantity.value = nextCount
	toggleButtonState(nextCount)
	console.log(nextCount)
})
}

for(let j = 0; j < +decrementButton.length; j++) {
+decrementButton[j].addEventListener("click", function() {
	let currentCount = +productQuantity.value

	let nextCount = +currentCount - 1
	productQuantity.value = nextCount
	toggleButtonState(nextCount)
})
}



//slider


  $('.slides').slick({
  	dots: true,
  });
