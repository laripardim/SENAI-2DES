package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.Estoque;

public class EstoqueControl {
	public boolean cadastrar(Estoque func) {
		try {
			FileWriter cad = new FileWriter("D:/cad.txt", true);
			BufferedWriter bw = new BufferedWriter(cad);
			
			String linha = func.getNome() + ";" +
						   func.getValor() + ";" +
						   func.getDesc() + ";" +
						   func.getQuantidade() + "\r\n";
			
			bw.write(linha);
			
			bw.close();
			cad.close();
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return false;
	}
	
	public ArrayList<String> lista() {
		ArrayList<String> data = new ArrayList<String>();
		
		try {
			FileReader fr = new FileReader("D:/cad.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			while((linha = br.readLine()) != null) {
				data.add(linha);
			}
			
			br.close();
			fr.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return data;
	}
	
	public boolean editar(Estoque func) {
		ArrayList<String> data = lista();
		
		try {
			FileWriter fw = new FileWriter("D:/cad.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);
					
			for(int i = 0; i < data.size(); i++) {
				String linha = data.get(i);
				if(linha.contains(func.getDesc())) {
					   linha = func.getNome() + ";" +
							   func.getValor() + ";" +
							   func.getDesc() + ";" +
							   func.getQuantidade();
					   data.remove(i);
					   data.add(i, linha);
				
					}
					bw.write(data.get(i)+"\r\n");
				}

				bw.close();
				fw.close();
		}catch(Exception e) {
			
		}
		
		return false;
	}
	
	public boolean excluir(Estoque func) {
		ArrayList<String> data = lista();
		
		try {
			FileWriter fw = new FileWriter("D:/cad.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);
			
			for(int i = 0; i<data.size();i++) {
				String linha = data.get(i);
				if(!linha.contains(func.getDesc())) {
					bw.write(data.get(i)+"\r\n");
					
				}
			}
			
			bw.close();
			fw.close();
			
			return true;
			}catch(Exception e) {
				System.out.println(e);
				
			}
			return false;
	}
}