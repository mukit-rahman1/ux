import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Team from './pages/team.jsx'
import Homepage from './pages/homepage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/team",
    element: <Team />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)