//  iii. discount.js - Coupon and discount logic
                          // Available coupons
                          const coupons = [{
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          }
                        ]
                          
                          // TODO: Implement these functions
                            
                            export function validateCoupon(couponCode, cartTotal, cartItems) {
                                // 1. Check if coupon exists
                                const foundCoupon = coupons.find(c => c.code === couponCode)
                                if (!foundCoupon) {
                                    return { valid: false, message: "Invalid coupon code." }
                                }
                                // 2. Check minimum amount requirement
                                if (cartTotal < foundCoupon.minAmount) {
                                    return { valid: false, message: "Minimum amount not reached." }
                                }
                                // 3. Check category requirement (if any)
                                if (foundCoupon.category) {
                                    const hasCategoryItem = cartItems.some(item => item.category === foundCoupon.category)
                                    if (!hasCategoryItem) {
                                        return { valid: false, message: "Coupon not applicable for these products." }
                                    }
                                }
                                return { valid: true, message: "Coupon applied successfully." }
                                }
                            export function calculateDiscount(couponCode, cartTotal) {
                                // Calculate discount amount based on coupon type
                                const foundCoupon = coupons.find(c => c.code === couponCode)
                                if (!foundCoupon) return 0
                                if (foundCoupon.type === "percentage") {
                                    return (cartTotal * foundCoupon.value) / 100
                                }
                                if (foundCoupon.type === "fixed") {
                                    return foundCoupon.value
                                }
                                return 0
                                }
                            export function applyDiscount(cartTotal, couponCode, cartItems) {
                                // 1. Validate coupon
                                const validation = validateCoupon(couponCode, cartTotal, cartItems)
                                if (!validation.valid) {
                                    return {
                                        originalTotal: cartTotal,
                                        discount: 0,
                                        finalTotal: cartTotal,
                                        message: validation.message
                                    }
                                }
                                // 2. If valid, calculate discount
                                const discountAmount = calculateDiscount(couponCode, cartTotal)
                                const finalAmount = cartTotal - discountAmount
                                // 3. Return final amount and discount details
                                return {
                                    originalTotal: cartTotal,
                                    discount: discountAmount,
                                    finalTotal: finalAmount,
                                    message: "Discount applied successfully."
                                }
                            }