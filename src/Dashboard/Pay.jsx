// function DonationInput({ label, name, type, register, errors, validation }) {
//     return (
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-2">{label}</label>
//         <input
//           type={type}
//           {...register(name, validation)}
//           className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400 ${errors[name] ? "border-red-500" : "border-gray-300"}`}
//           placeholder={label}
//         />
//         {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name].message}</p>}
//       </div>
//     );
//   }
  
//   export default DonationInput;
  