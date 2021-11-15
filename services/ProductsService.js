const PRODUCTS = [
    {
        id: 100,
        name: 'Nike Airmax',
        price: 10.00,
        color: "White",
        size: 41,
        image: require('../assets/Nike Airmax.png'),
        description: 'Comfortable wear on feet'
    },
    {
        id: 101,
        name: 'Nike Black',
        price: 11.00,
        color: 'Black and White',
        size: 50,
        image: require('../assets/Nike Black.png'),
        description: 'Suitable for all walks and sporting activities.'
    },
    {
        id: 102,
        name: 'Summer top ',
        price: 8.00,
        color: 'White',
        size: 100,
        image: require('../assets/summer top.png'),
        description: 'Casual Wear.'
    },
    {
        id: 103,
        name: 'Nike long',
        price: 10.00,
        color: 'Ash',
        size: 42,
        image: require('../assets/Nike hotcake.png'),
        description: 'Suitable for numerous events.'
    },
    {
        id: 104,
        name: 'Casualwear Blue',
        price: 10.00,
        color: 'Blue',
        size: 41,
        image: require('../assets/Casual Wear Blue.png'),
        description: 'Nice shirt which goes along with every jeans.'
    },
    {
        id: 105,
        name: 'White Top',
        price: 10.00,
        color: 'White',
        size: 40,
        image: require('../assets/white top.png'),
        description: 'Dazzles at formal event.'
    },
    {
        id: 106,
        name: 'Jordan red',
        price: 10.00,
        color: 'Red',
        size: 40,
        image: require('../assets/Jordan red.png'),
        description: 'Comfortable and condusive'
    },
    {
        id: 107,
        name: 'Yeezy',
        price: 8.00,
        color: 'White and Green',
        size: 39,
        image: require('../assets/yeezy.jpg'),
        description: 'Gaurds and comfort the feet very well.'
    },
    {
        id: 108,
        name: 'Black Shirt',
        price: 10.00,
        color: 'Black',
        size: 40.5,
        image: require('../assets/BlackShirt.png'),
        description: 'Nice Top for men.'
    },
    {
        id: 109,
        name: 'Nike Top',
        price: 10.00,
        color: 'Black',
        size: 41,
        image: require('../assets/Nikeshirt.png'),
        description: 'Goes along with all casual downs.'
    },
    {
        id: 110,
        name: 'Black longsleves',
        price: 10.00,
        color: 'Black',
        size: 41,
        image: require('../assets/black long.png'),
        description: 'Nice sea blue high top converse shoes'
    },
    {
        id: 111,
        name: 'Wine Longsleves untucked',
        price: 10.00,
        color: 'Wine',
        size: 41,
        image: require('../assets/untucked.png'),
        description: 'Longleeved wine top,goes along well with a jeans and a shoe'
    },
    {
        id: 112,
        name: 'Red Casual Top',
        price: 10.00,
        color: 'Red',
        size: 42,
        image: require('../assets/red casual.png'),
        description: 'Nice shirt for regular outings'
    },
    {
        id: 113,
        name: 'Sachse',
        price: 10.00,
        color: 'Red and White',
        size: 40,
        image: require('../assets/school hood.png'),
        description: 'Nice long overall atire.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}