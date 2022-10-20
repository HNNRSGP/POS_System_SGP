if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // var changeprice = document.getElementsByClassName('size-select-s')
    // for (var i = 0; i < changeprice.length; i++) {
    //     var button = changeprice[i]
    //     button.addEventListener('click', selectPrice)
    // }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

    document.getElementsByClassName('btn-clear')[0].addEventListener('click', clearCart)

    // document.getElementsByClassName('size-select-s')[0].addEventListener('click', selectPrice)
    // document.getElementsByClassName('size-select-m')[0].addEventListener('click', selectPrice)
    // document.getElementsByClassName('size-select-l')[0].addEventListener('click', selectPrice)
}

// function selectPrice(event) {
//     var button = event.traget
//     var shopItem = button.parentElement
//     shopItem.getElementsByClassName('shop-item-price')[0].innerText = "$2.33"
// }

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function clearCart() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="25" height="25">
            <span><span class="cart-item-title">${title}</span>
            <span><textarea cols="5" rows="1" placeholder="notes"></textarea></span></span>
        </div>
        <span class="cart-price cart-column">   ${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">X</button>
        </div>`
        // <font-awesome-icon icon="fa-sharp fa-solid fa-trash" />
        // <i class="fa-sharp fa-solid fa-trash fa-color"></i>
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var totalitems = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        totalitems = totalitems + parseInt(quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-items-value')[0].innerText = totalitems
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function validateForm(){
    let x = document.forms["loginform"]["username"].value;
    let y = document.forms["loginform"]["password"].value;
    if(x==""){
        alert("Username must be filled out");
        return false;
    }
    if(y==""){
        alert("Password must be filled out");
        return false;
    }
    if(x=="Nish" && y=="Nish"){
        location.replace("C:/ Users/Nish Patel/OneDrive/Desktop/POS system/POSRestu.html");
        return true;
    }
    alert("invalid username or password")
    return false;
}