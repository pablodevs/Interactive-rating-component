let result = document.querySelector("#result");
let resultCard = document.querySelector("#result-card");

let ratingCard = document.querySelector("#rating-card");
let submit = ratingCard.querySelector("#submit");
let btnsRating = ratingCard.querySelectorAll(".btn-rating");

btnsRating.forEach(btn => {
    btn.addEventListener('click', function setActiveBtn() {   
        result.innerHTML = `You selected ${btn.innerHTML} out of 5`;
    });
})

submit.addEventListener('click', function submitRating() {
    resultCard.style.display = 'flex';
    ratingCard.style.display = 'none';
})