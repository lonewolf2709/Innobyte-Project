import React from "react";
import "./Footer.css"
function Footer(){
    var d=new Date();
    var year=d.getFullYear();
    return <div className="Footer">
        <p>Copyright © {year} Kingsukh Guest House. All rights reserved.</p>
    </div>
}
export default Footer;