const googleMapsClient = require('@google/maps').createClient({
    Promise: Promise,
    key: 'AIzaSyDyeDEjXziWUwb6po-q1vy47vsw2QjYiQI',
});

// googleMapsClient.directions({
//     origin: dosMayo,
//     destination: doApps,
//     mode: 'driving',
//     language: 'es',
//     departure_time: 'now',
//     traffic_model: 'best_guess',
// }).asPromise().then(res => {
//     const { duration_in_traffic } = res.json.routes[0].legs[0];
//     const duration_in_traffic_sec = parseInt(duration_in_traffic.value);
// });

exports.checkCoverage = checkCoverage = (local, client, maxTime) => {
    const config = {
        origin: local,
        destination: client,
        mode: 'driving',
        language: 'es',
        departure_time: 'now',
        traffic_model: 'best_guess',
    }
    return googleMapsClient.directions(config).asPromise();
}
