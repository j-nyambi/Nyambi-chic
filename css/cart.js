<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>

    <div class="product">
        <div class="image">
            <img src="./products page_files/picture1.jpeg" alt="">
        </div>
        <div class="react">
            <a href="#" class="addToCart">  <i class="carti fa-solid fa-cart-shopping"></i> </a>
            <a href="file:///C:/Users/USER/Desktop/Nyambi%20chic/cart%20page.html">  <i class="ht fa-solid fa-heart"></i></a>
        </div>
        <div class="namePrice">

            <h3 class="productName">watch</h3>
            <span class="priceValue"> 500</span>
        </div>
        <p class="product-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div class="bay">
            <button> More Info</button>
        </div>
    </div>


    <!----------------------------------cart---------------------------->
    <div class="cart-container">
        <i class="fa-solid fa-cart-shopping"></i>
        <h2>My cart</h2>
        <div class="cart-row">
            <span class="productName cart-header cart-column">ITEM</span>
            <span class="productName cart-header cart-column"> ~.~</span>
            <span class="priceValue cart-header cart-column">PRICE</span>
        </div>
        <div class="cart-items">
            <!-- Cart items will be  added here -->
            <div id="empty-cart-message">
                <p>Cart is empty.</p>
            </div>

        </div>
        <div class="cart-total">
            <strong class="cart-total-title">Total: R</strong>
            <span id="cart-total"></span>
        </div>
        <button class="checkout-button btn-purchase" type="button">Checkout</button>
    </div>


    <script>cart.js</script>
</body>
</html>