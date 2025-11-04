import React, { useState } from 'react';
import LandingPage from './components/LandingPage.tsx';
import BookingPage from './components/BookingPage.tsx';

const App: React.FC = () => {
    const [page, setPage] = useState<'landing' | 'booking'>('landing');

    const navigateTo = (targetPage: 'landing' | 'booking') => {
        setPage(targetPage);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            {page === 'landing' ? <LandingPage onNavigateToBooking={() => navigateTo('booking')} /> : <BookingPage onNavigateToLanding={() => navigateTo('landing')} />}
        </div>
    );
};

export default App;