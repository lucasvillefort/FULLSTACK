import { useEffect, useState } from "react";
import "./style.css";

import CategoryFilter from "./components/CategoryFilter";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

import Loader from "./components/Loader";
import { initialFacts } from "./data";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(
    function () {
      // useEffect will active that function automaticlly ever that the app is reload
      // we can put others functions over here too
      setIsLoading(true);
      setFacts(initialFacts);
      let query = facts;
      if (currentCategory !== "all" && currentCategory !== "") {
        query = query.filter((q) => q.category === currentCategory);
        console.log(query);
        setFacts(query);
        setIsLoading(false);
      } else if (currentCategory === "all") {
        setFacts(initialFacts);
        setIsLoading(false);
      }
      query = facts;
    },

    [currentCategory]
  );

  return (
    <div>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <Form setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <List facts={facts} />}
      </main>
    </div>
  );
}

export default App;
