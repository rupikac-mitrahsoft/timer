import React from "react";
import { useState } from "react";
function Minute() {
    const [minute, setMinute] = useState(0);
    const [isBelow10, setIsBelow10] = useState(true);

    const handleMinuteIncrement = () => {
        if (minute < 59) {
            setMinute(prevMinute => {
                const newMinute = prevMinute + 1;
                if (newMinute == 60) {
                    setIsBelow10(true);
                }
                if (newMinute >= 10) {
                    setIsBelow10(false);
                }
                return newMinute;
            })
        } else {
            setMinute(0);
            setIsBelow10(true)
        }
    }
    const handleMinuteDecrement = () => {
        setMinute(prevMinute => {
            const newMinute = prevMinute - 1;
            if (newMinute < 0) return 59;
            return newMinute;
        });
        if (minute < 10) {
            setIsBelow10(true);
        }else{
            setIsBelow10(false);
        }
    }
    return (
        <>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleMinuteIncrement}
                >
                    Increment
                </button>
            </div>
            <div>
                {isBelow10 ? (minute < 10 ? `0${minute}` : minute) : minute}
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleMinuteDecrement}
                >
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Minute