// sidebar next page animation

let doublePageItems = [];
let sidebar = document.querySelector('#user-panel-sidebar');
let subMenuContainer = null;
let backToMenuElement = document.querySelector('.user-panel-sidebar-navigation-section');
let backToMenuSpanElement = backToMenuElement.querySelector('span');
let sideBarMenuContainer = document.querySelector('.user-panel-sidebar-list-container')
let doublePageType = null
let playListContainer = document.querySelector(".sidebar-play-list-section:not(#playlist)")
let showAllPlaylist = document.querySelector('.sidebar-play-list-title-all')
document.querySelectorAll(".user-panel-sidebar-list-container a .fa-caret-left")
    .forEach(element => {
        doublePageItems.push(element.parentElement);
    })

doublePageItems.push(showAllPlaylist)
doublePageItems.forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault();
        subMenuContainer = document.querySelector(element.getAttribute("menu-target"));
        doublePageType = element.hasAttribute("playlist")
        if (doublePageType) {
            playListContainer.classList.add("hide-sidebar-animation");
            showAllPlaylist.parentElement.classList.add("hide-sidebar-animation");
        }
        // }else {
        sideBarMenuContainer.classList.add("hide-sidebar-animation");
        // }
        subMenuContainer.classList.add("show-sidebar-animation")
        backToMenuSpanElement.innerText = element.querySelector("span").innerText;
        let mainTimeout = setTimeout(() => {
            subMenuContainer.style.display = 'block';
            sideBarMenuContainer.classList.remove("hide-sidebar-animation")
            // subMenuContainer.classList.remove("show-sidebar-animation")
            if (doublePageType) {
                playListContainer.style.display = "none";
                showAllPlaylist.parentElement.style.display = 'none'
            }
            // }else {
            sideBarMenuContainer.style.display = "none";
            // }
            backToMenuElement.style.opacity = '1';
            let timeout = setTimeout(() => {
                playListContainer.classList.remove("hide-sidebar-animation");
                showAllPlaylist.parentElement.classList.remove("hide-sidebar-animation");
                subMenuContainer.classList.remove("show-sidebar-animation")
                clearTimeout(timeout)
            }, 1000)
            clearTimeout(mainTimeout)
        }, 250)
    })
})
backToMenuElement.addEventListener("click", event => {
    if (subMenuContainer !== null) {
        backToMenuElement.style.opacity = '0';
        subMenuContainer.classList.add("hide-sidebar-animation-reverse");
        if (doublePageType) {
            playListContainer.classList.add("show-sidebar-animation-reverse");
            showAllPlaylist.parentElement.classList.add("show-sidebar-animation-reverse");
        }
        sideBarMenuContainer.classList.add("show-sidebar-animation-reverse");
        let mainTimeout = setTimeout(() => {
            if (doublePageType) {
                playListContainer.style.display = 'block';
                showAllPlaylist.parentElement.style.display = 'flex';
            }
            sideBarMenuContainer.style.display = 'block';
            subMenuContainer.classList.remove("hide-sidebar-animation-reverse")
            // subMenuContainer.classList.remove("show-sidebar-animation")
            subMenuContainer.style.display = "none";
            let timeout = setTimeout(() => {
                playListContainer.classList.remove("show-sidebar-animation-reverse");
                showAllPlaylist.parentElement.classList.remove("show-sidebar-animation-reverse");
                sideBarMenuContainer.classList.remove("show-sidebar-animation-reverse")
                clearTimeout(timeout)
            }, 1000)
            clearTimeout(mainTimeout)
        }, 250)
    }
})


// sidebar toggle animation

let sidebarToggleBtn = document.querySelector('#user-panel-sidebar-toggle');
sidebarToggleBtn.addEventListener("click", event => {
    sidebar.classList.toggle("user-panel-sidebar");
    if (sidebar.classList.contains("user-panel-sidebar")){
        sidebar.classList.add("user-panel-sidebar");
    }else {
        sidebar.classList.remove("user-panel-sidebar");
    }
})


// sidebar responsive

// function tabletScreenChanger(tabletScreen) {
//     if (tabletScreen.matches) { // If media query matches
//
//         })
//     }
// }
//
// let tabletScreen = window.matchMedia("(max-width: 1023px)")
// tabletScreenChanger(tabletScreen) // Call listener function at run time
// tabletScreen.addListener(tabletScreenChanger)


function mobileScreenChanger(tabletScreen) {
    if (tabletScreen.matches) { // If media query matches
        sidebar.classList.add("user-panel-sidebar");
    }
}

let mobileScreen = window.matchMedia("(max-width: 600px)")
mobileScreenChanger(mobileScreen) // Call listener function at run time
mobileScreen.addListener(mobileScreenChanger)