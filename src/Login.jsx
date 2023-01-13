import React from 'react'
import './Login.css';

function Login() {


    const noneOrBLockPassword = () => {
        const nonePassword = document.querySelector(".password");
        nonePassword.type == "password" ? nonePassword.type = "tex" : nonePassword.type = "password";
    }

    return (
        <div className="App">
 
            <header className="App-header">

                <div className="main">
                    <p className='login'>User Login</p>
                    <input className='email' type="text" placeholder='Email ...' />
                    {/* <p className='errEmail'>sai email ? </p> */}
                    {/* <input className='phone' type="number" placeholder='Phone ...' /> */}
                    {/* <p className='errEmail'>sai email</p> */}
                    <input className='password' type="password" placeholder='Password...' /> <br />
                    <i onClick={noneOrBLockPassword} class="fa-solid fa-eye eye"></i> <br />
                    {/* <span className='errPassword'>sai password !</span> */}
                    {/* <button onClick={check}>Submit</button> <br /> */}
                    <a href="">Forgot Password</a>
                </div>

            </header>
        </div>
    )
}

export default Login