<?php
require_once "conexao.php"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["m-email"];
    $reclamacao = $_POST["m-reclamacao"];

    try {
        $stmt = $conn->prepare("INSERT INTO reclamacoes (email, reclamacao) VALUES (:email, :reclamacao)");
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":reclamacao", $reclamacao);
        $stmt->execute();
        
        
        header("Location: index.php"); 
    } catch (PDOException $e) {
        
        echo "Erro: " . $e->getMessage();
    }
}
?>
