import { useState } from "react";
import song1 from "./assets/song/medium/song1.png";
import song2 from "./assets/song/medium/song2.png";
import song3 from "./assets/song/medium/song3.png";
import song4 from "./assets/song/medium/song4.png";
import Header from "./components/Header/Header.component";
import Content from "./components/Content/Content.component";
import { SongModel } from "./model/song.model";
import ViewportProvider from "./store/music-provider";

let songsList: SongModel[] = [
  {
    id: 0,
    imagePath: song2,
    name: "Atrápalos Ya!",
    description: "Pokémon",
    isFavourite: false,
    listeners: "66,654",
  },
  {
    id: 1,
    imagePath: song1,
    name: "Catch you catch me",
    description: "GUMI",
    isFavourite: false,
    listeners: "67,659",
  },
  {
    id: 2,
    imagePath: song3,
    name: "Shinzo wo Sasageyo!",
    description: "Linked Horizon",
    isFavourite: false,
    listeners: "87,456",
  },
  {
    id: 3,
    imagePath: song4,
    name: "lofi rain",
    description: "a girl and a cat",
    isFavourite: true,
    listeners: "45,569",
  },
];

function App() {
  const [songs, setSongs] = useState<SongModel[]>(songsList);

  const [currentSong, setCurrentSong] = useState({
    name: songsList[0].name,
    listener: songsList[0].listeners,
    imagePath: songsList[0].imagePath,
    description: songsList[0].description,
  });

  const favouriteHandler = (id: number): void => {
    const updatedSongs: SongModel[] = songsList.map((song: SongModel) => {
      if (song.id === id) {
        return {
          ...song,
          isFavourite: !song.isFavourite,
        };
      } else return song;
    });
    songsList = updatedSongs;
    setSongs(updatedSongs);
  };

  const songClickHandler = (id: number): void => {
    const selectedSong = {
      name: songsList[id].name,
      listener: songsList[id].listeners,
      imagePath: songsList[id].imagePath,
      description: songsList[id].description,
    };
    setCurrentSong(selectedSong);
  };

  return (
    <ViewportProvider>
      <Header
        name={currentSong.name}
        listener={currentSong.listener}
        imagePath={currentSong.imagePath}
        description={currentSong.description}
      />
      <Content
        songs={songs}
        favouriteHandler={(id: number) => favouriteHandler(id)}
        songClickHandler={(id: number) => songClickHandler(id)}
      />
    </ViewportProvider>
  );
}

export default App;
