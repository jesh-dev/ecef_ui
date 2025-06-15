// // import React from "react"
// import { useForm } from "react-hook-form";
// import DonationInput from "./Pay"; // Reusable input component

// function DonationForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors }
//   } = useForm();
  
//   const onSubmit = (data) => {
//     console.log("Donation Data:", data);
//     // Display success message to donor
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-4">
//       <DonationInput
//         label="First Name"
//         name="fullName"
//         type="text"
//         register={register}
//         errors={errors}
//         validation={{ required: "Name is required" }}
//       />
//       <DonationInput
//         label="Last Name"
//         name="fullName"
//         type="text"
//         register={register}
//         errors={errors}
//         validation={{ required: "Name is required" }}
//       />
//       <DonationInput
//         label="Email Address"
//         name="email"
//         type="email"
//         register={register}
//         errors={errors}
//         validation={{ required: "Email is required" }}
//       />
//       <DonationInput
//         label="Pledge Amount"
//         name="amount"
//         type="number"
//         register={register}
//         errors={errors}
//         validation={{ required: "Donation amount is required", min: { value: 1, message: "Amount must be greater than zero" } }}
//       />
//       <button type="submit" 
//       className="w-full py-3 mt-4 bg-purple-600 hover:bg-orange-700 text-white active:scale-[1.03] rounded transition duration-300">
//         Donate Now
//       </button>
//     </form>
//   );
// }

// export default DonationForm;
