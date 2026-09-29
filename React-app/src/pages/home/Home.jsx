import { HighLights } from "./highlights/HighLights"
import products from "../../utils/data.js"

export const Home = ()=>{
    return(<>
    <h2>Home</h2>
        <div className="product-grid">
        <HighLights products={products}/>
        </div>
    </>)
}