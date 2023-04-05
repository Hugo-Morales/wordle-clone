import toast from "react-hot-toast";
import { encriptarPalabra, desencriptarPalabra } from "../../constants/utils";
import diccio from "../../constants/total_words.json";
import words from "../../constants/words.json";

let Box = 0; // Letras
let Row = 1; // Fila

export default function Functions() {
    const guessword = encriptarPalabra(
        words[Math.floor(Math.random() * words.length)].toUpperCase()
    );
    const desguessword = desencriptarPalabra(guessword);

    const handleKeyDown = (key) => {
        console.log(desencriptarPalabra(guessword));
        key = "" + key.toUpperCase();
        // Verificamos que todos las filas esten vacías
        if (Row < 7) {
            // Key Enter
            if (key.match("ENTER")) {
                submitclicked();
                return;
            }

            // Key Delete
            if (key.match("BACKSPACE")) {
                delclicked();
                return;
            }

            // Key Letras
            if (key.match(/^[A-Z]$/) !== null) {
                buttonPressKey(key);
                return;
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

    // Cuando Presiono Enter
    const submitclicked = () => {
        let word = getTypedWord();
        const Class = Array.from(document.getElementsByClassName("line" + Row));

        // Palabra incompleta
        if (Box < 5) {
            if (Row > 6) return;

            toast.error("No hay suficientes letras.", {
                duration: 2500,
                position: "top-center",
            });
        }

        // La palabra no esta en el diccionario
        if (!diccio.includes(word.toLowerCase())) {
            toast.error("La palabra no está en el diccionario", {
                duration: 2500,
                position: "top-center",
            });
        }

        // Ganaste
        if (word === desguessword) {
            toast.success("🦄 ¡¡Felicitaciones, acertaste!!", {
                position: "top-center",
                autoClose: 1500,
            });
        }

        let tempGuess = desguessword;
        let temptype = word;

        for (let i = 0; i < 5; i++) {
            // console.log(word.charAt(i) === desguessword.charAt(i));
            if (word.charAt(i) === desguessword.charAt(i)) {
                console.log(Class[i]);
                Class[i].setAttribute(
                    "style",
                    "background-color: #6aaa64 !important"
                );
                tempGuess = tempGuess.split("");
                tempGuess[i] = " ";
                tempGuess = tempGuess.join("");
                temptype = temptype.split("");
                temptype[i] = " ";
                temptype = temptype.join("");
            }
        }

        for (let i = 0; i < 5; i++) {
            if (temptype.charAt(i) !== " ") {
                if (tempGuess.indexOf(word.charAt(i)) > -1) {
                    let indx = tempGuess.indexOf(word.charAt(i));
                    Class[i].setAttribute(
                        "style",
                        "background-color: #ecc40f !important"
                    );
                    tempGuess = tempGuess.split("");
                    tempGuess[indx] = " ";
                    tempGuess = tempGuess.join("");
                    temptype = temptype.split("");
                    temptype[i] = " ";
                    temptype = temptype.join("");
                } else {
                    temptype = temptype.split("");
                    temptype[i] = "-";
                    temptype = temptype.join("");
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            if (temptype.charAt(i) === "-")
                Class[i].setAttribute(
                    "style",
                    "background-color: #787c7e !important"
                );
        }

        Box = 0;
        Row = Row + 1;

        // Perdiste la ronda
        if (Row == 7) {
            toast.error("Perdiste.", {
                duration: 2500,
                position: "top-center",
            });
        }
    };

    // Obtengo cada letra formando una "palabra"
    const getTypedWord = () => {
        let typeWord = "";

        // Obtengo una letra de una fila
        const allWithClass = Array.from(
            document.getElementsByClassName("line" + Row)
        );

        // Obtengo todas las letras necesarias
        for (let i = 0; i < Box; i++) {
            // Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
            typeWord += allWithClass[i].innerHTML;
        }

        return typeWord;
    };

    return { handleKeyDown, buttonclicked, delclicked, submitclicked };
}
