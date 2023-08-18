import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Container, styled } from "@mui/material";
import FilterBar from "../components/FilterBar";
import CharactersList from "../components/characters/CharactersList";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { serializeObjectToQueryParams } from "../utils/helpers/general";

const fetchcracters = async (search, gender, status) => {
  try {
    const queryParams = serializeObjectToQueryParams({
      name: search,
      gender: gender,
      status: status,
    });
    const response = await fetch(
      `https://rickandmortyapi.com/api/character` + queryParams
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const CharactersPage = () => {
  const [searchParams] = useSearchParams();
  const genderValue = searchParams.get("gender") || "";
  const statusValue = searchParams.get("status") || "";
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearcTerm] = useState("");
 

  const [debouncedValue] = useDebounce(searchTerm, 1000);

  const searchTermChangeHandler = (e) => {
    setSearcTerm(e.target.value);
  };

  const fetchCharactersRequest = useCallback(() => {
    fetchcracters(debouncedValue, genderValue, statusValue)
      .then((data) => {
        setCharacters(data.results);
      })
      .catch(console.log);
  }, [debouncedValue, genderValue, statusValue]);

  useEffect(() => {
    fetchCharactersRequest();
  }, [fetchCharactersRequest]);

  return (
    <StyledContainer>
      <header>
        <SearchBar onChange={searchTermChangeHandler} value={searchTerm} />
       
        <FilterBar />
      </header>
      <main>
        <CharactersList characters={characters} />
      </main>
    </StyledContainer>
  );
};
const StyledContainer = styled(Container)(() => {
  return {
    padding: "1rem 0",
  };
});
export default CharactersPage;
