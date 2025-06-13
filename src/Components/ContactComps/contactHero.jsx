import { useState } from 'react';
import axios from 'axios';

function ContactPage() { 
  
const [formData, setFormData] = useState({
  fullname: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
// const validateForm = () => {
//    const newErrors = {};

//    if (!formData.email.trim()) {
//      newErrors.email = "email is required";
//    }

//    if (!formData.password) {
//      newErrors.password = "password is required";
//    }

//    setErrors(newErrors);
//    return Object.keys(newErrors).length === 0;
//  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/contact', {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });
  } catch (err) {
    console.log(err);
    alert('Failed to send email');
  }
};

  return (  
    <>
    <div className=" bg-white mt-35 mb-30 flex container mr-0 ml-0 items-center justify-center mx-0 p-4">  
      {/* Container card */}  
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 md:p-8 sm:p-4">  
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Get in Touch</h2>  
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">  
          We'd love to hear from you! Fill out the form below to send us a message.  
        </p>  

        {/* Form */}  
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>  
          {/* Name */}  
          <div className="flex flex-col w-full">  
            <label className="mb-2 text-sm font-medium text-gray-700"
            >Full Name</label>  
            <input  
              type="text"
              name='name'  
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"  
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"  
              />  
          </div>  

          {/* Email */}  
          <div className="flex flex-col w-full">  
            <label className="mb-2 text-sm font-medium text-gray-700">Email</label>  
            <input  
              type="email"  
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"  
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"  
              />  
          </div>  

          {/* Subject (full width on small screens) */}  
          <div className="md:col-span-2 flex flex-col w-full">  
            <label className="mb-2 text-sm font-medium text-gray-700">Subject</label>  
            <input  
              type="text"  
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"  
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"  
              />  
          </div>  

          {/* Message (full width on small screens) */}  
          <div className="md:col-span-2 flex flex-col w-full">  
            <label className="mb-2 text-sm font-medium text-gray-700">Message</label>  
            <textarea  
              rows={5}  
              placeholder="Your message..." 
              name='message'
              value={formData.message}
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"  
              ></textarea>  
          </div>  

          {/* Submit button full width */}  
          <div className="md:col-span-2 flex justify-center mt-4 w-full">  
            <button  
              type="submit"  
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"  
            >  
              Send Message  
            </button>  
          </div>  
        </form>  

        {/* Contact info / map, info section (responsive) */}  
        <div className="mt-8 grid md:grid-cols-2 gap-6">  
          {/* Contact Info */}  
          <div className="flex flex-col space-y-4">  
            {/* Location */}  
            <div className="flex items-start space-x-4">  
              <div className="text-blue-600 flex-shrink-0">  
                {/* Location icon */}  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 5-7 13-9 13S3 15 3 10s4-7 9-7 9 2 9 7z" />  
                  <circle cx={12} cy={10} r={3} />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">Location</h4>  
                <p className="text-gray-600 text-xs md:text-sm">123 Main St, City, Country</p>  
              </div>  
            </div>  
            {/* Phone & Email */}  
            <div className="flex flex-col space-y-4">  
              {/* Phone */}  
              <div className="flex items-center  space-x-4">  
                {/* Phone icon */}  
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7v4l-3 7H3l3-7V12l-3-7z" />  
                </svg>  
                <div>  
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">Call us</h4>  
                  <p className="text-gray-600 text-xs md:text-sm">+1 234 567 8900</p>  
                </div>  
              </div>  
              {/* Email */}  
              <div className="flex items-center space-x-4">  
                {/* Email icon */}  
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">  
                  <rect x={3} y={5} width={18} height={14} rx={2} ry={2} />  
                  <polygon points="3,7 12,13 21,7" />  
                </svg>  
                <div>  
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">Email</h4>  
                  <p className="text-gray-600 text-xs md:text-sm">contact@example.com</p>  
                </div>  
              </div>  
            </div>  
          </div>  
          {/* Map / Additional info can go here, also responsive */}  
        </div>  
      </div>  
    </div>  
              </>
  )  
}  

export default ContactPage