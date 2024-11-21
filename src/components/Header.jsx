import back from "../assets/back.svg"
function Header(){
    return(
        <>
            <a href="https://amansdfg.github.io/aman/" className="back"><img src={back} alt="back"/>Home</a>
            <header>
                <img src="game-logo.png" alt="Game"/>
                <h1>Tic Tac Toe Game</h1>
            </header>
        </>
    )
}
export default Header;