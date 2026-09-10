/* ═══════════════════════════════════════════════
   GHIATH PORTFOLIO — script.js
═══════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────────────────────────
   BILINGUAL / i18n SYSTEM
   To add a new language: add a new key block
   inside the `translations` object below and
   update the langToggle cycle in switchLanguage.
───────────────────────────────────────────── */
const translations = {
  en: {
    /* Page meta */
    pageTitle:      'Ghiyath Abd Al-Razzaq | CAD/CAM Engineer | CNC Programmer',
    metaDesc:       'Ghiyath Abd Al-Razzaq portfolio — CAD/CAM Engineer & CNC Programmer specializing in Autodesk PowerMill 3-axis toolpaths, G-code simulation, SolidWorks, and mold design',
    /* Nav */
    navHome:        'Home',
    navAbout:       'About',
    navSkills:      'Skills',
    navProjects:    'Projects',
    navExperience:  'Experience',
    navServices:    'Services',
    navContact:     'Contact',
    backTop:        'Back to top',
    /* Hero */
    heroAvailable:  'Available for Work',
    heroName:       'Ghiyath Abd Alrazzaq',
    heroDesc:       'Specialized in 3-Axis PowerMill Toolpath Generation, G-Code Simulation, CNC Machine Assembly & SolidWorks CAD Design.',
    heroCta:        'Contact Me',
    heroCV:         'Download CV',
    statProjects:   'CNC & CAM Programming',
    stat3D:         'Autodesk PowerMill & SolidWorks',
    statYears:      'Design for Manufacturing',
    scrollHint:     'Scroll Down',
    /* About */
    aboutTitle:     'CAD/CAM & CNC Manufacturing Specialist\n<em>Precision from Design to Machine</em>',
    aboutP1:        "I am Ghiyath Abd Alrazzaq, a Mechanical Engineering graduate from Damascus University specializing in CAD/CAM engineering, CNC programming, and mechanical design. I have hands-on experience in generating and optimizing 3-axis toolpaths using Autodesk PowerMill (roughing, rest machining, and finishing strategies) and simulating G-code.",
    aboutP2:        "I designed, built, and calibrated a functional physical 3-axis CNC router from scratch, combining practical manufacturing expertise with precision SolidWorks 3D modeling and GD&T standards.",
    trait1:         'Toolpath Optimization & G-Code Simulation',
    trait2:         'Precision CNC Assembly & Calibration',
    trait3:         'Design for Manufacturing & Assembly (DFM / DFA)',
    trait4:         'Geometric Dimensioning & Tolerancing (GD&T)',
    aboutCta:       'Talk to Me',
    /* Skills */
    skillsTitle:    'Tools & Technical\n<em>Competencies</em>',
    skillCat1:      'CAM & CNC Programming',
    skillCat2:      'CAD & Engineering Graphics',
    skillCat3:      'Mechanical & Manufacturing Engineering',
    skillCat4:      'Technical Skills',
    catiaBeginner:  'CATIA (Basic)',
    skill3DModel:   '3D Modeling',
    skillMoldDes:   'Mold Design',
    skillMechAnal:  'Mechanical Analysis',
    skillCNC:       'CNC Programming',
    skillMfgOps:    'Manufacturing Operations',
    skillProdDes:   'Product Design',
    skillEngDoc:    'Engineering Documentation',
    skillDFM:       'DFM Optimization',
    /* Projects */
    projectsTitle:  'Featured Engineering\n<em>Works</em>',
    filterAll:      'All',
    filterDesign:   'Design',
    filterMfg:      'Manufacturing',
    filterAuto:     'Automation',
    viewDetails:    'View Details',
    proj1Title:     'Skid-Steer Loader Assembly',
    proj1Desc:      'Full 3D assembly of a compact skid-steer loader — boom arm, bucket, cab frame, and wheel drivetrain modeled for realistic motion and fit.',
    proj2Title:     'Loader Roller & Bearing Mechanism',
    proj2Desc:      'Detailed sub-assembly of the internal roller and bearing mechanism housed inside the loader bucket, with shaft supports and mounting brackets.',
    proj3Title:     'FPV Racing Drone Frame',
    proj3Desc:      'Design of a compact 4-motor FPV racing drone frame with a central electronics bay, reinforced arms, and motor/propeller mounts.',
    proj4Title:     'Universal Joint Coupling',
    proj4Desc:      'Design of a double universal joint (Cardan) coupling for transmitting rotary motion between misaligned shafts.',
    proj5Title:     'Mold Cavity & Core CAM Programming (Autodesk PowerMill)',
    proj5Desc:      'Generated roughing, rest machining, and 3D offset finishing toolpaths in PowerMill with full collision and gouge verification for mold components.',
    proj6Title:     'Plastic Injection Mold Design (Academic Project)',
    proj6Desc:      'Designed multi-part injection mold including core, cavity, side cores, and parting lines using SolidWorks with PMMA shrinkage allowances and draft angles.',
    proj7Title:     '3-Axis CNC Machine Design, Fabrication & Programming — Graduation Project',
    proj7Desc:      'Designed complete mechanical frame in SolidWorks, selected drive components (linear guides, lead screws, stepper motors), physically built and calibrated the machine, and configured a GRBL-based controller for 3-axis G-code motion.',
    proj8Title:     'Multi-Stage Gear Train',
    proj8Desc:      'Design of a multi-stage spur gear train for speed reduction, with gear ratio calculations and shaft layout.',
    proj9Title:     'Rotomolded Water Tank Design',
    proj9Desc:      'Product design of a ribbed cylindrical water tank with an integrated cap and mounting fittings.',
    proj10Title:    'Wooden Table Design',
    proj10Desc:     'Design of a wooden-top table with a welded steel leg frame, sized for everyday use.',
    proj11Title:    'CAM Roughing Toolpath Verification',
    proj11Desc:     'Roughing toolpath setup and collision/gouge verification in PowerMill for a multi-pocket mold component.',
    proj12Title:    'Speaker Mold Core — CAM Programming',
    proj12Desc:     'Toolpath programming for a speaker enclosure mold core, combining multiple finishing strategies and lead-in moves.',
    proj13Title:    'Speaker Mold Core — Finishing Strategy',
    proj13Desc:     'Finishing-pass planning and simulation for the speaker mold core, verifying full surface coverage and safe tool engagement.',
    proj14Title:    'Housing CAM Toolpath — 3D Offset',
    proj14Desc:     '3D offset finishing toolpath for a housing part with circular bosses and pockets, using pattern-based machining.',
    /* Stats */
    statLabelProjects:  'Completed Projects',
    statLabel3D:        '3D Models',
    statLabelHours:     'Design Hours',
    statLabelDrawings:  'Engineering Drawings',
    /* Experience */
    expTitle:       'Professional &\n<em>Academic Journey</em>',
    badgeWork:      'Work',
    badgeIntern:    'Internship',
    badgeEdu:       'Education',
    exp1Role:       'Mechanical Design Engineer',
    exp1Company:    'Freelance',
    exp1Desc:       'Designing custom mechanical parts, preparing manufacturing drawings, and coordinating with machining workshops to ensure quality execution.',
    exp2Role:       'Trainee Design Engineer',
    exp2Company:    'Engineering Department',
    exp2Desc:       'Participated in designing plastic molds and metal parts, learning from a specialized engineering team and applying international quality standards.',
    exp3Role:       'Graduation Project — 3-Axis CNC Machine',
    exp3Company:    'Damascus University — Mechanical Engineering Dept.',
    exp3Desc:       'Designed, fabricated, and programmed a fully functional 3-axis CNC router from scratch — SolidWorks frame design, component selection, GRBL controller integration, and G-code toolpath verification.',
    exp4Role:       'BSc Mechanical Engineering — Design & Production',
    exp4Company:    'Damascus University | Faculty of Mechanical Engineering',
    exp4Desc:       'Specialized in machine design, manufacturing processes, and CAD/CAM engineering with advanced coursework in SolidWorks, Autodesk PowerMill, and CNC machining.',
    /* Services */
    servicesTitle:  'What I Offer\n<em>My Clients</em>',
    svc1Title:      '3-Axis CAM Programming (PowerMill)',
    svc1Desc:       'Generating efficient toolpaths in Autodesk PowerMill — strategy selection (Roughing / Rest Machining / Finishing) and full G-code simulation and verification.',
    svc2Title:      'CNC Machine Setup & Prototyping',
    svc2Desc:       'Structural mechanical design, component sourcing (linear guides, lead screws, stepper motors), hardware assembly, and GRBL/Arduino controller integration.',
    svc3Title:      '3D CAD Modeling & Sheet Metal',
    svc3Desc:       'SolidWorks parametric 3D modeling, complex assembly design, sheet metal parts, and technical drawing packages ready for manufacturing.',
    svc4Title:      'Plastic Injection Mold Design',
    svc4Desc:       'Mold cavity/core separation, parting line definition, side cores, draft angles, shrinkage allowances, and DFM optimization for plastic components.',
    svc5Title:      'Engineering Drawings & GD&T',
    svc5Desc:       'Detailed shop drawings with ISO/ASME standard tolerances, Geometric Dimensioning & Tolerancing (GD&T) callouts, and complete BOM documentation.',
    svc6Title:      'Engineering Documentation',
    svc6Desc:       'Preparing complete documentation files including BOM, quality reports, CMF files, and process documentation.',
    /* CV */
    cvTitle:        'Download My CV',
    cvDesc:         'Get a complete, comprehensive PDF of my resume with details of all projects and experience',
    cvBtn:          'Download CV — PDF',
    cvReadyMsg:     'Done — CV is Ready!',
    /* Contact */
    contactTitle:   'Have a Project?\n<em>Let\'s Talk</em>',
    contactEmail:   'Email',
    contactPhone:   'Phone',
    formName:       'Name',
    formNamePh:     'Your full name',
    formEmail:      'Email',
    formSubject:    'Subject',
    formSubjectPh:  'Subject of your message',
    formMsg:        'Message',
    formMsgPh:      'Describe your project or inquiry...',
    formSend:       'Send Message',
    formSuccessMsg: "Thank you! I'll be in touch soon.",
    /* Form validation */
    errName:        'Name is required',
    errEmail:       'Invalid email address',
    errMsg:         'Message too short (at least 10 characters)',
    /* Footer */
    footerTagline:  'CAD/CAM Engineer | CNC Programmer — Precision from design to machine',
    footerCopy:     '© 2026 Ghiyath Abd Al-Razzaq — All rights reserved',
    footerMade:     'Made with <span class="heart">♥</span> for Engineering',
    /* Typing strings */
    typingStrings: [
      'CAD/CAM Engineer',
      'CNC Programmer',
      'Mechanical Design Engineer',
      'PowerMill Toolpath Specialist'
    ]
  },

  ar: {
    /* Page meta */
    pageTitle:      'غياث عبد الرزاق | مهندس CAD/CAM | مبرمج CNC',
    metaDesc:       'موقع بورتفوليو غياث عبد الرزاق - مهندس CAD/CAM ومبرمج CNC متخصص في مسارات تشغيل PowerMill ثلاثية المحاور ومحاكاة G-Code وSolidWorks',
    /* Nav */
    navHome:        'الرئيسية',
    navAbout:       'من أنا',
    navSkills:      'المهارات',
    navProjects:    'المشاريع',
    navExperience:  'الخبرة',
    navServices:    'الخدمات',
    navContact:     'تواصل',
    backTop:        'العودة للأعلى',
    /* Hero */
    heroAvailable:  'متاح للعمل',
    heroName:       'غياث عبد الرزاق',
    heroDesc:       'متخصص في توليد مسارات تشغيل PowerMill ثلاثية المحاور ومحاكاة G-Code وتجميع آلات CNC وتصميم CAD بـ SolidWorks.',
    heroCta:        'تواصل معي',
    heroCV:         'تحميل السيرة الذاتية',
    statProjects:   'برمجة CNC وCAM',
    stat3D:         'PowerMill وSolidWorks',
    statYears:      'تصميم موجّه للتصنيع',
    scrollHint:     'مرّر للأسفل',
    /* About */
    aboutTitle:     'متخصص CAD/CAM وتصنيع CNC\n<em>الدقة من التصميم إلى الآلة</em>',
    aboutP1:        'أنا غياث عبد الرزاق، خريج هندسة ميكانيكية من جامعة دمشق، متخصص في هندسة CAD/CAM وبرمجة CNC والتصميم الميكانيكي. لديّ خبرة عملية في توليد وتحسين مسارات التشغيل ثلاثية المحاور باستخدام Autodesk PowerMill (تخشين، تشغيل متبقٍّ، تشطيب) ومحاكاة G-Code.',
    aboutP2:        'صمّمت وبنيت وضبطت آلة CNC راوتر ثلاثية المحاور من الصفر، جامعاً الخبرة التصنيعية العملية مع النمذجة الدقيقة بـ SolidWorks ومعايير GD&T.',
    trait1:         'تحسين مسارات التشغيل ومحاكاة G-Code',
    trait2:         'تجميع وضبط آلات CNC بدقة',
    trait3:         'تصميم موجّه للتصنيع والتجميع (DFM / DFA)',
    trait4:         'الأبعاد الهندسية والتفاوتات الدقيقة (GD&T)',
    aboutCta:       'تحدّث معي',
    /* Skills */
    skillsTitle:    'الأدوات والكفاءات\n<em>التقنية</em>',
    skillCat1:      'برمجة CAM وCNC',
    skillCat2:      'CAD والرسوم الهندسية',
    skillCat3:      'الهندسة الميكانيكية والتصنيع',
    skillCat4:      'المهارات التقنية',
    catiaBeginner:  'CATIA (أساسي)',
    skill3DModel:   'النمذجة ثلاثية الأبعاد',
    skillMoldDes:   'تصميم القوالب',
    skillMechAnal:  'التحليل الميكانيكي',
    skillCNC:       'برمجة CNC',
    skillMfgOps:    'عمليات التصنيع',
    skillProdDes:   'تصميم المنتجات',
    skillEngDoc:    'التوثيق الهندسي',
    skillDFM:       'تحسين التصاميم DFM',
    /* Projects */
    projectsTitle:  'أبرز الأعمال\n<em>الهندسية</em>',
    filterAll:      'الكل',
    filterDesign:   'تصميم',
    filterMfg:      'تصنيع',
    filterAuto:     'أتمتة',
    viewDetails:    'عرض التفاصيل',
    proj1Title:     'تجميع حمّالة انزلاقية (Skid-Steer Loader)',
    proj1Desc:      'تجميع ثلاثي الأبعاد كامل لحمّالة انزلاقية مدمجة — ذراع الرفع، الجرّافة، هيكل المقصورة، ومنظومة دفع العجلات.',
    proj2Title:     'آلية البكرات والمحامل داخل الجرّافة',
    proj2Desc:      'تجميع فرعي مفصّل لآلية البكرات والمحامل الداخلية ضمن جسم الجرّافة، مع دعامات المحاور وكتائف التثبيت.',
    proj3Title:     'هيكل درون سباق FPV',
    proj3Desc:      'تصميم هيكل درون سباق مدمج رباعي المحركات، مع حجرة إلكترونيات مركزية وأذرع مقواة ومساكن للمحركات والمراوح.',
    proj4Title:     'وصلة مفصل عالمي مزدوج',
    proj4Desc:      'تصميم وصلة مفصل عالمي مزدوج (Cardan) لنقل الحركة الدورانية بين محورين غير متحاذيين.',
    proj5Title:     'برمجة CAM لتجويف ونواة قالب (Autodesk PowerMill)',
    proj5Desc:      'توليد مسارات تخشين وتشغيل متبقٍّ وتشطيب ثلاثي الأبعاد في PowerMill مع التحقق الكامل من التصادم والتغلغل لمكونات القالب.',
    proj6Title:     'تصميم قالب حقن بلاستيكي (مشروع أكاديمي)',
    proj6Desc:      'تصميم قالب متعدد الأجزاء يشمل النواة والتجويف والأنوية الجانبية وخطوط الفصل باستخدام SolidWorks مع بدلات انكماش PMMA وزوايا السحب.',
    proj7Title:     'تصميم وتصنيع وبرمجة آلة CNC ثلاثية المحاور — مشروع التخرج',
    proj7Desc:      'تصميم الهيكل الميكانيكي الكامل بـ SolidWorks، واختيار مكونات الإدارة (أدلة خطية، مسامير قيادة، محركات خطوية)، وبناء الآلة وضبطها، وتهيئة وحدة تحكم GRBL لحركة G-Code ثلاثية المحاور.',
    proj8Title:     'علبة تروس متعددة المراحل',
    proj8Desc:      'تصميم علبة تروس مسننة مستقيمة متعددة المراحل لتخفيض السرعة، مع حساب نسب التروس وتوزيع المحاور.',
    proj9Title:     'تصميم خزان مياه (Rotomolded)',
    proj9Desc:      'تصميم منتج لخزان مياه أسطواني مضلّع مع غطاء متكامل ووصلات تثبيت.',
    proj10Title:    'تصميم طاولة خشبية',
    proj10Desc:     'تصميم طاولة بسطح خشبي وهيكل أرجل فولاذي ملحوم، بأبعاد مناسبة للاستخدام اليومي.',
    proj11Title:    'التحقق من مسار تشغيل خشن',
    proj11Desc:     'إعداد مسار تشغيل خشن (Roughing) والتحقق من التصادم والحفر الزائد في PowerMill لقطعة قالب متعددة الجيوب.',
    proj12Title:    'نواة قالب سماعة — برمجة CAM',
    proj12Desc:     'برمجة مسارات تشغيل لنواة قالب سماعة، تجمع بين عدة استراتيجيات تشطيب وحركات دخول متعددة.',
    proj13Title:    'نواة قالب سماعة — استراتيجية التشطيب',
    proj13Desc:     'تخطيط ومحاكاة تمريرات التشطيب لنواة قالب السماعة، للتحقق من التغطية الكاملة وأمان التماس مع الأداة.',
    proj14Title:    'مسار تشغيل هيكل — 3D Offset',
    proj14Desc:     'مسار تشغيل تشطيب من نوع 3D Offset لقطعة هيكل ذات نتوءات وجيوب دائرية، باستخدام تشغيل معتمد على نمط.',
    /* Stats */
    statLabelProjects:  'مشروع مكتمل',
    statLabel3D:        'نموذج ثلاثي الأبعاد',
    statLabelHours:     'ساعة تصميم',
    statLabelDrawings:  'رسمة هندسية',
    /* Experience */
    expTitle:       'المسيرة المهنية\n<em>والأكاديمية</em>',
    badgeWork:      'عمل',
    badgeIntern:    'تدريب',
    badgeEdu:       'تعليم',
    exp1Role:       'مهندس تصميم ميكانيكي',
    exp1Company:    '(مستقل / Freelance)',
    exp1Desc:       'تصميم قطع ميكانيكية مخصصة، إعداد رسومات للتصنيع، التواصل مع ورش التصنيع لضمان جودة التنفيذ.',
    exp2Role:       'مهندس تصميم متدرب',
    exp2Company:    'قسم الهندسة',
    exp2Desc:       'المشاركة في تصميم قوالب بلاستيكية وأجزاء معدنية، التعلم من فريق هندسي متخصص وتطبيق معايير الجودة الدولية.',
    exp3Role:       'مشروع التخرج — آلة CNC ثلاثية المحاور',
    exp3Company:    'جامعة دمشق — قسم الهندسة الميكانيكية',
    exp3Desc:       'تصميم وتصنيع وبرمجة آلة CNC راوتر ثلاثية المحاور من الصفر — تصميم الهيكل بـ SolidWorks، اختيار المكونات، دمج وحدة التحكم GRBL، والتحقق من مسارات G-Code.',
    exp4Role:       'بكالوريوس هندسة ميكانيكية — تصميم وإنتاج',
    exp4Company:    'جامعة دمشق | كلية الهندسة الميكانيكية',
    exp4Desc:       'التخصص في تصميم الآلات وعمليات التصنيع وهندسة CAD/CAM مع دراسة متقدمة في SolidWorks وAutodesk PowerMill والتشغيل بالـ CNC.',
    /* Services */
    servicesTitle:  'ماذا أقدّم\n<em>لعملائي</em>',
    svc1Title:      'برمجة CAM ثلاثية المحاور (PowerMill)',
    svc1Desc:       'توليد مسارات تشغيل فعّالة في Autodesk PowerMill — اختيار الاستراتيجية (تخشين / تشغيل متبقٍّ / تشطيب) ومحاكاة G-Code والتحقق منها.',
    svc2Title:      'إعداد وتجميع آلات CNC',
    svc2Desc:       'تصميم الهيكل الميكانيكي، توريد المكونات (أدلة خطية، مسامير قيادة، محركات خطوية)، التجميع الفعلي، ودمج وحدة تحكم GRBL/Arduino.',
    svc3Title:      'نمذجة CAD ثلاثية الأبعاد والصفائح المعدنية',
    svc3Desc:       'نمذجة SolidWorks البارامترية ثلاثية الأبعاد، تصميم التجمعات المعقدة، قطع الصفائح المعدنية، وحزم الرسومات التقنية الجاهزة للتصنيع.',
    svc4Title:      'تصميم قوالب الحقن البلاستيكي',
    svc4Desc:       'فصل التجويف والنواة، تحديد خطوط الفصل، الأنوية الجانبية، زوايا السحب، بدلات الانكماش، وتحسين التصميم لقابلية التصنيع.',
    svc5Title:      'الرسومات الهندسية وGD&T',
    svc5Desc:       'رسومات ورشة تفصيلية وفق معايير ISO/ASME مع إشارات الأبعاد الهندسية والتفاوتات الدقيقة GD&T وتوثيق BOM الكامل.',
    svc6Title:      'التوثيق الهندسي',
    svc6Desc:       'إعداد ملفات التوثيق الكاملة من BOM وتقارير الجودة وملفات CMF وتوثيق العمليات.',
    /* CV */
    cvTitle:        'حمّل سيرتي الذاتية',
    cvDesc:         'احصل على نسخة PDF كاملة وشاملة لسيرتي الذاتية مع تفاصيل جميع المشاريع والخبرات',
    cvBtn:          'تحميل السيرة الذاتية — PDF',
    cvReadyMsg:     'تم الإعداد — CV جاهز!',
    /* Contact */
    contactTitle:   'هل لديك مشروع؟\n<em>لنتحدث</em>',
    contactEmail:   'البريد الإلكتروني',
    contactPhone:   'رقم الهاتف',
    formName:       'الاسم',
    formNamePh:     'اسمك الكامل',
    formEmail:      'البريد الإلكتروني',
    formSubject:    'الموضوع',
    formSubjectPh:  'موضوع رسالتك',
    formMsg:        'الرسالة',
    formMsgPh:      'صف مشروعك أو استفسارك...',
    formSend:       'إرسال الرسالة',
    formSuccessMsg: 'شكراً! سأتواصل معك قريباً.',
    /* Form validation */
    errName:        'الاسم مطلوب',
    errEmail:       'بريد إلكتروني غير صحيح',
    errMsg:         'الرسالة قصيرة جداً (10 أحرف على الأقل)',
    /* Footer */
    footerTagline:  'مهندس CAD/CAM | مبرمج CNC — الدقة من التصميم إلى الآلة',
    footerCopy:     '© 2026 غياث عبد الرزاق — جميع الحقوق محفوظة',
    footerMade:     'صُنع بـ <span class="heart">♥</span> للهندسة',
    /* Typing strings */
    typingStrings: [
      'مهندس CAD/CAM',
      'مبرمج CNC',
      'مهندس تصميم ميكانيكي',
      'متخصص مسارات PowerMill'
    ]
  }
};

/* ─── Current language state ─── */
let currentLang = localStorage.getItem('preferred-lang') || 'en';
// Typing effect state — reset on language switch
let typingInstance = { si: 0, ci: 0, deleting: false, timer: null };

/* ─── Apply translations to DOM ─── */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  /* 1. html tag */
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  /* 2. <title> */
  document.title = t.pageTitle;

  /* 3. meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  /* 4. data-i18n text nodes (supports \n + <em> in translations) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    const raw = t[key];
    // Replace \n with <br/> before setting innerHTML
    el.innerHTML = raw.replace(/\n/g, '<br/>');
  });

  /* 5. data-i18n-attr: "attr1|key1,attr2|key2" */
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.trim().split('|');
      if (t[key] !== undefined) el.setAttribute(attr, t[key]);
    });
  });

  /* 6. lang toggle label shows target language */
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'ar' ? 'EN' : 'AR';

  /* 7. Restart typing effect */
  clearTimeout(typingInstance.timer);
  typingInstance = { si: 0, ci: 0, deleting: false, timer: null };
  const el = document.getElementById('typedText');
  if (el) { el.textContent = ''; startTyping(t.typingStrings); }

  /* 8. Persist preference */
  localStorage.setItem('preferred-lang', lang);
  currentLang = lang;
}

/* ─── Toggle between languages ─── */
function switchLanguage() {
  const next = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations(next);
}

/* ─── Wire up toggle button ─── */
document.getElementById('langToggle')?.addEventListener('click', switchLanguage);

/* ─── Initialize on load ─── */
applyTranslations(currentLang);

/* ─── LOADER ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initHeroCounter();
  }, 2200);
});

/* ─── CURSOR ─── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  if (dot)  { dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'; }
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ─── NAVBAR ─── */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLink();
  toggleBackTop();
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  const spans = navToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle?.querySelectorAll('span');
    spans?.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}

/* ─── BACK TO TOP ─── */
const backTop = document.getElementById('backTop');
function toggleBackTop() {
  backTop?.classList.toggle('visible', window.scrollY > 400);
}
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── HERO CANVAS (Particles) ─── */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#0affe4' : '#4f8dff';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur  = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    // Draw connecting lines
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - d / 120) * 0.08;
          ctx.strokeStyle = '#0affe4';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── TYPING EFFECT (driven by i18n) ─── */
function startTyping(strings) {
  const el = document.getElementById('typedText');
  if (!el || !strings || strings.length === 0) return;

  function type() {
    const str   = strings[typingInstance.si % strings.length];
    const speed = typingInstance.deleting ? 40 : 80;
    el.textContent = str.slice(0, typingInstance.ci);

    if (!typingInstance.deleting && typingInstance.ci === str.length) {
      typingInstance.timer = setTimeout(() => {
        typingInstance.deleting = true;
        type();
      }, 2200);
      return;
    }
    if (typingInstance.deleting && typingInstance.ci === 0) {
      typingInstance.deleting = false;
      typingInstance.si = (typingInstance.si + 1) % strings.length;
    }
    typingInstance.ci += typingInstance.deleting ? -1 : 1;
    typingInstance.timer = setTimeout(type, speed);
  }
  typingInstance.timer = setTimeout(type, 1200);
}

/* ─── HERO MINI COUNTERS ─── */
function initHeroCounter() {
  document.querySelectorAll('.hstat-num').forEach(el => {
    animateCount(el, parseInt(el.dataset.target), 1500);
  });
}

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay ? parseInt(el.dataset.delay) * 120 : 0;
      setTimeout(() => el.classList.add('visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── SKILL BARS ─── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.w + '%';
        }, i * 150);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

/* ─── STAT COUNTERS ─── */
function animateCount(el, target, duration) {
  const start = performance.now();
  function frame(now) {
    const pct = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);
    el.querySelector ? (el.querySelector('.count').textContent = Math.round(ease * target)) : (el.textContent = Math.round(ease * target));
    if (pct < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        animateCount(el, target, 2000);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

/* ─── PROJECT FILTER ─── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !show);
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      }
    });
  });
});

/* ─── PROJECT MODALS ─── */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');

const projectDetails = {
  en: {
    'Skid-Steer Loader Assembly':              'Complete SolidWorks assembly of a compact skid-steer loader covering the lifting-arm linkage, bucket, operator cab structure, engine bay, and wheel drivetrain. The project focused on correct proportions, moving-part interference checks, and a fully rendered presentation model.',
    'Loader Roller & Bearing Mechanism':       'Close-up sub-assembly modeling of the roller and shaft mechanism mounted inside the bucket housing, including bearing supports, pivot shafts, and mounting brackets — built to verify fit and clearance before integration into the full loader assembly.',
    'FPV Racing Drone Frame':                  '3D design of a lightweight FPV racing quadcopter frame, including the central chassis for the flight controller and battery, reinforced arms, and motor/propeller mounts. The layout was optimized for a low center of gravity and easy component access.',
    'Universal Joint Coupling':                'Machine-element design of a double universal joint coupling used to transmit torque between two shafts at an angle. The model includes the yokes, cross pins, and bearing details needed for accurate motion transfer and manufacturability.',
    'CAM Toolpath Programming — Mold Cavity':  'CAM programming session in Autodesk PowerMill for machining a mold cavity and core. Includes constant-Z finishing strategy setup, stock model verification, and toolpath simulation to confirm safe, efficient machining.',
    'Plastic Injection Mold Design':           'Complete two-plate injection mold design built in SolidWorks, covering the core and cavity blocks, ejector pin layout, guide pillars and bushings, and mold-base assembly — designed with parting-line and ejection considerations in mind.',
    'DIY 3-Axis CNC Machine — Graduation Project': 'My mechanical engineering graduation project: a fully self-designed and manufactured 3-axis CNC machine. The build uses a wooden frame, T8 lead screws, NEMA17 stepper motors, a CNC Shield V3 driver board, GRBL firmware on Arduino, and a DC 775 spindle motor, covering structural design, motion system, and control integration.',
    'Multi-Stage Gear Train':                  'Design of a multi-stage spur gear train used for speed reduction in a power transmission system. The project included gear ratio calculations, shaft and keyway sizing, and center-distance layout across all mesh stages.',
    'Rotomolded Water Tank Design':            '3D product design of a cylindrical water storage tank with a ribbed body for structural rigidity, an integrated screw cap, and fitting mounts. The design considered rotational-molding manufacturability and wall-thickness uniformity.',
    'Wooden Table Design':                     'Furniture design combining a solid wood tabletop with a welded steel leg frame. The project covered dimensioning for structural stability, joint details between the wood top and metal frame, and a full presentation render.',
    'CAM Roughing Toolpath Verification':      'CAM roughing strategy developed in PowerMill for a multi-pocket mold component, including tool selection, stepover/stepdown settings, and toolpath verification to flag and correct unsafe or colliding segments before machining.',
    'Speaker Mold Core — CAM Programming':     'CAM programming for a speaker enclosure mold core in PowerMill, combining several finishing strategies (Z constant, ball-nose passes) with different lead-in options — ramp, horizontal arc, and vertical arc — to achieve full, gouge-free surface coverage.',
    'Speaker Mold Core — Finishing Strategy':  'Finishing-stage toolpath planning for the same speaker enclosure mold core, focused on simulating and verifying each finishing pass — lead-in behavior, surface coverage, and safe tool engagement — before generating the final NC program.',
    'Housing CAM Toolpath — 3D Offset':        'CAM finishing toolpath for a housing-type part with circular bosses and pockets, using a pattern-based 3D offset strategy in PowerMill to machine the transition surface between features with consistent stepover.'
  },
  ar: {
    'تجميع حمّالة انزلاقية (Skid-Steer Loader)': 'تجميع كامل في SolidWorks لحمّالة انزلاقية مدمجة يشمل مفصلة ذراع الرفع، الجرّافة، هيكل مقصورة القيادة، حجرة المحرك، ومنظومة دفع العجلات. ركّز المشروع على النسب الواقعية، فحص تداخل الأجزاء المتحركة، ونموذج عرض مرندر بالكامل.',
    'آلية البكرات والمحامل داخل الجرّافة':      'نمذجة تجميع فرعي مقرّب لآلية المحاور والبكرات المثبتة داخل جسم الجرّافة، شاملةً دعامات المحامل ومحاور الدوران وكتائف التثبيت — نُفّذت للتحقق من التوافق والمسافات الحرة قبل الدمج ضمن التجميع الكامل للحمّالة.',
    'هيكل درون سباق FPV':                       'تصميم ثلاثي الأبعاد لهيكل درون سباق خفيف من نوع FPV، يشمل الشاسيه المركزي لوحدة التحكم بالطيران والبطارية، أذرعاً مقواة، ومساكن للمحركات والمراوح. جرى تحسين التوزيع لتقليل مركز الثقل وتسهيل الوصول إلى المكونات.',
    'وصلة مفصل عالمي مزدوج':                    'تصميم عنصر آلي لوصلة مفصل عالمي مزدوج تُستخدم لنقل العزم بين محورين بزاوية ميل. يتضمن النموذج الشوك (yokes) ومحاور الصليب وتفاصيل المحامل اللازمة لنقل حركة دقيق وقابل للتصنيع.',
    'برمجة مسارات تشغيل CAM — تجويف قالب':      'جلسة برمجة CAM في Autodesk PowerMill لتشغيل تجويف ونواة قالب. تشمل إعداد استراتيجية تشطيب Constant Z، والتحقق من نموذج الخامة (Stock Model)، ومحاكاة المسار للتأكد من تشغيل آمن وفعّال.',
    'تصميم قالب حقن بلاستيكي':                  'تصميم قالب حقن ثنائي اللوح بالكامل عبر SolidWorks، يغطي كتلتي النواة والتجويف، توزيع دبابيس الإخراج، أعمدة وبطانات التوجيه، وتجميع قاعدة القالب — مع مراعاة خط الفصل وآلية الإخراج.',
    'آلة CNC ثلاثية المحاور — مشروع التخرج':    'مشروع تخرجي في الهندسة الميكانيكية: آلة CNC ثلاثية المحاور مصمّمة ومصنّعة بالكامل من قِبلي. تعتمد الآلة على هيكل خشبي، قضبان حركة T8، محركات خطوية NEMA17، لوحة تحكم CNC Shield V3، فيرموير GRBL على Arduino، ومغزل DC 775 — وتغطي التصميم الإنشائي ومنظومة الحركة وتكامل التحكم.',
    'علبة تروس متعددة المراحل':                 'تصميم علبة تروس مسننة مستقيمة متعددة المراحل تُستخدم لتخفيض السرعة في منظومة نقل حركة. شمل المشروع حساب نسب التروس، تحديد أبعاد المحاور والمفاتيح (Keyway)، وتوزيع المسافات المركزية عبر جميع مراحل التعشيق.',
    'تصميم خزان مياه (Rotomolded)':             'تصميم منتج ثلاثي الأبعاد لخزان تخزين مياه أسطواني بجسم مضلّع لزيادة الصلابة الإنشائية، مع غطاء لولبي متكامل ووصلات تثبيت. روعي في التصميم قابلية التصنيع بالقولبة الدورانية (Rotational Molding) وانتظام سماكة الجدار.',
    'تصميم طاولة خشبية':                        'تصميم أثاث يجمع بين سطح خشبي مصمت وهيكل أرجل فولاذي ملحوم. غطّى المشروع تحديد الأبعاد لضمان الثبات الإنشائي، تفاصيل الوصل بين السطح الخشبي والهيكل المعدني، ونموذج عرض كامل.',
    'التحقق من مسار تشغيل خشن':                 'تطوير استراتيجية تشغيل خشن في PowerMill لقطعة قالب متعددة الجيوب، شاملةً اختيار الأداة، إعدادات الخطوة الجانبية والعمودية، والتحقق من المسار لرصد وتصحيح المقاطع غير الآمنة أو المتصادمة قبل التشغيل الفعلي.',
    'نواة قالب سماعة — برمجة CAM':              'برمجة CAM لنواة قالب سماعة في PowerMill، تجمع بين عدة استراتيجيات تشطيب (Z ثابت، تمريرات كروية) مع خيارات دخول مختلفة — منحدر، قوس أفقي، وقوس عمودي — لتحقيق تغطية سطحية كاملة وخالية من الحفر الزائد.',
    'نواة قالب سماعة — استراتيجية التشطيب':     'تخطيط مسارات مرحلة التشطيب لنفس نواة قالب السماعة، مع التركيز على محاكاة والتحقق من كل تمريرة تشطيب — سلوك الدخول، التغطية السطحية، وأمان تماس الأداة — قبل توليد برنامج NC النهائي.',
    'مسار تشغيل هيكل — 3D Offset':              'مسار تشغيل تشطيب لقطعة من نوع هيكل تحتوي على نتوءات وجيوب دائرية، باستخدام استراتيجية 3D Offset المعتمدة على نمط (Pattern) في PowerMill لتشغيل السطح الانتقالي بين الميزات بخطوة جانبية منتظمة.'
  }
};

document.querySelectorAll('.proj-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card  = btn.closest('.project-card');
    const titleEl = card.querySelector('.proj-title');
    // Use the data-i18n key to find the title in the current language
    const i18nKey = titleEl.dataset.i18n;
    const title = i18nKey
      ? (translations[currentLang][i18nKey] || titleEl.textContent)
      : titleEl.textContent;
    modalTitle.textContent = title;
    const details = projectDetails[currentLang] || projectDetails.en;
    modalDesc.textContent  = details[title] || (currentLang === 'ar' ? 'تفاصيل المشروع غير متوفرة حالياً.' : 'Project details not available.');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── CV DOWNLOAD ─── */
function handleCVDownload(e) {
  const btn = e.currentTarget;
  const orig = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> ' + (translations[currentLang].cvReadyMsg || 'Done — CV Ready!');
  btn.style.pointerEvents = 'none';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.pointerEvents = '';
  }, 2500);
}
document.getElementById('downloadCV')?.addEventListener('click', handleCVDownload);
document.getElementById('cvDownloadMain')?.addEventListener('click', handleCVDownload);

/* ─── CONTACT FORM ─── */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form?.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const name  = document.getElementById('fname');
  const email = document.getElementById('femail');
  const msg   = document.getElementById('fmsg');

  // Clear errors
  ['nameErr','emailErr','msgErr'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  if (!name.value.trim()) {
    document.getElementById('nameErr').textContent = translations[currentLang].errName;
    name.focus(); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('emailErr').textContent = translations[currentLang].errEmail;
    if (valid) email.focus(); valid = false;
  }
  if (!msg.value.trim() || msg.value.trim().length < 10) {
    document.getElementById('msgErr').textContent = translations[currentLang].errMsg;
    if (valid) msg.focus(); valid = false;
  }

  if (!valid) return;

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> جاري الإرسال...';

  setTimeout(() => {
    form.reset();
    formSuccess.classList.add('show');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> إرسال الرسالة';
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1800);
});

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── NAVBAR GLOW ON HOVER ─── */
document.querySelectorAll('.service-card,.project-card,.skill-category').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});
