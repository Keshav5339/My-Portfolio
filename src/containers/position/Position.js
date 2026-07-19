import React, {useContext} from "react";
import "./Position.scss";
import PositionCard from "../../components/positionCard/PositionCard";
import {positionSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Position() {
  const {isDark} = useContext(StyleContext);
  if (!positionSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="position">
        <div className="position-header">
          <h1 className="position-header-text">{positionSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode position-subtitle"
                : "subTitle position-subtitle"
            }
          >
            {positionSection.subtitle}
          </p>
        </div>
        <div className="position-main-div">
          <div className="position-text-div">
            {positionSection.positions.map((position, i) => {
              return (
                <PositionCard key={i} isDark={isDark} position={position} />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
