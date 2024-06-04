package Javacondicionais;

public class DiaSemana {

	public static void main(String[] args) {

		int numero_dia = 8;
		String nome_dia;

		switch (numero_dia) {
		case 1:
			nome_dia = "Domingo";
			break;

		case 2:
			nome_dia = "Segunda-Feira";
			break;

		case 3:
			nome_dia = "Terça-Feira";
			break;

		case 4:
			nome_dia = "Quarta-Feira";
			break;

		case 5:
			nome_dia = "Quinta-Feira";
			break;

		case 6:
			nome_dia = "Sexta-Feira";
			break;

		case 7:
			nome_dia = "Sabado";
			break;

		default:
			nome_dia = "Nome invalido";
		}
		
		System.out.println(nome_dia);

	}

}
