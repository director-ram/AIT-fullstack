import Carousel from "../../components/carousel/Carousel.jsx"
import Counter from "../Counter/Counter.jsx"

export const Home = () => {
    return (<>
        <h2 className="text-center">Home</h2>
        <div className="product-grid">
            <Carousel />
        </div>

        <div className="d-flex flex-column justify-center container text-center m-5 p-2">
            <h2>Blog</h2>
            <section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, sed!</p>
            </section>

            <div className="bg-secondary rounded-pill m-3 container text-center text-warning fs-4 p-3">
                <Counter />
            </div>
        </div>
    </>)
}