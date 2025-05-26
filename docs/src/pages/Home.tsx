/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Projects } from "../components"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../assets/teste_profile.png"


export default function Home(){
    const time = new Date()

    return(
        <>  
            <div className="header">
                <h3>
                    codename: Claudsaints | social-media:
                </h3>
                    <a target="_blank" href="https://www.linkedin.com/in/claudio-siqueira-dev/">
                        <FaLinkedin  size={32} color="#1E94CB"/>
                    </a>
                    <a target="_blank" href="https://github.com/claudsaints">
                    <FaGithub  size={32}  color="#1E94CB"/>
                    </a>
            </div>
            <h1 className="big-title">CLAUDIO DOS SANTOS </h1>
            <div className="border section">
                <img className="character" src={profile}/>
                <div>
                    <h2>Sobre</h2>
                    <p> Olá meu nome é Cladio Dos Santos Siqueira Junior. Sou um desenvolvedor de software</p>
                </div>
            </div>
            <h4>------ / {time.getHours() + ":" + time.getMinutes() + ":" + time.getMilliseconds()} ∷ BRASIL ∷ ©2025</h4>
            <Projects/>
        </>
    )
}