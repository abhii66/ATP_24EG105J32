// ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            const prod = getProductById(productId)
                            // 2. Check stock availability
                            if (!checkStock(productId, quantity)) {
                              return "Not enough stock."
                            }
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            const existingItem = cartItems.find(item => item.productId === productId)

                              if (existingItem) {
                                existingItem.quantity += quantity
                              return "Cart updated."
                             }
                            cartItems.push({
                            productId: prod.id,
                            name: prod.name,
                            price: prod.price,
                            quantity: quantity
                            });

                            return "Added to cart successfully."
                        }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            const index = cartItems.findIndex(item => item.productId === productId)
                            if (index === -1) {
                              return "Product not found in cart."
                            }
                            cartItems.splice(index, 1)
                            return "Product removed successfully."
                            }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            const item = cartItems.find(i => i.productId === productId)
                            if (!item) return "Product not found in cart."
                          // Check stock before updating
                            if (!checkStock(productId, newQuantity)) {
                              return "Not enough stock."
                            }
                            item.quantity = newQuantity;
                            return "Quantity updated successfully."  
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            let total = 0
                            for (const item of cartItems) {
                              total += item.price * item.quantity
                            }
                            // Return total
                            return total
                            }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems.length = 0
                            return "Cart cleared successfully."
                          }