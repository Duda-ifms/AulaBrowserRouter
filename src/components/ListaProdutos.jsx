import { useStatefrom} from "react";

export default function LP() {
}

const [listaPedidos,setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}
  return(
    <div>
      {
        listaProdutos.map((produto) =>
        <div key={produto.id}>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
        </div>
        )}
        </div>
        );
  
     import ListaProdutos from './ListaProdutos';
     const App = () => {
      const produtos = [
        { id: 1, nome: 'Produto 1', preco: 'R$ 18,00' },
        { id: 2, nome: 'Produto 2', preco: 'R$ 22,00' },
      ];
    
      const adicionarItemPedidos = (produto) => {
        console.log('Produto selecionado:', produto);
      };
    
      return (
        <div>
          <ListaProdutos listaProdutos={produtos} adicionarItemPedidos={adicionarItemPedidos} />
        </div>
      );
       }