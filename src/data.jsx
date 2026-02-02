import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/",
    icon: <GridViewOutlinedIcon size={16} />,
  },
  {
    title: "Category",
    href: "/category/list",
    icon: <CategoryOutlinedIcon size={16} />,
    items: [
      {
        title: "Category List",
        href: "/category/list",
      },
      {
        title: "Add Category",
        href: "/category/add",
      },
      {
        title: "Edit Category",
        href: "/category/edit",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    icon: <RiProductHuntLine size={16} />,
    items: [
      {
        title: "Products List",
        href: "/products",
      },
      {
        title: "Add Product",
        href: "/products/addProduct",
      },
      {
        title: "Edit Product",
        href: "/products/editProduct",
      },
    ],
  },
  {
    title: "Customers",
    href: "/customers/list",
    icon: <PeopleAltOutlinedIcon size={16} />,
  },
  {
    title: "Orders",
    href: "/orders/list",
    icon: <ShoppingCartOutlinedIcon size={16} />,
  },
  {
    title: "Mail",
    href: "/mail/list",
    icon: <MarkEmailUnreadOutlinedIcon size={16} />,
  },
  {
    title: "Chat",
    href: "/chat/list",
    icon: <MarkUnreadChatAltOutlinedIcon size={16} />,
  },
  {
    title: "Logout",
    href: "/login",
    icon: <LogoutOutlinedIcon size={16} />,
  },
];

export const ordersData = [
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Pending",
  },
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Shipped",
  },
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Shipped",
  },
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Shipped",
  },
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Shipped",
  },
  {
    orderId: "#12345",
    customer: {
      name: "John Doe",
      avatar: "/avatar1.jpg",
      email: "abc@gmail.com",
    },
    item: 83,
    price: "$250.00",
    createdAt: [
      {
        date: "2023-10-05",
        time: "10:30 AM",
      },
    ],
    modifiedAt: [
      {
        date: "2023-10-06",
        time: "11:00 AM",
      },
    ],
    status: "Shipped",
  },
];

export const productsData = [
  {
    image: "/avatar1.jpg",
    title: "Tasty Metal Shirt",
    cat: "Clothing",
    sku: "SKU-52442",
    stock: 30,
    price: "$410.00",
    ratings: {
      rating: "3.5",
      reviews: 11,
    },
    status: "Pending",
  },
  {
    image: "/avatar1.jpg",
    title: "Modern Gloves",
    cat: "Accessories",
    sku: "SKU-52443",
    stock: 25,
    price: "$120.00",
    ratings: {
      rating: "4.0",
      reviews: 11,
    },
    status: "Published",
  },
  {
    image: "/avatar1.jpg",
    title: "Rustic Steel Computer",
    cat: "Electronics",
    sku: "SKU-52444",
    stock: 15,
    price: "$890.00",
    ratings: {
      rating: "4.5",
      reviews: 11,
    },
    status: "Published",
  },
  {
    image: "/avatar1.jpg",
    title: "Electronic Rubber Table",
    cat: "Electronics",
    sku: "SKU-52445",
    stock: 20,
    price: "$180.00",
    ratings: {
      rating: "4.0",
      reviews: 11,
    },
    status: "Draft",
  },
  {
    image: "/avatar1.jpg",
    title: "Gorgeous Bronze Gloves",
    cat: "Accessories",
    sku: "SKU-52446",
    stock: 35,
    price: "$90.00",
    ratings: {
      rating: "4.5",
      reviews: 11,
    },
    status: "Published",
  },
  {
    image: "/avatar1.jpg",
    title: "Sleek Frozen Ball",
    cat: "Electronics",
    sku: "SKU-52447",
    stock: 25,
    price: "$150.00",
    ratings: {
      rating: "4.0",
      reviews: 11,
    },
    status: "Pending",
  },
  {
    image: "/avatar1.jpg",
    title: "Ergonomic Frozen Pants",
    cat: "Clothing",
    sku: "SKU-52448",
    stock: 30,
    price: "$120.00",
    ratings: {
      rating: "4.5",
      reviews: 11,
    },
    status: "Published",
  },
];
