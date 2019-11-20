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

let avatar = document.querySelector('#avatar')
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

button.addEventListener('click', function() {
    fetch('/api/species/1', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'Accept': "application/json",
                'Content-Type': "applicaton/json"
            },
        }).then(response => response.json())
        .then(data => {
            avatar.innerHTML = `<img src="${data.avatar}" alt="${data.tax_name}">`
            family.innerHTML = `Family: ${data.family}`
            genus.innerHTML = `Genus: ${data.genus}`
            species.innerHTML = `Species: ${data.tax_name}`
            size.innerHTML = `Size: ${data.size}`
            colors.innerHTML = `Colors: ${data.colors}`
        })
    fetch('/api/com_names/2', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'Accept': "application/json",
                'Content-Type': "applicaton/json"
            },
        }).then(response => response.json())
        .then(data => {
            console.log(data.names)
            com_names.innerHTML = `Common Names: ${data.names}`
        })
})