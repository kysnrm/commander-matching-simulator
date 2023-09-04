import { useState } from "react";
import { css } from "../styled-system/css";

const shuffleArray = <T,>(array: T[]) => {
  return array.slice().sort(() => Math.random() - Math.random());
};

function App() {
  const [myCommander, setMyCommander] = useState("");
  const [commanders, setCommanders] = useState("");
  const [matching, setMatching] = useState<string[] | undefined>();
  const handleClickButton = () => {
    const splittedCommanders = commanders.split(/\n/);
    const shuffledCommanders = shuffleArray(splittedCommanders);
    const players = [myCommander, ...shuffledCommanders.slice(3)];
    setMatching(shuffleArray(players));
  };
  return (
    <>
      <header>
        <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Commander Matching Simulator
        </h1>
      </header>
      <main>
        <label>
          Your Commander
          <input
            type="text"
            value={myCommander}
            onChange={(e) => setMyCommander(e.target.value)}
            className={css({
              border: "1px solid",
              borderRadius: "md",
            })}
          />
        </label>
        <label>
          Each Others Commanders
          <textarea
            value={commanders}
            onChange={(e) => setCommanders(e.target.value)}
            className={css({
              border: "1px solid",
              borderRadius: "md",
            })}
          />
        </label>
        <button onClick={handleClickButton}>Simulate Matching</button>
        {matching && matching.map((item) => <>{item}</>)}
      </main>
    </>
  );
}

export default App;
