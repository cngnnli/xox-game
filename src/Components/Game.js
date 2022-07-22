import React, {useState, useEffect} from 'react'
import '../App.css'

const Game = () => {
    const [squares, setSquares] = useState(new Array(220).fill(''));
    const [index, setIndex] = useState(0);

  useEffect(()=>{
    
    const isComputerTurn = squares.filter(square => square !== '').length % 2 !== 0;
    if(isComputerTurn){
      let comp;
      while (squares[comp] !== '' || comp < 0 || comp > 219){
        comp = Math.floor(Math.random()*220);
      }
        let newSquares = [];
        newSquares = [...squares]
        newSquares[comp] = 'O';
        setSquares(newSquares);
    }
  },[squares, index])

const array1 = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220];
const array2 = [1, 12, 23, 34, 45, 56, 67, 78, 89, 100, 111, 122, 133, 144, 155, 166, 177, 188, 199, 210, 221];
const array3 = [9, 20, 31, 42, 53, 64, 75, 86, 97, 108, 119, 130, 141, 152, 163, 174, 185, 196, 207, 218, 229];
const array4 = [10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120, 131, 142, 153, 164, 175, 186, 197, 208, 219];
  
  function handleClick(index) { 
    setIndex(index);
    if (squares[index] === '') {
      let newSquares = [];
      newSquares = [...squares]
      newSquares[index] = 'X';
      setSquares(newSquares);
      if ((newSquares[index] === 'X') && (((newSquares[index + 10] === 'X') && (newSquares[index + 20] === 'X')) || ((newSquares[index - 10] === 'X') && (newSquares[index - 20] === 'X')) || ((newSquares[index - 10] === 'X') && (newSquares[index + 10] === 'X')))){
        if ((array1.every((item) => item !== index)) && (array2.every((item) => item !== index)) && (newSquares[index + 10] === 'X') && (newSquares[index + 20] === 'X') && document.getElementsByClassName('square')[index + 10].className.length !== 19  && document.getElementsByClassName('square')[index + 20].className.length !== 19){
          document.getElementsByClassName('square')[index].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index + 10].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index + 20].className = 'square disrightdiag';
        } else if ((array1.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index - 10] === 'X') && (newSquares[index + 10] === 'X') && document.getElementsByClassName('square')[index - 10].className.length !== 19  && document.getElementsByClassName('square')[index + 10].className.length !== 19){
          document.getElementsByClassName('square')[index].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index - 10].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index + 10].className = 'square disrightdiag';
        } else if ((array3.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index - 10] === 'X') && (newSquares[index - 20] === 'X') && document.getElementsByClassName('square')[index - 10].className.length !== 19  && document.getElementsByClassName('square')[index - 20].className.length !== 19){
          document.getElementsByClassName('square')[index].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index - 10].className = 'square disrightdiag';
          document.getElementsByClassName('square')[index - 20].className = 'square disrightdiag';
        }
      } 
      if ((newSquares[index] === 'X') && (((newSquares[index + 1] === 'X') && (newSquares[index + 2] === 'X')) || ((newSquares[index - 1] === 'X') && (newSquares[index - 2] === 'X')) || ((newSquares[index - 1] === 'X') && (newSquares[index + 1] === 'X')))){
        if ((array3.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index + 1] === 'X') && (newSquares[index + 2] === 'X') && document.getElementsByClassName('square')[index + 1].className.length !== 13  && document.getElementsByClassName('square')[index + 2].className.length !== 13){
          document.getElementsByClassName('square')[index].className = 'square dishor';
          document.getElementsByClassName('square')[index + 1].className = 'square dishor';
          document.getElementsByClassName('square')[index + 2].className = 'square dishor';
        } else if ((array1.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index - 1] === 'X') && (newSquares[index + 1] === 'X') && document.getElementsByClassName('square')[index - 1].className.length !== 13  && document.getElementsByClassName('square')[index + 1].className.length !== 13){
          document.getElementsByClassName('square')[index].className = 'square dishor';
          document.getElementsByClassName('square')[index - 1].className = 'square dishor';
          document.getElementsByClassName('square')[index + 1].className = 'square dishor';
        } else if ((array1.every((item) => item !== index)) && (array2.every((item) => item !== index)) && (index !==11) && (newSquares[index - 1] === 'X') && (newSquares[index - 2] === 'X') && document.getElementsByClassName('square')[index - 1].className.length !== 13  && document.getElementsByClassName('square')[index - 2].className.length !== 13){
          document.getElementsByClassName('square')[index].className = 'square dishor';
          document.getElementsByClassName('square')[index - 1].className = 'square dishor';
          document.getElementsByClassName('square')[index - 2].className = 'square dishor';
        }
      } 
      if ((newSquares[index] === 'X') && (((newSquares[index + 11] === 'X') && (newSquares[index + 22] === 'X')) || ((newSquares[index - 11] === 'X') && (newSquares[index - 22] === 'X')) || ((newSquares[index - 11] === 'X') && (newSquares[index + 11] === 'X')))){
        if ((newSquares[index + 11] === 'X') && (newSquares[index + 22] === 'X') && document.getElementsByClassName('square')[index + 11].className.length !== 14  && document.getElementsByClassName('square')[index + 22].className.length !== 14){
          document.getElementsByClassName('square')[index].className = 'square disvert';
          document.getElementsByClassName('square')[index + 11].className = 'square disvert';
          document.getElementsByClassName('square')[index + 22].className = 'square disvert';
        } else if ((newSquares[index - 11] === 'X') && (newSquares[index + 11] === 'X') && document.getElementsByClassName('square')[index - 11].className.length !== 14  && document.getElementsByClassName('square')[index + 11].className.length !== 14){
          document.getElementsByClassName('square')[index].className = 'square disvert';
          document.getElementsByClassName('square')[index - 11].className = 'square disvert';
          document.getElementsByClassName('square')[index + 11].className = 'square disvert';
        } else if ((newSquares[index - 11] === 'X') && (newSquares[index - 22] === 'X') && document.getElementsByClassName('square')[index - 11].className.length !== 14  && document.getElementsByClassName('square')[index - 22].className.length !== 14){
          document.getElementsByClassName('square')[index].className = 'square disvert';
          document.getElementsByClassName('square')[index - 11].className = 'square disvert';
          document.getElementsByClassName('square')[index - 22].className = 'square disvert';
        }
      } 
      if ((newSquares[index] === 'X') && (((newSquares[index + 12] === 'X') && (newSquares[index + 24] === 'X')) || ((newSquares[index - 12] === 'X') && (newSquares[index - 24] === 'X')) || ((newSquares[index - 12] === 'X') && (newSquares[index + 12] === 'X')))){
        if ((array3.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index + 12] === 'X') && (newSquares[index + 24] === 'X') && document.getElementsByClassName('square')[index + 12].className.length !== 18  && document.getElementsByClassName('square')[index + 24].className.length !== 18){
          document.getElementsByClassName('square')[index].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index + 12].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index + 24].className = 'square disleftdiag';
        } else if ((array1.every((item) => item !== index)) && (array4.every((item) => item !== index)) && (newSquares[index - 12] === 'X') && (newSquares[index + 12] === 'X') && document.getElementsByClassName('square')[index - 12].className.length !== 18  && document.getElementsByClassName('square')[index + 12].className.length !== 18){
          document.getElementsByClassName('square')[index].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index - 12].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index + 12].className = 'square disleftdiag';
        } else if ((array1.every((item) => item !== index)) && (array2.every((item) => item !== index)) && (newSquares[index - 12] === 'X') && (newSquares[index - 24] === 'X') && document.getElementsByClassName('square')[index - 12].className.length !== 18  && document.getElementsByClassName('square')[index - 24].className.length !== 18){
          document.getElementsByClassName('square')[index].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index - 12].className = 'square disleftdiag';
          document.getElementsByClassName('square')[index - 24].className = 'square disleftdiag';
        }
      } 
    }
  }

  return (
    <div className='board'>
        {
          squares.map((square, index) => {
            return <div key={index} onClick={() => handleClick(index)} className='square'>
                {square}
            </div>
            }
          )
        }

    </div>
  )
}

export default Game
