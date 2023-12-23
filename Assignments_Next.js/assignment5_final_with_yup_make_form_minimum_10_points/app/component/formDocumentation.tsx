import React from 'react'
import {useSate} from 'react'

export default function FormDocumentation() {
  return (
      <div>
     

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    cnic: '',
    gender: '',
    city: '',
    province: '',
    country: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    // You can send the data to your backend or perform other actions.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>

      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>

      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>

      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label>
        CNIC:
        <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} />
      </label>

      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>

      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>

      <label>
        Province:
        <input type="text" name="province" value={formData.province} onChange={handleChange} />
      </label>

      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>

      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>
  





    </div>
  )
}
