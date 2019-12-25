'use strict'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faKeyboard, faPen } from '@fortawesome/free-solid-svg-icons'

import ue from 'ue-scroll-js'

library.add(faGithub, faTwitter, faHome, faKeyboard, faPen)
dom.i2svg();

ue.init()

const yearBox = document.querySelector('.js-copyright > .js-year')
const sinceYear = Number(yearBox!.innerHTML)
const thisYear  = new Date().getFullYear()
if (sinceYear < thisYear) yearBox!.insertAdjacentHTML('beforeend', `-${thisYear}`)
