import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  CatalogGameCard,
  Header,
  ScrollToTopButton,
  Main,
  Footer,
  SearchBar,
} from "../../Components";
import { useData } from "../../Context/DataContext";
import { useSearch } from "../../Context/SearchContext";

function GamesCatalogPage() {
  const { games } = useData();
  const { searchGames, setSearchGames } = useSearch();

  const [count, setCount] = useState(0);
  const [render, setRender] = useState([]);

  useEffect(() => {
    setCount(
      games.filter((x) =>
        x.title.toLowerCase().includes(searchGames.toLowerCase())
      ).length
    );
    setRender(
      games.filter((x) =>
        x.title.toLowerCase().includes(searchGames.toLowerCase())
      )
    );
  }, [searchGames, games]);

  return (
    <>
      <Header paginaAtual="Games" link1="News" />

      <Main>
        <SearchBar
          searchItem={searchGames}
          count={count}
          item={games}
          setSearchItem={setSearchGames}
        />
        <StyledDiv>
          {searchGames
            ? render.map((item) => (
                <CatalogGameCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  short_description={item.short_description}
                />
              ))
            : games.map((item) => (
                <CatalogGameCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  short_description={item.short_description}
                />
              ))}
        </StyledDiv>
      </Main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  padding: 5%;
`;

export default GamesCatalogPage;
