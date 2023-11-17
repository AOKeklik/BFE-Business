export default class MakeList {
	constructor(parent) {
		this.parent = document.querySelector(parent)
		this.doListItems()
	}

	doListItems() {
		const texts = this.parent.textContent.split(",")

		const renderLi = texts
			.map(el => {
				return `<li>${el}</li>`
			})
			.join("")

		const marker = `
            <ul>
                ${renderLi}
            </ul>
        `

		this.parent.innerHTML = ""

		this.parent.insertAdjacentHTML("afterbegin", marker)
	}
}
