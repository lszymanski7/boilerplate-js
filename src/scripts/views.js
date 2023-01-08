/* istanbul ignore file */

import { BADGES, LOGOS, SHAPES } from '../data/constants'

// Function ➞ renders the application
const render = () => {
    // Application name
    const name = 'JavaScript Boilerplate'

    // Application HTML code
    const html = `
        <div class="flexbox-column fullscreen">
            <header class="header">
                <img
                    alt="Waves"
                    src="${SHAPES.waves}"
                />
            </header>
            <div class="flexbox-column home">
                <img
                    alt="Application Logo"
                    class="home__app-logo bounce"
                    src="${LOGOS.javascript.svg}"
                />
                <h1 class="home__app-name">${name}</h1>
                <div class="flexbox-row home__badges">
                    <a href="https://github.com/lszymanski7/boilerplate-js">
                        <img
                            alt="GitHub Badge"
                            src="${BADGES.github}"
                        />
                    </a>
                    <img
                        alt="Version Badge"
                        src="${BADGES.version}"
                    />
                    <img
                        alt="Size Badge"
                        src="${BADGES.size}"
                    />
                    <a href="https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md">
                        <img
                            alt="License Badge"
                            src="${BADGES.license}"
                        />
                    </a>
                    <img
                        alt="Forks Badge"
                        src="${BADGES.forks}"
                    />
                    <img
                        alt="Stars Badge"
                        src="${BADGES.stars}"
                    />
                </div>
            </div>
            <footer class="footer">
                <p>Created with &#x1F49B; by Łukasz Szymański</p>
            </footer>
        </div>
    `

    // Element method ➞ inserts HTML code into a specified position
    document.getElementById('root').insertAdjacentHTML('afterbegin', html)
}

export { render as default }
