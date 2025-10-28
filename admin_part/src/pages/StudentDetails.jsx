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


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // For messaging
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile"
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);
//       } catch (err) {
//         console.error("Error fetching student:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   const sendMessage = async () => {
//     try {
//       // Mock API call to backend
//       await fetch(`http://localhost:5000/api/sendMessage`, {
//  {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ studentId: student._id, phone: student.phone, message })
//       });
//       alert("Message sent successfully!");
//       setShowMessageCard(false);
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to send message.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-3xl font-semibold mb-6 text-center">
//         {student.fullName}'s Profile
//       </h2>

//       {/* === Basic Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* === Send Message Button === */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {/* === Message Card === */}
//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>

//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />

//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* === Contact Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* === Parent Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>

//       {/* === Uploaded Documents === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Uploaded Documents</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Aadhar Card", url: student.aadharCard },
//                 { name: "10th Marksheet", url: student.marksheet10 },
//                 { name: "12th Marksheet", url: student.marksheet12 },
//                 { name: "Semester Marksheets", url: student.semesterMarksheets },
//                 { name: "Resume", url: student.resume },
//                 { name: "Profile Photo", url: student.photo },
//                 { name: "Income Certificate", url: student.incomeCertificate },
//                 { name: "Domicile Certificate", url: student.domicileCertificate },
//               ].map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">
//                     {doc.url ? (
//                       <span className="text-green-700 font-semibold">Uploaded</span>
//                     ) : (
//                       <span className="text-gray-500">Not Uploaded</span>
//                     )}
//                   </td>
//                   <td className="border px-4 py-2 text-center space-x-3">
//                     {doc.url ? (
//                       <>
//                         <a
//                           href={`http://localhost:5000${doc.url}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                         >
//                           View
//                         </a>
//                         <a
//                           href={`http://localhost:5000${doc.url}`}
//                           download
//                           className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//                         >
//                           Download
//                         </a>
//                       </>
//                     ) : (
//                       <span className="text-gray-400">—</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* === Admin Footer Actions === */}
//       <div className="mt-8 border-t pt-4 flex justify-start gap-4">
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={() => alert("Delete admin functionality coming soon")}
//         >
//           Delete My Account
//         </button>
//       </div>
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

//   // For messaging
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);
//       } catch (err) {
//         console.error("Error fetching student:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading)
//     return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student)
//     return (
//       <p className="text-center mt-10 text-red-600">Student not found</p>
//     );

//   const sendMessage = async () => {
//     try {
//       // Mock API call to backend (fix: removed extra "{")
//       await fetch(`http://localhost:5000/api/sendMessage`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           studentId: student._id,
//           phone: student.phone,
//           message,
//         }),
//       });
//       alert("Message sent successfully!");
//       setShowMessageCard(false);
//       setMessage("");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to send message.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-3xl font-semibold mb-6 text-center">
//         {student.fullName}'s Profile
//       </h2>

//       {/* === Basic Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Basic Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Application No:</strong> {student.applicationNumber}
//           </p>
//           <p>
//             <strong>Roll No:</strong> {student.rollNo}
//           </p>
//           <p>
//             <strong>Course:</strong> {student.course}
//           </p>
//           <p>
//             <strong>Branch:</strong> {student.branch}
//           </p>
//           <p>
//             <strong>Session:</strong> {student.session}
//           </p>
//           <p>
//             <strong>Gender:</strong> {student.gender}
//           </p>
//           <p>
//             <strong>Category:</strong> {student.category}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong>{" "}
//             {new Date(student.dateofbirth).toLocaleDateString()}
//           </p>
//         </div>

//         {/* === Send Message Button === */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {/* === Message Card === */}
//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">
//               Send Message to {student.fullName}
//             </h4>

//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />

//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* === Contact Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Email:</strong> {student.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {student.phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {student.address}
//           </p>
//         </div>
//       </section>

//       {/* === Parent Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Parent Details
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Father's Name:</strong> {student.fatherName}
//           </p>
//           <p>
//             <strong>Mother's Name:</strong> {student.motherName}
//           </p>
//           <p>
//             <strong>Parent Contact:</strong> {student.parentContact}
//           </p>
//           <p>
//             <strong>Occupation:</strong> {student.parentOccupation}
//           </p>
//           <p>
//             <strong>Annual Income:</strong> ₹
//             {student.parentIncome?.toLocaleString()}
//           </p>
//         </div>
//       </section>

//       {/* === Uploaded Documents === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Uploaded Documents
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//   {[
//     { name: "Aadhar Card", url: student.aadhaar },
//     { name: "DMC", url: student.dmc },
//     { name: "Caste Certificate", url: student.casteCert },
//     { name: "Residence Certificate", url: student.residenceCert },
//     { name: "Photo", url: student.photo },
//     { name: "Bank", url: student.documents?.bank },
//     { name: "Fee Receipt", url: student.documents?.feeReceipt },
//     { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//     { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//     { name: "Application Form", url: student.documents?.applicationForm },
//     { name: "Affidavit", url: student.documents?.affidavit },
//     { name: "College ID Card", url: student.documents?.collegeIDCard },
//     { name: "Income Certificate", url: student.documents?.incomeCert },
//     { name: "ITR", url: student.documents?.itr },
//     { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//     { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//   ].map((doc, index) => (
//     <tr key={index} className="hover:bg-gray-50">
//       <td className="border px-4 py-2 font-medium">{doc.name}</td>
//       <td className="border px-4 py-2">
//         {doc.url ? (
//           <span className="text-green-700 font-semibold">Uploaded</span>
//         ) : (
//           <span className="text-gray-500">Not Uploaded</span>
//         )}
//       </td>
//       <td className="border px-4 py-2 text-center space-x-3">
//         {doc.url ? (
//           <>
//             <a
//               href={`http://localhost:5000/${doc.url}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//             >
//               View
//             </a>
//             <a
//               href={`http://localhost:5000/${doc.url}`}
//               download
//               className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//             >
//               Download
//             </a>
//           </>
//         ) : (
//           <span className="text-gray-400">—</span>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>

//           </table>
//         </div>
//       </section>

//       {/* === Admin Footer Actions === */}
//       <div className="mt-8 border-t pt-4 flex justify-start gap-4">
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={() => alert("Delete admin functionality coming soon")}
//         >
//           Delete My Account
//         </button>
//       </div>
//     </div>
//   );
// }
//  updated by navjot 25-10 5:27pm

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // For messaging
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);
//       } catch (err) {
//         console.error("Error fetching student:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading)
//     return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student)
//     return (
//       <p className="text-center mt-10 text-red-600">Student not found</p>
//     );

//   // ==========================
//   //  Send Message Function
//   // ==========================
//   const sendMessage = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/admin/sendMessage", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           phone: student.phone,
//           message,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("✅ Message sent successfully!");
//         setShowMessageCard(false);
//         setMessage("");
//       } else {
//         alert("❌ Failed to send message.");
//       }
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert("❌ Error sending message.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-3xl font-semibold mb-6 text-center">
//         {student.fullName}'s Profile
//       </h2>

//       {/* === Basic Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Basic Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Application No:</strong> {student.applicationNumber}
//           </p>
//           <p>
//             <strong>Roll No:</strong> {student.rollNo}
//           </p>
//           <p>
//             <strong>Course:</strong> {student.course}
//           </p>
//           <p>
//             <strong>Branch:</strong> {student.branch}
//           </p>
//           <p>
//             <strong>Session:</strong> {student.session}
//           </p>
//           <p>
//             <strong>Gender:</strong> {student.gender}
//           </p>
//           <p>
//             <strong>Category:</strong> {student.category}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong>{" "}
//             {new Date(student.dateofbirth).toLocaleDateString()}
//           </p>
//         </div>

//         {/* === Send Message Button === */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {/* === Message Card === */}
//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">
//               Send Message to {student.fullName}
//             </h4>

//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />

//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* === Contact Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Email:</strong> {student.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {student.phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {student.address}
//           </p>
//         </div>
//       </section>

//       {/* === Parent Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Parent Details
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Father's Name:</strong> {student.fatherName}
//           </p>
//           <p>
//             <strong>Mother's Name:</strong> {student.motherName}
//           </p>
//           <p>
//             <strong>Parent Contact:</strong> {student.parentContact}
//           </p>
//           <p>
//             <strong>Occupation:</strong> {student.parentOccupation}
//           </p>
//           <p>
//             <strong>Annual Income:</strong> ₹
//             {student.parentIncome?.toLocaleString()}
//           </p>
//         </div>
//       </section>

//       {/* === Uploaded Documents === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Uploaded Documents
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Aadhar Card", url: student.aadhaar },
//                 { name: "DMC", url: student.dmc },
//                 { name: "Caste Certificate", url: student.casteCert },
//                 { name: "Residence Certificate", url: student.residenceCert },
//                 { name: "Photo", url: student.photo },
//                 { name: "Bank", url: student.documents?.bank },
//                 { name: "Fee Receipt", url: student.documents?.feeReceipt },
//                 { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//                 { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//                 { name: "Application Form", url: student.documents?.applicationForm },
//                 { name: "Affidavit", url: student.documents?.affidavit },
//                 { name: "College ID Card", url: student.documents?.collegeIDCard },
//                 { name: "Income Certificate", url: student.documents?.incomeCert },
//                 { name: "ITR", url: student.documents?.itr },
//                 { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//                 { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//               ].map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">
//                     {doc.url ? (
//                       <span className="text-green-700 font-semibold">Uploaded</span>
//                     ) : (
//                       <span className="text-gray-500">Not Uploaded</span>
//                     )}
//                   </td>
//                   <td className="border px-4 py-2 text-center space-x-3">
//                     {doc.url ? (
//                       <>
//                         <a
//                           href={`http://localhost:5000/${doc.url}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                         >
//                           View
//                         </a>
//                         <a
//                           href={`http://localhost:5000/${doc.url}`}
//                           download
//                           className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//                         >
//                           Download
//                         </a>
//                       </>
//                     ) : (
//                       <span className="text-gray-400">—</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//       {/* === Messages Sent to Student === */}
// <section className="mt-6">
//   <h3 className="text-xl font-bold mb-2 border-b pb-1">Messages History</h3>
//   <button
//     onClick={async () => {
//       const res = await fetch(`http://localhost:5000/admin/students/${student._id}/messages`);
//       const data = await res.json();
//       if (data.success) setStudent({ ...student, messages: data.messages });
//     }}
//     className="bg-gray-700 text-white px-3 py-1 rounded mb-3"
//   >
//     Refresh Messages
//   </button>
//   {student.messages && student.messages.length > 0 ? (
//     <ul className="space-y-2">
//       {student.messages.map((m, i) => (
//         <li key={i} className="border p-2 rounded bg-gray-50">
//           <p>{m.text}</p>
//           <small className="text-gray-500">
//             {new Date(m.timestamp).toLocaleString()}
//           </small>
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p className="text-gray-500">No messages yet.</p>
//   )}
// </section>



//       {/* === Admin Footer Actions === */}
//       <div className="mt-8 border-t pt-4 flex justify-start gap-4">
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={() => alert("Delete admin functionality coming soon")}
//         >
//           Delete My Account
//         </button>
//       </div>
//     </div>
    
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // For messaging
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);
//       } catch (err) {
//         console.error("Error fetching student:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading)
//     return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student)
//     return (
//       <p className="text-center mt-10 text-red-600">Student not found</p>
//     );

//   const sendMessage = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/admin/sendMessage",
//         {
//           studentId: student._id,
//           message,
//         }
//       );
//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert("Message sent successfully!");
//       setMessage("");
//       setShowMessageCard(false);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error sending message: " + err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-3xl font-semibold mb-6 text-center">
//         {student.fullName}'s Profile
//       </h2>

//       {/* === Basic Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Basic Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Application No:</strong> {student.applicationNumber}
//           </p>
//           <p>
//             <strong>Roll No:</strong> {student.rollNo}
//           </p>
//           <p>
//             <strong>Course:</strong> {student.course}
//           </p>
//           <p>
//             <strong>Branch:</strong> {student.branch}
//           </p>
//           <p>
//             <strong>Session:</strong> {student.session}
//           </p>
//           <p>
//             <strong>Gender:</strong> {student.gender}
//           </p>
//           <p>
//             <strong>Category:</strong> {student.category}
//           </p>
//           <p>
//             <strong>Date of Birth:</strong>{" "}
//             {new Date(student.dateofbirth).toLocaleDateString()}
//           </p>
//         </div>

//         {/* === Send Message Button === */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {/* === Message Card === */}
//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">
//               Send Message to {student.fullName}
//             </h4>

//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />

//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* === Contact Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Contact Information
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Email:</strong> {student.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {student.phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {student.address}
//           </p>
//         </div>
//       </section>

//       {/* === Parent Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Parent Details
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p>
//             <strong>Father's Name:</strong> {student.fatherName}
//           </p>
//           <p>
//             <strong>Mother's Name:</strong> {student.motherName}
//           </p>
//           <p>
//             <strong>Parent Contact:</strong> {student.parentContact}
//           </p>
//           <p>
//             <strong>Occupation:</strong> {student.parentOccupation}
//           </p>
//           <p>
//             <strong>Annual Income:</strong> ₹
//             {student.parentIncome?.toLocaleString()}
//           </p>
//         </div>
//       </section>

//       {/* === Uploaded Documents === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">
//           Uploaded Documents
//         </h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Aadhar Card", url: student.aadhaar },
//                 { name: "DMC", url: student.dmc },
//                 { name: "Caste Certificate", url: student.casteCert },
//                 { name: "Residence Certificate", url: student.residenceCert },
//                 { name: "Photo", url: student.photo },
//                 { name: "Bank", url: student.documents?.bank },
//                 { name: "Fee Receipt", url: student.documents?.feeReceipt },
//                 { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//                 { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//                 { name: "Application Form", url: student.documents?.applicationForm },
//                 { name: "Affidavit", url: student.documents?.affidavit },
//                 { name: "College ID Card", url: student.documents?.collegeIDCard },
//                 { name: "Income Certificate", url: student.documents?.incomeCert },
//                 { name: "ITR", url: student.documents?.itr },
//                 { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//                 { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//               ].map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">
//                     {doc.url ? (
//                       <span className="text-green-700 font-semibold">Uploaded</span>
//                     ) : (
//                       <span className="text-gray-500">Not Uploaded</span>
//                     )}
//                   </td>
//                   <td className="border px-4 py-2 text-center space-x-3">
//                     {doc.url ? (
//                       <>
//                         <a
//                           href={`http://localhost:5000/${doc.url}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 underline"
//                         >
//                           View
//                         </a>
//                       </>
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Messaging state
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   // Fetch student and messages
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);

//         // Fetch previous messages
//         const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
//         setMessagesList(res.data.messages || []);
//       } catch (err) {
//         console.error("Error fetching student or messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student)
//     return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   // Send message
//   const sendMessage = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/admin/sendMessage", {
//         studentId: student._id,
//         message,
//       });

//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert("Message sent successfully!");
//       setMessage("");
//       setShowMessageCard(false);

//       // Update local message list
//       setMessagesList((prev) => [
//         ...prev,
//         { studentId: student._id, message, timestamp: new Date() },
//       ]);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error sending message: " + err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>

//       <h2 className="text-3xl font-semibold mb-6 text-center">
//         {student.fullName}'s Profile
//       </h2>

//       {/* === Basic Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* === Send Message Button === */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {/* === Message Card === */}
//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>

//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />

//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={sendMessage}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* === Previous Messages === */}
//         {messagesList.length > 0 && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Previous Messages</h4>
//             <ul>
//               {messagesList.map((m, idx) => (
//                 <li key={idx} className="mb-1">
//                   <span className="font-medium">{new Date(m.timestamp).toLocaleString()}:</span>{" "}
//                   {m.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* === Contact Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* === Parent Info === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>

//       {/* === Uploaded Documents === */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Uploaded Documents</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Aadhar Card", url: student.aadhaar },
//                 { name: "DMC", url: student.dmc },
//                 { name: "Caste Certificate", url: student.casteCert },
//                 { name: "Residence Certificate", url: student.residenceCert },
//                 { name: "Photo", url: student.photo },
//                 { name: "Bank", url: student.documents?.bank },
//                 { name: "Fee Receipt", url: student.documents?.feeReceipt },
//                 { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//                 { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//                 { name: "Application Form", url: student.documents?.applicationForm },
//                 { name: "Affidavit", url: student.documents?.affidavit },
//                 { name: "College ID Card", url: student.documents?.collegeIDCard },
//                 { name: "Income Certificate", url: student.documents?.incomeCert },
//                 { name: "ITR", url: student.documents?.itr },
//                 { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//                 { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//               ].map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">
//                     {doc.url ? (
//                       <span className="text-green-700 font-semibold">Uploaded</span>
//                     ) : (
//                       <span className="text-gray-500">Not Uploaded</span>
//                     )}
//                   </td>
//                   <td className="border px-4 py-2 text-center space-x-3">
//                     {doc.url ? (
//                       <a
//                         href={`http://localhost:5000/${doc.url}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         View
//                       </a>
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);

//         const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
//         setMessagesList(res.data.messages || []);
//       } catch (err) {
//         console.error("Error fetching student or messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   const sendMessage = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/admin/sendMessage", {
//         studentId: student._id,
//         message,
//       });

//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert("Message sent successfully!");
//       setMessage("");
//       setShowMessageCard(false);

//       setMessagesList(prev => [
//         ...prev,
//         { studentId: student._id, message, timestamp: new Date().toISOString() },
//       ]);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error sending message: " + err.message);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Students</Link>
//       <h2 className="text-3xl font-semibold mb-6 text-center">{student.fullName}'s Profile</h2>

//       {/* Basic Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* Send Message */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >Send Message to Student</button>
//         </div>

//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>
//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />
//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >{msg}</button>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={sendMessage}>Send</button>
//               <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={() => setShowMessageCard(false)}>Cancel</button>
//             </div>
//           </div>
//         )}

//         {/* Previous Messages */}
//         {messagesList.length > 0 && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Previous Messages</h4>
//             <ul>
//               {messagesList.map((m, idx) => (
//                 <li key={idx} className="mb-1">
//                   <span className="font-medium">{new Date(m.timestamp).toLocaleString()}:</span> {m.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* Contact Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* Parent Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>

//       {/* Uploaded Documents */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Uploaded Documents</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: "Aadhar Card", url: student.aadhaar },
//                 { name: "DMC", url: student.dmc },
//                 { name: "Caste Certificate", url: student.casteCert },
//                 { name: "Residence Certificate", url: student.residenceCert },
//                 { name: "Photo", url: student.photo },
//                 { name: "Bank", url: student.documents?.bank },
//                 { name: "Fee Receipt", url: student.documents?.feeReceipt },
//                 { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//                 { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//                 { name: "Application Form", url: student.documents?.applicationForm },
//                 { name: "Affidavit", url: student.documents?.affidavit },
//                 { name: "College ID Card", url: student.documents?.collegeIDCard },
//                 { name: "Income Certificate", url: student.documents?.incomeCert },
//                 { name: "ITR", url: student.documents?.itr },
//                 { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//                 { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//               ].map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">{doc.url ? <span className="text-green-700 font-semibold">Uploaded</span> : <span className="text-gray-500">Not Uploaded</span>}</td>
//                   <td className="border px-4 py-2 text-center">{doc.url ? <a href={`http://localhost:5000/${doc.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a> : "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [sending, setSending] = useState(false); // new state for sending
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);

//         const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
//         setMessagesList(res.data.messages || []);
//       } catch (err) {
//         console.error("Error fetching student or messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   const sendMessage = async () => {
//     if (!message.trim()) return alert("Message cannot be empty!");

//     setSending(true);
//     try {
//       const res = await axios.post("http://localhost:5000/admin/sendMessage", {
//         studentId: student._id,
//         message,
//       });

//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert(`✅ Message sent successfully!\nTwilio SID: ${res.data.sid}`);
//       setMessage("");
//       setShowMessageCard(false);

//       setMessagesList(prev => [
//         ...prev,
//         { studentId: student._id, message, timestamp: new Date().toISOString() },
//       ]);
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert(`❌ Failed to send message:\n${err.response?.data?.error || err.message}`);
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Students</Link>
//       <h2 className="text-3xl font-semibold mb-6 text-center">{student.fullName}'s Profile</h2>

//       {/* Basic Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* Send Message */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>
//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />
//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <button
//                 className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
//                 onClick={sendMessage}
//                 disabled={sending}
//               >
//                 {sending ? "Sending..." : "Send"}
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//                 disabled={sending}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Previous Messages */}
//         {messagesList.length > 0 && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Previous Messages</h4>
//             <ul>
//               {messagesList.map((m, idx) => (
//                 <li key={idx} className="mb-1">
//                   <span className="font-medium">{new Date(m.timestamp).toLocaleString()}:</span> {m.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* Contact Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* Parent Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [sending, setSending] = useState(false);
//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);

//         const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
//         setMessagesList(res.data.messages || []);
//       } catch (err) {
//         console.error("Error fetching student or messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   const sendMessage = async () => {
//     if (!message.trim()) return alert("Message cannot be empty!");

//     setSending(true);
//     try {
//       // Correct phone number format before sending
//       let phoneToSend = student.phone;
//       if (!phoneToSend.startsWith("+")) {
//         phoneToSend = "+91" + phoneToSend;
//       }

//       const res = await axios.post("http://localhost:5000/admin/sendMessage", {
//         studentId: student._id,
//         message,
//         phone: phoneToSend, // send corrected phone to backend
//       });

//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert(`✅ Message sent successfully!\nTwilio SID: ${res.data.sid}`);
//       setMessage("");
//       setShowMessageCard(false);

//       setMessagesList(prev => [
//         ...prev,
//         { studentId: student._id, message, timestamp: new Date().toISOString() },
//       ]);
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert(`❌ Failed to send message:\n${err.response?.data?.error || err.message}`);
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Students</Link>
//       <h2 className="text-3xl font-semibold mb-6 text-center">{student.fullName}'s Profile</h2>

//       {/* Basic Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* Send Message */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>
//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />
//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <button
//                 className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
//                 onClick={sendMessage}
//                 disabled={sending}
//               >
//                 {sending ? "Sending..." : "Send"}
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//                 disabled={sending}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Previous Messages */}
//         {messagesList.length > 0 && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Previous Messages</h4>
//             <ul>
//               {messagesList.map((m, idx) => (
//                 <li key={idx} className="mb-1">
//                   <span className="font-medium">{new Date(m.timestamp).toLocaleString()}:</span> {m.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* Contact Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* Parent Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>
//     </div>
//   );
// }


// 




// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showMessageCard, setShowMessageCard] = useState(false);
//   const [message, setMessage] = useState("");
//   const [messagesList, setMessagesList] = useState([]);
//   const [sending, setSending] = useState(false);

//   const preBuiltMessages = [
//     "Submit your documents",
//     "Upload your 10th marksheet",
//     "Upload your 12th marksheet",
//     "Complete your profile",
//   ];

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);

//         const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
//         setMessagesList(res.data.messages || []);
//       } catch (err) {
//         console.error("Error fetching student or messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   const sendMessage = async () => {
//     if (!message.trim()) return alert("Message cannot be empty!");

//     setSending(true);
//     try {
//       const res = await axios.post("http://localhost:5000/admin/sendMessage", {
//         studentId: student._id,
//         message,
//       });

//       if (!res.data.success) throw new Error(res.data.error || "Unknown error");

//       alert(`✅ Message sent successfully!\nTwilio SID: ${res.data.sid}`);
//       setMessage("");
//       setShowMessageCard(false);

//       setMessagesList(prev => [
//         ...prev,
//         { studentId: student._id, message, timestamp: new Date().toISOString() },
//       ]);
//     } catch (err) {
//       console.error("Error sending message:", err);
//       alert(`❌ Failed to send message:\n${err.response?.data?.error || err.message}`);
//     } finally {
//       setSending(false);
//     }
//   };

//   const documents = [
//     { name: "Aadhar Card", url: student.aadhaar },
//     { name: "DMC", url: student.dmc },
//     { name: "Caste Certificate", url: student.casteCert },
//     { name: "Residence Certificate", url: student.residenceCert },
//     { name: "Photo", url: student.photo },
//     { name: "Bank", url: student.documents?.bank },
//     { name: "Fee Receipt", url: student.documents?.feeReceipt },
//     { name: "Freeship Card", url: student.documents?.freeshipCardNo },
//     { name: "Student Undertaking", url: student.documents?.studentUndertaking },
//     { name: "Application Form", url: student.documents?.applicationForm },
//     { name: "Affidavit", url: student.documents?.affidavit },
//     { name: "College ID Card", url: student.documents?.collegeIDCard },
//     { name: "Income Certificate", url: student.documents?.incomeCert },
//     { name: "ITR", url: student.documents?.itr },
//     { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
//     { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
//   ];

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10">
//      const handleViewDetails = (student) => {
//   navigate(`/student/${student._id}`, {
//     state: {
//       branch: selectedBranch,
//       session: selectedSession,
//       showAll: showAllStudents,
//       students: filteredStudents, // optional: to reload instantly
//     },
//   });
// };

      
//       {/* Basic Info */}
//       <section className="mb-6">
//         <h2 className="text-3xl font-semibold mb-6 text-center">{student.fullName}'s Profile</h2>
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Basic Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Application No:</strong> {student.applicationNumber}</p>
//           <p><strong>Roll No:</strong> {student.rollNo}</p>
//           <p><strong>Course:</strong> {student.course}</p>
//           <p><strong>Branch:</strong> {student.branch}</p>
//           <p><strong>Session:</strong> {student.session}</p>
//           <p><strong>Gender:</strong> {student.gender}</p>
//           <p><strong>Category:</strong> {student.category}</p>
//           <p><strong>Date of Birth:</strong> {new Date(student.dateofbirth).toLocaleDateString()}</p>
//         </div>

//         {/* Send Message */}
//         <div className="mt-4">
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => setShowMessageCard(true)}
//           >
//             Send Message to Student
//           </button>
//         </div>

//         {showMessageCard && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Send Message to {student.fullName}</h4>
//             <textarea
//               className="w-full border p-2 rounded mb-2"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message here..."
//             />
//             <div className="mb-2">
//               <span className="mr-2 font-medium">Pre-built Messages:</span>
//               {preBuiltMessages.map((msg, idx) => (
//                 <button
//                   key={idx}
//                   className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
//                   onClick={() => setMessage(msg)}
//                 >
//                   {msg}
//                 </button>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <button
//                 className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
//                 onClick={sendMessage}
//                 disabled={sending}
//               >
//                 {sending ? "Sending..." : "Send"}
//               </button>
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//                 onClick={() => setShowMessageCard(false)}
//                 disabled={sending}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Previous Messages */}
//         {messagesList.length > 0 && (
//           <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
//             <h4 className="font-semibold mb-2">Previous Messages</h4>
//             <ul>
//               {messagesList.map((m, idx) => (
//                 <li key={idx} className="mb-1">
//                   <span className="font-medium">{new Date(m.timestamp).toLocaleString()}:</span> {m.message}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* Contact Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Contact Information</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Email:</strong> {student.email}</p>
//           <p><strong>Phone:</strong> {student.phone}</p>
//           <p><strong>Address:</strong> {student.address}</p>
//         </div>
//       </section>

//       {/* Parent Info */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Parent Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <p><strong>Father's Name:</strong> {student.fatherName}</p>
//           <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           <p><strong>Parent Contact:</strong> {student.parentContact}</p>
//           <p><strong>Occupation:</strong> {student.parentOccupation}</p>
//           <p><strong>Annual Income:</strong> ₹{student.parentIncome?.toLocaleString()}</p>
//         </div>
//       </section>

//       {/* Uploaded Documents */}
//       <section className="mb-6">
//         <h3 className="text-xl font-bold mb-2 border-b pb-1">Uploaded Documents</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 rounded-lg text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Document Name</th>
//                 <th className="border px-4 py-2 text-left">Status / File</th>
//                 <th className="border px-4 py-2 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {documents.map((doc, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2 font-medium">{doc.name}</td>
//                   <td className="border px-4 py-2">
//                     {doc.url ? (
//                       <span className="text-green-700 font-semibold">Uploaded</span>
//                     ) : (
//                       <span className="text-gray-500">Not Uploaded</span>
//                     )}
//                   </td>
//                   <td className="border px-4 py-2 text-center">
//                     {doc.url ? (
//                       <a
//                         href={`http://localhost:5000/${doc.url}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         View
//                       </a>
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }


// added by latest me 27-10

import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getStudentById } from "../api/studentApi";
import axios from "axios";

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMessageCard, setShowMessageCard] = useState(false);
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [sending, setSending] = useState(false);

  const preBuiltMessages = [
    "Submit your documents",
    "Upload your 10th marksheet",
    "Upload your 12th marksheet",
    "Complete your profile",
  ];

  // ✅ Fetch student details + messages
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        setStudent(data.student || data);

        const res = await axios.get(`http://localhost:5000/admin/messages/${id}`);
        setMessagesList(res.data.messages || []);
      } catch (err) {
        console.error("Error fetching student or messages:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchStudent();
  }, [id]);

  // ✅ Back button (with preserved filters)
  const handleBackToStudents = () => {
    if (location.state?.fromList && location.state?.students) {
      navigate("/students", { state: { students: location.state.students } });
    } else {
      navigate("/students");
    }
  };

  if (loading)
    return <p className="text-center mt-10">Loading student details...</p>;
  if (!student)
    return <p className="text-center mt-10 text-red-600">Student not found</p>;

  // ✅ Send message via Twilio
  const sendMessage = async () => {
    if (!message.trim()) return alert("Message cannot be empty!");
    setSending(true);
    try {
      const res = await axios.post("http://localhost:5000/admin/sendMessage", {
        studentId: student._id,
        message,
      });

      if (!res.data.success) throw new Error(res.data.error || "Unknown error");

      alert(`✅ Message sent successfully!\nTwilio SID: ${res.data.sid}`);
      setMessage("");
      setShowMessageCard(false);

      setMessagesList((prev) => [
        ...prev,
        { studentId: student._id, message, timestamp: new Date().toISOString() },
      ]);
    } catch (err) {
      console.error("Error sending message:", err);
      alert(`❌ Failed to send message:\n${err.response?.data?.error || err.message}`);
    } finally {
      setSending(false);
    }
  };

  const documents = [
    { name: "Aadhar Card", url: student.aadhaar },
    { name: "DMC", url: student.dmc },
    { name: "Caste Certificate", url: student.casteCert },
    { name: "Residence Certificate", url: student.residenceCert },
    { name: "Photo", url: student.photo },
    { name: "Bank", url: student.documents?.bank },
    { name: "Fee Receipt", url: student.documents?.feeReceipt },
    { name: "Freeship Card", url: student.documents?.freeshipCardNo },
    { name: "Student Undertaking", url: student.documents?.studentUndertaking },
    { name: "Application Form", url: student.documents?.applicationForm },
    { name: "Affidavit", url: student.documents?.affidavit },
    { name: "College ID Card", url: student.documents?.collegeIDCard },
    { name: "Income Certificate", url: student.documents?.incomeCert },
    { name: "ITR", url: student.documents?.itr },
    { name: "Father Aadhaar", url: student.documents?.fatherAadhaar },
    { name: "Mother Aadhaar", url: student.documents?.motherAadhaar },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10">
      {/* ✅ Back Button */}
      <button
        onClick={handleBackToStudents}
        className="mb-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        ← Back to Students
      </button>

      {/* ✅ Basic Info */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {student.fullName}'s Profile
        </h2>
        <h3 className="text-xl font-bold mb-2 border-b pb-1">
          Basic Information
        </h3>
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

        {/* ✅ Send Message Section */}
        <div className="mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowMessageCard(true)}
          >
            Send Message to Student
          </button>
        </div>

        {/* ✅ Message Box */}
        {showMessageCard && (
          <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
            <h4 className="font-semibold mb-2">
              Send Message to {student.fullName}
            </h4>
            <textarea
              className="w-full border p-2 rounded mb-2"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <div className="mb-2">
              <span className="mr-2 font-medium">Pre-built Messages:</span>
              {preBuiltMessages.map((msg, idx) => (
                <button
                  key={idx}
                  className="bg-gray-200 px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 text-sm"
                  onClick={() => setMessage(msg)}
                >
                  {msg}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={sendMessage}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setShowMessageCard(false)}
                disabled={sending}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* ✅ Previous Messages */}
        {messagesList.length > 0 && (
          <div className="mt-4 p-4 border rounded shadow-md bg-gray-50">
            <h4 className="font-semibold mb-2">Previous Messages</h4>
            <ul>
              {messagesList.map((m, idx) => (
                <li key={idx} className="mb-1">
                  <span className="font-medium">
                    {new Date(m.timestamp).toLocaleString()}:
                  </span>{" "}
                  {m.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ✅ Contact Info */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Address:</strong> {student.address}</p>
        </div>
      </section>

      {/* ✅ Parent Info */}
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

      {/* ✅ Uploaded Documents */}
      <section className="mb-6">
        <h3 className="text-xl font-bold mb-2 border-b pb-1">
          Uploaded Documents
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Document Name</th>
                <th className="border px-4 py-2 text-left">Status / File</th>
                <th className="border px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 font-medium">{doc.name}</td>
                  <td className="border px-4 py-2">
                    {doc.url ? (
                      <span className="text-green-700 font-semibold">Uploaded</span>
                    ) : (
                      <span className="text-gray-500">Not Uploaded</span>
                    )}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {doc.url ? (
                      <a
                        href={`http://localhost:5000/${doc.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}



// added by me lateest

// import { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { getStudentById } from "../api/studentApi";
// import axios from "axios";

// export default function StudentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const prevFilters = location.state?.filters || {};

//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentById(id);
//         setStudent(data.student || data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading student details...</p>;
//   if (!student) return <p className="text-center mt-10 text-red-600">Student not found</p>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-lg mt-10">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/students", { state: { filters: prevFilters } })}
//         className="text-blue-600 underline mb-4 inline-block"
//       >
//         ← Back to Students
//       </button>

//       <h2 className="text-3xl font-semibold mb-6 text-center">{student.fullName}'s Profile</h2>

//       <p><strong>Branch:</strong> {student.branch}</p>
//       <p><strong>Session:</strong> {student.session}</p>
//       <p><strong>Roll No:</strong> {student.rollNo}</p>
//       <p><strong>Email:</strong> {student.email}</p>
//       <p><strong>Phone:</strong> {student.phone}</p>
//     </div>
//   );
// }
