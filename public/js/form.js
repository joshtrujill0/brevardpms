const homepageContactForm = document.querySelector(".submit");

if (homepageContactForm) {
  homepageContactForm.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    submitContactFormData(firstName, lastName, email, message);
  });
}

const submitContactFormData = async (firstName, lastName, email, message) => {
  try {
    const data = {
      firstName,
      lastName,
      email,
      message,
    };
    const res = await axios.post("/api/v1/contact/submit", data);
    console.log(res.data.status);

    if (res.data.status === "success") {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  } catch (err) {
    console.log(err);
  }
};
