const opener = document.querySelector(".search-button");
const popup = document.querySelector(".search-hotel-popup");
const form = popup.querySelector("form");
const arrival = popup.querySelector("[name=arrival-date]");
const departure = popup.querySelector("[name=departure-date]");
const adult = popup.querySelector("[name=adult-guest]");
const children = popup.querySelector("[name=children-guest]");
let isStorageSupport = true;

try {
  adultStorage = localStorage.getItem("adult");
  childrenStorage = localStorage.getItem("children");
} catch (error) {
  isStorageSupport = false;
}


opener.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("close-popup");
  popup.classList.toggle("show-popup");
  popup.classList.remove("error-popup")
  arrival.focus();
  if (adultStorage && childrenStorage) {
    adult.value = adultStorage;
    children.value = childrenStorage;
  }
});

form.addEventListener("submit", function (event) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    event.preventDefault();
    popup.classList.add("error-popup");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
})

window.addEventListener("keydown", function (event) {
  if ( event.keyCode === 27) {
    if (popup.classList.contains("close-popup")) {
    } else {
      event.preventDefault();
      popup.classList.remove("show-popup");
      popup.classList.add("close-popup")
      popup.classList.remove("error-popup")
    }
  }
})
