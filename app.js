import database from './database.json' assert {type: 'json'};

let app = document.getElementById("app")

for (let i = 0; i < database.length; i++) {
    app.innerHTML +=
        `<div class="container">
            <span class="container-items">Title: ${database[i].title}</span>
            <span class="container-items">URL: ${database[i].url}</span>
            <span class="container-items">Username: ${database[i].username}</span>
            <span class="container-password">Password: ${database[i].password}
                <span>
                    <button>SHOW</button>
                    <button>COPY</button>
                </span>
            </span>
        </div>`
}