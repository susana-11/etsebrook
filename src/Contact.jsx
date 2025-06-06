import React, { useState } from 'react';
import './Contact.css';

const Contact = ({theme}) => {
  const isDarkMode = theme==='dark';
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [sent, setSent] = useState(false);

const handleChange = e => {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = e => {
e.preventDefault();
setSent(true);
setTimeout(() =>setSent(false), 3000); 
  };
  
    return (

  <section className={`contact-section $ {isDarkMode ? 'dark' : 'light'}`}>
  <div className="projects-tag-wrapper">
  <h1 className='contact-tag'>Contact</h1>
</div>
  <form className="contact-form" onSubmit={handleSubmit}>
  <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className={isDarkMode ? 'dark-input' :'light-input'}/>
  <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
  <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
  <button type="submit">Send</button>
          {sent &&<p className="sent-message">Message sent successfully!</p>}
  </form>
  </section>
      
     
    );
 

  
};
export default Contact;