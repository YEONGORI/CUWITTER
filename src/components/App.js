import React, { useState } from "react"
import AppRouter from "components/Router"
import fBase from "fBase"

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<>
			<AppRouter isLoggedIn={isLoggedIn} />
			<footer>&copy; Cuwitter {new Date().getFullYear()} Cuwitter</footer>
		</>
	)
}

export default App
