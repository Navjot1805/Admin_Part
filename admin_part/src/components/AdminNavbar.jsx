// import { useState } from "react";
// import { Menu, User } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [dropdown, setDropdown] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white px-4 sm:px-6 py-3 shadow-md">
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-semibold">Admin Dashboard</div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/" className="hover:text-gray-200">Home</Link>
//           <Link to="/post" className="hover:text-gray-200">Post Notification</Link>

//           <div className="relative">
//             <div
//               onClick={() => setDropdown(!dropdown)}
//               className="flex items-center gap-2 cursor-pointer"
//             >
//               <User size={22} />
//               <span>Admin</span>
//             </div>
//             {dropdown && (
//               <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-50">
//                 <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
//                 <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Requests</button>
//                 <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <Menu size={24} onClick={() => setMobileMenu(!mobileMenu)} className="cursor-pointer" />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="flex flex-col gap-2 mt-2 md:hidden">
//           <Link to="/" className="block px-2 py-1 hover:bg-blue-700 rounded">Home</Link>
//           <Link to="/post" className="block px-2 py-1 hover:bg-blue-700 rounded">Post Notification</Link>
//           <button className="block px-2 py-1 hover:bg-blue-700 rounded text-left">Profile</button>
//           <button className="block px-2 py-1 hover:bg-blue-700 rounded text-left">Requests</button>
//           <button className="block px-2 py-1 hover:bg-blue-700 rounded text-left">Logout</button>
//         </div>
//       )}
//     </nav>
//   );
// }


// added by navjot on 9:07pm 26-10

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any saved admin session (if using auth later)
    localStorage.removeItem("adminToken");
    navigate("/"); // redirect to login/home
  };

  return (
    <nav className="flex justify-between items-center bg-blue-700 text-white px-6 py-3 shadow-md">
      {/* Left side logo/text */}
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>

      {/* Right side dropdown */}
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img
            src="/admin-logo.png" // place your logo in public folder
            alt="Admin Logo"
            className="w-8 h-8 rounded-full border"
          />
          <span className="font-medium">Admin</span>
        </div>

        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-40">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
