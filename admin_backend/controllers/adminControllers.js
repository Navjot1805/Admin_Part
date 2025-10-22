




// import mongoose from "mongoose";

// // ✅ Get all students or filter by branch/session
// export const getStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     // Connect to your MongoDB collection directly
//     const db = mongoose.connection.useDb("studentAcedmics"); // your DB name
//     const collection = db.collection("studentdetails"); // your collection name

//     // Build query dynamically
//     const query = {};
//     if (branch && branch !== "all") query.branch = branch;
//     if (session && session !== "all") query.session = session;

//     // Fetch matching students
//     const students = await collection.find(query).toArray();

//     res.status(200).json(students);
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Failed to fetch students" });
//   }
// };

// // ✅ Get single student by ID
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     // Convert string ID to ObjectId
//     const { ObjectId } = mongoose.Types;
//     const student = await collection.findOne({ _id: new ObjectId(id) });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.status(200).json(student);
//   } catch (err) {
//     console.error("Error fetching student details:", err);
//     res.status(500).json({ message: "Failed to fetch student details" });
//   }
// };

// import mongoose from "mongoose";

// export const getAllStudents = async (req, res) => {
//   try {
//     const db = mongoose.connection.useDb("studentAcedmics"); // use your DB name
//     const collection = db.collection("studentdetails");

//     // Fetch all student details including documents
//     const students = await collection.find({}).toArray();

//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students,
//     });
//   } catch (error) {
//     console.error("Error fetching student details:", error);
//     res.status(500).json({ message: "Server error", error });
//   }
// };


// admin_backend/controllers/adminControllers.js
// import mongoose from "mongoose";

// // ✅ Get all students or filter by branch/session
// export const getStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};

//     // ✅ Apply filters only if not "all" or empty
//     if (branch && branch !== "all" && branch.trim() !== "") {
//       query.branch = branch.trim();
//     }

//     if (session && session !== "all" && session.trim() !== "") {
//       query.session = session.trim();
//     }

//     console.log("Applied filter query:", query);

//     const students = await collection.find(query).toArray();

//     res.status(200).json({ students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Failed to fetch students" });
//   }
// };




// updated on 8:02 pm
// import mongoose from "mongoose";

// // ✅ Get all students or filter by branch/session
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;
//     console.log("Filters received:", { branch, session });

//     if (!mongoose.connection.readyState) {
//       return res.status(500).json({ message: "MongoDB not connected" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     // Build query dynamically
//     const query = {};
//     if (branch && branch !== "all") query.branch = branch;
//     if (session && session !== "all") query.session = session;

//     console.log("Mongo query:", query);

//     const students = await collection.find(query).toArray();
//     console.log("Fetched students:", students.length);

//     res.status(200).json({ success: true, count: students.length, students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Failed to fetch students", error: err.message });
//   }
// };

// // ✅ Get single student by ID
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.connection.readyState) {
//       return res.status(500).json({ message: "MongoDB not connected" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.status(200).json(student);
//   } catch (err) {
//     console.error("Error fetching student by ID:", err);
//     res.status(500).json({ message: "Failed to fetch student", error: err.message });
//   }
// };


import mongoose from "mongoose";

// Fetch all students or filtered
export const getAllStudents = async (req, res) => {
  try {
    const { branch, session } = req.query;

    const db = mongoose.connection.useDb("studentAcedmics");
    const collection = db.collection("studentdetails");

    const query = {};
    if (branch && branch !== "all") query.branch = branch.trim();
    if (session && session !== "all") query.session = session.trim();

    console.log("Query:", query);

    const students = await collection.find(query).toArray();

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    res.status(200).json({
      success: true,
      count: students.length,
      students
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch single student by ID
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid student ID" });
    }

    const db = mongoose.connection.useDb("studentAcedmics");
    const collection = db.collection("studentdetails");

    const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json(student);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ message: "Server error" });
  }
};
