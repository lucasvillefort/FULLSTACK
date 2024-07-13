const dataArray = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source: "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "science",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
const allCategoryBtn = document.querySelector(".btn-all-categories");
const technologyBtn = document.querySelector(".btn-technology");
const btnscience = document.querySelector(".btn-science");
// Toggle form visibility of the class="fact-form hidden"
// we are gonna chance the name of class of html
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

allCategoryBtn.addEventListener("click", function () {
  createFactsList(dataArray, "all");
});

technologyBtn.addEventListener("click", function () {
  createFactsList(dataArray, "technology");
});

btnscience.addEventListener("click", function () {
  createFactsList(dataArray, "science");
});
// Create DOM elements: Render facts in list
factsList.innerHTML = "";

//createFactsList(dataArray);

function createFactsList(dataArray, category) {
  factsList.textContent = "";
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
  if (category == "all") {
    let htmlArr = dataArray.map(
      (fact) => `<li class="fact">
      <p>
      ${fact.text}
        <a
          class="source"
          href="${fact.source}"
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name == fact.category).color}">${fact.category}</span>
    </li>`
    );
    let html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
  } else {
    const categorytarget = dataArray.find((cat) => cat.category == category);
    colorTarget = CATEGORIES.find((cat) => cat.name == category);
    console.log(colorTarget);
    console.log(categorytarget);
    let htmlArr = `<li class="fact">
      <p>
      ${categorytarget.text}
        <a
          class="source"
          href="${categorytarget.source}"
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color: ${colorTarget.color}">${categorytarget.category}</span>
    </li>`;

    let html = htmlArr;
    factsList.insertAdjacentHTML("afterbegin", html);
  }
}
