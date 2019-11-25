insectImg = document.getElementById('insectPic');
imgData = getBase64Image(insectImg);
localStorage.setItem('imgData', imgData);

function getBase64Image() {
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

let dataImage = localStorage.getItem('imgData');
insectImg = document.getElementById('user-pic');
insectImg.src = "data:image/png;base64," + dataImage;




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


// Image uploading

// function uploadImage(event) {
//     var reader = new FileReader();
//     var name = event.target.files[0].name;
//     reader.addEventListener("load", function() {
//         if (this.result && localStorage) {
//             window.localStorage.setItem(name, this.result);
//         } else {
//             alert();
//         }
//     });
//     reader.readAsDataURL(event.target.files[0]);
// }