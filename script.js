const mandalas = {
    "mandala_1": {
        "shlokas": [
            "श्लोक 1 text...",
            "श्लोक 2 text...",
            // Add more shlokas for Mandala 1
        ],
        "translations": [
            "Translation of shloka 1...",
            "Translation of shloka 2...",
            // Add more translations for Mandala 1
        ]
    },
    // Add more mandalas as needed
};

function getTranslation() {
    const input = document.getElementById("shlokaInput").value;
    const output = document.getElementById("output");
    const mandalaData = mandalas["mandala_1"]; // Adjust if you want to use different mandalas

    const index = parseInt(input) - 1; // Convert input to index
    if (index >= 0 && index < mandalaData.shlokas.length) {
        output.innerHTML = `<h2>Shloka:</h2><p>${mandalaData.shlokas[index]}</p>
                            <h2>Translation:</h2><p>${mandalaData.translations[index]}</p>`;
    } else {
        output.innerHTML = "<p>Invalid shloka number. Please enter a valid number.</p>";
    }
}
