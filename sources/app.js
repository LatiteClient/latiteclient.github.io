const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

function isWindows() {
  if (
    navigator.userAgent.includes("Windows") === false &&
    navigator.userAgent.includes("x64") === false &&
    window.location.href.includes("?bypass-device-check") === false
  ) {
    window.location.href = "not-supported.html";
  }
}

window.onload = isWindows();
