import style from "./style.module.css";

function Product({ elem, setCurrentSale }) {
  function adicionarCarrinho(idElem) {
    setCurrentSale((elemCarrinho) => {
      if (elemCarrinho.find((elm) => elm.id === idElem)) {
        return elemCarrinho.map((elem) =>
          elem.id === idElem ? { ...elem, count: elem.count + 1 } : elem
        );
      }
      return [...elemCarrinho, { ...elem, count: 1 }];
    });
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
          onClick={() => adicionarCarrinho(elem.id)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}

export default Product;
