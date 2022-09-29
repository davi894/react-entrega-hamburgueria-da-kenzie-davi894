import style from "./style.module.css";

function Product({
  elem,
  setCurrentSale,
  countProductsCart,
  setCountProductsCart,
}) {


  function adicionarCarrinho(idElem, count, elemnt) {
    if (idElem === elem.id) {
      setCurrentSale((elemCarrinho) => [...elemCarrinho, elem]);
    }

    /* if (elem === elemnt) {
      setCountProductsCart(count);
    } */
  }
  return (
    <li className={style.liComprar} key={elem.id}>
      <div className={style.bgImg}>
        <img className={style.imgComprar} src={elem.img} alt="" />
      </div>
      <div className={style.info}>
        <h2 className={style.nomeProduto}>{elem.name}</h2>
        <p className={style.categoria}>{elem.category}</p>
        <span className={style.preco}>R$ {elem.price}</span>
        <button
          className={style.adicionar}
          onClick={() =>
            adicionarCarrinho(elem.id, countProductsCart + 1, elem)
          }
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default Product;
