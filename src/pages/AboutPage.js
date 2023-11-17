import LoadData from "../components/LoadData.js"
import LogoSlider from "../components/LogoSlider.js"
import RevealSections from "../components/RevealSections.js"

class ArchiveProductPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new LogoSlider()
		new RevealSections(".header, .section-logoslider", true)
		// new LoadData()
	}
}

new ArchiveProductPage()
