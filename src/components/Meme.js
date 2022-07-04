import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://imgflip.com/s/meme/Grumpy-Cat.jpg",
  });

  function handleClick() {
    const randomMeme = Math.floor(Math.random() * memesData.data.memes.length);

    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: memesData.data.memes[randomMeme].image,
    }));

  
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text" />
        <input className="form--input" type="text" placeholder="Bottom Text" />
        <button onClick={handleClick} className="form--button">
          Get new meme image 🖼
        </button>

        <img
          className="meme-image"
          src={memeImage.randomImage}
          alt="A meme"
        />
      </div>
    </main>
  );
};

export default Meme;
