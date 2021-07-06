import Counter from "./components/Counter.js";
import PlayerModel from "./models/PlayerModel.js";
import Player from "./components/Player.js";

new Counter(
  {
    headingText: "Bugs in our code 🐛.",
    color: "green",
  },
  document.getElementById("counters")
);

new Counter(
  {
    headingText: "Clouds passing by ☁.",
    color: "blue",
    count: 5,
  },
  document.getElementById("counters")
);

// imagine: list of all players from database, orderBy score desc (highest score first)
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mos", 9001),
  new PlayerModel("Patrick", "Hebert", 5000),
  new PlayerModel("Timmy", "C", -1),
];

for (let i = 0; i < rankedPlayersFromDb.length; i++) {
  Player(
    { rankNum: i + 1, player: rankedPlayersFromDb[i] },
    document.getElementById("scoreboard")
  );
}
