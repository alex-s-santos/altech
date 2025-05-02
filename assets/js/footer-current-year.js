let getTime = new Date;
let footerCurrentYear = document.querySelector("#footer-current-year");
let currentYear = getTime.getFullYear();
footerCurrentYear.innerHTML = currentYear;