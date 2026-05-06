import Card from "../components/product/Card";
function ProductPage() {
  return (
    <>
      <Card
        imageId="abc123"
        discount={10}
        imageSize={200}
        title="Product"
        price={200}
        extended={false}
      />
    </>
  );
}
export default ProductPage;
