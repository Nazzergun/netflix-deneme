function searchMenu() {
  const searchInput = document.querySelector("input");

  searchInput.addEventListener("keyup", function () {
    let data = this.value.toUpperCase();
    let li = document.querySelectorAll("ul li");

    for (let i = 0; i < li.length; i++) {
      console.log(li[i].innerHTML);
      if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
        // eşleşme var
        li[i].style.display = "";
      } else {
        // eşleşme yok
        li[i].style.display = "none";
      }
    }
  });
}

searchMenu();
