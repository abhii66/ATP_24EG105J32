// E-Commerce Shopping Cart System :
//       Building a shopping cart like Amazon or Flipkart

// Requirements:
//       Create a modular shopping system with 5 files:

//            i. product.js - Product catalog
                          // Product database (simulated)
                          const products = [
                            { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                            { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                            { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                            { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                            { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                          ];
                          
                          // TODO: Implement these functions
                          
                          export function getProductById(id) {
                            let prod=products.find(element => element.id===id)
                            return prod
                          }
                          
                          export function getAllProducts() {
                            return products
                          }
                          
                          export function getProductsByCategory(category) {
                            let prod=products.filter(element => element.category===category)
                            return prod
                          }
                          
                          export function searchProducts(query) {
                            // Search products by name (case-insensitive)
                            let prod=products.find(element => element.name.toLowerCase()===query.toLowerCase())
                            return prod
                          }
                          
                          export function checkStock(productId, quantity) {
                            // Check if product has enough stock
                            let foundd=products.find(element => element.id===productId)
                            if(!foundd)
                                return false
                            if(foundd.stock>=quantity)
                                return true
                            return false
                            // Return true/false
                          }
                          
                          export function reduceStock(productId, quantity) {
                            let foundd=products.find(element => element.id===productId)
                            if(!foundd) return "product with the given id not found."
                            if(foundd.stock<quantity)
                            return "Not enough stock."
                            // Reduce product stock after purchase
                            foundd.stock-=quantity
                            return "Stock Updated."
                          }