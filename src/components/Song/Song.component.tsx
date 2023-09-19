import classes from "./Song.module.scss";
import favouriteTrue from "../../assets/favourites/medium/true.png";
import favouriteFalse from "../../assets/favourites/medium/false.png";
import smallFavouriteTrue from "../../assets/favourites/small/true.png";
import smallFavouriteFalse from "../../assets/favourites/small/false.png";
import seemoreMedium from "../../assets/seemore/medium.png";
import seemoreSmall from "../../assets/seemore/small.png";
import { useContext } from "react";
import { ViewportContext } from "../../store/music-provider";

const Song: React.FC<{
  id: number;
  name: string;
  description: string;
  imagePath: string;
  isFavourite: boolean;
  onFavouriteClick: (id: number) => void;
  onSongClick: (id: number) => void;
}> = (props) => {
  const ctx = useContext(ViewportContext);
  const desktopView = (
    <>
      <div
        className={classes.details}
        onClick={() => props.onSongClick(props.id)}
      >
        <img src={props.imagePath} className={classes.img} alt="song"/>
        <div className={classes.desc}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.desc}>{props.description}</p>
        </div>
      </div>
      <div className={classes.options}>
        <img
          src={props.isFavourite ? favouriteTrue : favouriteFalse}
          className={classes.icon}
          onClick={() => props.onFavouriteClick(props.id)}
          alt="favouriteButton"
        />
        <img src={seemoreMedium} className={classes.icon} alt="see more" />
      </div>
    </>
  );
  const mobileView = (
    <>
      <div
        className={classes.details}
        onClick={() => props.onSongClick(props.id)}
      >
        <img src={props.imagePath} className={classes.mobImg} alt="song" />
        <div className={classes.desc}>
          <p className={classes.mobName}>{props.name}</p>
          <p className={classes.mobDetail}>{props.description}</p>
        </div>
      </div>
      <div className={classes.mobOptions}>
        <img
          src={props.isFavourite ? smallFavouriteTrue : smallFavouriteFalse}
          className={classes.mobIcon}
          onClick={() => props.onFavouriteClick(props.id)}
          alt="favouriteButton"
        />
        <img src={seemoreSmall} className={classes.mobIcon} alt="see more" />
      </div>
    </>
  );
  return (
    <div className={classes.container}>
      {ctx.width > ctx.breakpoint && desktopView}
      {ctx.width < ctx.breakpoint && mobileView}
    </div>
  );
};
export default Song;
