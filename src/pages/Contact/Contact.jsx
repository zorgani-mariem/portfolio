

const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_5g4upyl', 'template_otzy5on', event.target)
      .then((result) => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email: ' + JSON.stringify(error));
      });

    event.target.reset(); // Clear the form after sending the email
  };

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
  <figure>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8962714.133302398!2d13.548607444141107!3d31.93592070623382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e1!3m2!1sen!2sbd!4v1719325747900!5m2!1sen!2sbd"
      width="400" height="300" loading="lazy" title="Google Map"></iframe>
  </figure>
</section>


      <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form id="contact-form" className="form" onSubmit={sendEmail}>
        <div className="input-wrapper">
          <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
          <input type="email" name="email" className="form-input" placeholder="Email address" required />
        </div>
        <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
        <button className="form-btn" type="submit">
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>

    </section>
  );
};

export default Contact;