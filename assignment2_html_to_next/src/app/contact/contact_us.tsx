import Image from "next/image";

const ContactUs = () => {
    return (
      <section className="loacation">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6807.891977058829!2d73.15421194013982!3d31.443153850424142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268dd50794fef%3A0xf49f28623d3d1ed1!2sChak%20204%20RB%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700806557090!5m2!1sen!2s"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <section className="contact-us">
          <div className="row">
            <div className="content-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Canal Road, ABC Building</h5>
                  <p>Faisalabad</p>
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>+91 </h5>
                  <p>Monday To Saturday, 9AM To 6PM</p>
                </span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>sairakausar2@email.com</h5>
                  <p>Email Us Yor Query</p>
                </span>
              </div>
            </div>
            <div className="content-col">
              <form>
                <input type="text" placeholder="Enter Name" required />
                <input type="email" placeholder="Enter Email" required />
                <input type="text" placeholder="Enter Subject" required />
                <textarea rows={8} placeholder="Message" required></textarea>
                <button type="submit" className="hero_btn btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    );
}
export {ContactUs}