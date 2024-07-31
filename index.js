const carouselPics = [
    {
      image: "/assets/images/ohmyFood.PNG",
      title: "Projet4-Ohmyfood",
    },
    {
      image: "/assets/images/ohmyFood2.PNG",
      title: "Projet4-Ohmyfood",
    },
  
  ];

  let index = 0;




console.log(carouselPics[index].image)
const works = document.querySelector(".works_container")
const imgCarousel = document.createElement("img");
imgCarousel.src = carouselPics[index].image;
imgCarousel.alt = "Projet";
imgCarousel.className="imgCarousel";
works.appendChild(imgCarousel);
const titleCarousel = document.createElement("h2");
titleCarousel.innerText=carouselPics[index].title;
titleCarousel.className="test"
works.appendChild(titleCarousel);

const arrow_right = document.querySelector(".arrow");
arrow_right.addEventListener("click", function () {
  index = index + 1;
  if (index > carouselPics.length - 1) {
    index = 0;
    console.log(index)
  }
  imgCarousel.src = carouselPics[index].image;

}

)

const arrow_left = document.querySelector(".arrowLeft");
arrow_left.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = carouselPics.length - 1;
  }
  imgCarousel.src = carouselPics[index].image;
}

)