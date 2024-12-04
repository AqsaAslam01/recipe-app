import chefLogo from './images/chef-logo.png'

export default function Header() {
    return (
        <header className="header">
            <img className="chef-logo" src={chefLogo} />
            <h1 className='heading'>Chef Claude</h1>
        </header>
    )
}