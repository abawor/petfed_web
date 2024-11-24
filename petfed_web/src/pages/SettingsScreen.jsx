import React, { useContext, useState } from 'react';
import Toggle from 'react-toggle'
import 'react-toggle/style.css';


export default function SettingsScreen() {
    const [notifications, setNotificiations] = useState(true)

    return (
        <div className='text-2xl flex items-center m-10'>
            <p className='mr-2'>Global notifications</p>
            <Toggle
                className=""
                checked={notifications}
                onChange={() => setNotificiations(!notifications)}
            />
        </div>
    )
}
