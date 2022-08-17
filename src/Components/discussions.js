import Discussion from "./Discussion";

const Discussions = ({
  discussions,
  loading,
  deleteDiscussion,
  updateDiscussion,
}) => {
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
          {discussions.map((discussion) => {
            return (
              <Discussion
                key={discussion.id}
                discussion={discussion}
                deleteDiscussion={deleteDiscussion}
                updateDiscussion={updateDiscussion}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Discussions;
