import './style.css'
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
        </>
    )
}

