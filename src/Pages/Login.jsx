import { useState } from 'react'
import { Nav } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
// import donate from '../Dashboard/DonationPage';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password = "Unsupported Password Syntax";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: formData.email.trim(),
        password: formData.password,
      });
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert(response.data.message);
        console.log(response.data);
        history.pushState('/donate');
      }
    } catch (error) {
      alert(error.response.data.message);
      setErrors(error.response.data.errors);
      console.log(error);
    }
  };
  return (
    <>
    <Nav/>
    <div className="mt-30">
     
       <form
       onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 rounded shadow-xl bg-white"
      >
         <div className="font-bold text-3xl flex justify-center text-orange-500 mb-3 uppercase ">
        Sign in
      </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            
            id="email"
            name="email"
            placeholder="example@mail.com"
            onChange={handleChange}
            className={`shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight
              focus:bg-white focus:outline-blue-700 focus:shadow-outline ${
                errors.email && "border-red-500 focus:outline-red-500"
              }`}
              />
              {
                errors.email && (
                  <p className='text-sm text-red-500'>{errors.email}</p>
                )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <div className="relative">
          <input
          
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="enter yur password"
            onChange={handleChange}
            className="shadow appearance-none border rounded 
              w-full py-2 px-3 text-gray-700 leading-tight
               focus:bg-white focus:outline-blue-700 focus:shadow-outline"
               />
               <button
               type='button'
               onClick={() => setShowPassword(!showPassword)}
               className='absolute right-3 top-3 cursor-pointer'
               >
                {showPassword ?
                (<EyeSlashIcon className='h-5 w-5'/>
                ) : (
                  <EyeIcon className='h-5 w-5'/>
                )}
               </button>
          </div>
        </div>
        <button
          className="bg-gradient-to-r from-yellow-500 
          to-orange-600 hover:bg-gradient-to-l hover:from-bg-orange-700 hover:to-bg-yellow-700
          text-white font-semibold py-2 px-4 rounded-lg
          transition-all duration-200 transform hover:scale-[1.02] 
          focus:outline-none focus:shadow-outline cursor-pointer
          shadow-md active:transform active:scale-[0.98] active:bg-black
          "
          type="submit"
        >
          Login
        </button>
      </form> 
    </div>

    <Footer/>
  </>
  )
}

export default Login
