const DESSERTS_API = "json/desserts.json";
const MAIN_COURSES_API = "json/mainCourses.json";
const SIDE_DISHES_API = "json/sideDishes.json";
const STARTERS_API = "json/starters.json";

const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab-content');

init();

function init() {
    loadDesserts();
    loadMainCourses();
    loadSideDishes();
    loadStarters();
}

function handleEvent(event, tab) {
    // Loop for tab content
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Loop for tabs
    for (var j = 0; j < tabs.length; j++) {
        tabs[j].className = tabs[j].className.replace(" active", "");
    }

    // Display content of the current tab
    document.getElementById(tab).style.display = "grid";
    // Add active class to current tab
    event.currentTarget.className += " active";
}

// Active tab by default
document.querySelector('.active').click();

// Load desserts tab
function loadDesserts() {
    fetch(DESSERTS_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                const card = document.createElement("div");
                const name = document.createElement("span");
                const wrapper = document.createElement("div");
                const ratings = document.createElement("span");;
                const cardImage = document.createElement("img");
                
                card.className = "cards";
        
                name.className = "label";
                name.innerHTML = dessert.name;

                wrapper.className = "wrapper";

                cardImage.className = "cards-img";
                cardImage.src = dessert.image;

                if (dessert.ratings > 0 && dessert.ratings <= 5) {
                    for (let i = 0; i < dessert.ratings; i++) {
                        ratings.innerHTML += '<i class="fas fa-star"></i>'
                    }
                } else {
                    for (let j = 0; j < 5; j++) {
                        ratings.innerHTML += '<i class="far fa-star"></i>';
                    }
                }

                card.append(name);
                card.append(wrapper);
                wrapper.append(ratings);
                card.append(cardImage);
                document.getElementById("desserts").appendChild(card);
            })
            console.table(data);
        });  
}

// Load main courses
function loadMainCourses() {
    fetch(MAIN_COURSES_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                const card = document.createElement("div");
                const name = document.createElement("span")
                const wrapper = document.createElement("div");
                const ratings = document.createElement("span");;
                const cardImage = document.createElement("img");
                
                card.className = "cards";
        
                name.className = "label";
                name.innerHTML = dessert.name;

                wrapper.className = "wrapper";

                cardImage.className = "cards-img";
                cardImage.src = dessert.image;

                if (dessert.ratings > 0 && dessert.ratings <= 5) {
                    for (let i = 0; i < dessert.ratings; i++) {
                        ratings.innerHTML += '<i class="fas fa-star"></i>'
                    }
                } else {
                    for (let j = 0; j < 5; j++) {
                        ratings.innerHTML += '<i class="far fa-star"></i>';
                    }
                }

                card.append(name);
                card.append(wrapper);
                wrapper.append(ratings);
                card.append(cardImage);
                document.getElementById("main-course").appendChild(card);
            })
            console.table(data);
        });  
}

// Load side dishes
function loadSideDishes() {
    fetch(SIDE_DISHES_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                const card = document.createElement("div");
                const name = document.createElement("span");
                const wrapper = document.createElement("div");
                const ratings = document.createElement("span");
                const cardImage = document.createElement("img");
                
                card.className = "cards";
        
                name.className = "label";
                name.innerHTML = dessert.name;
                
                wrapper.className = "wrapper";

                cardImage.className = "cards-img";
                cardImage.src = dessert.image;

                if (dessert.ratings > 0 && dessert.ratings <= 5) {
                    for (let i = 0; i < dessert.ratings; i++) {
                        ratings.innerHTML += '<i class="fas fa-star"></i>'
                    }
                } else {
                    for (let j = 0; j < 5; j++) {
                        ratings.innerHTML += '<i class="far fa-star"></i>';
                    }
                }

                card.append(name);
                card.append(wrapper);
                wrapper.append(ratings);
                card.append(cardImage);
                document.getElementById("side-dishes").appendChild(card);
            })
            console.table(data);
        });  
}

// Load starters
function loadStarters() {
    fetch(STARTERS_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                const card = document.createElement("div");
                const name = document.createElement("span");
                const wrapper = document.createElement("div");
                const ratings = document.createElement("span");
                const cardImage = document.createElement("img");
                
                card.className = "cards";
        
                name.className = "label";
                name.innerHTML = dessert.name;

                wrapper.className = "wrapper";

                cardImage.className = "cards-img";
                cardImage.src = dessert.image;

                if (dessert.ratings > 0 && dessert.ratings <= 5) {
                    for (let i = 0; i < dessert.ratings; i++) {
                        ratings.innerHTML += '<i class="fas fa-star"></i>'
                    }
                } else {
                    for (let j = 0; j < 5; j++) {
                        ratings.innerHTML += '<i class="far fa-star"></i>';
                    }
                }

                card.append(name);
                card.append(wrapper);
                wrapper.append(ratings);
                card.append(cardImage);
                document.getElementById("starters").appendChild(card);
            })
            console.table(data);
        });  
}