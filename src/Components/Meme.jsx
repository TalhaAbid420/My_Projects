import { useEffect, useId, useState } from 'react';

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
    });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  const id = useId()
  
  return (
    <div className="meme p-6 border ">
    <div className="form flex flex-col gap-6">
        <div className="inputs flex justify-between">
        <div className="first inline-block">
        <label htmlFor={id + 'topText'} className="text-xl font-md">Top Text</label><br /> 
        <input 
          type="text" 
          id={id + 'topText'} 
          className="border border-gray-400 rounded-md  py-1 px-2 mt-1 w-[240px] outline-none" 
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        </div>
        <div className="second inline-block">
        <label htmlFor={id + "bottomText"} className="text-xl font-md">Bottom Text</label><br />
        <input 
        type="text" 
        id={id + "bottomText"} 
        className="border border-gray-400 rounded-md py-1 px-2 mt-1 w-[240px] outline-none" 
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
        </div>
        </div>
        <button type="submit"  className="border bg-gradient-to-r from-purple-800 to-purple-500 text-white rounded-md p-2 cursor-pointer" onClick={getMemeImage}>Get a new Meme 🖼️</button>  
    </div>
    <div className="image  my-5 relative font-['Ribeye Marrow', serif]">
      <img className='m-auto w-full rounded-md' src={meme.randomImage} alt="" />
      <h1 className='top-text top-0 absolute z-10 w-3/4 h-auto text-white font-extrabold shadow m-6 text-center uppercase left-[45%] translate-x-[-50%] text-4xl bg-black bg-opacity-30'>{meme.topText}</h1>
      <h1 className='bottom-text bottom-0 absolute z-10 w-3/4 text-white font-extrabold shadow m-6 text-center uppercase left-[45%] translate-x-[-50%] text-4xl  '>{meme.bottomText}</h1>
    </div>
    </div>
  )
}

export default Meme