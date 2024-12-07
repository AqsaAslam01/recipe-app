import chefLogo from './images/chef-logo.png'

export default function Header() {
    return (
        <header className="header">
            <img className="chef-logo" src={chefLogo} alt='chef logo' />
            <h1 className='heading'>Chef Claude</h1>
        </header>
    )
}