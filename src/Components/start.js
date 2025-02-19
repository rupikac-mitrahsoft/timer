import React, { useState, useEffect } from 'react';
import Hour from './hour';

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        let interval;
        if (isActive && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            clearInterval(interval);
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeRemaining]);

    // Start the timer
    const startTimer = () => {
        if (timeRemaining === 0) {
            const totalSeconds = hours * 3600 + minutes * 60 + seconds;
            setTimeRemaining(totalSeconds);
        }
        setIsActive(true);
    };

    // Stop the timer
    const stopTimer = () => {
        setIsActive(false);
    };

    // Reset the timer
    const resetTimer = () => {
        setIsActive(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTimeRemaining(0);
    };

    // Handle input changes for hours, minutes, and seconds
    const handleInputChange = (e, setter, type) => {
        let value = Number(e.target.value) || 0;

        if (type === 'hours') {
            if (value < 0) {
                setter(23);
            } else if (value > 23) {
                setter(0);
            } else {
                setter(value);
            }
        } else if (type === 'minutes' || type === 'seconds') {
            if (value < 0) {
                setter(59);
            } else if (value > 59) {
                setter(0);
            } else {
                setter(value);
            }
        }
    };

    // Function to handle increment and decrement logic
    const increment = (setter, type) => {
        if (type === 'hours') {
            setter((prev) => (prev + 1) % 24); // Increment and loop back to 0 after 23
        } else if (type === 'minutes' || type === 'seconds') {
            setter((prev) => (prev + 1) % 60); // Increment and loop back to 0 after 59
        }
    };

    const decrement = (setter, type) => {
        if (type === 'hours') {
            setter((prev) => (prev - 1 + 24) % 24); // Decrement and loop back to 23 after 0
        } else if (type === 'minutes' || type === 'seconds') {
            setter((prev) => (prev - 1 + 60) % 60); // Decrement and loop back to 59 after 0
        }
    };

    // Format time to always display 2 digits
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div style={{ padding: 154 }}>
            <div style={{ display: 'flex', flexDirection: 'column', rowGap: 12, width: '34rem' }} className='card'>
                <div style={{display:'flex',justifyContent:'center'}}><h2>Set Timer</h2></div>
                <div style={{ display: 'flex', padding: 23 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-outline-info" onClick={() => decrement(setHours, 'hours')}>-</button>
                        <input
                            // type="number"
                            value={hours}
                            onChange={(e) => handleInputChange(e, setHours, 'hours')}
                            min="0"
                            max="23"
                            placeholder="HH"
                            className='form-control w-25'

                        />
                        <button className="btn btn-outline-info" onClick={() => increment(setHours, 'hours')}>+</button>
                    </div>

                    <span>:</span>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-outline-info" onClick={() => decrement(setMinutes, 'minutes')}>-</button>
                        <input
                            //type="number"
                            value={minutes}
                            onChange={(e) => handleInputChange(e, setMinutes, 'minutes')}
                            min="0"
                            max="59"
                            placeholder="MM"
                            style={{ width: 24 }}
                            className='form-control w-25'
                        />
                        <button className="btn btn-outline-info" onClick={() => increment(setMinutes, 'minutes')}>+</button>

                    </div>

                    <span>:</span>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn btn-outline-info" onClick={() => decrement(setSeconds, 'seconds')}>-</button>
                        <input
                            //type="number"
                            value={seconds}
                            onChange={(e) => handleInputChange(e, setSeconds, 'seconds')}
                            min="0"
                            max="59"
                            placeholder="SS"
                            style={{ width: 24 }}
                            className='form-control w-25'
                        />
                        <button className="btn btn-outline-info" onClick={() => increment(setSeconds, 'seconds')}>+</button>
                    </div>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 12 }}>
                    <button className="btn btn-outline-info" onClick={startTimer} disabled={isActive}>Start</button>
                    <button className="btn btn-outline-info" onClick={stopTimer} disabled={!isActive}>Stop</button>
                    <button className="btn btn-outline-info" onClick={resetTimer}>Reset</button>

                </div>

            </div>

            <div>
                <h1 style={{ display: 'grid', justifyContent: 'center' }}>
                    {formatTime(Math.floor(timeRemaining / 3600))}:
                    {formatTime(Math.floor((timeRemaining % 3600) / 60))}:
                    {formatTime(timeRemaining % 60)}
                </h1>
            </div>

        </div>
    );
};

export default Timer;







