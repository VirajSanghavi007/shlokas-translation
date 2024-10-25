const mandalas = {
    "mandala_1": {
        "shlokas": [
            "इन्द्रं यज्ञं समर्पयामि वज्रं बृहस्पतिं वर्धयामि।  ॥ १ ॥",
            "यज्ञस्य वर्धनं देवेभिः समवर्तिनः।  ॥ २ ॥",
            "प्रपेदे यज्ञस्य वर्धनं देवेभिः समवर्तिनः।  ॥ ३ ॥",
            "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्।  ॥ ४ ॥",
            "सोमं यज्ञं करिष्यामि सोममं समर्पयामि।  ॥ ५ ॥"
            // Add more shlokas as needed
        ],
        "translations": [
            "I offer to Indra, the supreme protector; may I gain strength.",
            "May the divine forces elevate the sacrifice in unity.",
            "The Yajna is elevated by the divine forces.",
            "I praise Agni, the foremost priest, the divine minister of the sacrifice.",
            "I will perform the sacrifice with Soma; I dedicate it to Soma."
            // Add more translations as needed
        ]
    },
    // Add more mandalas as needed
};

document.getElementById('shloka-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const mandalaNumber = document.getElementById('shloka-input').value;
    const mandalaKey = `mandala_${mandalaNumber}`;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    if (mandalas[mandalaKey]) {
        mandalas[mandalaKey].shlokas.forEach((shloka, index) => {
            const translation = mandalas[mandalaKey].translations[index];
            outputDiv.innerHTML += `<p><strong>Shloka ${index + 1}:</strong> ${shloka}</p>`;
            outputDiv.innerHTML += `<p><strong>Translation:</strong> ${translation}</p>`;
        });
    } else {
        outputDiv.innerHTML = `<p>Invalid mandala number. Please enter a number between 1 and 10.</p>`;
    }
});
