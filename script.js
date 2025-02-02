function createFloatingImage() {
    const imgElement = document.createElement("div");
    imgElement.classList.add("floating-image");

    // Asignar una imagen personalizada
    imgElement.style.backgroundImage = "url('Imagenes/cora.png')"; // Reemplaza con tu imagen

    // Posición aleatoria dentro del ancho de la pantalla
    imgElement.style.left = (Math.random() * 60 + 20) + "vw"; 

    // Tamaño aleatorio (entre 40px y 80px)
    let size = Math.random() * 40 + 40;
    imgElement.style.width = `${size}px`;
    imgElement.style.height = `${size}px`;

    // Velocidad uniforme
    imgElement.style.animationDuration = `4s`;

    document.body.appendChild(imgElement);

    // Eliminar imágenes cuando terminen de subir
    setTimeout(() => {
        imgElement.remove();
    }, 4000);
}

// Crear muchas imágenes flotantes en ráfaga
for (let i = 0; i < 50; i++) { 
    setTimeout(createFloatingImage, i * 100); 
}
