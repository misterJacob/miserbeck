import React, { useRef, useState } from "react";
// import { MdOutlineAttachEmail, MdOutlinePlace } from "react-icons/md";
// import { FiPhoneCall } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
import { ContactData } from "./contactData";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [isOpen, setIsOpen] = useState(false); //state for the contact form
  const [increase, setIncrease] = useState(false); //state for the contact form

  function toggleShown() {
    console.log(toggleShown);
    setIsOpen(!isOpen);
  }
  function toggleIncrease() {
    console.log(toggleIncrease);
    setIncrease(!increase);
  }
  const whatsapp = increase ? "whatsapp-full-gb.jpg" : "whatsapp.jpg";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqhih38",
        "template_apec1jw",
        formRef.current,
        "Xu0uuYKpc0ehePwxn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-wrap">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="liner"></div>
        <div className="contacts-opcions">
          {ContactData.map((item, index) => {
            return (
              <div className="opcion" key={index}>
                <h3>{item.title}</h3>
                <div className="icon">
                <a href={item.href} target="blanc">
                    {item.icon}
                  </a>
                </div>
                {item.content && <p>{item.content}</p>}
                {item.image && (
                  <img
                    onClick={toggleIncrease}
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/contact/${whatsapp}`
                    }
                    alt={item.title}
                    className={increase ? "image increase" : "image"}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="form-title">
          <h2 onClick={toggleShown}>
            Write me a message and i will get back to You
          </h2>
        </div>
        <div className="form-container-wrap">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={isOpen ? "form-container active" : "form-container "}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Valid Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
