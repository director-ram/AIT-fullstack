import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
    let {id} = useParams()

    const [singleProduct,setSingleProduct] = useState({});

    useEffect(()=>{
        async function getProduct() {
            let {data} = await axios.get(`https://dummyjson.com/products/${id}`)
        
            setSingleProduct(data);
        }
        getProduct();
    },[id])
  return (
    <>
    <div className="container my-5">
        <Link to="/products" className="btn border-info p-2 ">⬅️</Link>
        <div className="row">

            <div className="col-4">
                <img src={singleProduct.thumbnail} />
            </div>
            <div className="col-4">
                <h2>{singleProduct.title}</h2>
                <p>
                  {singleProduct.description ? singleProduct.description : "Loading..."}
                </p>
                <br />
                <mark>{singleProduct.price}</mark>
                <br/>
                <button className="btn btn-danger m-3 p-3">Remove</button>
                <button className="btn btn-warning p-3">Add Product</button>
            </div>
        </div>

    </div>
    </>
  )
}
