const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
  tile.addEventListener("mouseenter", () => {
    tile.style.letterSpacing = "2px";
  });

  tile.addEventListener("mouseleave", () => {
    tile.style.letterSpacing = "0px";
  });
});
