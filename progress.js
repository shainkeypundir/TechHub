document.addEventListener("DOMContentLoaded", function(){
    const subtopicCheckboxes = document.querySelectorAll(".subtopic-checkbox");
    const globalProgressFill = document.getElementById("global-progress-fill");
    const globalProgressPercentage = document.getElementById("global-progress-percentage");
    const globalCompletedTopics = document.getElementById("global-completed-topics");
    const globalTotalTopics = document.getElementById("global-total-topics");

    function updateProgress() {
        let totalSubtopics = 0;
        let completedSubtopics = 0;
        
        // Update each topic progress
        document.querySelectorAll(".topic").forEach(topic => {
            const checkboxes = topic.querySelectorAll(".subtopic-checkbox");
            const topicProgressFill = topic.querySelector(".topic-progress-fill");
            const topicProgressPercentage = topic.querySelector(".topic-progress-percentage");
            const completedSubtopicsElement = topic.querySelector(".completed-subtopics");
            const totalSubtopicsElement = topic.querySelector(".total-subtopics");

            const topicTotal = checkboxes.length;
            const topicCompleted = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
            
            // Update topic progress bar width and text
            const topicProgress = (topicCompleted / topicTotal) * 100;
            topicProgressFill.style.width = topicProgress + "%";
            topicProgressPercentage.textContent = Math.round(topicProgress) + "%";
            completedSubtopicsElement.textContent = topicCompleted;
            totalSubtopicsElement.textContent = topicTotal;

            // Accumulate total and completed subtopics for global progress
            totalSubtopics += topicTotal;
            completedSubtopics += topicCompleted;
        });

        // Calculate and update global progress
        const globalProgress = (completedSubtopics / totalSubtopics) * 100;
        globalProgressFill.style.width = globalProgress + "%";
        globalProgressPercentage.textContent = Math.round(globalProgress) + "%";
        globalCompletedTopics.textContent = completedSubtopics;
        globalTotalTopics.textContent = totalSubtopics;
    }

    // Add event listeners to all checkboxes
    subtopicCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });

    // Initialize the progress bars
    updateProgress();
});
