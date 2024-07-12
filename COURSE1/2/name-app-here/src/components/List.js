import Fact from "./Fact";
function List({ facts }) {
  if (facts.length === 0) {
    return <p className="message"> No facts for this category </p>;
  }
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} factObj={fact} />
        ))}
      </ul>
    </section>
  );
}
export default List;
