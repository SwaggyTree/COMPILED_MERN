import{ Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <header>
            <div className="container">
                <Link to ="/">
                    <h1 className='logo-link'><img src="images/star-logo.png" class="star-logo" alt="Animo Forum Logo"/>Animo Forum</h1>
                </Link>
            </div>
        </header>
    )
}

export default NavBar;