const DESSERTS_API = "json/desserts.json";

const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab-content');

window.onload = init();

function init() {
    loadDesserts();
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
    document.getElementById(tab).style.display = "block";
    // Add active class to current tab
    event.currentTarget.className += " active";
}

// Active tab by default
document.querySelector('.active').click();



function loadDesserts() {
    fetch(DESSERTS_API)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                const card = document.createElement("div");
                const name = document.createElement("span");
                const cardImage = document.createElement("img");
                
                card.className = "cards";
        
                name.className = "label";
                name.innerHTML = dessert.name;

                cardImage.className = "cards-img";
                cardImage.src = dessert.image;

                card.append(name);
                card.append(cardImage);
                document.getElementById("desserts").appendChild(card);
            })
            console.table(data);
        });  
}
