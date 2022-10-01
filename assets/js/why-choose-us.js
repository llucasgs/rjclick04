const reasonItems = document.querySelectorAll(".reasons .reason-item");

reasonItems.forEach((item) => {
    item.addEventListener("click", function () {
        reasonItems.forEach(item => item.classList.remove("active"));

        item.classList.add("active");
    })
});