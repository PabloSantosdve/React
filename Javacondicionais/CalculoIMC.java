package Javacondicionais;

import java.util.Scanner;

public class CalculoIMC {

	public static void main(String[] args) {
		Scanner peso = new Scanner(System.in);
		Scanner altura = new Scanner(System.in);
		
		
		System.out.print("Digite o seu peso: ");
		float peso1 = peso.nextFloat();
		peso.nextLine();
		
		System.out.print("digite a altura: ");
		float altura1 = altura.nextFloat();
		peso.nextLine();
		
		float imc = peso1 / (altura1*2);

		
		if(imc <= 18.5) {
			System.out.print("abaixo do peso imc de: " + imc);
		}else if(imc >= 18.6 && imc <= 24.9) {
			System.out.print("Peso ideial (Parabens) imc de: " + imc);
		}else if(imc >= 25.0 && imc <= 29.9) {
			System.out.print("Levemente acima do peso e imc de: " + imc);
		}else if (imc >= 30.0 && imc <=34.9) {
			System.out.print("Obesidade grau I e imc de: " + imc);
		}else if (imc >= 35.0 && imc <= 39.9) {
			System.out.print("Obesidade de grau II e imc de: " + imc);
		}else if (imc >= 40) {
			System.out.print("Obesidade III e imc de: " + imc);
		}
		
	}

}
