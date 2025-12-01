import { throttle } from "./libs/utils";
import "./polyfills.js";
import "./blocks.js";
import { driveTabs } from "./libs/driveTabs";
import Swiper from "swiper";
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

	const headerList = header.querySelector('.header__list');
	const headerMenu = header.querySelector('.header__menu');
	const headerMainContainer = header.querySelector('.header__main-container');
	const headerBurger = header.querySelector('.header__burger');

	document.querySelectorAll(".header__list-item_sub-menu").forEach(item => {
		const btn = item.querySelector(".header__list-open");

		btn.addEventListener('click', () => {
			item.classList.toggle('is-open');
		});
	});

	if (window.matchMedia('(max-width: 960px)').matches) {
		headerMenu.appendChild(headerList);
	} else {
		headerMainContainer.appendChild(headerList);
		header.classList.remove('is-open');
	}

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
	const swiper = new Swiper('.gallery__swiper', {
		slidesPerView: 1.3,
		spaceBetween: 10,
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2.3
			},
			768: {
				slidesPerView: 3.3
			},
			992: {
				slidesPerView: 4.3
			},
			1200: {
				slidesPerView: 5.3
			}
		}
	})
}

const setGallery = () => {
	Fancybox.bind('[data-fancybox="gallery"]', {});
}

// Запуск функций
updateVH();
setScrollbarWidth();
setServicesTabs();
setAnswers();
setSwipers();
setGallery();
setHeader();
window.addEventListener('resize', throttle(setHeader, 200), { passive: true });