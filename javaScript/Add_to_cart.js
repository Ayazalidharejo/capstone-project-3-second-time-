let cart = [];

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <img src="${item.img}" alt="${item.name}" style="width: 90px; height: 90px;" class="me-3">
                <div class="flex-grow-1">${item.name} - $${item.price} x ${item.quantity}</div>
                <div>
                    <button class="btn mb-2 btn-sm btn-danger" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-success" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <hr/>
        `;
    });

    updateTotalPrice(); // Ensure total price updates
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        const productImg = this.getAttribute('data-img');

        const listitem = cart.find(item => item.name === productName);

        if (listitem) {
            listitem.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                img: productImg,
                quantity: 1
            });
        }

        updateCartDisplay();
        updateCartQuantityBadge(); // Update badge for total items in cart
    });
});

function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
    updateCartQuantityBadge(); // Update badge for total items in cart
}

function updateCartQuantityBadge() {
    const cartQuantityBadge = document.getElementById('cartQuantityBadge');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartQuantityBadge.innerText = totalItems;
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    totalPriceElement.innerText = `$${totalPrice}`;
}

// Example HTML structure for a product card
// <div class="card-body">
//     <img class="img-fluid" src="./images/1.jpg" alt="Image of a carton of eggs" height="100" width="150" />
//     <div class="badge bg-light text-secondary border border-secondary rounded-pill mb-2">Betterfoods</div>
//     <h6 class="card-title text-secondary fw-semibold">Zesco Ripe Bananas</h6>
//     <p class="card-text text-secondary">350g</p>
//     <div class="d-flex align-items-center mb-2">
//         <span class="text-warning"></span>
//         <span class="ms-2 fw-semibold">3</span>
//         <span class="text-warning">
//             <iconify-icon icon="line-md:star-filled"></iconify-icon>
//             <iconify-icon icon="line-md:star-filled"></iconify-icon>
//             <iconify-icon icon="line-md:star-filled"></iconify-icon>
//             <iconify-icon class="text-secondary" icon="line-md:star-filled"></iconify-icon>
//             <iconify-icon class="text-secondary" icon="line-md:star-filled"></iconify-icon>
//         </span>
//     </div>
//     <p class="text-danger fs-5 fw-bold">$120.00</p>
//
//     <button 
//         class="btn btn-success text-white fw-bold px-4 add-to-cart-btn"
//         data-name="Zesco Ripe Bananas" 
//         data-price="120.00"  // Correct attribute for price
//         data-img="./images/1.jpg"
//         data-made="Betterfoods"
//     >
//         <iconify-icon icon="bxs:cart"></iconify-icon>
//         <span class="fw-semibold">Add to cart</span>
//     </button>
// </div>
