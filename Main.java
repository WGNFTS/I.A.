import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Bem-vindo ao Tubarão Ratão - A IA Suprema");
    System.out.print("Usuário: ");
    String username = scanner.nextLine();
    System.out.print("Senha: ");
    String password = scanner.nextLine();

    // Verificar login no servidor (não implementado aqui)

    System.out.print("Digite sua pergunta: ");
    String userInput = scanner.nextLine();
    String response = "[Tubarão Ratão]: Eu sou a inteligência suprema e minha resposta é: " + userInput;

    displayResponse(response);
    scanner.close();
  }

  public static void displayResponse(String response) {
    System.out.println(response);
  }
}
