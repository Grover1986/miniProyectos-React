import React, { useState } from 'react';
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {

   const users = [
      {
         name: 'Grover Cristobal',
         userName: 'grover1986',
         isFollowing: false
      },
      {
         name: 'Connor Flip',
         userName: 'connor4312',
         isFollowing: false
      },
      {
         name: 'Michael Feil',
         userName: 'michaelfeil',
         isFollowing: false
      },
      {
         name: 'Dimitri Dumont',
         userName: 'dimitridumont',
         isFollowing: false
      },
   ]


   // este estado sirve para ver como se vuelve a renderizar el componente Padre cuando hay un cambio de estado en uno de sus hijos
   const [name, setName] = useState('grover1986')

   // este console sirve para ver como se vuelve a renderizar el componente hijo TwitterFollowCard así haya varios de ellos y si solo hay un cambio de estado en uno de ellos
   console.log('render name: ', name)

   return (
      <React.Fragment>
         {users.map(({ name, userName, isFollowing }) => (
            <TwitterFollowCard 
               initialIsFollowing={isFollowing} 
               userName={userName} 
               key={userName}
            >
               {name}
            </TwitterFollowCard>
         ))}

         {/* este button sirve para ver como se vuelve a renderizar los componentes hijos así haya varios de ellos y si solo hay un cambio de estado en uno de ellos */}
         {/* <button onClick={() => setName('midudev')}>Cambiar el estado</button> */}
      </React.Fragment>
   )
}