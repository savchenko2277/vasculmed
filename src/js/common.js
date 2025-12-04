import { throttle } from "./libs/utils";
import "./polyfills.js";
import "./blocks.js";
import { driveTabs } from "./libs/driveTabs";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
	const { height = window.innerHeight, width = window.innerWidth } = window.visualViewport || {};

	document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
	['resize', 'orientationchange'].forEach(event => {
		window.addEventListener(event, throttle(updateVH, 200), { passive: true });
	});
}

// Ширина скроллбара
const setScrollbarWidth = () => {
	document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);
}

const setHeader = () => {
	const header = document.querySelector('.header');
	if (!header) return;

	const headerBurger = header.querySelector('.header__burger');

	document.querySelectorAll(".header__list-item_sub-menu").forEach(item => {
		const btn = item.querySelector(".header__list-open");

		btn.addEventListener('click', () => {
			item.classList.toggle('is-open');
		});
	});

	window.addEventListener('scroll', {
		passive: true,
		handleEvent() {
			if (window.scrollY > headerHeight) {
				header.classList.add('is-scroll');
			} else {
				header.classList.remove('is-scroll');
			}
		}
	});

	const headerHeight = header.offsetHeight;

	document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

	headerBurger.addEventListener('click', () => {
		header.classList.toggle('is-open');

		if (header.classList.contains('is-open')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
}

const setServicesTabs = () => {
	const services = document.querySelector('.services');
	const tabsContainer = services.querySelector('.services__tabs-container');
	if (!services || !tabsContainer) return;

	const tabs = driveTabs({
		container: '.services__tabs-container',
		controls: '.services__tabs-btn',
		selects: '.services__tab',
		cls: 'active'
	});
}

const setAnswers = () => {
	const answers = document.querySelector('.answers');
	if (!answers) return;

	const items = answers.querySelectorAll('.answers__item');

	items.forEach(item => {
		const title = item.querySelector('.answers__item-title');

		title.addEventListener('click', () => {
			items.forEach(item => item.classList.remove('active'));
			item.classList.toggle('active');
		});
	});
}

const setSwipers = () => {
	const articlesSwiper = new Swiper('.articles__items', {
		slidesPerView: 1.05,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
	})
	const promoSecondSwiper = new Swiper('.promo-second__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 30
			}
		}
	})
	const promotionsSwiper = new Swiper('.promotions__swiper', {
		modules: [Autoplay],
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 5000
		}
	})
	const doctorsSwiper = new Swiper('.doctors__swiper', {
		slidesPerView: 1.05,
		spaceBetween: 20,
		loop: true,
		breakpoints: {

		}
	})
	const swiper = new Swiper('.gallery__swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			768: {
				slidesPerView: 2.5,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 35
			},
			1200: {
				slidesPerView: 3.5,
				spaceBetween: 45
			}
		}
	})
}

const setGallery = () => {
	Fancybox.bind('[data-fancybox="gallery"]', {});
}

const setAboutMore = () => {
	const about = document.querySelector('.about');
	if (!about) return;

	const paragraphs = about.querySelectorAll('.about__desc p');
	const btn = about.querySelector('.about__more');
	if (!btn || !paragraphs.length) return;

	if (!btn._toggleParagraphs) {
		btn._toggleParagraphs = () => {
			paragraphs.forEach((p) => p.classList.toggle('active'));
			btn.classList.toggle('active');
		};
	}

	const handler = btn._toggleParagraphs;

	btn.removeEventListener('click', handler);

	if (window.matchMedia('(max-width: 768px)').matches) {
		btn.addEventListener('click', handler);
	} else {
		paragraphs.forEach((p) => p.classList.remove('active'));
		btn.classList.remove('active');
	}
};



// Запуск функций
updateVH();
setScrollbarWidth();
setServicesTabs();
setAnswers();
setSwipers();
setGallery();
setHeader();
setAboutMore();

window.addEventListener('resize', throttle(setAboutMore, 200), { passive: true });