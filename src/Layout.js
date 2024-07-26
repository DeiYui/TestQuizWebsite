import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './component/Admin/Admin';
import HomePage from './component/Home/HomePage';
import ManageUser from './component/Admin/Content/ManageUser';
import DashBoard from './component/Admin/Content/DashBoard';
import Login from './component/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './component/Auth/Register';
import ListQuiz from './component/User/ListQuiz';
import DetailQuiz from './component/User/DetailQuiz';
import ManageQuiz from './component/Admin/Content/Quiz/ManageQuiz';
import Questions from './component/Admin/Content/Question/Questions';

const NotFound = () => {
  return (
    <div className='container mt-3 alert alert-danger'>
      404.Not found
    </div>
  )
}

const Layout = (props) => {
    return (
        <>
        <Routes>

        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuiz />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />

        <Route path="admins" element={<Admin />}>
          <Route index element={<DashBoard />} />  
          <Route path="manage-users" element={<ManageUser />} />
          <Route path="manage-quizzes" element={<ManageQuiz />} />
          <Route path="manage-questions" element={<Questions />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        
        </>
    )
}

export default Layout;