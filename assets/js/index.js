let cart = [];
let subtotal = 0;
let total = 0;

function addToCart(item, price) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].item === item) {
      cart[i].quantity++;
      cart[i].subtotal = cart[i].quantity * cart[i].price;
      found = true;
      break;
    }
  }
  if (!found) {
    cart.push({ item, price, quantity: 1, subtotal: price });
  }
  subtotal += price;
  total = subtotal;
  showCart();
}

function removeFromCart(index) {
  let item = cart[index].item;
  let price = cart[index].price;
  let quantity = cart[index].quantity;
  cart.splice(index, 1);
  subtotal -= price * quantity;
  total = subtotal;
  showCart();
}

function clearCart() {
  cart = [];
  subtotal = 0;
  total = 0;
  showCart();
}

function showCart() {
  let cartList = document.getElementById('cart');
  let subtotalSpan = document.getElementById('subtotal');
  let totalSpan = document.getElementById('total');
  cartList.innerHTML = '';
  if (cart.length === 0) {
    cartList.innerHTML = '<li>Seu carrinho está vazio.</li>';
  } else {
    for (let i = 0; i < cart.length; i++) {
      let li = document.createElement('li');
      li.innerHTML =
        cart[i].item +
        ' - R$ ' +
        cart[i].price.toFixed(2) +
        ' x ' +
        cart[i].quantity +
        ' = R$ ' +
        cart[i].subtotal.toFixed(2) +
        ' <button onclick="removeFromCart(' +
        i +
        ')">Remover do Carrinho</button>';
      cartList.appendChild(li);
    }
  }
  subtotalSpan.innerHTML = subtotal.toFixed(2);
  totalSpan.innerHTML = total.toFixed(2);
}
