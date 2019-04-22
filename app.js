var productsCountEl = document.getElementById('products-count')

console.log(productsCountEl)

var addToCartButtons = document.querySelectorAll('.addtocart')


console.log(addToCartButtons)

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function(){
		var prevProductsCount =+productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1
	})
}



var like = document.querySelectorAll('.like-image')

console.log(like)


function forLike() {
like.addEventListener("click", function() {
	like = document.querySelectorAll('.like-image:hover')
})
}