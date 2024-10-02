// console.log("view");

const loadCatagories = () => {
  //   console.log("catagories");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};
const displayCatagories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    console.log(item);

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoryContainer.append(button);
  });
};

loadCatagories();
