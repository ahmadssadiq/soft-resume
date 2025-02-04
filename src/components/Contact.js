import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const button = document.getElementById('button');
        button.value = 'Sending...';

        emailjs.sendForm('service_ysjakvs', 'template_w4zzspg', form.current, 'iJ-hdO0tA1ycxu4nH')
            .then(() => {
                button.value = 'Send Email';
                setIsSent(true);  // Show success notification
                form.current.reset(); // Reset the form fields after submission

                // Hide notification after 3 seconds
                setTimeout(() => setIsSent(false), 3000);
            }, (err) => {
                button.value = 'Send Email';
                console.error(err); // Handle error without showing alert
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
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

                    <input type="submit" id="button" value="Send Email" className="btn" />

                    {/* Notification message that appears on successful submission */}
                    {isSent && <div className="notification success">Your message has been sent successfully!</div>}
                </form>

            </div>

        </section>
    );
}

export default Contact;