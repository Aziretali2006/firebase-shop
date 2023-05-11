import { ICONS } from "../icons/Icons"
import { PATH } from "../service/Path";

const headerTopIcons = [
  {
    id:1,
    icon: ICONS.FaWhatsapp,
  },
  {
    id:2,
    icon: ICONS.AiOutlineInstagram,
  },
  {
    id:3,
    caption: "Log In",
    route: PATH.connectedAuthPath.login,
  },
  {
    id: 4,
    caption: "Sign Up",
    route: PATH.connectedAuthPath.register,
  },
];

const headerBottomElements = [
  {
    id: 1,
    caption: "About",
  },
  {
    id:2, 
    caption: "Contacts",
  },
  {
    id: 3,
    caption: "Profile",
    route: PATH.connectedAuthPath.profile
  },
  {
    id: 4,
    caption: "Products",
    route: PATH.connectedAuthPath.products
  }
]

const SliderLists = [
  {
    id:1,
    img: "https://rare-gallery.com/uploads/posts/534758-black-and-white.jpg"
  },
  {
    id: 2,
    img: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fw7p21592015vmqygw6irv2a/public"
  }
];

const adminList = [
  {
    id:1 ,
    title: "Profile",
    route: PATH.AdminPath.profile,
    icons: ICONS.ImProfile
  },
  {
    id:2 ,
    title: "Products",
    route: PATH.AdminPath.products,
    icons: ICONS.MdProductionQuantityLimits
  },
  {
    id:3 ,
    title: "Contacts",
    route: PATH.AdminPath.contacts,
    icons: ICONS.MdContacts
  },
  {
    id:4 ,
    title: "Categories",
    route: PATH.AdminPath.categories,
    icons: ICONS.TbCategory
  },
  {
    id:5 ,
    title: "Slider",
    route: PATH.AdminPath.slider,
    icons: ICONS.BsSliders2
  },
]

export const List = {
  headerTopIcons,
  headerBottomElements,
  SliderLists,
  adminList
}