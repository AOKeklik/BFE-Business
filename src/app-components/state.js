class State {
	state = {}
	constructor(url, method, body) {
		this.url = url
		this.method = method
		this.body = body
	}
	/* public */
	async loadResults() {
		const data = await this.#fetchResults()
		this.state = this.#createStateObject(data)
	}
	wait(ms) {
		return new Promise(resolve => setTimeout(resolve, 100 * ms))
	}
	/* locals */
	#createStateObject(data) {
		return data.map(d => {
			return {
				id: d.id,
				date: d.date,
				lang: d.lang,
				link: d.link,
				slug: d.slug,
				title: d.title.rendered,
				content: d.content.rendered,
			}
		})
	}
	/* fetch */
	async #fetchResults() {
		try {
			const features = {
				method: this.method,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				...(this.body !== null && { body: JSON.stringify(body) }),
			}
			const res = await fetch(this.url, features)
			if (!res.ok) throw new Error("Error Fetch App!!")
			const data = await res.json()
			return data
		} catch (err) {
			throw err
		}
	}
}

export default State
