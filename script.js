
document.querySelectorAll('input[type="radio"][name="unit"]').forEach(input => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("active"));
    this.closest(".card").classList.add("active");

    let total = "$10.00 USD";
    if (this.value === "2") total = "$18.00 USD";
    if (this.value === "3") total = "$24.00 USD";
    document.querySelector(".total").innerText = "Total : " + total;
  });
});
