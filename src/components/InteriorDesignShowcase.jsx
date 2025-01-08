// import React from "react";

// const InteriorDesignShowcase = () => {
//   return (
//     <section className="bg-gray-50 py-10">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//           Transform Your Space with Stunning Interior Design
//         </h1>
//         <p className="text-center text-gray-600 text-lg mb-10">
//           Discover bespoke interior design solutions tailored to your style. At
//           <strong> [Your Business Name]</strong>, we create timeless, elegant, and functional spaces that reflect your unique personality.
//           Our expertise spans residential, commercial, and renovation projects.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Image Card 1 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p15.jpg"
//               alt="Modern living room interior design"
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Modern Living Room
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">
//                 Experience comfort and sophistication with our modern living room designs.
//               </p>
//             </div>
//           </div>

//           {/* Image Card 2 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p1.jpg"
//               alt="Luxury kitchen design"
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Luxury Kitchen Design
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">
//                 Make your kitchen the heart of your home with our luxurious designs.
//               </p>
//             </div>
//           </div>

//           {/* Image Card 3 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p11.png"
//               alt="Elegant office space design"
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Elegant Office Spaces
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">
//                 Create inspiring work environments with our expert office designs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteriorDesignShowcase;


// import React from "react";

// const InteriorDesignShowcase = () => {
//   return (
//     <section className="bg-gray-50 py-10">
//       <div className="container mx-auto px-4">
//         {/* Brand Name */}
//         <h1
//           className="text-5xl font-bold text-center mb-6"
//           style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//         >
//           Design Tales by Tina
//         </h1>
        
//         {/* Section Title */}
//         <h2
//           className="text-4xl font-semibold text-center mb-6"
//           style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//         >
//           Transform Your Space with Stunning Interior Design
//         </h2>
        
//         <p className="text-center text-gray-600 text-lg mb-10">
//           Discover bespoke interior design solutions tailored to your style. At
//           <strong> Design Tales by Tina</strong>, we create timeless, elegant, and functional spaces that reflect your unique personality.
//           Our expertise spans residential, commercial, and renovation projects.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Image Card 1 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p15.jpg"
//               alt="Modern living room interior design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Modern Living Room
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Experience comfort and sophistication with our modern living room designs.
//               </p>
//             </div>
//           </div>

//           {/* Image Card 2 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p1.jpg"
//               alt="Luxury kitchen design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Luxury Kitchen Design
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Make your kitchen the heart of your home with our luxurious designs.
//               </p>
//             </div>
//           </div>

//           {/* Image Card 3 */}
//           <div className="bg-white shadow-md rounded-md overflow-hidden">
//             <img
//               src="/images/p11.png"
//               alt="Elegant office space design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Elegant Office Spaces
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Create inspiring work environments with our expert office designs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteriorDesignShowcase;



// import React from "react";
// import { motion } from "framer-motion";

// const InteriorDesignShowcase = () => {
//   return (
//     <motion.section
//       className="bg-gray-50 py-10"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2, ease: "easeOut" }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Brand Name */}
//         <motion.h1
//           className="text-5xl font-bold text-center mb-6"
//           style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           Design Tales by Tina
//         </motion.h1>

//         {/* Section Title */}
//         <motion.h2
//           className="text-4xl font-semibold text-center mb-6"
//           style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//         >
//           Transform Your Space with Stunning Interior Design
//         </motion.h2>

//         <motion.p
//           className="text-center text-gray-600 text-lg mb-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//         >
//           Discover bespoke interior design solutions tailored to your style. At
//           <strong> Design Tales by Tina</strong>, we create timeless, elegant,
//           and functional spaces that reflect your unique personality. Our
//           expertise spans residential, commercial, and renovation projects.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Image Card 1 */}
//           <motion.div
//             className="bg-white shadow-md rounded-md overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <img
//               src="/images/p15.jpg"
//               alt="Modern living room interior design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Modern Living Room
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Experience comfort and sophistication with our modern living room
//                 designs.
//               </p>
//             </div>
//           </motion.div>

//           {/* Image Card 2 */}
//           <motion.div
//             className="bg-white shadow-md rounded-md overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <img
//               src="/images/p1.jpg"
//               alt="Luxury kitchen design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Luxury Kitchen Design
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Make your kitchen the heart of your home with our luxurious designs.
//               </p>
//             </div>
//           </motion.div>

//           {/* Image Card 3 */}
//           <motion.div
//             className="bg-white shadow-md rounded-md overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3, ease: "easeOut" }}
//           >
//             <img
//               src="/images/p11.png"
//               alt="Elegant office space design"
//               className="w-full h-96 object-cover"
//             />
//             <div className="p-4">
//               <h3
//                 className="text-2xl font-semibold mb-2"
//                 style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
//               >
//                 Elegant Office Spaces
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Create inspiring work environments with our expert office designs.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default InteriorDesignShowcase;




import { motion } from "framer-motion";

const InteriorDesignShowcase = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Brand Name */}
        <motion.h1
          className="text-5xl font-bold text-center mb-6"
          style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Design Tales by Tina
        </motion.h1>

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-semibold text-center mb-6"
          style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        >
        Awarded Top 25 most emerging women interior designer of the year 2021
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        >
          Discover bespoke interior design solutions tailored to your style. At
          <strong> Design Tales by Tina</strong>, we create timeless, elegant,
          and functional spaces that reflect your unique personality. Our
          expertise spans residential, commercial, and renovation projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image Card 1 */}
          <motion.div
            className="bg-white shadow-md rounded-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <img
              src="/images/p1.jpg"
              alt="Modern living room interior design"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
              >
                Modern Living Room
              </h3>
              <p className="text-gray-600 text-sm">
                Experience comfort and sophistication with our modern living room
                designs.
              </p>
            </div>
          </motion.div>

          {/* Image Card 2 */}
          <motion.div
            className="bg-white shadow-md rounded-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          >
            <img
              src="/images/p2.png"
              alt="Luxury kitchen design"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
              >
                Luxury Kitchen Design
              </h3>
              <p className="text-gray-600 text-sm">
                Make your kitchen the heart of your home with our luxurious designs.
              </p>
            </div>
          </motion.div>

          {/* Image Card 3 */}
          <motion.div
            className="bg-white shadow-md rounded-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          >
            <img
              src="/images/p11.png"
              alt="Elegant office space design"
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: "#cfaa5b", fontFamily: "'Playfair Display', serif" }}
              >
                Elegant Office Spaces
              </h3>
              <p className="text-gray-600 text-sm">
                Create inspiring work environments with our expert office designs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignShowcase;
