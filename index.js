var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: randomPrice()})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  
  let descriptionOfItems = cart.map(item => `${item.itemName} at $${item.itemPrice}`)
  if (cart.length > 1) {
    const removedLastItemDescription = `, and ${descriptionOfItems.pop()}`
    descriptionOfItems = descriptionOfItems.join(', ') + removedLastItemDescription
  }
  const descriptionOfCart = `In your cart, you have ${descriptionOfItems}.`
  return descriptionOfCart
  
}

function total() {
  // write your code here
  return cart.reduce((accumulator, item) => {
    return accumulator + item.itemPrice
  }, 0)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function randomPrice() {
  return Math.floor((Math.random() * 100) + 1)
}
