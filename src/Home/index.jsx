import React, { useState } from "react";
import "./index.scss";
import { useTranslation, Trans, I18nextProvider } from "react-i18next";
import i18n from "i18next";


i18n.init({
  resources: {
    english: {
      translation: {
        heading: "Complaint Management System",
        file_complaint: "File a Complaint",
        file_complaint_desc:
          "Submit your complaint through our simple form. Our team will review it thoroughly and respond promptly to ensure your concerns are addressed.",
        track_status: "Track Complaint Status",
        track_status_desc:
          "Stay informed about your complaint's progress with our tracking system. Receive real-time updates to know the current status and any actions taken.",
        faqs: "FAQs",
        faqs_desc:
          "Find quick answers to common questions in our FAQs. This section is designed to provide clarity on our services and the complaint process.",
        contact_us: "Contact Us",
        contact_us_desc:
          "For further assistance or specific inquiries, reach out to our dedicated support team. We're here to help you navigate any challenges you may face.",
        change_language: "Change Language",
      },
    },

    hindi: {
      translation: {
        heading: "शिकायत प्रबंधन प्रणाली",
        file_complaint: "शिकायत दर्ज करें",
        file_complaint_desc:
          "हमारे सरल फॉर्म के माध्यम से अपनी शिकायत दर्ज करें। हमारी टीम इसे ध्यानपूर्वक समीक्षा करेगी और आपकी समस्याओं के समाधान के लिए शीघ्र प्रतिक्रिया देगी।",
        track_status: "शिकायत की स्थिति का पता लगाएं",
        track_status_desc:
          "हमारी ट्रैकिंग प्रणाली के माध्यम से अपनी शिकायत की प्रगति पर नज़र रखें। वर्तमान स्थिति और उठाए गए कदमों के बारे में अद्यतन जानकारी प्राप्त करें।",
        faqs: "सामान्य प्रश्न",
        faqs_desc:
          "हमारे सामान्य प्रश्न अनुभाग में आम सवालों के त्वरित जवाब प्राप्त करें। यह अनुभाग हमारे सेवाओं और शिकायत प्रक्रिया पर स्पष्टता प्रदान करने के लिए डिज़ाइन किया गया है।",
        contact_us: "हमसे संपर्क करें",
        contact_us_desc:
          "अधिक सहायता या विशिष्ट प्रश्नों के लिए, हमारी समर्पित सहायता टीम से संपर्क करें। हम किसी भी चुनौती से निपटने में आपकी मदद के लिए यहाँ हैं।",
        change_language: "भाषा बदलें",
      },
    },
    urdu: {
      translation: {
        heading: "شکایت کا نظام",
        file_complaint: "شکایت درج کریں",
        file_complaint_desc:
          "ہمارے سادہ فارم کے ذریعے اپنی شکایت بھیجیں۔ ہماری ٹیم اسے غور سے دیکھے گی اور آپ کی شکایات کا فوری جواب دے گی تاکہ آپ کی مشکلات کا حل کیا جا سکے۔",
        track_status: "شکایت کا اسٹیٹس ٹریک کریں",
        track_status_desc:
          "ہماری ٹریکنگ سسٹم کے ذریعے اپنی شکایت کی پیشرفت کے بارے میں مطلع رہیں۔ موجودہ صورتحال اور اٹھائے گئے اقدامات کی تازہ کاری حاصل کریں۔",
        faqs: "عمومی سوالات",
        faqs_desc:
          "ہمارے عمومی سوالات میں عام سوالات کے تیز جوابات تلاش کریں۔ یہ سیکشن ہمارے سروسز اور شکایت کے عمل کو سمجھنے میں مدد فراہم کرتا ہے۔",
        contact_us: "ہم سے رابطہ کریں",
        contact_us_desc:
          "مزید مدد یا مخصوص سوالات کے لئے، ہماری معاونت ٹیم سے رابطہ کریں۔ ہم آپ کے کسی بھی چیلنج میں مدد کے لئے حاضر ہیں۔",
        change_language: "زبان تبدیل کریں",
      },
    },
    panjabi: {
      translation: {
        heading: "ਸ਼ਿਕਾਇਤ ਪ੍ਰਬੰਧਨ ਸਿਸਟਮ",
        file_complaint: "ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ",
        file_complaint_desc:
          "ਸਾਡੇ ਸਧਾਰਨ ਫਾਰਮ ਰਾਹੀਂ ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਭੇਜੋ। ਸਾਡੀ ਟੀਮ ਇਸ ਨੂੰ ਧਿਆਨ ਨਾਲ ਸਮੀਖਿਆ ਕਰੇਗੀ ਅਤੇ ਤੁਹਾਡੀਆਂ ਚਿੰਤਾਵਾਂ ਦਾ ਨਿਵਾਰਨ ਕਰਨ ਲਈ ਜਲਦੀ ਜਵਾਬ ਦੇਵੇਗੀ।",
        track_status: "ਸ਼ਿਕਾਇਤ ਦੀ ਸਥਿਤੀ ਟਰੈਕ ਕਰੋ",
        track_status_desc:
          "ਸਾਡੀ ਟਰੈਕਿੰਗ ਸਿਸਟਮ ਰਾਹੀਂ ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਦੀ ਪ੍ਰਗਤੀ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ। ਵਰਤਮਾਨ ਸਥਿਤੀ ਅਤੇ ਕੀਤੀਆਂ ਗਈਆਂ ਕਾਰਵਾਈਆਂ ਬਾਰੇ ਅਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ।",
        faqs: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
        faqs_desc:
          "ਸਾਡੇ ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲਾਂ ਵਿੱਚ ਆਮ ਸਵਾਲਾਂ ਦੇ ਤੁਰੰਤ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ। ਇਹ ਸੈਕਸ਼ਨ ਸਾਡੇ ਸੇਵਾਵਾਂ ਅਤੇ ਸ਼ਿਕਾਇਤ ਪ੍ਰਕਿਰਿਆ ਬਾਰੇ ਸਪਸ਼ਟਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ।",
        contact_us: "ਸਾਨੂੰ ਸੰਪਰਕ ਕਰੋ",
        contact_us_desc:
          "ਹੋਰ ਮਦਦ ਜਾਂ ਖਾਸ ਪ੍ਰਸ਼ਨਾਂ ਲਈ, ਸਾਡੇ ਸਮਰਪਿਤ ਸਮਰਥਨ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ। ਅਸੀਂ ਤੁਹਾਡੇ ਕਿਸੇ ਵੀ ਚੁਣੌਤੀ ਦਾ ਸਾਹਮਣਾ ਕਰਨ ਲਈ ਮਦਦ ਕਰਨ ਲਈ ਇੱਥੇ ਹਾਂ।",
        change_language: "ਭਾਸ਼ਾ ਬਦਲੋ",
      },
    },
    marathi: {
      translation: {
        heading: "तक्रार व्यवस्थापन प्रणाली",
        file_complaint: "तक्रार दाखल करा",
        file_complaint_desc:
          "आमच्या सोप्या फॉर्मद्वारे तुमची तक्रार सबमिट करा. आमची टीम याची काळजीपूर्वक पुनरावलोकन करेल आणि तुमच्या समस्यांचे निराकरण करण्यासाठी त्वरीत प्रतिसाद देईल.",
        track_status: "तक्रारीची स्थिती ट्रॅक करा",
        track_status_desc:
          "आमच्या ट्रॅकिंग सिस्टीमच्या माध्यमातून तुमच्या तक्रारीतील प्रगतीबद्दल माहिती मिळवा. सद्यस्थिती आणि घेतलेल्या कृतींबद्दल ताज्या अद्यतनांसह माहिती मिळवा.",
        faqs: "वारंवार विचारले जाणारे प्रश्न",
        faqs_desc:
          "आमच्या वारंवार विचारल्या जाणाऱ्या प्रश्नांमध्ये सामान्य प्रश्नांची त्वरित उत्तरे मिळवा. ही विभाग सेवा आणि तक्रार प्रक्रियेबद्दल स्पष्टता प्रदान करण्यासाठी तयार करण्यात आली आहे.",
        contact_us: "आमच्याशी संपर्क साधा",
        contact_us_desc:
          "अधिक मदत किंवा विशिष्ट प्रश्नांसाठी, आमच्या समर्पित सहाय्यक टीमशी संपर्क साधा. तुमच्या कोणत्याही आव्हानाला तोंड देण्यासाठी आम्ही येथे आहोत.",
        change_language: "भाषा बदला",
      },
    },
    odia: {
      translation: {
        heading: "ଅଭିଯୋଗ ପରିଚାଳନା ପ୍ରଣାଳୀ",
        file_complaint: "ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
        file_complaint_desc:
          "ଆମ ସରଳ ଫର୍ମ ଦ୍ୱାରା ଆପଣଙ୍କର ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ। ଆମର ଟିମ୍ ଏହାକୁ ସାବଧାନ ଭାବେ ସମୀକ୍ଷା କରିବେ ଏବଂ ଆପଣଙ୍କ ଅଭିଯୋଗ ସମାଧାନ ପାଇଁ ତ୍ୱରିତ ପ୍ରତିକ୍ରିୟା ଦେବେ।",
        track_status: "ଅଭିଯୋଗର ସ୍ଥିତି ଟ୍ରାକ୍ କରନ୍ତୁ",
        track_status_desc:
          "ଆମ ଟ୍ରାକିଂ ସିଷ୍ଟମ ମାଧ୍ୟମରେ ଆପଣଙ୍କର ଅଭିଯୋଗର ଅଗ୍ରଗତି ସମ୍ବନ୍ଧରେ ଅବଗତ ରୁହନ୍ତୁ। ସମ୍ପ୍ରତି ସ୍ଥିତି ଏବଂ ନିଆ ଯାଇଥିବା କାର୍ଯ୍ୟ ସମ୍ବନ୍ଧରେ ତଥ୍ୟ ଅଧିକ ପ୍ରକାଶ ପାଇଁ ଅପଡେଟ୍ ହେଉଛି।",
        faqs: "ପାଲିପାଇ ପଚରାଯାଇଥିବା ପ୍ରଶ୍ନଗୁଡିକ",
        faqs_desc:
          "ଆମ ପାଲିପାଇ ପଚରାଯାଇଥିବା ପ୍ରଶ୍ନଗୁଡିକରେ ସାଧାରଣ ପ୍ରଶ୍ନଗୁଡିକ ପାଇଁ ତ୍ୱରିତ ଉତ୍ତର ପାଇଁ। ଏହି ବିଭାଗ ଆମ ସେବା ଏବଂ ଅଭିଯୋଗ ପ୍ରକ୍ରିୟା ସମ୍ବନ୍ଧରେ ସ୍ପଷ୍ଟତା ପ୍ରଦାନ କରିବା ପାଇଁ ଡିଜାଇନ୍ କରାଯାଇଛି।",
        contact_us: "ଆମସହିତ ସମ୍ପର୍କ କରନ୍ତୁ",
        contact_us_desc:
          "ଅଧିକ ସହାୟତା କିମ୍ବା ନିର୍ଦିଷ୍ଟ ପ୍ରଶ୍ନଗୁଡିକ ପାଇଁ, ଆମର ନିଷ୍ଠାବାନ ସହାୟକ ଦଳ ସହିତ ସମ୍ପର୍କ କରନ୍ତୁ। ଆମେ ଆପଣଙ୍କର ସମସ୍ତ ସମସ୍ୟାକୁ ହାଣ୍ଡଲ କରିବାକୁ ମାନସିକତା ରଖିଥାଉ।",
        change_language: "ଭାଷା ପରିବର୍ତ୍ତନ",
      },
    },
    tamil: {
      translation: {
        heading: "புகார் மேலாண்மை அமைப்பு",
        file_complaint: "புகாரை அளிக்கவும்",
        file_complaint_desc:
          "எங்கள் எளிய படிவத்தின் மூலம் உங்கள் புகாரை சமர்ப்பிக்கவும். எங்கள் குழு அதை கவனமாக மதிப்பீடு செய்து உங்கள் கவலைகளை தீர்க்க விரைவில் பதிலளிக்கவும்.",
        track_status: "புகார் நிலையைத் தொடர்க",
        track_status_desc:
          "எங்கள் பின்தொடர்பு முறையின் மூலம் உங்கள் புகார் முன்னேற்றத்தைப் பற்றி அறியவும். தற்போதைய நிலை மற்றும் எடுக்கப்பட்ட நடவடிக்கைகள் பற்றிய நேரடி புதுப்பிப்புகளைப் பெறுங்கள்.",
        faqs: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        faqs_desc:
          "எங்கள் அடிக்கடி கேட்கப்படும் கேள்விகளில் பொதுவான கேள்விகளுக்கான விரைவான பதில்களைப் பெறுங்கள். எங்கள் சேவைகள் மற்றும் புகார் செயல்முறையை தெளிவுபடுத்த இந்த பகுதி வடிவமைக்கப்பட்டுள்ளது.",
        contact_us: "எங்களை தொடர்புகொள்ளுங்கள்",
        contact_us_desc:
          "மேலும் உதவிகளுக்கு அல்லது குறிப்பிட்ட கேள்விகளுக்கு, எங்கள் தனித்துவமான ஆதரவு குழுவைத் தொடர்பு கொள்ளுங்கள். நீங்கள் எதிர்கொள்ளக்கூடிய எந்தவொரு சவாலுக்கும் உதவ எங்களால் முடியும்.",
        change_language: "மொழியை மாற்றவும்",
      },
    },

    dogri: {
      translation: {
        heading: "शिकायत प्रबंधन प्रणाली",
        file_complaint: "शिकायत दर्ज करें",
        file_complaint_desc:
          "साडे आसान फॉर्म दे जरिए अपनी शिकायत भेजो। साडी टीम इसनु ध्यान नाल देखेगी अते तुहाडी चिंता दूर करने लेई जदों-तदों जवाब देगी।",
        track_status: "शिकायत दा हाल ट्रैक करो",
        track_status_desc:
          "साडी ट्रैकिंग प्रणाली दे जरिए अपनी शिकायत दे प्रगति बारे जानकारी रखो। असल हालात अते कीते गए कदमां बारे अपडेट प्राप्त करो।",
        faqs: "अक्सर पुछे गए सवाल",
        faqs_desc:
          "साडे अक्सर पुछे गए सवालां विच्चों आम सवालां दे जवाब लबो। एह खंड साडे सेवावां अते शिकायत प्रक्रिया नु स्पष्टीकरण प्रदान करन लेई डिजाइन किता गया है।",
        contact_us: "साडे नाल संपर्क करो",
        contact_us_desc:
          "अधिक सहायता या विशिष्ट प्रश्नां लेई, साडी समर्पित सहायता टीम नाल संपर्क करो। असीं तुहाडे हर चुनौती नाल निपटण लेई इत्ते हीं।",
        change_language: "भाषा बदलो",
      },
    },

    kannada: {
      translation: {
        heading: "ತಮ್ಮುಳಿಕೆ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ",
        file_complaint: "ತಮ್ಮುಳಿಕೆ ಸಲ್ಲಿಸಿ",
        file_complaint_desc:
          "ನಮ್ಮ ಸರಳ ಫಾರ್ಮ್ ಮೂಲಕ ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಸಲ್ಲಿಸಿ. ನಮ್ಮ ತಂಡವು ಪರಿಶೀಲನೆ ಮಾಡಿ ಮತ್ತು ಬೇಗನೆ ಸ್ಪಂದಿಸುತ್ತದೆ.",
        track_status: "ತಮ್ಮುಳಿಕೆಯ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ",
        track_status_desc:
          "ನಿಮ್ಮ ದೂರುಗಳ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಪರಿಷ್ಕೃತ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.",
        faqs: "ಪ್ರಶ್ನೋತ್ತರಗಳು",
        faqs_desc: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳ ಉತ್ತರಕ್ಕಾಗಿ ನಮ್ಮ FAQ ಅನ್ನು ನೋಡಿ.",
        contact_us: "ನಮಗೆ ಸಂಪರ್ಕಿಸಿ",
        contact_us_desc: "ನಿಖರ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮ ಸಹಾಯಕ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        change_language: "ಭಾಷೆ ಬದಲಿಸಿ",
      },
    },
    assamese: {
      translation: {
        heading: "অভিযোগ পৰিচালনা ব্যৱস্থা",
        file_complaint: "অভিযোগ দাখিল কৰক",
        file_complaint_desc:
          "আমাৰ সহজ ফৰ্মৰ জৰিয়তে আপোনাৰ অভিযোগ দাখিল কৰক। আমাৰ দল পৰ্যালোচনা কৰি সঁহাৰি প্ৰদান কৰিব।",
        track_status: "অভিযোগৰ স্থিতি অনুসৰণ কৰক",
        track_status_desc: "আপোনাৰ অভিযোগৰ স্থিতি জানিবলৈ আমাক অনুসৰণ কৰক।",
        faqs: "প্ৰশ্নাৱলী",
        faqs_desc: "সাধাৰণ প্ৰশ্নৰ উত্তৰ পাবৰ বাবে প্ৰশ্নাৱলী চাওক।",
        contact_us: "আমাক যোগাযোগ কৰক",
        contact_us_desc: "বিশেষ সহায়ৰ বাবে আমাক যোগাযোগ কৰক।",
        change_language: "ভাষা সলনি কৰক",
      },
    },
    bengali: {
      translation: {
        heading: "অভিযোগ ব্যবস্থাপনা পদ্ধতি",
        file_complaint: "অভিযোগ দাখিল করুন",
        file_complaint_desc:
          "আমাদের সরল ফর্মের মাধ্যমে আপনার অভিযোগ দাখিল করুন। দ্রুত সাড়া দেওয়া হবে।",
        track_status: "অভিযোগের অবস্থা ট্র্যাক করুন",
        track_status_desc: "আপনার অভিযোগের প্রগতি সম্পর্কে জানুন।",
        faqs: "প্রশ্নাবলী",
        faqs_desc: "প্রশ্ন ও উত্তরের জন্য প্রশ্নাবলী দেখুন।",
        contact_us: "যোগাযোগ করুন",
        contact_us_desc: "বিশেষ সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।",
        change_language: "ভাষা পরিবর্তন করুন",
      },
    },
    bodo: {
      translation: {
        heading: "फिरायनि माङायनि",
        file_complaint: "फिराय दाखल करय",
        file_complaint_desc: "हमर सरल फोर्मारि फाइँगराइ",
        track_status: "फिरायनि माङा देखय",
        track_status_desc: "हमर सुधार प्राप्त करय",
        faqs: "सामान्य प्रश्न",
        faqs_desc: "सामान्य प्रश्न देखय",
        contact_us: "हमर संपर्क करय",
        contact_us_desc: "मदतीन खातिर हमर संपर्क करय",
        change_language: "भाषा बदलय",
      },
    },
    gujarati: {
      translation: {
        heading: "ફરિયાદ વ્યવસ્થાપન",
        file_complaint: "ફરિયાદ નોંધાવો",
        file_complaint_desc: "અમારા સરળ ફોર્મથી તમારી ફરિયાદ નોંધાવો.",
        track_status: "ફરિયાદની સ્થિતિ ટ્રેક કરો",
        track_status_desc: "ફરિયાદની સ્થિતિ તપાસો.",
        faqs: "પ્રશ્નોત્તરી",
        faqs_desc: "અમારા FAQ માં સામાન્ય પ્રશ્નોના ઉત્તર મેળવો.",
        contact_us: "સંપર્ક કરો",
        contact_us_desc: "મદદ માટે અમારો સંપર્ક કરો.",
        change_language: "ભાષા બદલો",
      },
    },
    kashmiri: {
      translation: {
        heading: "شکایت کا نظام",
        file_complaint: "شکایت درج کریں",
        file_complaint_desc: "ہمارے آسان فارم کے ذریعے اپنی شکایت درج کریں۔",
        track_status: "شکایت کی حیثیت معلوم کریں",
        track_status_desc: "شکایت کی حیثیت جانیں۔",
        faqs: "عمومی سوالات",
        faqs_desc: "عمومی سوالات کے جوابات دیکھیں۔",
        contact_us: "رابطہ کریں",
        contact_us_desc: "مدد کے لیے ہم سے رابطہ کریں۔",
        change_language: "زبان تبدیل کریں",
      },
    },
    konkani: {
      translation: {
        heading: "तक्रार व्यवस्थापन",
        file_complaint: "तक्रार दाखल करा",
        file_complaint_desc: "आमच्या फॉर्मद्वारे तुमची तक्रार दाखल करा.",
        track_status: "तक्रार स्थिती पाहा",
        track_status_desc: "तक्रार स्थिती ट्रॅक करा.",
        faqs: "सामान्य प्रश्न",
        faqs_desc: "सामान्य प्रश्नांचे उत्तर पहा.",
        contact_us: "संपर्क साधा",
        contact_us_desc: "मदतीसाठी आम्हाला संपर्क साधा.",
        change_language: "भाषा बदला",
      },
    },
    maithili: {
      translation: {
        heading: "शिकायत प्रबंधन प्रणाली",
        file_complaint: "शिकायत दर्ज करु",
        file_complaint_desc: "हमर फॉर्म भरू।",
        track_status: "शिकायतके स्थित",
        track_status_desc: "प्रगति निरीक्षण करु।",
        faqs: "सामान्य प्रश्न",
        faqs_desc: "सामान्य प्रश्नके उत्तर देखु।",
        contact_us: "संपर्क करु",
        contact_us_desc: "मदतक लेल संपर्क करु।",
        change_language: "भाषा बदलु",
      },
    },
    malayalam: {
      translation: {
        heading: "പരാതി മാനേജ്മെന്റ്",
        file_complaint: "പരാതി നല്‍കുക",
        file_complaint_desc: "പരാതി ഫോമില്‍ നല്‍കുക.",
        track_status: "പരാതി നില",
        track_status_desc: "പരാതി നിരീക്ഷണം ചെയ്യുക.",
        faqs: "പതിവു ചോദ്യങ്ങൾ",
        faqs_desc: "ചോദ്യങ്ങളുടെ ഉത്തരം കാണുക.",
        contact_us: "ബന്ധപ്പെടുക",
        contact_us_desc: "സഹായത്തിനായി ബന്ധപ്പെടുക.",
        change_language: "ഭാഷ മാറ്റുക",
      },
    },
    meitei: {
      translation: {
        heading: "প্ৰতিবেদন পদ্ধতি",
        file_complaint: "অভিযোগ দাখিল করুন",
        file_complaint_desc: "আমাদের ফর্ম পূরণ করুন।",
        track_status: "অভিযোগের অবস্থা",
        track_status_desc: "অভিযোগের পর্যবেক্ষণ।",
        faqs: "প্ৰশ্ন-উত্তৰ",
        faqs_desc: "প্ৰশ্নৰ উত্তৰ সন্নিবিষ্ট।",
        contact_us: "যোগাযোগ কৰক",
        contact_us_desc: "সহায়ৰ বাবে যোগাযোগ কৰক।",
        change_language: "ভাষা বদল",
      },
    },
    nepali: {
      translation: {
        heading: "गुनासो व्यवस्थापन प्रणाली",
        file_complaint: "गुनासो दर्ता गर्नुहोस्",
        file_complaint_desc: "सजिलो फर्ममा आफ्नो गुनासो दर्ता गर्नुहोस्।",
        track_status: "गुनासोको स्थिति हेर्नुहोस्",
        track_status_desc: "गुनासोको स्थिति ट्र्याक गर्नुहोस्।",
        faqs: "सामान्य प्रश्न",
        faqs_desc: "सामान्य प्रश्नहरूको उत्तर पाउनुहोस्।",
        contact_us: "सम्पर्क गर्नुहोस्",
        contact_us_desc: "मद्तका लागि हामीलाई सम्पर्क गर्नुहोस्।",
        change_language: "भाषा परिवर्तन गर्नुहोस्",
      },
    },
    sanskrit: {
      translation: {
        heading: "अभियोग प्रबंधन प्रणाली",
        file_complaint: "अभियोग प्रविष्ट करें",
        file_complaint_desc: "सरल फॉर्म में प्रविष्ट करें।",
        track_status: "अभियोग स्थिति",
        track_status_desc: "प्रगति निरीक्षण करें।",
        faqs: "सामान्य प्रश्न",
        faqs_desc: "सामान्य प्रश्न देख सकते हैं।",
        contact_us: "सम्पर्क",
        contact_us_desc: "सम्पर्क करें।",
        change_language: "भाषा बदलें",
      },
    },
    santhali: {
      translation: {
        heading: "ᱞᱟᱭᱦᱤᱜ ᱟᱫᱟᱢ ᱛᱤᱜᱚᱛ",
        file_complaint: "ᱞᱟᱭᱦᱤᱜ ᱞᱤᱛᱨᱚᱡ",
        file_complaint_desc: "ᱪᱚᱦᱲᱚᱱ ᱛᱟ ᱞᱤᱧᱤᱛᱤᱠᱚᱸ।",
        track_status: "ᱞᱟᱭᱦᱤᱜ ᱛᱮ ᱞᱟᱟᱞᱤ",
        track_status_desc: "ᱞᱟᱭᱦᱤᱜ ᱛᱚᱢ ᱚᱱᱟᱢ ᱯᱤᱭᱚᱸ",
        faqs: "ᱞᱤᱜᱽᱲᱚᱞ ᱮ ᱞᱮᱞᱠ ᱠᱚ",
        faqs_desc: "ᱞᱤᱜᱽᱲᱚᱞᱛᱽᱠ ᱮ ᱠᱟ ᱮᱡᱟ।",
        contact_us: "ᱯᱤᱠᱩᱜ",
        contact_us_desc: "ᱞᱤᱧ ᱞᱚᱜᱟᱜ",
        change_language: "ᱟᱝᱦᱟ ᱠᱤᱲ ᱞᱞᱞ",
      },
    },
    sindhi: {
      translation: {
        heading: "شکایت مینجمنٹ سسٹم",
        file_complaint: "شکایت درج کریں",
        file_complaint_desc: "سادہ فارم کے ذریعے شکایت جمع کریں۔",
        track_status: "شکایت کی حیثیت ٹریک کریں",
        track_status_desc: "شکایت کی حالت معلوم کریں۔",
        faqs: "عمومی سوالات",
        faqs_desc: "عمومی سوالات کے جوابات دیکھیں۔",
        contact_us: "ہم سے رابطہ کریں",
        contact_us_desc: "مدد کے لیے ہم سے رابطہ کریں۔",
        change_language: "زبان تبدیل کریں",
      },
    },

    telugu: {
      translation: {
        heading: "ఫిర్యాదు నిర్వహణ వ్యవస్థ",
        file_complaint: "ఫిర్యాదు చేయండి",
        file_complaint_desc:
          "మా సులభమైన ఫారమ్ ద్వారా మీ ఫిర్యాదు చేయండి. మా బృందం దానిని జాగ్రత్తగా సమీక్షిస్తుంది మరియు మీ సమస్యలను పరిష్కరించడానికి వేగంగా స్పందిస్తుంది.",
        track_status: "ఫిర్యాదు స్థితిని ట్రాక్ చేయండి",
        track_status_desc:
          "మా ట్రాకింగ్ సిస్టమ్ ద్వారా మీ ఫిర్యాదులో పురోగతిని తెలుసుకోండి. ప్రస్తుత స్థితి మరియు తీసుకున్న చర్యలపై తాజా అప్డేట్‌లను పొందండి.",
        faqs: "సాధారణ ప్రశ్నలు",
        faqs_desc:
          "సాధారణ ప్రశ్నలకు మా తరచుగా అడిగే ప్రశ్నల్లో త్వరితగతిన సమాధానాలు పొందండి. మా సేవలు మరియు ఫిర్యాదు ప్రక్రియపై స్పష్టతను అందించేందుకు ఈ విభాగం రూపొందించబడింది.",
        contact_us: "మమ్మల్ని సంప్రదించండి",
        contact_us_desc:
          "మరింత సహాయం లేదా ప్రత్యేక ప్రశ్నల కోసం, మా అంకితమైన సహాయ బృందాన్ని సంప్రదించండి. మీరు ఎదుర్కొనే ఏదైనా సవాలును ఎదుర్కోవడంలో మేము మీకు సహాయపడగలము.",
        change_language: "భాషను మార్చండి",
      },
    },
  },
  lng: "english",
  fallbackLng: "english",
  interpolation: { escapeValue: false },
  
});
const Home = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("english");
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div class="hi">
    <div className="container">
      <h1 className="heading">{t("heading")}</h1>


      <div className="language-switcher">
        <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
          {t("change_language")}: {language.toUpperCase()}
        </button>
        {isOpen && (
          <div className="dropdown-options">
            {Object.keys(i18n.options.resources).map((lang) => (
              <button key={lang} onClick={() => changeLanguage(lang)}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>


      <div className="options">
        <a href="/enduser">
          <div className="option-card">
            <h2 className="option-title">{t("file_complaint")}</h2>
            <p className="option-text">{t("file_complaint_desc")}</p>
          </div>
        </a>
        <a href="/endsolver">
          <div className="option-card">
            <h2 className="option-title">{t("track_status")}</h2>
            <p className="option-text">{t("track_status_desc")}</p>
          </div>
        </a>
        <a href="/faq">
          <div className="option-card">
            <h2 className="option-title">{t("faqs")}</h2>
            <p className="option-text">{t("faqs_desc")}</p>
          </div>
        </a>
        <a href="/contact">
          <div className="option-card">
            <h2 className="option-title">{t("contact_us")}</h2>
            <p className="option-text">{t("contact_us_desc")}</p>
          </div>
        </a>
      </div>
    </div>
    </div>
  );
};

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Home />
  </I18nextProvider>
);

export default App;