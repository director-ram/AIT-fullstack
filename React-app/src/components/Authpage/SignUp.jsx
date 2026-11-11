import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    let navigate = useNavigate();

    let [form,setForm] = useState(
        {   userName:'',
            email:'',
            password:'',
            cnfPassword:'',
            mobile:''
        });

    let [err,setErr] = useState('')

    function handleData(e){
        let {name,value} = e.target
        
        setForm(prev=>({...prev,[name]:value}))
    }

    let pattren = {
        namePattren:/^[A-Z][a-z]{3,}$/,
        emailPattren: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        passwordPattren:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$*&%^!#?(/)])[A-Za-z\d\W]{8,}$/,
        mobilePattren : /^[0-9]{1,10}$/,
    }

    function registerForm(){
        // e.preventdefault()
        setErr('')
        let {userName,email,mobile,password,cnfPassword} = form
        let {namePattren,passwordPattren,mobilePattren,emailPattren} = pattren
        if(!userName || !email || !mobile || !password || !cnfPassword){
            return setErr('Kindly fill the all input fields!!')
        }
        if(!namePattren.test(userName)){
            return setErr(`username- ${userName} is incorrect`)
        }
        if(!emailPattren.test(email)){
            return setErr(`email- ${email} is incorrect`)
        }
        if(!mobilePattren.test(mobile)){
            return setErr(`mobile no- ${mobile} is incorrect`)
        }
        if(!passwordPattren.test(password)){
            return setErr(`password is invalid`)
        }
        if(cnfPassword != password){
            return setErr(`password doesn't match`)
        }
        setTimeout(()=>{
            navigate('/')
        },1000)
    }


    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-4">
            <div className="card shadow-sm border-0 w-100" style={{ maxWidth: "32rem" }}>
                <div className="card-body p-4 p-md-5">
                    <h2 className="card-title text-center mb-4">Sign Up</h2>
                    <form onSubmit={(e)=>{e.preventDefault();registerForm();}}>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">Username</label>
                            <input id="userName" className="form-control" type="text" placeholder="Enter your username" name="userName" value={form.userName} onChange={handleData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" className="form-control" type="email" placeholder="name@example.com" name="email" value={form.email} onChange={handleData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input id="mobile" className="form-control" type="tel" placeholder="Enter your mobile number" name="mobile" value={form.mobile} onChange={handleData} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" className="form-control" type="password" placeholder="Create a password" name="password" value={form.password} onChange={handleData}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnfPassword" className="form-label">Confirm Password</label>
                            <input id="cnfPassword" className="form-control" type="password" placeholder="Re-enter your password" name="cnfPassword" value={form.cnfPassword} onChange={handleData} />
                        </div>
                        {err && <div className="alert alert-danger" role="alert">{err}</div>}
                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </form>
                    <p className="text-center text-body-secondary mt-4 mb-0">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}