export default function Header(props) {
    const { handleToggleFunction } = props

    return (
        <header>
            <button className="open-nav-button" onClick={handleToggleFunction}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="text-gradient">Pokédex</h1>
        </header>
    )
}