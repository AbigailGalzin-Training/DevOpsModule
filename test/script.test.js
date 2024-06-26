/* globals describe, expect, beforeEach, test */ 
{ describe, beforeEach, test, expect } require('jest');
const { setCounter } = require('../src/script');

describe('Counter test', () => {
    beforeEach(() => {        
        document.body.innerHTML = `
            <div class="container">
                <p id="count">0</p>
            </div>
        `;
    });

    test('increase the counter', () => {
        setCounter(1);
        const countDisplay = document.getElementById('count');
        expect(countDisplay.textContent).toBe('1');
    });
    
    test('reset the counter', () => {
        setCounter(0);
        const countDisplay = document.getElementById('count');
        expect(countDisplay.textContent).toBe('0');
    });

});
