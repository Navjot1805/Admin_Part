// import axios from "axios";

// const API_URL = "http://localhost:5000/admin";

// export const getAllStudents = async (branch = "all") => {
//   try {
//     const res = await axios.get(`${API_URL}/students?branch=${branch}`);
//     return res.data; // 👈 important — returns the JSON array
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     return [];
//   }
// };
// import axios from "axios";

// const API_URL = "http://localhost:5000/admin/students";

// export const getAllStudents = async (branch = "all") => {
//   try {
//     const res = await axios.get(`${API_URL}/students?branch=${branch}`);
//     return res.data; // returns { students: [...] }
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     return { students: [] };
//   }
// };


// edited manually
// ✅ Correct studentApi.js

// import axios from "axios";

// const API_URL = "http://localhost:5000/admin"; // remove /students here

// export const getAllStudents = async (branch = "all") => {
//   try {
//     const res = await axios.get(`${API_URL}/students?branch=${branch}`);
//     return res.data; // returns { students: [...] } or your object
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     return { students: [] };
//   }
// };



// admin_part/src/api/studentApi.js


// import axios from "axios";

// const API_URL = "http://localhost:5000/admin";

// export const getAllStudents = async (filters = {}) => {
//   const params = new URLSearchParams();

//   if (filters.branch && filters.branch !== "all") {
//     params.append("branch", filters.branch);
//   }

//   if (filters.session && filters.session !== "all") {
//     params.append("session", filters.session);
//   }

//   const res = await axios.get(`${API_URL}/students?${params.toString()}`);
//   return res.data;
// };

// updated on 18-10-25 8:04 pm
import axios from "axios";

const API_URL = "http://localhost:5000/admin";

// Fetch students with optional filters
export const getAllStudents = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.branch && filters.branch !== "all") params.append("branch", filters.branch);
  if (filters.session && filters.session !== "all") params.append("session", filters.session);

  const res = await axios.get(`${API_URL}/students?${params.toString()}`);
  return res.data;
};

// Fetch single student by ID
export const getStudentById = async (id) => {
  const res = await axios.get(`${API_URL}/students/${id}`);
  return res.data;
};

