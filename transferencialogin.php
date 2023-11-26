<?php

require_once "conexao.php";
session_start();

$email = $_POST["m-email"];
$senha = $_POST["m-senha"];

$_SESSION["email"] = $email;

$checar =  $conn->prepare("SELECT * FROM registro WHERE email = :email AND senha = :senha");
$checar->bindParam(':email', $email);
$checar->bindParam(':senha', $senha);
$checar->execute();
$row_count = $checar->fetchColumn();

if($row_count > 0){
    echo "<script>window.open('loja.php', '_self');</script>";
}
else{
    echo "<script>alert('Login ou senha está errado!');</script>";
    echo "<script>window.open('index.php', '_self');</script>";
}

?>
