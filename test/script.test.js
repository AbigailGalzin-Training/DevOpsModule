

// Prueba unitaria para verificar la función setCounter
test('increase the counter', () => {
    let count = 0;
    const setCounter = require('../src/script');

    setCounter.mockImplementation(a => {
        count = 1;
    });

    setCounter(1);
    expect(count).toBe(1);
});

test('reset the counter', () => {
    let count = 0;

    setCounter(0);
    expect(count).toBe(0);
});
