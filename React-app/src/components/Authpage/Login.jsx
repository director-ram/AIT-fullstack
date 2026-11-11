import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const storageKeyStatus = "UserDetails"
    let loadUserForm = JSON.parse(localStorage.getItem(storageKeyStatus) || "[]")
    let navigate = useNavigate()
    let [users]=loadUserForm ? loadUserForm:[]
    let [details,setDetails] = useState({Email:'',Password:''})
    let [error,setError] = useState('')

    function handleChange(e){
        let {name,value} = e.target
        
        setDetails(prev=>({...prev,[name]:value}))
    }
    function handleLogin(){
        setError('')
        let {Email,Password} = details
        let {email,password} = users
        if(!Email || !Password){
            return setError('please fill out the fields')
        }
        if(Email === email && Password === password){
            setTimeout(()=>{
                navigate('/')
            },1500)
        }
        else{
            setError('Invalid password or email')
        }
    }
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
            <div className="card shadow-sm border-0 w-100" style={{ maxWidth: "32rem" }}>
                <div className="card-body p-4 p-md-5">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
                        <div className="mb-3">
                            <label htmlFor="loginEmail" className="form-label">Email</label>
                            <input id="loginEmail" className="form-control" type="email" placeholder="name@example.com" name='Email' value={details.Email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginPassword" className="form-label">Password</label>
                            <input id="loginPassword" className="form-control" type="password" placeholder="Enter your password" name='Password' value={details.Password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <p className="text-center text-body-secondary mt-4 mb-0">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}