import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import RootLayout from './components/RootLayout/RootLayout';
import DashBoard from './components/DashBoard/DashBoard';
import LeavePicker from './components/LeavePicker/LeavePicker';

const route = createBrowserRouter([
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: 'dashBoard',
        element: <DashBoard />
      },
      {
        path: 'calendar',
        element: <LeavePicker />
      }
    ]

  },
  
 
]);

function App() {
  return <div className="App">
    <RouterProvider router={route}></RouterProvider>
  </div>

}

export default App;
