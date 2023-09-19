import classes from "./Content.module.scss";
import mediumplay from "../../assets/play/medium/play.png";
import mediumPause from "../../assets/play/medium/pause.png";
import smallPlay from "../../assets/play/small/play.png";
import smallPause from "../../assets/play/small/pause.png";
import following from "../../assets/follow/medium/true.png";
import smallFollowing from "../../assets/follow/small/true.png";
import follow from "../../assets/follow/medium/false.png";
import smallFollow from "../../assets/follow/small/false.png";
import falseShuffle from "../../assets/shuffle/medium/false.png";
import trueShuffle from "../../assets/shuffle/medium/true.png";
import smallShuffleFalse from "../../assets/shuffle/small/false.png";
import smallShuffleTrue from "../../assets/shuffle/small/true.png";
import { SongModel } from "../../model/song.model";
import Song from "../Song/Song.component";
import { useContext, useState } from "react";
import { ViewportContext } from "../../store/music-provider";

const Content: React.FC<{
  songs: SongModel[];
  favouriteHandler: (id: number) => void;
  songClickHandler: (id: number) => void;
}> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

  const ctx = useContext(ViewportContext);

  let songsContent = props.songs.map((song: SongModel) => (
    <Song
      key={song.id}
      id={song.id}
      name={song.name}
      description={song.description}
      imagePath={song.imagePath}
      isFavourite={song.isFavourite}
      onFavouriteClick={props.favouriteHandler}
      onSongClick={props.songClickHandler}
    />
  ));

  let desktopContent = (
    <div className={classes.header}>
      <p className={classes.menu}>Popular</p>
      <div className={classes.options}>
        <img
          src={isPlaying ? mediumPause : mediumplay}
          className={classes.play}
          onClick={() => setIsPlaying(!isPlaying)}
          alt="playButton"
        />
        <img
          src={isFollowing ? following : follow}
          className={classes.follow}
          onClick={() => setIsFollowing(!isFollowing)}
          alt="followButton"
        />
        <img
          src={isShuffled ? trueShuffle : falseShuffle}
          className={classes.shuffle}
          onClick={() => setIsShuffled(!isShuffled)}
          alt="shuffleButton"
        />
      </div>
    </div>
  );
  let mobileContent = (
    <>
      <div className={classes.mobileHeader}>
        <img
          src={isFollowing ? smallFollowing : smallFollow}
          className={classes.mobileFollow}
          onClick={() => setIsFollowing(!isFollowing)}
          alt="followButton"
        />
        <div>
          <img
            src={isShuffled ? smallShuffleTrue : smallShuffleFalse}
            className={classes.mobileShuffle}
            onClick={() => setIsShuffled(!isShuffled)}
            alt="shuffleButton"
          />
          <img
            src={isPlaying ? smallPause : smallPlay}
            className={classes.mobilePlay}
            onClick={() => setIsPlaying(!isPlaying)}
            alt="playButton"
          />
        </div>
      </div>
      <p className={classes.mobilePopular}>Popular</p>
    </>
  );
  return (
    <div
      className={
        ctx.width < ctx.breakpoint ? classes.mobileContainer : classes.container
      }
    >
      {ctx.width > ctx.breakpoint && desktopContent}
      {ctx.width < ctx.breakpoint && mobileContent}
      <div className={classes.content}>{songsContent}</div>
    </div>
  );
};
export default Content;
