import { createRoot } from 'react-dom/client'
import './assets/css/tailwind.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
  <RouterProvider router={routes}/>
)
