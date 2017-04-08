// const express = require('express');

// const app = express();

// const bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({ extended: false }));
// // app.use(bodyparser.json());



// app.post('/check-coverage', (req, res) => {
//     const { lat, lng, max } = req.body;
//     console.log(`lat: ${lat}, lng: ${lng}, max: ${max}`);
//     res.json({coverage: true});
// });

// app.listen(3000);

const dosMayo = {
    lat: -12.04636282992822,
    lng: -77.04279122822436,
    // lat: -11.970402350170945,
    // lng: -77.05738037593385,
}

const doApps = {
    lat: -12.102469003405167,
    lng: -77.02207299999998,
}

const googleMapsClient = require('@google/maps').createClient({
    Promise: Promise,
    key: 'AIzaSyDyeDEjXziWUwb6po-q1vy47vsw2QjYiQI',
});

googleMapsClient.directions({
    // origin: 'Plaza 2 de mayo, lima, peru',
    // destination: 'Doapps, lima, peru
    origin: dosMayo,
    destination: doApps,
    mode: 'driving',
    language: 'es',
    departure_time: 'now',
    traffic_model: 'best_guess',
}).asPromise().then(res => {
    const { distance, duration, duration_in_traffic } = res.json.routes[0].legs[0];

    // const distance_meters = parseInt(distance.value);
    // const duration_sec = parseInt(duration.value);
    const duration_in_traffic_sec = parseInt(duration_in_traffic.value);

    // console.log(JSON.stringify(distance, null, 2))
    // console.log(JSON.stringify(duration, null, 2))
    // console.log(JSON.stringify(duration_in_traffic, null, 2))
});


