import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

interface IFormInput {
  clientName: string;
  clientEmail: string;
  subject:string;
  htmlMessage:string;
  honeypot:string;
}
export default function Contact() {
  const { control, register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    subject: '',
    htmlMessage:'',
    honeypot:'',
  });
  const [submitedForm,setSubmitedForm]= useState(false);
  const [loading,setLoading] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Replace with your Firebase Function URL
    const functionUrl = 'https://us-central1-serviceapp-247dc.cloudfunctions.net/sendContactEmail';
    setLoading(true);
    fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      response.json();
      setSubmitedForm(true);
      setLoading(false);
    })
    .then(data => {
      console.log('Success:', data);
      // Handle success response, maybe show a success message
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors here, such as showing an error message
      setSubmitedForm(false);
      setLoading(false);
    });
  };
    return(    <section id="contact-us" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Contact</h2>
        <h3><span>Contact Us</span></h3>
        <p style={{'textAlign':'left'}}>We are here to answer any questions you might have or to discuss how we can bring your project to life. Feel free to reach out to us by filling out the form below. Your inquiries and projects are important to us, and we look forward to understanding your needs and exploring how we can support your success.

Alternatively, if you prefer a face-to-face conversation or wish to see where the magic happens, you are warmly invited to visit our office. We are open from Monday to Friday, 9 AM to 9 PM, ready to welcome you and discuss your project in a comfortable and professional setting.

Whether you choose to connect digitally or step into our office, we assure you of our full attention and the promise to explore every avenue to support your vision.</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-6">
          <div className="info-box mb-4">
            <i className="bx bx-map"><FaMapMarkerAlt /></i>
            <h3>Our Address</h3>
            <p>Lebanon - Matern - Mansouriyeh 
              <br/>Municipality Street - Naddaf Building
              <br/>Block A - First Floor - Near Zeidan Press</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box  mb-4">
            <i className="bx bx-envelope"><MdOutlineEmail/></i>
            <h3>Email Us</h3>
            <p><a href="mailto:info@wmvp.dev">info@wmvp.dev</a></p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box  mb-4">
            <i className="bx bx-phone-call"><MdOutlinePermPhoneMsg/></i>
            <h3>Call Us</h3>
            <p><a href="tel:+9613706663">+961 3 706663</a></p>
          </div>
        </div>

      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">

        <div className="col-lg-6 ">
         <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12949.727891036782!2d35.56799910912681!3d33.85327596208166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17acdc9974b5%3A0x283cb12560151510!2spro-solutions.net!5e0!3m2!1sen!2slb!4v1707574022659!5m2!1sen!2slb" frameBorder="0" style={{'border':'0','width':'100%','height':'384px'}} allowFullScreen></iframe>
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
            <div className="row">
              <div className="col form-group">
                <input 
                className="form-control" placeholder="Your Name"  
                {...register("clientName", { required: true, minLength: 2 })} />
                {errors.clientName && <p className="error">Full name is required and must be more than 2 characters</p>}
              </div>
              <div className="col form-group">
                <input  className="form-control" placeholder="Your Email" 
                {...register("clientEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                  })} 
                  />
                   {errors.clientEmail && <p className="error">{errors.clientEmail.message}</p>}
              </div>
            </div>
            <div className="form-group">
              <input className="form-control"  placeholder="Subject" 
              {...register("subject", { required: true, maxLength: 255 })} />
               {errors.subject && <p className="error">Subject must be less than 255 characters</p>}
            </div>
            <div className="form-group">
              <textarea className="form-control" rows={5} placeholder="Message" 
                            {...register("htmlMessage", { required: true})}
                            
              ></textarea>
              {errors.htmlMessage && <p className="error">Message is required</p>}
              <input type="hidden" className="form-control"  placeholder="Honeypot" 
              {...register("honeypot")} />
            </div>
            {loading && <p>Loading...</p>}
            <div className="text-center">
              {!submitedForm && <button type="submit">Send Message</button>}
              {submitedForm && <div className="sent-message">Your message has been sent. Thank you! </div>}
              </div>
          </form>
        </div>

      </div>

    </div>
  </section>)
}