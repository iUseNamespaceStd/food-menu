const tabs = document.getElementsByClassName('tab');
const tabContent = document.getElementsByClassName('tab-content');

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        document.querySelector('.active').classList.remove("active");
        tabContent[i].className += ' active';
    })
}

