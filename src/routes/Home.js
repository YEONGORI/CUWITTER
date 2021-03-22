import { dbService } from "fBase"
import React, { useState } from "react"

const Home = () => {
	const [cuweet, setCuweet] = useState("")
	const onSubmit = async event => {
		event.preventDefault()
		await dbService.collection("cuweets").add({
			cuweet,
			createAt: Date.now(),
		})
		setCuweet("")
	}

	const onChange = event => {
		const {
			target: { value },
		} = event
		setCuweet(value)
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={cuweet}
					onChange={onChange}
					type="text"
					placeholder="What's on your mind?"
					maxLength={120}
				/>
				<input type="submit" value="Cuweet" />
			</form>
		</div>
	)
}

export default Home
