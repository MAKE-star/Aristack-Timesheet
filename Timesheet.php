<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['Name'];
    $date = $_POST['Date'];
    $description = $_POST['Description'];
    $project = $_POST['Project'];
    $totalHours = $_POST['TotalHours'];
    $notes = $_POST['Notes'];

    // CSV file path
    $csvFilePath = 'staff_data.csv';

    $dataRow = "$name,$date,$description,$project,$totalHours,$notes" . PHP_EOL;

    $file = fopen($csvFilePath, 'a');
    if ($file) {
        fwrite($file, $dataRow);
        fclose($file);
        echo "Data saved successfully.";
    } else {
        echo "Error saving data.";
    }
}
?>
