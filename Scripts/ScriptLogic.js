document.addEventListener("DOMContentLoaded", function() {
    function toggleVisibility(contentId) {
        var homeContent = document.getElementById("HomeContent");
        var portfolioContent = document.getElementById("PortfolioContent");
        
        if (contentId === "HomeContent") {
            homeContent.style.display = "block";
            portfolioContent.style.display = "none";
        } else if (contentId === "PortfolioContent") {
            homeContent.style.display = "none";
            portfolioContent.style.display = "block";
        }
    }

    function setActiveButton(buttonId) {
        var aboutMeBtn = document.getElementById("AboutMeBtn");
        var portfolioBtn = document.getElementById("PortfolioBtn");

        if (buttonId === "AboutMeBtn") 
        {
            aboutMeBtn.classList.add("text-blue-600", "border-blue-500");
            aboutMeBtn.classList.remove("text-gray-700", "border-gray-200");
            portfolioBtn.classList.remove("text-blue-600", "border-blue-500");
            portfolioBtn.classList.add("text-gray-700", "border-gray-200");
        } 
        else if (buttonId === "PortfolioBtn") 
        {
            portfolioBtn.classList.add("text-blue-600", "border-blue-500");
            portfolioBtn.classList.remove("text-gray-700", "border-gray-200");
            aboutMeBtn.classList.remove("text-blue-600", "border-blue-500");
            aboutMeBtn.classList.add("text-gray-700", "border-gray-200");
        }
    }
    
    var aboutMeBtn = document.getElementById("AboutMeBtn");
    var portfolioBtn = document.getElementById("PortfolioBtn");
    
    if (aboutMeBtn) 
    {
        aboutMeBtn.addEventListener("click", function() 
        {
            toggleVisibility("HomeContent");
            setActiveButton("AboutMeBtn");
        });
    }   
    
    if (portfolioBtn) 
    {
        portfolioBtn.addEventListener("click", function() 
        {
            toggleVisibility("PortfolioContent");
            setActiveButton("PortfolioBtn");
        });
    }
});

var projectLink = document.querySelector(".ProjectDiv");
if (projectLink) {
    projectLink.addEventListener("mouseover", function() {
        projectLink.style.transition = "transform 0.2s ease-in-out";
        projectLink.style.transform = "scale(1.05)";
    });

    projectLink.addEventListener("mouseout", function() {
        projectLink.style.transition = "transform 0.2s ease-in-out";
        projectLink.style.transform = "scale(1)";
    });
}

var eventManagerLink = document.querySelector(".EventManager");
if (eventManagerLink) {
    eventManagerLink.addEventListener("mouseover", function() {
        eventManagerLink.style.transition = "transform 0.2s ease-in-out";
        eventManagerLink.style.transform = "scale(1.05)";
    });

    eventManagerLink.addEventListener("mouseout", function() {
        eventManagerLink.style.transition = "transform 0.2s ease-in-out";
        eventManagerLink.style.transform = "scale(1)";
    });
}

var techStackLinks = document.querySelectorAll(".TechStack");
techStackLinks.forEach(function(techStackLink) {
    techStackLink.addEventListener("mouseover", function() {
        techStackLink.style.transition = "transform 0.2s ease-in-out";
        techStackLink.style.transform = "scale(1.05)";
    });

    techStackLink.addEventListener("mouseout", function() {
        techStackLink.style.transition = "transform 0.2s ease-in-out";
        techStackLink.style.transform = "scale(1)";
    });
});