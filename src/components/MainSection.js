import React from "react";
import Palette from './Palette';
import Board from './BoardContainer.js';

const MainSection = () => (
  <div>
    <div className="col-4">
      <Palette />
    </div>
    {/* <div className="col-8">
      <Board />
    </div> */}
  </div>
);

export default MainSection;