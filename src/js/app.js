'use strict';

import ue from 'ue-scroll-js';

ue.init();

const yearBox = document.querySelector('.js-copyright > .js-year');
const sinceYear = Number(yearBox.innerHTML);
const thisYear  = new Date().getFullYear();
if (sinceYear < thisYear) yearBox.insertAdjacentHTML('beforeend', `-${thisYear}`);
