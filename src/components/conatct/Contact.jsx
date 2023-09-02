import React , { useRef, useState} from "react";
import emailjs from '@emailjs/browser';

import "./contact.css";
const Contact = () => {
  const [ stats , setStats ] = useState("");
  const [btnStats , setBtnStats ] = useState("Send");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2huacy6', 'template_6rodqvh', form.current, '79lEsdfz6oZVTOiqO')
      .then((result) => {
          console.log(result.text);
          const timeOut = setInterval(() => {
            clearTimeout(timeOut);
            setStats("");
            setBtnStats("Send");
          }, 3000);
          setStats("green");
          setBtnStats("Sent");
      }, (error) => {
          console.log(error.text);
          setStats("red");
          setBtnStats("error");
          const timeOut = setInterval(() => {
          clearTimeout(timeOut);
          setStats("");
          setBtnStats("Try again");
          }, 3000);
          
      });
  };

  return (
    <section className="contact container section" id="contact">
      {" "}
      <h2 className="section_title">Get In Touch</h2>{" "}
      <div className="contact_container grid">
        {" "}
        <div className="contact_info">
          {" "}
          <h3 className="contact_title">Let's talk about everything!</h3>{" "}
          <p className="contact_details">
            Don't like forms? Send me an email 🍄.{" "}
          </p>{" "}
        </div>{" "}
        <form action="" className="contact_form" ref={form} onSubmit={sendEmail}>
          {" "}
          <div className="contact_form-group">
            <div className="contact_form-div">
              {" "}
              <input
                name="clientName"
                type="text"
                className="contact_form-input"
                placeholder="Insert your name"
              />{" "}
            </div>{" "}
            <div className="contact_form-div">
              {" "}
              <input
                name="clientEmail"
                type="text"
                className="contact_form-input"
                placeholder="Insert your EMail"
              />{" "}
            </div>{" "}
            <div className="contact_form-div">
              {" "}
              <input
                name="subject"
                type="text"
                className="contact_form-input"
                placeholder="Insert your Subject"
              />{" "}
            </div>{" "}
            

            
          </div>
          <div className="contact_form-div contact_form-area">
              {" "}
              <textarea
                name="message"
                type="textarea"
                id=""
                cols="30"
                rows="10"
                className="contact_form-input contact_form-area"
                placeholder="Write your message"
                resize="none"
              ></textarea>{" "}


            </div>{" "}
          <button className={`btn ${stats}` } type="submit" value="Send" >{btnStats}</button>
        </form>{" "}
      </div>
    </section>
  );
};

export default Contact;
