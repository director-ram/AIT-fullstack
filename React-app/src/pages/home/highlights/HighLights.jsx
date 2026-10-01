import { ProductCard } from "../../products/product/ProductCard";
import products from "../../../utils/data"

export const HighLights = ()=>{
return(
<>
<h2 className="text-center m-3 text-danger">Products</h2>
    <div className="product-grid">
        {products.map(product=>
            <ProductCard key={product.id} 
                    name={product.name}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                    rating={product.rating}
                    stock={product.stock}
                    image={product.image}
                    inStock={product.inStock}
                    discount={product.discount}
        />
    )}
    </div>
</>)
}