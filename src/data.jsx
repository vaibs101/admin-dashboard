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
        icon:<GridViewOutlinedIcon size={16} />
    },
    {
        title:"Category",
        href:"/category/list",
        icon:<CategoryOutlinedIcon size={16} />,
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
        icon:<RiProductHuntLine size={16} />,
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
        icon:<PeopleAltOutlinedIcon size={16} />
    },
    {
        title:"Orders",
        href:"/orders/list",
        icon:<ShoppingCartOutlinedIcon size={16} />
    },
    {
        title:"Mail",
        href:"/mail/list",
        icon:<MarkEmailUnreadOutlinedIcon size={16} />
    },
    {
        title:"Chat",
        href:"/chat/list",
        icon:<MarkUnreadChatAltOutlinedIcon size={16} />
    },
    {
        title:"Logout",
        href:"/login",
        icon:<LogoutOutlinedIcon size={16} />
    }
];

export const ordersData=[
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
                avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Pending'
        
    },
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
                avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Shipped'
        
    },
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
            avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Shipped'
        
    },
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
                avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Shipped'
        
    },
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
                avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Shipped'
        
    },
    {
        orderId: '#12345',
        customer: {
            name: 'John Doe',
                avatar: '/avatar1.jpg',
            email: 'abc@gmail.com'
        },
        item:83,
        price: '$250.00',
        createdAt:[{
            date: '2023-10-05',
            time: '10:30 AM'
        }],
        modifiedAt:[{
            date: '2023-10-06',
            time: '11:00 AM'
        }],
        status: 'Shipped'
        
    }
]