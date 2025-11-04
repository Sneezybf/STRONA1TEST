import React, { useState, useMemo } from 'react';
import { 
    CheckCircleIcon,
    ArrowUturnLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    CalendarIcon,
    VideoCameraIcon
} from './icons.tsx';
import { Logo } from './Logo.tsx';
import FormField from './FormField.tsx';

interface BookingPageProps {
    onNavigateToLanding: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onNavigateToLanding }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [step, setStep] = useState<'date' | 'details' | 'confirmed'>('date');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const availableTimes = ['10:00', '11:30', '14:00', '15:30', '17:00'];
    const daysOfWeek = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];
    
    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        
        const days = [];
        let startingDay = firstDayOfMonth.getDay() - 1;
        if (startingDay === -1) startingDay = 6;

        for (let i = 0; i < startingDay; i++) {
            days.push(null);
        }
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    }, [currentDate]);
    
    const handleDateSelect = (day: Date) => {
        setSelectedDate(day);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep('details');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && selectedDate && selectedTime) {
            setStep('confirmed');
        }
    };
    
    const isDateAvailable = (date: Date | null) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
    }

    if (step === 'confirmed') {
        return (
             <div className="flex items-center justify-center min-h-screen p-4">
                <div className="text-center bg-brand-surface/50 p-8 sm:p-12 rounded-2xl border border-brand-primary/20 max-w-lg w-full">
                    <CheckCircleIcon className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h1 className="text-3xl font-bold text-brand-light mb-4">Świetnie! Spotkanie umówione.</h1>
                    <p className="text-brand-muted mb-2">
                        Potwierdzenie rezerwacji na {selectedDate?.toLocaleDateString('pl-PL')} o {selectedTime} zostało wysłane na:
                    </p>
                     <p className="text-brand-light font-medium mb-8 text-lg">{email}</p>
                    <button
                        onClick={onNavigateToLanding}
                        className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold py-3 px-6 rounded-lg hover:bg-brand-primary/30 transition-all duration-300"
                    >
                        <ArrowUturnLeftIcon className="w-5 h-5" />
                        Wróć na stronę główną
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-brand-surface/80 border border-brand-primary/20 rounded-2xl max-w-4xl w-full overflow-hidden backdrop-blur-sm">
                {/* Left Panel */}
                <div className="col-span-1 p-8 border-r border-brand-primary/10">
                    <button onClick={onNavigateToLanding} className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-light transition-colors mb-8">
                        <ArrowUturnLeftIcon className="w-5 h-5" />
                        <span>Wróć</span>
                    </button>
                    <Logo className="h-10 w-auto text-brand-light mb-4" />
                    <h2 className="text-2xl font-bold">Rozmowa Wdrożeniowa</h2>
                    <div className="space-y-3 mt-4 text-brand-muted">
                        <p className="flex items-center gap-3"><ClockIcon className="w-5 h-5 text-brand-primary" /> 30 min</p>
                        <p className="flex items-center gap-3"><VideoCameraIcon className="w-5 h-5 text-brand-primary" /> Google Meet</p>
                        <p className="mt-4">Szybkie spotkanie, na którym podłączymy Twój nowy silnik do zdobywania klientek i odpowiemy na wszystkie pytania.</p>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-span-1 md:col-span-2 p-8">
                    {step === 'details' ? (
                         <div className="animate-fade-in">
                            <h2 className="text-xl font-bold mb-6">Wprowadź swoje dane</h2>
                             <div className="flex items-center gap-3 mb-6 text-brand-muted p-3 rounded-lg bg-brand-surface">
                                <CalendarIcon className="w-5 h-5 text-brand-primary" />
                                <span>{selectedTime}, {selectedDate?.toLocaleDateString('pl-PL', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                             </div>
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <FormField
                                    id="name"
                                    label="Imię i nazwisko"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="np. Anna Kowalska"
                                    required
                                />
                                <FormField
                                    id="email"
                                    label="Adres e-mail"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="np. anna.kowalska@email.com"
                                    required
                                />
                                <button type="submit" className="w-full bg-brand-primary text-brand-bg font-bold py-3 px-6 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-brand-primary/30 text-lg">Zarezerwuj spotkanie</button>
                             </form>
                         </div>
                    ) : (
                        <div className="animate-fade-in">
                            <h2 className="text-xl font-bold mb-4">Wybierz datę i godzinę</h2>
                            <div className="flex items-center justify-between mb-4">
                                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 rounded-full hover:bg-brand-surface"><ChevronLeftIcon className="w-5 h-5" /></button>
                                <span className="font-semibold">{currentDate.toLocaleString('pl-PL', { month: 'long', year: 'numeric' })}</span>
                                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 rounded-full hover:bg-brand-surface"><ChevronRightIcon className="w-5 h-5" /></button>
                            </div>
                            <div className="grid grid-cols-7 gap-2 text-center text-sm text-brand-muted mb-2">
                                {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((day, index) => (
                                    <div key={index} className="flex justify-center items-center h-10">
                                        {day && (
                                            <button 
                                                onClick={() => isDateAvailable(day) && handleDateSelect(day)}
                                                disabled={!isDateAvailable(day)}
                                                className={`w-10 h-10 rounded-full transition-colors ${!isDateAvailable(day) ? 'text-brand-muted/30 cursor-not-allowed' : 'hover:bg-brand-primary hover:text-brand-bg'} ${selectedDate?.getTime() === day.getTime() ? 'bg-brand-primary text-brand-bg' : ''}`}
                                            >
                                                {day.getDate()}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {selectedDate && (
                                <div className="mt-6 animate-fade-in">
                                    <h3 className="font-semibold mb-3 text-center">Dostępne godziny — {selectedDate.toLocaleDateString('pl-PL', { weekday: 'long' })}</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {availableTimes.map(time => (
                                            <button key={time} onClick={() => handleTimeSelect(time)} className="w-full border border-brand-primary text-brand-primary font-semibold py-3 px-4 rounded-lg hover:bg-brand-primary hover:text-brand-bg transition-all duration-300">
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingPage;