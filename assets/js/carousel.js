var currentPlace = 1;

const links = document.querySelectorAll(".hero .link-item");
const heroSection = document.querySelector(".hero");

const places = [
    {
        name: "Cristo Redentor",
        description: "Oitava maravilha do mundo",
        image: "/assets/images/popular-places/cristo.jpg"
    },
    {
        name: "Maracanã",
        description: "O maior estádio do Brasil",
        image: "/assets/images/popular-places/maracana.png"
    },
    {
        name: "Jardim Botânico",
        description: "O mais antigo Jardim Botânico da América Latina",
        image: "/assets/images/popular-places/jardim_botanico.png"
    },
    {
        name: "Pão de Açúcar",
        description: "O ícone do Rio",
        image: "/assets/images/popular-places/pao_de_acucar.png"
    }
];

function showPlace() {

    if (currentPlace > 3) currentPlace = 0;

    const place = places[currentPlace];

    heroSection.style.backgroundImage = `url(${place.image})`;

    heroSection.querySelector(".title h1").innerText = place.name;
    heroSection.querySelector(".title h2").innerText = place.description;

    links.forEach(link => {
        link.classList.remove('active');
    });

    heroSection.querySelector(`.link-item[data-place="${currentPlace}"]`).classList.add("active");

    currentPlace++

}

let myInterval = setInterval(showPlace, 4000);

function onClickPlace(link) {

    clearInterval(myInterval);

    currentPlace = link.dataset.place;

    showPlace();

    myInterval = setInterval(showPlace, 4000);

}

links.forEach(link => {
    link.addEventListener("click", () => onClickPlace(link))
})