function makeBigger() {

    document.getElementById("elementID").style.fontSize = "2em"; //24pt
}

function changeStyle() {
    const textArea = document.getElementById("elementID");
    const fancyRadio = document.getElementById("fancyButton");
    
    if (fancyRadio.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
    }
}

function sayMoo() {
    const textArea = document.getElementById("elementID");
    let text = textArea.value;

    text = text.toUpperCase();

    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(". ");

    textArea.value = text;
}