import React from 'react';
import FAQItemComponent from './FAQItem.tsx';
import { faqs, offerItems } from '../data.ts';
import { 
    PinIcon, 
    ShieldCheckIcon,
    SparklesIcon
} from './icons.tsx';

interface LandingPageProps {
    onNavigateToBooking: () => void;
}

const ImagePlaceholder: React.FC<{ before: boolean }> = ({ before }) => (
    <div className="relative aspect-square bg-brand-surface rounded-lg overflow-hidden group">
        <img src={`https://placehold.co/400x400/${before ? '9CA3AF' : 'F472B6'}/white?text=${before ? 'Przed' : 'Po'}`} alt={before ? 'Przed' : 'Po'} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-2xl font-bold">{before ? 'Przed' : 'Po'}</span>
        </div>
    </div>
);


const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToBooking }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <header className="text-center mb-24 relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary mb-4">✨ Social Power Pack</h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                    <span className="text-brand-primary">+300 PLN / miesiąc</span> → Twoja praca, profesjonalnie pokazana.
                </h1>
                <p className="text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto">
                    Twoje brwi już robią wrażenie. Teraz pokażmy je światu tak, żeby przynosiły więcej klientek — bez chaosu, stresu i wiecznego myślenia “co dziś wrzucić”.
                </p>
            </header>
            <main className="space-y-24">
                <section className="text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase text-brand-primary tracking-widest mb-4">🎯 Po co ten pakiet?</h2>
                    <p className="text-2xl sm:text-3xl font-bold leading-tight">
                        Masz solidną bazę klientek. Znasz swój fach. Ale social media to osobny etat. Dlatego stworzyliśmy prosty dodatek, który sprawia, że Twoja praca sama przyciąga uwagę i polecenia. <span className="text-brand-muted">Bez obietnic wirali — po prostu konsekwentny, profesjonalny content, który działa.</span>
                    </p>
                </section>
                <section>
                    <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-12">💄 Co otrzymujesz co miesiąc</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className={`relative p-6 rounded-2xl border ${item.color} transform transition-transform duration-300 hover:scale-105 hover:!rotate-0 ${item.rotation} bg-brand-surface/50 backdrop-blur-sm`}>
                                    <PinIcon className="w-8 h-8 text-brand-muted absolute -top-4 -left-2 -rotate-12" />
                                    <Icon className={`w-10 h-10 mb-4 ${item.color.split(' ')[2]}`} />
                                    <h3 className="text-xl font-bold mb-2 text-brand-light">{item.title}</h3>
                                    <p className="text-brand-muted">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>

                 <section className="max-w-5xl mx-auto text-center">
                    <h2 className="text-sm font-bold uppercase text-brand-primary tracking-widest mb-4 flex items-center justify-center gap-2">
                        <SparklesIcon className="w-5 h-5" />
                        Wartość i Dowód
                    </h2>
                    <p className="text-2xl sm:text-3xl font-bold leading-tight mb-4">Buduj markę na fundamencie, który już masz.</p>
                    <p className="text-lg text-brand-muted max-w-3xl mx-auto mb-12">Już gwarantujemy Ci 10 klientek miesięcznie. Ten pakiet zamienia je w żywą reklamę i magnes na kolejne.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ImagePlaceholder before />
                        <ImagePlaceholder before={false} />
                        <ImagePlaceholder before />
                        <ImagePlaceholder before={false} />
                    </div>
                </section>
                
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-8">💰 Wartość Pakietu</h2>
                    <div className="bg-brand-surface/50 border border-brand-primary/20 rounded-xl overflow-hidden backdrop-blur-sm">
                        <table className="w-full text-left">
                            <thead className="bg-brand-primary/10">
                                <tr>
                                    <th className="p-4 font-semibold">Element</th>
                                    <th className="p-4 font-semibold text-right">Wartość</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-primary/10">
                                <tr><td className="p-4">4x Reels & Karuzele</td><td className="p-4 text-right">600 PLN</td></tr>
                                <tr><td className="p-4">1x Post Polecający</td><td className="p-4 text-right">250 PLN</td></tr>
                                <tr><td className="p-4">3x Szablony Opinii</td><td className="p-4 text-right">200 PLN</td></tr>
                                <tr><td className="p-4">Kalendarz Treści</td><td className="p-4 text-right">300 PLN</td></tr>
                                <tr><td className="p-4">Raport Wyników</td><td className="p-4 text-right">150 PLN</td></tr>
                            </tbody>
                            <tfoot className="bg-brand-primary/10 font-bold">
                                <tr>
                                    <td className="p-4">Łączna wartość: ≈ 1 500 PLN/mies.</td>
                                    <td className="p-4 text-right text-brand-primary">Ty płacisz tylko 300 PLN</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-brand-muted">Jedna nowa klientka zwraca koszt — reszta to czysty bonus.</p>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-3 space-y-16">
                         <section className="bg-brand-surface/50 border border-brand-primary/20 p-8 rounded-2xl shadow-glow-primary">
                            <h2 className="text-center text-sm font-bold uppercase text-brand-primary tracking-widest mb-4">💬 Realna gwarancja</h2>
                            <div className="flex items-center justify-center gap-4">
                                <ShieldCheckIcon className="w-12 h-12 text-brand-primary flex-shrink-0" />
                                <p className="text-lg font-semibold text-center">Nie obiecujemy cudów. Obiecujemy, że Twoje social media będą wyglądać profesjonalnie, spójnie i autentycznie. A jeśli po miesiącu uznasz, że to nie wnosi wartości — możesz po prostu zrezygnować. <span className="text-brand-primary">Bez stresu.</span></p>
                            </div>
                        </section>
                        <section className="text-center bg-brand-surface/50 p-8 rounded-2xl border border-brand-primary/20">
                            <h2 className="text-3xl font-bold mb-4">🚀 Gotowa, żeby Twoja marka wyglądała tak dobrze, jak Twoje efekty?</h2>
                            <p className="text-brand-muted mb-6">+300 PLN / miesiąc. Bez umów. Bez ryzyka.</p>
                            <p className="text-brand-muted mb-8 max-w-md mx-auto">Po prostu – profesjonalna obecność, która pracuje na Twoją reputację.</p>
                            <button
                                onClick={onNavigateToBooking}
                                className="inline-block w-full max-w-sm bg-brand-primary text-brand-bg font-bold py-4 px-6 rounded-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-brand-primary/30 text-lg"
                            >
                                💋 Tak, chcę dodać Social Power Pack
                            </button>
                        </section>
                    </div>
                    <section className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItemComponent key={index} item={faq} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <footer className="text-center mt-24 pt-8 border-t border-brand-primary/10">
                <p className="font-bold text-lg">BeautiFlow Partner</p>
                <p className="text-brand-muted">&copy; {new Date().getFullYear() + 1}. Wszelkie prawa zastrzeżone.</p>
                <p className="text-brand-muted text-sm mt-2">Warszawa | hello@beautiflow.pl | IG: @beautiflowpartner</p>
            </footer>
        </div>
    );
};

export default LandingPage;