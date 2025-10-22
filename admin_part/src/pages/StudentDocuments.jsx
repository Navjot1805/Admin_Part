// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function StudentDocuments() {
//   const { id } = useParams(); // get student id from URL
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/admin/students/${id}`);
//         setStudent(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudent();
//   }, [id]);

//   const renderDocs = (docs, label) => {
//     if (!docs || docs.length === 0) return null;
//     return (
//       <div className="mb-2">
//         <strong>{label}:</strong>
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

//   if (loading) return <p>Loading student documents...</p>;
//   if (!student) return <p>Student not found</p>;

//   return (
//     <div className="p-6">
//       <Link to="/" className="text-blue-600 underline mb-4 inline-block">
//         ← Back to Students
//       </Link>
//       <h2 className="text-2xl font-semibold mb-4">{student.fullName}'s Documents</h2>

//       <div>
//         {renderDocs(student.incomeCert, "Income Certificate")}
//         {renderDocs(student.aadhaar, "Aadhaar")}
//         {renderDocs(student.fatherAadhaar, "Father Aadhaar")}
//         {renderDocs(student.motherAadhaar, "Mother Aadhaar")}
//         {renderDocs(student.casteCert, "Caste Certificate")}
//         {renderDocs(student.dmc, "DMC")}
//         {renderDocs(student.residenceCert, "Residence Certificate")}
//         {renderDocs(student.itr, "ITR")}
//         {renderDocs(student.photo, "Photo")}
//         {renderDocs(student.bank, "Bank Document")}
//         {renderDocs(student.feeReceipt, "Fee Receipt")}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function StudentDocuments() {
  const { id } = useParams();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/admin/students/${id}/documents`);
        setDocuments(res.data.documents);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Uploaded Documents</h2>

      {documents.length === 0 ? (
        <p className="text-center text-gray-500">No documents uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 text-center bg-white"
            >
              <h3 className="font-semibold mb-2">{doc.name}</h3>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Document
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
