import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export const sidebarMenu=[
    {
        title:"Dashboard",
        href:"/",
        icon:<GridViewOutlinedIcon size={20} />
    },
    {
        title:"Category",
        href:"/category/list",
        icon:<CategoryOutlinedIcon size={20} />,
        items:[
            {
                title:"Category List",
                href:"/category/list"
            },
            {
                title:"Add Category",
                href:"/category/add"
            },
            {
                title:"Edit Category",
                href:"/category/edit"
            }

        ]
    },
    {
        title:"Products",
        href:"/products/list",
        icon:<RiProductHuntLine size={20} />,
        items:[
            {
                title:"Products List",
                href:"/products/list"
            },
            {
                title:"Add Product",
                href:"/products/add"
            },
            {
                title:"Edit Product",
                href:"/products/edit"
            }

        ]
    
    },
    {
        title:"Customers",
        href:"/customers/list",
        icon:<PeopleAltOutlinedIcon size={20} />
    },
    {
        title:"Orders",
        href:"/orders/list",
        icon:<ShoppingCartOutlinedIcon size={20} />
    },
    {
        title:"Mail",
        href:"/mail/list",
        icon:<MarkEmailUnreadOutlinedIcon size={20} />
    },
    {
        title:"Chat",
        href:"/chat/list",
        icon:<MarkUnreadChatAltOutlinedIcon size={20} />
    },
    {
        title:"Logout",
        href:"/login",
        icon:<LogoutOutlinedIcon size={20} />
    }
]