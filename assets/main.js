// # ✅ Aufgabenstellung

// - Für dieses Projekt verwendest du die API News, um eine Nachrichten-Website zu erstellen.
// - [Hier](https://newsapi.org/) der Link zur API.
// - Um diese API nutzen zu können und den API-Key zu erhalten, musst du dich zuerst registrieren.
// - Nachdem du die Daten von der API erhalten hast, kannst du sie verwenden, um die Nachrichten in einem ansprechenden Design anzuzeigen.


const userButton = document.querySelector(".searchButton");
const userSelectLang = document.querySelector("#sprache");
const userSort = document.querySelector("#sortierung");
const outputInGrid = document.querySelector(".outputInGrid");

const languages = ["English", "Arabic", "German", "Spanish", "French", "Hebrew", "Italian", "Dutch", "Norwegian", "Portuguese", "Russian", "Swedish", "Turkish", "Chinese"];
const languagesCodes = ["en", "ar", "de", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh"];

const sortNames = ["Newest First", "Relevancy", "Popularity"];
const sortValues = ["publishedAt", "relevancy", "popularity"];

languages.map((lan, lanCodes) => {
    userSelectLang.innerHTML += ` <option value="${languagesCodes[lanCodes]}">${lan}</option>`;
})

sortNames.map((name, valuesName) => {
    userSort.innerHTML += `<option value="${sortValues[valuesName]}">${name}</option>`;
})

const fetchNews = () => {
    const userInput = document.querySelector("#input").value;
    const selectLan = document.querySelector("#sprache").value;
    const selectSort = document.querySelector("#sortierung").value;
    console.log(selectLan);
    console.log(selectSort);

    fetch(`https://newsapi.org/v2/everything?q=${userInput}&language=${selectLan}&sortBy=${selectSort}&pageSize=40&apiKey=f2b85adb839c4fc6a4982c0f447531c1`)




    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        outputInGrid.innerHTML = "";

        data.articles.forEach((article) => {
            console.log(article);
            outputInGrid.innerHTML += `
            <div class = "gridDiv">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}"/>
                <button class= "article"><a href="${article.url}" target="_blank">Zum Artikel</a></button>
            </div>`
        })
        .catch((err) => {
            "First Fetch error", err;
        })
    });
};

userButton.addEventListener("click", fetchNews)
