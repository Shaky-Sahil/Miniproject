import React, { useState } from "react"
import videoBg from '../images/videoBg.mp4'
import "./Register.css"
export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    const myStyle={
        backgroundImage: "url('https://a-static.besthdwallpaper.com/green-leaves-with-black-shadow-wallpaper-2048x1536-78534_26.jpg')",
        backgroundSize: 'cover'
      };

    return(
        <>
        <div className="register">
        <div className="video-class">
        <video src={videoBg} autoPlay loop muted /></div>
        <div style={myStyle} className="auth">
            <h2>REGISTER</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input value={name} name="name" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Password" id="password" name="password" />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input value={confirm} onChange={(e) => setConfirm(e.target.value)}type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" />
                <button type="submit">SIGN UP</button>
                <script>

                </script>
            </form>
            <button className="link">Already have an account? log in now</button>
        </div>
        </div>
        </>
    )
}