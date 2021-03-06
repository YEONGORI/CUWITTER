import { authService, firebaseInstance } from "fBase"
import React, { useState } from "react"

const Auth = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [newAccount, setNewAccount] = useState(true)
	const [error, setError] = useState("")

	const onChange = event => {
		const {
			target: { name, value },
		} = event
		if (name === "email") {
			setEmail(value)
		} else if (name === "password") {
			setPassword(value)
		}
	}

	const onSubmit = async event => {
		event.preventDefault()
		try {
			let data
			if (newAccount) {
				data = await authService.createUserWithEmailAndPassword(email, password)
			} else {
				data = await authService.signInWithEmailAndPassword(email, password)
			}
			console.log(data)
		} catch (error) {
			setError(error.message)
		}
	}

	const toggleAccount = () => {
		setNewAccount(prev => !prev)
	}

	const onSocialClick = async event => {
		const {
			target: { name },
		} = event
		let provider
		if (name === "google") {
			provider = new firebaseInstance.auth.GoogleAuthProvider()
		} else if (name === "github") {
			provider = new firebaseInstance.auth.GithubAuthProvider()
		}

		const data = await authService.signInWithPopup(provider)
		console.log(data)
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder="이메일"
					required
					value={email}
					onChange={onChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="비밀번호"
					required
					value={password}
					onChange={onChange}
				/>
				<input type="submit" value={newAccount ? "회원가입" : "로그인"} />
				{error}
			</form>
			<span onClick={toggleAccount}>{newAccount ? "로그인" : "회원가입"}</span>
			<div>
				<button onClick={onSocialClick} name="google">
					구글 아이디로 계속하기
				</button>
				<button onClick={onSocialClick} name="github">
					깃허브 아이디로 계속하기
				</button>
			</div>
		</div>
	)
}

export default Auth
