import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import cartIcon from "../../../assets/cartIcon.ico"
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../../Redux/CartSlice";

export default function SingleProduct() {
    let {id} = useParams()
    let cartValue = useSelector(state=>state.cart)
    let dispatch = useDispatch()

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
        <Link to={'/cartitems'} className="btn border-0 p-2 m-2"><img src={cartIcon} width={15} height={15}/>{cartValue.length > 0 ? <sup>{cartValue.length}</sup>: ''}</Link>
        <Link to="/practice" className="btn border-info p-2 ">⬅️</Link>
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
                <p className="rounded fs-1 text-success">₹{(singleProduct.price * 94.198).toFixed(2)}</p>
                <br/>
                <button className="btn btn-danger mx-3 p-3" onClick={()=>dispatch(RemoveFromCart(singleProduct.id))}>Remove</button>
                <button className="btn btn-warning p-3" onClick={()=>dispatch(AddToCart({...singleProduct,quantity:1}))}>Add Product</button>
            </div>
        </div>

    </div>
    </>
  )
}
