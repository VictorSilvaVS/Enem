const h1 = document.getElementById("h1-parallax"),
      banner = document.getElementById("banner"),
      button = document.getElementById("button-parallax");

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if (scrollPosition > 150){
        banner.style.backgroundSize = "150%";
        h1.style.opacity = 0;
        h1.style.transform = "translateY(-40px) scale(0.9)";
        button.style.opacity = 0;
        button.style.transform = "translateY(-40px) scale(0.8)";
    } else {
        banner.style.backgroundSize = "100%";
        h1.style.opacity = 1;
        h1.style.transform = "translateY(0) scale(1)";
        button.style.opacity = 1;
        button.style.transform = "translateY(0) scale(1)";
    }
};
document.addEventListener("scroll", onScroll);
