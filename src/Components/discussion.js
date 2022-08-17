import React from "react";

const Discussion = ({ item }) => {
  let date = new Date(item.createdAt);
  return (
    <li key={item.id} className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={item.avatarUrl}
          alt={"avatar of " + item.author}
        />
      </div>
      <div className="discussion__content">
        <h3 className="discussion__title">
          <a href={item.url}>{item.title}</a>
        </h3>
        <div className="discussion__information">
          {`${item.author} / ${
            date.getMonth() + 1
          }월 ${date.getDate()}일 ${date.toLocaleTimeString()}`}
        </div>
      </div>
      <div className="discussion__answered">
        <button className="delete button">x</button>
        <button className="delete button">✏️</button>
        <p>{item.answer === null ? "😵" : "✓"}</p>
      </div>
    </li>
  );
};

export default Discussion;
