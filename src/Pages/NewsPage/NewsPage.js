import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  NewsCard,
  Header,
  ScrollToTopButton,
  Main,
  Footer,
  SearchBar,
} from "../../Components";
import { useData } from "../../Context/DataContext";
import { useSearch } from "../../Context/SearchContext";

function GamesCatalogPage() {
  const { news } = useData();
  const { searchNews, setSearchNews } = useSearch();

  const [count, setCount] = useState(0);
  const [render, setRender] = useState([]);

  useEffect(() => {
    setCount(
      news.filter((x) =>
        x.title.toLowerCase().includes(searchNews.toLowerCase())
      ).length
    );
    setRender(
      news.filter((x) =>
        x.title.toLowerCase().includes(searchNews.toLowerCase())
      )
    );
  }, [searchNews, news]);

  return (
    <>
      <Header paginaAtual="News" link1="Games" />

      <Main
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "90vh",
          alignItems: "center",
        }}
      >
        <SearchBar
          searchItem={searchNews}
          count={count}
          item={news}
          setSearchItem={setSearchNews}
        />
        <StyledDiv>
          {searchNews
            ? render.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  short_description={item.short_description}
                />
              ))
            : news.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  short_description={item.short_description}
                  article_url={item.article_url}
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
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export default GamesCatalogPage;
