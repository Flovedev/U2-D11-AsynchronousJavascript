const getPink = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=pink-floyd', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c4ae4acbf2msh44233229ff4ffffp145753jsne924cf812d8a',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((rawBand) => {
        return rawBand.json()
    }).then((jsonBand) => {
        let container = document.getElementById('pink-container')
        for (let index = 0; index < jsonBand.data.length; index++) {
            const element = jsonBand.data[index];
            container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${element.album.cover_xl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.album.title}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duration: ${Math.round((element.duration / 60 + Number.EPSILON) * 100) / 100}</li>
                </ul>
            </div>`
        }
    })
}

const getDaft = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=daft-punk', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c4ae4acbf2msh44233229ff4ffffp145753jsne924cf812d8a',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((rawBand) => {
        return rawBand.json()
    }).then((jsonBand) => {
        let container = document.getElementById('daft-container')
        for (let index = 0; index < jsonBand.data.length; index++) {
            const element = jsonBand.data[index];
            container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${element.album.cover_xl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.album.title}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duration: ${Math.round((element.duration / 60 + Number.EPSILON) * 100) / 100}</li>
                </ul>
            </div>`
        }
    })
}

const getMetallica = () => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c4ae4acbf2msh44233229ff4ffffp145753jsne924cf812d8a',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((rawBand) => {
        return rawBand.json()
    }).then((jsonBand) => {
        let container = document.getElementById('metallica-container')
        for (let index = 0; index < jsonBand.data.length; index++) {
            const element = jsonBand.data[index];
            container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${element.album.cover_xl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.album.title}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duration: ${Math.round((element.duration / 60 + Number.EPSILON) * 100) / 100}</li>
                </ul>
            </div>`
        }
    })
}

const uniqueAlbums = () => {
    let albumsNode = []
    let albums = document.getElementsByClassName("card-text")
    for (let index = 0; index < albums.length; index++) {
        const element = albums[index].innerHTML;
        if (albumsNode.indexOf(element) === -1) {
            albumsNode.push(element)
        }
    }
    console.log(albumsNode)
}

const songList = () => {
    let modalNode = document.getElementById("song-list")
    let titles = document.getElementsByClassName("card-title")
    modalNode.innerHTML = ``
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        modalNode.innerHTML += `
        <p>${element.innerHTML}</p>`
    }
}

window.onload = function () {
    getPink();
    getDaft();
    getMetallica();
};