import Container from "@/src/components/Container";
import SingleProduct from "@/src/components/SingleProduct";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const getProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res?.json();

      return data;
    } catch (error) {
      console.log("error", error);
    }
  };

  const product = await getProduct();

  return (
    <Container className="py-10">
      {product && <SingleProduct product={product} />}
    </Container>
  );
};

export default ProductPage;
