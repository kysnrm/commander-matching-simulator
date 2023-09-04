import { useState } from "react";
import { css } from "../styled-system/css";
import exampleCommanders from "./assets/example";

const shuffleArray = <T,>(array: T[]) => {
  const output: T[] = Array.from(array);

  for (let i = output.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = output[i];
    output[i] = output[random];
    output[random] = tmp;
  }

  return output;
};

function App() {
  const [myCommander, setMyCommander] = useState("");
  const [commanders, setCommanders] = useState(exampleCommanders.join("\n"));
  const [matching, setMatching] = useState<
    { name: string; isMine: boolean }[] | undefined
  >();
  const handleClickButton = () => {
    const splittedCommanders = commanders.split(/\n/);
    const shuffledCommanders = shuffleArray(splittedCommanders);
    const players =
      myCommander.length !== 0
        ? [
            { name: myCommander, isMine: true },
            ...shuffledCommanders.slice(0, 3).map((commander) => {
              return { name: commander, isMine: false };
            }),
          ]
        : shuffledCommanders.slice(0, 4).map((commander) => {
            return { name: commander, isMine: false };
          });
    setMatching(shuffleArray(players));
  };
  return (
    <div
      className={css({
        padding: 4,
        maxWidth: "3xl",
        marginX: "auto",
        md: { padding: 8 },
      })}
    >
      <header className={css({ paddingBottom: 6 })}>
        <h1
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            md: { fontSize: "2xl" },
          })}
        >
          Commander Matching Simulator
        </h1>
      </header>
      <main
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          md: { flexDirection: "row" },
        })}
      >
        <section className={sectionStyle}>
          <label className={labelStyle}>
            自分の統率者
            <input
              type="text"
              value={myCommander}
              onChange={(e) => setMyCommander(e.target.value)}
              className={inputStyle}
            />
          </label>
          <label className={labelStyle}>
            他のプレイヤーの統率者
            <textarea
              value={commanders}
              onChange={(e) => setCommanders(e.target.value)}
              className={inputStyle}
              rows={5}
            />
          </label>
        </section>
        <section className={sectionStyle}>
          <button
            className={css({
              paddingX: 6,
              paddingY: 2,
              backgroundColor: "red.500",
              color: "white",
              fontWeight: "bold",
              borderRadius: "md",
              cursor: "pointer",
              transition: "all .1s",
              width: "fit-content",
              _hover: {
                backgroundColor: "red.700",
              },
            })}
            onClick={handleClickButton}
            role="button"
          >
            マッチング
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
                <li
                  key={index}
                  className={css({
                    color: item.isMine ? "red.600" : "black",
                    display: "flex",
                    gap: 2,
                  })}
                >
                  <span className={css({ width: 3, flexShrink: 0 })}>
                    {index + 1}
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

const sectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 6,
  md: { width: "50%" },
});
const labelStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});
const inputStyle = css({
  border: "1px solid",
  borderRadius: "md",
  paddingX: 2,
  paddingY: 1,
  resize: "none",
});

export default App;
