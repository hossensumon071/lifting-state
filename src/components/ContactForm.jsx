import React, { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
};

const ContactForm = ({getContact}) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

const submitHandler = (e) => {
    e.preventDefault();
    alert("clicked");
    // console.log(values);
    getContact(values)
    setValues({...CONTACT_FORM_INIT_STATE})
}

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <br />
      <input type="submit" value={"Create New contact"} />
    </form>
  );
};

export default ContactForm;
