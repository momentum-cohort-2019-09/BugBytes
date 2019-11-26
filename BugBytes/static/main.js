// Image uploading

// var images = [];
// dropzone.getQueuedFiles().forEach(function(file) {
//     let image = {
//         dataURL: file.dataURL,
//         name: file.name,
//         type: file.type,
//         size: file.size,
//     };
//     images.push(image);
// });
// sessionStorage.setItem("images", JSON.stringify(images));

// var images = JSON.parse(sessionStorage.getItem('images'));
// images.forEach(function(image) {
//     dropzone.files.push(image);
//     dropzone.emit("addedfile", image);
//     dropzone.emit("thumbnail", image, image.dataURL);
//     dropzone.emit("complete", image);
// });
// dropzone.options.maxFiles = dropzone.options.maxFiles - images.length;
// console.log(sessionStorage)





// Bug info rendering

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + ' = ')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

let image = document.querySelector('#image')
let kingdom = document.querySelector('#kingdom')
let phylum = document.querySelector('#phylum')
let bug_class = document.querySelector('#class')
let order = document.querySelector('#order')
let family = document.querySelector('#family')
let genus = document.querySelector('#genus')
let species = document.querySelector('#species')
let size = document.querySelector('#size')
let colors = document.querySelector('#colors')
let button = document.querySelector('#grabber')
let com_names = document.querySelector('#com_names')
let desc = document.querySelector('#desc')



if (button) {
    button.addEventListener('click', function() {
        fetch('/api/species/3/', {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                    'Accept': "application/json",
                    'Content-Type': "applicaton/json"
                },
            }).then(response => response.json())
            .then(data => {
                // avatar.innerHTML = `<img src="${data.avatar}" alt="${data.tax_name}">`
                family.innerHTML = `Family: ${data.family}`
                genus.innerHTML = `Genus: ${data.genus}`
                species.innerHTML = `Species: ${data.tax_name}`
                size.innerHTML = `Size: ${data.size}`
                colors.innerHTML = `Colors: ${data.colors}`
                desc.innerHTML = `Description: ${data.desc}`
            })
        fetch('/api/com_names/8', {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                    'Accept': "application/json",
                    'Content-Type': "applicaton/json"
                },
            }).then(response => response.json())
            .then(data => {
                console.log(data.name)
                com_names.innerHTML = `Common Names: ${data.name}`
            })
        fetch('/api/photos/26', {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                    'Accept': "application/json",
                    'Content-Type': "applicaton/json"
                },
            }).then(response => response.json())
            .then(data => {
                console.log(data.image)
                image.innerHTML = `<img src="${data.image}" alt="${data.tax_name}">`
            })
    })
}

let slideIndex = 1;
showSlides(slideIndex);

// Setting a default so that it will move by itself 
function plusSlides(n = 1) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.setInterval(plusSlides, 5000)
