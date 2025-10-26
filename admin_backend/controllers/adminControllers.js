




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


// import mongoose from "mongoose";

// // Fetch all students or filtered
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     console.log("Query:", query);

//     const students = await collection.find(query).toArray();

//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students
//     });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Fetch single student by ID
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid student ID" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     // ✅ Flatten nested document fields (so frontend can access directly)
//     const flatStudent = {
//       ...student,
//       ...(student.documents || {}),  // merge nested documents into root
//     };

//     res.status(200).json(flatStudent);
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { Vonage } from "@vonage/server-sdk";

// dotenv.config();

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     console.log("Query:", query);

//     const students = await collection.find(query).toArray();

//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students
//     });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid student ID" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     // Flatten nested document fields
//     const flatStudent = {
//       ...student,
//       ...(student.documents || {}), // merge nested documents into root
//     };

//     console.log("Fetched student:", flatStudent);

//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  SEND MESSAGE FUNCTIONALITY
// // =======================
// export const sendMessage = async (req, res) => {
//   try {
//     const { phone, message } = req.body;
//     if (!phone || !message) {
//       return res.status(400).json({ error: "Phone and message are required" });
//     }

//     const vonage = new Vonage({
//       apiKey: process.env.VONAGE_API_KEY,
//       apiSecret: process.env.VONAGE_API_SECRET
//     });

//     const from = process.env.VONAGE_BRAND_NAME || "AdminPortal";
//     const to = phone.startsWith("+") ? phone : `+91${phone}`;

//     vonage.sms.send({ to, from, text: message }, (err, responseData) => {
//       if (err) {
//         console.error("❌ Error sending message:", err);
//         return res.status(500).json({ error: err.message });
//       } else {
//         console.log("✅ Message sent:", responseData);
//         return res.json({ success: true, response: responseData });
//       }
//     });
//   } catch (error) {
//     console.error("❌ Error in sendMessage:", error);
//     res.status(500).json({ error: error.message });
//   }
// };
// import mongoose from "mongoose";

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();

//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students,
//     });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid student ID" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({
//       _id: new mongoose.Types.ObjectId(id),
//     });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     // Flatten nested fields (optional)
//     const flatStudent = {
//       ...student,
//       ...(student.documents || {}),
//     };

//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY (No external service)
// // =======================

// // Temporary in-memory message storage
// let messages = [];

// // SEND MESSAGE from Admin
// export const sendMessage = (req, res) => {
//   try {
//     const { studentId, message } = req.body;

//     if (!studentId || !message) {
//       return res
//         .status(400)
//         .json({ error: "Student ID and message are required" });
//     }

//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     messages.push(newMsg);

//     console.log("✅ Message sent:", newMsg);

//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("❌ Error sending message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // GET MESSAGES for a Student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter((msg) => msg.studentId === id);
//     res.json(studentMessages);
//   } catch (error) {
//     console.error("❌ Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// import mongoose from "mongoose";

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();

//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({
//       success: true,
//       count: students.length,
//       students,
//     });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid student ID" });
//     }

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({
//       _id: new mongoose.Types.ObjectId(id),
//     });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     const flatStudent = { ...student, ...(student.documents || {}) };

//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY (IN-MEMORY)
// // =======================
// let messages = []; // temporary storage

// // Send message from admin
// export const sendMessage = (req, res) => {
//   console.log("📨 Incoming request body:", req.body);

//   try {
//     const { studentId, message } = req.body;

//     if (!studentId || !message) {
//       return res
//         .status(400)
//         .json({ error: "Student ID and message are required" });
//     }

//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     messages.push(newMsg);

//     console.log("✅ Message sent:", newMsg);

//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("❌ Error sending message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get messages for a student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter((msg) => msg.studentId === id);
//     res.json(studentMessages);
//   } catch (error) {
//     console.error("❌ Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// import mongoose from "mongoose";

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();
//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({ success: true, count: students.length, students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(400).json({ message: "Invalid student ID" });

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     const flatStudent = { ...student, ...(student.documents || {}) };
//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY
// // =======================
// let messages = []; // in-memory storage

// // Send message
// export const sendMessage = (req, res) => {
//   try {
//     const { studentId, message } = req.body;
//     if (!studentId || !message) {
//       return res.status(400).json({ error: "Student ID and message are required" });
//     }

//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     messages.push(newMsg);
//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get messages for a student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter(msg => msg.studentId === id);
//     res.json({ messages: studentMessages });
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// import mongoose from "mongoose";

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();
//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({ success: true, count: students.length, students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(400).json({ message: "Invalid student ID" });

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     const flatStudent = { ...student, ...(student.documents || {}) };
//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY
// // =======================
// let messages = []; // in-memory storage

// // Send message
// export const sendMessage = (req, res) => {
//   try {
//     const { studentId, message } = req.body;
//     if (!studentId || !message) {
//       return res.status(400).json({ error: "Student ID and message are required" });
//     }

//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     messages.push(newMsg);
//     res.json({ success: true, message: "Message sent successfully" });
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get messages for a student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter(msg => msg.studentId === id);
//     res.json({ messages: studentMessages });
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// import mongoose from "mongoose";
// import twilio from "twilio";

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();
//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({ success: true, count: students.length, students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(400).json({ message: "Invalid student ID" });

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     const flatStudent = { ...student, ...(student.documents || {}) };
//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY WITH TWILIO
// // =======================
// let messages = []; // in-memory storage

// // Send message
// export const sendMessage = async (req, res) => {
//   try {
//     const { studentId, message } = req.body;
//     if (!studentId || !message) {
//       return res.status(400).json({ error: "Student ID and message are required" });
//     }

//     // Fetch student phone number
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");
//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(studentId) });
//     if (!student) return res.status(404).json({ error: "Student not found" });
//     if (!student.phone) return res.status(400).json({ error: "Student phone number not available" });

//     // Send SMS via Twilio
//     await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: student.phone
//     });

//     // Store in-memory for frontend
//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };
//     messages.push(newMsg);

//     res.json({ success: true, message: "Message sent successfully via Twilio" });
//   } catch (error) {
//     console.error("Error sending message via Twilio:", error);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// };

// // Get messages for a student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter(msg => msg.studentId === id);
//     res.json({ messages: studentMessages });
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// import mongoose from "mongoose";
// import twilio from "twilio";

// // Initialize Twilio client
// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// // =======================
// //  FETCH ALL STUDENTS
// // =======================
// export const getAllStudents = async (req, res) => {
//   try {
//     const { branch, session } = req.query;
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const query = {};
//     if (branch && branch !== "all") query.branch = branch.trim();
//     if (session && session !== "all") query.session = session.trim();

//     const students = await collection.find(query).toArray();
//     if (!students || students.length === 0) {
//       return res.status(404).json({ message: "No students found" });
//     }

//     res.status(200).json({ success: true, count: students.length, students });
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  FETCH SINGLE STUDENT BY ID
// // =======================
// export const getStudentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(400).json({ message: "Invalid student ID" });

//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");

//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(id) });
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     const flatStudent = { ...student, ...(student.documents || {}) };
//     res.status(200).json({ success: true, student: flatStudent });
//   } catch (err) {
//     console.error("Error fetching student:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // =======================
// //  MESSAGE FUNCTIONALITY WITH TWILIO
// // =======================
// let messages = []; // in-memory storage

// // Send message
// export const sendMessage = async (req, res) => {
//   try {
//     const { studentId, message } = req.body;
//     if (!studentId || !message) {
//       return res.status(400).json({ error: "Student ID and message are required" });
//     }

//     // Fetch student phone number
//     const db = mongoose.connection.useDb("studentAcedmics");
//     const collection = db.collection("studentdetails");
//     const student = await collection.findOne({ _id: new mongoose.Types.ObjectId(studentId) });
//     if (!student) return res.status(404).json({ error: "Student not found" });

//     // ✅ Validate phone number format (E.164)
//     if (!student.phone || !student.phone.startsWith("+")) {
//       return res.status(400).json({ error: "Invalid student phone number. Must include country code like +91XXXXXXXXXX" });
//     }

//     // Send SMS via Twilio
//     try {
//       const twilioResponse = await client.messages.create({
//         body: message,
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: student.phone
//       });
//       console.log("Twilio message SID:", twilioResponse.sid);
//     } catch (twilioError) {
//       console.error("Twilio Error:", twilioError);
//       return res.status(500).json({ error: "Failed to send message via Twilio", details: twilioError.message });
//     }

//     // Store in-memory for frontend
//     const newMsg = {
//       studentId,
//       message,
//       timestamp: new Date().toISOString(),
//     };
//     messages.push(newMsg);

//     res.json({ success: true, message: "Message sent successfully via Twilio" });
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get messages for a student
// export const getMessages = (req, res) => {
//   try {
//     const { id } = req.params;
//     const studentMessages = messages.filter(msg => msg.studentId === id);
//     res.json({ messages: studentMessages });
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


import mongoose from "mongoose";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

// 🔍 Debug environment variables
console.log("🔍 TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("🔍 TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN ? "Loaded ✅" : "Missing ❌");
console.log("🔍 TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);

// Initialize Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// In-memory storage for messages
let messages = [];

/* ============================================================
   FETCH ALL STUDENTS
============================================================ */
export const getAllStudents = async (req, res) => {
  try {
    const { branch, session } = req.query;
    const db = mongoose.connection.useDb("studentAcedmics");
    const collection = db.collection("studentdetails");

    const query = {};
    if (branch && branch !== "all") query.branch = branch.trim();
    if (session && session !== "all") query.session = session.trim();

    const students = await collection.find(query).toArray();

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    res.status(200).json({ success: true, count: students.length, students });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ============================================================
   FETCH SINGLE STUDENT BY ID
============================================================ */
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid student ID" });

    const db = mongoose.connection.useDb("studentAcedmics");
    const collection = db.collection("studentdetails");

    const student = await collection.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!student) return res.status(404).json({ message: "Student not found" });

    const flatStudent = { ...student, ...(student.documents || {}) };
    res.status(200).json({ success: true, student: flatStudent });
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/* ============================================================
   SEND MESSAGE VIA TWILIO
============================================================ */
export const sendMessage = async (req, res) => {
  try {
    const { studentId, message } = req.body;

    if (!studentId || !message) {
      return res
        .status(400)
        .json({ error: "Student ID and message are required" });
    }

    // Fetch student
    const db = mongoose.connection.useDb("studentAcedmics");
    const collection = db.collection("studentdetails");
    const student = await collection.findOne({
      _id: new mongoose.Types.ObjectId(studentId),
    });

    if (!student) return res.status(404).json({ error: "Student not found" });

    // ✅ Fix phone format
    let phoneToSend = student.phone?.toString().trim() || "";
    if (!phoneToSend) {
      return res
        .status(400)
        .json({ error: "Student does not have a phone number" });
    }

    // Add +91 if missing
    const finalPhone = phoneToSend.startsWith("+")
      ? phoneToSend
      : `+91${phoneToSend}`;

    console.log("📞 Sending message to:", finalPhone);

    try {
      const result = await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: finalPhone,
      });

      console.log("✅ Twilio message SID:", result.sid);

      const newMsg = {
        studentId,
        message,
        timestamp: new Date().toISOString(),
      };
      messages.push(newMsg);

      return res.json({
        success: true,
        sid: result.sid,
        msg: "Message sent successfully via Twilio",
      });
    } catch (twilioError) {
      console.error("❌ Twilio Error:", twilioError);
      return res.status(500).json({
        success: false,
        msg: "Failed to send message via Twilio",
        error: twilioError.message,
      });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

/* ============================================================
   GET MESSAGES
============================================================ */
export const getMessages = (req, res) => {
  try {
    const { id } = req.params;
    const studentMessages = messages.filter((msg) => msg.studentId === id);
    res.json({ messages: studentMessages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
