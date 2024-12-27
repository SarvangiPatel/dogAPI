





let mainSection = document.getElementById("main");

function fetchdata() {
    fetch('https://www.freetestapi.com/api/v1/dogs')
        .then((res) => res.json())
        .then((data) => {
            card(data);
        })
        .catch((err) => console.log("Error fetching data:", err));
}
fetchdata();

function card(data) {
    const store = data.map((ele) =>
        adddata(ele.id, ele.image, ele.name, ele.origin, ele.size)
    );
    mainSection.innerHTML = store.join('');
}

function adddata(id, image, name, origin, size) {
    return `
    <div class="card" data-id="${id}">
        <div class="card-img">
            <img src="${image}" width="200px" alt="${name}">
        </div>
        <div class="card-body">
            <h4 class="card-name">${name}</h4>
            <p class="card-category">origin: ${origin}</p>
            <p class="card-price">size: ${size}</p>
        </div>
    </div>
    `;
}






