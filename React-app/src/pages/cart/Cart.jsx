// import { useCart } from '../../context/CartContext'

import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart,INCQnty,DECQnty } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    // const { cartItems, removeFromCart } = useCart();
    let cartData = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let totalPrice = cartData.reduce((total, product) => total + Number(product.price) * product.quantity * 94.198,0);

    return (
        <div>
            <div className="container my-3"><Link className="text-decoration-none fs-2 btn btn-sm" to={'/practice'}>⬅️</Link></div>
            <h2 className="text-center text-danger my-3 p-2">
                Cart <span className="badge bg-secondary fs-6 align-middle">{cartData.reduce((total, item) => total + item.quantity, 0)} items</span>
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center text-secondary py-4">Cart is empty</td>
                                    </tr>
                                ) : (
                                    cartData.map((item, index) => (
                                        <tr key={index} className="align-middle">
                                            <td className="text-center">
                                                <img src={item.thumbnail} alt={item.title} width="50" height="50" className="object-fit-cover rounded" />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.quantity}</td>
                                            <td>₹{(Number(item.price) * 94.198).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                            <td>
                                                <button className="btn btn-sm m-1 btn-outline-info" onClick={()=>dispatch(INCQnty(item))}>+</button>
                                                <button className="btn btn-sm m-1 btn-outline-warning" onClick={()=>dispatch(DECQnty(item))}>-</button>
                                                <button className="btn btn-sm m-1 btn-outline-danger" onClick={() => dispatch(RemoveFromCart(item.id))}>Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <center><h5 className="fs-2 text-center text-danger my-2">Total: ₹{totalPrice.toFixed(2).toLocaleString('en-IN')}</h5></center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart