// 라우터는 Component이다

import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "routes/Auth"
import Home from "routes/Home"
import Navigation from "components/Navigation"
import Profile from "routes/Profile"

const AppRouter = ({ isLoggedIn, userObj }) => {
	// { isLoggedIn } === props.isLoggedIn 구조분해문법 props객체에 들어있는 isLoggedIn 프로퍼티의 값만을 가져오는 방법
	return (
		<Router>
			{isLoggedIn && <Navigation />}
			<Switch>
				{isLoggedIn ? (
					<>
						{/* <> : 많은 element 들을 render 할때 사용 */}
						<Route exact path="/">
							<Home userObj={userObj} />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</>
				) : (
					<>
						<Route exact path="/">
							<Auth />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	)
}

export default AppRouter
