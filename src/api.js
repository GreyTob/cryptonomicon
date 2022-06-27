// api -  https://www.cryptocompare.com/

const BASE_URL = `https://min-api.cryptocompare.com`;

const KEY_APP =
  "8159a7fc25d5bb90a71e525c189632eef9f1cc6fff9f8eee66776313a609d7d1";

export const loadTickers = tickers => {
  const searchParams = new URLSearchParams({
    fsyms: tickers.join(","),
    api_key: KEY_APP,
    tsyms: "USD"
  });

  return fetch(`${BASE_URL}/data/pricemulti?${searchParams.toString()}`)
    .then(d => d.json())
    .then(rawData =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );
};

export const loadTickerList = () => {
  const searchParams = new URLSearchParams({
    summary: true
  });

  return fetch(
    `${BASE_URL}/data/all/coinlist?${searchParams.toString()}`
  ).then(d => d.json());
};
