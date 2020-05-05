// generate data

const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const size = () => random([
    'Extra small',
    'Small',
    'Medium',
    'Large',
    'Extra Large'
]);


const color = () => random([
    'Red',
    'Green',
    'Blue',
    'Orange',
    'Yellow'
]);


const designer = () => random([
    'Ralph Lauren',
    'Alexander Wang',
    'Grayse',
    'Marc NY Performance',
    'Scrapbook',
    'J Brand Ready to Wear',
    'Vintage Havana',
    'Neiman Marcus Cashmere Collection',
    'Derek Lam 10 Crosby',
    'Jordan'
]);

const type = () => random ([
    'Cashmere',
    'Cardigans',
    'Crew and Scoop',
    'V-Neck',
    'Shoes',
    'Cowl & Turtleneck'
]); 

const price = () => (Math.random() * 100).toFixed(2);

function generate(count) {
    const data = [];

    for (let i = 0; i < count; i++) {
        const currColor = color();
        const currSize = size();
        const currType = type();
        const currDesigner = designer();
        const currPrice = price();

        data.push({
            name: `${currDesigner} ${currType} ${currColor} ${currSize}`,
            color: currColor,
            size: currSize,
            designer: currDesigner,
            type: currType,
            price: currPrice,
            salesPrice: currPrice * .8
        });
    }

    return data;
}

export default generate;