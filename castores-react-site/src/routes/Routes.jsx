import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Header from "../components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import News from "./pages/News";
import NewView from "./pages/NewView";
import Staff from "./pages/Staff";
import Contact from "./pages/Contact";
import HallOfFame from "./pages/HallOfFame";
import Employees from "./pages/Employees";
import FormsApplyVTC from "./pages/FormsApplyVTC/FormsApplyVTC";
import DatePick from "../components/DatePick";
//import ReformaDownloads from "./pages/Reforma/ReformaDownloads";
import Gallery from "./pages/Castores/Gallery";
import CastoresStaffGerencia from "./pages/Castores/CastoresStaffGerencia";
import CastoresStaffTeam from "./pages/Castores/CastoresStaffTeam";
import CastoresStaffExterno from "./pages/Castores/CastoresStaffExterno";

import Notfound from "./pages/Notfound";

const RoutePage = () => {
    return (
        <Router>
            <ScrollTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="staff-gerencia-manager"
                    element={
                        <>
                            <Header />
                            <CastoresStaffGerencia />
                        </>
                    }
                />
                <Route
                    path="staff-team"
                    element={
                        <>
                            <Header />
                            <CastoresStaffTeam />
                        </>
                    }
                />
                <Route
                    path="staff-externo"
                    element={
                        <>
                            <Header />
                            <CastoresStaffExterno />
                        </>
                    }
                />
                <Route
                    path="/events"
                    element={
                        <>
                            <Header />
                            <Events />
                        </>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <>
                            <Header />
                            <News />
                        </>
                    }
                />
                <Route
                    path="/news/:newId"
                    element={
                        <>
                            <Header />
                            <NewView />
                        </>
                    }
                />
                <Route
                    path="/staff"
                    element={
                        <>
                            <Header />
                            <Staff />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <Header />
                            <Contact />
                        </>
                    }
                />
                <Route
                    path="/employees"
                    element={
                        <>
                            <Header />
                            <Employees />
                        </>
                    }
                />
                <Route
                    path="/vtc-apply"
                    element={
                        <>
                            <Header />
                            <DatePick>
                                <FormsApplyVTC />
                            </DatePick>
                        </>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <>
                            <Header />
                            <Gallery />
                        </>
                    }
                />
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <Notfound />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default RoutePage;
