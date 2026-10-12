import React from 'react'

export default function SignUp() {
    return (
        <div>
            <h2>SignUp</h2>
            <form action="">

                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <button>SignUp</button>
            </form>
            <p>Already have an account? <a href="#">Login</a></p>
        </div>
    )
}