import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  
  // console.log("frontend user ", user.email);
  
  const [userData, setUserData] = useState(true);
  
  const { user,API } = useAuth();
  
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  // lets tackle our handle input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((prev) => ({ ...prev, [name]: value }));

    // first way
    // setContact({
    //   ...contact, // will preserve all the previously available data
    //   [name]: value,
    // });

    // Second way of declaring setContact
    // setContact((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault(); // prevents the feature of reloading on submission
    // front end to backend data transfer
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        // console.log(data);
        toast.success("Message Sent Successfully");
      } else {
        console.error("API Error : ", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
      alert("Message not Delivered!!");
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/contact/QScontact3.png"
              alt="We are always ready to help"
            />
          </div>
          {/* Actual Contact form Content */}

          <section className="section-form">
            <form onSubmit={handleContactForm}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  autoCapitalize=""
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols={30}
                  rows={6}
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>

      {/* Map Integration */}
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.2531079810688!2d77.64625837512482!3d13.083138887242539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA0JzU5LjMiTiA3N8KwMzgnNTUuOCJF!5e0!3m2!1sen!2sin!4v1719680830368!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};
