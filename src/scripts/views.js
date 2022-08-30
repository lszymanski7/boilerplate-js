import logo from '../data/constants'

const render = () => {
    document.getElementById('root').innerHTML = `
        <div class="home-container">
            <img
                class="home-logo"
                src="${logo.size_256x256}"
                alt="JavaScript Logo"
            />
            <h1 class="home-title">JavaScript Boilerplate</h1>
        </div>
    `
}

export { render as default }
