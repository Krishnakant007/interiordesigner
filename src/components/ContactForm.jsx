

// const ContactForm = () => (
//   <section id="contact" className="py-10 bg-gray-100">
//     <div className="container mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6 text-accent">Contact Us</h2>
//       <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Message</label>
//           <textarea className="w-full p-2 border rounded" placeholder="Your Message"></textarea>
//         </div>
//         <button className="w-full bg-accent  py-2 rounded hover:[#a37e2f]">
//           Submit
//         </button>
//       </form>
//     </div>
   

//   </section>
// );

// export default ContactForm;


import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Optionally, replace this with your form submission logic, like an API call
    alert("Form submitted successfully!");
  };

  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-accent">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded text-white font-bold animated-button"
          >
            Submit
          </button>
        </form>
      </div>
      <style jsx >{`
        .animated-button {
          background: linear-gradient(270deg, #96832c, #cfaa5b);
          background-size: 400% 400%;
          animation: moveBackground 4s ease infinite;
        }

        .animated-button:hover {
          animation: moveBackground 2s ease infinite;
        }

        @keyframes moveBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;





// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
//   className="relative px-6 py-3 text-white font-bold text-lg rounded-lg bg-blue-600 shadow-lg shadow-blue-600/50 transition duration-300 transform hover:scale-105 hover:shadow-blue-400/80 focus:outline-none focus:ring-4 focus:ring-blue-400/50 active:scale-95"
// >
//   Lightning Button
//   <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 hover:opacity-30"></span>
// </button>
// </div>
// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-6 py-3 text-white font-bold text-lg rounded-lg bg-gray-800 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
// >
// <span className="absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-pulse-light"></span>
// <span className="relative z-10">Rainbow Border Button</span>
// </button>
// </div>

// <div className="flex items-center justify-center min-h-screen ">
// <button
// className="relative px-6 py-3 text-white font-bold text-lg rounded-lg bg-gray-800 shadow-lg overflow-hidden group"
// >
// <span
// className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
// aria-hidden="true"
// ></span>
// <span
// className="absolute inset-0 rounded-lg bg-gray-800"
// aria-hidden="true"
// ></span>
// <span className="relative z-10">Rainbow Glow Button</span>
//   </button>
  
// </div>

// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-6 py-3 text-white font-bold text-lg rounded-lg bg-gray-800 overflow-hidden shadow-lg group"
// >
// {/* Glowing Rainbow Border */}
// <span
//   className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-glow bg-[length:200%_200%] opacity-80"
//   aria-hidden="true"
// ></span>

// {/* Inner Button Background */}
// <span
//   className="absolute inset-[2px] rounded-lg bg-gray-800"
//   aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10">Rainbow Glow Button</span>
// </button>

  
// </div>

// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-6 py-3 text-white font-bold text-lg rounded-lg bg-gray-800 overflow-hidden shadow-lg group"
// >
// {/* Glowing Rainbow Border */}
// <span
//   className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-cyan-500 animate-glow bg-[length:300%_300%] opacity-80 group-hover:opacity-100 shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(0,128,255,0.7)]"
//   aria-hidden="true"
// ></span>

// {/* Inner Button Background */}
// <span
//   className="absolute inset-[3px] rounded-lg bg-gray-800 shadow-inner"
//   aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10">Enhanced Glow Button</span>
// </button>
// </div>

// <div className="flex items-center justify-center min-h-screen b">
// <button
// className="relative px-8 py-4 text-white font-bold text-xl rounded-lg bg-gray-800 overflow-hidden shadow-lg group"
// >
// {/* Glowing Rainbow Border */}
// <span
// className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 via-pink-500 via-cyan-500 to-orange-500 animate-glow bg-[length:400%_400%] opacity-90"
// aria-hidden="true"
// ></span>

// {/* Inner Button Background */}
// <span
// className="absolute inset-[3px] rounded-lg bg-gray-900 shadow-inner opacity-95"
// aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10 group-hover:opacity-100 transition-opacity duration-300">
// World’s Greatest Button
// </span>
//   </button>
  

// </div>


// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-8 py-4 text-cyan-300 font-semibold text-lg rounded-lg border border-cyan-500 shadow-lg transition-all duration-300 bg-gray-800 hover:bg-cyan-800 group"
// >
// {/* Outer Glowing Border */}
// <span
// className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-sm animate-pulse-glow"
// aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10">Leonardo AI Button</span>
// </button>
// </div>

// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-8 py-4 text-white font-semibold text-lg rounded-lg bg-gray-800 overflow-hidden shadow-lg group"
// >
// {/* Outer Glowing Rainbow Border */}
// <span
// className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 via-pink-500 to-orange-500 animate-rainbow-glow bg-[length:400%_400%] opacity-80 blur-md"
// aria-hidden="true"
// ></span>

// {/* Inner Button Background */}
// <span
// className="absolute inset-[3px] rounded-lg bg-gray-900 shadow-inner"
// aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10 group-hover:opacity-100 transition-opacity duration-300">
// Rainbow Glow Button
// </span>
// </button>
// </div>


// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-8 py-4 text-white font-medium text-lg rounded-lg bg-gray-800 border border-transparent overflow-hidden group"
// >
// {/* Outer Glowing Rainbow Border */}
// <span
// className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 animate-rainbow-glow bg-[length:200%_200%] blur-md"
// aria-hidden="true"
// ></span>

// {/* Inner Button Content */}
// <span
// className="absolute inset-[2px] rounded-lg bg-gray-900 group-hover:bg-gray-700 transition-colors duration-300"
// aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
// Leonardo AI Button
// </span>
// </button>
// </div>

// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-10 py-4 font-bold text-white text-xl rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 
// animate-rainbow-glow shadow-[0_0_20px_5px_rgba(255,0,255,0.8),0_0_30px_10px_rgba(0,255,255,0.8)] transition-transform duration-300 ease-in-out group"
// >
// {/* Outer Glowing Effect */}
// <span
// className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 blur-lg opacity-75 rounded-lg animate-pulse-glow"
// aria-hidden="true"
// ></span>

// {/* Inner Button Background */}
// <span
// className="absolute inset-[4px] bg-gray-900 rounded-lg group-hover:bg-gray-700 transition duration-300"
// aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span className="relative z-10">
// Glowing Rainbow Button
// </span>
// </button>
// </div>

// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-10 py-4 font-bold text-white text-xl rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 
// animate-pulse-hover shadow-[0_0_20px_5px_rgba(255,255,255,0.6),0_0_30px_10px_rgba(0,255,255,0.8)] transition-transform duration-300 ease-in-out group"
// >
// {/* Outer Glowing Rainbow Border */}
// <span
//   className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500
//     animate-rainbow-border bg-[length:200%_200%] blur-md opacity-75"
//   aria-hidden="true"
// ></span>

// {/* Inner Button Gradient */}
// <span
//   className="absolute inset-[4px] rounded-lg bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400
//     animate-rainbow-fill bg-[length:300%_300%] opacity-90 transition duration-300"
//   aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span
//   className="relative z-10 text-white transition-all group-hover:text-cyan-300"
// >
//   Glowing Rainbow Button
// </span>
// </button>
// </div>
// <div className="flex items-center justify-center min-h-screen bg-gray-900">
// <button
// className="relative px-10 py-4 font-bold text-white text-xl rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 
// animate-pulse-hover shadow-[0_0_20px_5px_rgba(255,255,255,0.6),0_0_30px_10px_rgba(0,255,255,0.8)] transition-transform duration-300 ease-in-out group"
// >
// {/* Outer Glowing Rainbow Border */}
// <span
//   className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500
//     animate-rainbow-border bg-[length:200%_200%] blur-md opacity-75"
//   aria-hidden="true"
// ></span>

// {/* Inner Button Gradient */}
// <span
//   className="absolute inset-[4px] rounded-lg bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400
//     animate-rainbow-fill bg-[length:300%_300%] opacity-90 transition duration-300"
//   aria-hidden="true"
// ></span>

// {/* Button Text */}
// <span
//   className="relative z-10 text-white transition-all group-hover:text-cyan-300"
// >
//   Glowing Rainbow Button
// </span>
//   </button>
  
// </div>