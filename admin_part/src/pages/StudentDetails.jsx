// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/admin/students/${id}`);
//         setStudent(res.data);
//       } catch (err) {
//         console.error("Error fetching student details:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="p-4">Loading student details...</p>;
//   if (!student) return <p className="p-4 text-red-600">Student not found</p>;

//   const renderDocs = (docs, label) => {
//     if (!docs || docs.length === 0) return null;
//     return (
//       <div className="mb-3">
//         <h3 className="font-semibold mb-1">{label}</h3>
//         {docs.map((file, idx) => (
//           <div key={idx}>
//             <a
//               href={`http://localhost:5000/${file.replace(/\\/g, "/")}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {label} {idx + 1}
//             </a>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-2xl font-bold mb-4 text-center">
//         {student.fullName}'s Complete Details
//       </h2>

//       <div className="grid grid-cols-2 gap-4">
//         <p><strong>Full Name:</strong> {student.fullName}</p>
//         <p><strong>Registration No:</strong> {student.registrationNumber}</p>
//         <p><strong>Branch:</strong> {student.branch}</p>
//         <p><strong>Session:</strong> {student.session}</p>
//         <p><strong>Email:</strong> {student.email}</p>
//         <p><strong>Phone:</strong> {student.phone}</p>
//         <p><strong>Address:</strong> {student.address}</p>
//         <p><strong>Status:</strong> {student.status}</p>
//       </div>

//       <hr className="my-4" />

//       <div>
//         <h3 className="text-xl font-semibold mb-3">Uploaded Documents</h3>
//         {renderDocs(student.otrCard, "OTR Card")}
//         {renderDocs(student.aadharCard, "Aadhar Card")}
//         {renderDocs(student.marksheets, "Marksheet")}
//         {renderDocs(student.otherDocuments, "Other Documents")}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";

// const StudentDetails = ({ students }) => {
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   const handleViewDetails = (student) => {
//     setSelectedStudent(student);
//   };

//   const handleClose = () => {
//     setSelectedStudent(null);
//   };

//   return (
//     <div>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border">Name</th>
//             <th className="py-2 px-4 border">Roll No</th>
//             <th className="py-2 px-4 border">Email</th>
//             <th className="py-2 px-4 border">Branch</th>
//             <th className="py-2 px-4 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id}>
//               <td className="py-2 px-4 border">{student.fullName}</td>
//               <td className="py-2 px-4 border">{student.rollNo}</td>
//               <td className="py-2 px-4 border">{student.email}</td>
//               <td className="py-2 px-4 border">{student.branch}</td>
//               <td className="py-2 px-4 border text-center">
//                 <button
//                   onClick={() => handleViewDetails(student)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                 >
//                   View Details
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Student Details Modal */}
//       {selectedStudent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md w-1/2">
//             <h2 className="text-xl font-bold mb-4">
//               {selectedStudent.fullName}'s Details
//             </h2>

//             <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
//             <p><strong>Email:</strong> {selectedStudent.email}</p>
//             <p><strong>Branch:</strong> {selectedStudent.branch}</p>
//             <p><strong>Session:</strong> {selectedStudent.session}</p>

//             <h3 className="text-lg font-semibold mt-4 mb-2">Uploaded Documents:</h3>
//             {selectedStudent.documents && Object.keys(selectedStudent.documents).length > 0 ? (
//               <ul className="list-disc ml-6">
//                 {Object.entries(selectedStudent.documents).map(([key, value]) => (
//                   <li key={key}>
//                     <strong>{key}:</strong>{" "}
//                     <a
//                       href={value}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 underline"
//                     >
//                       View Document
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No documents uploaded.</p>
//             )}

//             <button
//               onClick={handleClose}
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentDetails;





// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// // API function to fetch student by ID
// const getStudentById = async (id) => {
//   const res = await axios.get(`http://localhost:5000/admin/students/${id}`);
//   return res.data; // assuming backend returns the student object directly
// };

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data);
//       } catch (err) {
//         console.error("Error fetching student details:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p>Loading student details...</p>;
//   if (!student) return <p>Student not found</p>;

//   // Helper function to render documents
//   const renderDocs = (docs, label) => {
//     if (!docs || docs.length === 0) return <p>{label} not uploaded</p>;
//     return (
//       <div className="mb-4">
//         <h4 className="font-semibold mb-2">{label}:</h4>
//         {docs.map((file, idx) => (
//           <div key={idx}>
//             <a
//               href={`http://localhost:5000/${file.replace("\\", "/")}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {label} {idx + 1}
//             </a>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-2xl font-semibold mb-4">{student.fullName}'s Details</h2>

//       <div className="space-y-3">
//         <p><strong>Application ID:</strong> {student.applicationNumber}</p>
//         <p><strong>Roll No:</strong> {student.rollNo}</p>
//         <p><strong>Branch:</strong> {student.branch}</p>
//         <p><strong>Session:</strong> {student.session}</p>
//         <p><strong>Email:</strong> {student.email}</p>
//         <p><strong>Phone:</strong> {student.phone}</p>
//         <p><strong>Gender:</strong> {student.gender}</p>
//         <p><strong>Date of Birth:</strong> {student.dob}</p>
//         <p><strong>Address:</strong> {student.address}</p>
//         <p><strong>Father’s Name:</strong> {student.fatherName}</p>
//         <p><strong>Mother’s Name:</strong> {student.motherName}</p>
//         <p><strong>10th Percentage:</strong> {student.tenthPercent}</p>
//         <p><strong>12th Percentage:</strong> {student.twelfthPercent}</p>
//         <p><strong>CGPA:</strong> {student.cgpa}</p>
//       </div>

//       <hr className="my-6" />

//       <h3 className="text-xl font-semibold mb-3">Uploaded Documents</h3>
//       {renderDocs(student.aadharCard, "Aadhar Card")}
//       {renderDocs(student.marksheet10, "10th Marksheet")}
//       {renderDocs(student.marksheet12, "12th Marksheet")}
//       {renderDocs(student.semesterMarksheets, "Semester Marksheets")}
//       {renderDocs(student.resume, "Resume")}
//       {renderDocs(student.photo, "Profile Photo")}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p>Loading student details...</p>;
//   if (!student) return <p>Student not found</p>;

//   const renderDocs = (docs, label) => {
//     if (!docs || docs.length === 0) return <p>{label} not uploaded</p>;
//     return (
//       <div className="mb-4">
//         <h4 className="font-semibold mb-2">{label}:</h4>
//         {docs.map((file, idx) => (
//           <div key={idx}>
//             <a
//               href={`http://localhost:5000/${file.replace("\\", "/")}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {label} {idx + 1}
//             </a>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-2xl font-semibold mb-4">{student.fullName}'s Details</h2>

//       <div className="space-y-3">
//         <p><strong>Application ID:</strong> {student.applicationNumber}</p>
//         <p><strong>Roll No:</strong> {student.rollNo}</p>
//         <p><strong>Branch:</strong> {student.branch}</p>
//         <p><strong>Session:</strong> {student.session}</p>
//         <p><strong>Email:</strong> {student.email}</p>
//         <p><strong>Phone:</strong> {student.phone}</p>
//         <p><strong>Gender:</strong> {student.gender}</p>
//         <p><strong>Date of Birth:</strong> {student.dob}</p>
//         <p><strong>Address:</strong> {student.address}</p>
//       </div>

//       <hr className="my-6" />

//       <h3 className="text-xl font-semibold mb-3">Uploaded Documents</h3>
//       {renderDocs(student.aadharCard, "Aadhar Card")}
//       {renderDocs(student.marksheet10, "10th Marksheet")}
//       {renderDocs(student.marksheet12, "12th Marksheet")}
//       {renderDocs(student.semesterMarksheets, "Semester Marksheets")}
//       {renderDocs(student.resume, "Resume")}
//       {renderDocs(student.photo, "Profile Photo")}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStudentById } from "../api/studentApi";

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        setStudent(data.student || data); // handle both cases
      } catch (err) {
        console.error("Error fetching student:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading student details...</p>;
  if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

  // Helper to render documents (if stored as array of file paths)
  const renderDocs = (label, files) => {
    if (!files || files.length === 0) {
      return <p className="text-gray-600">{label}: Not Uploaded</p>;
    }

    return (
      <div className="mb-4">
        <h4 className="font-semibold mb-2">{label}:</h4>
        {Array.isArray(files) ? (
          files.map((file, i) => (
            <div key={i}>
              <a
                href={`http://localhost:5000/${file.replace(/\\/g, "/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View {label} {i + 1}
              </a>
            </div>
          ))
        ) : (
          <a
            href={`http://localhost:5000/${files.replace(/\\/g, "/")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View {label}
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Students
      </Link>

      <h2 className="text-3xl font-semibold mb-6 text-center">
        {student.fullName}'s Profile
      </h2>

      {/* === Basic Info === */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <p><strong>Application No:</strong> {student.applicationNumber}</p>
          <p><strong>Roll No:</strong> {student.rollNo}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
          <p><strong>Session:</strong> {student.session}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Category:</strong> {student.category}</p>
          <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
        </div>
      </section>

      {/* === Contact Info === */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Address:</strong> {student.address}</p>
        </div>
      </section>

      {/* === Parent Info === */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <p><strong>Father's Name:</strong> {student.fatherName}</p>
          <p><strong>Mother's Name:</strong> {student.motherName}</p>
          <p><strong>Parent Contact:</strong> {student.parentContact}</p>
          <p><strong>Occupation:</strong> {student.parentOccupation}</p>
          <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
        </div>
      </section>

      {/* === Uploaded Documents === */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">Uploaded Documents</h3>
        <div className="space-y-3">
          {renderDocs("Aadhar Card", student.aadharCard)}
          {renderDocs("10th Marksheet", student.marksheet10)}
          {renderDocs("12th Marksheet", student.marksheet12)}
          {renderDocs("Semester Marksheets", student.semesterMarksheets)}
          {renderDocs("Resume", student.resume)}
          {renderDocs("Profile Photo", student.photo)}
          {renderDocs("Income Certificate", student.incomeCertificate)}
          {renderDocs("Domicile Certificate", student.domicileCertificate)}
        </div>
      </section>
    </div>
  );
}
