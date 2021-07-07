const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab-content');


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