document.addEventListener("DOMContentLoaded", function () {
    const homePage = document.getElementById("home-section");
    const aboutPage = document.getElementById("about-section");
    const portfolioPage = document.getElementById("portfolio-section");
    const contactPage = document.getElementById("contact-section");

    const homeLink = document.getElementById("home");
    const aboutLink = document.getElementById("about");
    const portfolioLink = document.getElementById("portfolio");
    const contactLink = document.getElementById("contact");

    function hideAllPages() {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        portfolioPage.style.display = "none";
        contactPage.style.display = "none";
    }

    function showPage(page) {
        hideAllPages();
        page.style.display = "block";
    }

    function handleMenuClick(event) {
        event.preventDefault();
        const clickedLinkId = event.target.id;
        switch (clickedLinkId) {
            case "home":
                showPage(homePage);
                break;
            case "about":
                showPage(aboutPage);
                break;
            case "portfolio":
                showPage(portfolioPage);
                break;
            case "contact":
                showPage(contactPage);
                break;
            default:
                showPage(homePage);
        }
    }

    homeLink.addEventListener("click", handleMenuClick);
    aboutLink.addEventListener("click", handleMenuClick);
    portfolioLink.addEventListener("click", handleMenuClick);
    contactLink.addEventListener("click", handleMenuClick);

    // Show home page by default
    showPage(homePage);
});
