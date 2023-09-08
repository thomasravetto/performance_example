const express = require('express');
const cluster = require('cluster')

const app = express();

const PORT = 3500;

function delay(durationMs) {
    const startTime = Date.now()
    while(Date.now() - startTime < durationMs) {
        // Event loop is blocked
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
})

app.get('/timer', (req, res) => {
    // Delay the response
    delay(10000);
    res.send(`Wake up ${process.pid}`);
})


if (cluster.isMaster) {
    console.log('Master started');
    cluster.fork();
    cluster.fork();
} else {
    console.log('Worker started');
    app.listen(PORT, () => {
        console.log("Listening on port:", PORT)
    })
}
