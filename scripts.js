document.addEventListener('DOMContentLoaded', function() {
    var currentLang = document.documentElement.lang || 'en';
    setLanguage(currentLang);
});


document.getElementById('language-switch').addEventListener('click', function() {
    var currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        setLanguage('ru');
    } else {
        setLanguage('en');
    }
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(el) {
        el.textContent = translations[lang][el.getAttribute('data-lang')];
    });
}


var translations = {
    en: {
        home: 'Home',
        products: 'Products',
        about: 'About Us',
        blog: 'Research',
        contact: 'Contact',
        language: 'eng/рус',
        productstitle: 'Our Products',
        product1title: 'TeleMedPro',
        product1desc: 'A state-of-the-art telemedicine platform that connects patients with healthcare providers remotely, ensuring timely consultations and reducing the need for in-person visits.'
        ,
        product2title: 'PharmaTrack',
        product2desc: 'An innovative supply chain management system for pharmaceutical companies, ensuring the safe and efficient distribution of medications from manufacturer to patient.'
        ,
        product3title: 'HealthAnalytics',
        product3desc: 'A powerful data analytics tool that provides insights into patient outcomes, helping medical professionals to make informed decisions and improve treatment protocols.'
        ,
        product4title: 'MedData',
        product4desc: 'A comprehensive electronic health record (EHR) system that ensures seamless patient data management, improving accessibility and accuracy of medical records.'
        ,
        footerdesc: 'Innovating Healthcare Solutions',
        contacttitle: 'Contact Us',
        contactname: 'Name',
        contactemail: 'Email address',
        contactmessage: 'Message',
        contactsubmit: 'Submit',
        blogtitle: 'Research',
        blog1title: 'DNA nanotechnology',
        blog1desc: 'Challenges and opportunities for structural DNA nanotechnology.',
        blog2title: 'IT in Medicine',
        blog2desc: 'Reducing the Frequency of Errors in Medicine Using Information Technology.',
        readmore: 'Read More',
        abouttitle: 'Our Story',
        aboutdesc: 'The story of MedIT began when a group of passionate healthcare professionals and tech enthusiasts recognized the potential of integrating IT solutions into medical practices. They envisioned a world where technology could simplify complex medical processes, improve patient outcomes, and create a more efficient healthcare system. With this vision, MedIT was born.Starting with a small team of dedicated experts, MedIT quickly grew into a formidable force in the healthcare IT sector. Our innovative solutions have helped hospitals, clinics, and medical professionals worldwide to deliver better care and operate more efficiently. We pride ourselves on our ability to combine cutting-edge technology with deep medical expertise to create products that truly make a difference.'
        ,
        infoco:'MedIT is a pioneering company at the intersection of technology and healthcare. Founded in 2024, MedIT was established with a clear vision: to revolutionize the healthcare industry by leveraging the power of advanced technologies. Our mission is to enhance patient care, streamline medical processes, and provide innovative solutions that cater to the ever-evolving needs of the medical field.'
        ,
        comtitle:'Our Commitment',
        commit:'At ITMed, we are committed to continuous innovation and excellence. Our team of experts works tirelessly to stay ahead of the curve, developing solutions that anticipate the future needs of the healthcare industry. We believe that by integrating IT solutions with medical practices, we can create a healthier, more efficient world.'
        ,
        vistitle:'Vision for the Future',
        Vision:'Looking ahead, ITMed aims to be a global leader in healthcare IT solutions. We envision a future where technology and medicine work hand-in-hand to provide unparalleled care for patients. Our focus is on creating solutions that are not only innovative but also user-friendly and accessible to all healthcare providers, regardless of their size or location.'
        ,
        importance: 'Why IT in Medicine Matters',
        fact1: 'IMPROVED PATIENT CARE: Technology enables real-time access to patient records, leading to faster and more accurate diagnoses.',
        fact2: 'TELEMEDICINE: Provides remote consultations, making healthcare accessible to people in rural or underserved areas.',
        fact3: 'DATA ANALYTICS: Helps identify trends and improve treatment protocols, resulting in better patient outcomes.',
        fact4: 'EFFICIENCY: Streamlines administrative tasks, reducing paperwork and freeing up time for healthcare providers to focus on patient care.',
        fact5: 'PHARMATRACK: Ensures safe and efficient distribution of medications, minimizing errors and enhancing supply chain management.',
        fact6: 'SECURITY: Advanced IT solutions protect patient data, ensuring privacy and compliance with regulations.',
        fact7: 'INNOVATION: Encourages continuous improvement and the development of new treatments and technologies.',
        quiztitle: 'Quiz About MedIT',
    },
    ru: {
        home: 'Главная',
        products: 'Продукты',
        about: 'О нас',
        blog: 'Исследования',
        contact: 'Контакты',
        language: 'eng/рус',
        productstitle: 'Наши Продукты',
        product1title: 'TeleMedPro',
        product1desc: 'Современная платформа телемедицины, которая соединяет пациентов с медицинскими работниками удаленно, обеспечивая своевременные консультации и сокращая необходимость личных визитов.',
        product2title: 'PharmaTrack',
        product2desc: 'Инновационная система управления цепочкой поставок для фармацевтических компаний, обеспечивающая безопасное и эффективное распределение лекарств от производителя к пациенту.',
        product3title: 'HealthAnalytics',
        product3desc: 'Мощный инструмент анализа данных, предоставляющий информацию о результатах лечения пациентов, помогая медицинским профессионалам принимать обоснованные решения и улучшать протоколы лечения.',
        product4title: 'MedData',
        product4desc: 'Комплексная система электронных медицинских записей (EHR), обеспечивающая бесшовное управление данными пациентов, улучшая доступность и точность медицинских записей.',
        footerdesc: 'Инновационные решения для здравоохранения',
        contacttitle: 'Связаться с нами',
        contactname: 'Имя',
        contactemail: 'Электронная почта',
        contactmessage: 'Сообщение',
        contactsubmit: 'Отправить',
        blogtitle: 'Исследования',
        blog1title: 'ДНК нанотехнология',
        blog1desc: 'Проблемы и возможности структурной ДНК нанотехнологии.',
        blog2title: 'ИТ в медицине',
        blog2desc: 'Снижение частоты ошибок в медицине с использованием информационных технологий.',
        readmore: 'Читать далее',
        abouttitle: 'Наша История',
        aboutdesc: 'История MedIT началась, когда группа увлеченных медицинских профессионалов и энтузиастов технологий признала потенциал интеграции ИТ-решений в медицинскую практику. Они предвидели мир, где технологии могут упростить сложные медицинские процессы, улучшить результаты лечения пациентов и создать более эффективную систему здравоохранения. С этой целью родился MedIT.Начав с небольшой команды преданных экспертов, MedIT быстро выросла в мощную силу в секторе ИТ для здравоохранения. Наши инновационные решения помогли больницам, клиникам и медицинским профессионалам по всему миру оказывать лучшую помощь и работать более эффективно. Мы гордимся нашей способностью сочетать передовые технологии с глубокими медицинскими знаниями для создания продуктов, которые действительно меняют ситуацию.',
        infoco: 'MedIT - это новаторская компания на стыке технологий и здравоохранения. Основанная в 2024 году, MedIT была создана с четким видением: революционизировать отрасль здравоохранения, используя возможности передовых технологий. Наша миссия - улучшить уход за пациентами, оптимизировать медицинские процессы и предоставлять инновационные решения, которые соответствуют постоянно меняющимся потребностям медицинской сферы.',
        comtitle: 'Наше Обязательство',
        commit: 'В ITMed мы привержены непрерывным инновациям и совершенству. Наша команда экспертов неустанно работает над тем, чтобы опережать время, разрабатывая решения, которые предвосхищают будущие потребности отрасли здравоохранения. Мы верим, что интеграция ИТ-решений в медицинскую практику может создать более здоровый и эффективный мир.',
        vistitle: 'Видение на Будущее',
        Vision: 'Смотря вперед, ITMed стремится стать мировым лидером в области ИТ-решений для здравоохранения. Мы видим будущее, где технологии и медицина работают рука об руку, чтобы обеспечить непревзойденный уход за пациентами. Наш фокус - на создании решений, которые не только инновационны, но и удобны в использовании и доступны для всех поставщиков медицинских услуг, независимо от их размера или местоположения.',
        importance: 'Почему ИТ в медицине важно',
        fact1: 'Улучшение ухода за пациентами: Технологии обеспечивают доступ к записям пациентов в реальном времени, что приводит к более быстрому и точному диагнозу.',
        fact2: 'Телемедицина: Обеспечивает удаленные консультации, делая медицинскую помощь доступной для людей в сельских или недостаточно обслуживаемых районах.',
        fact3: 'Аналитика данных: Помогает выявлять тенденции и улучшать протоколы лечения, что приводит к лучшим результатам для пациентов.',
        fact4: 'Эффективность: Оптимизирует административные задачи, снижая объем бумажной работы и освобождая время для медицинских работников для концентрации на уходе за пациентами.',
        fact5: 'PharmaTrack: Обеспечивает безопасное и эффективное распределение медикаментов, минимизируя ошибки и улучшая управление цепочкой поставок.',
        fact6: 'Безопасность: Современные ИТ-решения защищают данные пациентов, обеспечивая конфиденциальность и соответствие нормативным требованиям.',
        fact7: 'Инновации: Поощряет непрерывное улучшение и разработку новых методов лечения и технологий.',
        quiztitle: 'Вопросы о MedIT',
    }
};

function submitQuiz() {
    let score = 0;
    let totalQuestions = 3;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'b') {
        score++;
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'a') {
        score++;
    }

    // Question 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'd') {
        score++;
    }

    const result = document.getElementById('quiz-result');
    result.textContent = `You scored ${score} out of ${totalQuestions}`;
}




document.getElementById('phonenumber').addEventListener('click', function() {
    playSound();
});
document.addEventListener('keypress', function(event) {
    if (event.key.toLowerCase() === 'p') {
        playSound();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var hoverSound = document.getElementById('hoverSound');
    var phoneElement = document.querySelector('.text-uppercase');

    phoneElement.addEventListener('mouseover', function() {
        hoverSound.play();
    });

    phoneElement.addEventListener('mouseout', function() {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    });
});

function playSound() {
    var sound = document.getElementById('clickSound');
    sound.play();
}
