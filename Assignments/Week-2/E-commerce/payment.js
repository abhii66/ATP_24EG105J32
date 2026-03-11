//  iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const cartItems = getCartItems()
                            const subtotal = getCartTotal()
                            // 2. Apply discount if coupon provided
                            let discount = 0
                            let total = subtotal
                            if (couponCode) {
                            const result = applyDiscount(subtotal, couponCode, cartItems);
                            discount = result.discount
                            total = result.finalTotal
                            }
                            // 3. Validate payment method (card/upi/cod)
                            if (!validatePaymentMethod(paymentMethod)) {
                                return {
                                    status: "failed",
                                    message: "Invalid payment method."
                                }
                            }
                            // 4. Process payment (simulate)
                            const status = "success"
                            // 5. Reduce stock for all items
                            for (let item of cartItems) {
                            reduceStock(item.id, item.stock)
                            }
                            // 6. Clear cart
                            clearCart()
                            // 7. Generate order summary
                            const orderSummary = {
                                orderId: generateOrderId(),
                                items: cartItems,
                                subtotal: subtotal,
                                discount: discount,
                                total: total,
                                paymentMethod: paymentMethod,
                                status: status,
                                message: "Order successful."
                            };
                            // Return order summary:
                            return orderSummary
                            }
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                            const validMethods = ["card", "upi", "cod"];
                            if (validMethods.includes(method)) {
                                return true;
                            }
                            return false;
                            }
                            function generateOrderId() {
                                return "ORD" + Date.now();
                            }
                        