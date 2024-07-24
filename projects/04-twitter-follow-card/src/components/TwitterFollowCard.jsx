import handles from './TwitterFollowCard.module.css'

export function TwitterFollowCard() {

   return (
      <article className={handles.article}>
         <header className={handles.header}>
            <img className={handles.image} src="grovercito.jpg" alt="foto card" />
            <div className={handles.nameContent}>
               <strong className={handles.name}>Grover Cristobal</strong>
               <span className={handles.user}>@ElvisCristoba10</span>
            </div>
         </header>
         <aside>
            <button className={handles.button}>Seguir</button>
         </aside>
      </article>
   )
}