import React, { useState, useEffect } from 'react';
import StopWatch from './StopWatch';
import StopWatchButton from './StopWatchButton';

export default function App() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [laps, setLaps] = useState([]);
    const [prevLap, setPrevLap] = useState(0);

    // Start the stopwatch
    const startTimer = () => {
        setTimerOn(true);
    };

    // Stop the stopwatch
    const stopTimer = () => {
        setTimerOn(false);
    };

    // Reset the stopwatch
    const resetTimer = () => {
        setTimerOn(false);
        setTime(0);
        setLaps([]);
    };

    // Record a lap
    const lapTimer = () => {
        let curLap: number;
        if (laps.length == 0){
            setLaps([...laps, time]);
            setPrevLap(time);
        } else {
            curLap = time - prevLap;
            setLaps([...laps, curLap]);
            setPrevLap(time);
        }
    };

    // Update the time every 10ms
    useEffect(() => {
        let interval: number | null = null;

        if (timerOn) {
            interval = window.setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [timerOn]);

    return (
        <div>
            <StopWatch time={time} laps={laps} />
            <StopWatchButton start={startTimer} stop={stopTimer} reset={resetTimer} lap={lapTimer} />
        </div>
    );
}