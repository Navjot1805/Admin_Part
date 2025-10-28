// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentPage = () => {
//   // State to store students, loading status, and errors
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // <-- Paste your useEffect code here
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/admin/students");
//         alert("Fetched data!");   // confirms request went
//         console.log(response.data); // should show { students: [...] }
//         setStudents(response.data.students); // access the array
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch students");
//         setLoading(false);
//       }
//     };
//     fetchStudents();
//   }, []);

//   if (loading) return <p>Loading students...</p>;
//   if (error) return <p>{error}</p>;

//   // Get table columns dynamically
//   const columns = students.length > 0 ? Object.keys(students[0]) : [];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Details</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               {columns.map((col) => (
//                 <th key={col} className="border px-4 py-2 capitalize">{col}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr key={index} className="text-center">
//                 {columns.map((col) => (
//                   <td key={col} className="border px-4 py-2">{student[col]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentPage;
// import React, { useEffect, useState } from "react";
// import StudentCard from "../components/StudentCard";
// import { getAllStudents } from "../api/studentApi";

// const StudentPage = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const data = await getAllStudents();
//         setStudents(data.students);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch students");
//         setLoading(false);
//       }
//     };
//     fetchStudents();
//   }, []);

//   if (loading) return <p>Loading students...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Details</h1>
//       <StudentCard students={students} />
//     </div>
//   );
// };

// export default StudentPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ added
import StudentCard from "../components/StudentCard";
import { getAllStudents } from "../api/studentApi";

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation(); // ✅ to detect navigation changes

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const data = await getAllStudents();
        setStudents(data.students);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [location.key]); // ✅ refetch when navigating back

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>
      <StudentCard students={students} />
    </div>
  );
};

export default StudentPage;
