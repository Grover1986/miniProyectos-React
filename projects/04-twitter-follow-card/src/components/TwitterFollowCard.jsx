import { useState } from 'react';
import handles from './TwitterFollowCard.module.css'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

   // OJO: el Estado se inicializa una sóla vez
   const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // aqui usamos una prop para inicializar el estado

   const buttonClassName = isFollowing ? `${handles.button} ${handles.button_active}` : handles.button

   const text = isFollowing ? 'Siguiendo' : 'Seguir'

   // este console sirve para ver como se vuelve a renderizar este componente hijo así haya varios de ellos y si solo hay un cambio de estado en uno de ellos
   console.log('[TwitterFollowCard] render name: ', userName)

   const handleClic = () => {
      setIsFollowing(!isFollowing)
   }

   return (
      <article className={handles.article}>
         <header className={handles.header}>
            <img className={handles.image} src={`https://unavatar.io/github/${userName}`} alt="foto card" />
            <div className={handles.nameContent}>
               <strong className={handles.name}>{children}</strong>
               <span className={handles.user}>@{userName}</span>
            </div>
         </header>
         <aside className={handles.aside}>
            <button className={buttonClassName} onClick={handleClic}>
               {text}
            </button>
         </aside>
      </article>
   )
}