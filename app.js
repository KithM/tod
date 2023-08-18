document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const entry = params.get("entry");
    const category = params.get("category"); // You should also pass category (like "characters") in your links.

    if (campaignData[category] && campaignData[category][entry]) {
        const entryData = campaignData[category][entry];
        const detailsSection = document.getElementById("entry-details");
        
        // Title
        const title = document.createElement("h2");
        title.textContent = entryData.name;
        detailsSection.appendChild(title);

        // Description
        const description = document.createElement("p");
        description.textContent = entryData.description;
        detailsSection.appendChild(description);

        // ... any other details you might want to add.
    } else {
        console.error("Invalid entry or category specified");
    }
});
