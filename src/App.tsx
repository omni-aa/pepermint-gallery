import { Route } from 'react-router-dom';

import Home from "@/pages/Home/page.tsx";
import Gallery from "@/pages/Gallery/page.tsx";
import About from "@/pages/About/page.tsx";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@/components/ui/theme-provider.tsx";
import Navbar from "@/components/Navbar/page.tsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />

        </Route>
    )
);









function App() {
    return (

        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>

    )
}
export default App;