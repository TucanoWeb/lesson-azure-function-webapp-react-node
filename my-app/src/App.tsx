import { Fragment, useEffect, useState } from "react";
import "./App.css";
import useProducts from "./hooks/useProducts";
import { IProductsResponse } from "./types/produts.types";
import ProductsCardComp from "./components/ProductsCard";

function App() {
  const { getProducts } = useProducts();
  const [data, setData] = useState<IProductsResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts().then((response) => setData(response));
    };

    fetchData();
  }, []);

  const renderProducts = (element: IProductsResponse, key: number) => {
    return (
      <Fragment key={key}>
        <ProductsCardComp data={element} />
      </Fragment>
    );
  };

  return (
    <div>
      {data?.length ? (
        data.map(renderProducts)
      ) : (
        <>
          {" "}
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}

export default App;
