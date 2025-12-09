document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');
    const maxSnowflakes = 50; // Límite de copos simultáneos para rendimiento

    function createSnowflake() {
        if (snowContainer.childElementCount > maxSnowflakes) return;

        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Aleatoriedad
        const size = Math.random() * 4 + 2; // 2px a 6px
        const startX = Math.random() * 100; // 0% a 100%
        const duration = Math.random() * 3 + 2; // 2s a 5s
        const delay = Math.random() * 2; // 0s a 2s

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}%`;
        snowflake.style.animation = `fall ${duration}s linear ${delay}s infinite`;
        
        // Variación en la caída (wobble)
        // Podríamos agregar keyframes dinámicos, pero usaremos el definido en CSS con variaciones simples
        
        snowContainer.appendChild(snowflake);

        // Eliminar copo después de la animación para evitar acumulación infinita si no fuera 'infinite'
        // Pero como es 'infinite', los dejamos reciclarse o los eliminamos y creamos nuevos para más aleatoriedad.
        // Mejor estrategia: animación finita y remover.
        
        snowflake.style.animation = `fall ${duration}s linear forwards`;
        
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    // Crear copos continuamente
    setInterval(createSnowflake, 100);
});
