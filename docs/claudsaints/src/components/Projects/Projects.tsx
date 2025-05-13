import { data } from "../../data"


export default function Projects(){
    return(
        <>
            <h1>Projetos</h1>
            <div className="projects-section">
                {data.map((obj) => {
                 return <div key={obj.id} className="project"> 
                        <img src={obj.image}/>
                        <h2>{obj.title}</h2>
                        <p>{obj.description}</p>
                  </div>       
                })}

            </div>
        
        </>
    )
}