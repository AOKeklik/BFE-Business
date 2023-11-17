class Maps {
	constructor(lat, lng, zoom, div) {
		this.coords = [lat, lng]
		this.zoom = zoom
		this.div = div
	}
}
export default class Map {
	#map
	#maps = []
	constructor() {
		document.querySelectorAll(".acf-map").forEach(el => {
			this._loadMap(el)
		})
	}
	// load map
	_loadMap(el) {
		const markers = el.querySelectorAll(".marker-map")
		markers.forEach(x => {
			const newMap = new Maps(
				+x.getAttribute("data-lat"),
				+x.getAttribute("data-lng"),
				+x.getAttribute("data-zoom"),
				x
			)
			this.#maps.push(newMap)
		})
		console.log(L)
		//  map
		this.#map = L.map("map").setView(
			this.#maps[0]["coords"],
			this.#maps[0]["zoom"]
		)
		L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.#map)

		this.#maps.forEach(x => this._renderMarkers(x))
	}
	// render marker
	_renderMarkers(marker) {
		L.marker(marker.coords)
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					closeButton: true,
					closeOnEscapeKey: false,
					minWidth: 100,
					maxWidth: 300,
					autoClose: false,
					closeOnClick: false,
					className: "example",
				})
			)
			.setPopupContent(marker.div)
			.openPopup()
	}
}
