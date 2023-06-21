import React, { useState } from "react";
import settings from "../images/setting.png"
import { useNavigate } from 'react-router'
import '../App.css'
export const DropdownMenu = () =>{

    const [open,setOpen] = useState(false)

    const navigate = useNavigate()

    return(
        <div className="dropmenu">
            <img className="settings-image" onClick={()=>setOpen(!open)} src={settings}  alt="settings" />
            {
                open &&
                <div className="settings-list">
                   
                    <button className="settings-hover"onClick={()=>{navigate('/homepage')}}>About Us</button>
                    <button className="settings-hover"onClick={()=>{navigate('/settings')}}>Settings</button>
                    <button className="settings-hover"onClick={()=>{
                        localStorage.removeItem('authenticated')
                        navigate('/')}}>Log Out</button>
                </div>
            }
        </div>
    )
}