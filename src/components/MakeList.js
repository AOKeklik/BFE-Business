export default class MakeList {
	constructor(parent, element = undefined) {
		this.parentElement = document.querySelectorAll(parent)
		this.element = element

		this.parentElement.forEach(el => {
			this.doListItems(el)
		})
	}

	doListItems(parent) {
		const texts = parent.innerHTML.split(",")

		console.log(texts)

		let renderElement
		let marker

		
			renderElement = texts
				.map(el => {
					return `<li>${el}</li>`
				})
				.join("")

			marker = `
				<ul>
					${renderElement}
				</ul>
			`
		
		if (this.element === "address") {
			renderElement = texts
				.map(el => {
					return `<span class="color-primary text-size-m text-style-n">${el}</span>`
				})
				.join("")

			marker = renderElement
		}

		parent.innerHTML = ""

		parent.insertAdjacentHTML("afterbegin", marker)
	}
}