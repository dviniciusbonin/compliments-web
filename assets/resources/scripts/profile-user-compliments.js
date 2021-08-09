"use strict";

const getNameUser = function (key) {
    return JSON.parse(localStorage.getItem(key)).user;
};

const json = localStorage.getItem("_token");
const token = JSON.parse(json).accessToken;
fetch("http://localhost:3000/user", {
    method: "GET",
    headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}).then(res => {
    return res.json();
}).then(user => {
    localStorage.setItem("_user", JSON.stringify({
        user: user.name
    }));
    const nome = getNameUser("_user");
    document.querySelector("h3").innerHTML = `Olá, ${nome} `;
});

const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    const opcoes = document.getElementById("opcoes");

    if (opcoes.style.display === "none") {
        opcoes.style.display = "block";
    } else {
        opcoes.style.display = "none";
    }
});

const logout = document.getElementById("logout");

logout.addEventListener("click", () => {
    localStorage.removeItem("_user");
    localStorage.removeItem("_token");
    window.location = "/";
});