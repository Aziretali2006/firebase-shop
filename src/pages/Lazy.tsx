import React from "react"


// AuthPath
const Register = React.lazy(() => import("../apps/auth/register/Register"))
const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages = {
  Register,
  Login
}


//  LayoutPath

const Screen = React.lazy(() => import("../apps/layout/screen/Screen"));
const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));
const Products = React.lazy(() => import("../apps/layout/products/Products"));

export const LayoutPages = {
  Screen,
  Profile,
  Products
}