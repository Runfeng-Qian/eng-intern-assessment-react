import React from 'react';

interface StopWatchButtonProps {
    start: () => void;
    stop: () => void;
    reset: () => void;
    lap: () => void;
}

export default function StopWatchButton({ start, stop, reset, lap }: StopWatchButtonProps) {
    return (
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={lap}>Lap</button>
        </div>
    );
}