import React from 'react';
import Title from '../Boards/Title';
import './PracticeSkills.scss'
import AlgorithmIcon from '../../assets/icons/Algorithm.svg';
import DataStructureIcon from '../../assets/icons/DataStructure.svg';
import MathematicsIcon from '../../assets/icons/Mathematics.svg';
import CIcon from '../../assets/icons/C.svg';
import CppIcon from '../../assets/icons/C++.svg';
import JavaIcon from '../../assets/icons/Java.svg';
import PythonIcon from '../../assets/icons/Python.svg';
import RubyIcon from '../../assets/icons/Ruby.svg';
import LinuxShellIcon from '../../assets/icons/LinuxShell.svg';
import FunctionalProgramminIcon from '../../assets/icons/FunctionalProgramming.svg';
import SQLIcon from '../../assets/icons/SQL.svg';
import AIIcon from '../../assets/icons/AI.svg';
import DataBaseIcon from '../../assets/icons/DataBase.svg';
import RegexIcon from '../../assets/icons/regex.svg';



function PracticeSkills () {
    return(
        <React.Fragment>
            <Title title="Skills Available For Practice"/>
            <div className="skills">
                <div className="skill">
                    <div className="skill_icon">
                    <img src={AlgorithmIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Algorithms</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                    <img src={DataStructureIcon} alt=""/>
                    </div>
                    <div className="skill_title">
                        <h3>Data Structures</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                    <img src={MathematicsIcon} alt=""/>
                    </div>
                    <div className="skill_title">
                        <h3>Mathematics</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={CIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>C</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={CppIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>C++</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={JavaIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Java</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={PythonIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Python</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={RubyIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Ruby</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={LinuxShellIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Linux Shell</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={FunctionalProgramminIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Functional Programming</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={AIIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Artificial Intelligence</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={SQLIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>SQL</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={DataBaseIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Database</h3>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill_icon">
                        <img src={RegexIcon} alt="" />
                    </div>
                    <div className="skill_title">
                        <h3>Regex</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PracticeSkills