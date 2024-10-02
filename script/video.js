// console.log("view");

const loadCatagories = () => {
  //   console.log("catagories");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((err) => console.log(err));
};
const displayCatagories = (data) => {
  console.log(data);
};

loadCatagories();
