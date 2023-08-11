function submitForm() {
    event.preventDefault();

    const form = document.getElementById("timesheetForm");

    const formData = new FormData(form);

    fetch("Timesheet.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data === "Data saved successfully.") {
            alert("Data saved successfully.");
            form.reset(); 
        } else {
            alert("Error saving data.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
