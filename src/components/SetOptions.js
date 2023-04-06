import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetOptions = () => {

    const [newTimer, setNewTimer] = useState({
        work: 30,
        short: 10,
        long: 15,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        let {name, value} = input.target
        
        if (value === '') value = 0
        
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default: 
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetOptions