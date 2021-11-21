import React, { useState, useEffect } from "react";
import { getGameFromApi } from "../../Functions";
import { useParams } from "react-router-dom";
import { Main, Header, Footer, GameCard } from "../../Components";

const GamePage = () => {
  const params = useParams();
  const [game, setGame] = useState({ id: 0 });

  useEffect(() => {
    getGameFromApi(setGame, params.id);
  }, [params.id]);

  if (game.id === 0) {
    return <span>Loading</span>;
  }

  return (
    <>
      <Header paginaAtual={game?.title} link1="News" />
      <Main>
        <GameCard
          screenshots={game.screenshots}
          minimum_system_requirements={game.minimum_system_requirements}
          developer={game.developer}
          publisher={game.publisher}
          release_date={game.release_date}
          genre={game.genre}
          short_description={game.short_description}
          gameId={game.id}
        />
      </Main>
      <Footer />
    </>
  );
};

export default GamePage;
