// var headerHeight;

function scrollToElement(id) {

    id = id.replace('#', '');

    // Do Maths
    var headerHeight = document.getElementById("header").offsetHeight;
    var target = document.getElementById(id).offsetTop - headerHeight;

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
    }))
}

window.onload = function(){
    // headerHeight = document.getElementById("header").offsetHeight;
    addCustomScroll();
}
