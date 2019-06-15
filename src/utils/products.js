
export const extractManufacturersFromProducts = products => [
    ...new Set(products.map(p => p.manufacture))
];