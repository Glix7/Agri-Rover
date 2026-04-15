// Language display names in native script
const languageNames = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
  ta: "தமிழ்",
  te: "తెలుగు",
  pa: "ਪੰਜਾਬੀ"
};

// Language translations for multi-language support
const translations = {
  en: {
    // Navigation
    home: "Home",
    product: "Product",
    technology: "Technology",
    team: "Team",
    investors: "Investors",
    blog: "Blog",
    contact: "Contact",
    // Hero
    tag: "⚡ AI-Powered Smart Farming",
    title: "AI Powered Future of Farming",
    subtitle: "AgriRover is a smart robotic farming system designed to help small farmers automate their agricultural work — bringing precision, efficiency, and intelligence.",
    exploreProduct: "Explore Product →",
    contactUs: "Contact Us",
    lessChemical: "Less Chemical Use",
    fasterOps: "Faster Operations",
    wirelessRange: "Wireless Range",
    cropCompat: "Crop Compatibility",
    // Features
    coreCapabilities: "CORE CAPABILITIES",
    whatCanDo: "What AgriRover Can Do",
    featuresSub: "Four powerful farming modules that work together to automate your entire crop cycle.",
    smartSpraying: "Smart Spraying",
    sprayingDesc: "Automated pesticide spraying with precision targeting — reducing chemical waste by up to 40%.",
    seedSowing: "Seed Sowing",
    sowingDesc: "Accurate seed planting with robotic precision, ensuring optimal spacing and depth every time.",
    fertilizerSpreading: "Fertilizer Spreading",
    fertilizerDesc: "Uniform fertilizer distribution across the field — maximizing yield and minimizing waste.",
    aiNavigation: "AI Navigation",
    aiDesc: "Upcoming autonomous farming with AI-powered path planning and obstacle avoidance.",
    // Vision
    ourVision: "OUR VISION",
    // visionTitle: "Building the Future of Indian Agriculture",
    buildingFutureOf: "Building the Future of",
    visionTitle: "Indian Agriculture",
    visionDesc: "India has over 100 million small farmers. AgriRover is here to give each of them the power of automation — affordable, rugged, and made for every field.",
    ecoFriendly: "🌱 Eco-friendly operation",
    durable: "🛡 Durable for rough terrain",
    lowPower: "⚡ Low power consumption",
    // Technology
    technology: "TECHNOLOGY",
    engineered: "Engineered for the Fields",
    techDesc: "AgriRover integrates robotics, embedded systems, and wireless technology to create a compact smart farming machine that thrives in real-world Indian agricultural conditions.",
    embedded: "Embedded Control",
    wireless: "Wireless Comms",
    mechanical: "Mechanical",
    futureTech: "Future Tech",
    fullSpecs: "Full Tech Specs →",
    systemsOnline: "⚡ Systems Online",
    // Footer
    smartAgri: "SMART AGRICULTURE ROBOTICS",
    footerDesc: "Empowering India's small farmers with intelligent robotic automation. Building the future of precision agriculture, one field at a time.",
    email: "info.aiagrirover@gmail.com",
    location: "India",
    company: "COMPANY",
    resources: "RESOURCES",
    copyright: "© 2026 AI AgriRover | Smart Agriculture Robotics",
    statusOnline: "Systems Online"
  },
  hi: {
    // Hindi translations
    home: "होम",
    product: "उत्पाद",
    technology: "प्रौद्योगिकी",
    team: "टीम",
    investors: "निवेशक",
    blog: "ब्लॉग",
    contact: "संपर्क",
    tag: "⚡ एआई-संचालित स्मार्ट कृषि",
    title: "एआई संचालित कृषि का भविष्य",
    subtitle: "एग्रीरोवर एक स्मार्ट रोबोटिक कृषि प्रणाली है जो छोटे किसानों को उनकी कृषि कार्यों को स्वचालित करने में मदद करती है — सटीकता, दक्षता और बुद्धिमत्ता लाती है।",
    exploreProduct: "उत्पाद देखें →",
    contactUs: "हमसे संपर्क करें",
    lessChemical: "कम रासायनिक उपयोग",
    fasterOps: "तेजी से संचालन",
    wirelessRange: "वायरलेस रेंज",
    cropCompat: "फसल अनुकूलता",
    coreCapabilities: "कोर क्षमताएं",
    whatCanDo: "एग्रीरोवर क्या कर सकता है",
    featuresSub: "चार शक्तिशाली कृषि मॉड्यूल जो आपके पूरे फसल चक्र को स्वचालित करने के लिए एक साथ काम करते हैं।",
    smartSpraying: "स्मार्ट स्प्रेइंग",
    sprayingDesc: "स्वचालित कीटनाशक स्प्रेइंग सटीक लक्ष्यीकरण के साथ — रासायनिक अपशिष्ट को 40% तक कम करता है।",
    seedSowing: "बीज बोना",
    sowingDesc: "रोबोटिक सटीकता के साथ सटीक बीज रोपण, हर समय इष्टतम अंतर और गहराई सुनिश्चित करता है।",
    fertilizerSpreading: "उर्वरक फैलाना",
    fertilizerDesc: "खेत में समान उर्वरक वितरण — उपज को अधिकतम करता है और अपशिष्ट को कम करता है।",
    aiNavigation: "एआई नेविगेशन",
    aiDesc: "एआई-संचालित पथ योजना और बाधा से बचने के साथ आगामी स्वायत्त कृषि।",
    ourVision: "हमारा विजन",
    buildingFutureOf: "भविष्य का निर्माण",
    visionTitle: "भारतीय कृषि",
    visionDesc: "भारत में 100 मिलियन से अधिक छोटे किसान हैं। एग्रीरोवर यहां प्रत्येक को स्वचालन की शक्ति देने के लिए है — किफायती, मजबूत, और हर खेत के लिए बनाया गया।",
    // ourVision: "हमारा विजन",
    // visionTitle: "भारतीय कृषि का भविष्य बनाना",
    // visionDesc: "भारत में 100 मिलियन से अधिक छोटे किसान हैं। एग्रीरोवर यहां प्रत्येक को स्वचालन की शक्ति देने के लिए है — किफायती, मजबूत, और हर खेत के लिए बनाया गया।",
    ecoFriendly: "🌱 पर्यावरण-अनुकूल संचालन",
    durable: "🛡 खुरदरे इलाकों के लिए टिकाऊ",
    lowPower: "⚡ कम बिजली खपत",
    technology: "प्रौद्योगिकी",
    engineered: "खेतों के लिए इंजीनियर्ड",
    techDesc: "एग्रीरोवर रोबोटिक्स, एम्बेडेड सिस्टम और वायरलेस तकनीक को एकीकृत करता है ताकि वास्तविक दुनिया की भारतीय कृषि स्थितियों में पनपने वाली एक कॉम्पैक्ट स्मार्ट कृषि मशीन बनाई जा सके।",
    embedded: "एम्बेडेड नियंत्रण",
    wireless: "वायरलेस कम्युनिकेशन",
    mechanical: "यांत्रिक",
    futureTech: "भविष्य की तकनीक",
    fullSpecs: "पूर्ण टेक स्पेक्स →",
    systemsOnline: "⚡ सिस्टम ऑनलाइन",
    smartAgri: "स्मार्ट कृषि रोबोटिक्स",
    footerDesc: "बुद्धिमान रोबोटिक स्वचालन के साथ भारत के छोटे किसानों को सशक्त बनाना। एक समय में एक खेत, सटीक कृषि का भविष्य बनाना।",
    email: "info.aiagrirover@gmail.com",
    location: "भारत",
    company: "कंपनी",
    resources: "संसाधन",
    copyright: "© 2026 एआई एग्रीरोवर | स्मार्ट कृषि रोबोटिक्स",
    statusOnline: "सिस्टम ऑनलाइन"
  },
  mr: {
    // Marathi translations (similar structure)
    home: "मुख्यपृष्ठ",
    product: "उत्पादन",
    technology: "तंत्रज्ञान",
    team: "संघ",
    investors: "गुंतवणूकदार",
    blog: "ब्लॉग",
    contact: "संपर्क",
    tag: "⚡ एआय-चालित स्मार्ट शेती",
    title: "एआय चालित शेतीचे भविष्य",
    subtitle: "एग्रीरोवर ही स्मार्ट रोबोटिक शेती प्रणाली आहे जी लहान शेतकऱ्यांना त्यांच्या शेती कामांना स्वयंचलित करण्यात मदत करते — अचूकता, कार्यक्षमता आणि बुद्धिमत्ता आणते.",
    exploreProduct: "उत्पादन पहा →",
    contactUs: "आमच्याशी संपर्क साधा",
    lessChemical: "कमी रासायनिक वापर",
    fasterOps: "वेगवान ऑपरेशन्स",
    wirelessRange: "वायरलेस रेंज",
    cropCompat: "पीक सुसंगतता",
    coreCapabilities: "कोर क्षमता",
    whatCanDo: "एग्रीरोवर काय करू शकते",
    featuresSub: "चार शक्तिशाली शेती मॉड्यूल्स जी तुमच्या संपूर्ण पीक चक्राला स्वयंचलित करण्यासाठी एकत्र काम करतात.",
    smartSpraying: "स्मार्ट स्प्रेइंग",
    sprayingDesc: "स्वयंचलित कीटकनाशक स्प्रेइंग अचूक लक्ष्यीकरणासह — रासायनिक कचरा 40% पर्यंत कमी करते.",
    seedSowing: "बियाणे पेरणी",
    sowingDesc: "रोबोटिक अचूकतेसह अचूक बियाणे रोपण, प्रत्येक वेळी इष्टतम अंतर आणि खोली सुनिश्चित करते.",
    fertilizerSpreading: "खत पसरवणे",
    fertilizerDesc: "शेतात समान खत वितरण — उत्पादन वाढवते आणि कचरा कमी करते.",
    aiNavigation: "एआय नेव्हिगेशन",
    aiDesc: "एआय-चालित मार्ग नियोजन आणि अडथळा टाळण्यासह येणारे स्वयंचलित शेती.",
    ourVision: "आमचा दृष्टिकोन",
    buildingFutureOf: "भविष्य घडवत आहोत",
    visionTitle: "भारतीय शेतीचे",
    visionDesc: "भारतात 100 दशलक्षाहून अधिक लहान शेतकरी आहेत. एग्रीरोवर प्रत्येकाला स्वयंचलनाची शक्ती देण्यासाठी येथे आहे — परवडणारे, मजबूत आणि प्रत्येक शेतासाठी बनवलेले.",
    // ourVision: "आमचा दृष्टिकोन",
    // visionTitle: "भारतीय शेतीचे भविष्य बांधणे",
    // visionDesc: "भारतात 100 दशलक्षाहून अधिक लहान शेतकरी आहेत. एग्रीरोवर प्रत्येकाला स्वयंचलनाची शक्ती देण्यासाठी येथे आहे — परवडणारे, मजबूत आणि प्रत्येक शेतासाठी बनवलेले.",
    ecoFriendly: "🌱 पर्यावरण-अनुकूल ऑपरेशन",
    durable: "🛡 खडतर भूभागासाठी टिकाऊ",
    lowPower: "⚡ कमी पॉवर खपत",
    technology: "तंत्रज्ञान",
    engineered: "शेतांसाठी इंजिनियर्ड",
    techDesc: "एग्रीरोवर रोबोटिक्स, एम्बेडेड सिस्टम आणि वायरलेस तंत्रज्ञान एकत्रित करते जेणेकरून वास्तविक जगातील भारतीय शेती परिस्थितींमध्ये वाढणारी कॉम्पॅक्ट स्मार्ट शेती मशीन तयार करता येईल.",
    embedded: "एम्बेडेड कंट्रोल",
    wireless: "वायरलेस कम्युनिकेशन्स",
    mechanical: "यांत्रिक",
    futureTech: "भविष्याचे तंत्रज्ञान",
    fullSpecs: "पूर्ण टेक स्पेक्स →",
    systemsOnline: "⚡ सिस्टम ऑनलाइन",
    smartAgri: "स्मार्ट कृषी रोबोटिक्स",
    footerDesc: "बुद्धिमान रोबोटिक स्वयंचलनासह भारताच्या लहान शेतकऱ्यांना सशक्त बनवणे. एका वेळी एक शेत, अचूक शेतीचे भविष्य बांधणे.",
    email: "info.aiagrirover@gmail.com",
    location: "भारत",
    company: "कंपनी",
    resources: "संसाधने",
    copyright: "© 2026 एआय एग्रीरोवर | स्मार्ट कृषी रोबोटिक्स",
    statusOnline: "सिस्टम ऑनलाइन"
  },
  ta: {
    // Tamil translations
    home: "முகப்பு",
    product: "தயாரிப்பு",
    technology: "தொழில்நுட்பம்",
    team: "குழு",
    investors: "முதலீட்டாளர்கள்",
    blog: "வலைப்பதிவு",
    contact: "தொடர்பு",
    tag: "⚡ செயற்கை நுண்ணறிவு இயக்கப்படும் ஸ்மார்ட் விவசாயம்",
    title: "செயற்கை நுண்ணறிவு இயக்கப்படும் விவசாயத்தின் எதிர்காலம்",
    subtitle: "அக்ரிரோவர் ஒரு ஸ்மார்ட் ரோபோடிக் விவசாய அமைப்பு ஆகும், இது சிறிய விவசாயிகளுக்கு அவர்களின் விவசாயப் பணிகளை தானியங்குபடுத்த உதவுகிறது — துல்லியம், செயல்திறன் மற்றும் புத்திசாலித்தனத்தை கொண்டுவருகிறது.",
    exploreProduct: "தயாரிப்பை ஆராயுங்கள் →",
    contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
    lessChemical: "குறைந்த ரசாயனப் பயன்பாடு",
    fasterOps: "விரைவான செயல்பாடுகள்",
    wirelessRange: "வயர்லெஸ் வரம்பு",
    cropCompat: "பயிர் இணக்கம்",
    coreCapabilities: "கோர் திறன்கள்",
    whatCanDo: "அக்ரிரோவர் என்ன செய்ய முடியும்",
    featuresSub: "நான்கு சக்திவாய்ந்த விவசாய மாடியூல்கள் உங்கள் முழு பயிர் சுழற்சியையும் தானியங்குபடுத்த ஒன்றாக வேலை செய்கின்றன.",
    smartSpraying: "ஸ்மார்ட் ஸ்ப்ரேயிங்",
    sprayingDesc: "தானியங்கு பூச்சிக்கொல்லி ஸ்ப்ரேயிங் துல்லியமான இலக்குடன் — ரசாயனக் கழிவை 40% வரை குறைக்கிறது.",
    seedSowing: "விதை விதைப்பு",
    sowingDesc: "ரோபோடிக் துல்லியத்துடன் துல்லியமான விதை விதைப்பு, ஒவ்வொரு முறையும் உகந்த இடைவெளி மற்றும் ஆழத்தை உறுதிப்படுத்துகிறது.",
    fertilizerSpreading: "உரப் பரப்புதல்",
    fertilizerDesc: "வயலில் சீரான உர விநியோகம் — விளைச்சலை அதிகரிக்கிறது மற்றும் கழிவை குறைக்கிறது.",
    aiNavigation: "AI வழிசெலுத்தல்",
    aiDesc: "AI-இயக்கப்படும் பாதை திட்டமிடல் மற்றும் தடையைத் தவிர்ப்புடன் வரவிருக்கும் தானியங்கு விவசாயம்.",
    ourVision: "எங்கள் பார்வை",
  buildingFutureOf: "எதிர்காலத்தை உருவாக்குகிறோம்",
  visionTitle: "இந்திய விவசாயத்தின்",
  visionDesc: "இந்தியாவில் 100 மில்லியனுக்கும் மேற்பட்ட சிறிய விவசாயிகள் உள்ளனர். அக்ரிரோவர் ஒவ்வொருவருக்கும் தானியங்குபடுத்தலின் சக்தியை கொடுக்க இங்கே உள்ளது — மலிவான, கடினமான மற்றும் ஒவ்வொரு வயலுக்கும் செய்யப்பட்டது.",
    ecoFriendly: "🌱 சுற்றுச்சூழல் நட்பு செயல்பாடு",
    durable: "🛡 கடினமான நிலப்பரப்புக்கு நீடித்தது",
    lowPower: "⚡ குறைந்த சக்தி நுகர்வு",
    technology: "தொழில்நுட்பம்",
    engineered: "வயல்களுக்கு வடிவமைக்கப்பட்டது",
    techDesc: "அக்ரிரோவர் ரோபோடிக்ஸ், உட்பொதிந்த அமைப்புகள் மற்றும் வயர்லெஸ் தொழில்நுட்பத்தை ஒருங்கிணைக்கிறது, இந்திய விவசாய நிலைமைகளில் செழிக்கும் ஒரு காம்பாக்ட் ஸ்மார்ட் விவசாய இயந்திரத்தை உருவாக்க.",
    embedded: "உட்பொதிந்த கட்டுப்பாடு",
    wireless: "வயர்லெஸ் தொடர்புகள்",
    mechanical: "இயந்திர",
    futureTech: "எதிர்கால தொழில்நுட்பம்",
    fullSpecs: "முழு டெக் ஸ்பெக்ஸ் →",
    systemsOnline: "⚡ அமைப்புகள் ஆன்லைன்",
    smartAgri: "ஸ்மார்ட் விவசாய ரோபோடிக்ஸ்",
    footerDesc: "புத்திசாலி ரோபோடிக் தானியங்குபடுத்தலுடன் இந்தியாவின் சிறிய விவசாயிகளை மேம்படுத்துதல். ஒரு வயல் ஒரு வயலாக, துல்லியமான விவசாயத்தின் எதிர்காலத்தை கட்டுதல்.",
    email: "info.aiagrirover@gmail.com",
    location: "இந்தியா",
    company: "நிறுவனம்",
    resources: "வளங்கள்",
    copyright: "2026 AI அக்ரிரோவர் | ஸ்மார்ட் விவசாய ரோபோடிக்ஸ்",
    statusOnline: "அமைப்புகள் ஆன்லைன்",
    error404Title: "பக்கம் கிடைக்கவில்லை",
    error404Heading: "பக்கம் கிடைக்கவில்லை",
    error404Message: "காட்டப்பட்ட கோப்பு இந்த வலைத்தளத்தில் கிடைக்கவில்லை. தயவுசெய்து URL இல் பிழைகளை சரிசெய்து மீண்டும் முயற்சிக்கவும்.",
    error404WhyTitle: "நான் இதை ஏன் பார்க்கிறேன்?",
    error404WhyDesc: "இந்த பக்கம் Firebase கமாண்ட்-லைன் இடைமுகத்தால் உருவாக்கப்பட்டது. இதை மாற்ற, 404.html கோப்பை உங்கள் திட்டத்தின் பொது கோப்பகத்தில் மாற்றவும்."
  },
  te: {
    // Telugu translations
    home: "హోమ్",
    product: "ఉత్పత్తి",
    technology: "సాంకేతికత",
    team: "టీమ్",
    investors: "పెట్టుబడిదారులు",
    blog: "బ్లాగ్",
    contact: "సంప్రదించు",
    tag: "⚡ కృత్రిమ మేధస్సుతో నడిచే స్మార్ట్ వ్యవసాయం",
    title: "కృత్రిమ మేధస్సుతో నడిచే వ్యవసాయ భవిష్యత్తు",
    subtitle: "అగ్రిరోవర్ ఒక స్మార్ట్ రోబోటిక్ వ్యవసాయ వ్యవస్థ ఇది చిన్న వ్యవసాయులకు వారి వ్యవసాయ పనులను ఆటోమేట్ చేయడంలో సహాయపడుతుంది — ఖచ్చితత్వం, సామర్థ్యం మరియు బుద్ధిమత్తను తెస్తుంది.",
    exploreProduct: "ఉత్పత్తిని అన్వేషించు →",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    lessChemical: "తక్కువ రసాయనాల వాడకం",
    fasterOps: "వేగవంతమైన ఆపరేషన్లు",
    wirelessRange: "వైర్లెస్ పరిధి",
    cropCompat: "పంట సామర్థ్యం",
    coreCapabilities: "కోర్ సామర్థ్యాలు",
    whatCanDo: "అగ్రిరోవర్ ఏమి చేయగలదు",
    featuresSub: "నాలుగు శక్తివంతమైన వ్యవసాయ మాడ్యూల్స్ మీ మొత్తం పంట చక్రాన్ని ఆటోమేట్ చేయడానికి కలిసి పని చేస్తాయి.",
    smartSpraying: "స్మార్ట్ స్ప్రేయింగ్",
    sprayingDesc: "ఖచ్చితమైన లక్ష్యంతో ఆటోమేటెడ్ పెస్టిసైడ్ స్ప్రేయింగ్ — రసాయన కచ్చరను 40% వరకు తగ్గిస్తుంది.",
    seedSowing: "విత్తన పంతించడం",
    sowingDesc: "రోబోటిక్ ఖచ్చితత్వంతో ఖచ్చితమైన విత్తన పంతించడం, ప్రతిసారీ ఆప్టిమల్ స్పేసింగ్ మరియు డెప్త్ నిర్ధారిస్తుంది.",
    fertilizerSpreading: "ఎరువుల పంపిణీ",
    fertilizerDesc: "పొలంలో సమాన ఎరువుల పంపిణీ — దిగుబడిని పెంచుతుంది మరియు కచ్చరను తగ్గిస్తుంది.",
    aiNavigation: "AI నావిగేషన్",
    aiDesc: "AI-నడిపించే పాత్ ప్లానింగ్ మరియు అడ్డంకులను తప్పించడతో రాబోయే ఆటోనమస్ వ్యవసాయం.",
      ourVision: "మా దృష్టి",
  buildingFutureOf: "భవిష్యత్తును నిర్మిస్తున్నాం",
  visionTitle: "భారతీయ వ్యవసాయం యొక్క",
  visionDesc: "భారతదేశంలో 100 మిలియన్లకు పైగా చిన్న రైతులు ఉన్నారు. అగ్రిరోవర్ ప్రతి ఒక్కరికీ ఆటోమేషన్ శక్తిని అందించడానికి ఇక్కడ ఉంది — చవకైనది, బలమైనది, ప్రతి పొలానికి అనుకూలంగా తయారైంది.",
    ecoFriendly: "🌱 పర్యావరణ అనుకూల ఆపరేషన్",
    durable: "🛡 గట్టిగా ఉన్న ప్రాంతాలకు నిలకడైన",
    lowPower: "⚡ తక్కువ పవర్ కన్సంప్షన్",
    technology: "సాంకేతికత",
    engineered: "పొలాలకు ఇంజినీర్డ్",
    techDesc: "అగ్రిరోవర్ రోబోటిక్స్, ఎంబెడెడ్ సిస్టమ్స్ మరియు వైర్లెస్ సాంకేతికతను ఇంటిగ్రేట్ చేస్తుంది, రియల్-వరల్డ్ ఇండియన్ వ్యవసాయ పరిస్థితులలో బ్రూట్ చేసే ఒక కాంపాక్ట్ స్మార్ట్ వ్యవసాయ మెషీన్ సృష్టిస్తుంది.",
    embedded: "ఎంబెడెడ్ కంట్రోల్",
    wireless: "వైర్లెస్ కమ్యూనికేషన్స్",
    mechanical: "మెకానికల్",
    futureTech: "భవిష్యత్ సాంకేతికత",
    fullSpecs: "పూర్తి టెక్ స్పెక్స్ →",
    systemsOnline: "⚡ సిస్టమ్స్ ఆన్‌లైన్",
    smartAgri: "స్మార్ట్ వ్యవసాయ రోబోటిక్స్",
    footerDesc: "బుద్ధిమంతులైన రోబోటిక్ ఆటోమేషన్‌తో భారతదేశంలోని చిన్న వ్యవసాయులను మేమ్‌పవర్ చేస్తున్నాము. ఒక పొలం ఒక పొలం, ఖచ్చితమైన వ్యవసాయం యొక్క భవిష్యత్తును నిర్మించడం.",
    email: "info.aiagrirover@gmail.com",
    location: "ఇండియా",
    company: "కంపెనీ",
    resources: "వనరులు",
    copyright: "2026 AI అగ్రిరోవర్ | స్మార్ట్ వ్యవసాయ రోబోటిక్స్",
    statusOnline: "సిస్టమ్స్ ఆన్‌లైన్",
    error404Title: "పేజ్ కనుగోలేన్",
    error404Heading: "పేజ్ కనుగోలేన్",
    error404Message: "పేజ్ ఫైల్ ఈ వెబ్‌సైట్‌లో కనుగోలేదు. దయని URL-ని తప్పాలనులు మరించండి.",
    error404WhyTitle: "నేన్ ఎందుకు చూస్తున్నా?",
    error404WhyDesc: "ఈ పేజ్ Firebase కమాండ్-లైన్ ఇంటర్‌ఫేస్ ఉరువాయాయ్పట్టింది. దీని మాడిఫై చేయడానికి, 404.html ఫైల్‌ని మీ ప్రాజెక్ట్ పబ్లిక్ డైరెక్టరీ లో మాడిఫై చేయడాన్."
  },
  pa: {
    // Punjabi translations
    home: "ਹੋਮ",
    product: "ਉਤਪਾਦ",
    technology: "ਟੈਕਨਾਲੋਜੀ",
    team: "ਟੀਮ",
    investors: "ਨਿਵੇਸ਼ਕ",
    blog: "ਬਲੌਗ",
    contact: "ਸੰਪਰਕ",
    tag: "⚡ ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ ਨਾਲ ਚਲਣ ਵਾਲੀ ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ",
    title: "ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ ਨਾਲ ਚਲਣ ਵਾਲੀ ਖੇਤੀਬਾੜੀ ਦਾ ਭਵਿੱਖ",
    subtitle: "ਅਗਰੀਰੋਵਰ ਇੱਕ ਸਮਾਰਟ ਰੋਬੋਟਿਕ ਖੇਤੀਬਾੜੀ ਸਿਸਟਮ ਹੈ ਜੋ ਛੋਟੇ ਕਿਸਾਨਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਖੇਤੀਬਾੜੀ ਕੰਮਾਂ ਨੂੰ ਆਟੋਮੇਟਿਕ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ — ਸਟੀਕਤਾ, ਕੁਸ਼ਲਤਾ ਅਤੇ ਹੁਸ਼ਿਆਰੀ ਲਿਆਉਂਦਾ ਹੈ।",
    exploreProduct: "ਉਤਪਾਦ ਦੀ ਪੜਚੋਲ ਕਰੋ →",
    contactUs: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    lessChemical: "ਘੱਟ ਰਸਾਇਣਕ ਵਰਤੋਂ",
    fasterOps: "ਤੇਜ਼ ਓਪਰੇਸ਼ਨ",
    wirelessRange: "ਵਾਇਰਲੈੱਸ ਰੇਂਜ",
    cropCompat: "ਫਸਲ ਅਨੁਕੂਲਤਾ",
    coreCapabilities: "ਕੋਰ ਸਮਰੱਥਾਵਾਂ",
    whatCanDo: "ਅਗਰੀਰੋਵਰ ਕੀ ਕਰ ਸਕਦਾ ਹੈ",
    featuresSub: "ਚਾਰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਖੇਤੀਬਾੜੀ ਮੋਡਿਊਲ ਜੋ ਤੁਹਾਡੇ ਪੂਰੇ ਫਸਲ ਚੱਕਰ ਨੂੰ ਆਟੋਮੇਟਿਕ ਕਰਨ ਲਈ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ।",
    smartSpraying: "ਸਮਾਰਟ ਸਪਰੇਇੰਗ",
    sprayingDesc: "ਸਟੀਕ ਟਾਰਗੇਟਿੰਗ ਨਾਲ ਆਟੋਮੇਟਿਕ ਕੀਟਨਾਸ਼ਕ ਸਪਰੇਇੰਗ — ਰਸਾਇਣਕ ਬੇਕਾਰ ਨੂੰ 40% ਤੱਕ ਘਟਾਉਂਦਾ ਹੈ।",
    seedSowing: "ਬੀਜ ਬੋਣਾ",
    sowingDesc: "ਰੋਬੋਟਿਕ ਸਟੀਕਤਾ ਨਾਲ ਸਟੀਕ ਬੀਜ ਬੋਣਾ, ਹਰ ਵਾਰ ਆਪਟੀਮਲ ਸਪੇਸਿੰਗ ਅਤੇ ਡੂੰਘਾਈ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ।",
    fertilizerSpreading: "ਖਾਦ ਫੈਲਾਉਣਾ",
    fertilizerDesc: "ਖੇਤ ਵਿੱਚ ਬਰਾਬਰ ਖਾਦ ਵੰਡ — ਪੈਦਾਵਾਰ ਨੂੰ ਵਧਾਉਂਦਾ ਹੈ ਅਤੇ ਬੇਕਾਰ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।",
    aiNavigation: "AI ਨੈਵੀਗੇਸ਼ਨ",
    aiDesc: "AI-ਚਲਾਇਆ ਮਾਰਗ ਯੋਜਨਾ ਅਤੇ ਰੁਕਾਵਟ ਟਾਲਣ ਨਾਲ ਆਉਣ ਵਾਲੀ ਆਟੋਨੋਮਸ ਖੇਤੀਬਾੜੀ।",
    ourVision: "ਸਾਡੀ ਦ੍ਰਿਸ਼ਟੀ",
    buildingFutureOf: "ਭਵਿੱਖ ਦੀ ਰਚਨਾ",
    visionTitle: "ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਦੀ",
    visionDesc: "ਭਾਰਤ ਵਿੱਚ 100 ਮਿਲੀਅਨ ਤੋਂ ਵੱਧ ਛੋਟੇ ਕਿਸਾਨ ਹਨ। ਅਗਰੀਰੋਵਰ ਹਰ ਕਿਸਾਨ ਨੂੰ ਆਟੋਮੇਸ਼ਨ ਦੀ ਤਾਕਤ ਦੇਣ ਲਈ ਇੱਥੇ ਹੈ — ਸਸਤਾ, ਮਜ਼ਬੂਤ ਅਤੇ ਹਰ ਖੇਤ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ।",
    ecoFriendly: "🌱 ਇਕੋ-ਫ੍ਰੈਂਡਲੀ ਓਪਰੇਸ਼ਨ",
    durable: "🛡 ਰੌਗ਼ ਟੈਰੇਨ ਲਈ ਟਿਕਾਊ",
    lowPower: "⚡ ਘੱਟ ਪਾਵਰ ਖਪਤ",
    technology: "ਟੈਕਨਾਲੋਜੀ",
    engineered: "ਖੇਤਾਂ ਲਈ ਇੰਜੀਨੀਅਰਡ",
    techDesc: "ਅਗਰੀਰੋਵਰ ਰੋਬੋਟਿਕਸ, ਐਮਬੈਡਡ ਸਿਸਟਮਾਂ ਅਤੇ ਵਾਇਰਲੈੱਸ ਟੈਕਨਾਲੋਜੀ ਨੂੰ ਇੰਟੀਗ੍ਰੇਟ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਅਸਲ ਦੁਨੀਆ ਦੀਆਂ ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਹਾਲਾਤਾਂ ਵਿੱਚ ਫਲ-ਫੂਲਣ ਵਾਲੀ ਇੱਕ ਕੰਪੈਕਟ ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਮਸ਼ੀਨ ਬਣਾਈ ਜਾ ਸਕੇ।",
    embedded: "ਐਮਬੈਡਡ ਕੰਟਰੋਲ",
    wireless: "ਵਾਇਰਲੈੱਸ ਕਮਿਊਨੀਕੇਸ਼ਨ",
    mechanical: "ਮੈਕੈਨੀਕਲ",
    futureTech: "ਭਵਿੱਖ ਦੀ ਟੈਕਨਾਲੋਜੀ",
    fullSpecs: "ਪੂਰੇ ਟੈਕ ਸਪੈਕਸ →",
    systemsOnline: "⚡ ਸਿਸਟਮ ਆਨਲਾਈਨ",
    smartAgri: "ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਰੋਬੋਟਿਕਸ",
    footerDesc: "ਭਾਰਤ ਦੇ ਛੋਟੇ ਕਿਸਾਨਾਂ ਨੂੰ ਹੁਸ਼ਿਆਰ ਰੋਬੋਟਿਕ ਆਟੋਮੇਸ਼ਨ ਨਾਲ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ। ਇੱਕ ਖੇਤ ਇੱਕ ਖੇਤ, ਸਟੀਕ ਖੇਤੀਬਾੜੀ ਦਾ ਭਵਿੱਖ ਬਣਾਉਣਾ।",
    email: "info.aiagrirover@gmail.com",
    location: "ਭਾਰਤ",
    company: "ਕੰਪਨੀ",
    resources: "ਸਰੋਤ",
    copyright: "2026 AI ਅਗਰੀਰੋਵਰ | ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਰੋਬੋਟਿਕਸ",
    statusOnline: "ਸਿਸਟਮ ਆਨਲਾਈਨ",
    error404Title: "ਪੇਜ ਨਹੀਂ ਮਿਲਿ",
    error404Heading: "ਪੇਜ ਨਹੀਂ ਮਿਲਿ",
    error404Message: "ਦਿੱਖੀ ਗਈ ਫਾਇਲ ਇਸ ਵੈਬਸਾਈਟ 'ਤੇ ਨਹੀਂ ਮਿਲਿ. ਕਿਰਪਯਾ URL-ਲੈੱਸ ਗਲਤੀਆਂ ਕਰੋ ਅਤੇ ਫਿਰ ਕਰੋ.",
    error404WhyTitle: "ਮੈਂ ਇਹ ਦੇਖ ਰਿਹਾ ਹੈ?",
    error404WhyDesc: "ਇਹ ਪੇਜ ਫਾਇਰਬੇਸ ਕਮਾਂਡ-ਲਾਈਨ ਇੰਟਰਫੇਸ ਉਰੁਵਾਯਾਯ੍ਪਟ੍ਟਿਂਦਾ ਸੀ. ਇਸਨੂੰ ਬਦਲਣ ਲਈ, 404.html ਫਾਇਲ ਨੂੰ ਪ੍ਰਾਜੈਕਟ ਕਰਮਪਿਊਟ ਪਬਲਿਕ ਰਿਕਾਰਟ ਰੀ ਲੋ ਮਾਡਿਫਾਈ ਚੇਯਡਾਨ."
  }
};

// English translations (complete)
Object.assign(translations.en, {
  readMore: "Read More",
  productHeroTitle: "AgriRover – Smart Mini Farming Robot",
  productHeroSub: "A compact electric robotic system designed for small farmers to automate spraying, sowing, fertilizing and more.",
  watchDemo: "Watch Demo",
  badgeFieldReady: "Field Ready",
  badgeEcoFriendly: "Eco Friendly",
  productAboutTag: "ABOUT THE PRODUCT",
  productOneRobot: "One Robot. Many Jobs.",
  productAboutP: "AgriRover is a versatile robotic platform that brings the power of industrial-grade automation to India's small farmers. With swappable tool attachments, it handles spraying, sowing, and fertilizing — reducing labor costs and increasing yield.",
  productFeat1: "Steel frame built for Indian field conditions",
  productFeat2: "10-inch rugged wheels for uneven terrain",
  productFeat3: "Up to 1km wireless remote range",
  productFeat4: "Interchangeable tool attachment system",
  controlUnit: "Control Unit",
  driveSystem: "Drive System",
  attachmentsCard: "Attachments",
  mechDesignTitle: "Mechanical Design",
  mechDesignP: "Built with rugged steel structure, compact body and terrain-ready wheels.",
  mechLi1: "Steel Frame",
  mechLi2: "Enclosed Body",
  mechLi3: "10-inch Wheels",
  mechLi4: "Compact Design",
  elecControlTitle: "Electronics & Control",
  microTitle: "Microcontroller",
  motorDriver: "Motor Driver",
  powerSysTitle: "Power System",
  safetyTitle: "Safety",
  wirelessCommTitle: "Wireless Communication",
  wlLi1: "NRF / LoRa Modules",
  wlLi2: "1KM Range",
  wlLi3: "Custom Remote",
  wlLi4: "Low Power",
  futureTechSectionTitle: "Future Technology",
  futureAiNav: "AI Navigation",
  futureIot: "IoT",
  futureMobile: "Mobile App",
  futureSolar: "Solar",
  contactPageTitle: "Contact AgriRover",
  contactPageSub: "We’d love to hear from you — farmer, investor or partner.",
  sendUsMessage: "Send Us a Message",
  contactInformation: "Contact Information",
  labelEmail: "Email",
  labelPhone: "Phone",
  labelLocation: "Location",
  placeholderName: "Your Name",
  placeholderEmail: "Your Email",
  placeholderSubject: "Subject",
  placeholderMessage: "Your Message",
  sendMessageBtn: "Send Message →",
  teamHeroLabel: "People & mission",
  teamHeroTitle: "Meet the team behind AgriRover",
  teamHeroLead: "We are building affordable, field-ready robotics so small and marginal farmers can farm with less drudgery, lower input waste, and more predictable outcomes.",
  teamStat1: "Farmer-first product decisions",
  teamStat2: "Built for Indian fields & crops",
  teamStat3: "Hardware, embedded & AI in one loop",
  valuesHeading: "How we work",
  valuesIntro: "Principles that keep AgriRover honest, useful, and shippable.",
  valueH1: "Listen before we build",
  valueP1: "We treat farmer feedback and field trials as the source of truth — not slide decks.",
  valueH2: "Reliability over hype",
  valueP2: "Simple mechanisms, testable electronics, and maintainable code beat brittle demos.",
  valueH3: "Grow the circle",
  valueP3: "We actively welcome engineers, agronomists, and partners who care about the same mission.",
  foundersHeading: "Founding team",
  foundersIntro: "The core team setting direction for product, research, and execution.",
  satyamRole: "Founder — AI & hardware",
  satyamBio: "Leads AgriRover's technical direction: mechanical and electronic design, robotics integration, and roadmap toward intelligent automation in field.",
  tagRobotics: "Robotics",
  tagPrototyping: "Prototyping",
  tagSystems: "Systems design",
  harishRole: "Co-founder — research & documentation",
  harishBio: "Drives research synthesis, documentation, grant and program applications, and coordination so that team can move fast without losing rigor or clarity.",
  tagResearch: "Research",
  tagGrants: "Grants & programs",
  tagOperations: "Operations",
  engSectionTitle: "What engineering team covers",
  engSectionIntro: "Capability areas we are building (and hiring into) as AgriRover matures.",
  engMechTitle: "Mechanical & hardware",
  engMechDesc: "Chassis, actuators, power and sensors — designed for mud, dust, and long days in sun.",
  engEmbTitle: "Embedded & firmware",
  engEmbDesc: "Microcontrollers, motor control, wireless links, and safe, deterministic behavior on the robot.",
  engSoftTitle: "Software & AI",
  engSoftDesc: "Field software, data from trials, and models that make spraying and navigation smarter over time.",
  advisorsHeading: "Advisors",
  advisorsIntro: "Domain experts who help us stress-test assumptions and stay grounded in real agriculture.",
  advAgTitle: "Agriculture advisor",
  advAgDesc: "Crop cycles, local practices, and what &quot;good enough&quot; looks like on small plots.",
  advTechTitle: "Technology mentor",
  advTechDesc: "Architecture, manufacturability, and scaling a hardware-heavy startup responsibly.",
  supportHeading: "Startup support",
  supportIntro: "Programs and mentors that back our execution and connect us to the ecosystem.",
  supInnovTitle: "Innovation programs",
  supInnovDesc: "Incubation, cohorts, and structured support as we validate and deploy.",
  supMentorsTitle: "Mentors",
  supMentorsDesc: "Operators and founders who have shipped hardware and navigated early-stage growth.",
  teamCtaTitle: "Want to join AgriRover?",
  teamCtaSub: "We are looking for engineers, makers, and researchers who want their work to show up in real fields.",
  contactUsBtn: "Contact us",
  invHeroTitle: "Invest in the Future of Farming",
  invHeroSub: "AgriRover is building affordable robotic farming solutions for millions of small farmers in India.",
  downloadPitch: "Download Pitch Deck",
  invProblemTitle: "The Problem",
  invProb1Title: "Labor Shortage",
  invProb1Desc: "Farmers face labor shortages and rising wages.",
  invProb2Title: "Expensive Machinery",
  invProb2Desc: "Traditional tractors cost ₹5–8 lakhs.",
  invProb3Title: "Small Land Holdings",
  invProb3Desc: "Most farmers have very small land sizes.",
  invProb4Title: "Manual Farming",
  invProb4Desc: "Most operations are still manual.",
  invSolutionTitle: "Our Solution",
  invSol1Title: "Compact Electric Rover",
  invSol1Desc: "Designed for small farms and narrow fields.",
  invSol2Title: "Remote Controlled",
  invSol2Desc: "Up to 1 km wireless range.",
  invSol3Title: "Multi Purpose",
  invSol3Desc: "Spraying, sowing, fertilizing & more.",
  invSol4Title: "Affordable",
  invSol4Desc: "Estimated cost under ₹1 lakh.",
  invMarketTitle: "Market Opportunity",
  invTamTitle: "TAM",
  invTamLine: "9.3 Crore Farmers",
  invTamDesc: "Total agricultural users in India.",
  invSamTitle: "SAM",
  invSamLine: "86% Small Farmers",
  invSamDesc: "Majority are small & marginal farmers.",
  invSomTitle: "SOM",
  invSomLine: "Initial Target Segment",
  invSomDesc: "Farmers with less than 2 acres land.",
  invInvestTitle: "Investment Opportunity",
  invInvestP: "AgriRover is seeking investors, accelerators and strategic partners to scale across India.",
  invCard1Title: "Seed Investment",
  invCard1Desc: "Support prototype & manufacturing stage.",
  invCard2Title: "Strategic Partners",
  invCard2Desc: "Collaborate with agri-tech companies.",
  invCard3Title: "Accelerators",
  invCard3Desc: "Join startup programs & scaling support.",
  invCtaTitle: "Interested in Investing?",
  invCtaBtn: "Contact for Investment",
  blogHeroTitle: "AgriRover Blog",
  blogHeroSub: "Insights on agriculture, robotics, and our startup journey.",
  blogLatestTitle: "Latest Articles",
  blogArt1Title: "Future of AI in Agriculture",
  blogArt1Desc: "AI & robotics are transforming modern farming.",
  blogArt2Title: "Problems of Small Farmers",
  blogArt2Desc: "High cost, low tech access & labor shortage.",
  blogArt3Title: "Why AgriRover",
  blogArt3Desc: "Built to solve real farming problems.",
  blogArt4Title: "Robotics in Farming",
  blogArt4Desc: "Automation improving efficiency & yield.",
  blogDevTitle: "Development Updates",
  productHeroTitle: "AgriRover – Smart Mini Farming Robot",
productHeroSub: "A compact electric robotic system designed to automate spraying, sowing, fertilizing, and more for small farmers.",
watchDemo: "Watch Demo",
badgeFieldReady: "Field Ready",
badgeEcoFriendly: "Eco-Friendly",
productAboutTag: "About the Product",
productOneRobot: "One Robot. Many Tasks.",
productAboutP: "AgriRover is a versatile robotic platform that brings industrial-level automation to India’s small farmers. With interchangeable tool attachments, it handles spraying, sowing, and fertilizing — reducing labor costs and increasing yield.",
productFeat1: "Steel frame for Indian field conditions",
productFeat2: "10-inch rugged wheels for rough terrain",
productFeat3: "Wireless remote range up to 1 km",
productFeat4: "Interchangeable tool attachment system",
productFeat5: "Low power, long-duration operation",
productFeat6: "Weather-resistant enclosed electronics",
exploreTechnology: "Explore Technology →",
problemWeSolve: "The Problem We Solve",
probLaborTitle: "Labor Shortage",
probLaborDesc: "Rising labor costs.",
probCostTitle: "High Cost",
probCostDesc: "Machines cost ₹5–8 lakh.",
probLargeTitle: "Large Machines",
probLargeDesc: "Not suitable for small farms.",
probManualTitle: "Manual Work",
probManualDesc: "Still heavily dependent on manual labor.",
futureUpgrades: "Future Upgrades",
futureUpgradesList: "Mobile App • AI Automation • IoT Integration • Solar Charging",
requestDemo: "Request Demo →",
techPageHeroTitle: "Engineering Behind AgriRover",
techPageHeroSub: "Advanced robotics, embedded systems, and wireless technology powering smart farming.",
sysArchitecture: "System Architecture",
powerUnit: "Power Unit",
controlUnit: "Control Unit",
driveSystem: "Drive System",
attachmentsCard: "Attachments",
mechDesignTitle: "Mechanical Design",
mechDesignP: "Built with strong steel construction, compact body, and terrain-ready wheels.",
mechLi1: "Steel Frame",
mechLi2: "Enclosed Body",
mechLi3: "10-inch Wheels",
mechLi4: "Compact Design",
elecControlTitle: "Electronics & Control",
microTitle: "Microcontroller",
motorDriver: "Motor Driver",
powerSysTitle: "Power System",
safetyTitle: "Safety",
wirelessCommTitle: "Wireless Communication",
wlLi1: "NRF / LoRa Module",
wlLi2: "1KM Range",
wlLi3: "Custom Remote",
wlLi4: "Low Power",
futureTechSectionTitle: "Future Technology",
futureAiNav: "AI Navigation",
futureIot: "IoT",
futureMobile: "Mobile App",
futureSolar: "Solar",
contactPageTitle: "Contact AgriRover",
contactPageSub: "We’d love to hear from you — farmer, investor, or partner.",
sendUsMessage: "Send Us a Message",
contactInformation: "Contact Information",
labelEmail: "Email",
labelPhone: "Phone",
labelLocation: "Location",
placeholderName: "Your Name",
placeholderEmail: "Your Email",
placeholderSubject: "Subject",
placeholderMessage: "Your Message",
sendMessageBtn: "Send Message →",
teamHeroLabel: "People & Mission",
teamHeroTitle: "Meet the Team Behind AgriRover",
teamHeroLead: "We are building affordable, field-ready robotics so that small and marginal farmers can farm with less effort, less input waste, and more predictable outcomes.",
teamStat1: "Farmer-first product decisions",
teamStat2: "Built for Indian farms and crops",
teamStat3: "Hardware, embedded systems, and AI in one loop",
valuesHeading: "How We Work",
valuesIntro: "Principles that keep AgriRover honest, useful, and deployable.",
valueH1: "Listen Before Building",
valueP1: "We treat farmer feedback and field trials as the source of truth — not slide decks.",
valueH2: "Reliability Over Hype",
valueP2: "Simple mechanisms, testable electronics, and maintainable code are better than fragile demos.",
valueH3: "Grow the Circle",
valueP3: "We welcome engineers, agriculture experts, and partners who care about the same mission.",
foundersHeading: "Founding Team",
foundersIntro: "The core team shaping the direction.",
satyamRole: "Founder — AI & Hardware",
satyamBio: "Leads AgriRover’s technical direction: mechanical/electronic design, robotics integration, and intelligent automation for the field.",
harishamaRole: "Co-Founder — Research & Documentation",
harishamaBio: "Handles research synthesis, documentation, grants/program applications, and coordination so the team can move fast without losing rigor or clarity.",
engSectionTitle: "What the Engineering Team Does",
engSectionIntro: "Capabilities we are building (and hiring for) as AgriRover matures.",
engMechTitle: "Mechanical & Hardware",
engMechDesc: "Chassis, actuators, power, and sensors — designed for long days in mud, dust, and sunlight.",
engEmbTitle: "Embedded & Firmware",
engEmbDesc: "Microcontrollers, motor control, wireless links, and safe deterministic robot behavior.",
engSoftTitle: "Software & AI",
engSoftDesc: "Field software, trial data, and models that make spraying and navigation smarter.",
advisorsHeading: "Advisors",
advisorsIntro: "Domain experts who challenge our assumptions and ground us in real agriculture.",
advAgTitle: "Agriculture Advisors",
advAgDesc: "Crop cycles, local practices, and what ‘good enough’ looks like on small plots.",
advTechTitle: "Technology Mentors",
advTechDesc: "Architecture, manufacturability, and scaling a hardware-heavy startup responsibly.",
supportHeading: "Startup Support",
supportIntro: "Programs and mentors helping connect our execution with the ecosystem.",
supInnovTitle: "Innovation Programs",
supInnovDesc: "Incubation, cohorts, and structured support as we validate and deploy.",
supMentorsTitle: "Mentors",
supMentorsDesc: "Operators and founders who have built hardware and navigated early-stage growth.",
teamCtaTitle: "Want to Join AgriRover?",
teamCtaSub: "We’re looking for engineers, makers, and researchers whose work belongs in real fields.",
contactUsBtn: "Contact Us",
invHeroTitle: "Investing in the Future of Farming",
invHeroSub: "AgriRover is building affordable robotic farming solutions for small farmers in India.",
downloadPitch: "Download Pitch Deck",
invProblemTitle: "Problem",
invProb1Title: "Labor Shortage",
invProb1Desc: "Farmers face labor shortages and rising wages.",
invProb2Title: "Expensive Machinery",
invProb2Desc: "Traditional tractors cost ₹5–8 lakh.",
invProb3Title: "Small Land Holdings",
invProb3Desc: "Most farmers own very small plots of land.",
invProb4Title: "Manual Farming",
invProb4Desc: "Most operations are still manual.",
invSolutionTitle: "Our Solution",
invSol1Title: "Compact Electric Rover",
invSol1Desc: "Designed for small farms and tight field spaces.",
invSol2Title: "Remote Controlled",
invSol2Desc: "Wireless range up to 1 km.",
invSol3Title: "Multi-Purpose",
invSol3Desc: "Spraying, sowing, fertilizing, and more.",
invSol4Title: "Affordable",
invSol4Desc: "Estimated under ₹1 lakh.",
invMarketTitle: "Market Opportunity",
invTamTitle: "TAM",
invTamLine: "9.3 crore farmers",
invTamDesc: "Total agriculture users in India.",
invSamTitle: "SAM",
invSamLine: "86% small farmers",
invSamDesc: "Majority are small and marginal farmers.",
invSomTitle: "SOM",
invSomLine: "Initial target segment",
invSomDesc: "Farmers with less than 2 acres of land.",
invInvestTitle: "Investment Opportunity",
invInvestP: "AgriRover is seeking investors, accelerators, and strategic partners to scale across India.",
invCard1Title: "Seed Investment",
invCard1Desc: "Prototype and manufacturing stage funding.",
invCard2Title: "Strategic Partners",
invCard2Desc: "Collaborate with agri-tech companies.",
invCard3Title: "Accelerators",
invCard3Desc: "Join startup programs and scaling support.",
invCtaTitle: "Interested in Investing?",
invCtaBtn: "Contact for Investment",
blogHeroTitle: "AgriRover Blog",
blogHeroSub: "Insights about agriculture, robotics, and our startup journey.",
blogLatestTitle: "Latest Articles",
blogArt1Title: "AI in Agriculture",
blogArt1Desc: "How AI and robotics are transforming modern farming.",
blogArt2Title: "Problems of Small Farmers",
blogArt2Desc: "High costs, low tech access, and labor shortages.",
blogArt3Title: "Why AgriRover",
blogArt3Desc: "Built to solve real farming problems.",
blogArt4Title: "Robotics in Farming",
blogArt4Desc: "Automation improves efficiency and increases yield.",
blogDevTitle: "Development Updates",
blogDev1Title: "Prototype Development",
});


Object.assign(translations.hi, {
  readMore: "और पढ़ें",
  productHeroTitle: "एग्रीरोवर – स्मार्ट मिनी फार्मिंग रोबोट",
  productHeroSub: "छोटे किसानों के लिए डिज़ाइन किया गया एक कॉम्पैक्ट इलेक्ट्रिक रोबोटिक सिस्टम, जो छिड़काव, बुवाई, उर्वरक वितरण और अन्य कार्यों को स्वचालित बनाता है।",
  watchDemo: "डेमो देखें",
  badgeFieldReady: "खेत के लिए तैयार",
  badgeEcoFriendly: "पर्यावरण अनुकूल",
  productAboutTag: "उत्पाद के बारे में",
  productOneRobot: "एक रोबोट। अनेक कार्य।",
  productAboutP: "एग्रीरोवर एक बहुउद्देश्यीय रोबोटिक प्लेटफ़ॉर्म है जो भारत के छोटे किसानों तक औद्योगिक स्तर की स्वचालन शक्ति पहुंचाता है। बदलने योग्य उपकरण अटैचमेंट के साथ यह छिड़काव, बुवाई और उर्वरक कार्य संभालता है — श्रम लागत घटाता है और उपज बढ़ाता है।",
  productFeat1: "भारतीय खेत परिस्थितियों के लिए मजबूत स्टील फ्रेम",
  productFeat2: "ऊबड़-खाबड़ जमीन के लिए 10-इंच मजबूत पहिए",
  productFeat3: "1 किमी तक वायरलेस रिमोट रेंज",
  productFeat4: "इंटरचेंजेबल टूल अटैचमेंट सिस्टम",
  productFeat5: "कम बिजली, लंबी अवधि संचालन",
  productFeat6: "मौसम-रोधी बंद इलेक्ट्रॉनिक्स",
  exploreTechnology: "प्रौद्योगिकी देखें →",
  problemWeSolve: "समस्या जिसे हम हल करते हैं",
  probLaborTitle: "श्रम की कमी",
  probLaborDesc: "बढ़ती श्रम लागत।",
  probCostTitle: "उच्च लागत",
  probCostDesc: "मशीनों की कीमत ₹5–8 लाख।",
  probLargeTitle: "बड़ी मशीनें",
  probLargeDesc: "छोटे खेतों के लिए उपयुक्त नहीं।",
  probManualTitle: "मैनुअल कार्य",
  probManualDesc: "अब भी श्रम पर निर्भर।",
  futureUpgrades: "भविष्य के उन्नयन",
  futureUpgradesList: "मोबाइल ऐप • एआई स्वचालन • IoT एकीकरण • सौर चार्जिंग",
  requestDemo: "डेमो का अनुरोध करें →",
  techPageHeroTitle: "एग्रीरोवर के पीछे की इंजीनियरिंग",
  techPageHeroSub: "स्मार्ट खेती को शक्ति देने वाली उन्नत रोबोटिक्स, एम्बेडेड सिस्टम और वायरलेस तकनीक।",
  sysArchitecture: "सिस्टम आर्किटेक्चर",
  powerUnit: "पावर यूनिट",
  controlUnit: "नियंत्रण इकाई",
  driveSystem: "ड्राइव सिस्टम",
  attachmentsCard: "अटैचमेंट्स",
  mechDesignTitle: "यांत्रिक डिज़ाइन",
  mechDesignP: "मजबूत स्टील संरचना, कॉम्पैक्ट बॉडी और खेत-तैयार पहियों के साथ निर्मित।",
  mechLi1: "स्टील फ्रेम",
  mechLi2: "बंद बॉडी",
  mechLi3: "10-इंच पहिए",
  mechLi4: "कॉम्पैक्ट डिज़ाइन",
  elecControlTitle: "इलेक्ट्रॉनिक्स और नियंत्रण",
  microTitle: "माइक्रोकंट्रोलर",
  motorDriver: "मोटर ड्राइवर",
  powerSysTitle: "पावर सिस्टम",
  safetyTitle: "सुरक्षा",
  wirelessCommTitle: "वायरलेस संचार",
  wlLi1: "NRF / LoRa मॉड्यूल",
  wlLi2: "1KM रेंज",
  wlLi3: "कस्टम रिमोट",
  wlLi4: "कम बिजली",
  futureTechSectionTitle: "भविष्य की तकनीक",
  futureAiNav: "एआई नेविगेशन",
  futureIot: "IoT",
  futureMobile: "मोबाइल ऐप",
  futureSolar: "सौर",
  contactPageTitle: "एग्रीरोवर से संपर्क करें",
  contactPageSub: "हम आपसे सुनना चाहेंगे — किसान, निवेशक या साझेदार।",
  sendUsMessage: "हमें संदेश भेजें",
  contactInformation: "संपर्क जानकारी",
  labelEmail: "ईमेल",
  labelPhone: "फ़ोन",
  labelLocation: "स्थान",
  placeholderName: "आपका नाम",
  placeholderEmail: "आपका ईमेल",
  placeholderSubject: "विषय",
  placeholderMessage: "आपका संदेश",
  sendMessageBtn: "संदेश भेजें →",
  teamHeroLabel: "लोग और मिशन",
  teamHeroTitle: "एग्रीरोवर के पीछे की टीम से मिलें",
  teamHeroLead: "हम किफायती, खेत-तैयार रोबोटिक्स बना रहे हैं ताकि छोटे और सीमांत किसान कम मेहनत, कम बर्बादी और अधिक भरोसेमंद परिणामों के साथ खेती कर सकें।",
  teamStat1: "किसान-प्रथम उत्पाद निर्णय",
  teamStat2: "भारतीय खेतों और फसलों के लिए निर्मित",
  teamStat3: "हार्डवेयर, एम्बेडेड सिस्टम और एआई एक साथ",
  valuesHeading: "हम कैसे काम करते हैं",
  valuesIntro: "वे सिद्धांत जो एग्रीरोवर को ईमानदार, उपयोगी और व्यवहारिक बनाते हैं।",
  valueH1: "निर्माण से पहले सुनें",
  valueP1: "हम किसान प्रतिक्रिया और फील्ड ट्रायल को सच्चाई का आधार मानते हैं — न कि केवल प्रस्तुतियाँ।",
  valueH2: "हाइप से ऊपर विश्वसनीयता",
  valueP2: "सरल तंत्र, परीक्षण योग्य इलेक्ट्रॉनिक्स और बनाए रखने योग्य कोड नाज़ुक डेमो से बेहतर हैं।",
  valueH3: "साथ मिलकर बढ़ें",
  valueP3: "हम इंजीनियरों, कृषि विशेषज्ञों और साझेदारों का स्वागत करते हैं जो इसी मिशन की परवाह करते हैं।",
  foundersHeading: "संस्थापक टीम",
  foundersIntro: "मुख्य टीम जो दिशा तय करती है।",
  satyamRole: "संस्थापक — एआई और हार्डवेयर",
  satyamBio: "एग्रीरोवर की तकनीकी दिशा का नेतृत्व: यांत्रिक/इलेक्ट्रॉनिक डिज़ाइन, रोबोटिक्स एकीकरण और खेत के लिए बुद्धिमान स्वचालन।",
  harishRole: "सह-संस्थापक — अनुसंधान और दस्तावेज़ीकरण",
  harishBio: "अनुसंधान, दस्तावेज़ीकरण, अनुदान आवेदन और समन्वय संभालती हैं ताकि टीम स्पष्टता के साथ तेजी से आगे बढ़ सके।",
  engSectionTitle: "इंजीनियरिंग टीम क्या करती है",
  engSectionIntro: "वे क्षमताएँ जिन्हें हम विकसित कर रहे हैं (और भर्ती कर रहे हैं) जैसे-जैसे एग्रीरोवर आगे बढ़ रहा है।",
  engMechTitle: "यांत्रिक और हार्डवेयर",
  engMechDesc: "चेसिस, एक्ट्यूएटर, पावर और सेंसर — कीचड़, धूल और धूप के लंबे दिनों के लिए डिज़ाइन।",
  engEmbTitle: "एम्बेडेड और फर्मवेयर",
  engEmbDesc: "माइक्रोकंट्रोलर, मोटर नियंत्रण, वायरलेस लिंक और सुरक्षित रोबोट व्यवहार।",
  engSoftTitle: "सॉफ्टवेयर और एआई",
  engSoftDesc: "फील्ड सॉफ्टवेयर, ट्रायल डेटा और मॉडल जो स्प्रेइंग व नेविगेशन को अधिक स्मार्ट बनाते हैं।",
  advisorsHeading: "सलाहकार",
  advisorsIntro: "विशेषज्ञ जो हमारे विचारों को वास्तविक कृषि ज़मीन से जोड़ते हैं।",
  advAgTitle: "कृषि सलाहकार",
  advAgDesc: "फसल चक्र, स्थानीय प्रथाएँ और छोटे खेतों के लिए सही समाधान।",
  advTechTitle: "तकनीकी मार्गदर्शक",
  advTechDesc: "आर्किटेक्चर, निर्माण क्षमता और हार्डवेयर स्टार्टअप का जिम्मेदार विस्तार।",
  supportHeading: "स्टार्टअप सहायता",
  supportIntro: "कार्यक्रम और मार्गदर्शक जो हमारे निष्पादन को इकोसिस्टम से जोड़ते हैं।",
  supInnovTitle: "नवाचार कार्यक्रम",
  supInnovDesc: "इनक्यूबेशन, कोहॉर्ट और संरचित समर्थन।",
  supMentorsTitle: "मार्गदर्शक",
  supMentorsDesc: "वे संस्थापक और विशेषज्ञ जिन्होंने हार्डवेयर बनाया और शुरुआती विकास संभाला।",
  teamCtaTitle: "एग्रीरोवर से जुड़ना चाहते हैं?",
  teamCtaSub: "हम इंजीनियरों, मेकर्स और शोधकर्ताओं की तलाश में हैं जिनका काम वास्तविक खेतों में दिखे।",
  contactUsBtn: "हमसे संपर्क करें",
  invHeroTitle: "खेती के भविष्य में निवेश करें",
  invHeroSub: "एग्रीरोवर भारत के छोटे किसानों के लिए किफायती रोबोटिक खेती समाधान बना रहा है।",
  downloadPitch: "पिच डेक डाउनलोड करें",
  invProblemTitle: "समस्या",
  invProb1Title: "श्रम की कमी",
  invProb1Desc: "किसान श्रमिकों की कमी और बढ़ती मजदूरी से जूझ रहे हैं।",
  invProb2Title: "महंगी मशीनरी",
  invProb2Desc: "पारंपरिक ट्रैक्टर ₹5–8 लाख तक।",
  invProb3Title: "छोटी भूमि जोत",
  invProb3Desc: "अधिकांश किसानों के पास बहुत छोटी भूमि है।",
  invProb4Title: "मैनुअल खेती",
  invProb4Desc: "अधिकांश कार्य अभी भी हाथ से होते हैं।",
  invSolutionTitle: "हमारा समाधान",
  invSol1Title: "कॉम्पैक्ट इलेक्ट्रिक रोवर",
  invSol1Desc: "छोटे खेतों और संकरे स्थानों के लिए डिज़ाइन।",
  invSol2Title: "रिमोट नियंत्रित",
  invSol2Desc: "1 किमी तक वायरलेस रेंज।",
  invSol3Title: "बहुउद्देश्यीय",
  invSol3Desc: "छिड़काव, बुवाई, उर्वरक और अधिक।",
  invSol4Title: "किफायती",
  invSol4Desc: "अनुमानित लागत ₹1 लाख से कम।",
  invMarketTitle: "बाजार अवसर",
  invTamTitle: "TAM",
  invTamLine: "9.3 करोड़ किसान",
  invTamDesc: "भारत में कुल कृषि उपयोगकर्ता।",
  invSamTitle: "SAM",
  invSamLine: "86% छोटे किसान",
  invSamDesc: "अधिकांश छोटे और सीमांत किसान हैं।",
  invSomTitle: "SOM",
  invSomLine: "प्रारंभिक लक्ष्य वर्ग",
  invSomDesc: "2 एकड़ से कम भूमि वाले किसान।",
  invInvestTitle: "निवेश अवसर",
  invInvestP: "एग्रीरोवर भारतभर में विस्तार हेतु निवेशकों, एक्सेलेरेटर और रणनीतिक साझेदारों की तलाश में है।",
  invCard1Title: "सीड निवेश",
  invCard1Desc: "प्रोटोटाइप और निर्माण चरण सहयोग।",
  invCard2Title: "रणनीतिक साझेदार",
  invCard2Desc: "एग्री-टेक कंपनियों के साथ सहयोग करें।",
  invCard3Title: "एक्सेलेरेटर",
  invCard3Desc: "स्टार्टअप कार्यक्रमों और स्केलिंग सहायता से जुड़ें।",
  invCtaTitle: "निवेश में रुचि है?",
  invCtaBtn: "निवेश हेतु संपर्क करें",
  blogHeroTitle: "एग्रीरोवर ब्लॉग",
  blogHeroSub: "कृषि, रोबोटिक्स और हमारी स्टार्टअप यात्रा पर विचार।",
  blogLatestTitle: "नवीनतम लेख",
  blogArt1Title: "कृषि में एआई",
  blogArt1Desc: "एआई और रोबोटिक्स आधुनिक खेती को बदल रहे हैं।",
  blogArt2Title: "छोटे किसानों की समस्याएँ",
  blogArt2Desc: "उच्च लागत, कम तकनीकी पहुंच और श्रम की कमी।",
  blogArt3Title: "क्यों एग्रीरोवर",
  blogArt3Desc: "वास्तविक खेती समस्याओं को हल करने के लिए निर्मित।",
  blogArt4Title: "खेती में रोबोटिक्स",
  blogArt4Desc: "स्वचालन दक्षता और उपज बढ़ाता है।",
  blogDevTitle: "विकास अपडेट",
  blogDev1Title: "प्रोटोटाइप विकास",
  blogDev1Desc: "रिमोट सिस्टम के साथ पहला कार्यशील मॉडल बना रहे हैं।",
  blogDev2Title: "₹50,000 अनुदान प्राप्त",
  blogDev2Desc: "कॉलेज नवाचार कार्यक्रम द्वारा समर्थित।",
  blogFollowTitle: "हमारी यात्रा का अनुसरण करें",
  blogFollowSub: "एग्रीरोवर की प्रगति और नवाचारों से अपडेट रहें",
  blogConnectBtn: "हमसे जुड़ें"
});


Object.assign(translations.mr,{
readMore:"पुढे वाचा",

productHeroTitle:"अ‍ॅग्रीरोव्हर – स्मार्ट मिनी फार्मिंग रोबोट",
productHeroSub:"लहान शेतकऱ्यांसाठी तयार केलेली कॉम्पॅक्ट इलेक्ट्रिक रोबोटिक प्रणाली जी फवारणी, पेरणी, खत टाकणे आणि इतर कामे स्वयंचलित करते.",
watchDemo:"डेमो पहा",
badgeFieldReady:"शेतासाठी तयार",
badgeEcoFriendly:"पर्यावरणपूरक",

productAboutTag:"उत्पादनाबद्दल",
productOneRobot:"एक रोबोट. अनेक कामे.",
productAboutP:"अ‍ॅग्रीरोव्हर हे बहुउद्देशीय रोबोटिक प्लॅटफॉर्म आहे जे भारतातील लहान शेतकऱ्यांपर्यंत औद्योगिक दर्जाचे स्वयंचलन पोहोचवते. बदलता येणाऱ्या टूल अटॅचमेंट्ससह हे फवारणी, पेरणी आणि खत व्यवस्थापन करते — मजुरी खर्च कमी करते आणि उत्पादन वाढवते.",

productFeat1:"भारतीय शेत परिस्थितीसाठी मजबूत स्टील फ्रेम",
productFeat2:"खडबडीत जमिनीसाठी 10-इंच मजबूत चाके",
productFeat3:"1 किमी पर्यंत वायरलेस रिमोट रेंज",
productFeat4:"बदलता येणारी टूल अटॅचमेंट प्रणाली",
productFeat5:"कमी वीज, दीर्घकाळ कार्यरत",
productFeat6:"हवामान-प्रतिरोधक बंद इलेक्ट्रॉनिक्स",

exploreTechnology:"तंत्रज्ञान पहा →",

problemWeSolve:"आम्ही सोडवत असलेली समस्या",
probLaborTitle:"मजूर टंचाई",
probLaborDesc:"वाढती मजुरी खर्च.",
probCostTitle:"उच्च खर्च",
probCostDesc:"मशिनांची किंमत ₹5–8 लाख.",
probLargeTitle:"मोठी यंत्रे",
probLargeDesc:"लहान शेतांसाठी योग्य नाहीत.",
probManualTitle:"हस्तचालित काम",
probManualDesc:"अजूनही मानवी श्रमांवर अवलंबून.",

futureUpgrades:"भविष्यातील सुधारणा",
futureUpgradesList:"मोबाइल अ‍ॅप • एआय ऑटोमेशन • IoT एकत्रीकरण • सौर चार्जिंग",
requestDemo:"डेमोची विनंती करा →",

techPageHeroTitle:"अ‍ॅग्रीरोव्हरमागील अभियांत्रिकी",
techPageHeroSub:"स्मार्ट शेतीला सक्षम करणारी प्रगत रोबोटिक्स, एम्बेडेड सिस्टम्स आणि वायरलेस तंत्रज्ञान.",

sysArchitecture:"सिस्टम आर्किटेक्चर",
powerUnit:"पॉवर युनिट",
controlUnit:"नियंत्रण युनिट",
driveSystem:"ड्राइव्ह सिस्टम",
attachmentsCard:"अटॅचमेंट्स",

mechDesignTitle:"यांत्रिक डिझाइन",
mechDesignP:"मजबूत स्टील रचना, कॉम्पॅक्ट बॉडी आणि शेतासाठी योग्य चाकांसह बनवलेले.",
mechLi1:"स्टील फ्रेम",
mechLi2:"बंद बॉडी",
mechLi3:"10-इंच चाके",
mechLi4:"कॉम्पॅक्ट डिझाइन",

elecControlTitle:"इलेक्ट्रॉनिक्स आणि नियंत्रण",
microTitle:"मायक्रोकंट्रोलर",
motorDriver:"मोटर ड्रायव्हर",
powerSysTitle:"पॉवर सिस्टम",
safetyTitle:"सुरक्षा",

wirelessCommTitle:"वायरलेस कम्युनिकेशन",
wlLi1:"NRF / LoRa मॉड्यूल्स",
wlLi2:"1KM रेंज",
wlLi3:"कस्टम रिमोट",
wlLi4:"कमी वीज वापर",

futureTechSectionTitle:"भविष्यातील तंत्रज्ञान",
futureAiNav:"एआय नेव्हिगेशन",
futureIot:"IoT",
futureMobile:"मोबाइल अ‍ॅप",
futureSolar:"सौर",

invHeroTitle:"शेतीच्या भविष्यामध्ये गुंतवणूक करा",
invHeroSub:"अ‍ॅग्रीरोव्हर भारतातील लहान शेतकऱ्यांसाठी परवडणारे रोबोटिक शेती उपाय विकसित करत आहे.",
downloadPitch:"पिच डेक डाउनलोड करा",

invProblemTitle:"समस्या",

invProb1Title:"मजूर टंचाई",
invProb1Desc:"शेतकऱ्यांना मजुरांची कमतरता आणि वाढत्या मजुरीचा सामना करावा लागतो.",

invProb2Title:"महागडी यंत्रसामग्री",
invProb2Desc:"पारंपरिक ट्रॅक्टरची किंमत ₹5–8 लाख असते.",

invProb3Title:"लहान जमीन धारणा",
invProb3Desc:"बहुतेक शेतकऱ्यांकडे अतिशय कमी जमीन आहे.",

invProb4Title:"हस्तचालित शेती",
invProb4Desc:"बहुतेक शेती प्रक्रिया अजूनही हाताने केल्या जातात.",

invSolutionTitle:"आमचे समाधान",

invSol1Title:"कॉम्पॅक्ट इलेक्ट्रिक रोव्हर",
invSol1Desc:"लहान शेत आणि अरुंद जागांसाठी डिझाइन केलेले.",

invSol2Title:"रिमोट नियंत्रित",
invSol2Desc:"1 किमी पर्यंत वायरलेस रेंज.",

invSol3Title:"बहुउद्देशीय",
invSol3Desc:"फवारणी, पेरणी, खत टाकणे आणि अधिक.",

invSol4Title:"परवडणारे",
invSol4Desc:"अंदाजे किंमत ₹1 लाखांच्या आत.",

invMarketTitle:"बाजार संधी",

invTamTitle:"TAM",
invTamLine:"9.3 कोटी शेतकरी",
invTamDesc:"भारतामधील एकूण कृषी वापरकर्ते.",

invSamTitle:"SAM",
invSamLine:"86% लहान शेतकरी",
invSamDesc:"बहुसंख्य लहान आणि सीमांत शेतकरी आहेत.",

invSomTitle:"SOM",
invSomLine:"प्रारंभिक लक्ष्य विभाग",
invSomDesc:"2 एकरपेक्षा कमी जमीन असलेले शेतकरी.",

invInvestTitle:"गुंतवणूक संधी",
invInvestP:"अ‍ॅग्रीरोव्हर भारतभर विस्तारासाठी गुंतवणूकदार, एक्सेलेरेटर्स आणि धोरणात्मक भागीदार शोधत आहे.",

invCard1Title:"सीड गुंतवणूक",
invCard1Desc:"प्रोटोटाइप आणि उत्पादन टप्प्यासाठी सहाय्य.",

invCard2Title:"धोरणात्मक भागीदार",
invCard2Desc:"अ‍ॅग्री-टेक कंपन्यांसोबत सहकार्य करा.",

invCard3Title:"एक्सेलेरेटर्स",
invCard3Desc:"स्टार्टअप कार्यक्रम आणि विस्तार सहाय्यात सहभागी व्हा.",

invCtaTitle:"गुंतवणुकीत रस आहे?",
invCtaBtn:"गुंतवणुकीसाठी संपर्क करा",
blogHeroTitle:"अ‍ॅग्रीरोव्हर ब्लॉग",
blogHeroSub:"शेती, रोबोटिक्स आणि आमच्या स्टार्टअप प्रवासावरील अंतर्दृष्टी.",

blogLatestTitle:"नवीनतम लेख",

blogArt1Title:"शेतीतील एआय",
blogArt1Desc:"एआय आणि रोबोटिक्स आधुनिक शेतीत परिवर्तन घडवत आहेत.",

blogArt2Title:"लहान शेतकऱ्यांच्या समस्या",
blogArt2Desc:"उच्च खर्च, कमी तंत्रज्ञान उपलब्धता आणि मजूर टंचाई.",

blogArt3Title:"अ‍ॅग्रीरोव्हर का?",
blogArt3Desc:"खऱ्या शेती समस्यांचे निराकरण करण्यासाठी तयार केलेले.",

blogArt4Title:"शेतीतील रोबोटिक्स",
blogArt4Desc:"स्वयंचलन कार्यक्षमता आणि उत्पादन वाढवते.",

blogDevTitle:"विकास अद्यतने",

blogDev1Title:"प्रोटोटाइप विकास",
blogDev1Desc:"रिमोट सिस्टमसह पहिले कार्यरत मॉडेल तयार करत आहोत.",

blogDev2Title:"₹50,000 अनुदान प्राप्त",
blogDev2Desc:"महाविद्यालयीन नवोपक्रम कार्यक्रमाकडून समर्थन.",

blogFollowTitle:"आमच्या प्रवासासोबत रहा",
blogFollowSub:"अ‍ॅग्रीरोव्हरच्या प्रगती आणि नवकल्पनांबद्दल अद्ययावत रहा",
blogConnectBtn:"आमच्याशी जोडा",

contactPageTitle:"अ‍ॅग्रीरोव्हरशी संपर्क करा",
contactPageSub:"आम्हाला तुमच्याकडून ऐकायला आवडेल — शेतकरी, गुंतवणूकदार किंवा भागीदार.",
sendUsMessage:"आम्हाला संदेश पाठवा",
contactInformation:"संपर्क माहिती",
labelEmail:"ईमेल",
labelPhone:"फोन",
labelLocation:"स्थान",
placeholderName:"तुमचे नाव",
placeholderEmail:"तुमचा ईमेल",
placeholderSubject:"विषय",
placeholderMessage:"तुमचा संदेश",
sendMessageBtn:"संदेश पाठवा →",

teamHeroLabel:"लोक आणि ध्येय",
teamHeroTitle:"अ‍ॅग्रीरोव्हरमागील टीमला भेटा",
teamHeroLead:"आम्ही परवडणारी, शेतासाठी तयार रोबोटिक्स तयार करत आहोत जेणेकरून लहान आणि सीमांत शेतकरी कमी मेहनत, कमी अपव्यय आणि अधिक विश्वासार्ह परिणामांसह शेती करू शकतील.",

teamStat1:"शेतकरी-प्रथम उत्पादन निर्णय",
teamStat2:"भारतीय शेत आणि पिकांसाठी तयार",
teamStat3:"हार्डवेअर, एम्बेडेड आणि एआय एकाच प्रणालीत",

valuesHeading:"आम्ही कसे काम करतो",
valuesIntro:"अ‍ॅग्रीरोव्हरला प्रामाणिक, उपयुक्त आणि प्रत्यक्ष वापरासाठी तयार ठेवणारी तत्त्वे.",

valueH1:"बांधण्यापूर्वी ऐका",
valueP1:"आम्ही शेतकरी अभिप्राय आणि फील्ड ट्रायल्सना सत्याचा आधार मानतो — फक्त सादरीकरणांना नाही.",

valueH2:"गाजावाज्यापेक्षा विश्वासार्हता",
valueP2:"सोप्या यंत्रणा, चाचणीयोग्य इलेक्ट्रॉनिक्स आणि टिकाऊ कोड हे नाजूक डेमोपेक्षा चांगले आहेत.",

valueH3:"वर्तुळ वाढवा",
valueP3:"आम्ही अभियंते, कृषितज्ज्ञ आणि भागीदारांचे स्वागत करतो जे याच ध्येयासाठी काम करतात.",

foundersHeading:"संस्थापक टीम",
foundersIntro:"दिशा ठरवणारी मुख्य टीम.",

satyamRole:"संस्थापक — एआय आणि हार्डवेअर",
satyamBio:"अ‍ॅग्रीरोव्हरच्या तांत्रिक दिशेचे नेतृत्व: यांत्रिक व इलेक्ट्रॉनिक डिझाइन, रोबोटिक्स एकत्रीकरण आणि बुद्धिमान शेती स्वयंचलन.",

harishRole:"सह-संस्थापक — संशोधन आणि दस्तऐवजीकरण",
harishBio:"संशोधन, दस्तऐवजीकरण, अनुदान अर्ज आणि समन्वय सांभाळतात जेणेकरून टीम स्पष्टतेसह जलद पुढे जाऊ शकेल.",

tagRobotics:"रोबोटिक्स",
tagPrototyping:"प्रोटोटायपिंग",
tagSystems:"सिस्टम डिझाइन",
tagResearch:"संशोधन",
tagGrants:"अनुदान व कार्यक्रम",
tagOperations:"ऑपरेशन्स",

engSectionTitle:"अभियांत्रिकी टीम काय करते",
engSectionIntro:"अ‍ॅग्रीरोव्हर विकसित होत असताना आम्ही तयार करत असलेल्या क्षमता.",

engMechTitle:"यांत्रिक आणि हार्डवेअर",
engMechDesc:"चेसिस, अ‍ॅक्च्युएटर्स, पॉवर आणि सेन्सर्स — चिखल, धूळ आणि उन्हासाठी डिझाइन केलेले.",

engEmbTitle:"एम्बेडेड आणि फर्मवेअर",
engEmbDesc:"मायक्रोकंट्रोलर्स, मोटर नियंत्रण, वायरलेस लिंक आणि सुरक्षित रोबोट वर्तन.",

engSoftTitle:"सॉफ्टवेअर आणि एआय",
engSoftDesc:"फील्ड सॉफ्टवेअर, ट्रायल डेटा आणि मॉडेल्स जे फवारणी आणि नेव्हिगेशन अधिक स्मार्ट करतात.",

advisorsHeading:"सल्लागार",
advisorsIntro:"वास्तविक शेतीशी आम्हाला जोडून ठेवणारे क्षेत्रतज्ज्ञ.",

advAgTitle:"कृषी सल्लागार",
advAgDesc:"पीक चक्र, स्थानिक पद्धती आणि लहान शेतांसाठी योग्य उपाय.",

advTechTitle:"तांत्रिक मार्गदर्शक",
advTechDesc:"आर्किटेक्चर, उत्पादन क्षमता आणि हार्डवेअर स्टार्टअपचे जबाबदार स्केलिंग.",

supportHeading:"स्टार्टअप समर्थन",
supportIntro:"कार्यक्रम आणि मार्गदर्शक जे आमच्या अंमलबजावणीला परिसंस्थेशी जोडतात.",

supInnovTitle:"नवोपक्रम कार्यक्रम",
supInnovDesc:"इन्क्युबेशन, कोहोर्ट्स आणि संरचित समर्थन.",

supMentorsTitle:"मार्गदर्शक",
supMentorsDesc:"हार्डवेअर तयार केलेले आणि सुरुवातीच्या टप्प्यात वाढ साधलेले तज्ज्ञ.",

teamCtaTitle:"अ‍ॅग्रीरोव्हरमध्ये सहभागी व्हायचे आहे?",
teamCtaSub:"आम्ही अभियंते, मेकर्स आणि संशोधक शोधत आहोत ज्यांचे काम प्रत्यक्ष शेतात दिसेल.",
contactUsBtn:"आमच्याशी संपर्क करा"
});



Object.assign(translations.ta,{
readMore:"மேலும் படிக்க",

productHeroTitle:"அக்ரிரோவர் – ஸ்மார்ட் மினி விவசாய ரோபோ",
productHeroSub:"சிறு விவசாயிகளுக்காக வடிவமைக்கப்பட்ட குறுகிய மின்சார ரோபோ அமைப்பு — தெளித்தல், விதைத்தல், உரமிடல் மற்றும் பல பணிகளை தானியக்கமாக்குகிறது.",
watchDemo:"டெமோ பார்க்க",
badgeFieldReady:"பயிர் நிலத்திற்கு தயாராக",
badgeEcoFriendly:"சுற்றுச்சூழல் நட்பு",

productAboutTag:"தயாரிப்பு பற்றி",
productOneRobot:"ஒரு ரோபோ. பல வேலைகள்.",
productAboutP:"அக்ரிரோவர் என்பது இந்திய சிறு விவசாயிகளுக்கு தொழில்துறை தரமான தானியக்க சக்தியை கொண்டு வரும் பல்துறை ரோபோ தளம். மாற்றக்கூடிய கருவி இணைப்புகளுடன் இது தெளித்தல், விதைத்தல் மற்றும் உரமிடலை மேற்கொள்கிறது — தொழிலாளர் செலவை குறைத்து விளைச்சலை அதிகரிக்கிறது.",

productFeat1:"இந்திய வயல் நிலைக்கு ஏற்ற வலுவான எஃகு அமைப்பு",
productFeat2:"ஒற்றுமையற்ற நிலங்களுக்கு 10 அங்குல பலமான சக்கரங்கள்",
productFeat3:"1 கி.மீ வரை வயர்லெஸ் ரிமோட் வரம்பு",
productFeat4:"மாற்றக்கூடிய கருவி இணைப்பு அமைப்பு",
productFeat5:"குறைந்த மின்சாரம், நீண்டநேர செயல்பாடு",
productFeat6:"வானிலை எதிர்ப்பு பாதுகாக்கப்பட்ட மின்னணு அமைப்பு",

exploreTechnology:"தொழில்நுட்பத்தை அறிக →",

problemWeSolve:"நாங்கள் தீர்க்கும் பிரச்சினைகள்",
probLaborTitle:"தொழிலாளர் பற்றாக்குறை",
probLaborDesc:"உயரும் தொழிலாளர் செலவு.",
probCostTitle:"அதிக செலவு",
probCostDesc:"இயந்திரங்கள் ₹5–8 லட்சம் வரை செலவாகும்.",
probLargeTitle:"பெரிய இயந்திரங்கள்",
probLargeDesc:"சிறு நிலங்களுக்கு பொருத்தமல்ல.",
probManualTitle:"கைமுறை வேலை",
probManualDesc:"இன்னும் மனித உழைப்பை சார்ந்தது.",

futureUpgrades:"எதிர்கால மேம்பாடுகள்",
futureUpgradesList:"மொபைல் ஆப் • AI தானியக்கம் • IoT ஒருங்கிணைப்பு • சோலார் சார்ஜிங்",
requestDemo:"டெமோ கோரிக்கை →",

techPageHeroTitle:"அக்ரிரோவரின் பின்னணி பொறியியல்",
techPageHeroSub:"ஸ்மார்ட் விவசாயத்தை இயக்கும் மேம்பட்ட ரோபோடிக்ஸ், எம்பெடெட் அமைப்புகள் மற்றும் வயர்லெஸ் தொழில்நுட்பம்.",

sysArchitecture:"அமைப்பு வடிவமைப்பு",
powerUnit:"மின்சார அலகு",
controlUnit:"கட்டுப்பாட்டு அலகு",
driveSystem:"இயக்க அமைப்பு",
attachmentsCard:"இணைப்புகள்",

mechDesignTitle:"இயந்திர வடிவமைப்பு",
mechDesignP:"வலுவான எஃகு கட்டமைப்பு, குறுகிய உடல் வடிவம் மற்றும் நிலத்துக்கு ஏற்ற சக்கரங்களுடன் வடிவமைக்கப்பட்டது.",
mechLi1:"எஃகு அமைப்பு",
mechLi2:"மூடிய உடல்",
mechLi3:"10 அங்குல சக்கரங்கள்",
mechLi4:"சிறிய வடிவமைப்பு",

elecControlTitle:"மின்னணு & கட்டுப்பாடு",
microTitle:"மைக்ரோகண்ட்ரோலர்",
motorDriver:"மோட்டார் டிரைவர்",
powerSysTitle:"மின்சார அமைப்பு",
safetyTitle:"பாதுகாப்பு",

wirelessCommTitle:"வயர்லெஸ் தொடர்பு",
wlLi1:"NRF / LoRa தொகுதிகள்",
wlLi2:"1KM வரம்பு",
wlLi3:"தனிப்பயன் ரிமோட்",
wlLi4:"குறைந்த மின்சாரம்",

futureTechSectionTitle:"எதிர்கால தொழில்நுட்பம்",
futureAiNav:"AI வழிசெலுத்தல்",
futureIot:"IoT",
futureMobile:"மொபைல் ஆப்",
futureSolar:"சோலார்",

contactPageTitle:"அக்ரிரோவரை தொடர்பு கொள்ளுங்கள்",
contactPageSub:"விவசாயி, முதலீட்டாளர் அல்லது கூட்டாளர் — உங்களிடமிருந்து கேட்க விரும்புகிறோம்.",
sendUsMessage:"எங்களுக்கு செய்தி அனுப்புங்கள்",
contactInformation:"தொடர்பு தகவல்",
labelEmail:"மின்னஞ்சல்",
labelPhone:"தொலைபேசி",
labelLocation:"இடம்",
placeholderName:"உங்கள் பெயர்",
placeholderEmail:"உங்கள் மின்னஞ்சல்",
placeholderSubject:"பொருள்",
placeholderMessage:"உங்கள் செய்தி",
sendMessageBtn:"செய்தி அனுப்பு →",

teamHeroLabel:"மக்கள் மற்றும் இலக்கு",
teamHeroTitle:"அக்ரிரோவரின் பின்னணி அணியை சந்திக்கவும்",
teamHeroLead:"சிறு மற்றும் குறைந்த நிலப்பரப்பு விவசாயிகள் குறைந்த உழைப்பு, குறைந்த வீணாக்கம் மற்றும் அதிக நம்பகமான விளைவுகளுடன் விவசாயம் செய்ய மலிவான ரோபோ தீர்வுகளை உருவாக்குகிறோம்.",

teamStat1:"விவசாயி முன்னுரிமை தயாரிப்பு முடிவுகள்",
teamStat2:"இந்திய வயல்கள் மற்றும் பயிர்களுக்கு உருவாக்கப்பட்டது",
teamStat3:"ஹார்ட்வேர், எம்பெடெட் & AI ஒரே அமைப்பில்",


engSectionTitle:"பொறியியல் அணி செய்யும் பணிகள்",
engSectionIntro:"அக்ரிரோவர் வளர்ச்சியடையும் போது நாங்கள் உருவாக்கி வரும் திறன்கள்.",

engMechTitle:"இயந்திர & ஹார்ட்வேர்",
engMechDesc:"சாச்சி, இயக்கிகள், மின்சாரம் மற்றும் சென்சார்கள் — சேறு, தூசி மற்றும் வெயிலில் நீண்டநேர பயன்பாட்டிற்கு வடிவமைக்கப்பட்டது.",

engEmbTitle:"எம்பெடெட் & ஃபார்ம்வேர்",
engEmbDesc:"மைக்ரோகண்ட்ரோலர்கள், மோட்டார் கட்டுப்பாடு, வயர்லெஸ் இணைப்புகள் மற்றும் பாதுகாப்பான ரோபோ செயல்பாடு.",

engSoftTitle:"மென்பொருள் & AI",
engSoftDesc:"பயிர் நில மென்பொருள், சோதனை தரவு மற்றும் தெளித்தல்/வழிசெலுத்தலை மேம்படுத்தும் மாதிரிகள்.",

advisorsHeading:"ஆலோசகர்கள்",
advisorsIntro:"எங்கள் கருதுகோள்களை சோதித்து நிஜ வேளாண்மையுடன் இணைக்கும் துறை நிபுணர்கள்.",

advAgTitle:"வேளாண்மை ஆலோசகர்கள்",
advAgDesc:"பயிர் சுழற்சிகள், உள்ளூர் நடைமுறைகள் மற்றும் சிறிய நிலங்களுக்கு ஏற்ற தீர்வுகள்.",

advTechTitle:"தொழில்நுட்ப வழிகாட்டிகள்",
advTechDesc:"வடிவமைப்பு, உற்பத்தித்திறன் மற்றும் ஹார்ட்வேர் ஸ்டார்ட்அப்பை பொறுப்புடன் விரிவாக்குதல்.",

supportHeading:"ஸ்டார்ட்அப் ஆதரவு",
supportIntro:"எங்கள் செயல்பாட்டை சூழலுடன் இணைக்கும் திட்டங்கள் மற்றும் வழிகாட்டிகள்.",

supInnovTitle:"புதுமை திட்டங்கள்",
supInnovDesc:"இன்க்யூபேஷன், குழு ஆதரவு மற்றும் கட்டமைக்கப்பட்ட உதவி.",

supMentorsTitle:"வழிகாட்டிகள்",
supMentorsDesc:"ஹார்ட்வேர் உருவாக்கி ஆரம்ப வளர்ச்சியை வழிநடத்திய நிபுணர்கள்.",

teamCtaTitle:"அக்ரிரோவரில் சேர விரும்புகிறீர்களா?",

teamCtaSub:"உண்மையான வயல்களில் பயன்படும் பணியை உருவாக்க விரும்பும் பொறியாளர்கள், மேக்கர்கள் மற்றும் ஆராய்ச்சியாளர்களை நாங்கள் தேடுகிறோம்.",

contactUsBtn:"எங்களை தொடர்பு கொள்ளுங்கள்",



valuesHeading:"நாங்கள் எப்படி செயல்படுகிறோம்",
valuesIntro:"அக்ரிரோவரை நேர்மையான, பயனுள்ள மற்றும் செயல்படுத்தக்கூடியதாக வைத்திருக்கும் கொள்கைகள்.",

valueH1:"உருவாக்குவதற்கு முன் கேளுங்கள்",
valueP1:"விவசாயி கருத்து மற்றும் புல பரிசோதனைகளை உண்மையின் ஆதாரமாக கருதுகிறோம்.",

valueH2:"பிரசாரத்தை விட நம்பகத்தன்மை",
valueP2:"எளிய இயந்திரங்கள், சோதிக்கக்கூடிய மின்னணுக்கள், பராமரிக்கக்கூடிய குறியீடுகள் — பலவீனமான டெமோக்களை விட சிறந்தவை.",

valueH3:"வட்டத்தை விரிவாக்குங்கள்",
valueP3:"எங்கள் இலக்கை பகிரும் பொறியாளர்கள், வேளாண் நிபுணர்கள் மற்றும் கூட்டாளர்களை வரவேற்கிறோம்.",

foundersHeading:"நிறுவனர் அணி",
foundersIntro:"திசையை அமைக்கும் முக்கிய குழு.",

satyamRole:"நிறுவனர் — AI & ஹார்ட்வேர்",
satyamBio:"அக்ரிரோவரின் தொழில்நுட்ப திசையை வழிநடத்துகிறார்: இயந்திர/மின்னணு வடிவமைப்பு, ரோபோ ஒருங்கிணைப்பு மற்றும் நுண்ணறிவு தானியக்கம்.",

harishRole:"இணை நிறுவனர் — ஆராய்ச்சி & ஆவணப்படுத்தல்",
harishBio:"ஆராய்ச்சி, ஆவணப்படுத்தல், நிதியுதவி விண்ணப்பங்கள் மற்றும் ஒருங்கிணைப்பை மேற்கொள்கிறார்.",

tagRobotics:"ரோபோடிக்ஸ்",
tagPrototyping:"மாதிரி உருவாக்கம்",
tagSystems:"அமைப்பு வடிவமைப்பு",
tagResearch:"ஆராய்ச்சி",
tagGrants:"நிதியுதவி & திட்டங்கள்",
tagOperations:"செயல்பாடுகள்",

invHeroTitle:"விவசாயத்தின் எதிர்காலத்தில் முதலீடு செய்யுங்கள்",
invHeroSub:"இந்திய சிறு விவசாயிகளுக்கான மலிவான ரோபோ விவசாய தீர்வுகளை அக்ரிரோவர் உருவாக்குகிறது.",
downloadPitch:"பிட்ச் டெக் பதிவிறக்கவும்",
invProblemTitle:"பிரச்சினை",

invProb1Title:"தொழிலாளர் பற்றாக்குறை",
invProb1Desc:"விவசாயிகள் தொழிலாளர் பற்றாக்குறை மற்றும் உயர்ந்த கூலியை எதிர்கொள்கிறார்கள்.",

invProb2Title:"அதிக விலை இயந்திரங்கள்",
invProb2Desc:"பாரம்பரிய டிராக்டர்கள் ₹5–8 லட்சம் செலவாகும்.",

invProb3Title:"சிறிய நிலப்பரப்பு",
invProb3Desc:"பெரும்பாலான விவசாயிகளிடம் மிகவும் குறைந்த நிலம் மட்டுமே உள்ளது.",

invProb4Title:"கைமுறை விவசாயம்",
invProb4Desc:"பெரும்பாலான பணிகள் இன்னும் கைமுறையாகவே நடைபெறுகின்றன.",

invSolutionTitle:"எங்கள் தீர்வு",

invSol1Title:"சிறிய மின்சார ரோவர்",
invSol1Desc:"சிறிய பண்ணைகள் மற்றும் குறுகிய வயல்களுக்கு வடிவமைக்கப்பட்டது.",

invSol2Title:"ரிமோட் கட்டுப்பாடு",
invSol2Desc:"1 கி.மீ வரை வயர்லெஸ் வரம்பு.",

invSol3Title:"பல்நோக்கு பயன்பாடு",
invSol3Desc:"தெளித்தல், விதைத்தல், உரமிடல் மற்றும் பல.",

invSol4Title:"மலிவானது",
invSol4Desc:"₹1 லட்சத்திற்குள் மதிப்பிடப்பட்ட செலவு.",

invMarketTitle:"சந்தை வாய்ப்பு",

invTamTitle:"TAM",
invTamLine:"9.3 கோடி விவசாயிகள்",
invTamDesc:"இந்தியாவின் மொத்த வேளாண் பயனாளர்கள்.",

invSamTitle:"SAM",
invSamLine:"86% சிறு விவசாயிகள்",
invSamDesc:"பெரும்பாலானோர் சிறு மற்றும் குறைந்த நில விவசாயிகள்.",

invSomTitle:"SOM",
invSomLine:"ஆரம்ப இலக்கு பகுதி",
invSomDesc:"2 ஏக்கருக்கு குறைவான நிலம் கொண்ட விவசாயிகள்.",

invInvestTitle:"முதலீட்டு வாய்ப்பு",
invInvestP:"அக்ரிரோவர் இந்தியா முழுவதும் விரிவடைய முதலீட்டாளர்கள், ஆக்சிலரேட்டர்கள் மற்றும் மூலோபாய கூட்டாளர்களை தேடுகிறது.",

invCard1Title:"Seed முதலீடு",
invCard1Desc:"மாதிரி மற்றும் உற்பத்தி கட்டத்திற்கு ஆதரவு.",

invCard2Title:"மூலோபாய கூட்டாளர்கள்",
invCard2Desc:"அக்ரி-டெக் நிறுவனங்களுடன் இணைந்து செயல்படுங்கள்.",

invCard3Title:"ஆக்சிலரேட்டர்கள்",
invCard3Desc:"ஸ்டார்ட்அப் திட்டங்கள் மற்றும் விரிவாக்க ஆதரவுடன் இணைக.",

invCtaTitle:"முதலீட்டில் ஆர்வமா?",
invCtaBtn:"முதலீட்டிற்காக தொடர்பு கொள்ளுங்கள்",

blogHeroTitle:"அக்ரிரோவர் வலைப்பதிவு",
blogHeroSub:"விவசாயம், ரோபோடிக்ஸ் மற்றும் எங்கள் ஸ்டார்ட்அப் பயணம் பற்றிய பார்வைகள்.",
blogLatestTitle:"சமீபத்திய கட்டுரைகள்",

blogArt1Title:"விவசாயத்தில் AI",
blogArt1Desc:"AI மற்றும் ரோபோடிக்ஸ் நவீன விவசாயத்தை மாற்றுகின்றன.",
blogArt2Title:"சிறு விவசாயிகளின் சிக்கல்கள்",
blogArt2Desc:"அதிக செலவு, குறைந்த தொழில்நுட்ப அணுகல் மற்றும் தொழிலாளர் பற்றாக்குறை.",
blogArt3Title:"ஏன் அக்ரிரோவர்?",
blogArt3Desc:"உண்மையான விவசாய சிக்கல்களை தீர்க்க உருவாக்கப்பட்டது.",
blogArt4Title:"விவசாயத்தில் ரோபோடிக்ஸ்",
blogArt4Desc:"தானியக்கம் செயல்திறனை உயர்த்தி விளைச்சலை அதிகரிக்கிறது.",

blogDevTitle:"மேம்பாட்டு புதுப்பிப்புகள்",
blogDev1Title:"மாதிரி உருவாக்கம்",
blogDev1Desc:"ரிமோட் அமைப்புடன் முதல் செயல்படும் மாதிரியை உருவாக்குகிறோம்.",
blogDev2Title:"₹50,000 நிதியுதவி பெற்றோம்",
blogDev2Desc:"கல்லூரி புதுமை திட்ட ஆதரவு.",

blogFollowTitle:"எங்கள் பயணத்தை தொடர்ந்து பின்தொடருங்கள்",
blogFollowSub:"அக்ரிரோவரின் முன்னேற்றம் மற்றும் புதுமைகளுடன் புதுப்பித்திருங்கள்",
blogConnectBtn:"எங்களுடன் இணையுங்கள்"
});



Object.assign(translations.te,{
readMore:"ఇంకా చదవండి",

productHeroTitle:"అగ్రిరోవర్ – స్మార్ట్ మినీ వ్యవసాయ రోబోట్",
productHeroSub:"చిన్న రైతుల కోసం రూపొందించిన కాంపాక్ట్ ఎలక్ట్రిక్ రోబోటిక్ వ్యవస్థ — పిచికారీ, విత్తనం, ఎరువుల పంపిణీ మరియు మరిన్ని పనులను ఆటోమేట్ చేస్తుంది.",
watchDemo:"డెమో చూడండి",
badgeFieldReady:"పొలానికి సిద్ధం",
badgeEcoFriendly:"పర్యావరణ హితం",

productAboutTag:"ఉత్పత్తి గురించి",
productOneRobot:"ఒక రోబోట్. అనేక పనులు.",
productAboutP:"అగ్రిరోవర్ భారతదేశంలోని చిన్న రైతులకు పారిశ్రామిక స్థాయి ఆటోమేషన్‌ను అందించే బహుళ ప్రయోజన రోబోటిక్ ప్లాట్‌ఫారమ్. మార్చగలిగే టూల్ అటాచ్‌మెంట్‌లతో ఇది పిచికారీ, విత్తనం మరియు ఎరువుల పనులను నిర్వహిస్తుంది — కూలీ ఖర్చును తగ్గించి దిగుబడిని పెంచుతుంది.",

productFeat1:"భారతీయ పొల పరిస్థితులకు బలమైన స్టీల్ ఫ్రేమ్",
productFeat2:"అసమాన భూములకు 10 అంగుళాల బలమైన చక్రాలు",
productFeat3:"1 కి.మీ వరకు వైర్‌లెస్ రిమోట్ పరిధి",
productFeat4:"మార్చగలిగే టూల్ అటాచ్‌మెంట్ వ్యవస్థ",
productFeat5:"తక్కువ విద్యుత్, ఎక్కువసేపు పని",
productFeat6:"వాతావరణ నిరోధక రక్షిత ఎలక్ట్రానిక్స్",

exploreTechnology:"సాంకేతికత తెలుసుకోండి →",

problemWeSolve:"మేము పరిష్కరిస్తున్న సమస్యలు",
probLaborTitle:"కూలీల కొరత",
probLaborDesc:"పెరుగుతున్న కూలీ ఖర్చు.",
probCostTitle:"అధిక ఖర్చు",
probCostDesc:"యంత్రాల ధర ₹5–8 లక్షలు.",
probLargeTitle:"పెద్ద యంత్రాలు",
probLargeDesc:"చిన్న పొలాలకు అనుకూలం కాదు.",
probManualTitle:"చేతిపని",
probManualDesc:"ఇంకా మానవ శ్రమపై ఆధారపడి ఉంది.",

futureUpgrades:"భవిష్యత్ మెరుగుదలలు",
futureUpgradesList:"మొబైల్ యాప్ • AI ఆటోమేషన్ • IoT సమీకరణ • సోలార్ ఛార్జింగ్",
requestDemo:"డెమో అభ్యర్థించండి →",

techPageHeroTitle:"అగ్రిరోవర్ వెనుక ఇంజినీరింగ్",
techPageHeroSub:"స్మార్ట్ వ్యవసాయాన్ని నడిపించే ఆధునిక రోబోటిక్స్, ఎంబెడెడ్ సిస్టమ్స్ మరియు వైర్‌లెస్ టెక్నాలజీ.",

sysArchitecture:"సిస్టమ్ నిర్మాణం",
powerUnit:"పవర్ యూనిట్",
controlUnit:"నియంత్రణ యూనిట్",
driveSystem:"డ్రైవ్ సిస్టమ్",
attachmentsCard:"అటాచ్‌మెంట్‌లు",

mechDesignTitle:"యాంత్రిక రూపకల్పన",
mechDesignP:"బలమైన స్టీల్ నిర్మాణం, కాంపాక్ట్ బాడీ మరియు భూమికి అనుకూల చక్రాలతో రూపొందించబడింది.",
mechLi1:"స్టీల్ ఫ్రేమ్",
mechLi2:"మూసివేసిన బాడీ",
mechLi3:"10 అంగుళాల చక్రాలు",
mechLi4:"కాంపాక్ట్ డిజైన్",

elecControlTitle:"ఎలక్ట్రానిక్స్ & నియంత్రణ",
microTitle:"మైక్రోకంట్రోలర్",
motorDriver:"మోటార్ డ్రైవర్",
powerSysTitle:"పవర్ సిస్టమ్",
safetyTitle:"భద్రత",

wirelessCommTitle:"వైర్‌లెస్ కమ్యూనికేషన్",
wlLi1:"NRF / LoRa మాడ్యూల్స్",
wlLi2:"1KM పరిధి",
wlLi3:"కస్టమ్ రిమోట్",
wlLi4:"తక్కువ విద్యుత్ వినియోగం",

futureTechSectionTitle:"భవిష్యత్ సాంకేతికత",
futureAiNav:"AI నావిగేషన్",
futureIot:"IoT",
futureMobile:"మొబైల్ యాప్",
futureSolar:"సౌర శక్తి",

contactPageTitle:"అగ్రిరోవర్‌ను సంప్రదించండి",
contactPageSub:"రైతు, పెట్టుబడిదారు లేదా భాగస్వామి — మీ నుండి వినాలని మేము కోరుకుంటున్నాం.",
sendUsMessage:"మాకు సందేశం పంపండి",
contactInformation:"సంప్రదింపు సమాచారం",
labelEmail:"ఇమెయిల్",
labelPhone:"ఫోన్",
labelLocation:"స్థానం",
placeholderName:"మీ పేరు",
placeholderEmail:"మీ ఇమెయిల్",
placeholderSubject:"విషయం",
placeholderMessage:"మీ సందేశం",
sendMessageBtn:"సందేశం పంపండి →",

teamHeroLabel:"ప్రజలు మరియు లక్ష్యం",
teamHeroTitle:"అగ్రిరోవర్ వెనుక ఉన్న బృందాన్ని కలవండి",
teamHeroLead:"చిన్న మరియు సరిహద్దు రైతులు తక్కువ శ్రమతో, తక్కువ వృథాతో మరియు మెరుగైన ఫలితాలతో వ్యవసాయం చేయడానికి మేము అందుబాటులో ఉండే రోబోటిక్ పరిష్కారాలను రూపొందిస్తున్నాం.",

teamStat1:"రైతు-మొదటి ఉత్పత్తి నిర్ణయాలు",
teamStat2:"భారతీయ పొలాలు మరియు పంటల కోసం రూపొందించబడింది",
teamStat3:"హార్డ్వేర్, ఎంబెడెడ్ & AI ఒకే వ్యవస్థలో",

valuesHeading:"మేము ఎలా పనిచేస్తాము",
valuesIntro:"అగ్రిరోవర్‌ను నిజాయితీగా, ఉపయోగకరంగా మరియు అమలుచేయదగినదిగా ఉంచే సూత్రాలు.",

valueH1:"నిర్మించేముందు వినండి",
valueP1:"రైతుల అభిప్రాయం మరియు ఫీల్డ్ ట్రయల్స్‌ను మేము నిజమైన ఆధారంగా భావిస్తాము.",

valueH2:"ప్రచారం కంటే నమ్మకత్వం",
valueP2:"సులభమైన యంత్రాలు, పరీక్షించదగిన ఎలక్ట్రానిక్స్ మరియు నిర్వహించదగిన కోడ్ ఉత్తమం.",

valueH3:"వలయాన్ని విస్తరించండి",
valueP3:"మా లక్ష్యాన్ని పంచుకునే ఇంజినీర్లు, వ్యవసాయ నిపుణులు మరియు భాగస్వాములను మేము ఆహ్వానిస్తున్నాము.",

foundersHeading:"స్థాపక బృందం",
foundersIntro:"దిశను నిర్ణయించే ప్రధాన బృందం.",

satyamRole:"స్థాపకుడు — AI & హార్డ్వేర్",
satyamBio:"అగ్రిరోవర్ సాంకేతిక దిశను నడిపిస్తున్నారు.",

harishRole:"సహ-స్థాపకుడు — పరిశోధన & డాక్యుమెంటేషన్",
harishBio:"పరిశోధన, డాక్యుమెంటేషన్, గ్రాంట్ దరఖాస్తులు మరియు సమన్వయాన్ని నిర్వహిస్తారు.",

tagRobotics:"రోబోటిక్స్",
tagPrototyping:"ప్రోటోటైపింగ్",
tagSystems:"సిస్టమ్ డిజైన్",
tagResearch:"పరిశోధన",
tagGrants:"గ్రాంట్లు & ప్రోగ్రాములు",
tagOperations:"ఆపరేషన్స్",

engSectionTitle:"ఇంజినీరింగ్ బృందం చేసే పని",
engSectionIntro:"అగ్రిరోవర్ అభివృద్ధి చెందుతున్నప్పుడు మేము నిర్మిస్తున్న సామర్థ్యాలు.",
engMechTitle:"మెకానికల్ & హార్డ్వేర్",
engMechDesc:"చాసిస్, యాక్యుయేటర్లు, పవర్ మరియు సెన్సర్లు.",
engEmbTitle:"ఎంబెడెడ్ & ఫర్మ్‌వేర్",
engEmbDesc:"మైక్రోకంట్రోలర్లు, మోటార్ నియంత్రణ, వైర్‌లెస్ లింకులు.",
engSoftTitle:"సాఫ్ట్‌వేర్ & AI",
engSoftDesc:"ఫీల్డ్ సాఫ్ట్‌వేర్ మరియు AI మోడల్స్.",

advisorsHeading:"సలహాదారులు",
advisorsIntro:"మా ఆలోచనలను పరీక్షించే నిపుణులు.",
advAgTitle:"వ్యవసాయ సలహాదారులు",
advAgDesc:"పంట చక్రాలు మరియు స్థానిక పద్ధతులు.",
advTechTitle:"సాంకేతిక మార్గదర్శకులు",
advTechDesc:"రూపకల్పన మరియు ఉత్పత్తి సామర్థ్యం.",

supportHeading:"స్టార్టప్ మద్దతు",
supportIntro:"మా అమలును వ్యవస్థతో కలిపే కార్యక్రమాలు.",
supInnovTitle:"ఆవిష్కరణ కార్యక్రమాలు",
supInnovDesc:"ఇంక్యూబేషన్ మరియు నిర్మిత సహాయం.",
supMentorsTitle:"మెంటర్లు",
supMentorsDesc:"హార్డ్వేర్ అభివృద్ధిని నడిపించిన నిపుణులు.",

teamCtaTitle:"అగ్రిరోవర్‌లో చేరాలనుకుంటున్నారా?",
teamCtaSub:"నిజమైన పొలాల్లో ఉపయోగపడే పనిని చేయాలనుకునే ఇంజినీర్లు, మేకర్లు మరియు పరిశోధకులను మేము వెతుకుతున్నాము.",
contactUsBtn:"మమ్మల్ని సంప్రదించండి",

invHeroTitle:"వ్యవసాయం భవిష్యత్తులో పెట్టుబడి పెట్టండి",
invHeroSub:"భారత చిన్న రైతుల కోసం అందుబాటు ధరలో రోబోటిక్ వ్యవసాయ పరిష్కారాలను అగ్రిరోవర్ రూపొందిస్తోంది.",
downloadPitch:"పిచ్ డెక్ డౌన్‌లోడ్ చేయండి",

invProblemTitle:"సమస్య",
invProb1Title:"కూలీల కొరత",
invProb1Desc:"రైతులు కూలీల కొరతను ఎదుర్కొంటున్నారు.",
invProb2Title:"అధిక ధర యంత్రాలు",
invProb2Desc:"సాంప్రదాయ ట్రాక్టర్లు ₹5–8 లక్షలు.",
invProb3Title:"చిన్న భూభాగం",
invProb3Desc:"చాలా మంది రైతులకు తక్కువ భూమి మాత్రమే ఉంది.",
invProb4Title:"చేతిపని వ్యవసాయం",
invProb4Desc:"చాలా పనులు ఇంకా చేతితోనే జరుగుతున్నాయి.",

invSolutionTitle:"మా పరిష్కారం",
invSol1Title:"చిన్న ఎలక్ట్రిక్ రోవర్",
invSol1Desc:"చిన్న పొలాల కోసం రూపొందించబడింది.",
invSol2Title:"రిమోట్ నియంత్రణ",
invSol2Desc:"1 కి.మీ వరకు వైర్‌లెస్ పరిధి.",
invSol3Title:"బహుళ ప్రయోజనాలు",
invSol3Desc:"పిచికారీ, విత్తనం, ఎరువులు మరియు మరిన్ని.",
invSol4Title:"అందుబాటు ధర",
invSol4Desc:"₹1 లక్షలోపు అంచనా ఖర్చు.",

/* ===== MARKET SECTION ===== */
invMarketTitle:"మార్కెట్ అవకాశం",

invTamTitle:"TAM",
invTamLine:"9.3 కోట్లు రైతులు",
invTamDesc:"భారతదేశంలో మొత్తం వ్యవసాయ వినియోగదారులు.",

invSamTitle:"SAM",
invSamLine:"86% చిన్న రైతులు",
invSamDesc:"అధికంగా చిన్న మరియు పరిమిత భూమి రైతులు.",

invSomTitle:"SOM",
invSomLine:"ప్రారంభ లక్ష్య విభాగం",
invSomDesc:"2 ఎకరాలకు తగ్గ భూమి కలిగిన రైతులు.",


/* ===== INVESTMENT SECTION ===== */
invInvestTitle:"పెట్టుబడి అవకాశం",
invInvestP:"అగ్రిరోవర్ భారతదేశంలో విస్తరణ కోసం పెట్టుబడిదారులు, యాక్సిలరేటర్లు మరియు వ్యూహాత్మక భాగస్వాములను వెతుకుతోంది.",

invCard1Title:"సీడ్ పెట్టుబడి",
invCard1Desc:"ప్రోటోటైప్ మరియు తయారీ దశ నిధులు.",

invCard2Title:"వ్యూహాత్మక భాగస్వాములు",
invCard2Desc:"అగ్రి-టెక్ కంపెనీలతో సహకరించండి.",

invCard3Title:"యాక్సిలరేటర్లు",
invCard3Desc:"స్టార్టప్ ప్రోగ్రామ్స్ మరియు విస్తరణ మద్దతులో చేరండి.",


/* ===== CTA SECTION ===== */
invCtaTitle:"పెట్టుబడిలో ఆసక్తి ఉందా?",
invCtaBtn:"పెట్టుబడికి సంప్రదించండి",

blogHeroTitle:"అగ్రిరోవర్ బ్లాగ్",
blogHeroSub:"వ్యవసాయం, రోబోటిక్స్ మరియు మా స్టార్టప్ ప్రయాణంపై అవగాహన.",
blogLatestTitle:"తాజా వ్యాసాలు",
blogArt1Title:"వ్యవసాయంలో AI",
blogArt1Desc:"AI మరియు రోబోటిక్స్ ఆధునిక వ్యవసాయాన్ని మారుస్తున్నాయి.",
blogArt2Title:"చిన్న రైతుల సమస్యలు",
blogArt2Desc:"అధిక ఖర్చు మరియు కూలీల కొరత.",
blogArt3Title:"ఎందుకు అగ్రిరోవర్?",
blogArt3Desc:"నిజమైన వ్యవసాయ సమస్యలకు పరిష్కారం.",
blogArt4Title:"వ్యవసాయంలో రోబోటిక్స్",
blogArt4Desc:"ఆటోమేషన్ దిగుబడిని పెంచుతుంది.",

blogDevTitle:"అభివృద్ధి నవీకరణలు",
blogDev1Title:"ప్రోటోటైప్ అభివృద్ధి",
blogDev1Desc:"మొదటి పనిచేసే నమూనా రూపొందుతోంది.",
blogDev2Title:"₹50,000 గ్రాంట్ పొందాం",
blogDev2Desc:"కాలేజీ ఆవిష్కరణ ప్రోగ్రామ్ మద్దతు.",
blogFollowTitle:"మా ప్రయాణాన్ని అనుసరించండి",
blogFollowSub:"అగ్రిరోవర్ పురోగతితో అప్డేట్‌గా ఉండండి",
blogConnectBtn:"మాతో కలవండి"
});



Object.assign(translations.pa,{
readMore:"ਹੋਰ ਪੜ੍ਹੋ",

productHeroTitle:"ਐਗ੍ਰੀਰੋਵਰ – ਸਮਾਰਟ ਮਿਨੀ ਖੇਤੀ ਰੋਬੋਟ",
productHeroSub:"ਛੋਟੇ ਕਿਸਾਨਾਂ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਕੰਪੈਕਟ ਇਲੈਕਟ੍ਰਿਕ ਰੋਬੋਟਿਕ ਸਿਸਟਮ — ਛਿੜਕਾਅ, ਬੀਜ ਬੋਣਾ, ਖਾਦ ਵੰਡ ਅਤੇ ਹੋਰ ਕੰਮ ਆਟੋਮੇਟ ਕਰਦਾ ਹੈ।",
watchDemo:"ਡੈਮੋ ਵੇਖੋ",
badgeFieldReady:"ਖੇਤ ਲਈ ਤਿਆਰ",
badgeEcoFriendly:"ਪਰਿਆਵਰਣ ਮਿੱਤਰ",

productAboutTag:"ਉਤਪਾਦ ਬਾਰੇ",
productOneRobot:"ਇੱਕ ਰੋਬੋਟ। ਕਈ ਕੰਮ।",
productAboutP:"ਐਗ੍ਰੀਰੋਵਰ ਇੱਕ ਬਹੁ-ਉਦੇਸ਼ੀ ਰੋਬੋਟਿਕ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਭਾਰਤ ਦੇ ਛੋਟੇ ਕਿਸਾਨਾਂ ਤੱਕ ਉਦਯੋਗਿਕ ਦਰਜੇ ਦੀ ਆਟੋਮੇਸ਼ਨ ਲਿਆਉਂਦਾ ਹੈ। ਬਦਲਣਯੋਗ ਟੂਲ ਅਟੈਚਮੈਂਟ ਨਾਲ ਇਹ ਛਿੜਕਾਅ, ਬੀਜ ਬੋਣਾ ਅਤੇ ਖਾਦ ਦੇ ਕੰਮ ਕਰਦਾ ਹੈ — ਮਜ਼ਦੂਰੀ ਖਰਚ ਘਟਾਉਂਦਾ ਅਤੇ ਪੈਦਾਵਾਰ ਵਧਾਉਂਦਾ ਹੈ।",

missionTitle:"ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਦਾ ਭਵਿੱਖ ਬਣਾਉਣਾ",
productFeat1:"ਭਾਰਤੀ ਖੇਤ ਹਾਲਾਤਾਂ ਲਈ ਮਜ਼ਬੂਤ ਸਟੀਲ ਫ੍ਰੇਮ",
productFeat2:"ਉਬੜ-ਖਾਬੜ ਜ਼ਮੀਨ ਲਈ 10 ਇੰਚ ਮਜ਼ਬੂਤ ਪਹੀਏ",
productFeat3:"1 ਕਿਮੀ ਤੱਕ ਵਾਇਰਲੈੱਸ ਰਿਮੋਟ ਰੇਂਜ",
productFeat4:"ਬਦਲਣਯੋਗ ਟੂਲ ਅਟੈਚਮੈਂਟ ਸਿਸਟਮ",
productFeat5:"ਘੱਟ ਬਿਜਲੀ, ਲੰਬਾ ਚੱਲਣ ਵਾਲਾ ਆਪਰੇਸ਼ਨ",
productFeat6:"ਮੌਸਮ-ਰੋਧਕ ਸੁਰੱਖਿਅਤ ਇਲੈਕਟ੍ਰਾਨਿਕਸ",

exploreTechnology:"ਤਕਨਾਲੋਜੀ ਜਾਣੋ →",

problemWeSolve:"ਅਸੀਂ ਜੋ ਸਮੱਸਿਆ ਹੱਲ ਕਰਦੇ ਹਾਂ",
probLaborTitle:"ਮਜ਼ਦੂਰਾਂ ਦੀ ਘਾਟ",
probLaborDesc:"ਵਧਦੀ ਮਜ਼ਦੂਰੀ ਲਾਗਤ।",
probCostTitle:"ਉੱਚ ਲਾਗਤ",
probCostDesc:"ਮਸ਼ੀਨਾਂ ਦੀ ਕੀਮਤ ₹5–8 ਲੱਖ।",
probLargeTitle:"ਵੱਡੀਆਂ ਮਸ਼ੀਨਾਂ",
probLargeDesc:"ਛੋਟੇ ਖੇਤਾਂ ਲਈ ਉਚਿਤ ਨਹੀਂ।",
probManualTitle:"ਹੱਥੋਂ ਕੰਮ",
probManualDesc:"ਅਜੇ ਵੀ ਮਨੁੱਖੀ ਮਿਹਨਤ ਉੱਤੇ ਨਿਰਭਰ।",

futureUpgrades:"ਭਵਿੱਖੀ ਸੁਧਾਰ",
futureUpgradesList:"ਮੋਬਾਈਲ ਐਪ • AI ਆਟੋਮੇਸ਼ਨ • IoT ਇੰਟੀਗ੍ਰੇਸ਼ਨ • ਸੋਲਰ ਚਾਰਜਿੰਗ",
requestDemo:"ਡੈਮੋ ਲਈ ਬੇਨਤੀ ਕਰੋ →",

techPageHeroTitle:"ਐਗ੍ਰੀਰੋਵਰ ਦੇ ਪਿੱਛੇ ਦੀ ਇੰਜੀਨੀਅਰਿੰਗ",
techPageHeroSub:"ਸਮਾਰਟ ਖੇਤੀ ਨੂੰ ਚਲਾਉਣ ਵਾਲੀ ਉੱਚ-ਸਤ੍ਹਾ ਰੋਬੋਟਿਕਸ, ਐਮਬੈਡਡ ਸਿਸਟਮ ਅਤੇ ਵਾਇਰਲੈੱਸ ਤਕਨਾਲੋਜੀ।",

sysArchitecture:"ਸਿਸਟਮ ਆਰਕੀਟੈਕਚਰ",
powerUnit:"ਪਾਵਰ ਯੂਨਿਟ",
controlUnit:"ਕੰਟਰੋਲ ਯੂਨਿਟ",
driveSystem:"ਡਰਾਈਵ ਸਿਸਟਮ",
attachmentsCard:"ਅਟੈਚਮੈਂਟ",

mechDesignTitle:"ਮਕੈਨਿਕਲ ਡਿਜ਼ਾਈਨ",
mechDesignP:"ਮਜ਼ਬੂਤ ਸਟੀਲ ਬਣਤਰ, ਕੰਪੈਕਟ ਬਾਡੀ ਅਤੇ ਖੇਤ-ਉਪਯੋਗੀ ਪਹੀਆਂ ਨਾਲ ਬਣਾਇਆ ਗਿਆ।",
mechLi1:"ਸਟੀਲ ਫ੍ਰੇਮ",
mechLi2:"ਬੰਦ ਬਾਡੀ",
mechLi3:"10 ਇੰਚ ਪਹੀਏ",
mechLi4:"ਕੰਪੈਕਟ ਡਿਜ਼ਾਈਨ",

elecControlTitle:"ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਅਤੇ ਕੰਟਰੋਲ",
microTitle:"ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ",
motorDriver:"ਮੋਟਰ ਡਰਾਈਵਰ",
powerSysTitle:"ਪਾਵਰ ਸਿਸਟਮ",
safetyTitle:"ਸੁਰੱਖਿਆ",

wirelessCommTitle:"ਵਾਇਰਲੈੱਸ ਸੰਚਾਰ",
wlLi1:"NRF / LoRa ਮੋਡੀਊਲ",
wlLi2:"1KM ਰੇਂਜ",
wlLi3:"ਕਸਟਮ ਰਿਮੋਟ",
wlLi4:"ਘੱਟ ਬਿਜਲੀ ਵਰਤੋਂ",

futureTechSectionTitle:"ਭਵਿੱਖ ਦੀ ਤਕਨਾਲੋਜੀ",
futureAiNav:"AI ਨੈਵੀਗੇਸ਼ਨ",
futureIot:"IoT",
futureMobile:"ਮੋਬਾਈਲ ਐਪ",
futureSolar:"ਸੋਲਰ",

contactPageTitle:"ਐਗ੍ਰੀਰੋਵਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
contactPageSub:"ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸੁਣਨਾ ਚਾਹੁੰਦੇ ਹਾਂ — ਕਿਸਾਨ, ਨਿਵੇਸ਼ਕ ਜਾਂ ਭਾਗੀਦਾਰ।",
sendUsMessage:"ਸਾਨੂੰ ਸੁਨੇਹਾ ਭੇਜੋ",
contactInformation:"ਸੰਪਰਕ ਜਾਣਕਾਰੀ",
labelEmail:"ਈਮੇਲ",
labelPhone:"ਫੋਨ",
labelLocation:"ਸਥਾਨ",
placeholderName:"ਤੁਹਾਡਾ ਨਾਮ",
placeholderEmail:"ਤੁਹਾਡਾ ਈਮੇਲ",
placeholderSubject:"ਵਿਸ਼ਾ",
placeholderMessage:"ਤੁਹਾਡਾ ਸੁਨੇਹਾ",
sendMessageBtn:"ਸੁਨੇਹਾ ਭੇਜੋ →",

teamHeroLabel:"ਲੋਕ ਅਤੇ ਮਿਸ਼ਨ",
teamHeroTitle:"ਐਗ੍ਰੀਰੋਵਰ ਦੇ ਪਿੱਛੇ ਦੀ ਟੀਮ ਨੂੰ ਮਿਲੋ",
teamHeroLead:"ਅਸੀਂ ਸਸਤੇ, ਖੇਤ-ਤਿਆਰ ਰੋਬੋਟਿਕ ਹੱਲ ਤਿਆਰ ਕਰ ਰਹੇ ਹਾਂ ਤਾਂ ਜੋ ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨ ਘੱਟ ਮਿਹਨਤ ਅਤੇ ਵੱਧ ਭਰੋਸੇ ਨਾਲ ਖੇਤੀ ਕਰ ਸਕਣ।",

teamStat1:"ਕਿਸਾਨ-ਪਹਿਲਾਂ ਉਤਪਾਦ ਫੈਸਲੇ",
teamStat2:"ਭਾਰਤੀ ਖੇਤਾਂ ਅਤੇ ਫਸਲਾਂ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ",
teamStat3:"ਹਾਰਡਵੇਅਰ, ਐਮਬੈਡਡ ਅਤੇ AI ਇੱਕ ਹੀ ਸਿਸਟਮ ਵਿੱਚ",

valuesHeading:"ਅਸੀਂ ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਾਂ",
valuesIntro:"ਉਹ ਅਸੂਲ ਜੋ ਐਗ੍ਰੀਰੋਵਰ ਨੂੰ ਇਮਾਨਦਾਰ, ਲਾਭਕਾਰੀ ਅਤੇ ਕਾਰਗਰ ਬਣਾਉਂਦੇ ਹਨ।",

valueH1:"ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਸੁਣੋ",
valueP1:"ਅਸੀਂ ਕਿਸਾਨ ਫੀਡਬੈਕ ਅਤੇ ਫੀਲਡ ਟ੍ਰਾਇਲ ਨੂੰ ਸੱਚ ਦਾ ਅਧਾਰ ਮੰਨਦੇ ਹਾਂ।",

valueH2:"ਪ੍ਰਚਾਰ ਤੋਂ ਵੱਧ ਭਰੋਸੇਯੋਗਤਾ",
valueP2:"ਸਰਲ ਮਸ਼ੀਨਾਂ, ਜਾਂਚਯੋਗ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਅਤੇ ਸੰਭਾਲਯੋਗ ਕੋਡ ਵਧੀਆ ਹਨ।",

valueH3:"ਘੇਰਾ ਵਧਾਓ",
valueP3:"ਅਸੀਂ ਇੰਜੀਨੀਅਰਾਂ, ਖੇਤੀ ਮਾਹਿਰਾਂ ਅਤੇ ਸਾਥੀਆਂ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।",

foundersHeading:"ਸੰਸਥਾਪਕ ਟੀਮ",
foundersIntro:"ਮੁੱਖ ਟੀਮ ਜੋ ਦਿਸ਼ਾ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ।",

satyamRole:"ਸੰਸਥਾਪਕ — AI ਅਤੇ ਹਾਰਡਵੇਅਰ",
satyamBio:"ਐਗ੍ਰੀਰੋਵਰ ਦੀ ਤਕਨੀਕੀ ਦਿਸ਼ਾ ਦਾ ਨੇਤ੍ਰਿਤਵ ਕਰਦੇ ਹਨ।",

harishRole:"ਸਹਿ-ਸੰਸਥਾਪਕ — ਖੋਜ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ",
harishBio:"ਖੋਜ, ਦਸਤਾਵੇਜ਼ੀਕਰਨ, ਗ੍ਰਾਂਟ ਅਰਜ਼ੀਆਂ ਅਤੇ ਸਮਨਵਯ ਸੰਭਾਲਦੇ ਹਨ।",

tagRobotics:"ਰੋਬੋਟਿਕਸ",
tagPrototyping:"ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ",
tagSystems:"ਸਿਸਟਮ ਡਿਜ਼ਾਈਨ",
tagResearch:"ਖੋਜ",
tagGrants:"ਗ੍ਰਾਂਟ ਅਤੇ ਪ੍ਰੋਗਰਾਮ",
tagOperations:"ਓਪਰੇਸ਼ਨ",

engSectionTitle:"ਇੰਜੀਨੀਅਰਿੰਗ ਟੀਮ ਕੀ ਕਰਦੀ ਹੈ",
engSectionIntro:"ਐਗ੍ਰੀਰੋਵਰ ਦੇ ਵਿਕਾਸ ਨਾਲ ਅਸੀਂ ਜੋ ਸਮਰੱਥਾਵਾਂ ਤਿਆਰ ਕਰ ਰਹੇ ਹਾਂ।",
/* ================= TEAM PAGE MISSING ================= */
engMechTitle:"ਮਕੈਨਿਕਲ ਅਤੇ ਹਾਰਡਵੇਅਰ",
engMechDesc:"ਚੈਸੀ, ਐਕਚੁਏਟਰ, ਪਾਵਰ ਅਤੇ ਸੈਂਸਰ — ਮਿੱਟੀ, ਧੂੜ ਅਤੇ ਧੁੱਪ ਵਿੱਚ ਲੰਬੇ ਸਮੇਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤੇ ਗਏ।",

engEmbTitle:"ਐਮਬੈਡਡ ਅਤੇ ਫਰਮਵੇਅਰ",
engEmbDesc:"ਮਾਈਕ੍ਰੋਕੰਟਰੋਲਰ, ਮੋਟਰ ਕੰਟਰੋਲ, ਵਾਇਰਲੈੱਸ ਲਿੰਕ ਅਤੇ ਸੁਰੱਖਿਅਤ ਨਿਰਧਾਰਤ ਰੋਬੋਟ ਵਰਤਾਓ।",

engSoftTitle:"ਸਾਫਟਵੇਅਰ ਅਤੇ AI",
engSoftDesc:"ਫੀਲਡ ਸਾਫਟਵੇਅਰ, ਟ੍ਰਾਇਲ ਡਾਟਾ ਅਤੇ ਮਾਡਲ ਜੋ ਛਿੜਕਾਅ ਅਤੇ ਨੈਵੀਗੇਸ਼ਨ ਨੂੰ ਹੋਰ ਸਮਾਰਟ ਬਣਾਉਂਦੇ ਹਨ।",

advAgTitle:"ਖੇਤੀਬਾੜੀ ਸਲਾਹਕਾਰ",
advAgDesc:"ਫਸਲ ਚੱਕਰ, ਸਥਾਨਕ ਤਰੀਕੇ ਅਤੇ ਛੋਟੇ ਖੇਤਾਂ ਲਈ ਉਚਿਤ ਹੱਲ।",

advTechTitle:"ਤਕਨਾਲੋਜੀ ਮਾਰਗਦਰਸ਼ਕ",
advTechDesc:"ਆਰਕੀਟੈਕਚਰ, ਨਿਰਮਾਣ ਯੋਗਤਾ ਅਤੇ ਹਾਰਡਵੇਅਰ ਸਟਾਰਟਅਪ ਸਕੇਲਿੰਗ।",

supInnovTitle:"ਨਵੀਨਤਾ ਪ੍ਰੋਗਰਾਮ",
supInnovDesc:"ਇਨਕਿਊਬੇਸ਼ਨ, ਕੋਹੋਰਟ ਅਤੇ ਸੰਰਚਿਤ ਸਹਾਇਤਾ ਜਦੋਂ ਅਸੀਂ ਪ੍ਰਮਾਣਿਤ ਕਰਦੇ ਅਤੇ ਲਾਗੂ ਕਰਦੇ ਹਾਂ।",

supMentorsTitle:"ਮੈਂਟਰ",
supMentorsDesc:"ਉਹ ਸੰਸਥਾਪਕ ਅਤੇ ਓਪਰੇਟਰ ਜਿਨ੍ਹਾਂ ਨੇ ਹਾਰਡਵੇਅਰ ਬਣਾਇਆ ਅਤੇ ਸ਼ੁਰੂਆਤੀ ਵਿਕਾਸ ਨੂੰ ਸਫਲਤਾਪੂਰਵਕ ਪਾਰ ਕੀਤਾ।",

advisorsHeading:"ਸਲਾਹਕਾਰ",
advisorsIntro:"ਸਾਡੇ ਵਿਚਾਰਾਂ ਨੂੰ ਚੁਣੌਤੀ ਦੇਣ ਵਾਲੇ ਮਾਹਿਰ।",

supportHeading:"ਸਟਾਰਟਅਪ ਸਹਾਇਤਾ",
supportIntro:"ਸਾਡੇ ਕੰਮ ਨੂੰ ਇਕੋਸਿਸਟਮ ਨਾਲ ਜੋੜਣ ਵਾਲੇ ਪ੍ਰੋਗਰਾਮ।",

teamCtaTitle:"ਐਗ੍ਰੀਰੋਵਰ ਨਾਲ ਜੁੜਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
teamCtaSub:"ਅਸੀਂ ਉਹ ਇੰਜੀਨੀਅਰ, ਮੇਕਰ ਅਤੇ ਖੋਜਕਾਰ ਲੱਭ ਰਹੇ ਹਾਂ ਜੋ ਅਸਲ ਖੇਤਾਂ ਵਿੱਚ ਕੰਮ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ।",
contactUsBtn:"ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",

invHeroTitle:"ਖੇਤੀ ਦੇ ਭਵਿੱਖ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰੋ",
invHeroSub:"ਐਗ੍ਰੀਰੋਵਰ ਭਾਰਤ ਦੇ ਛੋਟੇ ਕਿਸਾਨਾਂ ਲਈ ਸਸਤੇ ਰੋਬੋਟਿਕ ਖੇਤੀ ਹੱਲ ਤਿਆਰ ਕਰ ਰਿਹਾ ਹੈ।",
/* ================= INVESTOR PAGE MISSING ================= */
/* PROBLEM SECTION */
invProb1Title:"ਮਜ਼ਦੂਰਾਂ ਦੀ ਘਾਟ",
invProb1Desc:"ਕਿਸਾਨ ਮਜ਼ਦੂਰਾਂ ਦੀ ਘਾਟ ਅਤੇ ਵਧਦੀ ਮਜ਼ਦੂਰੀ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਹਨ।",

invProb2Title:"ਮਹਿੰਗੀ ਮਸ਼ੀਨਰੀ",
invProb2Desc:"ਰਵਾਇਤੀ ਟ੍ਰੈਕਟਰਾਂ ਦੀ ਕੀਮਤ ₹5–8 ਲੱਖ ਹੈ।",

invProb3Title:"ਛੋਟੀਆਂ ਜ਼ਮੀਨੀ ਹੋਲਡਿੰਗਜ਼",
invProb3Desc:"ਜ਼ਿਆਦਾਤਰ ਕਿਸਾਨਾਂ ਕੋਲ ਬਹੁਤ ਛੋਟੇ ਖੇਤ ਹਨ।",

invProb4Title:"ਹੱਥੋਂ ਖੇਤੀ",
invProb4Desc:"ਅਜੇ ਵੀ ਬਹੁਤ ਸਾਰੇ ਕੰਮ ਹੱਥੋਂ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",

/* SOLUTION SECTION */
invSol1Title:"ਕੰਪੈਕਟ ਇਲੈਕਟ੍ਰਿਕ ਰੋਵਰ",
invSol1Desc:"ਛੋਟੇ ਖੇਤਾਂ ਅਤੇ ਤੰਗ ਜਗ੍ਹਾਵਾਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤਾ ਗਿਆ।",

invSol2Title:"ਰਿਮੋਟ ਕੰਟਰੋਲਡ",
invSol2Desc:"1 ਕਿਮੀ ਤੱਕ ਵਾਇਰਲੈੱਸ ਰੇਂਜ।",

invSol3Title:"ਬਹੁ-ਉਦੇਸ਼ੀ",
invSol3Desc:"ਛਿੜਕਾਅ, ਬੀਜ ਬੋਣਾ, ਖਾਦ ਦੇਣਾ ਅਤੇ ਹੋਰ।",

invSol4Title:"ਕਿਫਾਇਤੀ",
invSol4Desc:"ਅੰਦਾਜ਼ਿਤ ਕੀਮਤ ₹1 ਲੱਖ ਤੋਂ ਘੱਟ।",

invSol1Title:"ਕੰਪੈਕਟ ਇਲੈਕਟ੍ਰਿਕ ਰੋਵਰ",
invSol1Desc:"ਛੋਟੇ ਖੇਤਾਂ ਅਤੇ ਤੰਗ ਜਗ੍ਹਾਵਾਂ ਲਈ ਡਿਜ਼ਾਇਨ ਕੀਤਾ ਗਿਆ।",

invSol2Title:"ਰਿਮੋਟ ਕੰਟਰੋਲਡ",
invSol2Desc:"1 ਕਿਮੀ ਤੱਕ ਵਾਇਰਲੈੱਸ ਰੇਂਜ।",

invSol3Title:"ਬਹੁ-ਉਦੇਸ਼ੀ",
invSol3Desc:"ਛਿੜਕਾਅ, ਬੀਜ ਬੋਣਾ, ਖਾਦ ਦੇਣਾ ਅਤੇ ਹੋਰ।",

invSol4Title:"ਕਿਫਾਇਤੀ",
invSol4Desc:"ਅੰਦਾਜ਼ਿਤ ਕੀਮਤ ₹1 ਲੱਖ ਤੋਂ ਘੱਟ।",

invMarketTitle:"ਮਾਰਕੀਟ ਮੌਕਾ",

invTamTitle:"TAM",
invTamLine:"9.3 ਕਰੋੜ ਕਿਸਾਨ",
invTamDesc:"ਭਾਰਤ ਵਿੱਚ ਕੁੱਲ ਖੇਤੀਬਾੜੀ ਉਪਭੋਗਤਾ।",

invSamTitle:"SAM",
invSamLine:"86% ਛੋਟੇ ਕਿਸਾਨ",
invSamDesc:"ਅਧਿਕਤਰ ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨ।",

invSomTitle:"SOM",
invSomLine:"ਸ਼ੁਰੂਆਤੀ ਲਕਸ਼ਿਤ ਵਰਗ",
invSomDesc:"2 ਏਕੜ ਤੋਂ ਘੱਟ ਜ਼ਮੀਨ ਵਾਲੇ ਕਿਸਾਨ।",

invInvestTitle:"ਨਿਵੇਸ਼ ਮੌਕਾ",
invInvestP:"ਐਗ੍ਰੀਰੋਵਰ ਭਾਰਤ ਭਰ ਵਿੱਚ ਵਧਾਅ ਲਈ ਨਿਵੇਸ਼ਕ, ਐਕਸਲੇਰੇਟਰ ਅਤੇ ਰਣਨੀਤਿਕ ਭਾਗੀਦਾਰ ਲੱਭ ਰਿਹਾ ਹੈ।",

invCard1Title:"ਸੀਡ ਨਿਵੇਸ਼",
invCard1Desc:"ਪ੍ਰੋਟੋਟਾਈਪ ਅਤੇ ਮੈਨੂਫੈਕਚਰਿੰਗ ਪੜਾਅ ਲਈ ਫੰਡਿੰਗ।",

invCard2Title:"ਰਣਨੀਤਿਕ ਭਾਗੀਦਾਰ",
invCard2Desc:"ਐਗਰੀ-ਟੈਕ ਕੰਪਨੀਆਂ ਨਾਲ ਸਹਿਯੋਗ ਕਰੋ।",

invCard3Title:"ਐਕਸਲੇਰੇਟਰ",
invCard3Desc:"ਸਟਾਰਟਅਪ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਕੇਲਿੰਗ ਸਹਾਇਤਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ।",

invCtaTitle:"ਕੀ ਤੁਸੀਂ ਨਿਵੇਸ਼ ਕਰਨ ਵਿੱਚ ਰੁਚੀ ਰੱਖਦੇ ਹੋ?",
invCtaBtn:"ਨਿਵੇਸ਼ ਲਈ ਸੰਪਰਕ ਕਰੋ",
/* ================= INVESTOR PAGE MISSING ================= */
downloadPitch:"ਪਿਚ ਡੈਕ ਡਾਊਨਲੋਡ ਕਰੋ",

invProblemTitle:"ਸਮੱਸਿਆ",
invSolutionTitle:"ਸਾਡਾ ਹੱਲ",

blogHeroTitle:"ਐਗ੍ਰੀਰੋਵਰ ਬਲੌਗ",
blogHeroSub:"ਖੇਤੀ, ਰੋਬੋਟਿਕਸ ਅਤੇ ਸਾਡੇ ਸਟਾਰਟਅਪ ਯਾਤਰਾ ਬਾਰੇ ਵਿਚਾਰ।",
blogLatestTitle:"ਤਾਜ਼ਾ ਲੇਖ",
blogConnectBtn:"ਸਾਡੇ ਨਾਲ ਜੁੜੋ",
blogDevTitle:"ਵਿਕਾਸ ਅੱਪਡੇਟਸ",

blogDev1Title:"ਪ੍ਰੋਟੋਟਾਈਪ ਵਿਕਾਸ",
blogDev1Desc:"ਰਿਮੋਟ ਸਿਸਟਮ ਨਾਲ ਪਹਿਲਾ ਕਾਰਗਰ ਮਾਡਲ ਤਿਆਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ।",

blogDev2Title:"₹50,000 ਗ੍ਰਾਂਟ ਪ੍ਰਾਪਤ",
blogDev2Desc:"ਕਾਲਜ ਨਵੀਨਤਾ ਪ੍ਰੋਗਰਾਮ ਵੱਲੋਂ ਸਮਰਥਿਤ।",

blogFollowTitle:"ਸਾਡੀ ਯਾਤਰਾ ਨਾਲ ਜੁੜੇ ਰਹੋ",
blogFollowSub:"ਐਗ੍ਰੀਰੋਵਰ ਦੀ ਤਰੱਕੀ ਅਤੇ ਨਵੀਂਕਰਨ ਨਾਲ ਅਪਡੇਟ ਰਹੋ।",

/* ================= TECHNOLOGY PAGE MISSING ================= */
futureTechSectionTitle:"ਭਵਿੱਖ ਦੀ ਤਕਨਾਲੋਜੀ",
futureAiNav:"AI ਨੈਵੀਗੇਸ਼ਨ",
futureIot:"IoT",
futureMobile:"ਮੋਬਾਈਲ ਐਪ",
futureSolar:"ਸੋਲਰ",

/* ================= EXTRA COMMON FIXES ================= */
marketOpportunity:"ਮਾਰਕੀਟ ਮੌਕਾ",
investmentOpportunity:"ਨਿਵੇਸ਼ ਮੌਕਾ",
followJourney:"ਸਾਡੀ ਯਾਤਰਾ ਨਾਲ ਜੁੜੇ ਰਹੋ",
developmentUpdates:"ਵਿਕਾਸ ਅੱਪਡੇਟਸ",
innovationPrograms:"ਨਵੀਨਤਾ ਪ੍ਰੋਗਰਾਮ",
mentorsTitle:"ਮੈਂਟਰ",
mechanicalHardware:"ਮਕੈਨਿਕਲ ਅਤੇ ਹਾਰਡਵੇਅਰ",
embeddedFirmware:"ਐਮਬੈਡਡ ਅਤੇ ਫਰਮਵੇਅਰ",
softwareAI:"ਸਾਫਟਵੇਅਰ ਅਤੇ AI",
agricultureAdvisors:"ਖੇਤੀਬਾੜੀ ਸਲਾਹਕਾਰ",
technologyMentors:"ਤਕਨਾਲੋਜੀ ਮਾਰਗਦਰਸ਼ਕ",
/* LATEST ARTICLES SECTION */
blogArt1Title:"ਖੇਤੀਬਾੜੀ ਵਿੱਚ AI",
blogArt1Desc:"AI ਅਤੇ ਰੋਬੋਟਿਕਸ ਆਧੁਨਿਕ ਖੇਤੀ ਨੂੰ ਬਦਲ ਰਹੇ ਹਨ।",

blogArt2Title:"ਛੋਟੇ ਕਿਸਾਨਾਂ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ",
blogArt2Desc:"ਉੱਚ ਲਾਗਤ, ਘੱਟ ਤਕਨੀਕੀ ਪਹੁੰਚ ਅਤੇ ਮਜ਼ਦੂਰਾਂ ਦੀ ਘਾਟ।",

blogArt3Title:"ਐਗ੍ਰੀਰੋਵਰ ਕਿਉਂ?",
blogArt3Desc:"ਅਸਲ ਖੇਤੀਬਾੜੀ ਸਮੱਸਿਆਵਾਂ ਦੇ ਹੱਲ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ।",

blogArt4Title:"ਖੇਤੀ ਵਿੱਚ ਰੋਬੋਟਿਕਸ",
blogArt4Desc:"ਆਟੋਮੇਸ਼ਨ ਕਾਰਗੁਜ਼ਾਰੀ ਅਤੇ ਪੈਦਾਵਾਰ ਵਧਾਉਂਦੀ ਹੈ।",

/* EXTRA BUTTON FIX */
readMore:"ਹੋਰ ਪੜ੍ਹੋ"

});

// Function to get current language
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

function htmlLangFromCode(lang) {
  if (lang === 'pa') return 'pa-Guru';
  return lang;
}

function syncLangToggleLabel() {
  const langBtn = document.querySelector('.lang-toggle');
  const lang = getCurrentLanguage();
  if (langBtn && languageNames[lang]) {
    langBtn.textContent = languageNames[lang];
  }
}

function closeLangDropdown() {
  const wrap = document.querySelector('.lang-dropdown');
  const toggle = document.querySelector('.lang-toggle');
  if (wrap) wrap.classList.remove('lang-dropdown--open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

// Called from index.html onclick handlers — was missing before (only setLanguage existed)
function changeLanguage(lang) {
  setLanguage(lang);
  closeLangDropdown();
}

// Function to set language
function setLanguage(lang) {
  console.log('setLanguage called with:', lang);
  
  if (!translations[lang]) {
    console.error('Language not supported:', lang);
    lang = 'en';
  }
  
  const code = translations[lang] ? lang : 'en';
  console.log('Setting language to:', code);
  
  try {
    localStorage.setItem('language', code);
    document.documentElement.lang = htmlLangFromCode(code);
    updateTexts();
    syncLangToggleLabel();
    console.log('Language set successfully to:', code);
  } catch (error) {
    console.error('Error setting language:', error);
  }
}

// Function to update all texts
function updateTexts() {
  const currentLang = getCurrentLanguage();
  const code = translations[currentLang] ? currentLang : 'en';
  const trans = { ...translations.en, ...translations[currentLang] };

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (trans[key] !== undefined && trans[key] !== '') {
      el.textContent = trans[key];
    }
  });

  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (trans[key] !== undefined && trans[key] !== '') {
      el.placeholder = trans[key];
    }
  });
}

function initLangDropdown() {
  const wrap = document.querySelector('.lang-dropdown');
  const toggle = document.querySelector('.lang-toggle');
  if (!wrap || !toggle) return;

  console.log('Language dropdown initialized', { wrap, toggle });

  // Toggle dropdown on button click
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Language toggle clicked');
    const isOpen = wrap.classList.contains('lang-dropdown--open');
    if (isOpen) {
      wrap.classList.remove('lang-dropdown--open');
      toggle.setAttribute('aria-expanded', 'false');
      console.log('Dropdown closed');
    } else {
      wrap.classList.add('lang-dropdown--open');
      toggle.setAttribute('aria-expanded', 'true');
      console.log('Dropdown opened');
    }
  });

  // Prevent dropdown from closing when clicking inside
  wrap.addEventListener('click', (e) => e.stopPropagation());

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) {
      closeLangDropdown();
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLangDropdown();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLanguage();
  document.documentElement.lang = htmlLangFromCode(translations[lang] ? lang : 'en');
  updateTexts();
  syncLangToggleLabel();
  initLangDropdown();
});