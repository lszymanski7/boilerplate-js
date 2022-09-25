import { badge } from '../data/constants'
import logo from '../assets/images/logos/javascript.svg'
import waves from '../assets/images/shapes/waves.svg'

const render = () => {
    document.getElementById('root').innerHTML = `
        <div class="flexbox-fullscreen">
            <header>
                <img
                    alt="JavaScript Waves"
                    src="${waves}"
                />
            </header>
            <div class="home-container">
                <img
                    alt="JavaScript Logo"
                    class="home-container__logo bounce"
                    src="${logo}"
                />
                <h1 class="home-container__title">JavaScript Boilerplate</h1>
                <div class="home-container__badges">
                    <a href="https://github.com/lszymanski7/boilerplate-js">
                        <img
                            alt="GitHub Badge"
                            src="${badge.github}"
                        />
                    </a>
                    <img
                        alt="Version Badge"
                        src="${badge.version}"
                    />
                    <img
                        alt="Size Badge"
                        src="${badge.size}"
                    />
                    <a href="https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md">
                        <img
                            alt="License Badge"
                            src="${badge.license}"
                        />
                    </a>
                    <img
                        alt="Forks Badge"
                        src="${badge.forks}"
                    />
                    <img
                        alt="Stars Badge"
                        src="${badge.stars}"
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
