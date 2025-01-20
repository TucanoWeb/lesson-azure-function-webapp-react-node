interface IProps {
  data: {
    name: string;
  };
}

const ProductsCardComp = ({ data }: IProps) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default ProductsCardComp;
