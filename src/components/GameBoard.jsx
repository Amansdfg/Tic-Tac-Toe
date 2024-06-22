export default function GameBoard({gameBoard,onSelect}){
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button  onClick={()=>onSelect(rowIndex,colIndex)} disabled={playerSymbol!=null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))} 
                    </ol>
                </li>
            ))}
        </ol>
    )
}