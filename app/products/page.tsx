import ProductList from '../components/ProductList';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');

  if (!res.ok) {
    throw new Error('Could not get products data');
  }

  const data = await res.json();
  return data.products;
}

const ProductsPage = async () => {
  const data = await getProducts();
  return (
    <div>
      <ProductList productsData={data} />
    </div>
  );
};

export default ProductsPage;
