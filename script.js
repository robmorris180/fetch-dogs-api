const DOG_API_URL = "https://dog.ceo/api/breeds/image/random/3";
const dogContainerElement = document.querySelector(".dogs");
const fetchDogButton = document.querySelector(".btn");

async function fetchDogs() {
  // clear dogs
  dogContainerElement.innerHTML = "";

  // get dogs
  const response = await fetch(DOG_API_URL);
  const data = await response.json();
  const dogs = data.message;

  dogs.forEach(dogImage => {
    // <div class="col-sm">
    //   <div class="card">
    //     <img
    //       src="https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"
    //       class="card-img-top"
    //       alt=""
    //     />
    //   </div>
    // </div>

    // create document markup
    const columnElement = document.createElement("div");
    columnElement.classList.add("col-sm");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);

    const dogImageElement = document.createElement("img");
    dogImageElement.classList.add("card-img-top");
    dogImageElement.src = dogImage;
    dogImageElement.alt = "";
    cardElement.appendChild(dogImageElement);

    // add markup to container
    dogContainerElement.appendChild(columnElement);
  });
}

// fetch dogs click handler
fetchDogButton.addEventListener("click", fetchDogs);
