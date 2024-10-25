function getTranslation() {
    const shlokaInput = document.getElementById('shlokaInput').value.trim();
    console.log("Input Shloka for Translation:", shlokaInput); // Log the input
    let translation = ""; 

    if (shlokaInput === "1") {
        translation = "I invoke Agni, the divine priest of the sacrifice, the god who grants wealth, the one who is the bestower of treasures. (1)\n"
        "Agni, praised by the ancient sages, shines forth with new radiance. He conveys the divine to the gods. (2)\n"
        "Through Agni, may we acquire prosperity and nourishing substances, gaining great fame and valor. (3)\n"
        "Agni, whom the universal order praises in the sacrifice, approaches the gods. (4)\n"
        "Agni is the singer, the truth, with many splendid forms. May he go to the gods with the deities. (5)\n"
        "Whatever offering you, Agni, will grant us, may it be auspicious and true. (6)\n"
        "O Agni, you who bring plenty and blessings, bestow upon us your grace. (7)\n"
        "O lord of sacrifices, shining with the nectar of the cows, may you flourish in your own abode. (8)\n"
        "May Agni, as a father to his son, be our well-wisher. May he confer happiness on us. (9)"
    }
    } else if (shlokaInput === "2") {
        translation = "O Vayava, may you bring forth those who seek the moon; protect us with your holy truths. 1.\n"
        "O Vayu, in the hymns, the strong ones adorn you; the well-given moon is for the wise. 2.\n"
        "O Vayu, your offerings reach the giver; may the foundations of brilliance pour forth. 3.\n"
        "Indra and Vayu, these worthy ones come drawing near; indeed, they bring freedom. 4.\n"
        "O Vayu and Indra, if you listen, may the worthy ones approach to grant abundance. 5.\n"
        "O Vayu and Indra, bestow the liberating gifts; let the wise women strive through intellect. 6.\n"
        "To Mitra, a purifying lord, and to Varuna, who keep an eye on truth; may our intentions be clear and powerful. 7.\n"
        "In the bond of friendship, Mitra and Varuna embrace us; may the great purpose guide us. 8.\n"
        "The poet sings of Mitra and Varuna, born of noble lineage, for they bestow upon us safety and success. 9.";
      else if (sholkaInput === "3") {
        translation = "Ascend, O Ashvins, with your graceful energy and auspiciousness. May you come softly to the sacrifices.\n"
    "O Ashvins, with your mighty strength, may the mortals behold your brilliance. Channel your grace upon the wilderness.\n"
    "Descend, O youthful ones, with offerings; the appetites of the pious are poised. Grant us the wealth of the Rudras.\n"
    "Indra, may you arrive, O brilliant one, with your divine blessings. Lead us to the paths of purity.\n"
    "Indra, may you come with thoughtful light, supportive of the wise. Approach the Brahman with strength.\n"
    "Indra, may you celebrate with joy; approach the Brahman, the swift and fierce. Bestow upon us a thriving spirit.\n"
    "O Om, carry the universal divine closer to us. The offerings of the Dashas are splendid.\n"
    "All-knowing deities, grant us your purest blessings swiftly and soon. Let it be like the embrace of sisters.\n"
    "All-knowing deities, come with good intentions, swift and unhindered. Let those who are wise delight in strength.\n"
    "O Sacred One, come forth as the river Sarasvati, who flows with the maids of enhancement. Inspire us towards the ritual.\n"
    "O directive of the worthy thoughts, fervently igniting the minds of the intelligent. May Sarasvati bring prosperity to the rituals.\n"
    "Great One, O sea of depth.";
      }
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
        mantra = "इन्द्रेहि॒ मत्स्यन्ध॑सो॒ विश्वे॑भिः सोम॒पर्व॑भिः। म॒हाँ अ॑भि॒ष्टिरोज॑सा॥1॥",
        "एमे॑नं सृजता सु॒ते म॒न्दिमिन्द्रा॑य म॒न्दिने॑। चक्रिं॒ विश्वा॑नि॒ चक्र॑ये॥2॥",
        "मत्स्वा॑ सुशिप्र म॒न्दिभि॒: स्तोमे॑भिर्विश्वचर्षणे। सचै॒षु सव॑ने॒ष्वा॥3॥",
        "असृ॑ग्रमिन्द्र ते॒ गिर॒: प्रति॒ त्वामुद॑हासत। अजो॑षा वृष॒भं पति॑म्॥4॥",
        "सं चो॑दय चि॒त्रम॒र्वाग् राध॑ इन्द्र॒ वरे॑ण्यम्। अस॒दित् ते॑ वि॒भु प्र॒भु॥5॥",
        "अ॒स्मान्त्सु तत्र॑ चोद॒येन्द्र॑ रा॒ये रभ॑स्वतः। तुवि॑द्युम्न॒ यश॑स्वतः॥6॥",
        "सं गोम॑दिन्द्र॒ वाज॑वद॒स्मे पृ॒थु श्रवो॑ बृ॒हत्। वि॒श्वायु॑र्धे॒ह्यक्षि॑तम्॥7॥",
        "अ॒स्मे धे॑हि॒ श्रवो॑ बृ॒हद् द्यु॒म्नं स॑हस्र॒सात॑मम्। इन्द्र॒ ता र॒थिनी॒रिष॑:॥8॥",
        "वसो॒रिन्द्रं॒ वसु॑पतिं गी॒र्भिर्गृ॒णन्त॑ ऋ॒ग्मिय॑म्। होम॒ गन्ता॑रमू॒तये॑॥9॥",
        "सु॒ते सु॑ते॒ न्यो॑कसे बृ॒हद् बृ॑ह॒त एद॒रिः। इन्द्रा॑य शू॒षम॑र्चति॥10॥";
    } else if (shlokaInput === "2") {
        mantra = "गाय॑न्ति त्वा गाय॒त्रिणोऽर्च॑न्त्य॒र्कम॒र्किण॑:। ब्र॒ह्माण॑स्त्वा शतक्रत॒ उद् वं॒शमि॑व येमिरे॥1॥",
        "यत् सानो॒: सानु॒मारु॑ह॒द् भूर्यस्प॑ष्ट॒ कर्त्व॑म्। तदिन्द्रो॒ अर्थं॑ चेतति यू॒थेन॑ वृ॒ष्णिरे॑जति॥2॥",
        "यु॒क्ष्वा हि के॒शिना॒ हरी॒ वृष॑णा कक्ष्य॒प्रा। अथा॑ न इन्द्र सोमपा गि॒रामुप॑श्रुतिं चर॥3॥",
        "एहि॒ स्तोमाँ॑ अ॒भि स्व॑रा॒ ऽभि गृ॑णी॒ह्या रु॑व। ब्रह्म॑ च नो वसो॒ सचेन्द्र॑ य॒ज्ञं च॑ वर्धय ॥4॥",
        "उ॒क्थमिन्द्रा॑य॒ शंस्यं॒ वर्ध॑नं पुरुनि॒ष्षिधे॑। श॒क्रो यथा॑ सु॒तेषु॑ णो रा॒रण॑त् स॒ख्येषु॑ च॥5॥",
        "तमित् स॑खि॒त्व ई॑महे॒ तं रा॒ये तं सु॒वीर्ये॑। स श॒क्र उ॒त न॑: शक॒दिन्द्रो॒ वसु॒ दय॑मानः॥6॥",
        "सु॒वि॒वृतं॑ सुनि॒रज॒मिन्द्र॒ त्वादा॑त॒मिद्यश॑:। गवा॒मप॑ व्र॒जं वृ॑धि कृणु॒ष्व राधो॑ अद्रिवः॥7॥",
        "न॒हि त्वा॒ रोद॑सी उ॒भे ऋ॑घा॒यमा॑ण॒मिन्व॑तः। जेष॒: स्व॑र्वतीर॒पः सं गा अ॒स्मभ्यं॑ धूनुहि॥8॥",
        "आश्रु॑त्कर्ण श्रु॒धी हवं॒ नू चि॑द्दधिष्व मे॒ गिर॑:। इन्द्र॒ स्तोम॑मि॒मं मम॑ कृ॒ष्वा यु॒जश्चि॒दन्त॑रम् ॥9॥",
        "वि॒द्मा हि त्वा॒ वृष॑न्तमं॒ वाजे॑षु हवन॒श्रुत॑म्। वृष॑न्तमस्य हूमह ऊ॒तिं स॑हस्र॒सात॑माम्॥10॥";
      else if (shlokaInput === "3") {
         mantra = "एन्द्र॑ सान॒सिं र॒यिं स॒जित्वा॑नं सदा॒सह॑म्। वर्षि॑ष्ठमू॒तये॑ भर॥1॥",
        "नि येन॑ मुष्टिह॒त्यया॒ नि वृ॒त्रा रु॒णधा॑महै। त्वोता॑सो॒ न्यर्व॑ता॥2॥",
        "इन्द्र॒ त्वोता॑स॒ आ व॒यं वज्रं॑ घ॒ना द॑दीमहि। जये॑म॒ सं यु॒धि स्पृध॑:॥3॥",
        "व॒यं शूरे॑भि॒रस्तृ॑भि॒रिन्द्र॒ त्वया॑ यु॒जा व॒यम्। सा॒स॒ह्याम॑ पृतन्य॒तः॥4॥",
        "म॒हाँ इन्द्र॑: प॒रश्च॒ नु म॑हि॒त्वम॑स्तु व॒ज्रिणे॑। द्यौर्न प्र॑थि॒ना शव॑:॥5॥",
        "स॒मो॒हे वा॒ य आश॑त॒ नर॑स्तो॒कस्य॒ सनि॑तौ। विप्रा॑सो वा धिया॒यव॑:॥6॥",
        "यः कु॒क्षिः सो॑म॒पात॑मः समु॒द्र इ॑व॒ पिन्व॑ते। उ॒र्वीरापो॒ न का॒कुद॑:॥7॥",
        "ए॒वा ह्य॑स्य सू॒नृता॑ विर॒प्शी गोम॑ती म॒ही। प॒क्वा शाखा॒ न दा॒शुषे॑॥8॥",
        "ए॒वा हि ते॒ विभू॑तय ऊ॒तय॑ इन्द्र॒ माव॑ते। स॒द्यश्चि॒त् सन्ति॑ दा॒शुषे॑॥9॥",
        "ए॒वा ह्य॑स्य॒ काम्या॒ स्तोम॑ उ॒क्थं च॒ शंस्या॑। इन्द्रा॒ ता वाद्यय॑ते॥10॥";
      }
    } else {
        mantra = "Shloka not found.";
    }

    document.getElementById('mantraOutput').innerText = mantra;
