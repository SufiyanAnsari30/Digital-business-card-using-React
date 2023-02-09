import React from "react";
import { ReactDOM } from "react";
import twitter from './images/twitter.png';
import github from './images/github.png';
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
 import index from './index.css';
function Footer(){
    return(
        <div>
            <a href="https://twitter.com/SufianAnsari30"><img src={twitter} className="twitter1"/></a>
            <a href="https://github.com/SufiyanAnsari30"><img src={github} className="twitter2"/></a>
            <img src={facebook} className="twitter3"/>
            <img src={instagram} className="twitter4"/>
        </div>

    )
}

export default Footer;