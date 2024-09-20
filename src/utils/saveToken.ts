interface Token {
	access_token: string;
	refresh_token: string
}

function saveToken(token: Token) {
	localStorage.setItem('tokenData', JSON.stringify(token));
}

export default saveToken;