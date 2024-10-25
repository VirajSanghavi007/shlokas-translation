function getContent(input, type) {
    const content = {
        translation: {
            "1": "I invoke Agni, the divine priest of the sacrifice, the god who grants wealth, the one who is the bestower of treasures. (1)\n" +
                  "Agni, praised by the ancient sages, shines forth with new radiance. He conveys the divine to the gods. (2)\n" +
                  "Through Agni, may we acquire prosperity and nourishing substances, gaining great fame and valor. (3)\n" +
                  "Agni, whom the universal order praises in the sacrifice, approaches the gods. (4)\n" +
                  "Agni is the singer, the truth, with many splendid forms. May he go to the gods with the deities. (5)\n" +
                  "Whatever offering you, Agni, will grant us, may it be auspicious and true. (6)\n" +
                  "O Agni, you who bring plenty and blessings, bestow upon us your grace. (7)\n" +
                  "O lord of sacrifices, shining with the nectar of the cows, may you flourish in your own abode. (8)\n" +
                  "May Agni, as a father to his son, be our well-wisher. May he confer happiness on us. (9)",
            "2": "O Vayava, may you bring forth those who seek the moon; protect us with your holy truths. (1)\n" +
                  "O Vayu, in the hymns, the strong ones adorn you; the well-given moon is for the wise. (2)\n" +
                  "O Vayu, your offerings reach the giver; may the foundations of brilliance pour forth. (3)\n" +
                  "Indra and Vayu, these worthy ones come drawing near; indeed, they bring freedom. (4)\n" +
                  "O Vayu and Indra, if you listen, may the worthy ones approach to grant abundance. (5)\n" +
                  "O Vayu and Indra, bestow the liberating gifts; let the wise women strive through intellect. (6)\n" +
                  "To Mitra, a purifying lord, and to Varuna, who keep an eye on truth; may our intentions be clear and powerful. (7)\n" +
                  "In the bond of friendship, Mitra and Varuna embrace us; may the great purpose guide us. (8)\n" +
                  "The poet sings of Mitra and Varuna, born of noble lineage, for they bestow upon us safety and success. (9)",
            "3": "Ascend, O Ashvins, with your graceful energy and auspiciousness. May you come softly to the sacrifices.\n" +
                  "O Ashvins, with your mighty strength, may the mortals behold your brilliance. Channel your grace upon the wilderness.\n" +
                  "Descend, O youthful ones, with offerings; the appetites of the pious are poised. Grant us the wealth of the Rudras.\n" +
                  "Indra, may you arrive, O brilliant one, with your divine blessings. Lead us to the paths of purity.\n" +
                  "Indra, may you come with thoughtful light, supportive of the wise. Approach the Brahman with strength.\n" +
                  "Indra, may you celebrate with joy; approach the Brahman, the swift and fierce. Bestow upon us a thriving spirit.\n" +
                  "O Om, carry the universal divine closer to us. The offerings of the Dashas are splendid.\n" +
                  "All-knowing deities, grant us your purest blessings swiftly and soon. Let it be like the embrace of sisters.\n" +
                  "All-knowing deities, come with good intentions, swift and unhindered. Let those who are wise delight in strength.\n" +
                  "O Sacred One, come forth as the river Sarasvati, who flows with the maids of enhancement. Inspire us towards the ritual.\n" +
                  "O directive of the worthy thoughts, fervently igniting the minds of the intelligent. May Sarasvati bring prosperity to the rituals.\n" +
                  "Great One, O sea of depth."
        },
        mantra: {
            "1": "इन्द्रेहि॒ मत्स्यन्ध॑सो॒ विश्वे॑भिः सोम॒पर्व॑भिः। म॒हाँ अ॑भि॒ष्टिरोज॑सा॥1॥\n" +
                  "एमे॑नं सृजता सु॒ते म॒न्दिमिन्द्रा॑य म॒न्दिने॑। चक्रिं॒ विश्वा॑नि॒ चक्र॑ये॥2॥\n" +
                  "मत्स्वा॑ सुशिप्र म॒न्दिभि॒: स्तोमे॑भिर्विश्वचर्षणे। सचै॒षु सव॑ने॒ष्वा॥3॥\n" +
                  "असृ॑ग्रमिन्द्र ते॒ गिर॒: प्रति॒ त्वामुद॑हासत। अजो॑षा वृष॒भं पति॑म्॥4॥\n" +
                  "सं चो॑दय चि॒त्रम॒र्वाग् राध॑ इन्द्र॒ वरे॑ण्यम्। अस॒दित् ते॑ वि॒भु प्र॒भु॥5॥\n" +
                  "अ॒स्मान्त्सु तत्र॑ चोद॒येन्द्र॑ रा॒ये रभ॑स्वतः। तुवि॑द्युम्न॒ यश॑स्वतः॥6॥\n" +
                  "सं गोम॑दिन्द्र॒ वाज॑वद॒स्मे पृ॒थु श्रवो॑ बृ॒हत्। वि॒श्वायु॑र्धे॒ह्यक्षि॑तम्॥7॥\n" +
                  "अ॒स्मे धे॑हि॒ श्रवो॑ बृ॒हद् द्यु॒म्नं स॑हस्र॒सात॑मम्। इन्द्र॒ ता र॒थिनी॒रिष॑:॥8॥\n" +
                  "वसो॒रिन्द्रं॒ वसु॑पतिं गी॒र्भिर्गृ॒णन्त॑ ऋ॒ग्मिय॑म्। होम॒ गन्ता॑रमू॒तये॑॥9॥\n" +
                  "सु॒ते सु॑ते॒ न्यो॑कसे बृ॒हद् बृ॑ह॒त एद॒रिः। इन्द्रा॑य शू॒षम॑र्चति॥10॥",
        }
    };

    return content[type][input] || "Shloka not found.";
}

function getTranslation() {
    const shlokaInput = document.getElementById('shlokaInput').value.trim();
    document.getElementById('translationOutput').innerText = getContent(shlokaInput, 'translation');
}

function getMantra() {
    const shlokaInput = document.getElementById('shlokaInput').value.trim();
    document.getElementById('mantraOutput').innerText = getContent(shlokaInput, 'mantra');
}

