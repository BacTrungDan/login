import './App.css';
// import { useState } from 'react';
// import Login from './Login'


function App() {

  function checkEmail() {
    const dataEmail = document.querySelector(".email");
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(dataEmail.value)) {
      document.querySelector(".errEmail").style.display = "block";
      return false
    }
    else {
      document.querySelector(".errEmail").style.display = "none"
      return true
    }
  }
  //
  function checkPhone() {
    const dataPhone = document.querySelector(".phone").value;

    if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(dataPhone)) {
      document.querySelector(".errPhone").style.display = "none"
      return true;
    } else {
      document.querySelector(".errPhone").style.display = "block"
      return false
    }
  }



  function CheckPassword() {
    const dataPassword = document.querySelector(".password").value;
    const filter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (dataPassword.match(filter)) {
      document.querySelector(".errPassword").style.display = "none"
      return true;
    } else {
      document.querySelector(".errPassword").style.display = "block"
      return false;
    }
  }


  const check = () => {         
    checkEmail()
    checkPhone()
    CheckPassword()

    if (checkEmail() === true && CheckPassword() === true && checkPhone() === true) {
      alert("Đăng ký thành công !")
    }
    //  else {
    //   return alert("Đăng kí THẤT BẠI ?")
    // }
  }


  
  const noneOrBLockPassword = () => {
    const nonePassword = document.querySelector(".password");
    nonePassword.type == "password" ? nonePassword.type = "tex" : nonePassword.type = "password";
  }



  return (
    <div className="App">
      <header className="App-header">

        <div className="main">
          <p className='login'>User Login</p>
          <div style={{ position: "relative", }}>
            <input className='email' type="text" placeholder='Email ...' />
            <p className='errEmail'>Error email ? </p>
          </div>

          <div style={{ position: 'relative' }}>
            <input className='phone' type="number" placeholder='Phone ...' />
            <p className='errPhone'>Error phone ?</p>
          </div>

          <div style={{ position: 'relative' }}>
            <input className='password' type="password" placeholder='Password...' /> <br/>
            <i onClick={noneOrBLockPassword} class="fa-solid fa-eye eye"></i> <br/>
            <p className='errPassword'>Error password ?</p>
          </div>

          <button onClick={check}>Submit</button> <br/>
          <a href="">Forgot Password</a>
        </div>
      </header>
    </div>
  );
}

export default App;
