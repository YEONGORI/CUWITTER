import { dbService } from "fBase"
import React, { useState, useEffect } from "react"

const Home = () => {
	const [cuweet, setCuweet] = useState("")
	const [cuweets, setCuweets] = useState([])
	const getCuweets = async () => {
		const dbCuweets = await dbService.collection("cuweets").get()
		dbCuweets.forEach(document => {
			const cuweetObject = {
				...document.data(),
				id: document.id,
			}
			setCuweets(prev => [cuweetObject, ...prev])
		})
	}
	useEffect(() => {
		getCuweets()
	}, [])
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
	console.log(cuweets)

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
			<div>
				{cuweets.map(cuweet => (
					<div key={cuweet.id}>
						<h4>{cuweet.cuweet}</h4>
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
