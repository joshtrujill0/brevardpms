const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

window.addEventListener("click", (e) => {
  const pageElement = e.target;
  if (pageElement.tagName == "A") {
    const value = pageElement.href;
    console.log(value);
  }
  if (pageElement.tagName == "INPUT") {
    const value = pageElement.type;
    console.log(value);
  }
});
