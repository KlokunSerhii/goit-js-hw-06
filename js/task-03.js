const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// !===============================================================
// const imageEl = document.querySelector(".gallery");

// images.forEach((image) => {
//   const imageTag = document.createElement("img");
//   const listEl = document.createElement("li");
//   imageTag.src = image.url;
//   imageTag.alt = image.alt;

//   listEl.append(imageTag);
//   imageEl.append(listEl);

//    imageTag.style.width = "250px";
//   listEl.style.gap = "10px";
//   imageEl.style.display = "flex";
// });
// ! ===========================================================
const list = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li><img class="foto" src=${image.url} width = '250' alt='${image.alt}'></img></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.style.display = "flex";
list.style.flexWrap = "column-reverse";
list.style.listStyle = "none";
list.style.gap = "10px";
