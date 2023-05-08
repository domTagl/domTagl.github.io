class TodoLIst{

    constructor(){
        const vett = [];
        let strAggiungi = "";
        let nel = 0;
        let check = false;
        let date = "";

        this.vett = vett; // assegna vett alla proprietà vett dell'oggetto
        this.date = " ";
        this.check = false;
        this.nel = 0;
        this.strAggiungi = "ggggg";

    }

    inserisci() {
        this.strAggiungi = document.getElementById("lblInserisci").value;

        let dataInserita = document.getElementById("date").value;
        let d = new Date(dataInserita);
        this.date  = d.toDateString();
        this.strAggiungi += " - " + this.date;

        var table = document.getElementById("miaTabella");
        var row = table.rows[(this.nel + 1)];
        row.style.display = "table-row";
        document.getElementById("lbl" + (this.nel + 1)).value =  this.strAggiungi;
        this.vett.push(this.strAggiungi);

        this.nel++;
    }

    ControlloCheck(numero) {
        this.check = document.getElementById("chk" + numero);
        if (this.check.checked) {
            document.getElementById("lbl" + numero).style.backgroundColor = "green";
        }
        else{
            document.getElementById("lbl" + numero).style.backgroundColor = "red";
        }
    }

    cancella(numero){
        this.vett.splice(numero - 1, 1);
        var table = document.getElementById("miaTabella");
        table.rows[this.vett.length].style.display = "none"; // nasconde l'ultima riga

        let i = 0;
        this.i = 1;
        let j = 0;
        this.j = 0;

        let nel2 = 0;
        this.nel2 = this.vett.length;

        let o = 0;
        this.o = 0;

        for(this.o ; this.o < this.nel2 ; this.o++ ){
            document.getElementById("lbl" + this.i).value = this.vett[this.j];
            this.i++;
            this.j++;
        };
        this.nel--;
    }
    

    riordinaDate(){
        this.vett.sort();

        let i = 0;
        this.i = 1;
        let j = 0;
        this.j = 0;

        let nel2 = 0;
        this.nel2 = this.vett.length;

        let o = 0;
        this.o = 0;

        for(this.o ; this.o < this.nel2 ; this.o++ ){
            document.getElementById("lbl" + this.i).value = this.vett[this.j];
            this.i++;
            this.j++;
        };
    }

    modifica(){
        let numero = 0;
        this.numero = 0;
        this.numero = document.getElementById("modificaNumero").value;

        const d2 = new Date();
        this.d2 = document.getElementById("modificaDate").date;
        let data_ = " ";
        this.data_ = this.d2.toDateString();


        if(this.numero - 1 > this.nel){
            alert("errore numero");
        }
        else{
            let testo = "";
            this.testo = "";
            this.testo = document.getElementById("modificaTesto").value;
            this.testo += " - " + this.data_;

            this.vett[this.numero - 1] = this.testo;

            let i = 0;
            this.i = 1;
            let j = 0;
            this.j = 0;
    
            let nel2 = 0;
            this.nel2 = this.vett.length;
    
            let o = 0;
            this.o = 0;
    
            for(this.o ; this.o < this.nel2 ; this.o++ ){
                document.getElementById("lbl" + this.i).value = this.vett[this.j];
                this.i++;
                this.j++;
            };
        }
    }



}