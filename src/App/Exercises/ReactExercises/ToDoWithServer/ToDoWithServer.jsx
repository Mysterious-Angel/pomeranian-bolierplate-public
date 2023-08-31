import React from 'react';
import { AkceptIcon } from '../../../Components/Icons/AkceptIcon';
import { PenIcon } from '../../../Components/Icons/PenIcon';
import { TrashIcon } from '../../../Components/Icons/TrashIcon';

import './style.css';

export function ToDoWithServer() {
  return (
    <div>
      <div className="lista">
        Tutaj znajdziesz listę swoich zadań <button className="plus">+</button>
      </div>
      <div className="allBox">
        <div className="boxOne">
          <div className="textAndButtons">
            <h4>Kupić parasol na balkon</h4>
            <div className="button-container">
              <AkceptIcon />
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
          <div>
            <p>
              Anna <br />
              21.04.2024, 10:08
            </p>
            <p>
              Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy
              <br /> i ile musi mieć max średnicy - miarka!!
            </p>
          </div>
        </div>
        <div className="boxTwo">
          <div className="textAndButtons">
            <h4>Kupić spray na kleszcze</h4>
            <div className="button-container">
              <AkceptIcon />
              <PenIcon />
              <TrashIcon />
            </div>
          </div>
          <div>
            <p>
              Anna <br />
              10.04.2024, 11:30
            </p>
            <p>
              Pamiętać, żeby sprawdzić skład i termin ważności preparatu.
              <br />
              Zadzwonić do weta, żeby się upewnić, czy mają na stanie.
            </p>
          </div>
        </div>
        <div className="boxThree">
          <div className="textAndButtons">
            <h4>Szczepienie kitku</h4>
            <div className="button-container">
              <AkceptIcon className="svg1" />
              <PenIcon className="svg2" />
              <TrashIcon className="svg3" />
            </div>
          </div>
          <div>
            <p>
              Anna <br />
              15.04.2024, 15:30
            </p>
            <p>
              Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz
              <br />
              szczepiona i umówić się z naszym weterynarzem.
            </p>
          </div>
        </div>
      </div>
      <button className="dodaj">DODAJ</button>
    </div>
  );
}
