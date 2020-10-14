import "%modules%/header/header";
import "%modules%/main/main";

let header = document.querySelector('.pageHeader');
let orderForm = document.querySelector('.orderForm');
let title = document.querySelector('.orderForm__title');
let text = document.querySelector('.orderForm__text');

header.classList.add('pageHeader__whiteBg');
orderForm.classList.add('p-0');
orderForm.classList.add('orderForm__contactWrapper');
title.remove();
text.remove();