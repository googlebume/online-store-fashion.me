export function mayLikeSlider(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".may-like__cards"),t=document.querySelector(".may-like__card").offsetWidth;document.querySelector(".may-like__arrow-left").addEventListener("click",(()=>{e.scrollBy({left:-(t+50),behavior:"smooth"})})),document.querySelector(".may-like__arrow-right").addEventListener("click",(()=>{e.scrollBy({left:t+50,behavior:"smooth"})}))}))}