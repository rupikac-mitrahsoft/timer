import React from "react";
import { useState } from "react";

function Sec() {
    const [sec, setSec] = useState(0);
    const [isBelow10, setIsBelow10] = useState(true);

    const handleSecIncrement = () => {
        if (sec < 59) {
            setSec(prevSec => {
                const newSec = prevSec + 1;
                if (newSec == 60) {
                    setIsBelow10(true);
                }
                if (newSec >= 10) {
                    setIsBelow10(false);
                }
                return newSec;
            })
        } else {
            setSec(0);
            setIsBelow10(true)
        }
    }
    const handleSecDecrement = () => {
        setSec(prevSec => {
            const newSec = prevSec - 1;
            if (newSec < 0) return 60;
            return newSec;
        });
        if (sec < 10) {
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
                    onClick={handleSecIncrement}
                >
                    Increment
                </button>
            </div>
            <div>
                {isBelow10 ? (sec < 10 ? `0${sec}` : sec) : sec}
            </div>
            <div>
                <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleSecDecrement}
                >
                    Decrement
                </button>
            </div>
        </>
    )
}
export default Sec