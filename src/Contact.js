import React from "react"
import "./Contact.css"
function Contact()
{
   var x=window.innerWidth;
    return <div id="contact" className="Contact">
    {x>768&&
       <div className="contact-2">
       <p className="left-head">Contact Info</p>
            <div className="xyz">
            <p className="left-text">Beside Barshal Water Tank,Manpur, Barhanti,West Bengal 723156</p>
            <p className="left-text">kkghosh0099@gmail.com</p>
            <p className="left-text">+91 9007062180</p>
            <div className="icons">
                <div className="icon-div2"><i class="ri-facebook-line"></i></div>
                <p><i class="ri-instagram-line"></i></p>
                <p><i class="ri-twitter-x-line"></i></p>
                <p><i class="ri-linkedin-fill"></i></p>
            </div>
            </div>
          </div>}
        <div className="contact-1">
            <div className="abc">
            <p className="send-message">Send a Message</p>
            <div className="row">
            <div className="form-floating col form-entry">
              <input className="form-control form-input1" id="floatingFirst" placeholder="FIrst Name"></input>
              <label for="floatingFirst" className="label-form">First Name</label>
            </div>
            <div className="form-floating col form-entry">
              <input className="form-control form-input1" id="floatingLast" placeholder="LastName"></input>
              <label for="floatingLast" className="label-form">Last Name</label>
            </div>
            </div>
            <div className="row">
            <div className="form-floating col form-entry">
              <input type="email" className="form-control form-input1" id="floatingEmail" placeholder="anme@gamil.com"></input>
              <label for="floatingEmail" className="label-form">Email Address</label>
            </div>
            <div className="form-floating col form-entry">
              <input className="form-control form-input1" id="floatingNumber" placeholder="Mobile Number"></input>
              <label for="floatingNumber" className="label-form">Mobile Number</label>
            </div>
            </div>
            <div className="row">
            <div class="form-floating col form-entry">
               {x>768 && 
                <textarea class="form-control form-textarea1" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>}
                {x<768 && 
                <textarea class="form-control form-textarea1" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 60}}></textarea>}
                <label for="floatingTextarea2" className="label-form">Write Your Message</label>
            </div>
            </div>
            <div className="second-button">
            <button type="button" class="btn btn-primary">Send</button>
            </div>
        </div>
        </div>
        </div>
}
export default Contact;