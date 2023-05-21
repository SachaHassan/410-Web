$(document).ready(function () {

    $("#form").submit(function () {
        event.preventDefault();

        // Récupération des valeurs des champs
        let username = $("#username").val();
        let password = $("#password").val();

        // Vérification des valeurs des champs
        $.ajax({
            type: "POST",
            url: "form.php",
            data: {
                username: username,
                password: password
            },
            success: function (response) {
                // On parse la réponse pour la transformer en objet
                let result = JSON.parse(response);
                // On affiche le message
                showMessage(result.message, result.success);
            }
        });
    });
});

// Vérification des valeurs des champs
$("#username").keyup(function () {
    let usernameValue = $("#username").val();
    let usernameField = $("#username");

    if (usernameValue !== "") {
        usernameField.css("border", "2px solid green");
    } else {
        usernameField.css("border", "2px solid red");
    }

    if (usernameValue.length > 255) {
        usernameField.css("border", "2px solid red");
    }
});

// Vérification des valeurs des champs
$("#password").keyup(function () {
    let passwordValue = $("#password").val();
    let passwordField = $("#password");

    if (passwordValue !== "") {
        passwordField.css("border", "2px solid green");
    } else {
        passwordField.css("border", "2px solid red");
    }

    if (passwordValue.length > 255) {
        passwordField.css("border", "2px solid red");
    }
});


// Affichage du message
function showMessage(message, success) {
    let messageContainer = document.getElementById("message");
    if (messageContainer.children.length > 0) {
        messageContainer.removeChild(messageContainer.children[0]);
    }

    // Création du paragraphe
    let p = document.createElement("p");
    p.setAttribute("class", "success");
    p.innerHTML = message;
    p.style.color = success ? "green" : "red";
    messageContainer.appendChild(p);
}

//Bonus
$(document).ready(function () {
    $("#connexionBtn").click(function () {
        // Ouvrir la fenêtre modale
        openModal();
    });
});

function openModal() {
    $("#modal").fadeIn();
}