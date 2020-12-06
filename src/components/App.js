import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      });
  }, []);

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }

  function handleClickMore() {
    // (sushiIndex + 4) % sushis.length
    // is a way to wrap back around to the beginning of the array once we get to the end
    // using the remainder (%) operator
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushis.length);
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney);
  }

  const displaySushis = sushis.slice(sushiIndex, sushiIndex + 4);

  const eatenSushis = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer
        sushis={displaySushis}
        onEatSushi={handleEatSushi}
        onClickMore={handleClickMore}
      />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushis} />
    </div>
  );
}

export default App;
