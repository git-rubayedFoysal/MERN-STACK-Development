import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getInfo() {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      );

      const info = await response.json();
      setData(info[currency]);
    }

    getInfo();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
