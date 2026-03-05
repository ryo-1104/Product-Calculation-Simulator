// カテゴリ表示順序: 煎茶 → くき茶 → 真砂 → 粉茶・芽茶 → 玄米茶・ほうじ茶 → ティーバッグ → ドリップティー → お菓子 → その他
// 初期商品データの定義（カテゴリ順序反映）
const defaultProducts = [
  {
    "id": 17,
    "name": "希少品種こみなみ",
    "price": 2160,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 18,
    "name": "淡麓の極",
    "price": 2160,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 19,
    "name": "淡麓の匠",
    "price": 1620,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 20,
    "name": "掛川の誉",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 21,
    "name": "掛川の香",
    "price": 864,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 22,
    "name": "掛川の里",
    "price": 648,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 23,
    "name": "かおり",
    "price": 540,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 24,
    "name": "かおり200g",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 25,
    "name": "桃山",
    "price": 648,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 26,
    "name": "初みどり",
    "price": 864,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 27,
    "name": "深蒸し掛川茶G",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 28,
    "name": "深蒸し掛川茶W",
    "price": 864,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 29,
    "name": "天葉さえみどり",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 30,
    "name": "天葉つゆひかり",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 31,
    "name": "あら茶玄人作300g",
    "price": 1620,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 32,
    "name": "あさつゆ",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 33,
    "name": "ゆたかみどり",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 70,
    "name": "掛川茶330",
    "price": 1080,
    "category": "煎茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 34,
    "name": "かりがね限定品",
    "price": 1080,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 35,
    "name": "かりがね特撰",
    "price": 2592,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 36,
    "name": "かりがね寿",
    "price": 1944,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 37,
    "name": "かりがね松",
    "price": 1620,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 38,
    "name": "かりがね竹",
    "price": 1296,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 39,
    "name": "かりがね梅",
    "price": 972,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 40,
    "name": "かりがね無印",
    "price": 648,
    "category": "くき茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 41,
    "name": "特撰深蒸し茶",
    "price": 1296,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 42,
    "name": "八十八夜",
    "price": 1080,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 43,
    "name": "掛川の香500g",
    "price": 4320,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 44,
    "name": "掛川の誉松500g",
    "price": 3780,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 45,
    "name": "掛川の誉500g",
    "price": 3240,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 46,
    "name": "瑞光500g",
    "price": 2700,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 47,
    "name": "特撰かりがね500g",
    "price": 2700,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 48,
    "name": "かりがね500g",
    "price": 1080,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 49,
    "name": "特撰粉茶500g",
    "price": 1890,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 50,
    "name": "ほうじ茶250g",
    "price": 1080,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 51,
    "name": "粉茶ティーバッグ特撰",
    "price": 1728,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 52,
    "name": "粉茶ティーバッグ竹印",
    "price": 1188,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 53,
    "name": "抹茶入玄米茶ティーバッグ",
    "price": 1296,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 54,
    "name": "深蒸し茶1㎏",
    "price": 2160,
    "category": "真砂",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 55,
    "name": "カテキン粉末スティック",
    "price": 1000,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 56,
    "name": "カテキン粉末茶70g",
    "price": 972,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 57,
    "name": "べにふうき30g",
    "price": 1080,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 58,
    "name": "特撰上粉茶300g",
    "price": 1080,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 59,
    "name": "特撰粉茶500g",
    "price": 1080,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 60,
    "name": "芽茶特撰",
    "price": 864,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 61,
    "name": "芽茶寿",
    "price": 648,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 78,
    "name": "有機抹茶 千の雫",
    "price": 1350,
    "category": "粉茶・芽茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 67,
    "name": "ほうじ茶",
    "price": 648,
    "category": "玄米茶・ほうじ茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 68,
    "name": "抹茶入りかりがね玄米茶400g",
    "price": 1080,
    "category": "玄米茶・ほうじ茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 69,
    "name": "上玄米茶300g",
    "price": 648,
    "category": "玄米茶・ほうじ茶",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 8,
    "name": "茶草場のしずく",
    "price": 648,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 9,
    "name": "銘宝の月",
    "price": 1280,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 10,
    "name": "水出し煎茶ティーバッグ",
    "price": 864,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 11,
    "name": "抹茶入玄米茶ティーバッグ",
    "price": 540,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 12,
    "name": "粉茶ティーバッグ",
    "price": 540,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 13,
    "name": "和紅茶ティーバッグ",
    "price": 540,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 14,
    "name": "ほうじ茶ティーバッグ",
    "price": 540,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 66,
    "name": "お徳用ティーバッグ",
    "price": 1296,
    "category": "ティーバッグ",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 15,
    "name": "Drip de Tea Ⅱ",
    "price": 1080,
    "category": "ドリップティー",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 16,
    "name": "Drip de Tea",
    "price": 864,
    "category": "ドリップティー",
    "isDiscounted": false,
    "taxRate": 8
  },
  {
    "id": 62,
    "name": "どら焼き",
    "price": 248,
    "category": "お菓子",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 63,
    "name": "フィナンシェ",
    "price": 220,
    "category": "お菓子",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 64,
    "name": "小魚せんべい",
    "price": 378,
    "category": "お菓子",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 65,
    "name": "磯の木昆布",
    "price": 432,
    "category": "お菓子",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 71,
    "name": "和風ビスケット",
    "price": 108,
    "category": "お菓子",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 72,
    "name": "箱代660円",
    "price": 660,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 73,
    "name": "箱代165円",
    "price": 165,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 74,
    "name": "箱代220円",
    "price": 220,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 75,
    "name": "箱代330円",
    "price": 330,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 76,
    "name": "夏の香",
    "price": 324,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8
  },
  {
    "id": 77,
    "name": "アルファー麦茶",
    "price": 540,
    "category": "その他",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 10
  },
  {
    "id": 78,
    "name": "任意入力商品1",
    "price": 0,
    "category": "任意入力",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8,
    "isCustomInput": true
  },
  {
    "id": 79,
    "name": "任意入力商品2",
    "price": 0,
    "category": "任意入力",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8,
    "isCustomInput": true
  },
  {
    "id": 80,
    "name": "任意入力商品3",
    "price": 0,
    "category": "任意入力",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8,
    "isCustomInput": true
  },
  {
    "id": 81,
    "name": "任意入力商品4",
    "price": 0,
    "category": "任意入力",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8,
    "isCustomInput": true
  },
  {
    "id": 82,
    "name": "任意入力商品5",
    "price": 0,
    "category": "任意入力",
    "isDiscounted": false,
    "discountRate": 0,
    "taxRate": 8,
    "isCustomInput": true
  }
];
// グローバル変数の宣言（初期化はDOMContentLoadedで行う）
let products = [];
let nextId = 1;
let currentEditingId = null; // 編集中の商品ID
let isEditMode = false; // 現在のモード
let categoryOrder = []; // カテゴリの表示順序

// DOM要素の取得
const modeToggleButton = document.getElementById('mode-toggle-button');
const displayMode = document.getElementById('display-mode');
const editMode = document.getElementById('edit-mode');
const productList = document.getElementById('product-list');
const totalPriceElement = document.getElementById('total-price');
const productForm = document.getElementById('product-form');
const editProductList = document.getElementById('edit-product-list');
const formTitle = document.getElementById('form-title');
const cancelBtn = document.getElementById('cancel-btn');
const categorySelect = document.getElementById('category-select');
const categoryOrderList = document.getElementById('category-order-list');

// 配送オプション関連の要素
const shippingFeeSelect = document.getElementById('shipping-fee');
const cashOnDeliverySelect = document.getElementById('cash-on-delivery');
const coolDeliverySelect = document.getElementById('cool-delivery');
const shippingTotalElement = document.getElementById('shipping-total');
const finalTotalPriceElement = document.getElementById('final-total-price');
const codFeeInfo = document.getElementById('cod-fee-info');

// DOM要素の存在確認
console.log('DOM Elements check:');
console.log('modeToggleButton:', !!modeToggleButton);
console.log('displayMode:', !!displayMode);
console.log('editMode:', !!editMode);
console.log('productList:', !!productList);
console.log('categorySelect:', !!categorySelect);
console.log('categoryOrderList:', !!categoryOrderList);
console.log('shippingFeeSelect:', !!shippingFeeSelect);
console.log('cashOnDeliverySelect:', !!cashOnDeliverySelect);
console.log('coolDeliverySelect:', !!coolDeliverySelect);
console.log('shippingTotalElement:', !!shippingTotalElement);
console.log('finalTotalPriceElement:', !!finalTotalPriceElement);

// データ管理関連の要素
const exportOrderedBtn = document.getElementById('export-ordered-btn');
const importDataBtn = document.getElementById('import-data-btn');
const resetDataBtn = document.getElementById('reset-data-btn');
const dataEditor = document.getElementById('data-editor');
const dataTextarea = document.getElementById('data-textarea');
const saveDataBtn = document.getElementById('save-data-btn');
const cancelDataBtn = document.getElementById('cancel-data-btn');
const exportOutput = document.getElementById('export-output');
const exportTextarea = document.getElementById('export-textarea');
const copyDataBtn = document.getElementById('copy-data-btn');
const closeExportBtn = document.getElementById('close-export-btn');

// ヘルプ関連の要素
const helpButton = document.getElementById('help-button');
const helpPanel = document.getElementById('help-panel');
const closeHelpBtn = document.getElementById('close-help');

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting initialization...');
    
    try {
        // 最初にデータを読み込み
        products = loadProducts();
        console.log('Products loaded:', products.length);
        console.log('First 3 products:', products.slice(0, 3));
        
        // nextIdを設定（productsを渡す）
        nextId = getNextId(products);
        console.log('Next ID set to:', nextId);
        
        console.log('Category order:', categoryOrder);
        
        renderDisplayMode();
        console.log('Display mode rendered');
        
        // 商品リストが空でないかチェック
        console.log('Product list element:', productList);
        console.log('Product list innerHTML length:', productList ? productList.innerHTML.length : 'not found');
        
        renderEditMode();
        console.log('Edit mode rendered');
        
        setupEventListeners();
        console.log('Event listeners set up');
        
        console.log('Initialization complete');
        
        // デバッグ情報を画面に表示
        if (products.length === 0) {
            if (productList) {
                productList.innerHTML = `
                    <div style="padding: 2rem; text-align: center; background: #f8d7da; color: #721c24; border-radius: 8px; margin: 1rem;">
                        <h3>⚠️ 商品データが読み込まれていません</h3>
                        <p>商品数: ${products.length}</p>
                        <p>LocalStorage確認: ${localStorage.getItem('saleToolProducts') ? 'あり' : 'なし'}</p>
                        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px;">ページを再読み込み</button>
                    </div>
                `;
            }
        }
    } catch (error) {
        console.error('Initialization error:', error);
        if (productList) {
            productList.innerHTML = `
                <div style="padding: 2rem; text-align: center; background: #f8d7da; color: #721c24; border-radius: 8px; margin: 1rem;">
                    <h3>❌ エラーが発生しました</h3>
                    <p>${error.message}</p>
                    <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px;">ページを再読み込み</button>
                </div>
            `;
        }
    }
});

// ローカルストレージ関連の関数
function saveProducts() {
    localStorage.setItem('saleToolProducts', JSON.stringify(products));
    localStorage.setItem('saleToolNextId', nextId.toString());
    localStorage.setItem('saleToolCategoryOrder', JSON.stringify(categoryOrder));
}

function loadProducts() {
    const savedProducts = localStorage.getItem('saleToolProducts');
    const savedCategoryOrder = localStorage.getItem('saleToolCategoryOrder');
    
    // 商品データを先に読み込む
    const loadedProducts = savedProducts ? JSON.parse(savedProducts) : [...defaultProducts];
    
    // 税率が設定されていない商品に自動的に税率を付与
    loadedProducts.forEach(product => {
        if (!product.taxRate) {
            // お菓子カテゴリは10%、その他（お茶類）は8%
            if (product.category === 'お菓子') {
                product.taxRate = 10;
            } else if (product.category === 'その他' && (product.name.includes('箱') || product.name.includes('アルファー'))) {
                // 箱代やその他一部商品は10%
                product.taxRate = 10;
            } else {
                // お茶類は軽減税率8%
                product.taxRate = 8;
            }
        }
    });
    
    // カテゴリ順序を設定
    if (savedCategoryOrder) {
        categoryOrder = JSON.parse(savedCategoryOrder);
        
        // 保存されたcategoryOrderに存在しないカテゴリを追加（新しい商品追加時対策）
        const currentCategories = [...new Set(loadedProducts.map(p => p.category))];
        currentCategories.forEach(category => {
            if (!categoryOrder.includes(category)) {
                categoryOrder.push(category);
            }
        });
    } else {
        // カテゴリ順序が保存されていない場合、全カテゴリを抽出して設定
        categoryOrder = [...new Set(loadedProducts.map(p => p.category))];
    }
    
    return loadedProducts;
}

function getNextId(productList = []) {
    const savedNextId = localStorage.getItem('saleToolNextId');
    if (savedNextId) {
        return parseInt(savedNextId);
    } else {
        // 商品リストが空の場合は1を返す
        if (productList.length === 0) {
            return 1;
        }
        // 既存商品の最大IDを取得して+1
        const maxId = Math.max(...productList.map(p => p.id), 0);
        return maxId + 1;
    }
}

// イベントリスナーの設定
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // モード切り替えボタン
    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', toggleMode);
        console.log('Mode toggle button listener added');
    } else {
        console.error('Mode toggle button not found');
    }
    
    // 商品フォームの送信
    if (productForm) {
        productForm.addEventListener('submit', handleFormSubmit);
        console.log('Product form listener added');
    }
    
    // キャンセルボタン
    if (cancelBtn) {
        cancelBtn.addEventListener('click', cancelEdit);
    }
    
    // データ管理関連
    if (exportOrderedBtn) exportOrderedBtn.addEventListener('click', exportCategoryOrderedData);
    if (importDataBtn) importDataBtn.addEventListener('click', showImportDialog);
    if (resetDataBtn) resetDataBtn.addEventListener('click', resetToDefault);
    if (saveDataBtn) saveDataBtn.addEventListener('click', saveImportedData);
    if (cancelDataBtn) cancelDataBtn.addEventListener('click', hideImportDialog);
    if (copyDataBtn) copyDataBtn.addEventListener('click', copyToClipboard);
    if (closeExportBtn) closeExportBtn.addEventListener('click', hideExportDialog);
    
    // カテゴリ選択の処理
    if (categorySelect) {
        categorySelect.addEventListener('change', handleCategorySelect);
        console.log('Category select listener added');
    }
    
    // 割引チェックボックスの処理
    const discountCheckbox = document.getElementById('product-discount');
    const discountRateGroup = document.getElementById('discount-rate-group');
    if (discountCheckbox && discountRateGroup) {
        discountCheckbox.addEventListener('change', function() {
            if (this.checked) {
                discountRateGroup.style.display = 'block';
            } else {
                discountRateGroup.style.display = 'none';
            }
        });
        console.log('Discount checkbox listener added');
    }
    
    // ヘルプ機能のイベントリスナー
    if (helpButton && helpPanel && closeHelpBtn) {
        // ヘルプボタンのクリックイベント
        helpButton.addEventListener('click', function() {
            helpPanel.classList.remove('hidden');
        });
        
        // ヘルプボタンのマウスオーバーイベント（長押し効果）
        let hoverTimeout;
        helpButton.addEventListener('mouseenter', function() {
            hoverTimeout = setTimeout(() => {
                helpPanel.classList.remove('hidden');
            }, 1000); // 1秒のマウスオーバーで表示
        });
        
        helpButton.addEventListener('mouseleave', function() {
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        });
        
        // ヘルプパネルを閉じる
        closeHelpBtn.addEventListener('click', function() {
            helpPanel.classList.add('hidden');
        });
        
        // ヘルプパネルの背景クリックで閉じる
        helpPanel.addEventListener('click', function(e) {
            if (e.target === helpPanel) {
                helpPanel.classList.add('hidden');
            }
        });
        
        // ESCキーでヘルプパネルを閉じる
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !helpPanel.classList.contains('hidden')) {
                helpPanel.classList.add('hidden');
            }
        });
        
        console.log('Help functionality listeners added');
    }
    
    // 配送オプションのイベントリスナー
    if (shippingFeeSelect && cashOnDeliverySelect && coolDeliverySelect && shippingTotalElement && finalTotalPriceElement) {
        shippingFeeSelect.addEventListener('change', calculateFinalTotal);
        cashOnDeliverySelect.addEventListener('change', calculateFinalTotal);
        coolDeliverySelect.addEventListener('change', calculateFinalTotal);
        console.log('Shipping options listeners added');
        
        // 初期値で最終合計を計算
        calculateFinalTotal();
    } else {
        console.error('Shipping options elements not found:');
        console.error('- shippingFeeSelect:', !!shippingFeeSelect);
        console.error('- cashOnDeliverySelect:', !!cashOnDeliverySelect);
        console.error('- coolDeliverySelect:', !!coolDeliverySelect);
        console.error('- shippingTotalElement:', !!shippingTotalElement);
        console.error('- finalTotalPriceElement:', !!finalTotalPriceElement);
    }
    
    // 納品書印刷ボタンのイベントリスナー
    const printInvoiceBtn = document.getElementById('print-invoice-btn');
    if (printInvoiceBtn) {
        printInvoiceBtn.addEventListener('click', printInvoice);
        console.log('Print invoice button listener added');
    }
    
    // 発行日フィールドの初期化（今日の日付を設定）
    const invoiceIssueDateInput = document.getElementById('invoice-issue-date');
    if (invoiceIssueDateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        invoiceIssueDateInput.value = `${year}-${month}-${day}`;
        console.log('Invoice issue date initialized to:', invoiceIssueDateInput.value);
    }
    
    console.log('Event listeners setup complete');
}

// モード切り替え機能
function toggleMode() {
    console.log('Toggle mode called, current isEditMode:', isEditMode);
    
    isEditMode = !isEditMode;
    console.log('New isEditMode:', isEditMode);
    
    if (isEditMode) {
        console.log('Switching to edit mode');
        displayMode.classList.add('hidden');
        editMode.classList.remove('hidden');
        modeToggleButton.textContent = '表示モードに切替';
        renderEditMode();
        console.log('Edit mode activated');
    } else {
        console.log('Switching to display mode');
        editMode.classList.add('hidden');
        displayMode.classList.remove('hidden');
        modeToggleButton.textContent = '編集モードに切替';
        renderDisplayMode();
        resetForm();
        console.log('Display mode activated');
    }
}

// 表示モードのレンダリング
function renderDisplayMode() {
    console.log('renderDisplayMode called, products length:', products.length);
    
    const categories = groupByCategory(products);
    console.log('Categories grouped:', Object.keys(categories));
    
    productList.innerHTML = '';
    
    let isFirstCategory = true;
    Object.keys(categories).forEach(category => {
        console.log('Processing category:', category, 'products:', categories[category].length);
        const categorySection = createCategorySection(category, categories[category], isFirstCategory);
        productList.appendChild(categorySection);
        isFirstCategory = false;
    });
    
    console.log('Product list HTML after render:', productList.innerHTML.substring(0, 200));
    calculateTotal();
}

// カテゴリごとにグループ化（順序を考慮）
function groupByCategory(products) {
    const groups = products.reduce((groups, product) => {
        const category = product.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(product);
        return groups;
    }, {});
    
    // カテゴリ順序を更新
    updateCategoryOrder(Object.keys(groups));
    
    // 順序に従ってソートされたオブジェクトを返す
    const sortedGroups = {};
    categoryOrder.forEach(category => {
        if (groups[category]) {
            sortedGroups[category] = groups[category];
        }
    });
    
    // categoryOrderに含まれていないカテゴリも追加（Brave対策）
    Object.keys(groups).forEach(category => {
        if (!sortedGroups[category]) {
            sortedGroups[category] = groups[category];
        }
    });
    
    return sortedGroups;
}

// カテゴリセクションの作成
function createCategorySection(category, categoryProducts, isFirst = false) {
    const section = document.createElement('div');
    section.className = 'category-section';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
        <h3>${category}</h3>
        <span class="category-arrow ${isFirst ? 'open' : ''}">▼</span>
    `;
    
    const content = document.createElement('div');
    content.className = `category-content ${isFirst ? 'open' : ''}`;
    
    categoryProducts.forEach(product => {
        const productItem = createProductItem(product);
        content.appendChild(productItem);
    });
    
    // アコーディオン機能
    header.addEventListener('click', () => {
        const isOpen = content.classList.contains('open');
        content.classList.toggle('open');
        header.querySelector('.category-arrow').classList.toggle('open');
    });
    
    section.appendChild(header);
    section.appendChild(content);
    
    return section;
}

// 商品アイテムの作成
function createProductItem(product) {
    const item = document.createElement('div');
    item.className = 'product-item';
    
    // 任意入力商品の場合は特別なUIを表示
    if (product.isCustomInput) {
        item.innerHTML = `
            <div class="product-info custom-input-product">
                <div class="custom-input-field">
                    <label>商品名:</label>
                    <input type="text" class="custom-product-name" data-product-id="${product.id}" placeholder="商品名を入力">
                </div>
                <div class="custom-input-field">
                    <label>金額（税込）:</label>
                    <input type="number" class="custom-product-price" data-product-id="${product.id}" placeholder="0" min="0">
                </div>
                <div class="custom-input-field">
                    <label>数量:</label>
                    <input type="number" class="custom-product-quantity" data-product-id="${product.id}" placeholder="0" min="0">
                </div>
                <div class="custom-input-field">
                    <label>税率:</label>
                    <select class="custom-product-taxrate" data-product-id="${product.id}">
                        <option value="8">8% (軽減税率)</option>
                        <option value="10">10% (標準税率)</option>
                    </select>
                </div>
            </div>
            <div class="product-controls">
                <button class="reset-quantity-btn" data-product-id="${product.id}">リセット</button>
                <div class="subtotal" data-product-id="${product.id}">¥0</div>
            </div>
        `;
        
        // 入力フィールドのイベントリスナー
        const nameInput = item.querySelector('.custom-product-name');
        const priceInput = item.querySelector('.custom-product-price');
        const quantityInput = item.querySelector('.custom-product-quantity');
        const taxRateSelect = item.querySelector('.custom-product-taxrate');
        const resetBtn = item.querySelector('.reset-quantity-btn');
        
        const updateCustomSubtotal = () => {
            const price = parseInt(priceInput.value) || 0;
            const quantity = parseInt(quantityInput.value) || 0;
            const subtotal = price * quantity;
            const subtotalElement = item.querySelector('.subtotal');
            subtotalElement.textContent = `¥${subtotal.toLocaleString()}`;
            calculateTotal();
        };
        
        priceInput.addEventListener('input', updateCustomSubtotal);
        quantityInput.addEventListener('input', updateCustomSubtotal);
        
        resetBtn.addEventListener('click', () => {
            nameInput.value = '';
            priceInput.value = '';
            quantityInput.value = '';
            taxRateSelect.value = '8';
            updateCustomSubtotal();
        });
        
        return item;
    }
    
    // 通常の商品の場合
    // 割引率を使用した価格計算
    const discountRate = product.isDiscounted ? (product.discountRate || 20) : 0;
    const discountedPrice = product.isDiscounted ? Math.ceil(product.price * (100 - discountRate) / 100) : product.price;
    const priceClass = product.isDiscounted ? 'product-price discounted' : 'product-price';
    
    item.innerHTML = `
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="${priceClass}">
                ¥${discountedPrice.toLocaleString()}
                ${product.isDiscounted ? `<span style="text-decoration: line-through; color: #bdc3c7;">¥${product.price.toLocaleString()}</span> <span style="color: #e74c3c; font-weight: 600;">${discountRate}%OFF</span>` : ''}
            </div>
        </div>
        <div class="product-controls">
            <div class="quantity-control">
                <select class="quantity-select" data-product-id="${product.id}">
                    <option value="0">0</option>
                    ${Array.from({length: 10}, (_, i) => 
                        `<option value="${i + 1}">${i + 1}</option>`
                    ).join('')}
                    <option value="11+">11個以上</option>
                </select>
                <input type="number" class="quantity-input hidden" data-product-id="${product.id}" min="11" placeholder="数量を入力">
                <button class="reset-quantity-btn" data-product-id="${product.id}">リセット</button>
            </div>
            <div class="subtotal" data-product-id="${product.id}">¥0</div>
        </div>
    `;
    
    // 数量変更イベント
    const quantitySelect = item.querySelector('.quantity-select');
    const quantityInput = item.querySelector('.quantity-input');
    
    quantitySelect.addEventListener('change', (e) => {
        if (e.target.value === '11+') {
            // 11個以上が選択されたら入力フィールドを表示
            quantityInput.classList.remove('hidden');
            quantityInput.focus();
            // 小計をリセット（入力待ち）
            updateSubtotal(product.id, 0, discountedPrice);
        } else {
            // 通常の選択の場合は入力フィールドを非表示
            quantityInput.classList.add('hidden');
            quantityInput.value = '';
            updateSubtotal(product.id, parseInt(e.target.value), discountedPrice);
        }
        calculateTotal();
    });
    
    // 数値入力フィールドのイベント
    quantityInput.addEventListener('input', (e) => {
        const quantity = parseInt(e.target.value) || 0;
        updateSubtotal(product.id, quantity, discountedPrice);
        calculateTotal();
    });
    
    // リセットボタンのイベント
    const resetBtn = item.querySelector('.reset-quantity-btn');
    resetBtn.addEventListener('click', () => {
        quantitySelect.value = '0';
        quantityInput.classList.add('hidden');
        quantityInput.value = '';
        updateSubtotal(product.id, 0, discountedPrice);
        calculateTotal();
    });
    
    return item;
}

// 小計の更新
function updateSubtotal(productId, quantity, price) {
    const subtotalElement = document.querySelector(`.subtotal[data-product-id="${productId}"]`);
    const subtotal = price * quantity;
    subtotalElement.textContent = `¥${subtotal.toLocaleString()}`;
}

// 合計金額の計算
function calculateTotal() {
    let total = 0;
    
    // 通常の商品の合計
    document.querySelectorAll('.quantity-select').forEach(select => {
        const productId = parseInt(select.dataset.productId);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            const discountRate = product.isDiscounted ? (product.discountRate || 20) : 0;
            const price = product.isDiscounted ? Math.ceil(product.price * (100 - discountRate) / 100) : product.price;
            
            let quantity = 0;
            if (select.value === '11+') {
                // 11個以上が選択されている場合は入力フィールドの値を使用
                const quantityInput = document.querySelector(`.quantity-input[data-product-id="${productId}"]`);
                quantity = quantityInput ? (parseInt(quantityInput.value) || 0) : 0;
            } else {
                // 通常の選択の場合
                quantity = parseInt(select.value) || 0;
            }
            
            total += price * quantity;
        }
    });
    
    // 任意入力商品の合計
    document.querySelectorAll('.custom-product-price').forEach(priceInput => {
        const productId = parseInt(priceInput.dataset.productId);
        const quantityInput = document.querySelector(`.custom-product-quantity[data-product-id="${productId}"]`);
        
        if (quantityInput) {
            const price = parseInt(priceInput.value) || 0;
            const quantity = parseInt(quantityInput.value) || 0;
            total += price * quantity;
        }
    });
    
    totalPriceElement.textContent = `¥${total.toLocaleString()}`;
    
    // 最終合計も計算
    calculateFinalTotal();
}

// 最終合計の計算（商品合計 + 送料 + クール便）
function calculateFinalTotal() {
    console.log('calculateFinalTotal called');
    
    // 商品合計を取得
    const productTotalText = totalPriceElement.textContent.replace('¥', '').replace(/,/g, '');
    const productTotal = parseInt(productTotalText) || 0;
    console.log('Product total:', productTotal);
    
    // 送料を取得
    const shippingFee = shippingFeeSelect ? parseInt(shippingFeeSelect.value) || 0 : 0;
    console.log('Shipping fee:', shippingFee);
    
    // クール便料金を取得
    const coolDeliveryFee = coolDeliverySelect ? parseInt(coolDeliverySelect.value) || 0 : 0;
    console.log('Cool delivery fee:', coolDeliveryFee);
    
    // 代引きが選択されているかチェック
    const isCashOnDelivery = cashOnDeliverySelect ? parseInt(cashOnDeliverySelect.value) === 1 : false;
    console.log('Cash on delivery selected:', isCashOnDelivery);
    
    // 代引き料金を計算（合計金額に基づく）
    let cashOnDeliveryFee = 0;
    if (isCashOnDelivery) {
        const totalBeforeCOD = productTotal + shippingFee + coolDeliveryFee;
        cashOnDeliveryFee = calculateCashOnDeliveryFee(totalBeforeCOD);
        console.log('Cash on delivery fee:', cashOnDeliveryFee);
        
        // 代引き料金情報を更新
        updateCODFeeInfo(totalBeforeCOD, cashOnDeliveryFee);
    } else {
        // 代引きなしの場合、情報をリセット
        updateCODFeeInfo(0, 0);
    }
    
    // 配送料合計を計算・表示
    const shippingTotal = shippingFee + coolDeliveryFee + cashOnDeliveryFee;
    console.log('Shipping total:', shippingTotal);
    if (shippingTotalElement) {
        shippingTotalElement.textContent = `¥${shippingTotal.toLocaleString()}`;
    }
    
    // 最終合計を計算・表示
    const finalTotal = productTotal + shippingTotal;
    console.log('Final total:', finalTotal);
    if (finalTotalPriceElement) {
        finalTotalPriceElement.textContent = `¥${finalTotal.toLocaleString()}`;
    }
}

// 代引き料金の計算（代引き料金を含めた最終金額で判定）
function calculateCashOnDeliveryFee(totalAmount) {
    // 代引き料金330円を加えても10,000円以下の場合
    if (totalAmount + 330 <= 10000) {
        return 330;
    }
    // 代引き料金440円を加えても30,000円以下の場合
    else if (totalAmount + 440 <= 30000) {
        return 440;
    }
    // それ以外の場合
    else {
        return 660;
    }
}

// 代引き料金情報の更新
function updateCODFeeInfo(totalAmount, codFee) {
    if (!codFeeInfo) return;
    
    if (codFee > 0) {
        let range = '';
        if (codFee === 330) {
            range = '合計¥10,000以下';
        } else if (codFee === 440) {
            range = '合計¥10,001～¥30,000';
        } else {
            range = '合計¥30,001以上';
        }
        codFeeInfo.innerHTML = `${range}: +¥${codFee.toLocaleString()}`;
        codFeeInfo.style.color = '#e74c3c';
    } else {
        codFeeInfo.innerHTML = '代引き料金は合計金額により変動';
        codFeeInfo.style.color = '#666';
    }
}

// 編集モードのレンダリング
function renderEditMode() {
    console.log('renderEditMode called');
    
    if (!editProductList) {
        console.error('editProductList element not found');
        return;
    }
    
    editProductList.innerHTML = '';
    
    products.forEach(product => {
        const editItem = createEditProductItem(product);
        editProductList.appendChild(editItem);
    });
    console.log('Product list rendered, count:', products.length);
    
    // カテゴリ選択肢を更新
    updateCategoryOptions();
    console.log('Category options updated');
    
    // カテゴリ順序管理を更新
    renderCategoryOrder();
    console.log('Category order rendered');
}

// 編集用商品アイテムの作成
function createEditProductItem(product) {
    const item = document.createElement('div');
    item.className = 'edit-product-item';
    
    const discountInfo = product.isDiscounted ? `割引対象(${product.discountRate || 20}%)` : '通常価格';
    const taxInfo = `税${product.taxRate || 8}%`;
    
    item.innerHTML = `
        <div class="edit-product-info">
            <div class="edit-product-name">${product.name}</div>
            <div class="edit-product-details">
                ¥${product.price.toLocaleString()} | ${product.category} | ${discountInfo} | ${taxInfo}
            </div>
        </div>
        <div class="edit-product-actions">
            <button class="edit-btn" onclick="editProduct(${product.id})">編集</button>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">削除</button>
        </div>
    `;
    
    return item;
}

// フォーム送信処理
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(productForm);
    
    // カテゴリの値を決定（選択されていればそれを、なければ入力値を使用）
    const selectedCategory = formData.get('categorySelect');
    const inputCategory = formData.get('category');
    const finalCategory = selectedCategory || inputCategory;
    
    if (!finalCategory.trim()) {
        alert('カテゴリを選択するか入力してください。');
        return;
    }
    
    const productData = {
        name: formData.get('name'),
        price: parseInt(formData.get('price')),
        category: finalCategory.trim(),
        isDiscounted: formData.get('isDiscounted') === 'on',
        discountRate: formData.get('isDiscounted') === 'on' ? parseInt(formData.get('discountRate')) : 0,
        taxRate: parseInt(formData.get('taxRate')) || 8
    };
    
    if (currentEditingId) {
        // 編集モード
        updateProduct(currentEditingId, productData);
    } else {
        // 新規追加モード
        addProduct(productData);
    }
    
    resetForm();
    renderEditMode();
}

// 商品追加
function addProduct(productData) {
    const newProduct = {
        id: nextId++,
        ...productData
    };
    products.push(newProduct);
    saveProducts(); // ローカルストレージに保存
}

// 商品更新
function updateProduct(id, productData) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { id, ...productData };
        saveProducts(); // ローカルストレージに保存
    }
}

// 商品編集
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        currentEditingId = id;
        
        // フォームに値を設定
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        
        // カテゴリの設定
        const categoryExists = Array.from(categorySelect.options).some(option => option.value === product.category);
        if (categoryExists) {
            categorySelect.value = product.category;
            document.getElementById('product-category').value = '';
        } else {
            categorySelect.value = '';
            document.getElementById('product-category').value = product.category;
        }
        
        document.getElementById('product-discount').checked = product.isDiscounted;
        
        // 割引率の設定
        const discountRateSelect = document.getElementById('discount-rate');
        const discountRateGroup = document.getElementById('discount-rate-group');
        if (product.isDiscounted) {
            discountRateSelect.value = product.discountRate || 20;
            discountRateGroup.style.display = 'block';
        } else {
            discountRateGroup.style.display = 'none';
        }
        
        // 税率の設定
        document.getElementById('tax-rate').value = product.taxRate || 8;
        
        // UI更新
        formTitle.textContent = '商品編集';
        cancelBtn.classList.remove('hidden');
        
        // フォームまでスクロール
        productForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// 商品削除
function deleteProduct(id) {
    if (confirm('この商品を削除しますか？')) {
        products = products.filter(p => p.id !== id);
        saveProducts(); // ローカルストレージに保存
        renderEditMode();
    }
}

// 編集キャンセル
function cancelEdit() {
    resetForm();
}

// フォームリセット
function resetForm() {
    productForm.reset();
    categorySelect.value = '';
    currentEditingId = null;
    formTitle.textContent = '商品追加';
    cancelBtn.classList.add('hidden');
    
    // 割引率グループを非表示にする
    const discountRateGroup = document.getElementById('discount-rate-group');
    if (discountRateGroup) {
        discountRateGroup.style.display = 'none';
    }
}

// データリセット機能（デバッグ用）
function resetToDefault() {
    if (confirm('すべてのデータを初期状態に戻しますか？')) {
        localStorage.removeItem('saleToolProducts');
        localStorage.removeItem('saleToolNextId');
        localStorage.removeItem('saleToolCategoryOrder');
        products = [...defaultProducts];
        categoryOrder = [];
        nextId = getNextId();
        renderDisplayMode();
        renderEditMode();
    }
}

// データ管理機能
function exportCategoryOrderedData() {
    // カテゴリ順序に従って商品を並べ替え
    const sortedProducts = [];
    
    categoryOrder.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        sortedProducts.push(...categoryProducts);
    });
    
    const currentData = JSON.stringify(sortedProducts, null, 2);
    const jsFormat = `// 初期商品データの定義（カテゴリ順序反映）
const defaultProducts = ${currentData};`;
    
    exportTextarea.value = jsFormat;
    exportOutput.classList.remove('hidden');
    dataEditor.classList.add('hidden');
    
    // カテゴリ順序コメントを追加
    const categoryComment = `\n// カテゴリ表示順序: ${categoryOrder.join(' → ')}\n`;
    exportTextarea.value = categoryComment + exportTextarea.value;
}

function showImportDialog() {
    const currentData = JSON.stringify(defaultProducts, null, 2);
    dataTextarea.value = currentData;
    dataEditor.classList.remove('hidden');
    exportOutput.classList.add('hidden');
}

function hideImportDialog() {
    dataEditor.classList.add('hidden');
}

function hideExportDialog() {
    exportOutput.classList.add('hidden');
}

function saveImportedData() {
    try {
        const inputData = dataTextarea.value.trim();
        let newData;
        
        // JSONかJavaScriptコードかを判定
        if (inputData.startsWith('[')) {
            // JSON形式
            newData = JSON.parse(inputData);
        } else if (inputData.includes('const defaultProducts = ')) {
            // JavaScript形式
            const jsonMatch = inputData.match(/const defaultProducts = (\[[\s\S]*?\]);/);
            if (jsonMatch) {
                newData = JSON.parse(jsonMatch[1]);
            } else {
                throw new Error('JavaScript形式のデータが正しく解析できません');
            }
        } else {
            throw new Error('サポートされていないデータ形式です');
        }
        
        // データの妥当性チェック
        if (!Array.isArray(newData)) {
            throw new Error('データは配列である必要があります');
        }
        
        for (const item of newData) {
            if (!item.id || !item.name || typeof item.price !== 'number' || !item.category || typeof item.isDiscounted !== 'boolean') {
                throw new Error('各商品には id, name, price, category, isDiscounted が必要です');
            }
            // 割引率の妥当性チェック（存在しない場合は20%をデフォルトに設定）
            if (item.isDiscounted && (!item.discountRate || ![10, 15, 20].includes(item.discountRate))) {
                item.discountRate = 20;
            }
        }
        
        // データを更新
        products = [...newData];
        // ローカルストレージも更新
        saveProducts();
        
        // 最大IDを更新
        const maxId = Math.max(...products.map(p => p.id), 0);
        nextId = maxId + 1;
        localStorage.setItem('saleToolNextId', nextId.toString());
        
        // 画面を更新
        renderDisplayMode();
        renderEditMode();
        hideImportDialog();
        
        alert('データが正常に更新されました！\n\n手動でscript.jsファイルの初期データ部分を更新する場合は、エクスポートしたコードをコピーして置き換えてください。');
        
    } catch (error) {
        alert('データの保存に失敗しました: ' + error.message);
    }
}

function copyToClipboard() {
    exportTextarea.select();
    exportTextarea.setSelectionRange(0, 99999); // モバイル対応
    
    try {
        document.execCommand('copy');
        alert('クリップボードにコピーしました！');
    } catch (err) {
        // フォールバック: 手動でコピーしてもらう
        alert('自動コピーに失敗しました。テキストを手動で選択してコピーしてください。');
    }
}

// カテゴリ順序変更時の通知
function showCategoryOrderChanged() {
    const notification = document.createElement('div');
    notification.className = 'category-change-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <p><strong>カテゴリ順序が変更されました</strong></p>
            <p>変更を永続化するには、以下のボタンからコードを出力してscript.jsファイルに適用してください。</p>
            <div class="notification-buttons">
                <button onclick="exportCategoryOrderedData()" class="export-ordered-btn">カテゴリ順序でコード出力</button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" class="dismiss-btn">閉じる</button>
            </div>
        </div>
    `;
    
    // 既存の通知があれば削除
    const existingNotification = document.querySelector('.category-change-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 通知を表示
    document.body.appendChild(notification);
    
    // 5秒後に自動で非表示（ユーザーがボタンを押さなかった場合）
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0.5';
        }
    }, 5000);
}

// カテゴリ選択肢を更新
function updateCategoryOptions() {
    // 既存のカテゴリを取得
    const categories = [...new Set(products.map(product => product.category))].sort();
    
    // 選択肢をクリア（最初のオプションは残す）
    categorySelect.innerHTML = '<option value="">-- 既存カテゴリから選択 --</option>';
    
    // カテゴリオプションを追加
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// カテゴリ選択時の処理
function handleCategorySelect() {
    const selectedCategory = categorySelect.value;
    const categoryInput = document.getElementById('product-category');
    
    if (selectedCategory) {
        // 既存カテゴリが選択された場合、入力フィールドをクリア
        categoryInput.value = '';
        categoryInput.placeholder = '既存カテゴリが選択されています';
    } else {
        // 選択がクリアされた場合、入力フィールドのプレースホルダーを元に戻す
        categoryInput.placeholder = 'または新しいカテゴリを入力';
    }
}

// カテゴリ順序を更新
function updateCategoryOrder(currentCategories) {
    // 新しいカテゴリを追加
    currentCategories.forEach(category => {
        if (!categoryOrder.includes(category)) {
            categoryOrder.push(category);
        }
    });
    
    // 存在しないカテゴリを削除
    categoryOrder = categoryOrder.filter(category => currentCategories.includes(category));
}

// カテゴリ順序管理のレンダリング
function renderCategoryOrder() {
    if (!categoryOrderList) return; // 要素が存在しない場合は何もしない
    
    categoryOrderList.innerHTML = '';
    
    if (categoryOrder.length === 0) {
        categoryOrderList.innerHTML = '<p style="text-align: center; color: #6c757d; margin: 2rem 0;">カテゴリがありません</p>';
        return;
    }
    
    categoryOrder.forEach((category, index) => {
        const categoryCount = products.filter(p => p.category === category).length;
        const item = document.createElement('div');
        item.className = 'category-order-item';
        item.draggable = true;
        item.dataset.category = category;
        
        item.innerHTML = `
            <div class="category-order-info-item">
                <span class="category-drag-handle">⋮⋮</span>
                <span class="category-name">${category}</span>
                <span class="category-count">${categoryCount}個</span>
                ${index === 0 ? '<span class="first-category-badge">先頭表示</span>' : ''}
            </div>
        `;
        
        // ドラッグイベント
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
        
        categoryOrderList.appendChild(item);
    });
}

// ドラッグ&ドロップのイベントハンドラー
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    this.classList.add('drag-over');
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (draggedElement !== this) {
        const draggedCategory = draggedElement.dataset.category;
        const targetCategory = this.dataset.category;
        
        const draggedIndex = categoryOrder.indexOf(draggedCategory);
        const targetIndex = categoryOrder.indexOf(targetCategory);
        
        // 配列の順序を変更
        categoryOrder.splice(draggedIndex, 1);
        categoryOrder.splice(targetIndex, 0, draggedCategory);
        
        // 保存して再描画
        saveProducts();
        renderCategoryOrder();
        renderDisplayMode();
        
        // カテゴリ順序変更を通知
        showCategoryOrderChanged();
    }
    
    this.classList.remove('drag-over');
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    
    // すべての要素からdrag-overクラスを削除
    document.querySelectorAll('.category-order-item').forEach(item => {
        item.classList.remove('drag-over');
    });
}

// =====================================================
// 納品書印刷機能
// =====================================================

// 納品書印刷関数
function printInvoice() {
    // 画面から選択された商品と数量を取得
    const purchasedItems = [];
    
    // 通常の商品を取得
    document.querySelectorAll('.quantity-select').forEach(select => {
        const productId = parseInt(select.dataset.productId);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            let quantity = 0;
            if (select.value === '11+') {
                // 11個以上が選択されている場合は入力フィールドの値を使用
                const quantityInput = document.querySelector(`.quantity-input[data-product-id="${productId}"]`);
                quantity = quantityInput ? (parseInt(quantityInput.value) || 0) : 0;
            } else {
                // 通常の選択の場合
                quantity = parseInt(select.value) || 0;
            }
            
            if (quantity > 0) {
                purchasedItems.push({
                    ...product,
                    quantity: quantity
                });
            }
        }
    });
    
    // 任意入力商品を取得
    document.querySelectorAll('.custom-product-name').forEach(nameInput => {
        const productId = parseInt(nameInput.dataset.productId);
        const priceInput = document.querySelector(`.custom-product-price[data-product-id="${productId}"]`);
        const quantityInput = document.querySelector(`.custom-product-quantity[data-product-id="${productId}"]`);
        const taxRateSelect = document.querySelector(`.custom-product-taxrate[data-product-id="${productId}"]`);
        
        const name = nameInput.value.trim();
        const price = parseInt(priceInput.value) || 0;
        const quantity = parseInt(quantityInput.value) || 0;
        const taxRate = taxRateSelect ? parseInt(taxRateSelect.value) : 8;
        
        if (name && price > 0 && quantity > 0) {
            const product = products.find(p => p.id === productId);
            purchasedItems.push({
                id: productId,
                name: name,
                price: price,
                quantity: quantity,
                category: product ? product.category : '任意入力',
                isDiscounted: false,
                discountRate: 0,
                taxRate: taxRate,
                isCustomInput: true
            });
        }
    });
    
    if (purchasedItems.length === 0) {
        alert('商品が選択されていません。数量を1以上に設定してください。');
        return;
    }
    
    // 発行日を取得（日付入力フィールドから）
    const invoiceIssueDateInput = document.getElementById('invoice-issue-date');
    let dateString;
    
    if (invoiceIssueDateInput && invoiceIssueDateInput.value) {
        // 入力された日付を使用
        const dateValue = new Date(invoiceIssueDateInput.value);
        dateString = `${dateValue.getFullYear()}年${dateValue.getMonth() + 1}月${dateValue.getDate()}日`;
    } else {
        // デフォルトは今日の日付
        const today = new Date();
        dateString = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    }
    
    // 商品価格は税込み価格なので、内税として計算
    let subtotalExcludingTax = 0;  // 税抜き小計
    let tax8Total = 0;   // 8%対象商品の消費税合計
    let tax10Total = 0;  // 10%対象商品の消費税合計
    let totalIncludingTax = 0;  // 税込み合計
    
    purchasedItems.forEach(product => {
        // 税込み価格（割引適用後）
        const priceIncludingTax = product.isDiscounted 
            ? Math.ceil(product.price * (1 - product.discountRate / 100))
            : product.price;
        const itemTotalIncludingTax = priceIncludingTax * product.quantity;
        
        // 税率に応じて税抜き価格を計算
        let priceExcludingTax;
        let itemTax;
        
        if (product.taxRate === 8) {
            // 8%内税の場合
            priceExcludingTax = Math.floor(priceIncludingTax / 1.08);
            const itemTotalExcludingTax = priceExcludingTax * product.quantity;
            itemTax = itemTotalIncludingTax - itemTotalExcludingTax;
            tax8Total += itemTax;
            subtotalExcludingTax += itemTotalExcludingTax;
        } else {
            // 10%内税の場合
            priceExcludingTax = Math.floor(priceIncludingTax / 1.10);
            const itemTotalExcludingTax = priceExcludingTax * product.quantity;
            itemTax = itemTotalIncludingTax - itemTotalExcludingTax;
            tax10Total += itemTax;
            subtotalExcludingTax += itemTotalExcludingTax;
        }
        
        totalIncludingTax += itemTotalIncludingTax;
    });
    
    // 各値を整数化
    const subtotal = Math.ceil(subtotalExcludingTax);
    const tax8 = Math.ceil(tax8Total);
    const tax10 = Math.ceil(tax10Total);
    
    // 配送オプションを取得
    const shippingFee = parseInt(shippingFeeSelect.value) || 0;
    const coolDelivery = parseInt(coolDeliverySelect.value) || 0;
    const isCOD = cashOnDeliverySelect.value === '1';
    // 代引き手数料は税込み合計を基準に計算
    const codFee = isCOD ? calculateCODFee(totalIncludingTax) : 0;
    
    // 総合計を計算（商品合計[税込] + 送料等）
    const total = totalIncludingTax + shippingFee + coolDelivery + codFee;
    
    // お客様情報を取得
    const customerNumber = document.getElementById('customer-number')?.value || '';
    const customerName = document.getElementById('customer-name')?.value || '';
    const customerRemarks = document.getElementById('customer-remarks')?.value || '';
    
    // 納品書テンプレートに情報を設定（2箇所とも同じ内容）
    for (let i = 1; i <= 2; i++) {
        // 日付の設定
        document.getElementById(`invoice-date-${i}`).textContent = dateString;
        
        // お客様情報の設定
        document.getElementById(`invoice-customer-number-${i}`).textContent = customerNumber;
        document.getElementById(`invoice-customer-name-${i}`).textContent = customerName;
        document.getElementById(`invoice-customer-remarks-${i}`).textContent = customerRemarks;
        
        // 商品リストの設定
        const itemsBody = document.getElementById(`invoice-items-${i}`);
        itemsBody.innerHTML = '';
        purchasedItems.forEach(product => {
            const price = product.isDiscounted 
                ? Math.ceil(product.price * (1 - product.discountRate / 100))
                : product.price;
            const itemTotal = price * product.quantity;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="col-name">${product.name}</td>
                <td class="col-price">¥${Math.ceil(price).toLocaleString()}</td>
                <td class="col-qty">${product.quantity}</td>
                <td class="col-total">¥${Math.ceil(itemTotal).toLocaleString()}</td>
            `;
            itemsBody.appendChild(row);
        });
        
        // 合計金額の設定
        document.getElementById(`invoice-subtotal-${i}`).textContent = `¥${subtotal.toLocaleString()}`;
        document.getElementById(`invoice-tax8-${i}`).textContent = `¥${tax8.toLocaleString()}`;
        document.getElementById(`invoice-tax10-${i}`).textContent = `¥${tax10.toLocaleString()}`;
        document.getElementById(`invoice-shipping-${i}`).textContent = shippingFee > 0 ? `¥${shippingFee.toLocaleString()}` : '無料';
        
        // 代引き手数料の表示
        const codRow = document.getElementById(`invoice-cod-row-${i}`);
        if (isCOD) {
            codRow.style.display = 'flex';
            document.getElementById(`invoice-cod-${i}`).textContent = `¥${codFee.toLocaleString()}`;
        } else {
            codRow.style.display = 'none';
        }
        
        // クール便の表示
        const coolRow = document.getElementById(`invoice-cool-row-${i}`);
        if (coolDelivery > 0) {
            coolRow.style.display = 'flex';
            document.getElementById(`invoice-cool-${i}`).textContent = `¥${coolDelivery.toLocaleString()}`;
        } else {
            coolRow.style.display = 'none';
        }
        
        document.getElementById(`invoice-total-${i}`).textContent = `¥${total.toLocaleString()}`;
    }
    
    // 納品書テンプレートを取得
    const invoiceTemplate = document.getElementById('invoice-template');
    
    // デバッグ：印刷前の状態を確認
    console.log('=== 納品書印刷デバッグ ===');
    console.log('Invoice template element:', invoiceTemplate);
    console.log('Has hidden class before:', invoiceTemplate.classList.contains('hidden'));
    console.log('Invoice items count:', purchasedItems.length);
    console.log('Invoice date:', dateString);
    console.log('Subtotal:', subtotal, 'Tax8:', tax8, 'Tax10:', tax10);
    console.log('Total:', total);
    
    // 納品書の内容を確認
    const items1 = document.getElementById('invoice-items-1');
    console.log('Invoice items 1 children:', items1.children.length);
    console.log('Invoice items 1 HTML:', items1.innerHTML.substring(0, 200));
    
    // 元の親要素を記憶
    const originalParent = invoiceTemplate.parentNode;
    const originalNextSibling = invoiceTemplate.nextSibling;
    
    // hiddenクラスを削除
    invoiceTemplate.classList.remove('hidden');
    invoiceTemplate.style.display = 'block';
    invoiceTemplate.style.visibility = 'visible';
    
    // bodyの直下に移動（印刷時に確実に表示されるようにする）
    document.body.appendChild(invoiceTemplate);
    
    console.log('Has hidden class after:', invoiceTemplate.classList.contains('hidden'));
    console.log('Display style:', invoiceTemplate.style.display);
    console.log('Classes:', invoiceTemplate.className);
    console.log('Parent element:', invoiceTemplate.parentNode.tagName);
    
    // DOMが更新されるのを待ってから印刷
    setTimeout(() => {
        console.log('About to print...');
        window.print();
        
        // 印刷後に元の位置に戻す
        setTimeout(() => {
            // 元の位置に戻す
            if (originalNextSibling) {
                originalParent.insertBefore(invoiceTemplate, originalNextSibling);
            } else {
                originalParent.appendChild(invoiceTemplate);
            }
            
            invoiceTemplate.classList.add('hidden');
            invoiceTemplate.style.display = '';
            invoiceTemplate.style.visibility = '';
            console.log('Reset to hidden and moved back');
        }, 500);
    }, 100);
}

// 代引き手数料を計算する関数
function calculateCODFee(amount) {
    if (amount < 10000) {
        return 330;
    } else if (amount < 30000) {
        return 440;
    } else if (amount < 100000) {
        return 660;
    } else if (amount < 300000) {
        return 1100;
    } else {
        return 1650;
    }
}
