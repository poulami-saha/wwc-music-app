import React, { useContext } from "react";
import classes from "./Header.module.scss";
import medium from "../../assets/back-arrow/medium.png";
import { ViewportContext } from "../../store/music-provider";
import small from "../../assets/back-arrow/small.png";

const Header: React.FC<{
  name: string;
  listener: string;
  imagePath: string;
  description: string;
}> = ({ name, imagePath, listener, description }) => {
  const ctx = useContext(ViewportContext);

  let desktopHeader = (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <img src={medium} alt="backArrow" className={classes.arrow} />
        <img src={imagePath} alt="song" className={classes.image} />
      </div>
      <div className={classes.rightSection}>
        <p className={classes.name}>{name}</p>
        <p className={classes.listeners}>{listener} monthly listeners</p>
      </div>
    </div>
  );

  let mobileHeader = (
    <div className={classes.header}>
      <img src={small} alt="backArrow" className={classes.mobArrow} />
      <img src={imagePath} alt="song" className={classes.mobImage} />
      <p className={classes.centered}>{description}</p>
    </div>
  );
  return (
    <>
      {ctx.width > ctx.breakpoint && desktopHeader}
      {ctx.width < ctx.breakpoint && mobileHeader}
    </>
  );
};

export default Header;
