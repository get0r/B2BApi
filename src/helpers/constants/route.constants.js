const AUTH_ROUTES = {
  REGISTER: '/register',
  LOGIN: '/login',
  USER: '/get-user',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot_password',
  NEW_PASSWORD: '/new_password',
};

const CATEGORY_ROUTES = {
  CATEGORIES: '/categories',
};

const PRODUCT_ROUTES = {
  PRODUCTS: '/products',
  REC_PRODUCTS: '/recommended',
  AD_PRODUCTS: '/ad-products',
  RATE: '/rate',
};

const BUSINESS_ROUTES = {
  BUSINESS: '/business',
  BUSINESS_APPROVE: '/approve',
  BUSINESS_BANUNBAN: '/ban-unban',
};

const ORDER_ROUTES = {
  ORDERS: '/orders',
  RETURN_REQ: '/return-req',
};

const SHIPPING_ROUTES = {
  SHIPPING: '/shipping',
};

const TRANSACTION_ROUTES = {
  TRANSACTION: '/transaction',
  IN_HOUSE: '/inHouse',
  IN_REQ: '/inHouse/req',
};

const INVENTORY_ROUTES = {
  INVENTORIES: '/inventories',
};

const ROUTES = {
  ROOT: '/',
};

const withId = (path, idName) => (path !== '/' ? `${path}/:${idName}` : `/:${idName}`);

module.exports = {
  ROUTES,
  AUTH_ROUTES,
  CATEGORY_ROUTES,
  PRODUCT_ROUTES,
  BUSINESS_ROUTES,
  ORDER_ROUTES,
  SHIPPING_ROUTES,
  TRANSACTION_ROUTES,
  INVENTORY_ROUTES,
  withId,
};
