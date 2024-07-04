<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $wallet_address = $_POST['wallet_address'];
    $nft_task = $_POST['nft_task'];
    
    // Process the data (e.g., save to a database or send an email notification)
    // Example: Save to a database
    // $servername = "localhost";
    // $username = "username";
    // $password = "password";
    // $dbname = "your_database";

    // Create connection
    // $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    // if ($conn->connect_error) {
    //     die("Connection failed: " . $conn->connect_error);
    // }

    // // Insert data into database
    // $sql = "INSERT INTO nft_claim_requests (name, email, wallet_address, nft_task)
    //         VALUES ('$name', '$email', '$wallet_address', '$nft_task')";

    // if ($conn->query($sql) === TRUE) {
    //     echo "NFT claim request submitted successfully.";
    // } else {
    //     echo "Error: " . $sql . "<br>" . $conn->error;
    // }

    // $conn->close();

    // Example: Send an email notification
    $to = "admin@example.com"; // Replace with your email address
    $subject = "NFT Claim Request";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Wallet Address: $wallet_address\n";
    $message .= "NFT Task: $nft_task\n";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, $name! Your NFT claim request has been submitted.";
    } else {
        echo "Oops! Something went wrong and we couldn't process your request.";
    }
} else {
    echo "Access denied.";
}
?>
