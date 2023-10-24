// var headerHeight;
var currentNavElement;

var scrollOffset = '50';

function scrollToElement(id) {

    id = id.replace('#', '');

    // Do Maths
    var headerHeight = document.getElementById("header").offsetHeight;
    var target = document.getElementById(id).offsetTop - headerHeight - scrollOffset;

    window.scrollTo({ top: target, behavior: 'smooth' });
}

function addCustomScroll() {

    // Find all nav-links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add custom scroll event
    navLinks.forEach(el => el.addEventListener('click', e => {
        e.preventDefault();
        var id = el.getAttribute('href');
        scrollToElement(id);
        changeNavBarCurrent(el);
    }))
}

function changeNavBarCurrent(el) {

    if (currentNavElement != null) {
        currentNavElement.classList.remove('current');
    }
    else {
        document.getElementsByClassName('not-current')[0].classList.remove('not-current');
    }

    currentNavElement = el;
    el.classList.add('current')

}

// https://bobbyhadz.com/blog/load-html-page-in-a-div-using-javascript
function loadPage(file, intoID) {
    const box = document.getElementById(intoID);

    fetch(file)
        .then(response => response.text())
        .then(html => {
            box.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}

window.onload = function () {
    // headerHeight = document.getElementById("header").offsetHeight;
    addCustomScroll();
    loadPage('about.html', 'about');
    loadPage('gameplay.html', 'gameplay');
    loadPage('plot.html', 'plot');
}



