document.addEventListener("DOMContentLoaded", () => {

    prt = document.getElementById("prt");

    text = document.getElementById("text");

    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");

    btn1.onclick = () => {
        if(text.style.fontWeight == "bold"){
            text.style.fontWeight = "normal";
        } else {
            text.style.fontWeight = "bold";
        }
    }

    btn2.onclick = () => {
        if(text.style.fontStyle == "italic"){
            text.style.fontStyle = "normal";
        } else {
            text.style.fontStyle = "italic";
        }
    }

    btn3.onclick = () => {
        if(text.style.textDecoration == "underline"){
            text.style.textDecoration = "none";
        } else {
            text.style.textDecoration = "underline";
        }
    }

    btn4.onclick = () => {
        text.style.textAlign = "left";
    }

    btn5.onclick = () => {
        text.style.textAlign = "center";
    }

    btn6.onclick = () => {
        text.style.textAlign = "right";
    }

    setInterval(()=>{
        text.style.fontSize = document.getElementById("font").value + "px";
    },1);

    setInterval(()=>{
        text.style.color = document.getElementById("color").value;
    },1);

    // prt.onclick = () => {
    //     function printing() {
    //         var divContents = document.getElementById("text");
    //         var a = window.open('', '', 'height=500, width=500');
    //         a.document.write('<html>');
    //         a.document.write('<body >');
    //         a.document.append(divContents);
    //         a.document.write('</body></html>');
    //         a.document.close();
    //         a.print();
    //     }
    //     // printing.print();
    //     printing();
    // }

});