import { useEffect, useState } from 'react';
import Toggle from 'react-toggle'
import 'react-toggle/style.css';


export default function SettingsScreen() {
    const [notifications, setNotificiations] = useState(true)

    useEffect(() => {
        const savedNotifications = localStorage.getItem("globalNotifications")
        setNotificiations(savedNotifications ? savedNotifications === "true" : true)
    }, [])

    useEffect(() => {
        localStorage.setItem("globalNotifications", notifications)
    }, [notifications])    

    return (
        <div className='text-xl flex items-center m-10'>
            <p className='mr-2'>Global notifications</p>
            <Toggle
                checked={notifications}
                onChange={() => setNotificiations(!notifications)}
            />
        </div>
    )
}
