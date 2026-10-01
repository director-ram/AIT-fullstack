import { useCart } from '../../context/CartContext'

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <h2 className="text-center text-danger my-3 p-2">
                Cart <span className="badge bg-secondary fs-6 align-middle">{cartItems.reduce((total, item) => total + item.quantity, 0)} items</span>
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
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center text-secondary py-4">Cart is empty</td>
                                    </tr>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <tr key={index} className="align-middle">
                                            <td className="text-center">
                                                <img src={item.image} alt={item.name} width="50" height="50" className="object-fit-cover rounded" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>₹{item.price.toLocaleString('en-IN')}</td>
                                            <td>₹{(item.price * item.quantity).toLocaleString('en-IN')}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => removeFromCart(item.name)}>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart