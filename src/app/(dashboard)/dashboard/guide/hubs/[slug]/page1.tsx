const Product = ({ params }: { params: { slug: string } }) => {
  return <h1>Producto: {params.slug}</h1>;
};

export default Product;
