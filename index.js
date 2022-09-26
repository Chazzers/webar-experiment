const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function setModel({location, url, position, rotation, scale}, entity) {
	// entity.setAttribute('id', 'nice')
	entity.setAttribute('gps-entity-place', location)
	entity.setAttribute('gltf-model', url)
	entity.setAttribute('position', position)
	entity.setAttribute('animation-mixer')
	entity.setAttribute('rotation', '0 180 0', rotation)
	entity.setAttribute('scale', scale)
}

// function setModel({location, url, position, rotation, scale}) {
// 	// entity.setAttribute('id', 'nice')
// 	return `
// 		<a-entity
// 			gps-entity-place="${location}"
// 			gltf-model="${url}"
// 			position="${position}"
// 			animation-mixer
// 			rotation="${rotation}"
// 			scale="${scale}"
// 		>
// 		</a-entity>
// 	`
// }

const models = [
	{
		url: './assets/magnemite/scene.gltf',
		scale: '0.1 0.1 0.1',
		info: 'Magnemite, Lv. 5, HP 10/10',
		rotation: '0 180 0',
		location: 'latitude: 52.0953694; longitude: 5.1229358',
		position: '0 30 0'
	}
]

function success(pos) {
  const crd = pos.coords;


  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
window.onload = () => {
	const scene = document.querySelector('a-scene')

	/*
		gltf-model="./assets/magnemite/scene.gltf" 
						rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: 5.122937421261158; latitude: 52.095371111740754;"  
						position="0 30 0" 
						animation-mixer
	*/ 
	
		models.forEach(model => {
			const entity = document.createElement('a-entity')
			setModel(model, entity)
			scene.appendChild(entity)
		})
}
navigator.geolocation.getCurrentPosition(success, error, options);