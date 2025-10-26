

// // // import express from "express";
// // // import { getAllStudents } from "../controllers/adminControllers.js";

// // // const router = express.Router();

// // // // Route for fetching all students or by branch
// // // router.get("/students", getAllStudents);

// // // export default router;

// // import express from "express";
// // import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// // const router = express.Router();

// // // Get all students or filter by branch
// // router.get("/students", getAllStudents);

// // // ✅ Get single student by ID
// // router.get("/students/:id", getStudentById);

// // export default router;


// // import express from "express";
// // import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// // const router = express.Router();

// // // Get all students or filter by branch
// // router.get("/students", getAllStudents);

// // // ✅ Get single student by ID
// // router.get("/students/:id", getStudentById);

// // export default router;

// import express from "express";
// import { getStudentById, getStudents } from "../controllers/adminControllers.js";

// const router = express.Router();

// // ✅ Get all students or filter by branch/session
// router.get("/students", getStudents);

// // ✅ Get single student by ID (with all details)
// router.get("/students/:id", getStudentById);



// export default router;


// import express from "express";
// import { getAllStudents } from "../controllers/adminControllers.js";

// const router = express.Router();

// router.get("/students", getAllStudents);

// export default router;


// updated at 8:03 18-10-25

// import express from "express";
// import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Fetch all students or filter
// router.get("/students", getAllStudents);

// // Fetch student details by ID
// router.get("/students/:id", getStudentById);

// export default router;


// import express from "express";
// import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// const router = express.Router();

// router.get("/students", getAllStudents);       // fetch all or filtered
// router.get("/students/:id", getStudentById);   // fetch single student details

// export default router;


// import express from "express";
// import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Get all students
// router.get("/students", getAllStudents);

// // Get student by ID
// router.get("/students/:id", getStudentById);

// export default router;


// import express from "express";
// import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Get all students
// router.get("/students", getAllStudents);

// // Get student by ID
// router.get("/students/:id", getStudentById);


// export default router;



// import {
//   getAllStudents,
//   getStudentById,
//   sendLocalMessage,
//   getStudentMessages,
// } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Existing routes
// router.get("/students", getAllStudents);
// router.get("/students/:id", getStudentById);

// // 🆕 New routes for local message system
// router.post("/students/sendMessage", sendLocalMessage);
// router.get("/students/:id/messages", getStudentMessages);

// export default router;
//   // updated by navjot 25-10 5:25pm


// import express from "express";
// import {
//   getAllStudents,
//   getStudentById,
//   sendMessage,
//   getMessages,
// } from "../controllers/adminControllers.js";

// const router = express.Router();

// router.get("/students", getAllStudents);
// router.get("/students/:id", getStudentById);

// // Message routes
// router.post("/sendMessage", sendMessage);
// router.get("/messages/:id", getMessages);

// export default router;


// import express from "express";
// import {
//   getAllStudents,
//   getStudentById,
//   sendMessage,
//   getMessages,
// } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Students
// router.get("/students", getAllStudents);
// router.get("/students/:id", getStudentById);

// // Messages
// router.post("/sendMessage", sendMessage);
// router.get("/messages/:id", getMessages);

// export default router;


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import path from "path";
// import adminRoutes from "./routes/adminRoutes.js";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());

// // Static folder for uploads
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// // Routes
// app.use("/admin", adminRoutes); // All admin routes (students + messages)

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// import express from "express";
// import { getAllStudents, getStudentById, sendMessage, getMessages } from "../controllers/adminControllers.js";

// const router = express.Router();

// // Students
// router.get("/students", getAllStudents);
// router.get("/students/:id", getStudentById);

// // Messages
// router.post("/sendMessage", sendMessage);
// router.get("/messages/:id", getMessages);

// export default router;


import express from "express";
import { getAllStudents, getStudentById, sendMessage, getMessages } from "../controllers/adminControllers.js";

const router = express.Router();

// Students
router.get("/students", getAllStudents);
router.get("/students/:id", getStudentById);

// Messages
router.post("/sendMessage", sendMessage);
router.get("/messages/:id", getMessages);

export default router;
