<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "octivawilliamjr28@gmail.com"; // your email
    $subject = "New Message from Website";
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "<p>✅ Message sent successfully!</p>";
    } else {
        echo "<p>❌ Failed to send message.</p>";
    }
}
?>
