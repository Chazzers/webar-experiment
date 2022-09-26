const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;
	const magnemite = document.getElementById('magnemite')
	magnemite.setAttribute('gps-entity-place', `latitude: ${crd.latitude}; longitude: ${crd.longitude}`)

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);