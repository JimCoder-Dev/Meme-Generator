import memesData from "../memesData";
import { useState, useEffect } from "react";

const Meme = () => {
  const [memeImage, setAllMemes] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://imgflip.com/s/meme/Grumpy-Cat.jpg",
  });
   // eslint-disable-next-line
  useEffect(() =>{
    async function fetchMemes(){
      //Sadly the images on this API do not appear to be working hence staying with the memeData file
      let response = await fetch("https://api.imgflip.com/get_memes")
      let data = await response.json()
      console.log(data.data.memes)
    }
   fetchMemes()

   return () =>{

   }
  }, [])

 

  function handleClick() {
    const randomMeme = Math.floor(Math.random() * memesData.data.memes.length);

    setAllMemes((prevMeme) => ({
      ...prevMeme,
      randomImage: memesData.data.memes[randomMeme].image,
    }));
  }

  function handleChange(event){
    const { name, value } = event.target
    setAllMemes(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text" name="topText" value={memeImage.topText} onChange={handleChange}/>
        <input className="form--input" type="text" placeholder="Bottom Text" name="bottomText" value={memeImage.bottomText} onChange={handleChange}/>
        <button onClick={handleClick} className="form--button">
          Get new meme image 🖼
        </button>
        <div className="meme">
            <img
            className="meme-image"
            src={memeImage.randomImage}
            alt="A meme"
            />
            <h2 className="meme--text top">{memeImage.topText}</h2>
            <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
        </div>
        
      </div>
    </main>
  );
};

export default Meme;
