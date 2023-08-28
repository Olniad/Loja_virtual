<?php
require_once "conexao.php"; // Certifique-se de que a conexão com o banco esteja correta

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["m-email"];
    $reclamacao = $_POST["m-reclamacao"];

    try {
        $stmt = $conn->prepare("INSERT INTO reclamacoes (email, reclamacao) VALUES (:email, :reclamacao)");
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":reclamacao", $reclamacao);
        $stmt->execute();
        
        // Redirecionar de volta para a página anterior ou fazer qualquer outra ação após a inserção
        header("Location: index.php"); // Substitua "index.php" pela página que você deseja redirecionar
        exit();
    } catch (PDOException $e) {
        // Lidar com erros, se necessário
        echo "Erro: " . $e->getMessage();
    }
}
?>
