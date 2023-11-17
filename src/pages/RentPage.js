import LoadData from "../components/LoadData.js"
import RevealSections from "../components/RevealSections.js"

class RentPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new RevealSections(".header", true)
		// new NewsSlider()
		// new LoadData()
	}
}

new RentPage()
