// import { useState, useEffect } from "react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
//         isScrolled ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-[#cfaa5b] font-kavivanar">
//           Interior Designer
//         </h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#home" className="hover:text-[#cfaa5b]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#products" className="hover:text-[#cfaa5b]">
//                 Our Products
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-[#cfaa5b]">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect } from "react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
//         isScrolled ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-[#cfaa5b] font-kavivanar">
//           Interior Designer
//         </h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a
//                 href="#home"
//                 className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#products"
//                 className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//               >
//                 Our Products
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
//         isScrolled ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-[#cfaa5b] font-kavivanar">
//           Interior Designer
//         </h1>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-4">
//           <a
//             href="#home"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Our Products
//           </a>
//           <a
//             href="#contact"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* Social Media and Contact */}
//         <div className="flex items-center space-x-4">
//           <a
//             href="tel:+1234567890"
//             className="hidden md:block text-[#cfaa5b] font-semibold hover:text-[#a37e2f]"
//           >
//             +1 (234) 567-890
//           </a>
//           <div className="flex space-x-2">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//             >
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <nav className="block md:hidden mt-2 text-center">
//         <a
//           href="#home"
//           className="block text-[#cfaa5b] hover:text-[#a37e2f] py-1 transition-colors duration-300"
//         >
//           Home
//         </a>
//         <a
//           href="#products"
//           className="block text-[#cfaa5b] hover:text-[#a37e2f] py-1 transition-colors duration-300"
//         >
//           Our Products
//         </a>
//         <a
//           href="#contact"
//           className="block text-[#cfaa5b] hover:text-[#a37e2f] py-1 transition-colors duration-300"
//         >
//           Contact Us
//         </a>
//         <a
//           href="tel:+1234567890"
//           className="block text-[#cfaa5b] font-semibold py-1 hover:text-[#a37e2f]"
//         >
//           +1 (234) 567-890
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect } from "react";
// import { FaInstagram, FaYoutube, FaWhatsapp, FaBars } from "react-icons/fa";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
//         isScrolled ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-[#cfaa5b] font-kavivanar">
//           Interior Designer
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-4">
//           <a
//             href="#home"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Our Products
//           </a>
//           <a
//             href="#contact"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* Contact & Social Icons */}
//         <div className="flex items-center space-x-4">
//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/08329346770"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//           >
//             <FaWhatsapp />
//           </a>
//           {/* Instagram */}
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//           >
//             <FaInstagram />
//           </a>
//           {/* YouTube */}
//           <a
//             href="https://youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg"
//           >
//             <FaYoutube />
//           </a>
//         </div>

//         {/* Burger Menu for Mobile */}
//         <button
//           className="md:hidden text-[#cfaa5b] text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FaBars />
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <nav className="md:hidden bg-black text-white mt-2 py-2">
//           <a
//             href="#home"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Our Products
//           </a>
//           <a
//             href="#contact"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact Us
//           </a>
//           {/* Phone Number */}
//           <a
//             href="tel:08329346770"
//             className="block px-4 py-2 text-[#cfaa5b] font-semibold hover:text-[#a37e2f]"
//           >
//             +91 83293 46770
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;



// import { useState, useEffect } from "react";
// import { FaInstagram, FaYoutube, FaWhatsapp, FaBars } from "react-icons/fa";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
//         isScrolled ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl md:text-4xl font-bold text-[#cfaa5b] font-kavivanar">
//           Interior Designer
//         </h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <a
//             href="#home"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg md:text-2xl transition-colors duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg md:text-2xl transition-colors duration-300"
//           >
//             Our Products
//           </a>
//           <a
//             href="#contact"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-lg md:text-2xl transition-colors duration-300"
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* Contact & Social Icons */}
//         <div className="flex items-center space-x-4">
//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/08329346770"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-xl md:text-3xl"
//           >
//             <FaWhatsapp />
//           </a>
//           {/* Instagram */}
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-xl md:text-3xl"
//           >
//             <FaInstagram />
//           </a>
//           {/* YouTube */}
//           <a
//             href="https://youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#cfaa5b] hover:text-[#a37e2f] text-xl md:text-3xl"
//           >
//             <FaYoutube />
//           </a>
//         </div>

//         {/* Burger Menu for Mobile */}
//         <button
//           className="md:hidden text-[#cfaa5b] text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FaBars />
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <nav className="md:hidden bg-black text-white mt-2 py-2">
//           <a
//             href="#home"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Our Products
//           </a>
//           <a
//             href="#contact"
//             className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact Us
//           </a>
//           {/* Phone Number */}
//           <a
//             href="tel:08329346770"
//             className="block px-4 py-2 text-[#cfaa5b] font-semibold hover:text-[#a37e2f]"
//           >
//             +91 83293 46770
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaBars } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 shadow-md transition-colors duration-300 z-50 ${
        isScrolled ? "bg-gray-800 text-white" : "bg-white text-futuristic"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold text-[#cfaa5b] font-kavivanar">
         DesignTales
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a
            href="#home"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-base md:text-lg transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-base md:text-lg transition-colors duration-300"
          >
            Our Portfolio
          </a>
          <a
            href="#contact"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-base md:text-lg transition-colors duration-300"
          >
            Contact Us
          </a>
        </nav>

        {/* Contact & Action Icons */}
        <div className="flex items-center space-x-4">
          {/* Call */}
          <a
            href="tel:08329346770"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-2xl"
          >
            <FaPhoneAlt />
          </a>
          {/* Navigate */}
         
          {/* WhatsApp */}
          <a
            href="https://wa.me/08329346770"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cfaa5b] hover:text-[#a37e2f] text-3xl"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Burger Menu for Mobile */}
        <button
          className="md:hidden text-[#cfaa5b] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-black text-white mt-2 py-2">
          <a
            href="#home"
            className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#products"
            className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Our Portfolio
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
          {/* Call */}
          <a
            href="tel:08329346770"
            className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
          >
            Call: +91 83293 46770
          </a>
          {/* Navigate */}
          <a
            href="https://www.google.com/maps?q=your+business+location"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-[#cfaa5b] hover:text-[#a37e2f] transition-colors duration-300"
          >
            Navigate to Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
