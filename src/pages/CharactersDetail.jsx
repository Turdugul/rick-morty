import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterItem from "../components/characters/CharacterItem";

const CharactersDetail = () => {
  const { characterId } = useParams();
  const [data, setData] = useState({});

  

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchcharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`,
          { signal }
        );
      
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const result = await response.json();
          setData({
            name: result.name,
            status: result.status,
            episode: result.episode,
            gender: result.gender, 
            image: result.image,
            id: result.id,
          });
        
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
  
    fetchcharacter()

    return () => {

      controller.abort();
    }
  }, [characterId]);

  console.log(characterId, "id");
  
  
  return (
    <div>
      <CharacterItem {...data} />
    </div>
  );
};

export default CharactersDetail;
