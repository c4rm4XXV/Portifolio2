import style from './navbar.module.css'
import {FaLinkedinIn,FaGithub} from "react-icons/fa6";
function Navbar(){
    return(
        <div className={style.navbar}>
                <ul>
                    <li>Projetos</li>
                    <li>Tecnologias</li>
                    <li>Sobre mim</li>
                </ul>
                <ul>
                    <li><a href="https://www.linkedin.com/in/miguel-c-3659a5123/" target='_black'><FaLinkedinIn size={30}/></a></li>
                    <li><a href="https://github.com/c4rm4XXV" target='_black'><FaGithub size={30}/></a></li>
                </ul>
        </div>
    )
}

export default Navbar