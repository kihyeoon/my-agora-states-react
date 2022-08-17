import "./App.css";
import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Discussions from "./Components/Discussions";

function App() {
  const [loading, setLoading] = useState(true);
  const [discussions, setDiscussions] = useState([]);
  const origin = "http://localhost:3001";

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = async () => {
    const json = await (await fetch(`${origin}/discussions/`)).json();
    setDiscussions(json);
    setLoading(false);
  };

  const addDiscussion = ({ title, author, bodyText }) => {
    const newDiscussionData = {
      title,
      author,
      bodyHTML: bodyText,
    };
    fetch(`${origin}/discussions/`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 201) {
        getDiscussion();
      }
    });
  };

  const deleteDiscussion = (id) => {
    fetch(`${origin}/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || res.status === 204) {
        getDiscussion();
      }
    });
  };

  const updateDiscussion = ({ title, author, bodyText, id }) => {
    const newDiscussionData = {
      title,
      author,
      bodyHTML: bodyText,
    };
    fetch(`${origin}/discussions/${id}`, {
      method: "PUT",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 200) {
        getDiscussion();
      }
    });
  };

  return (
    <div className="App">
      <h1>My Agora States</h1>
      <Form addDiscussion={addDiscussion} />
      <Discussions
        discussions={discussions}
        loading={loading}
        deleteDiscussion={deleteDiscussion}
        updateDiscussion={updateDiscussion}
      />
    </div>
  );
}

export default App;
