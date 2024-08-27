import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["clothing", "shoes"]);
  }, []);
  useEffect(() => {
    products.filter((product) => product === category);
  }, [category]);
  return (
    <div>
      Product List
      {products.map((product) => (
        <p className="text-center text-primary">{product}</p>
      ))}
    </div>
  );
};

export default ProductList;
