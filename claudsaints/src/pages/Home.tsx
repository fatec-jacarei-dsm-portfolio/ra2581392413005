/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Projects } from "../components"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home(){
    const time = new Date()

    return(
        <>  
            <div className="header">
                <h3>
                    codename: Claudsaints | social-media:
                </h3>
                    <FaLinkedin size={32} color="#1E94CB"/>
                    <FaGithub  size={32}  color="#1E94CB"/>
            </div>
            <h1 className="big-title">CLAUDIO DOS SANTOS </h1>
            <div className="border section">
                <img className="character" src="./teste_profile.png"/>
                <div>
                    <h2>Sobre</h2>
                    <p> Olá meu nome é Cladio Dos Santos Siqueira junior. Sou um desenvolvedor de software</p>
                </div>
            </div>
            <h4>------ / {time.getHours() + ":" + time.getMinutes() + ":" + time.getMilliseconds()} ∷ BRASIL ∷ ©2025</h4>
            <Projects/>
        </>
    )
}