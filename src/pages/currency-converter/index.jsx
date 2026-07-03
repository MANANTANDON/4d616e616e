import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [baseNames, setBaseNames] = useState([]);
  const [currency, setcurrency] = useState({ base: "", quote: "" });

  const handleClick = () => {
    // ALTERNATIVE
    // const {base, quote} = currency
    // setcurrency({base: quote, quote: base})

    setcurrency((prev) => ({ base: prev.quote, quote: prev.base }));
  };

  const getCurrency = async () => {
    try {
      const response = await axios.get("https://api.frankfurter.dev/v2/rates");
      setBaseNames(response?.data?.map((item) => item.quote));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <>
      <div className="h-screen bg-zinc-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          Currency Converter
          <select
            value={currency.base}
            onChange={(e) =>
              setcurrency((prev) => ({ ...prev, base: e.target.value }))
            }
          >
            <option value="">Select Base</option>
            {baseNames
              .filter((item) => item !== currency.quote)
              .map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
          </select>
          <select
            value={currency.quote}
            onChange={(e) =>
              setcurrency((prev) => ({ ...prev, quote: e.target.value }))
            }
          >
            <option value="">Select Quote</option>
            {baseNames
              ?.filter((item) => item !== currency?.base)
              ?.map((item, key) => (
                <option key={key} value={item}>
                  {item}
                </option>
              ))}
          </select>
          <button
            onClick={handleClick}
            className="border border-zinc-400 px-6 rounded-lg cursor-pointer"
          >
            reverse
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
