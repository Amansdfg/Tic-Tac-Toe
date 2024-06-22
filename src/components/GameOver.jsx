export default function GameBoard({winner, restart}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's draw</p>}
            <p>
                <button  onClick={restart}>
                    restart
                </button>
            </p>
        </div>
    )
}