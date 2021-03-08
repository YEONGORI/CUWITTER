import React, { useState, useEffect } from "react"
import AppRouter from "components/Router"
import { authService } from "fBase"

const App = () => {
	const [init, setInit] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	useEffect(() => {
		authService.onAuthStateChanged(user => {
			if (user) {
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}
			setInit(true)
		})
	}, [])
	return (
		<>
			{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "초기화중.."};
			<footer>&copy; Cuwitter {new Date().getFullYear()} Cuwitter</footer>
		</>
	)
}

export default App
