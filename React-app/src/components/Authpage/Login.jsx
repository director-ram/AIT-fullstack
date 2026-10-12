import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div>

            <h2>Login</h2>
            <form action="">
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
    )
}