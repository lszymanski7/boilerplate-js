import { badge } from '../data/constants'
import logo from '../assets/images/logos/javascript.svg'
import waves from '../assets/images/shapes/waves.svg'

const render = () => {
    document.getElementById('root').innerHTML = `
        <div class="home">
            <header>
                <img
                    src="${waves}"
                    alt="Waves"
                />
            </header>
            <div class="home-container">
                <img
                    class="home-logo bounce"
                    src="${logo}"
                    alt="JavaScript Logo"
                />
                <h1 class="home-title">JavaScript Boilerplate</h1>
                <div class="home-badges">
                    <a href="https://github.com/lszymanski7/boilerplate-js">
                        <img
                            src="${badge.github}"
                            alt="GitHub Badge"
                        />
                    </a>
                    <img
                        src="${badge.version}"
                        alt="Version Badge"
                    />
                    <img
                        src="${badge.size}"
                        alt="Size Badge"
                    />
                    <a href="https://github.com/lszymanski7/boilerplate-js/blob/main/LICENSE.md">
                        <img
                            src="${badge.license}"
                            alt="License Badge"
                        />
                    </a>
                    <img
                        src="${badge.forks}"
                        alt="Forks Badge"
                    />
                    <img
                        src="${badge.stars}"
                        alt="Stars Badge"
                    />
                </div>
            </div>
            <footer class="footer">
                <p>Created with &#128155; by Łukasz Szymański</p>
            </footer>
        </div>
    `
}

export { render as default }
