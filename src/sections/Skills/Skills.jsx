import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return <section id = 'skills' className = {styles.container}>
   <h1 className = "sectionTitle">Skills and Technologies That I Have Used</h1>
   <div className = {styles.skillList}>
        <SkillList src ={checkMarkIcon} skill = 'HTML'/>
        <SkillList src ={checkMarkIcon} skill = 'Java'/>
        <SkillList src ={checkMarkIcon} skill = 'C/C++'/>
        <SkillList src ={checkMarkIcon} skill = 'React'/>
        <SkillList src ={checkMarkIcon} skill = 'Solidity'/>
        
   </div>
   <hr/>
   <div className = {styles.skillList}>
   <SkillList src ={checkMarkIcon} skill = 'Node.js'/>
        <SkillList src ={checkMarkIcon} skill = 'Express.js'/>
        <SkillList src ={checkMarkIcon} skill = 'Django'/>
        <SkillList src ={checkMarkIcon} skill = 'Socket'/>
      </div> 
        <hr/>
        <div className = {styles.skillList}>
        <SkillList src ={checkMarkIcon} skill = 'Docker'/>
        <SkillList src ={checkMarkIcon} skill = 'CI/CD (GitHub Actions, AWS Lambda)'/>
        <SkillList src ={checkMarkIcon} skill = 'MongoDB'/>
        <SkillList src ={checkMarkIcon} skill = 'Git'/>

   </div>

  </section>
}

export default Skills