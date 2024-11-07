import React, { createContext, useState } from 'react';

export const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
    const [schedule, setSchedule] = useState([
        { id: '1', name: 'Daily 9am', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], time: '9:00' },
        { id: '2', name: 'Daily 1pm', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], time: '13:00' },
        { id: '3', name: 'Weekend 12pm', days: ['Saturday', 'Sunday'], time: '12:00' },
    ])

    return (
        <ScheduleContext.Provider value={{ schedule, setSchedule }}>
            {children}
        </ScheduleContext.Provider>
    )
};
