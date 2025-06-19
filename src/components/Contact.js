import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const button = document.getElementById('contactButton');
        button.innerText = 'Sending...';

        emailjs.sendForm('service_ysjakvs', 'template_w4zzspg', form.current, 'iJ-hdO0tA1ycxu4nH')
            .then(() => {
                button.innerText = 'Send Email';
                setIsSent(true);
                form.current.reset();
                setTimeout(() => setIsSent(false), 3000);
            }, (err) => {
                button.innerText = 'Send Email';
                console.error(err);
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-grid">
                    {/* Left side: Pattern background */}
                    <div className="contact-pattern"></div>
                    {/* Right side: Contact form */}
                    <div className="contact-form">
                        <h2>Contact Me</h2>
                        <form ref={form} onSubmit={sendEmail} id="form">
                            <div className="form-group">
                                <label htmlFor="from_name">Your Name</label>
                                <input type="text" id="from_name" name="from_name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>
                            <button id="contactButton" className="contact-btn" type="submit">
                                Send Email
                            </button>
                            {isSent && <div className="notification success">Your message has been sent successfully!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;