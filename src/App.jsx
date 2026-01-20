import React from 'react'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import WriteUps from './component/WriteUps.jsx'
import FeaturedWork from './component/FeaturedWork.jsx'
import Contact from './component/Contact.jsx'
import { Toaster } from "react-hot-toast";
import ArtWorks from './component/ArtWorks.jsx'

const App = () => {
  return (
    <div className='relative'>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <FeaturedWork></FeaturedWork>
        <WriteUps></WriteUps>
        <ArtWorks></ArtWorks>
        <Contact></Contact>
        <Toaster position="top-right" />
      </div>
  )
}

export default App

// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./component/Navbar.jsx";
// import Home from "./component/Home.jsx";
// import About from "./component/About.jsx";
// import WriteUps from "./component/WriteUps.jsx";
// import FeaturedWork from "./component/FeaturedWork.jsx";
// import Contact from "./component/Contact.jsx";
// import ArtWorks from "./component/ArtWorks.jsx";
// import { Toaster } from "react-hot-toast";

// /* 👑 LAYOUT WRAPPER */
// const Layout = ({ children }) => {
//   const location = useLocation();

//   // routes where navbar should be hidden
//   const hideNavbarRoutes = ["/artworks"];

//   return (
//     <>
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       {children}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//                 <About />
//                 <FeaturedWork />
//                 <WriteUps />
//                 <Contact />
//               </>
//             }
//           />

//           <Route path="/artworks" element={<ArtWorks />} />
//         </Routes>
//       </Layout>

//       <Toaster position="top-right" />
//     </BrowserRouter>
//   );
// };

// export default App;
