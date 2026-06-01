// Default curated products list
const defaultProducts = [
  {
    id: "saree-1",
    title: "Classic Ivory Linen Saree with Gold Zari Border",
    description: "Woven in premium linen fabric, this elegant ivory saree features a rich golden zari border and delicate hand-loomed motifs. Breathable, classy, and perfect for summer festivities.",
    price: 2499,
    discountPrice: 2999,
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
    badge: "Handloom",
    rating: 5,
    inStock: true
  },
  {
    id: "saree-2",
    title: "Blush Peach Floral Printed Cotton Linen Saree",
    description: "Soft peach linen base decorated with handblock floral motifs. Includes a contrasting mint green blouse piece. Crafted with love, highlighting traditional printing techniques.",
    price: 1850,
    discountPrice: 2400,
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    rating: 4,
    inStock: true
  },
  {
    id: "saree-3",
    title: "Midnight Indigo Blue Linen Saree with Silver Highlights",
    description: "Deep indigo linen saree featuring striped silver threads on the pallu. Made from highly breathable linen blend, ideal for both professional office attire and evening dinners.",
    price: 2200,
    discountPrice: null,
    imageUrl: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=600&q=80",
    badge: "Trending",
    rating: 5,
    inStock: true
  },
  {
    id: "saree-4",
    title: "Marigold Yellow Handloom Zari Saree",
    description: "Vibrant yellow cotton-linen weave featuring gold zari borders. Light, airy, and full of traditional warmth. Comes with a matching yellow blouse piece with zari border accents.",
    price: 2750,
    discountPrice: 3500,
    imageUrl: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=600&q=80",
    badge: "New Arrival",
    rating: 5,
    inStock: true
  },
  {
    id: "saree-5",
    title: "Crimson Rose Linen Blend Weave",
    description: "Sophisticated crimson pink canvas highlighted with horizontal zari stripes. Lightweight handloom drape that stays crisp and beautiful all day long.",
    price: 1999,
    discountPrice: 2800,
    imageUrl: "https://images.unsplash.com/photo-1610030469933-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    rating: 4,
    inStock: true
  },
  {
    id: "saree-6",
    title: "Mint Sage Green Floral Embroidery Saree",
    description: "A pastel green linen saree displaying embroidered rose vines on the border. Designed to give an exceptionally light and breezy appearance.",
    price: 3100,
    discountPrice: null,
    imageUrl: "https://images.unsplash.com/photo-1610030470298-40b8a1c2aa64?auto=format&fit=crop&w=600&q=80",
    badge: "New Arrival",
    rating: 5,
    inStock: true
  },
  {
    id: "saree-7",
    title: "Pastel Pink Linen Saree with Tassel Pallu",
    description: "Delightful pink base with silver border threads and hand-tied tassels. An essential summer addition for saree lovers looking for effortless draping.",
    price: 1399,
    discountPrice: 1999,
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
    badge: "Sale",
    rating: 4,
    inStock: true
  },
  {
    id: "saree-8",
    title: "Traditional Mustard Kanchi Border Cotton Linen",
    description: "Combining cotton comfort with linen texture, this mustard saree is borders with heavy geometric zari shapes. Rich styling and robust weaving structure.",
    price: 2950,
    discountPrice: 3800,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    badge: "Handloom",
    rating: 5,
    inStock: false
  }
];

// Fallback placeholder image if URL fails
const fallbackImage = "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80";

// Application State
let products = [];
let cart = [];
let activeTheme = 'scheme-1';

// DOM Element Selectors
const productGrid = document.getElementById('product-grid');
const totalProductCountEl = document.getElementById('total-product-count');
const searchInput = document.getElementById('search-input');
const filterBadge = document.getElementById('filter-badge');
const filterPrice = document.getElementById('filter-price');
const sortBy = document.getElementById('sort-by');

// Theme Elements
const themePanel = document.getElementById('theme-panel');
const themeTrigger = document.getElementById('theme-trigger');
const themeOptButtons = document.querySelectorAll('.theme-opt-btn');

// Cart Elements
const cartTrigger = document.getElementById('cart-trigger');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartClose = document.getElementById('cart-close');
const cartItemsList = document.getElementById('cart-items-list');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Modals
const quickViewModal = document.getElementById('quick-view-modal');
const quickViewClose = document.getElementById('quick-view-close');
const qvImage = document.getElementById('qv-image');
const qvTitle = document.getElementById('qv-title');
const qvBadge = document.getElementById('qv-badge');
const qvRating = document.getElementById('qv-rating');
const qvPrice = document.getElementById('qv-price');
const qvPriceOriginal = document.getElementById('qv-price-original');
const qvDescription = document.getElementById('qv-description');
const qvStockStatus = document.getElementById('qv-stock-status');
const qvAddToCartBtn = document.getElementById('qv-add-to-cart');

const manageModal = document.getElementById('manage-modal');
const manageClose = document.getElementById('manage-close');
const navManage = document.getElementById('nav-manage');
const navShop = document.getElementById('nav-shop');
const footerManageLink = document.getElementById('footer-manage-link');

// Tabs inside Manage Modal
const tabButtons = document.querySelectorAll('.dashboard-tab');
const tabPanels = document.querySelectorAll('.dashboard-panel');
const manualUploadForm = document.getElementById('manual-upload-form');
const resetCatalogBtn = document.getElementById('reset-catalog-btn');

// CSV Elements
const csvDropzone = document.getElementById('csv-dropzone');
const csvFileInput = document.getElementById('csv-file-input');
const downloadCsvTemplate = document.getElementById('download-csv-template');

// Selected quick-view product ID
let activeQuickViewId = null;

// Initial Setup & Event Listeners
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTheme();
  renderProducts();
  renderCart();
  setupEventListeners();
});

// Load state from localStorage or defaults
function loadState() {
  const savedProducts = localStorage.getItem('saaj_products');
  if (savedProducts) {
    products = JSON.parse(savedProducts);
  } else {
    products = [...defaultProducts];
    localStorage.setItem('saaj_products', JSON.stringify(products));
  }

  const savedCart = localStorage.getItem('saaj_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [];
  }

  const savedTheme = localStorage.getItem('saaj_theme');
  if (savedTheme) {
    activeTheme = savedTheme;
  }
}

// Save products to localStorage and render
function saveProducts() {
  localStorage.setItem('saaj_products', JSON.stringify(products));
  renderProducts();
}

// Save cart to localStorage and render
function saveCart() {
  localStorage.setItem('saaj_cart', JSON.stringify(cart));
  renderCart();
}

// Initialize Theme from state
function initTheme() {
  document.documentElement.setAttribute('data-theme', activeTheme);
  themeOptButtons.forEach(btn => {
    if (btn.getAttribute('data-scheme') === activeTheme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Show Toast Alert
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close">&times;</button>
  `;

  // Attach dismiss event
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Set up UI triggers
function setupEventListeners() {
  // Theme Toggle dropdown trigger
  themeTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    themePanel.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    themePanel.classList.remove('open');
  });

  themePanel.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Switch Theme on selection
  themeOptButtons.forEach(button => {
    button.addEventListener('click', () => {
      const scheme = button.getAttribute('data-scheme');
      activeTheme = scheme;
      localStorage.setItem('saaj_theme', activeTheme);
      initTheme();
      themePanel.classList.remove('open');
      showToast(`Switched to Theme Scheme ${scheme.split('-')[1]}`, 'success');
    });
  });

  // Cart Drawer open/close
  cartTrigger.addEventListener('click', () => {
    cartDrawerOverlay.classList.add('active');
  });

  cartClose.addEventListener('click', () => {
    cartDrawerOverlay.classList.remove('active');
  });

  cartDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('active');
    }
  });

  // Manage Catalog Modals
  navManage.addEventListener('click', (e) => {
    e.preventDefault();
    openManageModal();
  });
  footerManageLink.addEventListener('click', (e) => {
    e.preventDefault();
    openManageModal();
  });
  manageClose.addEventListener('click', () => {
    closeManageModal();
  });
  manageModal.addEventListener('click', (e) => {
    if (e.target === manageModal) closeManageModal();
  });

  // Quick View modals
  quickViewClose.addEventListener('click', () => {
    quickViewModal.classList.remove('active');
  });
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) {
      quickViewModal.classList.remove('active');
    }
  });

  // Navigation Links Active State
  navShop.addEventListener('click', (e) => {
    e.preventDefault();
    navShop.classList.add('active');
    navManage.classList.remove('active');
    window.scrollTo({ top: document.querySelector('.catalog-controls').offsetTop - 120, behavior: 'smooth' });
  });

  const btnExplore = document.getElementById('btn-explore');
  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      window.scrollTo({ top: document.querySelector('.catalog-controls').offsetTop - 120, behavior: 'smooth' });
    });
  }

  // Sort & Filter inputs
  searchInput.addEventListener('input', () => renderProducts());
  filterBadge.addEventListener('change', () => renderProducts());
  filterPrice.addEventListener('change', () => renderProducts());
  sortBy.addEventListener('change', () => renderProducts());

  // Dashboard modal tabs switching
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Form submits - add manual product
  manualUploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProductManual();
  });

  // Drag and drop CSV upload
  csvDropzone.addEventListener('click', () => csvFileInput.click());
  csvFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleCsvFile(e.target.files[0]);
    }
  });

  csvDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    csvDropzone.classList.add('drag-over');
  });

  csvDropzone.addEventListener('dragleave', () => {
    csvDropzone.classList.remove('drag-over');
  });

  csvDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    csvDropzone.classList.remove('drag-over');
    if (e.dataTransfer.files.length > 0) {
      handleCsvFile(e.dataTransfer.files[0]);
    }
  });

  // Sample CSV template download link
  downloadCsvTemplate.addEventListener('click', (e) => {
    e.preventDefault();
    generateSampleCsvTemplate();
  });

  // Checkout trigger
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }
    showToast('🎉 Thank you for your purchase! Checkout completed successfully.', 'success');
    cart = [];
    saveCart();
    cartDrawerOverlay.classList.remove('active');
  });

  // Quick View Add to Cart
  qvAddToCartBtn.addEventListener('click', () => {
    if (activeQuickViewId) {
      addToCart(activeQuickViewId);
      quickViewModal.classList.remove('active');
    }
  });

  // Reset catalog to curated default
  resetCatalogBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to restore the curated defaults? This will erase all manually added and CSV imported products.')) {
      products = [...defaultProducts];
      saveProducts();
      closeManageModal();
      showToast('Restored original 8 curated linen sarees!', 'success');
    }
  });
}

function openManageModal() {
  manageModal.classList.add('active');
  navManage.classList.add('active');
  navShop.classList.remove('active');
}

function closeManageModal() {
  manageModal.classList.remove('active');
  navManage.classList.remove('active');
  navShop.classList.add('active');
}

// Render product list with active filters and sorting
function renderProducts() {
  // Get filter values
  const query = searchInput.value.toLowerCase().trim();
  const badgeVal = filterBadge.value;
  const priceVal = filterPrice.value;
  const sortVal = sortBy.value;

  // Filter items
  let filtered = products.filter(p => {
    // Search query match
    const matchesSearch = p.title.toLowerCase().includes(query) || 
                          p.description.toLowerCase().includes(query) ||
                          (p.badge && p.badge.toLowerCase().includes(query));

    // Badge filter
    let matchesBadge = true;
    if (badgeVal !== 'all') {
      matchesBadge = p.badge && p.badge.toLowerCase() === badgeVal;
    }

    // Price Filter
    let matchesPrice = true;
    if (priceVal === 'under-1500') {
      matchesPrice = p.price < 1500;
    } else if (priceVal === '1500-2500') {
      matchesPrice = p.price >= 1500 && p.price <= 2500;
    } else if (priceVal === 'above-2500') {
      matchesPrice = p.price > 2500;
    }

    return matchesSearch && matchesBadge && matchesPrice;
  });

  // Sort items
  if (sortVal === 'price-low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'alphabetical') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Update showing label
  totalProductCountEl.textContent = `Showing ${filtered.length} of ${products.length} products`;

  // Draw list
  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 24px; color: var(--text-secondary);">
        <p style="font-size: 20px; font-family: var(--font-heading); margin-bottom: 8px;">No matching sarees found</p>
        <p style="font-size: 14px;">Try clearing search text or adjusting filters.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = '';
  filtered.forEach(p => {
    // Create element
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = p.id;

    // Price tags structure
    let pricesHtml = `<span class="card-price">₹${p.price.toLocaleString('en-IN')}</span>`;
    if (p.discountPrice && p.discountPrice > p.price) {
      pricesHtml += `<span class="card-price-original">₹${p.discountPrice.toLocaleString('en-IN')}</span>`;
    }

    // Badge structure
    const badgeHtml = p.badge ? `<span class="card-badge">${p.badge}</span>` : '';

    // Rating structure
    let ratingStars = '';
    for (let s = 1; s <= 5; s++) {
      ratingStars += s <= p.rating ? '★' : '☆';
    }

    // In Stock status
    const stockHtml = p.inStock 
      ? `<span class="card-stock-status stock-in">In Stock</span>` 
      : `<span class="card-stock-status stock-out">Out of Stock</span>`;

    // Render card
    card.innerHTML = `
      ${badgeHtml}
      <div class="card-img-wrapper">
        <img class="card-img" src="${p.imageUrl || fallbackImage}" alt="${p.title}" onerror="this.onerror=null; this.src='${fallbackImage}';">
        <div class="card-actions-overlay">
          <button class="btn-card btn-card-primary add-to-cart-btn" ${!p.inStock ? 'disabled' : ''}>
            ${p.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
          <button class="btn-card btn-card-secondary quick-view-btn">Quick View</button>
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-rating">
          ${ratingStars}
          <span class="card-rating-text">(${p.rating}.0)</span>
        </div>
        <div class="card-price-wrapper">
          ${pricesHtml}
        </div>
        ${stockHtml}
      </div>
    `;

    // Connect overlay buttons
    card.querySelector('.quick-view-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(p.id);
    });

    card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p.id);
    });

    productGrid.appendChild(card);
  });
}

// Add manual product to state
function addNewProductManual() {
  const title = document.getElementById('prod-title').value.trim();
  const desc = document.getElementById('prod-desc').value.trim();
  const price = parseFloat(document.getElementById('prod-price').value);
  const discountPriceVal = document.getElementById('prod-discount-price').value;
  const discountPrice = discountPriceVal ? parseFloat(discountPriceVal) : null;
  const badge = document.getElementById('prod-badge').value;
  const rating = parseInt(document.getElementById('prod-rating').value, 10);
  const imageUrlInput = document.getElementById('prod-image').value.trim();
  const imageUrl = imageUrlInput || fallbackImage;
  const inStock = document.getElementById('prod-stock').checked;

  const newProduct = {
    id: `saree-custom-${Date.now()}`,
    title,
    description: desc || 'Woven with exceptional precision and traditional craftsmanship.',
    price,
    discountPrice,
    imageUrl,
    badge,
    rating,
    inStock
  };

  products.unshift(newProduct);
  saveProducts();
  
  // Clean Form
  manualUploadForm.reset();
  closeManageModal();
  showToast(`Successfully added "${title}" to your catalog!`, 'success');
}

// Drag & Drop CSV Handler
function handleCsvFile(file) {
  if (!file.name.endsWith('.csv')) {
    showToast('Invalid file format. Please upload a CSV file.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const csvContent = e.target.result;
    parseAndImportCSV(csvContent);
  };
  reader.onerror = function() {
    showToast('Failed to read the file.', 'error');
  };
  reader.readAsText(file, 'UTF-8');
}

// Custom CSV Parser supporting quoted cells
function customCSVParser(text) {
  const rows = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push("");
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      rows.push(row);
      row = [""];
    } else {
      row[row.length - 1] += char;
    }
  }
  
  if (row.length > 1 || row[0] !== "") {
    rows.push(row);
  }
  
  return rows;
}

// Parse CSV content and append to products
function parseAndImportCSV(content) {
  try {
    const parsedRows = customCSVParser(content);
    if (parsedRows.length < 2) {
      showToast('The CSV file is empty or missing data lines.', 'error');
      return;
    }

    // Extract & normalize header labels
    const headers = parsedRows[0].map(h => h.trim().toLowerCase().replace(/[\s_]+/g, ''));
    
    // Header Column Indices
    const colIndex = {
      title: headers.indexOf('title'),
      description: headers.indexOf('description'),
      price: headers.indexOf('price'),
      discountPrice: headers.indexOf('discountprice'),
      imageUrl: headers.indexOf('imageurl'),
      badge: headers.indexOf('badge'),
      rating: headers.indexOf('rating'),
      inStock: headers.indexOf('instock')
    };

    // If headers cannot be resolved, fall back to default order
    const isHeaderValid = colIndex.title !== -1 && colIndex.price !== -1;
    let fallbackMapping = false;

    if (!isHeaderValid) {
      fallbackMapping = true;
      showToast('Format mismatch: Standard headers not found. Using position fallback.', 'error');
    }

    let addedCount = 0;
    const newItems = [];

    for (let r = 1; r < parsedRows.length; r++) {
      const row = parsedRows[r];
      // Skip empty line
      if (row.length === 0 || (row.length === 1 && row[0] === '')) continue;

      let title = '';
      let description = '';
      let price = 0;
      let discountPrice = null;
      let imageUrl = '';
      let badge = '';
      let rating = 5;
      let inStock = true;

      if (!fallbackMapping) {
        title = colIndex.title !== -1 ? row[colIndex.title] : '';
        description = colIndex.description !== -1 ? row[colIndex.description] : '';
        
        const priceStr = colIndex.price !== -1 ? row[colIndex.price] : '0';
        price = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;

        const discStr = colIndex.discountPrice !== -1 ? row[colIndex.discountPrice] : '';
        if (discStr && discStr.trim() !== '') {
          discountPrice = parseFloat(discStr.replace(/[^0-9.]/g, '')) || null;
        }

        imageUrl = colIndex.imageUrl !== -1 ? row[colIndex.imageUrl] : '';
        badge = colIndex.badge !== -1 ? row[colIndex.badge] : '';
        
        const ratingStr = colIndex.rating !== -1 ? row[colIndex.rating] : '5';
        rating = parseInt(ratingStr, 10) || 5;

        const stockStr = colIndex.inStock !== -1 ? row[colIndex.inStock].toLowerCase().trim() : 'true';
        inStock = !(stockStr === 'false' || stockStr === 'no' || stockStr === '0');
      } else {
        // Fallback column positions
        title = row[0] || '';
        description = row[1] || '';
        price = parseFloat(row[2]) || 0;
        discountPrice = parseFloat(row[3]) || null;
        imageUrl = row[4] || '';
        badge = row[5] || '';
        rating = parseInt(row[6], 10) || 5;
        inStock = row[7] ? !(row[7].toLowerCase().trim() === 'false') : true;
      }

      // Skip invalid items (needs a title and price)
      if (!title || price <= 0) continue;

      newItems.push({
        id: `saree-csv-${Date.now()}-${r}`,
        title: title.trim(),
        description: description.trim() || 'A beautiful, premium traditional weave.',
        price,
        discountPrice,
        imageUrl: imageUrl.trim() || fallbackImage,
        badge: badge.trim() || null,
        rating: Math.min(5, Math.max(1, rating)),
        inStock
      });

      addedCount++;
    }

    if (newItems.length === 0) {
      showToast('No valid products found. Ensure Title and Price are provided.', 'error');
      return;
    }

    // Append to list and save
    products = [...newItems, ...products];
    saveProducts();
    closeManageModal();
    showToast(`Successfully imported ${addedCount} products!`, 'success');
  } catch (err) {
    console.error(err);
    showToast('Failed to parse CSV. Check file structure.', 'error');
  }
}

// Generate sample CSV file
function generateSampleCsvTemplate() {
  const csvContent = 
`Title,Description,Price,DiscountPrice,ImageUrl,Badge,Rating,InStock
"Indigo Handblock Printed Linen Saree","Handcrafted with indigo print pattern and dynamic colors",1650,2200,"https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=600&q=80","Trending",5,true
"Emerald Zari Silk-Linen Blend","Elegant dark emerald saree with heavy golden border zari",2890,3900,"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80","Handloom",5,true
"Soft Lavender Linen Drape","Beautiful solid lavender linen matching lightweight standards",1400,,,"Sale",4,true
"Crimson Stripes Handloom Weave","Fine linen stripes in bold red color gradients",1950,2500,"https://images.unsplash.com/photo-1610030469933-98e550d6193c?auto=format&fit=crop&w=600&q=80","",5,false`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "saaj_saree_template.csv");
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Cart Management Actions
function renderCart() {
  // Update badge count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your shopping cart is empty</p>
      </div>
    `;
    cartSubtotal.textContent = '₹0.00';
    cartTotal.textContent = '₹0.00';
    return;
  }

  // Generate cart HTML
  cartItemsList.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img class="cart-item-img" src="${product.imageUrl || fallbackImage}" alt="${product.title}" onerror="this.onerror=null; this.src='${fallbackImage}';">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${product.title}</h4>
        <div class="cart-item-price">₹${product.price.toLocaleString('en-IN')}</div>
        <div class="cart-item-controls">
          <div class="quantity-selector">
            <button class="quantity-btn dec-qty-btn">&minus;</button>
            <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" aria-label="Quantity">
            <button class="quantity-btn inc-qty-btn">&plus;</button>
          </div>
          <button class="btn-remove remove-cart-btn">Remove</button>
        </div>
      </div>
    `;

    // Bind item controls
    cartItem.querySelector('.dec-qty-btn').addEventListener('click', () => {
      updateCartQuantity(item.productId, item.quantity - 1);
    });
    cartItem.querySelector('.inc-qty-btn').addEventListener('click', () => {
      updateCartQuantity(item.productId, item.quantity + 1);
    });
    cartItem.querySelector('.quantity-input').addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10) || 1;
      updateCartQuantity(item.productId, val);
    });
    cartItem.querySelector('.remove-cart-btn').addEventListener('click', () => {
      removeFromCart(item.productId);
    });

    cartItemsList.appendChild(cartItem);
  });

  // Calculate subtotals
  cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  cartTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (!product.inStock) {
    showToast('This item is currently sold out.', 'error');
    return;
  }

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  saveCart();
  cartDrawerOverlay.classList.add('active'); // Slide-open cart drawer
  showToast(`Added "${product.title}" to cart!`, 'success');
}

function updateCartQuantity(productId, quantity) {
  const existing = cart.find(item => item.productId === productId);
  if (!existing) return;

  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  existing.quantity = Math.min(99, Math.max(1, quantity));
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  showToast('Item removed from cart.', 'success');
}

// Quick View Loader
function openQuickView(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  activeQuickViewId = productId;

  // Set Details
  qvImage.src = p.imageUrl || fallbackImage;
  qvTitle.textContent = p.title;
  qvDescription.textContent = p.description;
  
  if (p.badge) {
    qvBadge.textContent = p.badge;
    qvBadge.style.display = 'inline-block';
  } else {
    qvBadge.style.display = 'none';
  }

  // Price layout
  qvPrice.textContent = `₹${p.price.toLocaleString('en-IN')}`;
  if (p.discountPrice && p.discountPrice > p.price) {
    qvPriceOriginal.textContent = `₹${p.discountPrice.toLocaleString('en-IN')}`;
    qvPriceOriginal.style.display = 'inline';
  } else {
    qvPriceOriginal.style.display = 'none';
  }

  // Stock Layout
  if (p.inStock) {
    qvStockStatus.textContent = 'In Stock';
    qvStockStatus.className = 'stock-in';
    qvAddToCartBtn.textContent = 'Add to Cart';
    qvAddToCartBtn.disabled = false;
  } else {
    qvStockStatus.textContent = 'Sold Out';
    qvStockStatus.className = 'stock-out';
    qvAddToCartBtn.textContent = 'Sold Out';
    qvAddToCartBtn.disabled = true;
  }

  // Star Ratings
  let ratingHtml = '';
  for (let s = 1; s <= 5; s++) {
    ratingHtml += s <= p.rating ? '★' : '☆';
  }
  qvRating.innerHTML = `${ratingHtml} <span class="card-rating-text" style="color: var(--text-secondary); margin-left: 4px;">(${p.rating}.0 out of 5)</span>`;

  quickViewModal.classList.add('active');
}
