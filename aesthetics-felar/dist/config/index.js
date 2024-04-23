"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'iPhones',
        value: 'iphones',
        featured: [
            {
                name: 'Editor picks',
                href: "/products?category=iphones",
                imageSrc: '/nav/iphones/iphone1.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=iphones&sort=desc',
                imageSrc: '/nav/iphones/iphone2.jpg',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=iphones',
                imageSrc: '/nav/iphones/iphone3.jpg',
            },
        ],
    },
    {
        label: 'Macbooks',
        value: 'macbooks',
        featured: [
            {
                name: 'Favorite Macbooks Picks',
                href: "/products?category=macbooks",
                imageSrc: '/nav/macbooks/macbook1.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=macbooks&sort=desc',
                imageSrc: '/nav/macbooks/macbook2.jpg',
            },
            {
                name: 'Bestselling macbooks',
                href: '/products?category=macbooks',
                imageSrc: '/nav/macbooks/macbook3.jpg',
            },
        ],
    },
    {
        label: 'iMac',
        value: 'imac',
        featured: [
            {
                name: 'Favorite iMac Picks',
                href: "/products?category=imac",
                imageSrc: '/nav/imac/imac1.png',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=imac&sort=desc',
                imageSrc: '/nav/imac/imac3.png',
            }
        ],
    },
    {
        label: 'iPads',
        value: 'ipads',
        featured: [
            {
                name: 'Favorite iPad Picks',
                href: "/products?category=ipads",
                imageSrc: '/nav/macbooks/macbook1.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=ipads&sort=desc',
                imageSrc: '/nav/macbooks/macbook2.jpg',
            },
            {
                name: 'Bestselling iPads',
                href: '/products?category=macbooks',
                imageSrc: '/nav/macbooks/macbook3.jpg',
            },
        ],
    },
    {
        label: 'AirPods',
        value: 'airpods',
        featured: [
            {
                name: 'Favorite Airpod Picks',
                href: "/products?category=airpods",
                imageSrc: '/nav/macbooks/macbook1.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=airpods&sort=desc',
                imageSrc: '/nav/macbooks/macbook2.jpg',
            },
            {
                name: 'Bestselling AirPods',
                href: '/products?category=macbooks',
                imageSrc: '/nav/macbooks/macbook3.jpg',
            },
        ],
    },
    {
        label: 'Chargers',
        value: 'chargers',
        featured: [
            {
                name: 'Macbook Chargers',
                href: "/products?category=macbook-chargers",
                imageSrc: '/nav/macbooks/macbook1.jpg',
            },
            {
                name: 'iPhone Chargers',
                href: '/products?category=iphone-chargers&sort=desc',
                imageSrc: '/nav/macbooks/macbook2.jpg',
            }
        ],
    },
];
