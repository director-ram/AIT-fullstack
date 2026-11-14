import Carousel from "../../components/carousel/Carousel.jsx"
import Todo from "../../features/todo.jsx"
import { CounterRedux } from "../../Redux/CounterRedux.jsx"
import { Reducer } from "../../Redux/Reducer.jsx"
import { Ref } from "../../REF/Ref.jsx"
import { Timer } from "../../REF/timer/Timer.jsx"
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
        <div className="d-flex flex-column justify-center container text-center m-5 p-2"><Todo/></div>
        <div className="d-flex flex-column justify-center container text-center m-5 p-2"><Ref/></div>
        <div className="d-flex flex-column justify-center container text-center m-5 p-2"><Timer/></div>
        <div className="d-flex flex-column justify-center container text-center m-5 p-2"><Reducer/></div>
        <center><CounterRedux/></center>
    </>)
}