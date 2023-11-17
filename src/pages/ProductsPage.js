import AddClassByMediaQuery from "../components/AddClassByMediaQuery.js"
import LoadData from "../components/LoadData.js"
import LogoSlider from "../components/LogoSlider.js"
import RevealSections from "../components/RevealSections.js"

class ProductsPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new RevealSections(".header, .section-logoslider", true)
		new LogoSlider()
		new RevealSections(".reveal-up", true)
		// new AddClassByMediaQuery()
		// new LoadData()
	}
}

new ProductsPage()
