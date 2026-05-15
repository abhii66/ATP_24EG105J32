/**
 * Main Application Module
 * Logic flow: Discovery -> Cart Management -> Checkout
 */

import { 
    getAllProducts, 
    searchProducts 
} from './product.js';

import { 
    addToCart, 
    getCartItems, 
    getCartTotal, 
    updateQuantity, 
    removeFromCart 
} from './cart.js';

import { processPayment } from './payment.js';

// --- 1. Product Discovery Phase ---
console.group('Browsing Catalog');
const inventory = getAllProducts();
const searchResult = searchProducts('phone');

console.log('Available Inventory:', inventory);
console.log('Search Results:', searchResult);
console.groupEnd();

// --- 2. Cart Interaction Phase ---
console.group('Cart Operations');
addToCart(1, 2); 
addToCart(3, 3); 
addToCart(1, 1); // Update via addition

updateQuantity(1, 2); 
removeFromCart(3);    
console.groupEnd();

// --- 3. Finalization Phase ---
console.group('Checkout');
const currentCart = getCartItems();
const total = getCartTotal();

console.log('Items for Purchase:', currentCart);
console.log('Final Total:', total);

const orderReceipt = processPayment('upi', 'WELCOME10');
console.log('Order Summary:', orderReceipt);
console.groupEnd();
