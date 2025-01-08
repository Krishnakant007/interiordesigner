// import { FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => (
//   <footer className="bg-gray-800 text-[#cfaa5b] p-6">
//     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//       {/* Address Section */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Address</h3>
//         <p className="text-sm">
//           Kokil Apartment, Jai Hind College Rd, Mayur Colony, Deopur, Dhule, Maharashtra 424002
//         </p>
//         <p className="mt-2 text-sm">Phone: 083293 46770</p>
//       </div>

//       {/* Google Maps Embed */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Location</h3>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d119263.49438963202!2d74.68792886310752!3d20.91295534171632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bdec5a8f9db9fcf%3A0x1e71a875862ca936!2sDesign%20tales%20By%20Tina%2C%20Kokil%20Apartment%2C%20Jai%20Hind%20College%20Road%2C%20Mayur%20Colony%2C%20Deopur%2C%20Dhule%2C%20Maharashtra!3m2!1d20.9129544!2d74.770394!4m5!1s0x3bdec5a8f9db9fcf%3A0x1e71a875862ca936!2sDesign%20tales%20By%20Tina!3m2!1d20.9129544!2d74.770394!5e0!3m2!1sen!2sin!4v1733312392154!5m2!1sen!2sin"
//           width="100%"
//           height="200"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="rounded-lg"
//         ></iframe>
//       </div>

//       {/* Social Media Links */}
//       <div className="flex flex-col items-center md:items-end">
//         <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
//         <div className="flex space-x-4">
//           <a
//             href="https://www.instagram.com/designtales_bytina/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl transition-colors duration-300"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.youtube.com/@DesignTales2797/videos"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl transition-colors duration-300"
//           >
//             <FaYoutube />
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Branding Section */}
//     <div className="mt-6 text-center border-t border-[#cfaa5b] pt-4">
//       <p className="text-sm">© 2024 Design Tales. All rights reserved.</p>
//     </div>
//   </footer>
// );

// export default Footer;



import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer className="relative bg-gray-800 text-[#cfaa5b] p-6 overflow-hidden">
    {/* Canvas Background */}
    <canvas
      id="footerCanvas"
      className="absolute top-0 left-0 w-full h-full z-0"
    ></canvas>

    <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-10">
      {/* Address Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b border-[#cfaa5b] pb-2">
          Address
        </h3>
        <p className="text-sm leading-relaxed">
          Kokil Apartment, Jai Hind College Rd, Mayur Colony, Deopur, Dhule,
          Maharashtra 424002
        </p>
        <p className="mt-2 text-sm">Phone: 083293 46770</p>
      </div>

      {/* City Availability Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b border-[#cfaa5b] pb-2">
          Cities Available
        </h3>
        <ul className="text-sm font-bold space-y-1">
          <li>Dhule</li>
          <li>Nashik</li>
          <li>Pune</li>
        </ul>
      </div>

      {/* Google Maps Embed */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b border-[#cfaa5b] pb-2">
          Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d119263.49438963202!2d74.68792886310752!3d20.91295534171632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bdec5a8f9db9fcf%3A0x1e71a875862ca936!2sDesign%20tales%20By%20Tina%2C%20Kokil%20Apartment%2C%20Jai%20Hind%20College%20Road%2C%20Mayur%20Colony%2C%20Deopur%2C%20Dhule%2C%20Maharashtra!3m2!1d20.9129544!2d74.770394!4m5!1s0x3bdec5a8f9db9fcf%3A0x1e71a875862ca936!2sDesign%20tales%20By%20Tina!3m2!1d20.9129544!2d74.770394!5e0!3m2!1sen!2sin!4v1733312392154!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-lg font-semibold mb-3 border-b border-[#cfaa5b] pb-2">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/designtales_bytina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@DesignTales2797/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl transition-colors duration-300"
          >
            <FaYoutube />
          </a>
         
        </div>
      </div>
    </div>

    {/* Branding Section */}
    <div className="mt-6 text-center border-t border-[#cfaa5b] pt-4 z-10">
      <p className="text-sm">© 2025 Design Tales. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;


 // <a
          //   href="https://www.linkedin.com/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl transition-colors duration-300"
          // >
          //   <FaLinkedin />
          // </a>