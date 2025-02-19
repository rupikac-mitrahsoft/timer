import React from "react";
import { useState } from "react";
function Hour() {
    const [hour, setHour] = useState(0);
    const [isBelow10, setIsBelow10] = useState(true);
    const handleIncrement = () => {
        if (hour < 23) {
            setHour(prevHour => {
                const newHour = prevHour + 1;
                if (newHour === 24) {
                    setIsBelow10(true);
                }
                if (newHour >= 10) {
                    setIsBelow10(false);
                }
                return newHour;
            });
        } else {
            setHour(0);
            setIsBelow10(true);
        }
    };

    const handleDecrement = () => {
        setHour(prevHour => {
            const newHour = prevHour - 1;
            if (newHour < 0) return 24;
            return newHour;
        });
        if (hour <= 9) {
            setIsBelow10(true);
        } else {
            setIsBelow10(false);
        }
    }
    return (
        <>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
            </div>
            <div>
                {isBelow10 ? (hour < 10 ? `0${hour}` : hour) : hour}
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Hour