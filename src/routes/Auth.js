import { authService } from "fBase"
import React, { useState } from "react"

const Auth = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [newAccount, setNewAccount] = useState(true)

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
		if (newAccount) {
			await authService.createUserWithEmailAndPassword(email, password)
		} else {
			// 로그인
		}
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
			</form>
			<div>
				<button>구글 아이디로 계속하기</button>
				<button>깃허브 아이디로 계속하기</button>
			</div>
		</div>
	)
}

export default Auth
