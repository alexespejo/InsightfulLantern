import { transform } from "next/dist/build/swc";
import React, { useState } from "react";

function CircularMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <style>
        {`
        .containerMoon
        {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(45deg, #8460ed, #19040a);
        }
        
        .menuMoon
        {
            position: relative;
            width: 600px;
            height: 250px;
            background: #f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .menuItemMoon
        {
            position: absolute;
            margin-right: 200px;
            left: 0;
            margin-top: -20px;
            list-style: none;
            transform-origin: 300px;
            transition: 0.5s;
            transition-delay: calc(0.1s * var(--i));
            transform: rotate(0deg) translateX(80px);
            text-decoration: none;
        }
        
        .menuMoon.activeMoon .menuItemMoon
        {
            transform: rotate(calc(360deg / 8 * var(--i)));
        }
        
        .menuItemMoon a
        {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            background: #fff;
            border-radius: 50%;
            transform: rotate(calc(360deg / 8 * var(--i)));
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
            color: #111;
            transition: 0.5s;
        }
        
        .menuItemMoon a:hover
        {
            color: #ff1252;
        }
        
        .toggleMoon
        {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
            font-size: 2em;
            transition: transform 1.25s;
        }
        
        .menuMoon.activeMoon .toggleMoon
        {
            transform: rotate(315deg);
        }
        
        .hideMoon {
            visibility: hidden;
        }
        
        .hideMoon.hiddenMoon {
            visibility: visible;
        }
        `}
      </style>
      <div className="containerMoon">
        <div className={`menuMoon ${isActive ? 'activeMoon' : ''}`}>
          <div className="toggleMoon" onClick={toggleMenu}>
            <img style={{ transform: "scale(5.0)" }} src="assets/moon.png" alt="Toggle Image" />
          </div>
          <div className={`hideMoon ${isActive ? 'hiddenMoon' : 'hideMoon'}`}>
            <ul>
              <li style={{ '--i': 0 } as any} className="menuItemMoon">
                <a href="#"><p>School</p></a>
              </li>
              <li style={{ '--i': 1 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(270deg)' }}>Coding</p></a>
              </li>
              <li style={{ '--i': 2 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(180deg)' }}>Love</p></a>
              </li>
              <li style={{ '--i': 3 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(90deg)' }}>Work</p></a>
              </li>
              <li style={{ '--i': 4 } as any} className="menuItemMoon">
                <a href="#"><p>Health</p></a>
              </li>
              <li style={{ '--i': 5 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(270deg)' }}>Anxiety</p></a>
              </li>
              <li style={{ '--i': 6 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(180deg)' }}>General</p></a>
              </li>
              <li style={{ '--i': 7 } as any} className="menuItemMoon">
                <a href="#"><p style={{ transform: 'rotate(90deg)' }}>Family</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularMenu;