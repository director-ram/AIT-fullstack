import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DECQnty, INCQnty, RemoveFromCart } from "./CartSlice";

export const CartItems = () => {
  let cartData = useSelector((state) => state.cart);
  let dispatch = useDispatch()
  let totalPrice = cartData.reduce((total, product) => total + Number(product.price) * product.quantity,0);
  
  return (
    <>
      <div className="container py-4">
        <div className="my-4">
          <Link to="/practice" className="btn btn-outline-info">
            ⬅️
          </Link>
          <center><h3 className="fw-bold text-primary text-decoration-underline">CART</h3></center>
          <div className="row g-4 mt-2">
            {cartData.length > 0 ? cartData.map((product) => (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.thumbnail}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "220px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-secondary">
                      {product.description.length >= 20
                        ? product.description.slice(0, 20) + "..."
                        : product.description}
                    </p>
                    <p className="fs-5 fw-bold text-success mb-3">
                      ₹{product.price}
                    </p>
                    <div className="d-flex align-items-center mt-auto text-center">
                      <button className="btn btn-info me-2" onClick={()=>dispatch(DECQnty(product))}>-</button>
                      <input type="number" readOnly value={product.quantity} style={{width:"50px"}} className="form-control text-center" />
                      <button className="btn btn-warning ms-2" onClick={()=>dispatch(INCQnty(product))}>+</button>
                      <button className="btn btn-danger mx-4" onClick={()=>dispatch(RemoveFromCart(product.id))}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )) :<h2 className="text-center text-warning fs-2" style={{height:"105px"}}>Add products to cart!</h2>}
          </div>
          {cartData.length > 0 && <div className="text-center mt-4">
                      <h4 className="fw-bold text-warning">TotalPrice: <span className="text-dark">₹{totalPrice.toFixed(2)}</span></h4>
            </div>}
        </div>
      </div>
    </>
  );
};
