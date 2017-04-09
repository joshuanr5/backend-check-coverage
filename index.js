const local = {
    lat: -12.04636282992822,
    lng: -77.04279122822436,
    // lat: -11.970402350170945,
    // lng: -77.05738037593385,
}

const __MAXTIME__ = 1500;

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { checkCoverage } = require('./modules/checkCoverage');

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/check-coverage', (req, res) => {
    const { lat, lng } = req.body;
    const client = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
    }
    checkCoverage(local, client).then( response => {
        const { status } = response.json;
        if(status === 'ZERO_RESULTS' || status === 'NOT_FOUND') {
            res.json({coverage: false});
            return;
        }

        const { duration_in_traffic } = response.json.routes[0].legs[0];
        const duration_in_traffic_sec = duration_in_traffic.value;
        const coverage = duration_in_traffic_sec < (__MAXTIME__ + 300);
        res.json({coverage});
    })
});

app.listen(7000);






