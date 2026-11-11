import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
            <div className="card shadow-sm border-0 w-100" style={{ maxWidth: "32rem" }}>
                <div className="card-body p-4 p-md-5">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email</label>
                            <input id="loginEmail" className="form-control" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input id="loginPassword" className="form-control" type="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <p className="text-center text-body-secondary mt-4 mb-0">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}