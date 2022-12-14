import React from "react";
import '../css/SkillDetail.css';

export function SkillDetail() {
    return(
        <div>
             <div className="skilldetail-container">
                <div className="skilldetail-canvas">
                    <div className="skilldetail-box">
                        <p className="skilldetail-title">Programming Skill</p>
                        <label htmlFor="">Front End</label>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>React</li>
                            <li>JQuery</li>
                        </ul>
                        <label htmlFor="">Back End</label>
                        <ul>
                            <li>PHP</li>
                            <li>ASP.NET</li>
                        </ul>
                        <label htmlFor="">Database</label>
                        <ul>
                            <li>MS SQL</li>
                            <li>My SQL</li>
                            <li>Crystal Report C#</li>
                            <li>Node Red API</li>
                        </ul>
                    </div>
                    <div className="skilldetail-box">
                        <p className="skilldetail-title">IT Support Skill</p>
                        <ul>
                            <li>Windows Server</li>
                            <li>Domain Controler, AD</li>
                            <li>Fix Computer, Laptop, Handheld, CCTV</li>
                            <li>Fix Problem Internet</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}