import React, { useState } from "react"
import AppRouter from "components/Router"
import { authService } from "fBase"

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
	return (
		<>
			<AppRouter isLoggedIn={isLoggedIn} />
			<footer>&copy; Cuwitter {new Date().getFullYear()} Cuwitter</footer>
		</>
	)
}

export default App
