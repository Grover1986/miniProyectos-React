import { useState } from 'react'

// objeto Turnos
const TURNS = {
   X: 'x',
   O: 'o'
}

// Como haremos un tablero para jugar tres en raya (michi), tenemos que componetizar y ¿Qué es lo q compone un Tablero?, pues un Cuadrado q va a ser la posición
// donde se va a poder jugar cada uno de los movimientos. Así q creamos nuestro componente Square q necesitará un children, una actualización y un índice
const Square = ({ children, isSelected, updateBoard, index }) => {
   const className = `square ${isSelected ? 'is-selected' : ''}`

   const handleClick = () => {
      updateBoard(index)
   }

   return (
      <div onClick={handleClick} className={className}>
         {children}
      </div>
   )
}

function App() {
   /* Vamos a usar un estado para guardar cuando el usuario hace click en cada posición, y no sólo existen estados de true o false, sino tmb más complejos; en este caso 
   cuando demos click a cada Square (cuadrado) vamos a tener q actualizar el tablero para saber si se ha puesto una X o no */
   const [board, setBoard] = useState(Array(9).fill(null))

   // estado con los turnos
   const [turn, setTurn] = useState(TURNS.X)

   // esta función cambia al nuevo turno
   const updateBoard = (index) => {
      //1️⃣ no actualizamos esta posición si ya tiene algo
      if(board[index]) return
      // aqui hacemos una copia para no modificar el original
      //2️⃣ actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      /**👇esto está mal❌ xq no tenemos q mutar nunca las PROPS ni el ESTADO, tenemos q tratarlos como si fueran inmutables, quiere decir q no tenemos q modificar al Array original 
       * Sino crear un nuevo Array (copia), y eso se hace con un SPREAD OPERATOR, como arriba👆
       * Si modificamos el array original podemos tener problemas de renderizado, x eso en un state q se use Array u Object siempre hay q crear copias **/
      // board[index] = turn
      // setBoard(board)
      /*********************/
      //3️⃣ cambiar el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
   }

   return (
      <main className='board'>
         <h1>Tic Tac Toe</h1>
         <section className='game'>
            {
               // llenamos nuestro tablero colocando como valor sus índices
               board.map((_, index) => {
                  return (
                     <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}  // esta función de aqui {updateBoard} se lo estamos pasando a Square desde el componente padre App
                     >
                        {board[index]}
                     </Square>
                  )
               })
            }
         </section>

         {/* Ahora, necesitamos saber visualmente cual es el turno, así q eso lo hacemos aquí: */}
         <section className='turn'>
            <Square isSelected={turn === TURNS.X}>
               {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
               {TURNS.O}
            </Square>
         </section>
      </main>
   )
}

export default App
