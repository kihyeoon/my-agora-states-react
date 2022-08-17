/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import agoraStatesDiscussions from "../static/data";
import Discussion from "./discussion";

const Discussions = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("http://localhost:4000/discussions")
      ).json();
      setData(json);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="discussion__wrapper">
      <div className="pagination">
        <button className="first">처음</button>
        <button className="previous">이전</button>
        <button className="next">다음</button>
        <button className="last">마지막</button>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="discussions__container">
          {data.map((item) => {
            return <Discussion item={item} key={item.id} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Discussions;
