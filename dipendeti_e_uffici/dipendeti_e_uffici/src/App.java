import java.io.FileWriter;
import java.io.IOException;
import java.text.ParseException;

public class App {

    public static void main(String[] args) throws ParseException {

        // Creazione di 10 dipendenti
        Dipendente dipendente1 = new Dipendente(1, "1990-01-15", "2021-03-10", 40, "Ufficio A", "Via Uno 1", "Alice", "Smith");
        Dipendente dipendente2 = new Dipendente(2, "1985-07-20", "2019-05-15", 35,"Ufficio A", "Via Uno 1", "Bob", "Johnson");
        Dipendente dipendente3 = new Dipendente(3, "1992-03-25", "2020-02-28", 38,"Ufficio A", "Via Uno 1", "Charlie", "Brown");
        Dipendente dipendente4 = new Dipendente(4, "1988-11-12", "2018-09-05", 42,"Ufficio B", "Via Due 2", "David", "Davis");
        Dipendente dipendente5 = new Dipendente(5, "1995-09-30", "2022-04-20", 37,"Ufficio B", "Via Due 2", "Eve", "Evans");
        Dipendente dipendente6 = new Dipendente(6, "1990-04-05", "2017-11-15", 39,"Ufficio B", "Via Due 2", "Frank", "Franklin");
        Dipendente dipendente7 = new Dipendente(7, "1987-08-18", "2016-06-10", 36,"Ufficio C", "Via Tre 3", "Grace", "Graham");
        Dipendente dipendente8 = new Dipendente(8, "1993-12-10", "2015-09-01", 41,"Ufficio C", "Via Tre 3", "Helen", "Hamilton");
        Dipendente dipendente9 = new Dipendente(9, "1986-06-08", "2014-08-25", 34,"Ufficio D", "Via Quattro 4", "Ivy", "Irwin");
        Dipendente dipendente10 = new Dipendente(10, "1994-02-14", "2023-01-10", 43,"Ufficio D", "Via Quattro 4", "Jack", "Jackson");

        // Creazione di 2 uffic
        Ufficio ufficioA = new Ufficio(1, "Piano 1", 10, "Alice", "Ufficio A", "UA");
        Ufficio ufficioB = new Ufficio(2, "Piano 2", 15, "Bob", "Ufficio B", "UB");

        // Assegnazione dei primi 5 dipendenti all'ufficio A
        ufficioA.aggiungiDipendente(dipendente1);
        ufficioA.aggiungiDipendente(dipendente2);
        ufficioA.aggiungiDipendente(dipendente3);
        ufficioA.aggiungiDipendente(dipendente4);
        ufficioA.aggiungiDipendente(dipendente5);

        // Assegnazione degli ultimi 5 dipendenti all'ufficio B
        ufficioB.aggiungiDipendente(dipendente6);
        ufficioB.aggiungiDipendente(dipendente7);
        ufficioB.aggiungiDipendente(dipendente8);
        ufficioB.aggiungiDipendente(dipendente9);
        ufficioB.aggiungiDipendente(dipendente10);

        scriviFile(ufficioA);
        scriviFile(ufficioB);
        
        // Stampa dei dipendenti in ciascun ufficio
        System.out.println("Dipendenti in Ufficio A:");
        for (Dipendente dipendente : ufficioA.getDipendenti()) {
            System.out.println(dipendente.getNome() + " " + dipendente.getCognome());
        }

        System.out.println("\nDipendenti in Ufficio B:");
        for (Dipendente dipendente : ufficioB.getDipendenti()) {
            System.out.println(dipendente.getNome() + " " + dipendente.getCognome());
        }

    }

    public static void scriviFile(Ufficio ufficio){
        String filePath = "uffici.txt";
        try (FileWriter fileWriter = new FileWriter(filePath, true)) {
                //UFFICIO
                fileWriter.write(ufficio.getNomeUfficio() + ";");
                fileWriter.write(ufficio.getIdUfficio() + ";");
                fileWriter.write(ufficio.getPiano() + ";");
                fileWriter.write(ufficio.getNumeroPostazioni() + ";");
                fileWriter.write(ufficio.getResponsabileUfficio() + ";");
                fileWriter.write(ufficio.getSiglaLocale() + ";");
    
                //DIPENDENTI:
                fileWriter.write("Dipendenti: ");
                for (int i = 0; i < ufficio.size(); i++) {
                        fileWriter.write(ufficio.getDipendente(i).getNome() + " " + ufficio.getDipendente(i).getCognome());  
                }

                // Scrivi una riga vuota alla fine (per chiudere correttamente il file)
                fileWriter.write("\n");
    
                System.out.println("Scrittura completata!");
            } catch (IOException e) {
                e.printStackTrace();
            }
    }
}
