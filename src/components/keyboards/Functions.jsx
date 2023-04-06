import toast from "react-hot-toast";
import { encriptarPalabra, desencriptarPalabra } from "../../constants/utils";
import diccio from "../../constants/total_words.json";
import words from "../../constants/words.json";

let Box = 0; // Letras
let Row = 1; // Fila

export default function Functions() {
    let guessword = "LETRA"; // Temp
    let game = {
        list: ["", "", "", "", "", ""],
    };
    let stats = {
        Total: 0,
        Ganados: 0,
        Perdidos: 0,
        Racha: 0,
        MaxRacha: 0,
        Intentos: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
        },
    };

    // Guardar Dia y guessword del día
    const newGame = () => {
        const date = localStorage.getItem("date");
        let today = new Date().toLocaleDateString();

        if (date === today) {
            // Obtengo la palabra para evitar eligir uno nuevo
            guessword = localStorage.getItem("guessword");
            stats = JSON.parse(localStorage.getItem("stats"));
            game = JSON.parse(localStorage.getItem("gameWords"));
        } else {
            // Guardo el día
            localStorage.setItem("date", today);
            localStorage.setItem("stats", JSON.stringify(stats));
            const random = Math.floor(Math.random() * words.length);
            guessword = encriptarPalabra(words[random].toUpperCase());
            localStorage.setItem("guessword", guessword);
        }

        setTimeinModal();
    };

    const handleKeyDown = (key) => {
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
        let desguessword = desencriptarPalabra(guessword);
        console.log(desguessword);
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
            return;
        }

        // Ganaste
        if (word === desguessword) {
            stats.Ganados = stats.Ganados + 1;
            stats.Racha = stats.Racha + 1;
            stats.Total = stats.Total + 1;
            stats.Intentos[Row] = stats.Intentos[Row] + 1;

            if (stats.Racha > stats.MaxRacha) stats.MaxRacha = stats.Racha;

            localStorage.setItem("stats", JSON.stringify(stats));

            toast.success("🦄 ¡¡Felicitaciones, acertaste!!", {
                position: "top-center",
                autoClose: 1500,
            });
        }

        let tempGuess = desguessword;
        let temptype = word;
        game.list[Row - 1] = temptype;
        localStorage.setItem("gameWords", JSON.stringify(game));
        console.log(game.list);

        for (let i = 0; i < 5; i++) {
            if (word.charAt(i) === desguessword.charAt(i)) {
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
            // stats.Perdidos = stats.Perdidos + 1;
            // stats.Total = stats.Total + 1;
            // stats.Racha = 0;
            // localStorage.setItem("stats", JSON.stringify(stats));
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

    function setTimeinModal() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0);
        var countDownDate = tomorrow.getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const span = document.getElementById("nextGame");

            if (span) span.innerHTML = hours + ":" + minutes + ":" + seconds;

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("nextGame").innerHTML = "00:00:00";
            }
        }, 1000);
    }

    return {
        handleKeyDown,
        buttonclicked,
        delclicked,
        submitclicked,
        newGame,
        setTimeinModal,
    };
}
