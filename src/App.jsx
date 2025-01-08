
// import Header from './components/Header';
// import VideoSection from './components/VideoSection';
// import ProductImageSection from './components/ProductImageSection';
// import ThreeDModelSection from './components/ThreeDModelSection';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import ReviewsSection from './components/ReviewsSection';
// import InteriorDesignShowcase from './components/InteriorDesignShowcase';

// const App = () => (
//   <div>
//     <Header />
//     <VideoSection />
//     <InteriorDesignShowcase/>
//     <ProductImageSection />
//     <ThreeDModelSection />
    
//     <ReviewsSection />
//     <ContactForm />
//     <Footer />
//   </div>
// );

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import VideoSection from "./components/VideoSection";
import ProductImageSection from "./components/ProductImageSection";
import ThreeDModelSection from "./components/ThreeDModelSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ReviewsSection from "./components/ReviewsSection";
import InteriorDesignShowcase from "./components/InteriorDesignShowcase";
// import Portfolio from "./components/Portfolio";

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <VideoSection />
              <InteriorDesignShowcase />
              <ProductImageSection />
              <ThreeDModelSection />
              <ReviewsSection />
              <ContactForm />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;

        // <Route path="/portfolio" element={<Portfolio />} />

