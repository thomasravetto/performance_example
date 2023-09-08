const express = require('express');

const app = express();

const PORT = 3500;

function delay(durationMs) {
    const startTime = Date.now()
    while(Date.now() - startTime < durationMs) {
        // Event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send('Performance example')
})

app.get('/timer', (req, res) => {
    // Delay the response
    delay(3000)
    res.send('Wake up')
})

app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
})