// import { FaGoogle } from "react-icons/fa"; // For Google icon (requires react-icons package)

// const ReviewsSection = () => {
//   const reviews = [
//     {
//       name: "Jitendra Khairnar",
//       reviews: "3 reviews · 19 photos",
//       time: "7 months ago",
//       content:
//         "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, the best in Nashik.",
//     },
//     {
//       name: "Harshal Khairnar",
//       reviews: "2 reviews",
//       time: "6 months ago",
//       content:
//         "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home.",
//     },
//     {
//       name: "Manoj Dharmadhikari",
//       reviews: "1 review",
//       time: "6 months ago",
//       content:
//         "Hello, my home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful.",
//     },
//     {
//       name: "Amol Jadhav",
//       reviews: "1 review",
//       time: "2 weeks ago",
//       content:
//         "Best architect in Dhule. Loved what she designed for my home. I do recommend Design Tales if you are looking for an interior designer.",
//     },
//   ];

//   return (
//     <section id="reviews" className="bg-white py-10 overflow-hidden">
//       <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "#cfaa5b" }}>
//         Our Google Reviews
//       </h2>
//       <div className="relative">
//         <div
//           className="flex space-x-4 animate-scroll"
//           style={{ animation: "scroll 20s linear infinite" }}
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="w-80 bg-gray-100 rounded-lg shadow-md p-4 flex-shrink-0"
//             >
//               <div className="flex items-center mb-2">
//                 <h3 className="text-lg font-bold mr-2" style={{ color: "#cfaa5b" }}>
//                   {review.name}
//                 </h3>
//                 <FaGoogle className="text-blue-600" />
//               </div>
//               <p className="text-sm text-gray-600">{review.reviews}</p>
//               <p className="text-sm text-gray-500">{review.time}</p>
//               <p className="mt-4 text-gray-800">{review.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;


// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const ReviewsSection = () => {
//   // Reviews data
//   const reviews = [
//     {
//       name: "Jitendra Khairnar",
//       date: "7 months ago",
//       rating: 5,
//       review:
//         "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, best in Nashik.",
//       photos: 19,
//     },
//     {
//       name: "Harshal Khairnar",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home. Highly recommended!",
//     },
//     {
//       name: "Manoj Dharmadhikari",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful. Best in Dhule.",
//     },
//     {
//       name: "Amol Jadhav",
//       date: "2 weeks ago",
//       rating: 4.5,
//       review:
//         "Best architect in Dhule. Loved what she designed in my home. I do recommend Design Tales if you are looking for an interior designer.",
//     },
//     {
//       name: "Pankaj Shinde",
//       date: "1 year ago",
//       rating: 5,
//       review:
//         "I had the pleasure of working with Design Tales for my home renovation project, and I couldn't be happier with the results. Their team transformed my space into a beautiful and functional living area. Highly recommended!",
//     },
//     // Add more reviews as needed...
//   ];

//   // Star rating function
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-[#cfaa5b]">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="bg-gray-900 text-[#cfaa5b] py-10 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Customer Reviews</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{review.name}</h3>
//                 <span className="text-sm">{review.date}</span>
//               </div>
//               <div className="mb-4">{renderStars(review.rating)}</div>
//               <p className="text-sm mb-4">{review.review}</p>
//               {review.photos && (
//                 <p className="text-xs italic">{review.photos} photos in review</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;



// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const ReviewsSection = () => {
//   // Reviews data
//   const reviews = [
//     {
//       name: "Jitendra Khairnar",
//       date: "7 months ago",
//       rating: 5,
//       review:
//         "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, best in Nashik.",
//       photos: 19,
//     },
//     {
//       name: "Harshal Khairnar",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home. Highly recommended!",
//     },
//     {
//       name: "Manoj Dharmadhikari",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful. Best in Dhule.",
//     },
//     {
//       name: "Amol Jadhav",
//       date: "2 weeks ago",
//       rating: 4.5,
//       review:
//         "Best architect in Dhule. Loved what she designed in my home. I do recommend Design Tales if you are looking for an interior designer.",
//     },
//     {
//       name: "Pankaj Shinde",
//       date: "1 year ago",
//       rating: 5,
//       review:
//         "I had the pleasure of working with Design Tales for my home renovation project, and I couldn't be happier with the results. Their team transformed my space into a beautiful and functional living area. Highly recommended!",
//     },
//   ];

//   // Star rating function
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-[#cfaa5b]">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   // Horizontal scroll logic
//   const scrollHorizontally = (direction) => {
//     const container = document.getElementById("reviewsContainer");
//     const scrollAmount = 300;
//     container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <section className="bg-gray-900 text-[#cfaa5b] py-10 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Customer Reviews</h2>

//         {/* Scroll buttons */}
//         <div className="flex justify-between items-center mb-4">
//           <button
//             className="bg-[#cfaa5b] p-2 rounded-full text-gray-900 hover:bg-[#a37e2f]"
//             onClick={() => scrollHorizontally("left")}
//           >
//             &#8592; {/* Left Arrow */}
//           </button>
//           <button
//             className="bg-[#cfaa5b] p-2 rounded-full text-gray-900 hover:bg-[#a37e2f]"
//             onClick={() => scrollHorizontally("right")}
//           >
//             &#8594; {/* Right Arrow */}
//           </button>
//         </div>

//         {/* Horizontal Scrollable Container */}
//         <div
//           id="reviewsContainer"
//           className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{review.name}</h3>
//                 <span className="text-sm">{review.date}</span>
//               </div>
//               <div className="mb-4">{renderStars(review.rating)}</div>
//               <p className="text-sm mb-4">{review.review}</p>
//               {review.photos && (
//                 <p className="text-xs italic">{review.photos} photos in review</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;



// import { useEffect, useRef } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const ReviewsSection = () => {
//   // Reviews data
//   const reviews = [
//     {
//       name: "Jitendra Khairnar",
//       date: "7 months ago",
//       rating: 5,
//       review:
//         "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, best in Nashik.",
//       photos: 19,
//     },
//     {
//       name: "Harshal Khairnar",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home. Highly recommended!",
//     },
//     {
//       name: "Manoj Dharmadhikari",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful. Best in Dhule.",
//     },
//     {
//       name: "Amol Jadhav",
//       date: "2 weeks ago",
//       rating: 4.5,
//       review:
//         "Best architect in Dhule. Loved what she designed in my home. I do recommend Design Tales if you are looking for an interior designer.",
//     },
//     {
//       name: "Pankaj Shinde",
//       date: "1 year ago",
//       rating: 5,
//       review:
//         "I had the pleasure of working with Design Tales for my home renovation project, and I couldn't be happier with the results. Their team transformed my space into a beautiful and functional living area. Highly recommended!",
//     },
//   ];

//   const reviewsRef = useRef(null);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const scrollContainer = reviewsRef.current;
//     let scrollInterval;

//     const startAutoScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//           scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
//         }
//       }, 10); // Adjust speed by changing the interval time
//     };

//     startAutoScroll();

//     // Cleanup on component unmount
//     return () => clearInterval(scrollInterval);
//   }, []);

//   // Star rating function
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-yellow-500">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="bg-gray-900 text-gray-700 py-10 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-white">
//           Customer Reviews
//         </h2>

//         {/* Horizontal Scrollable Container */}
//         <div
//           ref={reviewsRef}
//           className="flex space-x-4 overflow-x-auto scroll-smooth bg-white p-4 rounded-md shadow-lg"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] bg-white rounded-md p-4 shadow-md flex flex-col"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{review.name}</h3>
//                 <span className="text-sm text-gray-500">{review.date}</span>
//               </div>
//               <div className="mb-4">{renderStars(review.rating)}</div>
//               <p className="text-sm mb-4">{review.review}</p>
//               {review.photos && (
//                 <p className="text-xs italic text-gray-500">
//                   {review.photos} photos in review
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;
 

// import { useEffect, useRef } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// const ReviewsSection = () => {
//   // Reviews data
//   const reviews = [
//     {
//       name: "Jitendra Khairnar",
//       date: "7 months ago",
//       rating: 5,
//       review:
//         "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, best in Nashik.",
//       photos: 19,
//     },
//     {
//       name: "Harshal Khairnar",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home. Highly recommended!",
//     },
//     {
//       name: "Manoj Dharmadhikhar",
//       date: "6 months ago",
//       rating: 5,
//       review:
//         "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful. Best in Dhule.",
//     },
//   ];

//   const reviewsRef = useRef(null);

//   // Auto-scroll functionality
//   useEffect(() => {
//     const scrollContainer = reviewsRef.current;
//     let scrollInterval;

//     const startAutoScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//           scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
//         }
//       }, 10); // Adjust speed by changing the interval time
//     };

//     startAutoScroll();

//     // Cleanup on component unmount
//     return () => clearInterval(scrollInterval);
//   }, []);

//   // Star rating function
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-yellow-500">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section
//       className="py-10 px-6"
//       style={{ backgroundColor: "#cfaa5b" }} // Outer background color
//     >
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-white">
//           Customer Reviews
//         </h2>

//         {/* Horizontal Scrollable Container */}
//         <div
//           ref={reviewsRef}
//           className="flex space-x-6 overflow-x-auto scroll-smooth py-4 rounded-md"
//           style={{
//             scrollbarWidth: "none", // Firefox
//             msOverflowStyle: "none", // IE/Edge
//           }}
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] bg-white rounded-md p-4 shadow-lg"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{review.name}</h3>
//                 <span className="text-sm text-gray-500">{review.date}</span>
//               </div>
//               <div className="mb-4">{renderStars(review.rating)}</div>
//               <p className="text-sm mb-4">{review.review}</p>
//               {review.photos && (
//                 <p className="text-xs italic text-gray-500">
//                   {review.photos} photos in review
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Hide Scrollbar with CSS */}
//       <style>
//         {`
//           ::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default ReviewsSection;



// import { useEffect, useRef, useState } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import gsap from "gsap";

// const ReviewsSection = () => {
//   const reviews = [
  //   {
  //     "name": "Jitendra Khairnar",
  //     "date": "7 months ago",
  //     "rating": 5,
  //     "review": "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for the details in planning is fantastic. I do recommend Design Tales by Tina, best in Nashik.",
  //     "photos": 19,
  // },
  // {
  //     "name": "Harshal Khairnar",
  //     "date": "6 months ago",
  //     "rating": 5,
  //     "review": "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. Her keen eye for detail and exceptional taste have breathed new life into every corner of our home. Highly recommended!",
  // },
  // {
  //     "name": "Manoj Dharmadhikar",
  //     "date": "6 months ago",
  //     "rating": 5,
  //     "review": "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful. Best in Dhule.",
  // },
  // {
  //     "name": "Pankaj Shinde",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "I had the pleasure of working with Design Tales for my home renovation project, and I couldn't be happier with the results. Their team transformed my space into a beautiful and functional living area. Highly recommended!",
  // },
  // {
  //     "name": "Atharva Dharmadhikar",
  //     "date": "6 months ago",
  //     "rating": 5,
  //     "review": "Design Tales by Tina delivered exceptional service for my room renovation! Every step was handled with professionalism and creativity, exceeding my expectations. Highly recommend!",
  // },
  // {
  //     "name": "Ashish Ingale",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "We had a wonderful experience with Design Tales by Tina. The team provided numerous options, and the quality of work was outstanding. Our flat was completed on time with beautiful 3D designs.",
  // },
  // {
  //     "name": "Laxmi Sancheti",
  //     "date": "6 months ago",
  //     "rating": 5,
  //     "review": "I did my kitchen renovation, and the transformation is absolutely beautiful! Loved Tina's work and highly recommend Design Tales.",
  // },
  // {
  //     "name": "Rohit Patil",
  //     "date": "11 months ago",
  //     "rating": 5,
  //     "review": "Working with Design Tales was a pleasure! Their creativity, attention to detail, and timely delivery made the transformation stunning. Highly recommend!",
  // },
  // {
  //     "name": "Gajanan Chaudhary",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Absolutely love the work by Design Tales by Tina. Excellent quality and great understanding of budget and requirements.",
  // },
  // {
  //     "name": "Mustafa Saifee",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "For all the reasons one thinks of hiring an interior designer, Tina delivers it all: cooperation, professionalism, quality, and value. Highly recommended!",
  // },
  // {
  //     "name": "Tejas Yeole",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "She made my dream home in Pune. She delivered good quality work in a reasonable time frame. Her team is very skillful and trustworthy. Best part: no huge difference between the quotation and final bill. Strongly recommend!",
  // },
  // {
  //     "name": "Yashshri Sancheti",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "The quality of their work and their customer service were impressive. Tina is very talented, and her nature is very polite. Fully satisfied!",
  // },
  // {
  //     "name": "Vyankat Kisave",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Excellent interior designer. They have awesome ideas of design and skills. Staff is professional and friendly. Highly recommend!",
  // },
  // {
  //     "name": "Mahesh Kale",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Great design and good quality work. On-time delivery of every module. Great suggestions according to the home and budget.",
  // },
  // {
  //     "name": "Monty Patil",
  //     "date": "11 months ago",
  //     "rating": 5,
  //     "review": "Best quality, creative designs, proper drawings, and nicely done time management. I recommend Design Tales with 100% satisfaction.",
  // },
  // {
  //     "name": "Bharati Ahire",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "What a fantastic experience. A massive thank you to Design Tales by Tina for creating my dream cafe!",
  // },
  // {
  //     "name": "Vaibhav Bhandari",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Best interior designer in Dhule. High-quality modern designs delivered on time at the best rates. Very professional.",
  // },
  // {
  //     "name": "Chetan Gawali",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Very ultimate designs and very friendly nature. Also very professional. Highly recommend!",
  // },
  // {
  //     "name": "Abhijeet Bhavsar",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Excellent work! Money was worth it. Highly recommend Design Tales.",
  // },
  // {
  //     "name": "Rushi Mandlik",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Amazing working skills with affordable pricing. Highly recommend Tina's work!",
  // },
  // {
  //     "name": "Vishal Kuwar",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Nice work. Really loved the work. Highly recommended!",
  // },
  // {
  //     "name": "Anita Bhandari",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Top interior designer in Dhule. Excellent quality and professionalism.",
  // },
  // {
  //     "name": "Rushikesh Banchhod",
  //     "date": "5 months ago",
  //     "rating": 5,
  //     "review": "I absolutely love Tina's work. She clearly understood our needs and budget, providing the best possible house designs. Highly recommend!",
  // },
  // {
  //     "name": "Maitreyee Patil",
  //     "date": "1 year ago",
  //     "rating": 5,
  //     "review": "Very good job, completed on time. Selected very nice colors. Highly recommend Design Tales!",
  // },
//   ];

//   const reviewsRef = useRef(null);
//   const [expandedIndex, setExpandedIndex] = useState(-1); // To track expanded cards

//   useEffect(() => {
//     const container = reviewsRef.current;

//     if (container) {
//       const totalWidth = Array.from(container.children).reduce(
//         (sum, child) => sum + child.offsetWidth,
//         0
//       );

//       gsap.to(container, {
//         x: `-=${totalWidth}`,
//         repeat: -1,
//         duration: totalWidth / 50, // Adjust speed
//         ease: "linear",
//         modifiers: {
//           x: (x) => `${parseFloat(x) % totalWidth}px`,
//         },
//       });
//     }
//   }, []);

//   const toggleExpand = (index) => {
//     setExpandedIndex((prev) => (prev === index ? -1 : index));
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-yellow-500">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="py-10 px-6 bg-[#cfaa5b]">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-white">
//           Customer Reviews
//         </h2>

//         {/* Reviews Scrollable Container */}
//         <div
//           ref={reviewsRef}
//           className="flex space-x-6 overflow-hidden"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="min-w-[300px] max-w-[300px] bg-white rounded-md p-4 shadow-lg hover:shadow-2xl transition-shadow"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{review.name}</h3>
//                 <span className="text-sm text-gray-500">{review.date}</span>
//               </div>
//               <div className="mb-4">{renderStars(review.rating)}</div>
//               <p className="text-sm mb-4">
//                 {expandedIndex === index
//                   ? review.review
//                   : `${review.review.slice(0, 100)}...`}
//               </p>
//               <button
//                 onClick={() => toggleExpand(index)}
//                 className="text-blue-500 underline text-sm"
//               >
//                 {expandedIndex === index ? "View Less" : "View More"}
//               </button>
//               {review.photos && (
//                 <p className="text-xs italic text-gray-500 mt-2">
//                   {review.photos} photos in review
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;
// import React, { useEffect, useRef, useState } from "react";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import gsap from "gsap";

// // Review Data
// const reviews = [
//   {
//     name: "Jitendra Khairnar",
//     date: "7 months ago",
//     rating: 5,
//     review:
//       "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work.",
//     photos: 19,
//   },
//   {
//     name: "Harshal Khairnar",
//     date: "6 months ago",
//     rating: 5,
//     review:
//       "Tina Ma'am, the interior designer, has masterfully transformed our bungalow.",
//     photos: 0,
//   },
//   {
//     name: "Manoj Dharmadhikar",
//     date: "6 months ago",
//     rating: 4,
//     review:
//       "Hello! My home landscaping was done by Tina recently, and she did a really good job.",
//     photos: 0,
//   },
//   {
//     name: "Pankaj Shinde",
//     date: "1 year ago",
//     rating: 5,
//     review:
//       "I had the pleasure of working with Design Tales for my home renovation project.",
//     photos: 5,
//   },
//   {
//     name: "Atharva Dharmadhikar",
//     date: "6 months ago",
//     rating: 5,
//     review: "Design Tales by Tina delivered exceptional service for my room renovation!",
//     photos: 0,
//   },
// ];

// const ReviewsSection = () => {
//   const scrollContainerRef = useRef(null);
//   const [paused, setPaused] = useState(false); // Handle pause state

//   // Function to render star ratings
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex space-x-1 text-yellow-500">
//         {Array.from({ length: fullStars }, (_, i) => (
//           <FaStar key={`full-${i}`} />
//         ))}
//         {halfStar && <FaStarHalfAlt />}
//         {Array.from({ length: emptyStars }, (_, i) => (
//           <FaRegStar key={`empty-${i}`} />
//         ))}
//       </div>
//     );
//   };

//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       const scrollContainer = scrollContainerRef.current;

//       // Animate horizontal scrolling
//       const scrollAnimation = gsap.to(scrollContainer, {
//         x: `-=${scrollContainer.offsetWidth / 2}`,
//         duration: 30,
//         ease: "linear",
//         repeat: -1,
//         paused: false,
//       });

//       let pauseTimeout;

//       // Add user interaction handling (hover pause)
//       const handlePause = () => {
//         setPaused(true);
//         scrollAnimation.pause();
//         clearTimeout(pauseTimeout);

//         pauseTimeout = setTimeout(() => {
//           setPaused(false);
//           scrollAnimation.play();
//         }, 30000); // Pause for 30 seconds
//       };

//       scrollContainer.addEventListener("mouseenter", handlePause);
//       scrollContainer.addEventListener("mouseleave", () => {
//         clearTimeout(pauseTimeout);
//         setPaused(false);
//         scrollAnimation.play();
//       });

//       return () => {
//         clearTimeout(pauseTimeout);
//         scrollAnimation.kill();
//         scrollContainer.removeEventListener("mouseenter", handlePause);
//         scrollContainer.removeEventListener("mouseleave", () => {});
//       };
//     }
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-[#cfaa5b]">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-semibold mb-6 text-center text-white">
//           Customer Reviews
//         </h2>

//         {/* Horizontally Scrolling Section */}
//         <div
//           ref={scrollContainerRef}
//           className="relative flex overflow-hidden space-x-4 scrollbar-hidden"
//         >
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="w-[350px] h-[350px] bg-white p-6 rounded-lg shadow-lg flex-shrink-0"
//             >
//               {/* Review Card Content */}
//               <div className="flex items-center space-x-3 mb-3">
//                 <FcGoogle size={35} />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
//                   <span className="text-sm text-gray-500">{review.date}</span>
//                 </div>
//               </div>

//               {/* Render Stars */}
//               <div className="mb-3">{renderStars(review.rating)}</div>

//               {/* Review Text */}
//               <p className="text-sm text-gray-700 mb-2 leading-4">{review.review}</p>
//               {review.photos > 0 && (
//                 <p className="text-xs italic text-gray-500 mt-1">{review.photos} photos in review</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;



import React, { useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import gsap from "gsap";

const reviews = [
  {
    name: "Jitendra Khairnar",
    date: "7 months ago",
    rating: 5,
    review: "I did my bungalow renovation in Nashik and I am absolutely happy with Tina’s work. Her keen eye for details in planning is fantastic. I do recommend Design Tales by Tina as the best in Nashik.",
    photos: 19,
  },
  {
    name: "Harshal Khairnar",
    date: "6 months ago",
    rating: 5,
    review: "Tina Ma'am, the interior designer, has masterfully transformed our bungalow into a haven of elegance and functionality. From the moment you step through the door, you are enveloped in an ambiance of sophistication and warmth.",
    photos: 0,
  },
  {
    name: "Manoj Dharmadhikari",
    date: "6 months ago",
    rating: 4,
    review: "Hello! My home landscaping was done by Tina recently, and she did a really good job. She also suggested which plants to be planted and where. My home garden looks very beautiful.",
    photos: 0,
  },
  {
    name: "Pankaj Shinde",
    date: "1 year ago",
    rating: 5,
    review: "I had the pleasure of working with Design Tales for my home renovation project, and I couldn't be happier with the results. Their team transformed my space into a beautiful and functional living area.",
    photos: 5,
  },
  {
    name: "Atharva Dharmadhikari",
    date: "6 months ago",
    rating: 5,
    review: "Design Tales by Tina delivered exceptional service for my room renovation! Tina's keen eye for design and ability to understand my vision made the process smooth and enjoyable.",
    photos: 0,
  },
  {
    name: "Ashish Ingale",
    date: "1 year ago",
    rating: 5,
    review: "We purchased our flat last year and were searching for interior decorators. Tina provided us with 3D designs and completed the work fast, even during the lockdown.",
    photos: 3,
  },
  {
    name: "Laxmi Sancheti",
    date: "6 months ago",
    rating: 5,
    review: "I did my kitchen renovation, and the transformation is absolutely beautiful. Tina's work is top-notch with humble cooperation, timely visits, and beautiful designs.",
    photos: 0,
  },
  {
    name: "Rohit Patil",
    date: "1 year ago",
    rating: 5,
    review: "Working with Design Tales has been an absolute pleasure! The exceptional communication and collaborative approach made the process smooth.",
    photos: 0,
  },
  {
    name: "Niraj Desale",
    date: "1 year ago",
    rating: 5,
    review: "Tina's architectural designs are exceptional. Her attention to detail and creativity result in spaces that are not only beautiful but also practical.",
    photos: 3,
  },
  {
    name: "Tejas Yeole",
    date: "1 year ago",
    rating: 5,
    review: "She made my dream home in Pune. She delivered good quality work within a reasonable time frame, with no huge difference between quotation and final bill.",
    photos: 0,
  },
  {
    name: "Yashshri Sancheti",
    date: "1 year ago",
    rating: 5,
    review: "The quality of their work and their customer service were impressive. She is very talented, and her nature is very polite. I’m fully satisfied.",
    photos: 3,
  },
  {
    name: "Vyankat Kisave",
    date: "1 year ago",
    rating: 5,
    review: "Excellent interior designer. They have awesome ideas of design and skills also. Staff is professional, friendly, and reliable.",
    photos: 0,
  },
  {
    name: "Mahesh Kale",
    date: "1 year ago",
    rating: 5,
    review: "Great design and good quality work. On-time delivery of every module. Tina offers great suggestions that align with both home and budget needs.",
    photos: 0,
  },
  {
    name: "Monty Patil",
    date: "1 year ago",
    rating: 5,
    review: "Best quality, creative designs, proper drawings, and nice time management. I recommend Design Tales with 100% satisfaction.",
    photos: 1,
  },
  {
    name: "Bharati Ahire",
    date: "1 year ago",
    rating: 5,
    review: "What a fantastic experience. I just want to say a massive thank you to Design Tales by Tina for creating my dream Cafe.",
    photos: 2,
  },
  {
    name: "Vaibhav Bhandari",
    date: "1 year ago",
    rating: 5,
    review: "Best interior designer in Dhule. Best quality, modern designs, on-time delivery, and in the best rate. Very professional.",
    photos: 3,
  },
  {
    name: "Chetan Gawali",
    date: "1 year ago",
    rating: 5,
    review: "Very ultimate designs and very friendly nature, also very professional. 😊",
    photos: 2,
  },
  {
    name: "Abhijeet Bhavsar",
    date: "1 year ago",
    rating: 4,
    review: "Excellent work. Money was worth it. I recommend Design Tales.",
    photos: 3,
  },
  {
    name: "Rushi Mandlik",
    date: "1 year ago",
    rating: 5,
    review: "Amazing working skills with affordable prices.",
    photos: 1,
  },
  {
    name: "Vishal Kuwar",
    date: "1 year ago",
    rating: 5,
    review: "Nice work. Really loved the work. 👍👍👌👌",
    photos: 0,
  },
  {
    name: "Anita Bhandari",
    date: "1 year ago",
    rating: 4,
    review: "Top interior designer in Dhulia. Great professionalism and quality.",
    photos: 0,
  },
];


const ReviewsSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;

      // GSAP scrolling animation
      gsap.to(scrollContainer, {
        scrollLeft: scrollContainer.scrollWidth / 2,
        duration: 40,
        ease: "linear",
        repeat: -1,
        modifiers: {
          scrollLeft: (value) => value % scrollContainer.scrollWidth,
        },
      });
    }
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex space-x-1 text-yellow-500">
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {halfStar && <FaStarHalfAlt />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-6 bg-[#cfaa5b]">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
        Customer Reviews
      </h2>
  
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hidden"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-[85%] sm:w-[70%] md:w-[350px] h-[400px] bg-white p-6 rounded-lg shadow-lg flex-shrink-0"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FcGoogle size={36} />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
  
            <div className="mb-3">{renderStars(review.rating)}</div>
            <p className="text-base md:text-xl text-gray-700 leading-snug h-[200px] overflow-hidden">
              {review.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  


  
  );
};

export default ReviewsSection;
