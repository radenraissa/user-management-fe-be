import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });
            navigate("/");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body p-0">
        <div className="container is-fluid p-0" style={{ height: '100%' }}>
            <div className="columns is-gapless" style={{ height: '100%' }}>
                
                {/* KOLOM KIRI (GAMBAR) - Sama persis dengan Login */}
                <div className="column is-7 is-hidden-touch" style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="hero is-fullheight" style={{ backgroundColor: 'rgba(0, 0, 0, 0.37)' }}>
                        <div className="hero-body">
                            <div className="container has-text-white pl-5">
                                <h1 className="title is-1">Bergabunglah Bersama Kami</h1>
                                <h2 className="subtitle is-3">Aplikasi Manajemen User Modern</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* KOLOM KANAN (FORM REGISTER) */}
                <div className="column is-5 is-flex is-align-items-center is-justify-content-center has-background-black">
                    <div className="box" style={{ width: '80%', boxShadow: 'none', backgroundColor: 'rgba(83, 85, 85, 0.55)' }}> 
                        <h2 className="title has-text-centered has-text-light">Register</h2>
                        <form onSubmit={ Register }>
                            <p className='has-text-centered has-text-danger'>{msg}</p>
                            
                            {/* Input Name */}
                            <div className="field mt-5">
                                <label className="label has-text-light">Name</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="field mt-5">
                                <label className="label has-text-light">Email</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="field mt-5">
                                <label className="label has-text-light">Password</label>
                                <div className="control has-icons-left">
                                    <input type="password" className="input" placeholder='******' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            {/* Input Confirm Password */}
                            <div className="field mt-5">
                                <label className="label has-text-light">Confirm Password</label>
                                <div className="control has-icons-left">
                                    <input type="password" className="input" placeholder='******' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <button className="button is-success is-fullwidth is-medium">Register</button>
                            </div>
                            
                            <div className="field mt-4 has-text-centered">
                                <p className="has-text-light">Sudah punya akun? <Link to="/" className="has-text-success">Masuk disini</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Register