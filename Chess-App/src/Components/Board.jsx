import { useEffect, useState } from "react"
import ChessPieces from "./Chess-Piece"
import "../Css/Board.css"

function ChessBoard ({ username }) {
    
    // Arrays for the files and ranks in chess
    
    const rows = [8,7,6,5,4,3,2,1]

    const columns =["a","b","c","d","e","f","g","h"]

    const [pieces, setPieces] =useState({}) // initial state is an empty object 


    // for positioning the the pieces in the board 

    useEffect(()=>{

        // an empty object to store the pieces

        const initialPieces = {}
        const backRow=["rook","knight","bishop","queen","king","bishop", "knight","rook"]  // An array to organise the 8th and 1st ranks


        // create a loop to place blue pieces in their required tiles  

        columns.forEach((col,i) => {

            initialPieces[`${col}8`] = `blue-${backRow[i]}`
            initialPieces[`${col}7`] = `blue-pawn`


        })
        
            // create a loop to place white pieces in their required tiles  

        columns.forEach((col,i) => {

            initialPieces[`${col}1`] = `white-${backRow[i]}`
            initialPieces[`${col}2`] = `white-pawn`


        })     
        
        setPieces(initialPieces)

    },[])

    // function to render the pieces on the board

    const renderpieces = ()=>{

    

    let board = []

    // Loop to generate the tiles
    
    for (let i=0; i<rows.length; i++){
        for(let j=0; j<columns.length; j++){

            
            const tilecolors = (i+j)%2
            const position = `${columns[j]}${rows[i]}`
            
            // store tileclass variable as undifined to allow the tiles for it to change color with specified validation 

            let tileclass;

            if(tilecolors === 0){

                tileclass = "white-color" 
            }
            else{

                tileclass = "blue-color"  
            }

            // Add Tiles to the board 

            board.push(

                <div

                key={position}
                className={`tile ${tileclass}`}

                >
                    <ChessPieces piece={pieces[position]} />                    

                <div className="coordinates">[{position}]</div>

                </div>

            )

        }
    }

        return board
}
        return (

            <div className="chessboard-container" style={{ display: "flex" }}>
                <div className="welcome-message" style={{ marginRight: "20px", fontSize: "18px", fontWeight: "bold", alignSelf: "flex-start" }}>
                    Welcome, {username}!
                </div>
                <div className="chessboard">
                    {renderpieces()}
                </div>
            </div>
        )



}

export default ChessBoard
