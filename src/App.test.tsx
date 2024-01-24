import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Stopwatch Application', () => {
    test('starts the stopwatch', async () => {
        render(<App />);
        fireEvent.click(screen.getByText('Start'));
        await new Promise(r => setTimeout(r, 1000));
        expect(screen.getByTestId('stopwatch-time')).not.toHaveTextContent('00:00.00');
    });

    test('stops the stopwatch', async () => {
        render(<App />);
        fireEvent.click(screen.getByText('Start'));
        await new Promise(r => setTimeout(r, 1000));
        fireEvent.click(screen.getByText('Stop'));
        const timeWhenStopped = screen.getByTestId('stopwatch-time').textContent;
        expect(timeWhenStopped).not.toEqual('00:00.00');
    });

    test('resets the stopwatch', () => {
        render(<App />);
        fireEvent.click(screen.getByText('Start'));
        fireEvent.click(screen.getByText('Stop'));
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByTestId('stopwatch-time')).toHaveTextContent('00:00.00');
    });

    test('records laps', () => {
        render(<App />);
        fireEvent.click(screen.getByText('Start'));
        fireEvent.click(screen.getByText('Lap'));
        fireEvent.click(screen.getByText('Stop'));
        expect(screen.getAllByTestId('lap-time').length).toBeGreaterThan(0);
    });
});
