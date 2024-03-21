import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { solarProducts } from "../static/data";
import SuggestedProduct from "../components/SuggestedProduct";

const ProductDetailsPage = () => {
  const { name } = useParams();
  console.log("Name:", name);
  const [data, setData] = useState(null);

  const productName = name.replace(/-/g, " ");

  console.log("Product Name:", productName);

  useEffect(() => {
    const data = solarProducts.find((i) => i.name === productName);
    console.log("Solar Products:", solarProducts);
    console.log("Data in useEffect:", data);
    setData(data);
  }, [productName]);
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
