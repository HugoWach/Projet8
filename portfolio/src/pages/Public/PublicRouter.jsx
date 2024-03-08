import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Accueil } from "@/pages/Public/index";

import Layout from "@/Layouts/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/accueil" />} />
                <Route path="/accueil" element={<Accueil />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;