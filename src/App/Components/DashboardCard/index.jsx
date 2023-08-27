import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { EditIcon } from '../Icons/EditIcon';
import { BookIcon } from '../Icons/BookIcon';
import { CodeIcon } from '../Icons/CodeIcon';
import { MessageIcon } from '../Icons/MessageIcon';

export const DashboardCard = () => {
  return (
    <div className="dashboard-card-wrapper">
      <div className="boxIcons">
        <div className="first-text">Moje CV</div>
        <div className="height-icon">
          <PersonalCardIcon />
        </div>
        <div className="second-text">podgląd cv wraz z doświadczeniem</div>
        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <div className="first-text">Ćwiczenia</div>
        <div className="height-icon">
          <EditIcon />
        </div>

        <p className="second-text">wszystkie wykonane ćwiczenia</p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">Blog</p>
        <p className="height-icon">
          <BookIcon />
        </p>

        <p className="second-text">wpisy blogowe o technologii front-end</p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">Tech stack</p>
        <p className="height-icon">
          <CodeIcon />
        </p>

        <p className="second-text">
          stack technologiczny realizowany na kursie
        </p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">FAQ</p>
        <p className="height-icon">
          <MessageIcon />
        </p>

        <p className="second-text">odpowiedzi na najczęstsze pytania</p>
      </div>
      <button className="button-dashboard-card">zobacz więcej</button>
    </div>
  );
};
