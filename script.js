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

    "3": "Ascend, O Ashvins, with your graceful energy and auspiciousness. May you come softly to the sacrifices. (1)\n" +
         "O Ashvins, with your mighty strength, may the mortals behold your brilliance. Channel your grace upon the wilderness. (2)\n" +
         "Descend, O youthful ones, with offerings; the appetites of the pious are poised. Grant us the wealth of the Rudras. (3)\n" +
         "Indra, may you arrive, O brilliant one, with your divine blessings. Lead us to the paths of purity. (4)\n" +
         "Indra, may you come with thoughtful light, supportive of the wise. Approach the Brahman with strength. (5)\n" +
         "Indra, may you celebrate with joy; approach the Brahman, the swift and fierce. Bestow upon us a thriving spirit. (6)\n" +
         "O Om, carry the universal divine closer to us. The offerings of the Dashas are splendid. (7)\n" +
         "All-knowing deities, grant us your purest blessings swiftly and soon. Let it be like the embrace of sisters. (8)\n" +
         "All-knowing deities, come with good intentions, swift and unhindered. Let those who are wise delight in strength. (9)\n" +
         "O Sacred One, come forth as the river Sarasvati, who flows with the maids of enhancement. Inspire us towards the ritual. (10)\n" +
         "O directive of the worthy thoughts, fervently igniting the minds of the intelligent. May Sarasvati bring prosperity to the rituals. (11)\n" +
         "Great One, O sea of depth. (12)",

    "4": "O Indra, may you, the best of protectors, be pleased with us, the sons of Indu. (1)\n" +
         "May we, with vigor, attain your thunderbolt and greatness, the ruler of a hundred. (2)\n" +
         "We strive for your favor, O Indra, the one who supports the brave and fearless. (3)\n" +
         "Let your blessings be with us, as we call upon you. (4)\n" +
         "May your truth and brilliance shine upon us. (5)\n" +
         "We bow to you, the giver of wealth, among kings, as the guardians of immortality. (6)\n" +
         "May your presence be strong in our sacred performance. (7)\n" +
         "In joy, during rituals, may we find peace and harmony. (8)\n" +
         "Your mighty essence prevails over the forces of chaos. (9)\n" +
         "As we honor you, O Indra, may we gain victory in our endeavors. (10)\n" +
         "May we be nourished by your light, your gifts of prosperity. (11)",

    "5": "Om, may you, O Indra, who are seated, sing forth. O friends, with the sound of your praises,\n" +
         "the loftiest of the ancient ones, the lord of the living beings. Indra, associated with the moon,\n" +
         "may we receive wealth, may we bring prosperity and strength. You who bestows gifts,\n" +
         "whose abode is unyielding, we seek refuge. Whose presence the unworthy ones do not approach,\n" +
         "O Indra, the slayer of foes, therefore we sing to you.\n" +
         "May these pure offerings reach you, and the soma of the pure ones come forth.\n" +
         "You, O Indra, who quicken the wealth, ensure the strength of those who are powerful.\n" +
         "May those who are skilled in ritual enter you, O soma-Inspired Indra.\n" +
         "May your praise be fulfilled; may it come to you unceasingly.\n" +
         "May these hymns awaken you, O Indra, the hundred-minded, for our strength,\n" +
         "and may our prayers arise. In you, may all beings find refuge;\n" +
         "may no mortal harm us, O Indra, the strong one. May the lord of the riches lead us."
};
mantra = {
    "1": [
        "९ मधुच्छन्दा वैश्वामित्रः। अग्निः। गायत्री。\n" +
        "अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म्। होता॑रं रत्न॒धात॑मम्॥१॥\n" +
        "अ॒ग्निः पूर्वे॑भि॒र्ऋषि॑भि॒रीड्यो॒ नूत॑नैरु॒त। स दे॒वाँ एह व॑क्षति॥२॥\n" +
        "अ॒ग्निना॑ र॒यिम॑श्नव॒त् पोष॑मे॒व दि॒वेदि॑वे। य॒शसं॑ वी॒रव॑त्तमम्॥३॥\n" +
        "अग्ने॒ यं य॒ज्ञम॑ध्व॒रं वि॒श्वत॑: परि॒भूरसि॑। स इद् दे॒वेषु॑ गच्छति॥४॥\n" +
        "अ॒ग्निर्होता॑ क॒विक्र॑तुः स॒त्यश्चि॒त्रश्र॑वस्तमः। दे॒वो दे॒वेभि॒रा ग॑मत्॥५॥\n" +
        "यद॒ङ्ग दा॒शुषे॒ त्वमग्ने॑ भ॒द्रं क॑रि॒ष्यसि॑। तवेत् तत् स॒त्यम॑ङ्गिरः॥६॥\n" +
        "उप॑ त्वाग्ने दि॒वेदि॑वे॒ दोषा॑वस्तर्धि॒या व॒यम्। नमो॒ भर॑न्त॒ एम॑सि॥७॥\n" +
        "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम्। वर्ध॑मानं॒ स्वे दमे॑॥८"
    ],
    "2": [
        "९ मधुच्छन्दा वैश्वामित्रः। १-३ वायुः, ४-६ इन्द्र-वायु, ७-९ मित्रा-वरुणौ। गायत्री。\n" +
        "वाय॒वा या॑हि दर्शते॒मे सोमा॒ अरं॑कृताः। तेषां॑ पाहि श्रु॒धी हव॑म्॥१॥\n" +
        "वाय॑ उ॒क्थेभि॑र्जरन्ते॒ त्वामच्छा॑ जरि॒तार॑:। सु॒तसो॑मा अह॒र्विद॑:॥२॥\n" +
        "वायो॒ तव॑ प्रपृञ्च॒ती धेना॑ जिगाति दा॒शुषे॑। उ॒रू॒ची सोम॑पीतये॥३॥\n" +
        "इन्द्र॑वायू इ॒मे सु॒ता उप॒ प्रयो॑भि॒रा ग॑तम्। इन्द॑वो वामु॒शन्ति॒ हि॥४॥\n" +
        "वाय॒विन्द्र॑श्च चेतथः सु॒तानां॑ वाजिनीवदः। तवाश्व॑तस्मिन्नि॒तस्य॥५॥\n" +
        "मित्राश्वा॑ यदावनीरमित्यापि सन्नादृशः। आयुश्चेत्वः स्यश्चङ्॑गाश्च॥६॥\n" +
        "मित्रा-वरुणौ युज॑ताम, वर्तते चित्तात्युपे। दातारम॑प्रणम्॥७॥\n" +
        "तौ दा॑शं चतुःपदं शुक्लः सोदिताज्यायति। सामि॑रुयति॒।॥८॥\n" +
        "तुमजः पञ्चसु, वा यज॑स्मिन पात्यै वायुः। ये तया च गच्छन्तु॥९"
    ],
    "3": [
        "ये य॒ज्ञेशामिन् गयचाम्वाहाते गवां सरस्वती। गायत्री। धृतुं सुखं मृदनं गृहेषु। \n" +
        "अश्विना यच्छ सानुजा: फलेषु सथ्येन स्व। अघ्नोः कापिः साश्विना कर्तुं सतोशु॥१॥\n" +
        "अश्विनौ च मण्डलवेषु यः स्वरभयेन यामि। सामं च सधिं सर्त्रं न वाच्यमिति स्रुतम्॥२॥\n" +
        "आश्विनौ च सश्विना युगं च गच्छ शुचिषु। यं सर्वे जनाः सदा पात्यै पुष्टे च पामाः॥३॥\n" +
        "अग्निना बोधय घृता दीप्तं च श्वेतसिद्धिं। ज्यौतिः स्वागते लभे गभास्त्येन।॥४॥\n" +
        "शक्तिपताः फलं दुक्ष्यं सनोम् यथा ते दर्शय॥५॥\n" +
        "ओम आश्विनि; यां सपत्ना हृदं नन्वै दुवक्तिमाम॥६\n" +
        "ओमा॑सश्चर्षणीधृतो॒ विश्वे॑ देवास॒ आ ग॑त। दा॒श्वांसो॑ दा॒शुष॑: सु॒तम्॥७॥\n" +
        "विश्वे॑ दे॒वासो॑ अ॒प्तुर॑: सु॒तमा ग॑न्त॒ तूर्ण॑यः। उ॒स्रा इ॑व॒ स्वस॑राणि॥८॥\n" +
        "विश्वे॑ दे॒वासो॑ अ॒स्रिध॒ एहि॑मायासो अ॒द्रुह॑:। मेधं॑ जुषन्त॒ वह्न॑यः॥९\n" +
        "पा॒व॒का न॒: सर॑स्वती॒ वाजे॑भिर्वा॒जिनी॑वती। य॒ज्ञं व॑ष्टु धि॒याव॑सुः॥१०॥\n" +
        "चो॒द॒यि॒त्री सू॒नृता॑नां॒ चेत॑न्ती सुमती॒नाम्। य॒ज्ञं द॑धे॒ सर॑स्वती॥११॥\n" +
        "म॒हो अर्ण॒: सर॑"
    ],
    "4": [
        "४ मधुच्छन्दा वैश्वामित्रः। इन्द्रः। गायत्री।\n" +
        "इ॒न्द्रं व॒ इन्द॑वः सु॒ता उ॒त्तमं॒ गोप॑तिं पितुम्। श॒क्रं म॑रुत्व॒तीरि॑ष:॥१॥\n" +
        "स नो॑ व॒ज्रिनं॑ श॒तप॑रं॒ शत॑मिन्नं॒ शत॑क्रतुम्। श॒ची॑वस्वं॒ तवा॑महे॥२॥\n" +
        "इ॒न्द्रं वृ॑षा॒णम॑सुरं॒ म्रध॑न्वां॒ शूरं॒ च तव॑सेषि॒रम्। ह॒वन्ते॑ स॒प्तय॑जीविन:॥३॥\n" +
        "यद॒ङ्ग दा॒शुषे॒ त्वमग्ने॑ भ॒द्रं क॑रि॒ष्यसि॑। तवेत् तत् स॒त्यम॑ङ्गिरः॥४॥\n" +
        "उप॑ त्वाग्ने दि॒वेदि॑वे॒ दोषा॑वस्तर्धि॒या व॒यम्। नमो॒ भर॑न्त॒ एम॑सि॥५॥\n" +
        "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम्। वर्ध॑मानं॒ स्वे दमे॑॥६\n" +
        "इ॒न्द्रेः स॒प्तसार्यौ नृत्सं सामनो॑ मृशा। यु॒ज्यं वर्त॒ज्यङ्गासः॥७॥\n" +
        "इ॒न्द्रं स॒तेषु येन॒ चिदद्रिर्जयो दीक्षितस्य। वर्धस्व मृधवी सिषुरुः॥८॥\n" +
        "इ॒न्द्रं न वि॒द्वान् चिद्वदन्ति। यद॒ग्निना मा॑धवः॥९॥"
    ],
    "5": [
        "आ त्वेता॒ नि षी॑द॒तेन्द्र॑म॒भि प्र गा॑यत। सखा॑य॒: स्तोम॑वाहसः॥१॥\n" +
        "पु॒रू॒तमं॑ पुरू॒णामीशा॑नं॒ वार्या॑णाम्। इन्द्रं॒ सोमे॒ सचा॑ सु॒ते॥२॥\n" +
        "स घा॑ नो॒ योग॒ आ भु॑व॒त् स रा॒ये स पुरं॑ध्याम्। गम॒द्वाजे॑भि॒रा स न॑:॥३॥\n" +
        "यस्य॑ सं॒स्थे न वृ॒ण्वते॒ हरी॑ स॒मत्सु॒ शत्र॑वः। तस्मा॒ इन्द्रा॑य गायत॥४॥\n" +
        "सु॒त॒पाव्ने॑ सु॒ता इ॒मे शुच॑यो यन्ति वी॒तये॑। सोमा॑सो॒ दध्या॑शिरः॥५॥\n" +
        "त्वं सु॒तस्य॑ पी॒तये॑ स॒द्यो वृ॒द्धो अ॑जायथाः। इन्द्र॒ ज्यैष्ठ्या॑य सुक्रतो॥६॥\n" + 
        "आ त्वा॑ विशन्त्वा॒शव॒: सोमा॑स इन्द्र गिर्वणः। शं ते॑ सन्तु॒ प्रचे॑तसे॥७॥\n" +
        "त्वां स्तोमा॑ अवीवृध॒न् त्वामु॒क्था श॑तक्रतो। त्वां व॑र्धन्तु नो॒ गिर॑:॥८॥\n" +
        "अक्षि॑तोतिः सनेदि॒मं वाज॒मिन्द्र॑: सह॒स्रिण॑म्। यस्मि॒न् विश्वा॑नि॒ पौंस्या॑॥९॥\n" +
        "मा नो॒ मर्ता॑ अ॒भि द्रु॑हन्त॒नूना॑मिन्द्र गिर्वणः। ईशा॑नो यवया व॒धम्॥१०॥"
         ]
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


