import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { LoadingScreen } from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
                <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
            </AnimatePresence>
            {!loading && (
                <Layout>
                    <ScrollToTop />
                    <AnimatedRoutes />
                </Layout>
            )}
        </Router>
    );
}

export default App;
