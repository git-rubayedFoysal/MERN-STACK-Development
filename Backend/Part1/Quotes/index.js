import fs from "node:fs/promises";

const quotes = {};

quotes.getQuoutes = async () => {
  try {
    const allQuotes = await fs.readFile(
      `${import.meta.dirname}/quotes.txt`,
      "utf8",
    );

    const quotesArray = allQuotes.split(/\r?\n/);

    return quotesArray;
  } catch (error) {
    console.log(error);
  }
};

export default quotes;
