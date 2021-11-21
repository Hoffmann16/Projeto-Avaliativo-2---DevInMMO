async function getGamesFromApi(function_setter) {
  const fetchData = await fetch("https://mmo-games.p.rapidapi.com/games", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "167872e45emsh11f8a79c2a83d7ap190796jsne120b16ff812",
    },
  });
  const apiData = await fetchData.json();
  function_setter(apiData);
}

async function getNewsFromApi(function_setter) {
  const fetchData = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
      "x-rapidapi-key": "167872e45emsh11f8a79c2a83d7ap190796jsne120b16ff812",
    },
  });
  const apiData = await fetchData.json();
  function_setter(apiData);
}
// alterar função abaixo para receber id do jogo clicado
async function getGameFromApi(function_setter, id) {
  const fetchData = await fetch(
    `https://mmo-games.p.rapidapi.com/game?id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "167872e45emsh11f8a79c2a83d7ap190796jsne120b16ff812",
      },
    }
  );
  const apiData = await fetchData.json();
  function_setter(apiData);
}

function handlerComments(gameId, values) {
  const gamesComments = JSON.parse(localStorage.getItem("gamesComments")) || [];

  const gameComments = gamesComments?.find((item) => item.id === gameId)
    ? gamesComments?.find((item) => item.id === gameId)
    : { id: gameId, comments: [] };

  const data = new Date();

  values = {
    ...values,
    votes: 0,
    when: `${data.getHours()}:${data.getMinutes()} ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
  };

  gameComments.comments.push(values);

  const gamesCommentsFilter = gamesComments.filter((x) => x.id !== gameId);

  gamesCommentsFilter.push(gameComments);

  localStorage.setItem("gamesComments", JSON.stringify(gamesCommentsFilter));
}

function handlerComment(gameId, index, upVoted) {
  const gamesComments = JSON.parse(localStorage.getItem("gamesComments"));

  const gameComments = gamesComments.find((item) => item.id === gameId);

  gameComments.comments[index] = upVoted;

  const gamesCommentsFilter = gamesComments.filter((x) => x.id !== gameId);

  gamesCommentsFilter.push(gameComments);

  localStorage.setItem("gamesComments", JSON.stringify(gamesCommentsFilter));
}

export {
  getGamesFromApi,
  getNewsFromApi,
  getGameFromApi,
  handlerComments,
  handlerComment,
};
