
const mainPath = {
  layout: "/*",
  auth: "accounts/*",
  admin: "/admin/*"
};

const AuthPath = {
  register: "/signup",
  login: "/login"
}

const AdminPath = {
  admin: "/admin",
  profile: "/admin/profile",
  contacts: "/admin/contacts",
  products: "/admin/products",
  categories: "/admin/categories",
  slider: "/admin/slider"
}

const connectedAuthPath = {
  register: "/accounts/signup",
  login: "/accounts/login",
  layout: "/",
  profile: "/profile",
  products: "/products"
}

export const PATH = {
  mainPath,
  AuthPath,
  connectedAuthPath,
  AdminPath
}