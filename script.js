<script>
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
    "1": [
        "९ मधुच्छन्दा वैश्वामित्रः। अग्निः। गायत्री。\n" +
        "अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म्। होता॑रं रत्न॒धात॑मम्॥१॥\n" +
        "अ॒ग्निः पूर्वे॑भि॒र्ऋषि॑भि॒रीड्यो॒ नूत॑नैरु॒त। स दे॒वाँ एह व॑क्षति॥२॥\n" +
        "अ॒ग्निना॑ र॒यिम॑श्नव॒त् पोष॑मे॒व दि॒वेदि॑वे। य॒शसं॑ वी॒रव॑त्तमम्॥३॥\n" +
        "अग्ने॒ यं य॒ज्ञम॑ध्व॒रं वि॒श्वत॑: परि॒भूरसि॑। स इद् दे॒वेषु॑ गच्छति॥४॥\n" +
        "अ॒ग्निर्होता॑ क॒विक्र॑तुः स॒त्यश्चि॒त्रश्र॑वस्तमः। दे॒वो दे॒वेभि॒रा ग॑मत्॥५॥\n" +
        "यद॒ङ्ग दा॒शुषे॒ त्वमग्ने॑ भ॒द्रं क॑रि॒ष्यसि॑। तवेत् तत् स॒त्यम॑ङ्गिरः॥६॥\n" +
        "उप॑ त्वाग्ने दि॒वेदि॑वे॒ दोषा॑वस्तर्धि॒या व॒यम्। नमो॒ भर॑न्त॒ एम॑सि॥७॥\n" +
        "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम्। वर्ध॑मानं॒ स्वे दमे॑॥८॥\n" +
        "स न॑: पि॒तेव॑ सू॒नवे ऽग्ने॑ सूपाय॒नो भ॑व। सच॑स्वा नः स्व॒स्तये॑॥९"
    ],
    "2": [
        "९ मधुच्छन्दा वैश्वामित्रः। १-३ वायुः, ४-६ इन्द्र-वायु, ७-९ मित्रा-वरुणौ। गायत्री。\n" +
        "वाय॒वा या॑हि दर्शते॒मे सोमा॒ अरं॑कृताः। तेषां॑ पाहि श्रु॒धी हव॑म्॥१॥\n" +
        "वाय॑ उ॒क्थेभि॑र्जरन्ते॒ त्वामच्छा॑ जरि॒तार॑:। सु॒तसो॑मा अह॒र्विद॑:॥२॥\n" +
        "वायो॒ तव॑ प्रपृञ्च॒ती धेना॑ जिगाति दा॒शुषे॑। उ॒रू॒ची सोम॑पीतये॥३॥\n" +
        "इन्द्र॑वायू इ॒मे सु॒ता उप॒ प्रयो॑भि॒रा ग॑तम्। इन्द॑वो वामु॒शन्ति॒ हि॥४॥\n" +
        "वाय॒विन्द्र॑श्च चेतथः सु॒तानां॑ वाजिनीवसू। तावा या॑त॒मुप॑ द्र॒वत्॥५॥\n" +
        "वाय॒विन्द्र॑श्च सुन्व॒त आ या॑त॒मुप॑ निष्कृ॒तम्। म॒क्ष्वि१त्था धि॒या न॑रा॥६॥\n" +
        "मि॒त्रं हु॑वे पू॒तद॑क्षं॒ वरु॑णं च रि॒शाद॑सम्। धियं॑ घृ॒ताचीं॒ साध॑न्ता॥७॥\n" +
        "ऋ॒तेन॑ मित्रावरुणावृतावृधावृतस्पृशा। क्रतुं॑ बृ॒हन्त॑माशाथे॥८॥\n" +
        "क॒वी नो॑ मि॒त्रावरु॑णा तुविजा॒ता उ॑रु॒क्षया॑। दक्षं॑ दधाते अ॒पस॑म्॥९"
    ],
    "3": [
        "१२ मधुच्छन्दा वैश्वामित्रः। १-३ अश्विनौ, ४-६ इन्द्र, ७-९ विश्वेदेवाः,\n" +
        "१०-१२ सरस्वती। गायत्री।\n" +
        "अश्वि॑ना॒ यज्व॑री॒रिषो॒ द्रव॑त्पाणी॒ शुभ॑स्पती। पुरु॑भुजा चन॒स्यत॑म्॥१॥\n" +
        "अश्वि॑ना॒ पुरु॑दंससा॒ नरा॒ शवी॑रया धि॒या। धिष्ण्या॒ वन॑तं॒ गिर॑:॥२॥\n" +
        "दस्रा॑ यु॒वाक॑वः सु॒ता नास॑त्या वृ॒क्तब॑र्हिषः। आ या॑तं रुद्रवर्तनी॥३॥\n" +
        "इन्द्रा या॑हि चित्रभानो सु॒ता इ॒मे त्वा॒यव॑:। अण्वी॑भि॒स्तना॑ पू॒तास॑:॥४॥\n" +
        "इन्द्रा या॑हि धि॒येषि॒तो विप्र॑जूतः सु॒ताव॑तः। उप॒ ब्रह्मा॑णि वा॒घत॑:॥५॥\n" +
        "इन्द्रा या॑हि॒ तूतु॑जान॒ उप॒ ब्रह्मा॑णि हरिवः। सु॒ते द॑धिष्व न॒श्चन॑:॥६॥\n" +
        "ओमा॑सश्चर्षणीधृतो॒ विश्वे॑ देवास॒ आ ग॑त। दा॒श्वांसो॑ दा॒शुष॑: सु॒तम्॥७॥\n" +
        "विश्वे॑ दे॒वासो॑ अ॒प्तुर॑: सु॒तमा ग॑न्त॒ तूर्ण॑यः। उ॒स्रा इ॑व॒ स्वस॑राणि॥८॥\n" +
        "विश्वे॑ दे॒वासो॑ अ॒स्रिध॒ एहि॑मायासो अ॒द्रुह॑:। मेधं॑ जुषन्त॒ वह्न॑यः॥९\n" +
        "पा॒व॒का न॒: सर॑स्वती॒ वाजे॑भिर्वा॒जिनी॑वती। य॒ज्ञं व॑ष्टु धि॒याव॑सुः॥१०॥\n" +
        "चो॒द॒यि॒त्री सू॒नृता॑नां॒ चेत॑न्ती सुमती॒नाम्। य॒ज्ञं द॑धे॒ सर॑स्वती॥११॥\n" +
        "म॒हो अर्ण॒: सर॑"
    ]
}
        };

        return content[type][input] || "Shloka not found.";
    }

    function getTranslation() {
        const shlokaInput = document.getElementById('shlokaInput').value.trim();
        // Clear the mantra output before displaying the translation
        document.getElementById('mantraOutput').innerText = ''; 
        // Display the translation
        const translation = getContent(shlokaInput, 'translation');
        document.getElementById('translationOutput').innerText = translation;

        // Log the input and output for debugging
        console.log(`Input: ${shlokaInput}, Translation: ${translation}`);
    }

    function getMantra() {
        const shlokaInput = document.getElementById('shlokaInput').value.trim();
        // Clear the translation output before displaying the mantra
        document.getElementById('translationOutput').innerText = ''; 
        // Display the mantra
        const mantra = getContent(shlokaInput, 'mantra');
        document.getElementById('mantraOutput').innerText = mantra;

        // Log the input and output for debugging
        console.log(`Input: ${shlokaInput}, Mantra: ${mantra}`);
    }
</script>


