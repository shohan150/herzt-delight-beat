import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Pages",
        menu: [
            {
                id: 1,
                link: "Home",
                path: "/"
            },
            {
                id: 2,
                link: "All Products",
                path: "/all-products"
            },
            {
                id: 3,
                link: "Cart",
                path: "/cart"
            },
            {
                id: 4,
                link: "Error Page",
                path: "/error-page"
            }
        ]
    },
    {
        id: 2,
        title: "Policies",
        menu: [
            {
                id: 4,
                link: "Privacy Policy",
                path: "/"
            },
            {
                id: 1,
                link: "Return Policy",
                path: "/"
            },
            {
                id: 2,
                link: "Shipping Policy",
                path: "/"
            },
                        {
                id: 5,
                link: "Terms & Conditions",
                path: "/"
            }
        ]
    },
    {
        id: 3,
        title: "Company",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "/"
            },
            {
                id: 4,
                link: "Careers",
                path: "/"
            },
            {
                id: 3,
                link: "Service Centres",
                path: "/"
            },
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        path: "/",
    },
];
