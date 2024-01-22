import React from 'react';

interface StopWatchProps {
    time: number;
    laps: number[];
}

export default function StopWatch({ time, laps }: StopWatchProps) {
    // Format time into minutes, seconds, and milliseconds
    const formatTime = (timeToFormat: number) => {
        const milliseconds = ("0" + (Math.floor(timeToFormat/10) % 1000)).slice(-2);
        const seconds = ("0" + (Math.floor(timeToFormat / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(timeToFormat / 60000) % 60)).slice(-2);
        return `${minutes}:${seconds}.${milliseconds}`;
    };

    return (
        <div>
            <h2>Stopwatch</h2>
            <div>{formatTime(time)}</div>
            <h3>Laps</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>{formatTime(lap)}</li>
                ))}
            </ul>
        </div>
    );
}