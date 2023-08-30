import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import UserIcon from '../Images/FotoGit.jpeg';

export function AppHeader() {
  return (
    <header>
      <div className="naglowek">
        {/* <Logo></Logo> */}

        <div className="header-title">
          <Logo />
        </div>
        <div className="header-content">
          <div className="settings-button">
            <button className="gorne-przyciski">
              <SettingIcon />
            </button>
          </div>

          <div>
            <img
              src={UserIcon}
              alt="moje zdjęcie"
              width="60"
              height="60"
              className="moje-foto"
            ></img>
          </div>
          <div className="gorny-tekst">
            <div className="name">Anna</div>
            <div className="kursant">kursant</div>
          </div>
          <div className="header-user">
            <button className="gorne-przyciski">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
