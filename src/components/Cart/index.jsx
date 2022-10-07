import style from "./style.module.css";

function Cart({ currentSale, setCurrentSale }) {
  const filtragemProdutosRepetidos = [...new Set(currentSale)];

  function removerProduto(elm) {
    const criarCarrinho = currentSale.map((elem) =>
      elem.id === elm.id ? { ...elem, count: elem.count - 1 } : elem
    );

    setCurrentSale(
      criarCarrinho.filter((elemtn) => {
        if (elemtn.count > 0) {
          return { ...elemtn, count: elemtn.count - 1 };
        }
      })
    );
  }

  function removertodosOsProdutos() {
    setCurrentSale([]);
  }

  return (
    <aside className={style.carrinhodeCompras}>
      <div className={style.cabecalhoCarrinho}>
        <h2>Carrinho de compras</h2>
      </div>
      {!currentSale.length ? (
        <div className={style.bgDivCarrinhoVazio}>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      ) : (
        <>
          <ul className={style.ulCarrinho}>
            {filtragemProdutosRepetidos.map((elem) => {
              return (
                <li className={style.liCarrinho} key={elem.id}>
                  <div className={style.bgImgCarrinho}>
                    <img src={elem.img} alt="" className={style.imgCarrinho} />
                  </div>
                  <div>
                    <h2 className={style.h2Carrinho}>{elem.name}</h2>
                    <p className={style.categotyCarrinho}>{elem.category}</p>
                  </div>
                  <div className={style.divRemoverItenCarrinho}>
                    <span
                      onClick={() => removerProduto(elem)}
                      className={style.removerProduto}
                    >
                      Remover
                    </span>
                    <span className={style.inputNumber}>{elem.count}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={style.footerCarrinho}>
            <div className={style.somatorio}>
              <span className={style.total}>Total</span>
              <span className={style.soma}>
                R$
                {currentSale.reduce((a, b) => {
                  const somaCarrinho = (a + (b.price.toFixed(2)) * b.count).toFixed(6);
                  return parseFloat(somaCarrinho);
                }, 0)}
              </span>
            </div>
            <button
              className={style.removerTodosProdutos}
              onClick={removertodosOsProdutos}
            >
              Remover Todos
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
