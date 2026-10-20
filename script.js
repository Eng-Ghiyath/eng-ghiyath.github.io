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
    heroProjects:   'View Projects',
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
    proj1Desc:      'Full SolidWorks assembly of a compact skid-steer loader — lifting-arm linkage, bucket, operator cab, engine bay, and wheel drivetrain — with moving-part interference checks and a fully rendered presentation model.',
    proj2Title:     'Loader Roller & Bearing Mechanism',
    proj2Desc:      'Detailed sub-assembly of the internal roller and bearing mechanism housed inside the loader bucket, with shaft supports and mounting brackets.',
    proj3Title:     'FPV Racing Drone Frame',
    proj3Desc:      'SolidWorks design of a lightweight 4-motor FPV racing quadcopter frame: a central chassis for the flight controller and battery, reinforced arms, and motor/propeller mounts, laid out for a low center of gravity.',
    proj4Title:     'Universal Joint Coupling',
    proj4Desc:      'Machine-element design of a double universal joint (Cardan) coupling that transmits torque between misaligned shafts, modeled with yokes, cross pins, and bearing details for accurate motion transfer and manufacturability.',
    proj5Title:     'Mold Cavity & Core CAM Programming (Autodesk PowerMill)',
    proj5Desc:      'Roughing, rest machining, and 3D offset finishing toolpaths for mold cavity and core components in Autodesk PowerMill, with stock-model verification and full collision and gouge checks before machining.',
    proj6Title:     'Plastic Injection Mold Design (Academic Project)',
    proj6Desc:      'Two-plate injection mold designed in SolidWorks: core and cavity, side cores, parting lines, ejector pins, and guide components, with PMMA shrinkage allowances and draft angles applied for moldability.',
    proj7Title:     '3-Axis CNC Machine Design, Fabrication & Programming — Graduation Project',
    proj7Desc:      'Complete SolidWorks design of the mechanical frame, selection of linear guides, T8 lead screws, and NEMA17 stepper motors, then physical assembly and calibration, and GRBL controller setup on Arduino for 3-axis G-code motion.',
    proj8Title:     'Multi-Stage Gear Train',
    proj8Desc:      'Multi-stage spur gear train for speed reduction in a power transmission system, covering gear ratio calculations, shaft and keyway sizing, and center-distance layout across every mesh stage.',
    proj9Title:     'Rotomolded Water Tank Design',
    proj9Desc:      'Product design of a cylindrical water storage tank with a ribbed body for rigidity, an integrated screw cap, and fitting mounts, considering rotational-molding manufacturability and uniform wall thickness.',
    proj10Title:    'Wooden Table Design',
    proj10Desc:     'Table with a solid wood top and a welded steel leg frame, dimensioned for everyday use and structural stability, with top-to-frame joint details and a full presentation render.',
    proj11Title:    'CAM Roughing Toolpath Verification',
    proj11Desc:     'Roughing strategy in PowerMill for a multi-pocket mold component — tool selection and stepover/stepdown settings — with collision and gouge verification to correct unsafe segments before machining.',
    proj12Title:    'Speaker Mold Core — CAM Programming',
    proj12Desc:     'PowerMill toolpath programming for a speaker enclosure mold core, combining finishing strategies (constant Z, ball-nose passes) with ramp, horizontal-arc, and vertical-arc lead-ins for full, gouge-free coverage.',
    proj13Title:    'Speaker Mold Core — Finishing Strategy',
    proj13Desc:     'Finishing-pass planning for the speaker mold core, simulating each pass to verify lead-in behavior, full surface coverage, and safe tool engagement before generating the final NC program.',
    proj14Title:    'Housing CAM Toolpath — 3D Offset',
    proj14Desc:     '3D offset finishing toolpath in PowerMill for a housing part with circular bosses and pockets, using pattern-based machining to cover the transition surfaces between features with consistent stepover.',
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
    heroProjects:   'استعراض المشاريع',
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
    proj1Desc:      'تجميع كامل في SolidWorks لحمّالة انزلاقية مدمجة — مفصلة ذراع الرفع، الجرّافة، مقصورة القيادة، حجرة المحرك، ومنظومة دفع العجلات — مع فحص تداخل الأجزاء المتحركة ونموذج عرض مرندر بالكامل.',
    proj2Title:     'آلية البكرات والمحامل داخل الجرّافة',
    proj2Desc:      'تجميع فرعي مفصّل لآلية البكرات والمحامل الداخلية ضمن جسم الجرّافة، مع دعامات المحاور وكتائف التثبيت.',
    proj3Title:     'هيكل درون سباق FPV',
    proj3Desc:      'تصميم في SolidWorks لهيكل درون سباق FPV خفيف رباعي المحركات: شاسيه مركزي لوحدة التحكم بالطيران والبطارية، أذرع مقواة، ومساكن للمحركات والمراوح، بتوزيع يخفض مركز الثقل.',
    proj4Title:     'وصلة مفصل عالمي مزدوج',
    proj4Desc:      'تصميم عنصر آلي لوصلة مفصل عالمي مزدوج (Cardan) تنقل العزم بين محورين غير متحاذيين، مع نمذجة الشوك (Yokes) ومحاور الصليب وتفاصيل المحامل لضمان نقل حركة دقيق وقابلية التصنيع.',
    proj5Title:     'برمجة CAM لتجويف ونواة قالب (Autodesk PowerMill)',
    proj5Desc:      'توليد مسارات تخشين وتشغيل متبقٍّ وتشطيب 3D Offset لتجويف ونواة قالب في Autodesk PowerMill، مع التحقق من نموذج الخامة (Stock Model) ومن التصادم والحفر الزائد قبل التشغيل.',
    proj6Title:     'تصميم قالب حقن بلاستيكي (مشروع أكاديمي)',
    proj6Desc:      'تصميم قالب حقن ثنائي اللوح في SolidWorks يشمل النواة والتجويف والأنوية الجانبية وخطوط الفصل ودبابيس الإخراج ومكونات التوجيه، مع بدلات انكماش PMMA وزوايا السحب لضمان قابلية التصنيع.',
    proj7Title:     'تصميم وتصنيع وبرمجة آلة CNC ثلاثية المحاور — مشروع التخرج',
    proj7Desc:      'تصميم الهيكل الميكانيكي الكامل في SolidWorks، واختيار الأدلة الخطية ومسامير القيادة T8 والمحركات الخطوية NEMA17، ثم بناء الآلة وضبطها، وتهيئة وحدة تحكم GRBL على Arduino لحركة G-Code ثلاثية المحاور.',
    proj8Title:     'علبة تروس متعددة المراحل',
    proj8Desc:      'تصميم علبة تروس مسننة مستقيمة متعددة المراحل لتخفيض السرعة في منظومة نقل حركة، مع حساب نسب التروس وتحديد أبعاد المحاور والمفاتيح (Keyway) وتوزيع المسافات المركزية عبر مراحل التعشيق.',
    proj9Title:     'تصميم خزان مياه (Rotomolded)',
    proj9Desc:      'تصميم منتج لخزان تخزين مياه أسطواني بجسم مضلّع لزيادة الصلابة، مع غطاء لولبي متكامل ووصلات تثبيت، مع مراعاة قابلية التصنيع بالقولبة الدورانية وانتظام سماكة الجدار.',
    proj10Title:    'تصميم طاولة خشبية',
    proj10Desc:     'تصميم طاولة بسطح خشبي مصمت وهيكل أرجل فولاذي ملحوم، بأبعاد مناسبة للاستخدام اليومي والثبات الإنشائي، مع تفاصيل الوصل بين السطح والهيكل ونموذج عرض كامل.',
    proj11Title:    'التحقق من مسار تشغيل خشن',
    proj11Desc:     'إعداد استراتيجية تشغيل خشن (Roughing) في PowerMill لقطعة قالب متعددة الجيوب — اختيار الأداة وإعدادات الخطوة الجانبية والعمودية — مع التحقق من التصادم والحفر الزائد وتصحيح المقاطع غير الآمنة قبل التشغيل.',
    proj12Title:    'نواة قالب سماعة — برمجة CAM',
    proj12Desc:     'برمجة مسارات تشغيل في PowerMill لنواة قالب سماعة، تجمع بين استراتيجيات تشطيب (Z ثابت وتمريرات كروية) وحركات دخول بمنحدر وقوس أفقي وقوس عمودي لتغطية سطحية كاملة وخالية من الحفر الزائد.',
    proj13Title:    'نواة قالب سماعة — استراتيجية التشطيب',
    proj13Desc:     'تخطيط تمريرات التشطيب لنواة قالب السماعة ومحاكاة كل تمريرة للتحقق من سلوك الدخول والتغطية السطحية الكاملة وأمان تماس الأداة قبل توليد برنامج NC النهائي.',
    proj14Title:    'مسار تشغيل هيكل — 3D Offset',
    proj14Desc:     'مسار تشطيب 3D Offset في PowerMill لقطعة هيكل ذات نتوءات وجيوب دائرية، باستخدام تشغيل معتمد على نمط (Pattern) لتغطية الأسطح الانتقالية بين الميزات بخطوة جانبية منتظمة.',
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

/* ─── ON LOAD ─── */
window.addEventListener('load', () => {
  initHeroCounter();
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
    'Skid-Steer Loader Assembly': 'Complete SolidWorks assembly of a compact skid-steer loader that integrates the lifting-arm linkage, bucket, operator cab structure, engine bay, and wheel drivetrain into one model. The work focused on realistic proportions between subsystems, interference checks on the moving parts to confirm they do not collide, and a fully rendered presentation model. It reflects large-assembly modeling and motion/fit validation skills.',
    'Loader Roller & Bearing Mechanism':       'Close-up sub-assembly modeling of the roller and shaft mechanism mounted inside the bucket housing, including bearing supports, pivot shafts, and mounting brackets — built to verify fit and clearance before integration into the full loader assembly.',
    'FPV Racing Drone Frame': '3D design of a lightweight FPV racing quadcopter frame in SolidWorks, as a carbon frame design. The central chassis houses the flight controller and battery, the arms are reinforced, and motor and propeller mounts are provided for the four motors. The layout was optimized for a low center of gravity, which supports flight stability, and for easy access to components.',
    'Universal Joint Coupling': 'Machine-element design of a double universal joint (Cardan) coupling that transmits torque between two shafts at an angle. A double joint is used because a single Cardan joint delivers a fluctuating output speed, while two joints arranged correctly compensate for each other. The model includes the yokes, cross pins, and bearing details required for accurate motion transfer and manufacturability.',
    'Mold Cavity & Core CAM Programming (Autodesk PowerMill)': 'Autodesk PowerMill 3-axis CAM programming for mold cavity and core components. Roughing removes the bulk of the material, rest machining clears what the larger tool left in corners and tight areas, and finishing — 3D offset and constant-Z strategies — produces the final surface. A stock model tracks the remaining material after each operation, and every toolpath was verified for collisions and gouges (unintended tool cuts into the part), with simulation used to confirm safe, efficient machining.',
    'Plastic Injection Mold Design (Academic Project)': 'Academic project: complete two-plate plastic injection mold designed in SolidWorks. The part is separated into core and cavity blocks along a defined parting line, with side cores forming features that cannot release in the main opening direction. Material-specific allowances were applied — shrinkage compensation for PMMA (acrylic) and draft angles to ease ejection. The assembly covers the ejector pin layout, guide pillars and bushings, and the mold base, following DFM principles.',
    '3-Axis CNC Machine Design, Fabrication & Programming — Graduation Project': 'Graduation project (Mechanical Engineering Department, Damascus University): a functional 3-axis CNC router designed, built, and programmed from scratch. The frame was modeled in SolidWorks and built in wood; motion comes from linear guides, T8 lead screws (converting motor rotation into linear travel), and NEMA17 stepper motors, with a DC 775 spindle motor for cutting. An Arduino running GRBL firmware with a CNC Shield V3 interprets G-code and drives the motors step by step. The machine was physically assembled and calibrated, and G-code toolpaths were verified.',
    'Multi-Stage Gear Train': 'Design of a multi-stage spur gear train for speed reduction in a power transmission system. Each stage lowers speed and raises torque, and the overall ratio is the product of the stage ratios, allowing a large reduction in a compact layout. The project included gear ratio calculations, shaft and keyway sizing, and center-distance layout across all mesh stages.',
    'Rotomolded Water Tank Design': '3D product design of a cylindrical water storage tank with a ribbed body for structural rigidity, an integrated screw cap, and fitting mounts. Rotational molding forms hollow plastic parts by heating material inside a rotating mold, so the design considered manufacturability for that process and wall-thickness uniformity. Presented with rendered visuals.',
    'Wooden Table Design': 'Furniture design combining a solid wood tabletop with a welded steel leg frame, sized for everyday use. The project covered dimensioning for structural stability, joint details between the wood top and the metal frame (where two different materials must be fastened together), and a full presentation render. The design was modeled as a SolidWorks assembly.',
    'CAM Roughing Toolpath Verification': 'Roughing strategy developed in PowerMill for a multi-pocket mold component. Roughing removes the bulk of the material, so the setup focused on tool selection and the stepover (distance between adjacent passes) and stepdown (depth of each layer) settings. Toolpaths were then verified to flag and correct unsafe or colliding segments, and gouges, before machining.',
    'Speaker Mold Core — CAM Programming': 'CAM programming for a speaker enclosure mold core in PowerMill, combining finishing strategies — constant Z (level-by-level passes) and ball-nose passes — with different lead-in options: ramp, horizontal arc, and vertical arc, to achieve full, gouge-free surface coverage. A lead-in defines how the tool enters the cut.',
    'Speaker Mold Core — Finishing Strategy': 'Finishing-stage toolpath planning for the same speaker enclosure mold core. Each finishing pass was simulated and verified — lead-in behavior, surface coverage, and safe tool engagement — before generating the final NC program (G-code). Verifying in simulation first reduces the risk of scrapping a high-value mold core on the machine.',
    'Housing CAM Toolpath — 3D Offset': 'CAM finishing toolpath for a housing-type part with circular bosses and pockets, using a pattern-based 3D offset strategy in PowerMill. A 3D offset pass follows the surface at a constant distance, so it machines the transition surfaces between features with consistent stepover.'
  },
  ar: {
    'تجميع حمّالة انزلاقية (Skid-Steer Loader)': 'تجميع كامل في SolidWorks لحمّالة انزلاقية مدمجة يدمج مفصلة ذراع الرفع والجرّافة وهيكل مقصورة القيادة وحجرة المحرك ومنظومة دفع العجلات في نموذج واحد. ركّز العمل على النسب الواقعية بين المنظومات الفرعية، وفحص التداخل (Interference) بين الأجزاء المتحركة للتأكد من حركتها دون تصادم، وإعداد نموذج عرض مرندر بالكامل. ويعكس المشروع مهارة نمذجة التجميعات الكبيرة والتحقق من الحركة والتوافق.',
    'آلية البكرات والمحامل داخل الجرّافة':      'نمذجة تجميع فرعي مقرّب لآلية المحاور والبكرات المثبتة داخل جسم الجرّافة، شاملةً دعامات المحامل ومحاور الدوران وكتائف التثبيت — نُفّذت للتحقق من التوافق والمسافات الحرة قبل الدمج ضمن التجميع الكامل للحمّالة.',
    'هيكل درون سباق FPV': 'تصميم ثلاثي الأبعاد في SolidWorks لهيكل درون سباق FPV خفيف من نوع الهياكل الكربونية (Carbon Frame). يحتضن الشاسيه المركزي وحدة التحكم بالطيران والبطارية، وتأتي الأذرع مقواة، مع مساكن للمحركات الأربعة وللمراوح. جرى تحسين التوزيع لخفض مركز الثقل، مما يعزز الثبات أثناء الطيران، ولتسهيل الوصول إلى المكونات.',
    'وصلة مفصل عالمي مزدوج': 'تصميم عنصر آلي لوصلة مفصل عالمي مزدوج (Cardan) تنقل العزم بين محورين بزاوية ميل. يُستخدم المفصل المزدوج لأن المفصل المفرد ينتج سرعة خرج متذبذبة، بينما يعوّض مفصلان مرتّبان بشكل صحيح أحدهما الآخر. يتضمن النموذج الشوك (Yokes) ومحاور الصليب وتفاصيل المحامل اللازمة لنقل حركة دقيق وقابل للتصنيع.',
    'برمجة CAM لتجويف ونواة قالب (Autodesk PowerMill)': 'برمجة CAM ثلاثية المحاور في Autodesk PowerMill لمكونات تجويف ونواة قالب. يزيل التخشين (Roughing) معظم الخامة، ويزيل التشغيل المتبقي (Rest Machining) ما تركته الأداة الأكبر في الزوايا والمناطق الضيقة، ثم يُنتج التشطيب — باستراتيجيتي 3D Offset وConstant Z — السطح النهائي. يتتبّع نموذج الخامة (Stock Model) المادة المتبقية بعد كل عملية، وجرى التحقق من كل مسار من التصادم والحفر الزائد (Gouging)، مع محاكاة للتأكد من تشغيل آمن وفعّال.',
    'تصميم قالب حقن بلاستيكي (مشروع أكاديمي)': 'مشروع أكاديمي: تصميم قالب حقن بلاستيكي ثنائي اللوح كاملاً في SolidWorks. يُقسَّم الجزء إلى كتلتي نواة وتجويف على امتداد خط فصل محدد، مع أنوية جانبية لتشكيل الميزات التي لا يمكن تحريرها في اتجاه الفتح الرئيسي. وطُبّقت اعتبارات خاصة بالخامة: بدلات انكماش لمادة PMMA (الأكريليك) وزوايا سحب لتسهيل الإخراج. ويشمل التجميع توزيع دبابيس الإخراج وأعمدة وبطانات التوجيه وقاعدة القالب وفق مبادئ التصميم للتصنيع (DFM).',
    'تصميم وتصنيع وبرمجة آلة CNC ثلاثية المحاور — مشروع التخرج': 'مشروع تخرج (قسم الهندسة الميكانيكية، جامعة دمشق): آلة CNC Router ثلاثية المحاور وظيفية صُمّمت وبُنيت وبُرمجت من الصفر. نُمذج الهيكل في SolidWorks وبُني من الخشب؛ وتأتي الحركة من أدلة خطية ومسامير قيادة T8 (تحوّل دوران المحرك إلى حركة خطية) ومحركات خطوية NEMA17، مع مغزل DC 775 للقطع. ويقوم Arduino يعمل بفيرموير GRBL مع لوحة CNC Shield V3 بتفسير أكواد G-Code وتشغيل المحركات خطوة بخطوة. وتم تجميع الآلة وضبطها فعلياً والتحقق من مسارات G-Code.',
    'علبة تروس متعددة المراحل': 'تصميم علبة تروس مسننة مستقيمة متعددة المراحل لتخفيض السرعة في منظومة نقل حركة. تخفّض كل مرحلة السرعة وتزيد العزم، ونسبة التخفيض الكلية تساوي حاصل ضرب نسب المراحل، مما يتيح تخفيضاً كبيراً ضمن تصميم مدمج. شمل المشروع حساب نسب التروس، وتحديد أبعاد المحاور والمفاتيح (Keyway)، وتوزيع المسافات المركزية عبر جميع مراحل التعشيق.',
    'تصميم خزان مياه (Rotomolded)': 'تصميم منتج ثلاثي الأبعاد لخزان تخزين مياه أسطواني بجسم مضلّع لزيادة الصلابة الإنشائية، مع غطاء لولبي متكامل ووصلات تثبيت. تُنتج القولبة الدورانية (Rotational Molding) أجزاء بلاستيكية مجوفة عبر تسخين المادة داخل قالب دوّار، لذا روعيت في التصميم قابلية التصنيع بهذه العملية وانتظام سماكة الجدار، مع عرض مرئي مرندر.',
    'تصميم طاولة خشبية': 'تصميم أثاث يجمع بين سطح خشبي مصمت وهيكل أرجل فولاذي ملحوم، بأبعاد مناسبة للاستخدام اليومي. غطّى المشروع تحديد الأبعاد لضمان الثبات الإنشائي، وتفاصيل الوصل بين السطح الخشبي والهيكل المعدني (حيث يلزم تثبيت مادتين مختلفتين معاً)، ونموذج عرض كامل. نُمذج التصميم كتجميع (Assembly) في SolidWorks.',
    'التحقق من مسار تشغيل خشن': 'تطوير استراتيجية تشغيل خشن (Roughing) في PowerMill لقطعة قالب متعددة الجيوب. يزيل التخشين معظم الخامة، لذا ركّز الإعداد على اختيار الأداة وإعدادات الخطوة الجانبية (Stepover: المسافة بين التمريرات المتجاورة) والخطوة العمودية (Stepdown: عمق كل طبقة). ثم جرى التحقق من المسارات لرصد وتصحيح المقاطع غير الآمنة أو المتصادمة والحفر الزائد قبل التشغيل.',
    'نواة قالب سماعة — برمجة CAM': 'برمجة CAM لنواة قالب سماعة في PowerMill، تجمع بين استراتيجيات تشطيب — Z ثابت (تمريرات طبقة بطبقة) وتمريرات بأداة كروية (Ball-nose) — مع خيارات دخول مختلفة: منحدر وقوس أفقي وقوس عمودي، لتحقيق تغطية سطحية كاملة وخالية من الحفر الزائد. وتحدّد حركة الدخول (Lead-in) كيفية دخول الأداة في المادة.',
    'نواة قالب سماعة — استراتيجية التشطيب': 'تخطيط مسارات مرحلة التشطيب لنفس نواة قالب السماعة. جرت محاكاة كل تمريرة تشطيب والتحقق منها — سلوك الدخول والتغطية السطحية وأمان تماس الأداة — قبل توليد برنامج NC النهائي (G-Code). وتقلّل المحاكاة المسبقة خطر إتلاف نواة قالب عالية القيمة على الآلة.',
    'مسار تشغيل هيكل — 3D Offset': 'مسار تشطيب CAM لقطعة من نوع هيكل تحتوي على نتوءات وجيوب دائرية، باستخدام استراتيجية 3D Offset المعتمدة على نمط (Pattern) في PowerMill. يتبع مسار 3D Offset السطح بمسافة ثابتة، فيشغّل الأسطح الانتقالية بين الميزات بخطوة جانبية منتظمة.'
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
