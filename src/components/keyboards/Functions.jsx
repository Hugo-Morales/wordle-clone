let Box = 0; // Letras
let Row = 1; // Fila

export default function Functions() {
    const handleKeyDown = (key) => {
        key = "" + key.toUpperCase();
        // Verificamos que todos las filas esten vacías
        if (Row < 7) {
            // Key Delete
            if (key.match("BACKSPACE")) {
                delclicked();
            }

            // Key Letras
            if (key.match(/^[A-Z]$/) !== null) {
                buttonPressKey(key);
            }
        }
    };

    // Cuando presiono una tecla se muestra
    const buttonPressKey = (e) => {
        if (Box < 5) {
            // Transformo las class en un array de texto
            const Class = Array.from(
                document.getElementsByClassName("line" + Row)
            );

            Class[Box].innerHTML = e;
            Box++;
        }
    };

    // Cuando clickeo el button
    const buttonclicked = (e) => {
        // Verifico si todas las columnas y filas estan vacías
        if (Box < 5 && Row < 7) {
            // Aplico el mismo método de class
            const Class = Array.from(
                document.getElementsByClassName("line" + Row)
            );

            Class[Box].innerHTML = e.target.value;
            Box++;
        }
    };

    // Cuando borro
    const delclicked = () => {
        if (Box > 0) {
            const Class = Array.from(
                document.getElementsByClassName("line" + Row)
            );
            Class[Box - 1].innerHTML = "";
            Box--;
        }
    };

    return { handleKeyDown, buttonclicked, delclicked };
}
