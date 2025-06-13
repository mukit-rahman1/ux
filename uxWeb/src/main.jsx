import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './pages/landing.jsx'
import Team from './pages/team.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)