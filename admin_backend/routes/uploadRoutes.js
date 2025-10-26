// import express from "express";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// const router = express.Router();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Set up storage engine
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../uploads"));
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

// // const upload = multer({ storage });

// // // Single document upload
// // router.post("/upload", upload.single("document"), (req, res) => {
// //   if (!req.file) {
// //     return res.status(400).json({ message: "No file uploaded" });
// //   }
// //   res.json({
// //     success: true,
// //     filePath: `/uploads/${req.file.filename}`,
// //     message: "File uploaded successfully",
// //   });
// // });

// // export default router;


import express from "express";
import multer from "multer";


const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// upload document route
router.post("/:studentId", upload.single("document"), async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const filePath = `/uploads/${req.file.filename}`;

    student.documents.push({
      fileName: req.file.originalname,
      fileUrl: filePath,
      uploadedAt: new Date(),
    });

    await student.save();
    res.json({ message: "Document uploaded successfully", document: req.file });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
});

export default router;
