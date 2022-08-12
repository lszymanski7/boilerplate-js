import javascriptLogo from '../utils/constants'

const renderApp = () => {
	const div = document.createElement('div')

	div.className = 'container-centered'
	div.innerHTML = `
		<img 
			class="javascript-logo" 
			src="${javascriptLogo.size_256x256}" 
			alt="JavaScript Logo" 
		/>
		<h1 class="text-white">JavaScript Boilerplate</h1>
	`

	document.getElementById('root').appendChild(div)
}

export { renderApp as default }
