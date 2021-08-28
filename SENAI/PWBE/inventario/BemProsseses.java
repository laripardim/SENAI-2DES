package ctr;
import java.util.ArrayList;

import vo.Bem;
import vo.dao.BemDAO;

public class BemProcesses
{
	public static ArrayList<Bem> bens;
	public static BemDAO bem = new BemDAO();

	public static void testes() {
		
		bens = new ArrayList<>();
		String[] nomes = { "Marcos", "Lúcia", "Ana", "Maria", "Renata" };
		String[] sobrenomes = { "Silva", "da Silva", "Castro", "Souza", "de Souza", "e Silva", "Oliveira", "de Oliveira" };
		//Nome n = new Nome(nomes, sobrenomes);
		
		//for (int i = 0; i < n.getAll().length; i++)
		//	bens.add(new Bem(new descricao().getFormat() + "", n.getAleatorio(2), new Telefone().getFormat()));
	}

	//C - CREATE
	public static String salvar() {
		if (bem.salvar(bens)) {
			return "<p>Dados registrados</p>";
		}
		return "<p>Erro ao registrar dados</p>";
	}
	
	//R - READ
	public static void abrir() {
		bens = bem.abrir();
	}
	
	//U - UPDATE
	public static void alterar() {
	}
	
	//D - DELETE
	public static void excluir() {
	}

}