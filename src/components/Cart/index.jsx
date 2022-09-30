import style from "./style.module.css";

function Cart({ currentSale, setCurrentSale }) {
  const filtragemProdutosRepetidos = [...new Set(currentSale)];

  function retirardoCarrinho(element) {
    console.log(element.id);
  }

  function removerProduto(elmId) {
    const removerProtudoCarrinho = currentSale.filter(
      (elem) => elem.id !== elmId
    );
    setCurrentSale(removerProtudoCarrinho);
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
                      onClick={() => removerProduto(elem.id)}
                      className={style.removerProduto}
                    >
                      Remover
                    </span>
                    <span
                      onClick={() => retirardoCarrinho(elem)}
                      className={style.inputNumber}
                    >
                      {elem.count}
                    </span>
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
                  const somaCarrinho = (a + b.price).toFixed(2);
                  return parseInt(somaCarrinho);
                }, 0)}
                ,00
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
