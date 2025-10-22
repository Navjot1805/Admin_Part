

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


import express from "express";
import { getAllStudents, getStudentById } from "../controllers/adminControllers.js";

const router = express.Router();

router.get("/students", getAllStudents);       // List / filter
router.get("/students/:id", getStudentById);   // Single student

export default router;
