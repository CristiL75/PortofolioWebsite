import styles from './HeroStyles.module.css'	
import heroImg from '../../assets/hero.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {

    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? LinkedinLight : LinkedinDark;

  return <section id = "hero" className = {styles.container}>
    <div className = {styles.colorModeContainer}>
        <img className = {styles.hero} src = {heroImg} alt = "Profile picture of Cristian-Simion"/>

        <img className = {styles.ColorMode} src = {themeIcon} alt = "Color mode icon" onClick = {toggleTheme}/>
    </div>
  <div className = {styles.info}>
        <h1>
        Latcu
        <br/>
        Cristian-Simion

        </h1>
        <h2>Student</h2>
        <span>
            <a href = "https://www.linkedin.com/in/latcu-cristian-simion-578802172/" target= "_blank">
                <img src = {linkedinIcon} alt = "LinkedIn Icon"/>
            </a>
            <a href = "https://github.com/CristiL75" target= "_blank">
                <img src = {githubIcon} alt = "Github Icon"/>
            </a>
        </span>
        <p className = {styles.description}>
        I'm a third-year Computer Science student at Politehnica University of Timișoara,
        passionate about software development and always eager to learn. I enjoy solving problems,
        building efficient solutions, and exploring new technologies. 
        Let's create something amazing!

        </p>
        <a href={CV} download>
            <button className = "hover" >
                Resume

            </button>
        </a>


  </div>
  </section>
  
}

export default Hero