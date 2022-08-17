const Form = ({ addDiscussion }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = event.target[0].value;
    const title = event.target[1].value;
    const bodyText = event.target[2].value;
    addDiscussion({ author, title, bodyText });
  };

  return (
    <section className="form__container">
      <form action method="get" className="form" onSubmit={handleSubmit}>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" className="name" id="name" required />
          </div>
          <div className="form__input--title">
            <label htmlFor="name">Enter your title: </label>
            <input type="text" className="name" id="name" required />
          </div>
          <div className="form__textbox">
            <label htmlFor="name">Your question: </label>
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              required
            ></textarea>
          </div>
        </div>
        <div className="form__submit">
          <button className="btn-submit" value="submit">
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
