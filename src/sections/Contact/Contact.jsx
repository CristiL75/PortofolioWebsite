import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef(); 
  const [isSent, setIsSent] = useState(false); 
  const [error, setError] = useState(""); 

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        'service_s9pny3s',  
        'template_7gevnqd', 
        form.current,        
        'sAYwrxvwkDGjvaYmF'  
      )
      .then(
        (result) => {
          console.log('Email trimis:', result.text);
          setIsSent(true);
          setError("");    
        },
        (error) => {
          console.error('Eroare la trimitere:', error);
          setError("Eroare la trimiterea mesajului. Încearcă din nou.");
        }
      );

    e.target.reset(); 
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {isSent && <p style={{ color: 'green' }}>Email sent successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form ref={form} onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
