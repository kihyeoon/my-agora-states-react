const Discussion = ({ discussion, deleteDiscussion, updateDiscussion }) => {
  const { id, url, author, avatarUrl, title, createdAt, answer } = discussion;

  let date = new Date(createdAt);

  const handleUpdate = () => {
    const newAuthor = prompt("Update Author");
    const newTitle = prompt("Update Title");
    const newBody = prompt("Update Body");
    const author = newAuthor;
    const title = newTitle;
    const bodyText = newBody;
    updateDiscussion({ author, title, bodyText, id });
  };

  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={avatarUrl}
          alt={"avatar of " + author}
        />
      </div>
      <div className="discussion__content">
        <h3 className="discussion__title">
          <a href={url}>{title}</a>
        </h3>
        <div className="discussion__information">
          {`${author} / ${
            date.getMonth() + 1
          }월 ${date.getDate()}일 ${date.toLocaleTimeString()}`}
        </div>
      </div>
      <div className="discussion__answered">
        <button className="delete__button" onClick={() => deleteDiscussion(id)}>
          x
        </button>
        <button className="update__button" onClick={handleUpdate}>
          ✏️
        </button>
        <p>{answer === null ? "😵" : "✓"}</p>
      </div>
    </li>
  );
};

export default Discussion;
