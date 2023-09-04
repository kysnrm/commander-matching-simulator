import { useState } from "react";
import { css } from "../styled-system/css";
import exampleCommanders from "./assets/example";

const shuffleArray = <T,>(array: T[]) => {
  return array.slice().sort(() => Math.random() - Math.random());
};

function App() {
  const [myCommander, setMyCommander] = useState("");
  const [commanders, setCommanders] = useState(exampleCommanders.join("\n"));
  const [matching, setMatching] = useState<string[] | undefined>();
  const handleClickButton = () => {
    const splittedCommanders = commanders.split(/\n/);
    const shuffledCommanders = shuffleArray(splittedCommanders);
    const players =
      myCommander.length !== 0
        ? [myCommander, ...shuffledCommanders.slice(0, 3)]
        : shuffledCommanders.slice(0, 4);
    setMatching(shuffleArray(players));
  };
  return (
    <div className={css({ padding: 8 })}>
      <header className={css({ paddingBottom: 6 })}>
        <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Commander Matching Simulator
        </h1>
      </header>
      <main className={css({ display: "flex", gap: 6 })}>
        <section className={sectionStyle}>
          <label className={labelStyle}>
            Your Commander
            <input
              type="text"
              value={myCommander}
              onChange={(e) => setMyCommander(e.target.value)}
              className={inputStyle}
            />
          </label>
          <label className={labelStyle}>
            Each Others Commanders
            <textarea
              value={commanders}
              onChange={(e) => setCommanders(e.target.value)}
              className={inputStyle}
              rows={10}
            />
          </label>
        </section>
        <section className={sectionStyle}>
          <button
            className={css({
              paddingX: 6,
              paddingY: 2,
              backgroundColor: "teal.500",
              color: "white",
              fontWeight: "bold",
              borderRadius: "md",
              cursor: "pointer",
              transition: "all .1s",
              width: "fit-content",
              _hover: {
                backgroundColor: "teal.600",
              },
            })}
            onClick={handleClickButton}
            role="button"
          >
            Simulate Matching
          </button>
          {matching && (
            <ul
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 2,
              })}
            >
              {matching.map((item, index) => (
                <li key={index}>
                  {index + 1}: {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

const sectionStyle = css({ display: "flex", flexDirection: "column", gap: 4 });
const labelStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 1,
});
const inputStyle = css({
  border: "1px solid",
  borderRadius: "md",
  paddingX: 2,
  paddingY: 1,
  resize: "none",
});

export default App;
