function submitForm() {
    const form = document.getElementById("timesheetForm");

    const formData = new FormData(form);

    fetch("Timesheet.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Handle response from the server
        if (data === "Data saved successfully.") {
            alert("Data saved successfully.");
            form.reset(); // Reset the form after successful submission
        } else {
            alert("Error saving data.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
