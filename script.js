function getTranslation() {
    const shlokaInput = document.getElementById('shlokaInput').value.trim();
    console.log("Input Shloka for Translation:", shlokaInput); // Log the input
    let translation = ""; 

    if (shlokaInput === "1") {
        translation = "Translation of Shloka 1";
    } else if (shlokaInput === "2") {
        translation = "Translation of Shloka 2";
    } else {
        translation = "Shloka not found.";
    }

    document.getElementById('translationOutput').innerText = translation;
}

function getMantra() {
    const shlokaInput = document.getElementById('shlokaInput').value.trim();
    console.log("Input Shloka for Mantra:", shlokaInput); // Log the input
    let mantra = ""; 

    if (shlokaInput === "1") {
        mantra = "Mantra for Shloka 1";
    } else if (shlokaInput === "2") {
        mantra = "Mantra for Shloka 2";
    } else {
        mantra = "Shloka not found.";
    }

    document.getElementById('mantraOutput').innerText = mantra;
