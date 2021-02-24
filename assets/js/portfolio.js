//const scrollBar = document.querySelector("#scrollBar");

//let totalPageHeight = document.body.scrollHeight - window.innerHeight;






const scrollBar = document.querySelector("#scrollBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;

window.onscroll = () => {
    let newScrollHeight = (window.pageYOffset / totalPageHeight) * 100;
    scrollBar.style.height = `${newScrollHeight}%`;
    scrollBar.style.opacity = `${newScrollHeight}%`;
};

//window.addEventListener("scroll", () => {
//let newScrollHeight = window.pageYOffset / totalPageHeight;
//scrollBar.style.transform = `scale(1,${newScrollHeight})`;
//scrollBar.style.opacity = `${newScrollHeight}`;
//});//, {
// capture: true,
//passive: true
//});

window.addEventListener("resize", () => {
    clearTimeout(debounceResize);
    debounceResize = setTimeout(() => {
        totalPageHeight = document.body.scrollHeight - window.innerHeight;
    }, 250);
});

scrollBarContainer.addEventListener("click", (e) => {
    let newPageScroll = e.clientY / scrollBarContainer.offsetHeight * totalPageHeight;
    window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
    });
});