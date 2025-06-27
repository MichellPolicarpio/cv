<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener los datos del formulario
$nombre = trim($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo json_encode([
        'success' => false, 
        'message' => 'Por favor, completa todos los campos requeridos.'
    ]);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false, 
        'message' => 'Por favor, ingresa un email válido.'
    ]);
    exit;
}

// Validar longitud de los campos
if (strlen($nombre) > 100) {
    echo json_encode([
        'success' => false, 
        'message' => 'El nombre es demasiado largo (máximo 100 caracteres).'
    ]);
    exit;
}

if (strlen($email) > 255) {
    echo json_encode([
        'success' => false, 
        'message' => 'El email es demasiado largo.'
    ]);
    exit;
}

if (strlen($mensaje) > 1000) {
    echo json_encode([
        'success' => false, 
        'message' => 'El mensaje es demasiado largo (máximo 1000 caracteres).'
    ]);
    exit;
}

// Sanitizar datos
$nombre = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

// Configurar el email
$para = 'michellpolicarpio@gmail.com';
$asunto = 'Nuevo mensaje desde tu portfolio - ' . $nombre;
$fecha = date('Y-m-d H:i:s');

// Crear el contenido del email
$contenido = "
Nuevo mensaje recibido desde tu portfolio:

Fecha: $fecha
Nombre: $nombre
Email: $email

Mensaje:
$mensaje

---
Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
";

// Headers del email
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// Intentar enviar el email
$emailEnviado = mail($para, $asunto, $contenido, $headers);

if ($emailEnviado) {
    // Opcional: Guardar en un archivo de log
    $logEntry = date('Y-m-d H:i:s') . " - Mensaje de $nombre ($email): " . substr($mensaje, 0, 50) . "...\n";
    file_put_contents('contact_log.txt', $logEntry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true, 
        'message' => '¡Mensaje enviado exitosamente! Te responderé pronto.'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente por email.'
    ]);
}
?> 