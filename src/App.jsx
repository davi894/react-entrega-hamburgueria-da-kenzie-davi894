import axios from "axios";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import "./App.css";

const urlKenzieBurger =
  "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [inputValor, setinputValor] = useState("");

  const [countProductsCart, setCountProductsCart] = useState(0);
  console.log(inputValor);
  function buscarPorFiltragem(input) {
    const inputTratado = input.toLowerCase();
    setinputValor(inputTratado);
    const filtragem = products.filter((elem) => {
      const nomeTratado = elem.name.toLowerCase();
      const categoryTratado = elem.category.toLowerCase();
      if (
        nomeTratado.includes(inputTratado) ||
        categoryTratado.includes(inputTratado)
      ) {
        return elem;
      }
    });

    setFilteredProducts(filtragem);
  }

  useEffect(() => {
    axios.get(`${urlKenzieBurger}`).then((resp) => setProducts(resp.data));
  }, []);

  return (
    <div className="App">
      <header>
        <div className="styleHeaderConteudo">
          <h1>
            Burger <span className="kenzie">kenzie</span>
          </h1>
          <div className="campoBusca">
            <div className="styInput">
              <input
                placeholder="Digitar Pesquisa"
                type="text"
                onChange={(event) => buscarPorFiltragem(event.target.value)}
              />
              <button className="pesquisar" type="button">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </header>

      <section>
        {!filteredProducts.length ? (
          <ProductsList
            products={products}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            countProductsCart={countProductsCart}
            setCountProductsCart={setCountProductsCart}
          />
        ) : (
         /*  <div>
            <div className="resultadoPesquisa">
              <h2>Resultado para: <span>{inputValor}</span></h2>
            </div> */
            <ProductsList
              products={filteredProducts}
              setCartTotal={setCartTotal}
              cartTotal={cartTotal}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              countProductsCart={countProductsCart}
              setCountProductsCart={setCountProductsCart}
            />
         /*  </div> */
        )}

        <Cart
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          countProductsCart={countProductsCart}
          setCountProductsCart={setCountProductsCart}
        />
      </section>
    </div>
  );
}

export default App;