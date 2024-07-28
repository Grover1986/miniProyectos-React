/* Juego de tres en raya Tic Tac Toe (michi) */

// objeto Turnos
const TURNS = {
   X: 'x',
   O: 'o'
}

// variable tablero y su creación de índices
const board = Array(9).fill(null)

function App() {

   return (
      <main className='board'>
         <h1>Tic Tac Toe</h1>
         <section className='game'>
            {
               // llenamos nuestro tablero colocando como valor sus índices
               board.map((_, index) => {
                  return (
                     <div key={index}>
                        <span>
                           {index}
                        </span>
                     </div>
                  )
               })
            }
         </section>
      </main>
   )
}

export default App
