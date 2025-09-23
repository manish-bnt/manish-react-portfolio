import React from "react";
import "../Pages/Contact.css";
export default function Contact() {
  return (
    <section className="contact-sec">
      <div className="contact-details">
      <h1>Contact Me</h1>
        <ul>
          <li><i className="fa-solid fa-location-dot"></i><span>Greater Kailash, New Delhi</span></li>
          {/* <li>Phone: 9899728651</li> */}
          <li>
            <i className="fa-solid fa-envelope"></i>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manishbasnet500@gmail.com">Mail: Manishbasnet500@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="contact-title">
        <h1>Lets get in touch</h1>
      </div>
      <form
        // action="https://formspree.io/f/xnnzrrpa"
        method="post"
        className="contact-form"
      >
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Your Email" required />
        <textarea
          name="userMsg"
          id="userMsg"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button className="form-submit">Submit</button>
      </form>
    </section>
  );
}
