import { useState } from "react";
import { CATEGORIES, initialFacts } from "../data";

function Form({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLengh = text.length;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);

    if (text && source && category && text.length <= 200) {
      const newfact = {
        id: initialFacts.length - 1,
        text: text,
        source: source,
        category: category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: Date.now(),
      };
      setFacts((facts) => [...facts, newfact]);
      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    } else {
      console.log("it is missing some value");
    }
  }

  return (
    <div>
      <form className="fact-form " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Share a fact with the world..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <span>Maximum: {200 - textLengh}</span>
        <input
          type="text"
          placeholder="Trustworthy source..."
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Choose category:</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="btn btn-large">Post</button>
      </form>
    </div>
  );
}
export default Form;
