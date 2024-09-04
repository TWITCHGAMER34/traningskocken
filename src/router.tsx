import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Index from './Pages/HomePage/index.tsx';
import BliMedlem from './Pages/Medlem/index.tsx';
import RegisterAndLogin from "./Pages/Register_&_login/Register&Login.tsx";
import Profile from "./Pages/Profile/profile.tsx";

export default function Router() {
    return(
        <>
            <Helmet titleTemplate={"%s | Träningskocken"} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blimedlem" element={<BliMedlem />} />
                <Route path="/login" element={<RegisterAndLogin />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}