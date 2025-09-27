// Global Variables
let currentLang = "ko";
let isFormSubmitting = false;

// Translations Object
const translations = {
	ko: {
		// Navigation
		"nav-logo": "나무보카",
		"nav-home": "홈",
		"nav-features": "기능",
		"nav-download": "다운로드",
		"nav-about": "팀 소개",
		"nav-contact": "문의",

		// Meta Tags
		"page-title": "나무보카 - 세상을 변화시키는 단어장 | 스마트 언어 학습 앱",
		"page-description":
			"즉시 추가, 맞춤형 팟캐스트, 퀴즈로 13개 언어를 효과적으로 학습하세요. PDF 출력 지원. iOS, Android 지원.",

		// Hero Section
		"hero-badge": "🌟 언제 어디서나 즉시 학습하는 새로운 패러다임",
		"hero-title-1": "세상을 변화시키는",
		"hero-title-2": "스마트 단어장",
		"hero-description":
			"원하는 단어와 문장을 언제든 즉시 추가하고, 맞춤형 팟캐스트와 퀴즈를 생성하세요.<br>13개 언어 조합으로 완벽한 학습 경험을 제공합니다.",
		"hero-cta-download": "📱 무료 다운로드",
		"hero-cta-features": "🎯 기능 살펴보기",
		"stat-languages": "지원 언어",
		"stat-users": "사용자",
		"stat-rating": "평점",

		// Floating Cards
		"floating-podcast": "맞춤형 팟캐스트",
		"floating-instant": "즉시 추가",
		"floating-vocab": "스마트 단어장",

		// Features Section
		"features-title": "나무보카만의 특별한 기능들",
		"features-description":
			"즉시 추가, 맞춤형 생성, PDF 출력까지 - 언제 어디서나 완벽한 언어 학습 경험을 제공합니다",
		"feature-vocab-title": "즉시 단어 추가",
		"feature-vocab-desc":
			"원하는 단어와 문장을 언제든 즉시 추가하고, 13개의 언어 조합으로 나만의 단어장을 완성하세요",
		"feature-vocab-1": "즉시 단어 및 문장 추가",
		"feature-vocab-2": "13개의 언어 조합 지원",
		"feature-vocab-3": "PDF 출력 및 인쇄 가능",
		"feature-podcast-title": "맞춤형 팟캐스트",
		"feature-podcast-desc":
			"추가한 단어들을 기반으로 자동 생성되는 팟캐스트로 자연스럽게 학습하세요. 스크립트도 함께 제공됩니다",
		"feature-podcast-1": "단어 기반 자동 생성",
		"feature-podcast-2": "다양한 스타일 지원",
		"feature-podcast-3": "스크립트 함께 제공",
		"feature-quiz-title": "퀴즈 & 에세이",
		"feature-quiz-desc":
			"추가한 단어들로 자동 생성되는 퀴즈와 에세이 문제로 학습 효과를 극대화하세요",
		"feature-quiz-1": "단어 기반 퀴즈 생성",
		"feature-quiz-2": "에세이 문제 제공",
		"feature-quiz-3": "즉시 피드백 제공",
		"feature-multilang-title": "PDF 출력 & 인쇄",
		"feature-multilang-desc":
			"완성된 단어장과 퀴즈를 PDF로 내보내어 실제 종이에 인쇄하여 학습하세요",
		"feature-multilang-1": "단어장 PDF 출력",
		"feature-multilang-2": "퀴즈 PDF 출력",
		"feature-multilang-3": "실제 종이 인쇄 가능",

		// How it Works
		"how-title": "나무보카 사용법",
		"how-description": "간단한 4단계로 효과적인 언어 학습을 시작하세요",
		"step1-title": "즉시 추가",
		"step1-desc": "언제 어디서나 원하는 단어와 문장을 즉시 추가하세요",
		"step2-title": "팟캐스트 생성",
		"step2-desc":
			"추가한 단어들을 기반으로 맞춤형 팟캐스트와 스크립트를 자동 생성하세요",
		"step3-title": "퀴즈 & 에세이",
		"step3-desc": "단어 기반 퀴즈와 에세이 문제로 학습 효과를 확인하세요",
		"step4-title": "PDF 출력",
		"step4-desc":
			"완성된 단어장과 퀴즈를 PDF로 출력하여 실제 종이에 인쇄해 학습하세요",

		// Download Section
		"download-title": "지금 바로 시작하세요",
		"download-description":
			"나무보카를 다운로드하고 언제 어디서나 즉시 추가하는 스마트한 언어 학습을 경험해보세요",
		"download-ios": "App Store에서 다운로드",
		"download-android": "Google Play에서 다운로드",
		"download-feature1": "완전 무료",
		"download-feature3": "오프라인 지원",

		// About Section
		"about-title": "팀 나무 (Team NAMU)",
		"about-description":
			"언어 학습의 혁신을 꿈꾸는 개발자들이 모여 만든 프로젝트입니다",
		"mission-title": "🎯 우리의 미션",
		"mission-text":
			"기술을 통해 누구나 쉽고 재미있게 언어를 배울 수 있는 세상을 만든다",
		"value1-title": "혁신",
		"value1-desc":
			"다른 언어 학습 앱에서는 볼 수 없었던 창의적인 학습 방법 개발",
		"value2-title": "접근성",
		"value2-desc": "누구나 부담 없이 이용할 수 있는 서비스 제공",
		"value3-title": "품질",
		"value3-desc": "사용자 경험을 최우선으로 하는 고품질 콘텐츠",
		"value4-title": "성장",
		"value4-desc": "사용자와 함께 지속적으로 발전하는 플랫폼",

		// Contact Section
		"contact-title": "문의하기",
		"contact-description":
			"궁금한 점이나 문의사항이 있으시면 언제든지 연락해주세요",
		"contact-info-title": "연락처 정보",
		"contact-email-title": "이메일",
		"contact-website-title": "웹사이트",
		"contact-hours-title": "응답 시간",
		"contact-hours-desc": "평일 24시간 이내 응답",
		"form-name": "이름 *",
		"form-email": "이메일 *",
		"form-subject": "제목 *",
		"form-message": "메시지 *",
		"form-submit": "메시지 보내기",
		"form-success-title": "메시지가 전송되었습니다!",
		"form-success-desc": "빠른 시일 내에 답변드리겠습니다.",

		// Footer
		"footer-logo": "나무보카",
		"footer-description":
			"언제 어디서나 즉시 추가하는 스마트한 언어 학습의 새로운 패러다임",
		"footer-product": "제품",
		"footer-features": "기능",
		"footer-download": "다운로드",
		"footer-pricing": "가격",
		"footer-updates": "업데이트",
		"footer-support": "지원",
		"footer-contact": "문의하기",
		"footer-faq": "자주 묻는 질문",
		"footer-help": "도움말 센터",
		"footer-community": "커뮤니티",
		"footer-company": "회사",
		"footer-about": "팀 소개",
		"footer-blog": "블로그",
		"footer-careers": "채용",
		"footer-press": "보도자료",
		"footer-copyright": "© 2025 Team NAMU. All rights reserved.",
		"footer-privacy": "개인정보처리방침",
		"footer-terms": "이용약관",
		"footer-delete-account": "계정 및 데이터 삭제",

		// Delete Account Page
		"delete-page-title": "계정 및 데이터 삭제 - 나무보카",
		"delete-page-description": "나무보카 앱에서 계정 및 데이터를 삭제하는 방법을 안내합니다.",
		"delete-title": "계정 및 데이터 삭제",
		"delete-subtitle": "나무보카 앱에서 계정과 모든 개인 데이터를 삭제하는 방법을 안내합니다.",
		"delete-in-app-title": "🗑️ 앱 내에서 계정 삭제",
		"delete-in-app-desc": "나무보카 앱에서 직접 계정과 모든 데이터를 삭제할 수 있습니다.",
		"delete-steps-title": "단계별 삭제 방법:",
		"delete-step-1": "나무보카 앱을 실행합니다",
		"delete-step-2": "화면 하단의 <strong>'설정'</strong> 탭을 선택합니다",
		"delete-step-3": "<strong>'계정 관리'</strong> 메뉴를 선택합니다",
		"delete-step-4": "<strong>'계정 및 데이터 삭제'</strong> 옵션을 선택합니다",
		"delete-step-5": "삭제될 데이터 목록을 확인합니다",
		"delete-step-6": "<strong>'삭제 확인'</strong> 버튼을 선택하여 최종 삭제를 진행합니다",
		"delete-warning-title": "⚠️ 중요 안내",
		"delete-warning-desc": "계정 삭제 시 모든 개인 데이터가 영구적으로 삭제되며, 복구할 수 없습니다. 삭제 전 필요한 데이터는 미리 백업해주세요.",
		"delete-data-list-title": "📊 삭제되는 데이터 목록",
		"delete-data-account": "<strong>계정 정보:</strong> 사용자 프로필, 로그인 정보",
		"delete-data-learning": "<strong>학습 데이터:</strong> 생성한 단어장, 학습 기록, 진도",
		"delete-data-settings": "<strong>설정 정보:</strong> 앱 설정, 알림 설정",
		"delete-data-podcast": "<strong>팟캐스트 기록:</strong> 생성한 팟캐스트, 재생 기록",
		"delete-data-quiz": "<strong>퀴즈 결과:</strong> 퀴즈 점수, 성취도 기록",
		"delete-data-cloud": "<strong>클라우드 동기화 데이터:</strong> 클라우드에 저장된 모든 데이터",
		"delete-time-title": "⏱️ 삭제 처리 시간",
		"delete-time-desc": "계정 삭제 요청 후 <strong>즉시</strong> 계정 및 관련 데이터가 삭제됩니다. 일부 백업 시스템에서는 최대 <strong>30일</strong> 이내에 완전히 제거됩니다.",
		"delete-comparison-title": "📱 앱 삭제 vs 계정 삭제",
		"delete-app-uninstall-title": "앱 삭제 (언인스톨)",
		"delete-app-uninstall-desc": "• 기기에서만 앱 제거<br>• 계정 데이터는 서버에 보존<br>• 재설치 시 데이터 복원 가능",
		"delete-account-full-title": "계정 삭제",
		"delete-account-full-desc": "• 모든 서버 데이터 완전 삭제<br>• 복구 불가능<br>• 새로 가입 시 처음부터 시작",
		"delete-help-title": "❓ 도움이 필요하신가요?",
		"delete-support-title": "고객 지원 문의",
		"delete-support-desc": "계정 삭제 과정에서 문제가 발생하거나 추가 도움이 필요하시면 아래로 연락해주세요:",
		"delete-support-email": "<strong>이메일:</strong> support@namu-voca.com",
		"delete-support-response": "<strong>응답 시간:</strong> 영업일 기준 24시간 이내",
		"delete-back-button": "← 메인 페이지로 돌아가기",
		"delete-last-updated": "최종 업데이트: 2025년 9월 27일",
	},
	en: {
		// Navigation
		"nav-logo": "NAMU",
		"nav-home": "Home",
		"nav-features": "Features",
		"nav-download": "Download",
		"nav-about": "About",
		"nav-contact": "Contact",

		// Meta Tags
		"page-title": "NAMU - Smart Vocabulary App | Instant Language Learning",
		"page-description":
			"Learn 13 languages effectively with instant vocabulary adding, custom podcasts, and PDF export. Available on iOS and Android.",

		// Hero Section
		"hero-badge": "🌟 New Paradigm of Instant Language Learning Anywhere",
		"hero-title-1": "Smart Vocabulary",
		"hero-title-2": "That Changes the World",
		"hero-description":
			"Add words and phrases instantly anytime, anywhere. Create custom podcasts and quizzes.<br>Perfect learning experience with 13 languages combinations.",
		"hero-cta-download": "📱 Free Download",
		"hero-cta-features": "🎯 Explore Features",
		"stat-languages": "Languages",
		"stat-users": "Users",
		"stat-rating": "Rating",

		// Floating Cards
		"floating-podcast": "Custom Podcasts",
		"floating-instant": "Instant Add",
		"floating-vocab": "Smart Vocabulary",

		// Features Section
		"features-title": "Special Features of NAMU",
		"features-description":
			"Instant adding, custom generation, PDF export - perfect language learning experience anywhere, anytime",
		"feature-vocab-title": "Add Words instantly",
		"feature-vocab-desc":
			"Add words and phrases instantly anytime, anywhere. Create your vocabulary with 13 language combinations",
		"feature-vocab-1": "Instant word & phrase adding",
		"feature-vocab-2": "13 language combinations",
		"feature-vocab-3": "PDF export & printing",
		"feature-podcast-title": "Custom Podcasts",
		"feature-podcast-desc":
			"Auto-generated podcasts based on your added words for natural learning. Scripts included",
		"feature-podcast-1": "Word-based auto generation",
		"feature-podcast-2": "Various style support",
		"feature-podcast-3": "Scripts provided",
		"feature-quiz-title": "Quizzes & Essays",
		"feature-quiz-desc":
			"Auto-generated quizzes and essay questions based on your added words to maximize learning effectiveness",
		"feature-quiz-1": "Word-based quiz generation",
		"feature-quiz-2": "Essay questions provided",
		"feature-quiz-3": "Instant feedback",
		"feature-multilang-title": "PDF Export & Print",
		"feature-multilang-desc":
			"Export completed vocabulary and quizzes as PDF and print on actual paper for study",
		"feature-multilang-1": "Vocabulary PDF export",
		"feature-multilang-2": "Quiz PDF export",
		"feature-multilang-3": "Real paper printing",

		// How it Works
		"how-title": "How to Use NAMU",
		"how-description": "Start effective language learning in 4 simple steps",
		"step1-title": "Instant Add",
		"step1-desc": "Add words and phrases instantly anytime, anywhere",
		"step2-title": "Generate Podcasts",
		"step2-desc":
			"Auto-generate custom podcasts and scripts based on your added words",
		"step3-title": "Quizzes & Essays",
		"step3-desc":
			"Check learning effectiveness with word-based quizzes and essay questions",
		"step4-title": "PDF Export",
		"step4-desc":
			"Export completed vocabulary and quizzes as PDF and print on actual paper for study",

		// Download Section
		"download-title": "Start Right Now",
		"download-description":
			"Download NAMU and experience instant vocabulary learning anywhere, anytime",
		"download-ios": "Download on App Store",
		"download-android": "Get it on Google Play",
		"download-feature1": "Completely Free",
		"download-feature3": "Online Support",

		// About Section
		"about-title": "Team NAMU",
		"about-description":
			"A project created by developers who dream of innovation in language learning",
		"mission-title": "🎯 Our Mission",
		"mission-text":
			"Creating a world where anyone can learn languages easily and enjoyably through technology",
		"value1-title": "Innovation",
		"value1-desc":
			"Developing creative learning methods never seen in other language learning apps",
		"value2-title": "Accessibility",
		"value2-desc": "Providing services that anyone can use without burden",
		"value3-title": "Quality",
		"value3-desc": "High-quality content that prioritizes user experience",
		"value4-title": "Growth",
		"value4-desc": "A platform that continuously evolves with users",

		// Contact Section
		"contact-title": "Contact Us",
		"contact-description":
			"Feel free to contact us if you have any questions or inquiries",
		"contact-info-title": "Contact Information",
		"contact-email-title": "Email",
		"contact-website-title": "Website",
		"contact-hours-title": "Response Time",
		"contact-hours-desc": "Response within 24 hours on weekdays",
		"form-name": "Name *",
		"form-email": "Email *",
		"form-subject": "Subject *",
		"form-message": "Message *",
		"form-submit": "Send Message",
		"form-success-title": "Message Sent Successfully!",
		"form-success-desc": "We will get back to you soon.",

		// Footer
		"footer-logo": "NAMU",
		"footer-description":
			"A new paradigm of instant vocabulary learning anywhere, anytime",
		"footer-product": "Product",
		"footer-features": "Features",
		"footer-download": "Download",
		"footer-pricing": "Pricing",
		"footer-updates": "Updates",
		"footer-support": "Support",
		"footer-contact": "Contact",
		"footer-faq": "FAQ",
		"footer-help": "Help Center",
		"footer-community": "Community",
		"footer-company": "Company",
		"footer-about": "About",
		"footer-blog": "Blog",
		"footer-careers": "Careers",
		"footer-press": "Press",
		"footer-copyright": "© 2025 Team NAMU. All rights reserved.",
		"footer-privacy": "Privacy Policy",
		"footer-terms": "Terms of Service",
		"footer-delete-account": "Account & Data Deletion",

		// Delete Account Page
		"delete-page-title": "Account & Data Deletion - NAMU VOCA",
		"delete-page-description": "Learn how to delete your account and data from the NAMU VOCA app.",
		"delete-title": "Account & Data Deletion",
		"delete-subtitle": "Learn how to delete your account and all personal data from the NAMU VOCA app.",
		"delete-in-app-title": "🗑️ Delete Account from App",
		"delete-in-app-desc": "You can delete your account and all data directly from the NAMU VOCA app.",
		"delete-steps-title": "Step-by-step deletion process:",
		"delete-step-1": "Open the NAMU VOCA app",
		"delete-step-2": "Select the <strong>'Settings'</strong> tab at the bottom of the screen",
		"delete-step-3": "Choose <strong>'Account Management'</strong> from the menu",
		"delete-step-4": "Select <strong>'Delete Account & Data'</strong> option",
		"delete-step-5": "Review the list of data to be deleted",
		"delete-step-6": "Select <strong>'Confirm Deletion'</strong> to proceed with final deletion",
		"delete-warning-title": "⚠️ Important Notice",
		"delete-warning-desc": "Once you delete your account, all personal data will be permanently deleted and cannot be recovered. Please backup any necessary data before deletion.",
		"delete-data-list-title": "📊 Data to be Deleted",
		"delete-data-account": "<strong>Account Information:</strong> User profile, login credentials",
		"delete-data-learning": "<strong>Learning Data:</strong> Created vocabulary lists, learning records, progress",
		"delete-data-settings": "<strong>Settings:</strong> App settings, notification preferences",
		"delete-data-podcast": "<strong>Podcast History:</strong> Generated podcasts, playback history",
		"delete-data-quiz": "<strong>Quiz Results:</strong> Quiz scores, achievement records",
		"delete-data-cloud": "<strong>Cloud Sync Data:</strong> All data stored in the cloud",
		"delete-time-title": "⏱️ Deletion Processing Time",
		"delete-time-desc": "Your account and related data will be deleted <strong>immediately</strong> after requesting account deletion. Some backup systems may take up to <strong>30 days</strong> for complete removal.",
		"delete-comparison-title": "📱 Uninstalling App vs Account Deletion",
		"delete-app-uninstall-title": "App Uninstallation",
		"delete-app-uninstall-desc": "• Only removes app from device<br>• Account data remains on server<br>• Data can be restored upon reinstall",
		"delete-account-full-title": "Account Deletion",
		"delete-account-full-desc": "• Completely deletes all server data<br>• Cannot be recovered<br>• Must start fresh if re-registering",
		"delete-help-title": "❓ Need Help?",
		"delete-support-title": "Customer Support",
		"delete-support-desc": "If you encounter any issues during the account deletion process or need additional help, please contact us:",
		"delete-support-email": "<strong>Email:</strong> support@namu-voca.com",
		"delete-support-response": "<strong>Response Time:</strong> Within 24 hours on business days",
		"delete-back-button": "← Back to Main Page",
		"delete-last-updated": "Last Updated: September 27, 2025",
	},
};

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
	initializeApp();
});

// Initialize App
function initializeApp() {
	// Initialize AOS (Animate On Scroll)
	if (typeof AOS !== "undefined") {
		AOS.init({
			duration: 600,
			once: true,
			offset: 100,
		});
	}

	// Initialize all components
	initializeNavigation();
	initializeLanguageToggle();
	initializeThemeToggle();
	initializeScrollEffects();
	initializeContactForm();
	initializeSmoothScrolling();
	initializeBackToTop();

	// Set initial language from browser or localStorage
	const savedLang =
		localStorage.getItem("namu-voca-lang") ||
		(navigator.language.startsWith("ko") ? "ko" : "en");
	setLanguage(savedLang);

	// Set initial theme
	initializeTheme();
}

// Navigation Functions
function initializeNavigation() {
	const navToggle = document.getElementById("nav-toggle");
	const navMenu = document.getElementById("nav-menu");
	const navbar = document.getElementById("navbar");

	// Mobile menu toggle
	if (navToggle && navMenu) {
		navToggle.addEventListener("click", function () {
			navToggle.classList.toggle("active");
			navMenu.classList.toggle("active");
		});

		// Close menu when clicking on links
		const navLinks = navMenu.querySelectorAll(".nav-link");
		navLinks.forEach((link) => {
			link.addEventListener("click", function () {
				navToggle.classList.remove("active");
				navMenu.classList.remove("active");
			});
		});

		// Close menu when clicking outside
		document.addEventListener("click", function (e) {
			if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
				navToggle.classList.remove("active");
				navMenu.classList.remove("active");
			}
		});
	}

	// Navbar scroll effect
	if (navbar) {
		window.addEventListener("scroll", function () {
			if (window.scrollY > 50) {
				navbar.classList.add("scrolled");
			} else {
				navbar.classList.remove("scrolled");
			}
		});
	}
}

// Language Toggle Functions
function initializeLanguageToggle() {
	const langButtons = document.querySelectorAll(".lang-btn");

	langButtons.forEach((btn) => {
		btn.addEventListener("click", function () {
			const lang = this.dataset.lang;
			setLanguage(lang);
		});
	});
}

function setLanguage(lang) {
	if (!translations[lang]) return;

	currentLang = lang;

	// Update HTML lang attribute
	document.documentElement.setAttribute("lang", lang);
	document.documentElement.setAttribute("data-lang", lang);

	// Update language buttons
	const langButtons = document.querySelectorAll(".lang-btn");
	langButtons.forEach((btn) => {
		btn.classList.toggle("active", btn.dataset.lang === lang);
	});

	// Update all translatable elements
	const translatableElements = document.querySelectorAll("[data-translate]");
	translatableElements.forEach((element) => {
		const key = element.getAttribute("data-translate");
		if (translations[lang][key]) {
			if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
				element.placeholder = translations[lang][key];
			} else if (element.tagName === "META") {
				element.content = translations[lang][key];
			} else if (element.tagName === "TITLE") {
				element.textContent = translations[lang][key];
			} else {
				element.innerHTML = translations[lang][key];
			}
		}
	});

	// Save language preference
	localStorage.setItem("namu-voca-lang", lang);

	// Update document title and meta description
	updateMetaTags(lang);
}

function updateMetaTags(lang) {
	const title = document.querySelector("title");
	const metaDescription = document.querySelector('meta[name="description"]');
	const ogTitle = document.querySelector('meta[property="og:title"]');
	const ogDescription = document.querySelector(
		'meta[property="og:description"]'
	);
	const twitterTitle = document.querySelector('meta[property="twitter:title"]');
	const twitterDescription = document.querySelector(
		'meta[property="twitter:description"]'
	);

	if (title && translations[lang]["page-title"]) {
		title.textContent = translations[lang]["page-title"];
	}

	if (metaDescription && translations[lang]["page-description"]) {
		metaDescription.content = translations[lang]["page-description"];
	}

	if (ogTitle && translations[lang]["page-title"]) {
		ogTitle.content = translations[lang]["page-title"];
	}

	if (ogDescription && translations[lang]["page-description"]) {
		ogDescription.content = translations[lang]["page-description"];
	}

	if (twitterTitle && translations[lang]["page-title"]) {
		twitterTitle.content = translations[lang]["page-title"];
	}

	if (twitterDescription && translations[lang]["page-description"]) {
		twitterDescription.content = translations[lang]["page-description"];
	}
}

// Theme Functions
function initializeThemeToggle() {
	const themeToggle = document.getElementById("theme-toggle");
	if (themeToggle) {
		themeToggle.addEventListener("click", toggleTheme);
	}
}

function initializeTheme() {
	// Get saved theme or default to light
	const savedTheme = localStorage.getItem("namu-voca-theme") || "light";
	setTheme(savedTheme);
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
	const newTheme = currentTheme === "light" ? "dark" : "light";
	setTheme(newTheme);
}

function setTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("namu-voca-theme", theme);
	
	// Update theme button icon
	const themeButton = document.getElementById("theme-toggle");
	if (themeButton) {
		const icon = themeButton.querySelector("svg");
		if (theme === "dark") {
			// Moon icon for dark mode
			icon.innerHTML = `
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			`;
		} else {
			// Sun icon for light mode
			icon.innerHTML = `
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			`;
		}
	}
}

// Scroll Effects
function initializeScrollEffects() {
	// Parallax effect for hero section
	const hero = document.querySelector(".hero");
	if (hero) {
		window.addEventListener("scroll", function () {
			const scrolled = window.pageYOffset;
			const rate = scrolled * -0.5;
			hero.style.transform = `translateY(${rate}px)`;
		});
	}

	// Reveal animations for sections
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animate-in");
			}
		});
	}, observerOptions);

	// Observe all sections
	const sections = document.querySelectorAll("section");
	sections.forEach((section) => {
		observer.observe(section);
	});
}

// Smooth Scrolling
function initializeSmoothScrolling() {
	const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

	smoothScrollLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetSection = document.querySelector(targetId);

			if (targetSection) {
				const headerOffset = 80;
				const elementPosition = targetSection.offsetTop;
				const offsetPosition = elementPosition - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		});
	});
}

// Back to Top Button
function initializeBackToTop() {
	const backToTopBtn = document.getElementById("backToTop");

	if (backToTopBtn) {
		window.addEventListener("scroll", function () {
			if (window.scrollY > 500) {
				backToTopBtn.classList.add("visible");
			} else {
				backToTopBtn.classList.remove("visible");
			}
		});

		backToTopBtn.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}
}

// Contact Form Functions
function initializeContactForm() {
	const contactForm = document.getElementById("contactForm");

	if (contactForm) {
		contactForm.addEventListener("submit", handleContactFormSubmit);

		// Add real-time validation
		const inputs = contactForm.querySelectorAll("input, textarea");
		inputs.forEach((input) => {
			input.addEventListener("blur", validateField);
			input.addEventListener("input", clearFieldError);
		});
	}
}

async function handleContactFormSubmit(e) {
	e.preventDefault();

	if (isFormSubmitting) return;

	const form = e.target;
	const formData = new FormData(form);
	const submitBtn = form.querySelector(".form-submit");
	const submitText = submitBtn.querySelector(".submit-text");
	const submitLoading = submitBtn.querySelector(".submit-loading");

	// Validate form
	if (!validateForm(form)) {
		return;
	}

	// Start loading state
	isFormSubmitting = true;
	submitBtn.disabled = true;
	submitText.style.display = "none";
	submitLoading.style.display = "inline";

	try {
		// Prepare email data
		const emailData = {
			to: "support@namu-voca.com",
			subject: `[나무보카 문의] ${formData.get("subject")}`,
			html: `
                <h2>나무보카 웹사이트 문의</h2>
                <p><strong>이름:</strong> ${formData.get("name")}</p>
                <p><strong>이메일:</strong> ${formData.get("email")}</p>
                <p><strong>제목:</strong> ${formData.get("subject")}</p>
                <p><strong>메시지:</strong></p>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    ${formData.get("message").replace(/\n/g, "<br>")}
                </div>
                <hr>
                <p style="color: #666; font-size: 12px;">
                    이 메시지는 나무보카 웹사이트(namu-voca.com)의 문의 양식을 통해 전송되었습니다.
                </p>
            `,
		};

		// Send email using EmailJS or your preferred email service
		// TODO: Replace with actual email service integration
		await sendEmail(emailData);

		// Show success message
		showFormSuccess();

		// Reset form
		form.reset();
	} catch (error) {
		console.error("Error sending email:", error);
		showFormError(
			"메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
		);
	} finally {
		// Reset loading state
		isFormSubmitting = false;
		submitBtn.disabled = false;
		submitText.style.display = "inline";
		submitLoading.style.display = "none";
	}
}

// TODO: Implement actual email sending service
async function sendEmail(emailData) {
	// Simulate API call
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// For demo purposes, always resolve successfully
			// In production, integrate with EmailJS, Formspree, or your backend API
			resolve();
		}, 2000);
	});
}

function validateForm(form) {
	let isValid = true;
	const inputs = form.querySelectorAll("input[required], textarea[required]");

	inputs.forEach((input) => {
		if (!validateField({ target: input })) {
			isValid = false;
		}
	});

	return isValid;
}

function validateField(e) {
	const field = e.target;
	const value = field.value.trim();
	let isValid = true;
	let errorMessage = "";

	// Clear previous errors
	clearFieldError({ target: field });

	// Required field validation
	if (field.hasAttribute("required") && !value) {
		errorMessage = "이 필드는 필수입니다.";
		isValid = false;
	}

	// Email validation
	if (field.type === "email" && value) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			errorMessage = "올바른 이메일 주소를 입력해주세요.";
			isValid = false;
		}
	}

	// Show error if invalid
	if (!isValid) {
		showFieldError(field, errorMessage);
	}

	return isValid;
}

function showFieldError(field, message) {
	field.classList.add("error");

	// Remove existing error message
	const existingError = field.parentNode.querySelector(".field-error");
	if (existingError) {
		existingError.remove();
	}

	// Add error message
	const errorElement = document.createElement("div");
	errorElement.className = "field-error";
	errorElement.textContent = message;
	errorElement.style.color = "var(--danger-color)";
	errorElement.style.fontSize = "0.875rem";
	errorElement.style.marginTop = "0.25rem";

	field.parentNode.appendChild(errorElement);
}

function clearFieldError(e) {
	const field = e.target;
	field.classList.remove("error");

	const errorElement = field.parentNode.querySelector(".field-error");
	if (errorElement) {
		errorElement.remove();
	}
}

function showFormSuccess() {
	const form = document.getElementById("contactForm");
	const successDiv = document.getElementById("formSuccess");

	if (form && successDiv) {
		form.style.display = "none";
		successDiv.style.display = "block";

		// Auto hide after 5 seconds
		setTimeout(() => {
			form.style.display = "flex";
			successDiv.style.display = "none";
		}, 5000);
	}
}

function showFormError(message) {
	// Create or update error message
	let errorDiv = document.querySelector(".form-error");

	if (!errorDiv) {
		errorDiv = document.createElement("div");
		errorDiv.className = "form-error";
		errorDiv.style.cssText = `
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger-color);
            padding: 1rem;
            border-radius: var(--radius-md);
            margin-top: 1rem;
            border: 1px solid rgba(239, 68, 68, 0.2);
        `;

		const form = document.getElementById("contactForm");
		form.appendChild(errorDiv);
	}

	errorDiv.textContent = message;

	// Auto hide after 5 seconds
	setTimeout(() => {
		if (errorDiv) {
			errorDiv.remove();
		}
	}, 5000);
}

// Utility Functions
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function throttle(func, limit) {
	let inThrottle;
	return function () {
		const args = arguments;
		const context = this;
		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

// Performance optimizations
const debouncedResize = debounce(() => {
	// Handle resize events
	if (typeof AOS !== "undefined") {
		AOS.refresh();
	}
}, 250);

const throttledScroll = throttle(() => {
	// Handle scroll events if needed
}, 16);

window.addEventListener("resize", debouncedResize);
window.addEventListener("scroll", throttledScroll);

// Preload critical images
function preloadImages() {
	const criticalImages = [
		"images/logo.png",
		"images/app-screenshot-main.png",
		"images/app-preview.png",
	];

	criticalImages.forEach((src) => {
		const img = new Image();
		img.src = src;
	});
}

// Call preload on page load
window.addEventListener("load", preloadImages);

// Add custom events for analytics (Google Analytics, etc.)
function trackEvent(eventName, eventData = {}) {
	// TODO: Integrate with Google Analytics or your preferred analytics service
	if (typeof gtag !== "undefined") {
		gtag("event", eventName, eventData);
	}

	console.log("Event tracked:", eventName, eventData);
}

// Track important user interactions
document.addEventListener("click", function (e) {
	const target = e.target.closest("a, button");
	if (!target) return;

	// Track download button clicks
	if (
		target.classList.contains("download-badge") ||
		target.textContent.includes("다운로드") ||
		target.textContent.includes("Download")
	) {
		trackEvent("download_click", {
			button_text: target.textContent.trim(),
			button_location: target.closest("section")?.id || "unknown",
		});
	}

	// Track navigation clicks
	if (target.classList.contains("nav-link")) {
		trackEvent("navigation_click", {
			link_text: target.textContent.trim(),
			destination: target.getAttribute("href"),
		});
	}

	// Track CTA button clicks
	if (
		target.classList.contains("btn-primary") ||
		target.classList.contains("btn-secondary")
	) {
		trackEvent("cta_click", {
			button_text: target.textContent.trim(),
			button_type: target.classList.contains("btn-primary")
				? "primary"
				: "secondary",
			section: target.closest("section")?.id || "unknown",
		});
	}
});

// Track form submissions
document.addEventListener("submit", function (e) {
	if (e.target.id === "contactForm") {
		trackEvent("contact_form_submit", {
			form_id: e.target.id,
		});
	}
});

// Track language changes
document.addEventListener("click", function (e) {
	if (e.target.classList.contains("lang-btn")) {
		trackEvent("language_change", {
			from_language: currentLang,
			to_language: e.target.dataset.lang,
		});
	}
});

// Error handling
window.addEventListener("error", function (e) {
	console.error("JavaScript error:", e.error);
	// TODO: Send error reports to your error tracking service
});

// Service Worker registration for PWA (if needed in the future)
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		// TODO: Uncomment when service worker is implemented
		// navigator.serviceWorker.register('/sw.js')
		//     .then(registration => console.log('SW registered'))
		//     .catch(registrationError => console.log('SW registration failed'));
	});
}
