<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Validate and process data (for demonstration, just echoing here)
    echo "<h2>Claim Successful</h2>";
    echo "<p>Thank you, $name! Your NFT claim request has been received.</p>";
    echo "<p>An email has been sent to $email with further instructions.</p>";
    echo "<p>Stay tuned for more updates!</p>";
} else {
    // Redirect to claim form if accessed directly without POST request
    header("Location: claim_nft.html");
    exit();
}
?>
