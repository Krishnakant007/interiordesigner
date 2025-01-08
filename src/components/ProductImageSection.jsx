// const ProductImageSection = () => {
//   const products = [
//     { name: 'Product 1', image: '/images/p1.jpg' },
//     { name: 'Product 2', image: '/images/p2.png' },
//     { name: 'Product 3', image: '/images/p3.png' },
//   ];

//   return (
//     <section id="products" className="py-10 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product, index) => (
//             <div key={index} className="bg-white p-4 shadow-md rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-bold">{product.name}</h3>
//               <p className="text-gray-600 mt-2">Description of {product.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductImageSection;



// import { motion } from "framer-motion";

// const ProductImageSection = () => {
//   const products = [
//     { name: "Product 1", image: "/images/p1.jpg" },
//     { name: "Product 2", image: "/images/p2.png" },
//     { name: "Product 3", image: "/images/p3.png" },

//     { name: "Product 5", image: "/images/p5.png" },

//     { name: "Product 6", image: "/images/p6.png" },

//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   return (
//     <section id="products" className="py-10 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6 text-accent">
//           Our Works
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-4 shadow-md rounded-lg cursor-pointer transform transition-all"
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="rounded-lg mb-4"
//               />
              
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProductImageSection;




import { motion } from "framer-motion";

const ProductImageSection = () => {
  const products = [
    { image: "/images/p23.png" },
    { image: "/images/p24.png" },
    { image: "/images/p3.png" },
    { image: "/images/p20.png" },
    { image: "/images/p6.png" },
    { image: "/images/p18.png" },
    { image: "/images/p21.png" },
    { image: "/images/p25.JPG" },
    { image: "/images/F1.png" },
    { image: "/images/(3).jpg" },
    { image: "/images/p12.png" },
    { image: "/images/pp1.jpg" },
    






  ];

  // Parent container animation to stagger child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Each child image will show 0.2 seconds after the previous one
      },
    },
  };

  // Child animation variant for each image
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="products" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        {/* Animated Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-[#cfaa5b]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1 }}
        >
          Our Portfolio 
        </motion.h2>

        {/* Animated image grid with staggered effect */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants} // Parent animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              variants={imageVariants} // Child animation
              whileHover={{ scale: 1.1 }} // Hover effect
              transition={{ duration: 0.3 }} // Smooth transition on hover
            >
              <motion.img
                src={product.image}
                alt={`Product ${index}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageSection;




// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // For navigation

// const ProductImageSection = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const products = [
//     { name: "Product 1", image: "/images/p1.jpg", route: "/product1" },
//     { name: "Product 2", image: "/images/p2.png", route: "/product2" },
//     { name: "Product 3", image: "/images/p3.png", route: "/product3" },
//     { name: "Product 5", image: "/images/p5.png", route: "/product5" },
//     { name: "Product 6", image: "/images/p6.png", route: "/product6" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   const handleNavigate = (route) => {
//     navigate(route); // Navigate to the product route
//   };

//   return (
//     <section id="products" className="py-10 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-6 text-accent">
//           Our Works
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white p-4 shadow-md rounded-lg cursor-pointer transform transition-all"
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               {/* Image */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="rounded-lg mb-4"
//               />

//               {/* Top-right Next icon */}
//               <div
//                 className="absolute top-2 right-2 bg-accent text-white rounded-full p-2 cursor-pointer"
//                 onClick={() => handleNavigate(product.route)}
//               >
//                 ➡
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold">{product.name}</h3>
//               <p className="text-gray-600 mt-2">
//                 Description of {product.name}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProductImageSection;



// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const ProductImageSection = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   // Handle navigation
//   const handleNavigate = (route) => {
//     navigate(route);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   return (
//     <section id="products" className="py-10 bg-gray-100 relative">
//       {/* Left navigation arrow */}
//       <div
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full cursor-pointer"
//         onClick={() => handleNavigate("/portfolio")}
//       >
//         ⬅
//       </div>

//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-6 text-accent">Our Works</h2>
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {[1, 2, 3, 4, 5].map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white shadow-md rounded-md overflow-hidden"
//               variants={cardVariants}
//             >
//               <img
//                 src={`/images/p${item}.jpg`}
//                 alt={`Project ${item}`}
//                 className="w-full h-64 object-cover"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Right navigation arrow */}
//       <div
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full cursor-pointer"
//         onClick={() => handleNavigate("/portfolio-next")}
//       >
//         ➡
//       </div>
//     </section>
//   );
// };

// export default ProductImageSection;
