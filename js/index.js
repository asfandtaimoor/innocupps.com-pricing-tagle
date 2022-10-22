const allPackages = [
  "basicPackageRadio",
  "popularPackageRadio",
  "premiumPackageRadio",
];

for (const package of allPackages) {
  const radioButtons = document.querySelectorAll(`input[name=${package}]`);

  for (const radioButton of radioButtons) {
    radioButton.addEventListener("click", function () {
      console.log(radioButton.value);
      console.log(package);

      let tsPackageContainer = document.querySelector(
        `[data-ts-package="${package}"]`
      );
      //   remove ( subscription and sigle class ) classes
      tsPackageContainer.classList.remove("subscription", "single");
      //   add active class classes
      tsPackageContainer.classList.add(radioButton.value);
    });
  }
}
