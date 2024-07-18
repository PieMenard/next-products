import SingleProduct from '@/app/components/SingleProduct';

type Params = {
  id: string;
};

type SingleProductPageProps = {
  params: Params;
};

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Could not get product data');
  }

  const data = await res.json();

  return data;
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const data = await getProduct(params?.id);
  return (
    <div>
      <SingleProduct singleProductData={data} />
    </div>
  );
};

export default SingleProductPage;
