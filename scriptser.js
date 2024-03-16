var home = document.querySelector(".logo");

function openLink() {
    console.log("working");
   
    var url = "index.html";
    window.location.href = url;
}

home.addEventListener("click", openLink);
