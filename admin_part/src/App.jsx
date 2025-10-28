// import { useState } from 'react'
// import Navbar from "./src/components/Navbar";
// import Home from "./pages/Home";
// import PostNotification from "./pages/PostNotification";
// import './index.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import PostNotification from "./pages/PostNotification";
// import StudentDocuments from "./pages/StudentDocuments";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post" element={<PostNotification />} />
//         <Route path="/students/:id/documents" element={<StudentDocuments />} />
        

//       </Routes>
//     </Router>
//   );
// }

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import PostNotification from "./pages/PostNotification";
// import StudentDetails from "./pages/StudentDetails";
// import AdminForm from "./components/AdminRoutes"; // student list page

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post" element={<PostNotification />} />
//         <Route path="/admin/students" element={<AdminForm />} /> {/* student list */}
//         <Route path="/students/:id" element={<StudentDetails />} /> {/* view details */}
//       </Routes>
//     </Router>
//   );


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />  {/* ✅ Added this line */}
        <Route path="/students/:id/details" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}




