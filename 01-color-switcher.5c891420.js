!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor="".concat(t)}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){n&&(clearInterval(n),t.disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.5c891420.js.map
