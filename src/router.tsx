import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Index from './Pages/HomePage/index.tsx';

export default function Router() {
    return(
        <>
            <Helmet titleTemplate={"%s | Träningskocken"} />
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </>
    )
}