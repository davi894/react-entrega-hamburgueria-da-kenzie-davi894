import style from "./style.module.css";

import Product from "../Product";

function ProductsList({
  products,
  setCartTotal,
  cartTotal,
  currentSale,
  setCurrentSale,
  countProductsCart,
  setCountProductsCart,
}) {

  return (
    <ul className={style.ulProdctus}>
      {products.map((elem) => {
        return (
          <Product
            key={elem.id}
            elem={elem}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            countProductsCart={countProductsCart}
            setCountProductsCart={setCountProductsCart}
          />
        );
      })}
    </ul>
  );
}
export default ProductsList;
