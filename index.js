(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-menu-mobile-close]"),closeTableMenuBtn:document.querySelector("[data-menu-table-close]"),modal:document.querySelectorAll("[data-modal-menu]")};n.openModalBtn.addEventListener("click",o),n.closeMobileMenuBtn.addEventListener("click",o),n.closeTableMenuBtn.addEventListener("click",o);function o(){window.matchMedia("(max-width: 767px)").matches?n.modal[1].classList.toggle("is-open"):window.matchMedia("(min-width: 768px)").matches&&n.modal[0].classList.toggle("is-open")}})();
//# sourceMappingURL=index.js.map