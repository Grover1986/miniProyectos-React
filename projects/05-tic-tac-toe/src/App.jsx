/* Juego de tres en raya Tic Tac Toe (michi) */

// objeto Turnos
const TURNS = {
   X: 'x',
   O: 'o'
}

// Como haremos un tablero para jugar tres en raya (michi), tenemos que componetizar y ¿Qué es lo q compone un Tablero?, pues un Cuadrado q va a ser la posición
// donde se va a poder jugar cada uno de los movimientos. Así q creamos nuestro componente Square q necesitará un children, una actualización y un índice
const Square = ({ children, updateBoard, index }) => {
   return (
      <div className='square'>
         {children}
      </div>
   )
}

function App() {
   const board = Array(9).fill(null)
   
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
                     >
                        {index}
                     </Square>
                  )
               })
            }
         </section>
      </main>
   )
}

export default App
