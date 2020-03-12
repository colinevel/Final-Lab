import React, { useState, useEffect } from "react";
import axios from "axios";
import Celebrity from "./Celebrity";
import CelebrityDetails from "./CelebrityDetails";
import SearchBar from "./SearchBar";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [clickedCelebrity, setClickedCelebrity] = useState({});
  const [searchedCelebrities, setSearchedCelebrities] = useState(celebrities);
  const [search, setInput] = useState("");

  useEffect(() => {
    for (let i=1; i<=10; i++) {
    axios
      .get(`https://api.themoviedb.org/3/person/popular?page=${i}&api_key=101529d938643e4c74fbda05a0ff8348`)

      .then(res => {
        celebrities.push(...res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    }
    setCelebrities(celebrities);
  }, []);

  const getInfo = (artist) => {
    setClickedCelebrity(artist);
    console.log("this is my details", clickedCelebrity);
  }

  const handleChange = e => {
    setInput(e.target.value);
    let filteredCeleb = celebrities.filter(celeb => celeb.name.toUpperCase().match(search.toUpperCase()))
    setSearchedCelebrities(filteredCeleb)
    // setCelebrities(filteredCeleb)

  }

  return (
    celebrities ? (
    <div>
      <h1>Celebrities</h1>
      <input
        type="text"
        value={search}
        onChange={handleChange}
      />
      <div className="big-container">
      <ul className="list-celeb">{searchedCelebrities.map((celeb, index) => (
        <Celebrity celeb={celeb} key={index} getClickedCelebrity={()=>getInfo(celeb)}/>
      ))}
      </ul>
      <CelebrityDetails details={clickedCelebrity} />
      </div>
    </div>
    ) : (
      <p>"No celeb yet"</p>
    )
  );
}
