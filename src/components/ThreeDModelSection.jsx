// import React from 'react';
// import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Install react-icons if not already done

// const Virtual = () => {
//   const handleScrollUp = () => {
//     window.scrollTo({
//       top: 0, // Scroll to the top of the page
//       behavior: 'smooth',
//     });
//   };

//   const handleScrollDown = () => {
//     window.scrollTo({
//       top: window.scrollY + window.innerHeight, // Scroll down by one screen height
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="w-full h-screen relative">
//       <div className="sketchfab-embed-wrapper w-full h-full">
//         <iframe
//           title="Scandinavian Apartment - Demo scene"
//           frameBorder="0"
//           allowFullScreen
//           mozallowfullscreen="true"
//           webkitallowfullscreen="true"
//           allow="autoplay; fullscreen; xr-spatial-tracking"
//           src="https://sketchfab.com/models/990ce2d827404c66a975b03ff97a0c03/embed?ui_infos=0&ui_watermark=0&ui_controls=1&autostart=1"
//           className="w-full h-full"
//         ></iframe>
//       </div>

//       {/* Buttons */}
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
//         {/* Up Button */}
//         <button
//           onClick={handleScrollUp}
//           style={{
//             backgroundColor: '#cfaa5b',
//             padding: '12px',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <FaArrowUp style={{ fontSize: '20px', color: '#fff' }} />
//         </button>

//         {/* Down Button */}
//         <button
//           onClick={handleScrollDown}
//           style={{
//             backgroundColor: '#cfaa5b',
//             padding: '12px',
//             border: 'none',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <FaArrowDown style={{ fontSize: '20px', color: '#fff' }} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Virtual;
 



import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Virtual = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth",
    });
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight, // Scroll down by one screen height
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-screen relative mb-16 mt-10">
      {/* Header Section */}
      <div className="w-full  text-accent py-4">
        <h1 className="text-3xl font-bold text-center text-[#cfaa5b]">Virtual View 360</h1>
      </div>

      {/* Embedded 3D Model Section */}
      <div className="sketchfab-embed-wrapper w-full h-full mt-4">
        <iframe
          title="Scandinavian Apartment - Demo scene"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/990ce2d827404c66a975b03ff97a0c03/embed?ui_infos=0&ui_watermark=0&ui_controls=1&autostart=1"
          className="w-full h-screen"
        ></iframe>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
        {/* Up Button */}
        <button
          onClick={handleScrollUp}
          style={{
            backgroundColor: "#cfaa5b",
            padding: "12px",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowUp style={{ fontSize: "20px", color: "#fff" }} />
        </button>

        {/* Down Button */}
        <button
          onClick={handleScrollDown}
          style={{
            backgroundColor: "#cfaa5b",
            padding: "12px",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowDown style={{ fontSize: "20px", color: "#fff" }} />
        </button>
      </div>
    </div>
  );
};

export default Virtual;
