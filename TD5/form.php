<?php

if (empty($_POST) || empty($_POST['username']) || empty($_POST['password'])) {
    $result = [
        'success' => false,
        'message' => 'Merci de remplir tous les champs.'
    ];

    // On arrête le script et on renvoie le résultat
    die(json_encode($result));
}

$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);
$result = [];

// Vérification du nom d'utilisateur et du mot de passe
if ($username !== 'IUT' || $password !== 'NICE') {
    $result = [
        'success' => false,
        'message' => 'Nom d\'utilisateur ou mot de passe incorrect.'
    ];

    // On arrête le script et on renvoie le résultat
    die(json_encode($result));
}

$result = [
    'success' => true,
    'message' => 'Connexion réussie !'
];

die(json_encode($result));
