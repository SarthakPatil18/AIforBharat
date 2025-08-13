// Lightweight i18n for EN, HI, MR
(function () {
  const STRINGS = {
    en: {
      'brand.name': 'LocalLens',
      'nav.home': 'Home',
      'nav.search': 'Search',
      'nav.wallet': 'Wallet',
      'nav.profile': 'Profile',
      'nav.location': 'Pune',

      'home.tagline': 'Trusted local services, powered by AI',
      'home.subtagline': "Describe your issue. We'll match you with verified pros nearby.",
      'home.searchPlaceholder': 'Describe the problem (e.g., leaking kitchen tap)',
      'home.summarize': 'Summarize',
      'home.summaryTitle': 'Suggested request',
      'home.findPros': 'Find pros',
      'home.categories': 'Popular categories',
      'home.nearbyPros': 'Verified professionals nearby',

      'cat.plumbing': 'Plumbing',
      'cat.electrical': 'Electrical',
      'cat.carpentry': 'Carpentry',
      'cat.ac': 'AC Services',
      'cat.cleaning': 'Cleaning',
      'cat.painting': 'Painting',
      'cat.pest': 'Pest Control',
      'cat.salon': 'Salon at Home',

      'provider.verified': 'Verified',
      'provider.about': 'About',
      'provider.services': 'Services',
      'provider.reviews': 'Reviews',
      'provider.writeReview': 'Write a review',
      'provider.serviceHistory': 'Service history',
      'provider.warranty': 'Warranty tracker',
      'provider.bookNow': 'Book now',
      'provider.contact': 'Call',
      'provider.response': 'Responds within 10 min',
      'provider.startingAt': 'Starting at',

      'payment.title': 'Payment',
      'payment.summary': 'Summary',
      'payment.amount': 'Amount',
      'payment.coupon': 'Coupon',
      'payment.upiMethods': 'UPI methods',
      'payment.enterUpiId': 'Or enter UPI ID',
      'payment.payNow': 'Pay now',
      'payment.savedUpi': 'Saved UPI IDs',
      'payment.txnHistory': 'Transaction history',

      'review.title': 'Write a review',
      'review.feedbackPlaceholder': 'Short feedback (what went well, what could be better)',
      'review.addPhotos': 'Add photos',
      'review.submit': 'Submit review',
      'review.thankYou': 'Thanks for your review! 🎉'
    },
    hi: {
      'brand.name': 'LocalLens',
      'nav.home': 'होम',
      'nav.search': 'खोज',
      'nav.wallet': 'वॉलेट',
      'nav.profile': 'प्रोफ़ाइल',
      'nav.location': 'पुणे',

      'home.tagline': 'AI से संचालित भरोसेमंद स्थानीय सेवाएं',
      'home.subtagline': 'समस्या बताएं, और हम पास के सत्यापित पेशेवर से जोड़ेंगे।',
      'home.searchPlaceholder': 'समस्या बताएं (जैसे, किचन का नल लीक हो रहा है)',
      'home.summarize': 'सारांश बनाएं',
      'home.summaryTitle': 'अनुशंसित अनुरोध',
      'home.findPros': 'पेशेवर ढूंढें',
      'home.categories': 'लोकप्रिय श्रेणियाँ',
      'home.nearbyPros': 'पास के सत्यापित पेशेवर',

      'cat.plumbing': 'प्लम्बिंग',
      'cat.electrical': 'इलेक्ट्रिकल',
      'cat.carpentry': 'कारपेंटरी',
      'cat.ac': 'एसी सेवाएँ',
      'cat.cleaning': 'सफाई',
      'cat.painting': 'पेंटिंग',
      'cat.pest': 'पेस्ट कंट्रोल',
      'cat.salon': 'घर पर सैलून',

      'provider.verified': 'वेरिफ़ाइड',
      'provider.about': 'परिचय',
      'provider.services': 'सेवाएँ',
      'provider.reviews': 'समीक्षाएँ',
      'provider.writeReview': 'समीक्षा लिखें',
      'provider.serviceHistory': 'सेवा इतिहास',
      'provider.warranty': 'वारंटी ट्रैकर',
      'provider.bookNow': 'बुक करें',
      'provider.contact': 'कॉल',
      'provider.response': '10 मिनट में उत्तर',
      'provider.startingAt': 'शुरू है',

      'payment.title': 'भुगतान',
      'payment.summary': 'सारांश',
      'payment.amount': 'राशि',
      'payment.coupon': 'कूपन',
      'payment.upiMethods': 'UPI विधियाँ',
      'payment.enterUpiId': 'या UPI ID दर्ज करें',
      'payment.payNow': 'अभी भुगतान करें',
      'payment.savedUpi': 'सेव्ड UPI IDs',
      'payment.txnHistory': 'लेन-देन इतिहास',

      'review.title': 'समीक्षा लिखें',
      'review.feedbackPlaceholder': 'संक्षिप्त प्रतिक्रिया (क्या अच्छा था, क्या बेहतर हो सकता है)',
      'review.addPhotos': 'फोटो जोड़ें',
      'review.submit': 'समीक्षा भेजें',
      'review.thankYou': 'आपकी समीक्षा के लिए धन्यवाद! 🎉'
    },
    mr: {
      'brand.name': 'LocalLens',
      'nav.home': 'मुख्यपृष्ठ',
      'nav.search': 'शोध',
      'nav.wallet': 'वॉलेट',
      'nav.profile': 'प्रोफाइल',
      'nav.location': 'पुणे',

      'home.tagline': 'AI द्वारा समर्थित विश्वासार्ह स्थानिक सेवा',
      'home.subtagline': 'तुमची समस्या सांगा; आम्ही जवळच्या सत्यापित व्यावसायिकांशी जोडू.',
      'home.searchPlaceholder': 'समस्या लिहा (उदा., किचनचा नळ लीक होत आहे)',
      'home.summarize': 'सारांश तयार करा',
      'home.summaryTitle': 'सूचित विनंती',
      'home.findPros': 'व्यावसायिक शोधा',
      'home.categories': 'लोकप्रिय श्रेणी',
      'home.nearbyPros': 'जवळचे सत्यापित व्यावसायिक',

      'cat.plumbing': 'प्लंबिंग',
      'cat.electrical': 'इलेक्ट्रिकल',
      'cat.carpentry': 'सुतारकाम',
      'cat.ac': 'एसी सेवा',
      'cat.cleaning': 'स्वच्छता',
      'cat.painting': 'पेंटिंग',
      'cat.pest': 'किड नियंत्रण',
      'cat.salon': 'घरी सलून',

      'provider.verified': 'व्हेरिफाईड',
      'provider.about': 'माहिती',
      'provider.services': 'सेवा',
      'provider.reviews': 'पुनरावलोकने',
      'provider.writeReview': 'रिव्ह्यू लिहा',
      'provider.serviceHistory': 'सेवा इतिहास',
      'provider.warranty': 'वॉरंटी ट्रॅकर',
      'provider.bookNow': 'बुक करा',
      'provider.contact': 'कॉल',
      'provider.response': '१० मिनिटांत प्रतिसाद',
      'provider.startingAt': 'पासून',

      'payment.title': 'पेमेंट',
      'payment.summary': 'सारांश',
      'payment.amount': 'रक्कम',
      'payment.coupon': 'कूपन',
      'payment.upiMethods': 'UPI पद्धती',
      'payment.enterUpiId': 'किंवा UPI ID लिहा',
      'payment.payNow': 'पे करा',
      'payment.savedUpi': 'सेव्ह केलेले UPI IDs',
      'payment.txnHistory': 'व्यवहार इतिहास',

      'review.title': 'रिव्ह्यू लिहा',
      'review.feedbackPlaceholder': 'संक्षिप्त अभिप्राय (काय चांगले, काय सुधारता येईल)',
      'review.addPhotos': 'फोटो जोडा',
      'review.submit': 'रिव्ह्यू सबमिट करा',
      'review.thankYou': 'तुमच्या रिव्ह्यूसाठी धन्यवाद! 🎉'
    }
  };

  function getCurrentLang() {
    const saved = localStorage.getItem('locallens:lang');
    return saved || 'en';
  }

  function translatePage() {
    const lang = getCurrentLang();
    const dict = STRINGS[lang] || STRINGS.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
  }

  function initLanguageSelector() {
    const select = document.querySelector('[data-lang-select]');
    if (!select) return;
    select.value = getCurrentLang();
    select.addEventListener('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('locallens:lang', lang);
      translatePage();
    });
  }

  window.LocalLensI18N = { translatePage, getCurrentLang };

  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    translatePage();
  });
})();