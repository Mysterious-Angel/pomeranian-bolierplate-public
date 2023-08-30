import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { EditIcon } from '../Icons/EditIcon';
import { BookIcon } from '../Icons/BookIcon';
import { CodeIcon } from '../Icons/CodeIcon';
import { MessageIcon } from '../Icons/MessageIcon';
import { NavLink } from 'react-router-dom';

export const DashboardCard = () => {
  return (
    <div className="dashboard-card-wrapper">
      <div className="boxIcons">
        <div className="first-text">Moje CV</div>
        <div className="height-icon">
          <PersonalCardIcon />
        </div>
        <div className="second-text">podgląd cv wraz z doświadczeniem</div>

        <button className="button-dashboard-card">zobacz więcej ></button>
      </div>
      <div className="boxIcons">
        <div className="first-text">Ćwiczenia</div>
        <div className="height-icon">
          <EditIcon />
        </div>

        <div className="second-text">wszystkie wykonane ćwiczenia</div>

        <button className="button-dashboard-card">zobacz więcej ></button>
      </div>
      <div className="boxIcons">
        <div className="first-text">Blog</div>
        <div className="height-icon">
          <BookIcon />
        </div>

        <div className="second-text">wpisy blogowe o technologii front-end</div>

        <button className="button-dashboard-card">zobacz więcej ></button>
      </div>
      <div className="boxIcons">
        <div className="first-text">Tech stack</div>
        <div className="height-icon">
          <CodeIcon />
        </div>

        <div className="second-text">
          stack technologiczny realizowany na kursie
        </div>

        <button className="button-dashboard-card">zobacz więcej ></button>
      </div>
      <div className="boxIcons">
        <div className="first-text">FAQ</div>
        <div className="height-icon">
          <MessageIcon />
        </div>

        <div className="second-text">odpowiedzi na najczęstsze pytania</div>
        <button className="button-dashboard-card">zobacz więcej ></button>
      </div>
    </div>
  );
};
