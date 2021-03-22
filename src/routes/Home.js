import React, { useState } from "react"

const Home = () => {
	const [cuweet, setCuweet] = useState("")
	const onSubmit = event => {
		event.preventDefault()
	}

	const onChange = event => {
		const {
			target: { value },
		} = event
		setCuweet(value)
	}

	return (
		<div>
			<form action="">
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
