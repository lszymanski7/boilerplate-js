import logo from '../utils/constants'

const render = () => {
    document.getElementById('root').innerHTML = `
        <div class="container">
            <img 
                class="img-logo" 
                src="${logo.size_256x256}" 
                alt="JavaScript Logo" 
            />
            <h1 class="text-white">JavaScript Boilerplate</h1>
        </div>
    `
}

export { render as default }
