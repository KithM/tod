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

        // Only add additional details if the category is characters
        if (category === "characters") {
            // Age
            if (entryData.age) {
                const age = document.createElement("p");
                age.textContent = "Age: " + entryData.age;
                detailsSection.appendChild(age);
            }
            // Race
            if (entryData.race) {
                const race = document.createElement("p");
                race.textContent = "Race: " + entryData.race;
                detailsSection.appendChild(race);
            }
            // Gender
            if (entryData.gender) {
                const gender = document.createElement("p");
                gender.textContent = "Gender: " + entryData.gender;
                detailsSection.appendChild(gender);
            }
            // Personality Traits
            if (entryData.personalityTraits && entryData.personalityTraits.length > 0) {
                const personalityTitle = document.createElement("h3");
                personalityTitle.textContent = "Personality Traits";
                detailsSection.appendChild(personalityTitle);

                const ul = document.createElement("ul");
                entryData.personalityTraits.forEach(trait => {
                    const li = document.createElement("li");
                    li.textContent = trait;
                    ul.appendChild(li);
                });
                detailsSection.appendChild(ul);
            }
            // Alignment
            if (entryData.alignment) {
                const alignment = document.createElement("p");
                alignment.textContent = "Alignment: " + entryData.alignment;
                detailsSection.appendChild(alignment);
            }
        }

        // ... any other details you might want to add.
    } else {
        console.error("Invalid entry or category specified");
    }
});
