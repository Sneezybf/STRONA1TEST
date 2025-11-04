import { FAQItem } from './types.ts';
import {
    VideoCameraIcon,
    MegaphoneIcon,
    ChatBubbleLeftRightIcon,
    CalendarDaysIcon,
    ChartBarIcon,
} from './components/icons.tsx';

export const faqs: FAQItem[] = [
  {
    question: "Co jeśli już publikuję sama?",
    answer: "Świetnie — my tylko dopracujemy to, co robisz, i sprawimy, że będzie wyglądało jak u topowych salonów."
  },
  {
    question: "Ile postów zawiera pakiet?",
    answer: "4 główne treści (reelsy/karuzele) + 1 post polecający + zestaw szablonów opinii + plan publikacji."
  },
  {
    question: "Czy mogę zrezygnować w każdej chwili?",
    answer: "Tak. Wystarczy napisać przed kolejnym miesiącem."
  }
];

export const offerItems = [
    { icon: VideoCameraIcon, title: "Reelsy i Karuzele, które budują Twoją markę", description: "Z Twoich najlepszych efektów tworzymy treści, które pokazują klasę i kunszt — a przy okazji zatrzymują scroll i budzą ciekawość.", color: "bg-pink-500/10 border-pink-500/30 text-pink-400", rotation: "rotate-1" },
    { icon: MegaphoneIcon, title: "Post Polecający (Referral Post)", description: "Delikatny, zaprojektowany z wyczuciem post, który zachęca Twoje klientki, by polecały Cię dalej. Bez nachalnych akcji.", color: "bg-purple-500/10 border-purple-500/30 text-purple-400", rotation: "-rotate-1" },
    { icon: ChatBubbleLeftRightIcon, title: "Szablony Opinii", description: "Co miesiąc dostajesz kilka nowych formatów, w których możesz pokazywać prawdziwe recenzje. Autentyczne opinie = prawdziwe zaufanie.", color: "bg-blue-500/10 border-blue-500/30 text-blue-400", rotation: "rotate-2" },
    { icon: CalendarDaysIcon, title: "Kalendarz Treści (4 tygodnie)", description: "Gotowy plan publikacji z tematami, które łączą Twoją codzienną pracę z tym, co faktycznie angażuje odbiorców.", color: "bg-green-500/10 border-green-500/30 text-green-400", rotation: "-rotate-2" },
    { icon: ChartBarIcon, title: "Raport Miesięczny", description: "Prosty raport: zasięgi, udostępnienia, wzmianki, komentarze. Żebyś widziała, jak rośnie Twoja widoczność i rozpoznawalność.", color: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400", rotation: "rotate-1" },
];