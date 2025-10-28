// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function AdminForm() {
//   const [branch, setBranch] = useState("");
//   const [session, setSession] = useState(""); // ✅ new state for session
//   const [all, setAll] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let url = "http://localhost:5000/admin/students";

//       // ✅ Build query based on selections
//       const params = [];
//       if (!all && branch) params.push(`branch=${branch}`);
//       if (!all && session) params.push(`session=${session}`);
//       if (params.length > 0) url += `?${params.join("&")}`;

//       const response = await axios.get(url);
//       console.log("Fetched data:", response.data);

//       if (Array.isArray(response.data)) {
//         setStudents(response.data);
//       } else if (response.data.students) {
//         setStudents(response.data.students);
//       } else {
//         setStudents([]);
//       }
//     } catch (err) {
//       console.error("Error fetching students:", err);
//       alert("Failed to fetch students");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//       {/* Filter Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="mb-6 flex flex-wrap gap-4 items-center"
//       >
//         {/* Branch Dropdown */}
//         <select
//           value={branch}
//           onChange={(e) => setBranch(e.target.value)}
//           disabled={all}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="">Select Branch</option>
//           <option value="CSE">Computer Science and Engineering (CSE)</option>
//           <option value="IT">Information Technology (IT)</option>
//           <option value="ECE">Electronics and Communication Engineering (ECE)</option>
//           <option value="CIVIL">Civil Engineering</option>
//           <option value="MECH">Mechanical Engineering</option>
//           <option value="ARCH">Architecture</option>
//           <option value="BBA">Business Administration (BBA)</option>
//           <option value="BCA">Computer Applications (BCA)</option>
//         </select>

//         {/* ✅ Session Dropdown */}
//         <select
//           value={session}
//           onChange={(e) => setSession(e.target.value)}
//           disabled={all}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="">Select Session</option>
//           <option value="2021-2025">2021-2025</option>
//           <option value="2022-2026">2022-2026</option>
//           <option value="2023-2027">2023-2027</option>
//           <option value="2024-2028">2024-2028</option>
//           <option value="2025-2029">2025-2029</option>
//         </select>

//         {/* Show All Checkbox */}
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={all}
//             onChange={(e) => setAll(e.target.checked)}
//           />
//           Show All Students
//         </label>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Fetch Students"}
//         </button>
//       </form>

//       {/* Table */}
//       {loading ? (
//         <p>Loading data...</p>
//       ) : students.length === 0 ? (
//         <p>No students to display</p>
//       ) : (
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2 text-left">Full Name</th>
//               <th className="border px-4 py-2 text-left">Branch</th>
//               <th className="border px-4 py-2 text-left">Session</th>
//               <th className="border px-4 py-2 text-left">Application ID</th>
//               <th className="border px-4 py-2 text-left">Roll No</th>
//               <th className="border px-4 py-2 text-left">Email</th>
//               <th className="border px-4 py-2 text-left">Phone</th>
//               <th className="border px-4 py-2 text-center">Documents</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{student.fullName}</td>
//                 <td className="border px-4 py-2">{student.branch}</td>
//                 <td className="border px-4 py-2">{student.session}</td>
//                 <td className="border px-4 py-2">{student.applicationNumber}</td>
//                 <td className="border px-4 py-2">{student.rollNo}</td>
//                 <td className="border px-4 py-2">{student.email}</td>
//                 <td className="border px-4 py-2">{student.phone}</td>
//                 {/* <td className="border px-4 py-2 text-center">
//                   <Link
//                     to={`/students/${student._id}/documents`}
//                     className="text-blue-600 underline"
//                   >
//                     View Documents
//                   </Link>
//                 </td> */}
//                 <td className="border px-4 py-2 text-center">
//   <Link
//     to={`/students/${student._id}/details`}
//     className="text-blue-600 underline"
//   >
//     View Details
//   </Link>
// </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// updated 8:05 18-10

// import { useState } from "react";
// import { getAllStudents } from "../api/studentApi";
// import { Link } from "react-router-dom";

// export default function AdminForm() {
//   const [branch, setBranch] = useState("");
//   const [session, setSession] = useState("");
//   const [all, setAll] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await getAllStudents(all ? {} : { branch, session });
//       setStudents(data.students || []);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch students");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//       <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-4 items-center">
//         <select
//           value={branch}
//           onChange={(e) => setBranch(e.target.value)}
//           disabled={all}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="">Select Branch</option>
//           <option value="CSE">Computer Science (CSE)</option>
//           <option value="IT">Information Technology (IT)</option>
//           <option value="ECE">Electronics (ECE)</option>
//           <option value="CIVIL">Civil Engineering</option>
//           <option value="MECH">Mechanical Engineering</option>
//           <option value="ARCH">Architecture</option>
//           <option value="BBA">Business Administration</option>
//           <option value="BCA">Computer Applications</option>
//         </select>

//         <select
//           value={session}
//           onChange={(e) => setSession(e.target.value)}
//           disabled={all}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="">Select Session</option>
//           <option value="2021-2025">2021-2025</option>
//           <option value="2022-2026">2022-2026</option>
//           <option value="2023-2027">2023-2027</option>
//           <option value="2024-2028">2024-2028</option>
//           <option value="2025-2029">2025-2029</option>
//         </select>

//         <label className="flex items-center gap-2">
//           <input type="checkbox" checked={all} onChange={(e) => setAll(e.target.checked)} />
//           Show All Students
//         </label>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           {loading ? "Loading..." : "Fetch Students"}
//         </button>
//       </form>

//       {loading ? (
//         <p>Loading students...</p>
//       ) : students.length === 0 ? (
//         <p>No students to display</p>
//       ) : (
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2 text-left">Full Name</th>
//               <th className="border px-4 py-2 text-left">Branch</th>
//               <th className="border px-4 py-2 text-left">Session</th>
//               <th className="border px-4 py-2 text-left">Application ID</th>
//               <th className="border px-4 py-2 text-left">Roll No</th>
//               <th className="border px-4 py-2 text-left">Email</th>
//               <th className="border px-4 py-2 text-left">Phone</th>
//               <th className="border px-4 py-2 text-center">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((s) => (
//               <tr key={s._id} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{s.fullName}</td>
//                 <td className="border px-4 py-2">{s.branch}</td>
//                 <td className="border px-4 py-2">{s.session}</td>
//                 <td className="border px-4 py-2">{s.applicationNumber}</td>
//                 <td className="border px-4 py-2">{s.rollNo}</td>
//                 <td className="border px-4 py-2">{s.email}</td>
//                 <td className="border px-4 py-2">{s.phone}</td>
//                 <td className="border px-4 py-2 text-center">
//                   <Link
//                     to={`/students/${s._id}/details`}
//                     className="text-blue-600 underline"
//                   >
//                     View Details
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllStudents } from "../api/studentApi";

// export default function AdminForm() {
//   const [branch, setBranch] = useState("");
//   const [session, setSession] = useState("");
//   const [all, setAll] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // for dropdown toggle

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await getAllStudents({ branch, session });
//       setStudents(data.students || []);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch students. Check backend logs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
    

//     <div className="min-h-screen bg-gray-50">
//       {/* ✅ Navbar */}
// <nav className="bg-blue-700 text-white px-6 py-0.5 flex justify-between items-center shadow-md">
//   {/* Left side links */}
//   <div className="flex items-center gap-6"></div>

//   {/* Right side Admin Dropdown */}
//   <div className="relative">
//     <button
//       onClick={() => setShowDropdown(!showDropdown)}
//       className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition"
//     >
//       Admin
//     </button>

//     {showDropdown && (
//       <div className="absolute right-0 mt-1 w-44 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
//         <Link
//           to="/post-notification"
//           className="block px-4 py-2 hover:bg-gray-100"
//           onClick={() => setShowDropdown(false)}
//         >
//           📢 Post Notification
//         </Link>
//         <button
//           onClick={() => {
//             setShowDropdown(false);
//             alert("Logging out...");
//           }}
//           className="w-full text-left px-4 py-2 hover:bg-gray-100"
//         >
//           🚪 Logout
//         </button>
//       </div>
//     )}
//   </div>
// </nav>


//       {/* ✅ Main Content */}
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//         <form
//           onSubmit={handleSubmit}
//           className="mb-6 flex flex-wrap gap-4 items-center"
//         >
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="IT">IT</option>
//             <option value="ECE">ECE</option>
//             <option value="CIVIL">CIVIL</option>
//             <option value="MECH">MECH</option>
//           </select>

//           <select
//             value={session}
//             onChange={(e) => setSession(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Session</option>
//             <option value="2021-2025">2021-2025</option>
//             <option value="2022-2026">2022-2026</option>
//             <option value="2023-2027">2023-2027</option>
//           </select>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={all}
//               onChange={(e) => setAll(e.target.checked)}
//             />
//             Show All Students
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Fetch Students"}
//           </button>
//         </form>

//         {loading ? (
//           <p>Loading students...</p>
//         ) : students.length === 0 ? (
//           <p>No students to display</p>
//         ) : (
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">Full Name</th>
//                 <th className="border px-4 py-2">Branch</th>
//                 <th className="border px-4 py-2">Session</th>
//                 <th className="border px-4 py-2">Roll No</th>
//                 <th className="border px-4 py-2">Email</th>
//                 <th className="border px-4 py-2">Phone</th>
//                 <th className="border px-4 py-2">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((s) => (
//                 <tr key={s._id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{s.fullName}</td>
//                   <td className="border px-4 py-2">{s.branch}</td>
//                   <td className="border px-4 py-2">{s.session}</td>
//                   <td className="border px-4 py-2">{s.rollNo}</td>
//                   <td className="border px-4 py-2">{s.email}</td>
//                   <td className="border px-4 py-2">{s.phone}</td>
//                   <td className="border px-4 py-2 text-center">
//                     <Link
//                       to={`/students/${s._id}/details`}
//                       className="text-blue-600 underline"
//                     >
//                       View Details
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllStudents } from "../api/studentApi";

// export default function AdminForm() {
//   const [branch, setBranch] = useState("");
//   const [session, setSession] = useState("");
//   const [all, setAll] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false); // for dropdown toggle

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = await getAllStudents({ branch, session });
//       setStudents(data.students || []);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch students. Check backend logs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 m-0 p-0">
//       {/* ✅ Navbar */}
//       <nav className="bg-blue-700 text-white px-6 py-0.5 flex justify-between items-center shadow-md">
//         {/* Left side links */}
//         <div className="flex items-center gap-6"></div>

//         {/* Right side Admin Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition"
//           >
//             Admin
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 mt-1 w-44 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
//               <Link
//                 to="/post-notification"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 📢 Post Notification
//               </Link>
//               <button
//                 onClick={() => {
//                   setShowDropdown(false);
//                   alert("Logging out...");
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 🚪 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ✅ Main Content */}
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//         <form
//           onSubmit={handleSubmit}
//           className="mb-6 flex flex-wrap gap-4 items-center"
//         >
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="IT">IT</option>
//             <option value="ECE">ECE</option>
//             <option value="CIVIL">CIVIL</option>
//             <option value="MECH">MECH</option>
//           </select>

//           <select
//             value={session}
//             onChange={(e) => setSession(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Session</option>
//             <option value="2021-2025">2021-2025</option>
//             <option value="2022-2026">2022-2026</option>
//             <option value="2023-2027">2023-2027</option>
//           </select>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={all}
//               onChange={(e) => setAll(e.target.checked)}
//             />
//             Show All Students
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Fetch Students"}
//           </button>
//         </form>

//         {loading ? (
//           <p>Loading students...</p>
//         ) : students.length === 0 ? (
//           <p>No students to display</p>
//         ) : (
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">Full Name</th>
//                 <th className="border px-4 py-2">Branch</th>
//                 <th className="border px-4 py-2">Session</th>
//                 <th className="border px-4 py-2">Roll No</th>
//                 <th className="border px-4 py-2">Email</th>
//                 <th className="border px-4 py-2">Phone</th>
//                 <th className="border px-4 py-2">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((s) => (
//                 <tr key={s._id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{s.fullName}</td>
//                   <td className="border px-4 py-2">{s.branch}</td>
//                   <td className="border px-4 py-2">{s.session}</td>
//                   <td className="border px-4 py-2">{s.rollNo}</td>
//                   <td className="border px-4 py-2">{s.email}</td>
//                   <td className="border px-4 py-2">{s.phone}</td>
//                   <td className="border px-4 py-2 text-center">
//                     <Link
//                       to={`/students/${s._id}/details`}
//                       className="text-blue-600 underline"
//                     >
//                       View Details
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllStudents } from "../api/studentApi";

export default function AdminForm() {
  const location = useLocation();

  const [branch, setBranch] = useState("");
  const [session, setSession] = useState("");
  const [all, setAll] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    handleSubmitWithFilters(branch, session);
  };

  const handleSubmitWithFilters = async (branchValue, sessionValue) => {
    setLoading(true);
    try {
      const data = await getAllStudents({ branch: branchValue, session: sessionValue });
      setStudents(data.students || []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch students. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  // Load filters if coming back from StudentDetails
  useEffect(() => {
    if (location.state?.filters) {
      const { branch: prevBranch, session: prevSession } = location.state.filters;
      setBranch(prevBranch || "");
      setSession(prevSession || "");
      handleSubmitWithFilters(prevBranch, prevSession);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50 m-0 p-0">
      {/* ✅ Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-0.5 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Left side links */}
        <div className="flex items-center gap-6"></div>

        {/* Right side Admin Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            Admin
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-1 w-44 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
              <Link
                to="/post-notification"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)}
              >
                📢 Post Notification
              </Link>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  alert("Logging out...");
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Main Content */}
      <div className="p-6 pt-16">
        <h2 className="text-2xl font-semibold mb-4">Student List</h2>

        <form
          onSubmit={handleSubmit}
          className="mb-6 flex flex-wrap gap-4 items-center"
        >
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            disabled={all}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
          </select>

          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            disabled={all}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Session</option>
            <option value="2021-2025">2021-2025</option>
            <option value="2022-2026">2022-2026</option>
            <option value="2023-2027">2023-2027</option>
          </select>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={all}
              onChange={(e) => setAll(e.target.checked)}
            />
            Show All Students
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Fetch Students"}
          </button>
        </form>

        {loading ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students to display</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Full Name</th>
                <th className="border px-4 py-2">Branch</th>
                <th className="border px-4 py-2">Session</th>
                <th className="border px-4 py-2">Roll No</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{s.fullName}</td>
                  <td className="border px-4 py-2">{s.branch}</td>
                  <td className="border px-4 py-2">{s.session}</td>
                  <td className="border px-4 py-2">{s.rollNo}</td>
                  <td className="border px-4 py-2">{s.email}</td>
                  <td className="border px-4 py-2">{s.phone}</td>
                  <td className="border px-4 py-2 text-center">
                    <Link
                      to={`/students/${s._id}/details`}
                      state={{ filters: { branch, session } }} // pass filters
                      className="text-blue-600 underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}


// added by me latest

// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { getAllStudents } from "../api/studentApi";

// export default function AdminForm() {
//   const location = useLocation();
//   const listRef = useRef(null);

//   const [branch, setBranch] = useState("");
//   const [session, setSession] = useState("");
//   const [all, setAll] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleSubmitWithFilters = async (branchValue, sessionValue) => {
//     setLoading(true);
//     try {
//       const data = await getAllStudents({ branch: branchValue, session: sessionValue });
//       setStudents(data.students || []);
//       // Scroll back to list after returning from details
//       setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch students. Check backend logs.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     if (e) e.preventDefault();
//     handleSubmitWithFilters(branch, session);
//   };

//   // Load filters if coming back from StudentDetails
//   useEffect(() => {
//     if (location.state?.filters) {
//       const { branch: prevBranch, session: prevSession } = location.state.filters;
//       setBranch(prevBranch || "");
//       setSession(prevSession || "");
//       handleSubmitWithFilters(prevBranch, prevSession);
//     }
//   }, [location.state]);

//   return (
//     <div className="min-h-screen bg-gray-50 m-0 p-0">
//       {/* Navbar */}
//       <nav className="bg-blue-700 text-white px-6 py-0.5 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
//         <div className="flex items-center gap-6"></div>
//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-full hover:bg-gray-100 transition"
//           >
//             Admin
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 mt-1 w-44 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200">
//               <Link
//                 to="/post-notification"
//                 className="block px-4 py-2 hover:bg-gray-100"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 📢 Post Notification
//               </Link>
//               <button
//                 onClick={() => {
//                   setShowDropdown(false);
//                   alert("Logging out...");
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 🚪 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       <div className="p-6 pt-16" ref={listRef}>
//         <h2 className="text-2xl font-semibold mb-4">Student List</h2>

//         <form
//           onSubmit={handleSubmit}
//           className="mb-6 flex flex-wrap gap-4 items-center"
//         >
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">CSE</option>
//             <option value="IT">IT</option>
//             <option value="ECE">ECE</option>
//             <option value="CIVIL">CIVIL</option>
//             <option value="MECH">MECH</option>
//           </select>

//           <select
//             value={session}
//             onChange={(e) => setSession(e.target.value)}
//             disabled={all}
//             className="border px-3 py-2 rounded"
//           >
//             <option value="">Select Session</option>
//             <option value="2021-2025">2021-2025</option>
//             <option value="2022-2026">2022-2026</option>
//             <option value="2023-2027">2023-2027</option>
//           </select>

//           <label className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={all}
//               onChange={(e) => setAll(e.target.checked)}
//             />
//             Show All Students
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Fetch Students"}
//           </button>
//         </form>

//         {loading ? (
//           <p>Loading students...</p>
//         ) : students.length === 0 ? (
//           <p>No students to display</p>
//         ) : (
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">Full Name</th>
//                 <th className="border px-4 py-2">Branch</th>
//                 <th className="border px-4 py-2">Session</th>
//                 <th className="border px-4 py-2">Roll No</th>
//                 <th className="border px-4 py-2">Email</th>
//                 <th className="border px-4 py-2">Phone</th>
//                 <th className="border px-4 py-2">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((s) => (
//                 <tr key={s._id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{s.fullName}</td>
//                   <td className="border px-4 py-2">{s.branch}</td>
//                   <td className="border px-4 py-2">{s.session}</td>
//                   <td className="border px-4 py-2">{s.rollNo}</td>
//                   <td className="border px-4 py-2">{s.email}</td>
//                   <td className="border px-4 py-2">{s.phone}</td>
//                   <td className="border px-4 py-2 text-center">
//                     <Link
//                       to={`/students/${s._id}/details`}
//                       state={{ filters: { branch, session } }} // pass filters
//                       className="text-blue-600 underline"
//                     >
//                       View Details
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }
