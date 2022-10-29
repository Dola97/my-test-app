import React, { Fragment } from "react";
import { ProductCard } from "../components/product-card";
import { useAppState } from "../hooks/app-store";

export const ProductsSection = () => {
  const { selectedCategory, setGarage } = useAppState();
  const _handleSetProduct = (item: any) => {
    setGarage(item);
  };
  return (
    <section style={{ marginTop: 20 }}>
      {selectedCategory?.products?.map((item: any, key: any) => {
        return (
          <Fragment key={`products_card${key}`}>
            <ProductCard
              onClick={() => _handleSetProduct(item.garages)}
              name={item.name}
              services={item.services}
            />
          </Fragment>
        );
      })}
    </section>
  );
};
