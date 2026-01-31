import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

/**
 * Calendrier interactif scolaire
 * @param {Array} events - [{date: '2025-02-15', title, type, important}]
 */
const InteractiveCalendar = ({ events = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    const getMonthData = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startPadding = firstDay.getDay();
        const daysInMonth = lastDay.getDate();

        const dates = [];

        // Jours du mois précédent
        const prevMonth = new Date(year, month, 0);
        for (let i = startPadding - 1; i >= 0; i--) {
            dates.push({
                date: prevMonth.getDate() - i,
                isCurrentMonth: false,
                fullDate: new Date(year, month - 1, prevMonth.getDate() - i)
            });
        }

        // Jours du mois actuel
        for (let i = 1; i <= daysInMonth; i++) {
            dates.push({
                date: i,
                isCurrentMonth: true,
                fullDate: new Date(year, month, i)
            });
        }

        // Jours du mois suivant
        const remainingDays = 42 - dates.length;
        for (let i = 1; i <= remainingDays; i++) {
            dates.push({
                date: i,
                isCurrentMonth: false,
                fullDate: new Date(year, month + 1, i)
            });
        }

        return dates;
    };

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    };

    const getEventsForDate = (fullDate) => {
        const dateStr = fullDate.toISOString().split('T')[0];
        return events.filter(e => e.date === dateStr);
    };

    const isToday = (fullDate) => {
        const today = new Date();
        return fullDate.toDateString() === today.toDateString();
    };

    const eventTypeColors = {
        vacances: 'bg-green-500',
        examen: 'bg-red-500',
        evenement: 'bg-gold',
        inscription: 'bg-heliotrope',
        default: 'bg-gray-400'
    };

    const monthData = getMonthData();
    const selectedEvents = selectedDate ? getEventsForDate(selectedDate) : [];

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-violine to-heliotrope p-4 text-white">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigateMonth(-1)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="text-center">
                        <h3 className="font-serif text-xl font-bold">
                            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h3>
                    </div>

                    <button
                        onClick={() => navigateMonth(1)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Jours de la semaine */}
            <div className="grid grid-cols-7 bg-cream border-b border-gray-200">
                {days.map((day) => (
                    <div key={day} className="py-3 text-center text-xs font-bold text-violine uppercase">
                        {day}
                    </div>
                ))}
            </div>

            {/* Grille du calendrier */}
            <div className="grid grid-cols-7">
                {monthData.map((day, index) => {
                    const dayEvents = getEventsForDate(day.fullDate);
                    const hasEvents = dayEvents.length > 0;
                    const isSelected = selectedDate?.toDateString() === day.fullDate.toDateString();

                    return (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedDate(day.fullDate)}
                            className={`
                                relative p-2 min-h-[60px] border-b border-r border-gray-100 
                                transition-colors text-sm
                                ${!day.isCurrentMonth ? 'text-gray-300 bg-gray-50' : 'text-gray-700'}
                                ${isToday(day.fullDate) ? 'bg-gold/10' : ''}
                                ${isSelected ? 'bg-heliotrope/20 ring-2 ring-heliotrope' : 'hover:bg-cream'}
                            `}
                        >
                            <span className={`
                                inline-flex items-center justify-center w-7 h-7 rounded-full
                                ${isToday(day.fullDate) ? 'bg-gold text-violine-dark font-bold' : ''}
                            `}>
                                {day.date}
                            </span>

                            {/* Indicateurs d'événements */}
                            {hasEvents && (
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                                    {dayEvents.slice(0, 3).map((event, i) => (
                                        <div
                                            key={i}
                                            className={`w-1.5 h-1.5 rounded-full ${eventTypeColors[event.type] || eventTypeColors.default}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Détails des événements sélectionnés */}
            {selectedDate && (
                <div className="border-t border-gray-200 p-4 bg-cream">
                    <h4 className="font-bold text-violine mb-3 flex items-center gap-2">
                        <CalendarIcon size={16} className="text-heliotrope" />
                        {selectedDate.getDate()} {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                    </h4>

                    {selectedEvents.length > 0 ? (
                        <div className="space-y-2">
                            {selectedEvents.map((event, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3 p-3 rounded-lg bg-white border-l-4 ${event.important ? 'border-gold' : 'border-heliotrope'
                                        }`}
                                >
                                    <div className={`w-3 h-3 rounded-full ${eventTypeColors[event.type] || eventTypeColors.default}`} />
                                    <div>
                                        <p className="font-medium text-violine">{event.title}</p>
                                        {event.description && (
                                            <p className="text-sm text-gray-500">{event.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm italic">Aucun événement prévu ce jour.</p>
                    )}
                </div>
            )}

            {/* Légende */}
            <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span>Vacances</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span>Examens</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gold" />
                        <span>Événements</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-heliotrope" />
                        <span>Inscriptions</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCalendar;
