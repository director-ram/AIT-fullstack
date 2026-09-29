import { ProductCard } from "../../products/product/ProductCard";
// import products from "../../utils/data"

export const HighLights = ({products})=>{
let productData = products;
return(
<>
    {productData.map(product=>
        <div className="product-list-item" key={product.id}>
            <ProductCard name={product.name}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                    rating={product.rating}
                    stock={product.stock}
                    image={product.image}
                    inStock={product.inStock}
                    discount={product.discount}
        />
        </div>
    )}
</>)
}