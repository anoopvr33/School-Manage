// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./router/Authentication/AdminLogin/index.jsx";
import AdminHome from "./router/Admin/adminHome.jsx";
import AdminLibrary from "./router/Admin/Admin-Library/index.jsx";
import AdminStaff from "./router/Admin/AdminStaff/index.jsx";
import AdminStudent from "./router/Admin/AdminStudent/index.jsx";
import LibraryLogin from "./router/Authentication/LibraryLogin/index.jsx";
import LibraryHome from "./router/Librarian/index.jsx";
import StaffLogin from "./router/Authentication/StaffLogin/index.jsx";
import StaffHome from "./router/OfficeStaff/index.jsx";

// import SignUp from "./router/Authentication/UserSignUp/index.jsx";
import FirstPage from "./router/Authentication/FirstPage/index.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/library" element={<AdminLibrary />} />
        <Route path="/admin/staff" element={<AdminStaff />} />
        <Route path="/admin/student" element={<AdminStudent />} />
        <Route path="/library/login" element={<LibraryLogin />} />
        <Route path="/library/home" element={<LibraryHome />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/staff/home" element={<StaffHome />} />
      </Routes>
    </>
  );
};
export default App;
