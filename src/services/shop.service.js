class ProductService {
  constructor() {
	this.manufactures = null;
  }

  getProducts() {
    return fetch('http://react2018-shop.s3-website-eu-west-1.amazonaws.com/', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    })
      .then(r => r.json());
  }

  getProductsByFilter(products, { name, category, manufacture, featured }) {
    const nameQuery = name && name.length && name.toLowerCase() || null;
    
    const filterFn = p => (
      (nameQuery == null || p.name.toLowerCase().includes(nameQuery)) &&
      (category == null || p.category === category) &&
      (manufacture == null || p.manufacture === manufacture) &&
      (featured == null || p.featured === featured)
    );

    return products.filter(filterFn);
  }
}

export default new ProductService();