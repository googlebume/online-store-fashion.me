export function scrollToNode(){const o=document.querySelector(".to-shop"),e=document.querySelector("header"),t=document.querySelector(".goods"),c=document.querySelector(".space-block");o.addEventListener("click",(o=>{window.scrollTo({top:t.scrollHeight+c.scrollHeight+e.scrollHeight,behavior:"smooth"})}));document.querySelectorAll(".__goods-li").forEach((o=>{o.addEventListener("click",(o=>{window.scrollTo({top:e.scrollHeight,behavior:"smooth"})}))}));const r=document.querySelectorAll(".__about-us"),l=document.querySelector("footer"),n=document.querySelector("main");r.forEach((o=>{o.addEventListener("click",(o=>{window.scrollTo({top:e.scrollHeight+l.scrollHeight+n.scrollHeight,behavior:"smooth"})}))}))}export function goodsTypeAppearance(){const o=document.querySelectorAll(".goods__card"),e=window.innerHeight;window.addEventListener("scroll",(()=>{window.scrollY>=.2*e&&o.forEach((o=>{o.classList.add("goods__card-animate")}))}))}