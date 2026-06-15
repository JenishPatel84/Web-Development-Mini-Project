const button = document.getElementById("btn");

button.addEventListener("click", fetchUser);

function fetchUser() {

    const username = document
        .getElementById("username")
        .value
        .trim();

    const cardContainer =
        document.getElementById("cardContainer");

    if (username === "") {
        alert("Please enter a GitHub username");
        return;
    }

    const requestUrl =
        `https://api.github.com/users/${username}`;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", requestUrl);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

            if (xhr.status === 200) {

                const userData =
                    JSON.parse(xhr.responseText);

                cardContainer.innerHTML = `
                    <div class="card">
                        <img src="${userData.avatar_url}" alt="Avatar">

                        <h2>
                            ${userData.name || userData.login}
                        </h2>

                        <p>
                            ${userData.bio || "No Bio Available"}
                        </p>

                        <div class="info">
                            <p><strong>Username:</strong> ${userData.login}</p>
                            <p><strong>Location:</strong> ${userData.location || "Not Available"}</p>
                            <p><strong>Followers:</strong> ${userData.followers}</p>
                            <p><strong>Following:</strong> ${userData.following}</p>
                            <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
                        </div>
                    </div>
                `;

            } else {

                cardContainer.innerHTML = `
                    <p class="error">
                        GitHub user not found!
                    </p>
                `;
            }
        }
    };

    xhr.send();
}