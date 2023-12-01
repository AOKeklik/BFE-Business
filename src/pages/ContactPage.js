import Map from "../components/Map.js"
import RevealSections from "../components/RevealSections.js"
import AccordionSlider from "../components/AccordionSlider.js"
import MakeList from "../components/MakeList.js"

class ContactPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new RevealSections(".header", true)
		new Map()
		new AccordionSlider()
		new MakeList(".address-change", "address")
	}
}

new ContactPage()
