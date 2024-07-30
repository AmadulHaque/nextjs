import Dashboard from "@/app/components/Elements/Icons/DashboardIcon";
import ProfileIcon from "../Elements/Icons/ProfileIcon";
import SettingIcon from "../Elements/Icons/SettingIcon";
import CancelIcon from "../Elements/Icons/CancelIcon";
import DashboardIcon from "@/app/components/Elements/Icons/DashboardIcon";
import OrderIcon from "../Elements/Icons/OrderIcon";
import ShippingIcon from "../Elements/Icons/ShippingIcon";
import ReturnIcon from "../Elements/Icons/ReturnIcon";

export const sidebar_menu = [
  {
    role: "User",
    url: "/user/dashboard",
    icon: <DashboardIcon />,
    title: "Dashboard",
  },
  {
    role: "User",
    url: "/user/order",
    icon: <OrderIcon />,
    title: "My order",
  },

  {
    role: "User",
    url: "/user/profile",
    icon: <ProfileIcon />,
    title: "Profile",
  },
  // {
  //   role: "User",
  //   url: "/user/address",
  //   icon: <ShippingIcon />,
  //   title: "Shipping address",
  // },
  // {
  //   role: "User",
  //   url: "/user/return",
  //   icon: <ReturnIcon />,
  //   title: "My return",
  // },
  // {
  //   role: "User",
  //   url: "/user/cancel",
  //   icon: <CancelIcon />,
  //   title: "Cancelletion",
  // },

  {
    role: "User",
    url: "/user/setting",
    icon: <SettingIcon />,
    title: "Setting",
  },

  //   dealer section

  {
    role: "Dealer",
    url: "/dealer/dashboard",
    icon: <Dashboard />,
    title: "Dashboard",
  },

  {
    role: "Dealer",
    url: "/dealer/purchase",
    icon: <OrderIcon />,
    title: "Purchase",
  },
  {
    role: "Dealer",
    url: "/dealer/sales",
    icon: <OrderIcon />,
    title: "Sales",
  },

  // {
  //   role: "Dealer",
  //   url: "/dealer/profile",
  //   icon: <ProfileIcon />,
  //   title: "Profile",
  // },
  // {
  //   role: "Dealer",
  //   url: "/dealer/address",
  //   icon: <ShippingIcon />,
  //   title: "Shipping address",
  // },
  // {
  //   role: "Dealer",
  //   url: "/dealer/return",
  //   icon: <ReturnIcon />,
  //   title: "My return",
  // },
  // {
  //   role: "Dealer",
  //   url: "/dealer/cancel",
  //   icon: <CancelIcon />,
  //   title: "Cancelletion",
  // },

  {
    role: "Dealer",
    url: "/dealer/stock",
    icon: <OrderIcon />,
    title: "Stock",
  },
  {
    role: "Dealer",
    url: "/dealer/campain",
    icon: <OrderIcon />,
    title: "Campain",
  },
  // {
  //   role: "Dealer",
  //   url: "/dealer/setting",
  //   icon: <SettingIcon />,
  //   title: "Setting",
  // },
];
