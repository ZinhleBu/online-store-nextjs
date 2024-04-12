export const PRODUCT_CATEGORIES = [
    {
      label: 'iPhones',
      value: 'iphones' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=iphones`,
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
      value: 'macbooks' as const,
      featured: [
        {
          name: 'Favorite Macbooks Picks',
          href: `/products?category=macbooks`,
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
  ]