import './style.css'
import LP from '../components/ListaProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Home(){
    return(
        <>
        <h1>Floricultura</h1>
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
             >
                <div>
                    <img src="https://www.thespruce.com/thmb/OYSoYIo_3PUgc3urTv8KyLgE6yg=/2122x1415/filters:fill(auto,1)/494289973-56a34a3b3df78cf7727cb9d2.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://www.decorfacil.com/wp-content/uploads/2018/07/20180726como-cuidar-de-tulipas-topo.jpg" alt="" />
                </div>
                <div>
                    <img src="https://c.pxhere.com/images/d8/d5/6bca80ea92abd4eff7477f499bc3-1624981.jpg!d" alt="" />
                </div>
            </Carousel>
            <LP/>
        </>
    )
}

const [listaProdutos,setProdutos] = useState([
    {id: 1, nome: 'Violeta', preco: 'R$ 18,00'},
    {id: 2, nome: 'Tulipa', preco: 'R$ 22,00'},
    {id: 3, nome: 'Rosas', preco: 'R$ 19,00'},
    {id: 4, nome: 'Girassol', preco: 'R$ 12,00'},
    {id: 5, nome: 'Orquidia', preco: 'R$ 24,00'},
    {id: 6, nome: 'Copo de Leite', preco: 'R$ 29,00'},
    {id: 7, nome: 'Samanbaia', preco: 'R$ 23,00'},
    {id: 8, nome: 'Margarida', preco: 'R$ 14,00'},
    {id: 9, nome: 'Rosa do Deserto', preco: 'R$ 32,00'},
    {id: 10,nome: 'Lirio', preco: 'R$ 29,90'},
    {id: 11,nome: 'Bromélia', preco: 'R$ 17,99'},
    {id: 12,nome: 'Flor Cadáver', preco: 'R$ 58,99'},
    {id: 13,nome: 'Rosa da Primavera', preco: 'R$ 100,00'},
    {id: 14,nome: 'Hortênsia', preco: 'R$ 89,00'},
    {id: 15,nome: 'Jasmim',preco: 'R$ 112,00'},
])