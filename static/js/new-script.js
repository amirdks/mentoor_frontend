function tabletScreenChanger(tabletScreen) {
    if (tabletScreen.matches) { // If media query matches
        let trendStorySlider = document.querySelector(".comments-story-swiper")
        trendStorySlider.setAttribute("slides-per-view", 5)
        let skillsSlider = document.querySelector(".home-skills-swiper")
        skillsSlider.setAttribute("slides-per-view", 5)
    } else {
        console.log("na")
    }
}

let tabletScreen = window.matchMedia("(max-width: 1023px)")
tabletScreenChanger(tabletScreen) // Call listener function at run time
tabletScreen.addListener(tabletScreenChanger)


function mobileScreenChanger(tabletScreen) {
    if (tabletScreen.matches) { // If media query matches
        let trendStorySlider = document.querySelector(".comments-story-swiper")
        trendStorySlider.setAttribute("slides-per-view", 2)
        let skillsSlider = document.querySelector(".home-skills-swiper")
        skillsSlider.setAttribute("slides-per-view", 4)
        let productCategorySlider = document.querySelectorAll(".product-category-swiper")
        productCategorySlider.forEach(slider => {
            slider.setAttribute("slides-per-view", 2)
        })
        let blogSlider = document.querySelector(".blog-slider-container")
        blogSlider.setAttribute("space-between", 10)
    } else {
        console.log("na")
    }
}

let mobileScreen = window.matchMedia("(max-width: 424px)")
mobileScreenChanger(mobileScreen) // Call listener function at run time
mobileScreen.addListener(mobileScreenChanger)


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("home-navbar-responsive-container").style.bottom = "0";
        console.log("avali play shod")
    } else {
        document.getElementById("home-navbar-responsive-container").style.bottom = "-100px";
        console.log("dovomi play shod")
    }
    prevScrollpos = currentScrollPos;
}