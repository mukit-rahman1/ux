import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Team from './pages/team.jsx'
import Homepage from './pages/homepage.jsx'
import Hackathon from './pages/hackathon.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/hackathon",
    element: <Hackathon />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)