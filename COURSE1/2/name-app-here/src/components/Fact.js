import { CATEGORIES } from "../data";

function Fact(props) {
  return (
    <li key={props.factObj.id} className="fact">
      <p>
        {props.factObj.text}
        <a className="source" href={props.factObj.source} target="_blank" rel="noreferrer">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: `${CATEGORIES.find((cat) => cat.name === props.factObj.category).color}`,
        }}
      >
        {props.factObj.category}
      </span>
      <div className="vote-buttons">
        <button>👍{props.factObj.votesInteresting}</button>
        <button>🤯{props.factObj.votesMindblowing}</button>
        <button>⛔️{props.factObj.votesFalse}</button>
      </div>
    </li>
  );
}
export default Fact;
