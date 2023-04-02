class TodoLIst{

    constructor(){
        let strAggiungi = "";
        let nel = 0;
        let check = false;

        this.check = false;
        this.nel = 0;
        this.strAggiungi = "ggggg";

    }

    inserisci() {
        this.strAggiungi = document.getElementById("lblInserisci").value;
        if(this.nel == 0){
            document.getElementById("lbl1").value =  this.strAggiungi;
        }
        if(this.nel == 1){
            var table = document.getElementById("miaTabella");
            var row = table.rows[2];
            row.style.display = "table-row";

            document.getElementById("lbl2").value =  this.strAggiungi;
        }
        if(this.nel == 2){
            var table = document.getElementById("miaTabella");
            var row = table.rows[3];
            row.style.display = "table-row";
            document.getElementById("lbl3").value =  this.strAggiungi;
        }
        if(this.nel == 3){
            alert("numero massimo di elementi inseriti");
            this.nel--;
        }
        this.nel++;
    }


    ControlloCheck(numero) {
        if(numero == 1){
            this.check = document.getElementById("chk1");
            if (this.check.checked) {
                document.getElementById("lbl1").style.backgroundColor = "green";
            }
        }
        if(numero == 2){
            this.check = document.getElementById("chk2");
            if (this.check.checked) {
                document.getElementById("lbl2").style.backgroundColor = "green";
            }
        }
        if(numero == 3){
            this.check = document.getElementById("chk3");
            if (this.check.checked) {
                document.getElementById("lbl3").style.backgroundColor = "green";
            }
        }
    }

    cancella(numero){
        if(numero == 1){
            document.getElementById("lbl1").value = document.getElementById("lbl2").value;
            document.getElementById("lbl2").value = document.getElementById("lbl3").value;
            document.getElementById("lbl3").value = " ";
            var table = document.getElementById("miaTabella");
            table.rows[3].style.display = "none"; // nasconde la seconda riga
            this.nel--;
        }
        if(numero == 2){
            //document.getElementById("lbl1").value = document.getElementById("lbl2").value;
            document.getElementById("lbl2").value = document.getElementById("lbl3").value;
            document.getElementById("lbl3").value = " ";
            var table = document.getElementById("miaTabella");
            table.rows[3].style.display = "none"; // nasconde la seconda riga
            this.nel--;
        }
        if(numero == 3){
            //document.getElementById("lbl1").value = document.getElementById("lbl2").value;
            //document.getElementById("lbl2").value = document.getElementById("lbl3").value;
            document.getElementById("lbl3").value = " ";
            var table = document.getElementById("miaTabella");
            table.rows[3].style.display = "none"; // nasconde la seconda riga
            this.nel--;
        }
    }
    



}