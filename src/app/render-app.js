import javascriptLogo from '../utils/constants'

const renderApp = () => {
	const div = document.createElement('div')

	div.className = 'container'
	div.innerHTML = `
		<img 
			class="container__logo" 
			src="${javascriptLogo.size_256x256}" 
			alt="JavaScript Boilerplate" 
		/>
		<h1 class="container__title">JavaScript Boilerplate</h1>
	`

	document.getElementById('root').appendChild(div)
}

export { renderApp as default }
