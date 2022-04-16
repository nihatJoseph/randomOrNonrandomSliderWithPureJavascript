let models = [
    {
        name: "Bmw 418d",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr"
    },
    {
        name: "Mazda CX3",
        image: "img/mazda.jpg",
        link: "http://www.arabalar.com.tr"
    },
    {
        name: "Volvo S60",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr"
    },
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
        link: "http://www.arabalar.com.tr"
    },
    {
        name: "Honda",
        image: "img/honda.jpg",
        link: "http://www.arabalar.com.tr"
    }
]

let index = 0;
let slaytCount = models.length;
let settings = {
    duration: "2000",
    random: true
}
let interval;

init(settings);


document.querySelector(".fa-angles-left").addEventListener("click", function () {
    index--;
    ShowSlide(index);
    console.log(index)
})

document.querySelector(".fa-angles-right").addEventListener("click", function () {
    index++;
    ShowSlide(index);
    console.log(index)
})

document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
        init(settings);
    })
})

function init(s) {

    let prev;
    interval = setInterval(() => {
        if (settings.random) {

            do {
                index = Math.floor(Math.random() * slaytCount);    
            }while(index==prev)
            prev = index;

        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            ShowSlide(index)
            index++;
            console.log(index);
        }
        ShowSlide(index);

    }, settings.duration);
}

function ShowSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);

    document.querySelector(".card-link").setAttribute("href", models[index].link);
}




