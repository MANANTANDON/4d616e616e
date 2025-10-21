import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState();
  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const searchData = async () => {
    try {
      const res = await axios.get(
        `http://10.58.15.6:190/fineapis/CountryScoring/CountryRanking`
      );
      console.log(res?.data?.docs);
      setData(res?.data?.docs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchData();
  }, []);

  return (
    <>
      <div className="bg-[#FFFFFF] h-screen w-screen">
        <div className="flex flex-row items-center justify-center py-5">
          <div className="flex flex-row gap-1 bg-slate-100 border border-slate-300 p-2 rounded-xl">
            <div className="sfpro">􀊫</div>
            <input
              value={word}
              placeholder="search authors...."
              onChange={(e) => handleChange(e)}
              className=" outline-0"
            />
          </div>
        </div>
        <div className="border border-red-100">
          {data?.map((item, key) => (
            <div className="border border-green-300" key={key}>
              <div>{item?.author_name?.[0]}</div>
              <div>{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
