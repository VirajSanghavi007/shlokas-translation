<script>
    function getContent(input, type) {
        const content = {
            translation: {
                "1": [
                    "I invoke Agni, the divine priest of the sacrifice, the god who grants wealth, the one who is the bestower of treasures. (1)",
                    "Agni, praised by the ancient sages, shines forth with new radiance. He conveys the divine to the gods. (2)",
                    "Through Agni, may we acquire prosperity and nourishing substances, gaining great fame and valor. (3)",
                    "Agni, whom the universal order praises in the sacrifice, approaches the gods. (4)",
                    "Agni is the singer, the truth, with many splendid forms. May he go to the gods with the deities. (5)",
                    "Whatever offering you, Agni, will grant us, may it be auspicious and true. (6)",
                    "O Agni, you who bring plenty and blessings, bestow upon us your grace. (7)",
                    "O lord of sacrifices, shining with the nectar of the cows, may you flourish in your own abode. (8)",
                    "May Agni, as a father to his son, be our well-wisher. May he confer happiness on us. (9)"
                ],
                "2": [
                    "O Vayava, may you bring forth those who seek the moon; protect us with your holy truths. (1)",
                    "O Vayu, in the hymns, the strong ones adorn you; the well-given moon is for the wise. (2)",
                    "O Vayu, your offerings reach the giver; may the foundations of brilliance pour forth. (3)",
                    "Indra and Vayu, these worthy ones come drawing near; indeed, they bring freedom. (4)",
                    "O Vayu and Indra, if you listen, may the worthy ones approach to grant abundance. (5)",
                    "O Vayu and Indra, bestow the liberating gifts; let the wise women strive through intellect. (6)",
                    "To Mitra, a purifying lord, and to Varuna, who keep an eye on truth; may our intentions be clear and powerful. (7)",
                    "In the bond of friendship, Mitra and Varuna embrace us; may the great purpose guide us. (8)",
                    "The poet sings of Mitra and Varuna, born of noble lineage, for they bestow upon us safety and success. (9)"
                ],
                "3": [
                    "Ascend, O Ashvins, with your graceful energy and auspiciousness. May you come softly to the sacrifices. (1)",
                    "O Ashvins, with your mighty strength, may the mortals behold your brilliance. Channel your grace upon the wilderness. (2)",
                    "Descend, O youthful ones, with offerings; the appetites of the pious are poised. Grant us the wealth of the Rudras. (3)",
                    "Indra, may you arrive, O brilliant one, with your divine blessings. Lead us to the paths of purity. (4)",
                    "Indra, may you come with thoughtful light, supportive of the wise. Approach the Brahman with strength. (5)",
                    "Indra, may you celebrate with joy; approach the Brahman, the swift and fierce. Bestow upon us a thriving spirit. (6)",
                    "O Om, carry the universal divine closer to us. The offerings of the Dashas are splendid. (7)",
                    "All-knowing deities, grant us your purest blessings swiftly and soon. Let it be like the embrace of sisters. (8)",
                    "All-knowing deities, come with good intentions, swift and unhindered. Let those who are wise delight in strength. (9)",
                    "O Sacred One, come forth as the river Sarasvati, who flows with the maids of enhancement. Inspire us towards the ritual. (10)",
                    "O directive of the worthy thoughts, fervently igniting the minds of the intelligent. May Sarasvati bring prosperity to the rituals. (11)",
                    "Great One, O sea of depth. (12)"
                ],
                "4": [
                    "O Indra, may you, the best of protectors, be pleased with us, the sons of Indu. (1)",
                    "May we, with vigor, attain your thunderbolt and greatness, the ruler of a hundred. (2)",
                    "We strive for your favor, O Indra, the one who supports the brave and fearless. (3)",
                    "Let your blessings be with us, as we call upon you. (4)",
                    "May your truth and brilliance shine upon us. (5)",
                    "We bow to you, the giver of wealth, among kings, as the guardians of immortality. (6)",
                    "May your presence be strong in our sacred performance. (7)",
                    "In joy, during rituals, may we find peace and harmony. (8)",
                    "Your mighty essence prevails over the forces of chaos. (9)",
                    "As we honor you, O Indra, may we gain victory in our endeavors. (10)",
                    "May we be nourished by your light, your gifts of prosperity. (11)"
                ],
                "5": [
                    "Om, may you, O Indra, who are seated, sing forth. O friends, with the sound of your praises,",
                    "the loftiest of the ancient ones, the lord of the living beings. Indra, associated with the moon,",
                    "may we receive wealth, may we bring prosperity and strength. You who bestows gifts,",
                    "whose abode is unyielding, we seek refuge. Whose presence the unworthy ones do not approach,",
                    "O Indra, the slayer of foes, therefore we sing to you.",
                    "May these pure offerings reach you, and the soma of the pure ones come forth.",
                    "You, O Indra, who quicken the wealth, ensure the strength of those who are powerful.",
                    "May those who are skilled in ritual enter you, O soma-Inspired Indra.",
                    "May your praise be fulfilled; may it come to you unceasingly.",
                    "May these hymns awaken you, O Indra, the hundred-minded, for our strength,",
                    "and may our prayers arise. In you, may all beings find refuge;",
                    "may no mortal harm us, O Indra, the strong one. May the lord of the riches lead us."
                ]
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
                    "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम्। वर्ध॑मानं॒ स्वे दमे॑॥८"
                ],
                "2": [
                    "९ मधुच्छन्दा वैश्वामित्रः। १-३ वायुः, ४-६ इन्द्र-वायु, ७-९ मित्रा-वरुणौ। गायत्री。\n" +
                    "वाय॒वा या॑हि दर्शते॒मे सोमारत्न॑मुत्त॒मं। सा नो॒ दातु म॑रुता॒मृ॑तं॥१॥\n" +
                    "वायुः कश्चिन् वर्ततं यद॒न्यः समं प्राच्यति। तं हि नः स॒त्यात् बृ॒हन्तम्॥२॥\n" +
                    "दृशं वायुः सङ्क्रमेद्युः। यं रुद्राः स॒माययुः। तस्मै नः स॒त्यं मयि॒वत्॥३॥\n" +
                    "इन्द्रं वायुः प्रचेतनं।  वायुमुत्तमं त्वष्टा। वायुः क॒स्मिन यो दभ्नाति॥४॥\n" +
                    "इन्द्रं वायुः पराच्यति। इन्द्रमुदेतु वायुः।  वायुः सि॒ध्यताम्॥५॥\n" +
                    "वायुः क॒स्मिन कर्ते ददतु। इन्द्रं सह्यं मन्यते। सन्दृशातामु॒दापः॥६॥"
                ],
                "3": [
                    "९ मधुच्छन्दा वैश्वामित्रः। गायत्री。\n" +
                    "यद॒क्षरं गातुम्।  अयमश्विनो म॒न्द्रः। ये मया द्युम्नं योगन्ति। तत् चिदेत्याचक्षते॥१॥\n" +
                    "गच्छताग्निष्वि॒तिम्। उश्टः। वर्धतां सिष्वे जनदासः। उश्चु अ॒हद्वरे॥२॥\n" +
                    "गच्छताग्निष्वि॒तिम्। उश्टः। वर्धतां सिष्वे जनदासः। उश्चु अ॒हद्वरे॥३॥"
                ],
                "4": [
                    "१ अग्निः । गायत्री。\n" +
                    "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्।  होतारं रत्नधातमम्॥१॥\n" +
                    "अग्निः पूर्वेभि ऋषिभिः इड्यो नूतनैरुत। स देवाँ एह वक्षति॥२॥\n" +
                    "अग्निना रयिमश्नवत् पोषमेव दिवेदिवे। यशसं वीरवत्तमम्॥३"
                ],
                "5": [
                    "९ मधुच्छन्दा वैश्वामित्रः। गायत्री।\n" +
                    "सोमा यज्ञस्याधि सम्रुति। यतयज्ञस्य रुः। मनस्पतिः।  त्वमिदं च।  इन्द्रः॥१"
                ]
            }
        };

        return content[type][input];
    }

    // Example usage
    const input = "1"; // Change to desired shloka number
    const type = "translation"; // Change to 'mantra' for mantra content
    const selectedContent = getContent(input, type);
    console.log(selectedContent);
</script>

