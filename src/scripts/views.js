import { badges } from '../data/constants'
import logo from '../assets/images/logos/javascript.svg'
import waves from '../assets/images/shapes/waves.svg'

// Function that renders the application
const render = () => {
    document.getElementById('root').innerHTML = `
        <div class="flexbox-column fullscreen">
            <header class="header">
                <img
                    alt="JavaScript Waves"
                    src="${waves}"
                />
            </header>
            <div class="flexbox-column home-container">
                <img
                    alt="JavaScript Logo"
                    class="home-container__logo bounce"
                    src="${logo}"
                />
                <h1 class="home-container__title">JavaScript Boilerplate</h1>
                <div class="flexbox-row home-container__badges">
                    <a href="https://github.com/lszymanski7/boilerplate-js">
                        <img
                            alt="GitHub Badge"
                            src="${badges.github}"
                        />
                    </a>
                    <img
                        alt="Version Badge"
                        src="${badges.version}"
                    />
                    <img
                        alt="Size Badge"
                        src="${badges.size}"
                    />
                    <a href="https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md">
                        <img
                            alt="License Badge"
                            src="${badges.license}"
                        />
                    </a>
                    <img
                        alt="Forks Badge"
                        src="${badges.forks}"
                    />
                    <img
                        alt="Stars Badge"
                        src="${badges.stars}"
                    />
                </div>
            </div>
            <footer class="footer">
                <p>Created with &#x1F49B; by Łukasz Szymański</p>
            </footer>
        </div>
    `
}

export { render as default }
