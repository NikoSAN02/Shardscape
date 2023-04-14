import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import shardscape_logo from "../images/shardscape_logo.png";

function Header() {


  return (
    <div style={{display: "flex" , justifyContent:"space-between", paddingLeft:"40px", paddingRight:"40px", background:"#302F32"}}>
      <img style={{ height:'60px', marginLeft:'100px', }} src={shardscape_logo}/><label style={{fontFamily:"Biryani", width:"69px", height:"27px", borderRadius:"10px", background:"#6F8476"}}>Home </label> <label style={{fontFamily:"Biryani", width:"69px", height:"27px", borderRadius:"10px", background:"#6F8476"}}>Gallary</label><ConnectButton/>
      
    </div>
  )
}

export default Header;