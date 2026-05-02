// Nord Aventure — gestion du panier (localStorage)

const CART_KEY = 'nord-aventure-cart';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Cart parse error', err);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
  showToast('Ajouté au panier');
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function updateQty(id, qty) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(99, qty));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  if (typeof PRODUCTS === 'undefined') return 0;
  return getCart().reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return sum;
    return sum + product.price * item.qty;
  }, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll('[data-cart-badge]');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Toast notifications
function showToast(message) {
  let toast = document.getElementById('na-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'na-toast';
    toast.className = 'na-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('na-toast--visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('na-toast--visible');
  }, 2400);
}

// Format CAD
function formatCAD(amount) {
  // 1 240 $ formatting (espaces insécables, dollar après)
  const rounded = Math.round(amount * 100) / 100;
  const hasDecimals = rounded % 1 !== 0;
  const parts = (hasDecimals ? rounded.toFixed(2) : String(Math.round(rounded))).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join(',') + ' $';
}

// Init badge on load
document.addEventListener('DOMContentLoaded', updateCartBadge);

// Expose
if (typeof window !== 'undefined') {
  window.NACart = {
    getCart, addToCart, removeFromCart, updateQty,
    clearCart, getCartCount, getCartTotal,
    updateCartBadge, showToast, formatCAD
  };
}
