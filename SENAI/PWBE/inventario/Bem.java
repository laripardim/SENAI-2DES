package vo;

import java.util.Date;
import java.util.Objects;

public class Bem {
	
	//Atributos
	private String descricao;
	private String valor;
	private String id;
	private String data;
	
	//Construtores
	public Bem() {
	}

	public Bem(String descricao, String valor, String id, String data) {
		this.descricao = descricao;
		this.valor = valor;
		this.id = id;
		this.data = data;
	}
	
	public Bem(String[] csv) {
		this.descricao = csv[0];
		this.valor = csv[1];
		this.id = csv[2];
		this.data = csv[3];
	}

	//Getters && Setters
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return descricao + "\t" + valor + "\t" + id + "\t" + data + "\n";
	}
	
	public String toCSV() {
		return descricao + ";" + valor + ";" + id + ";" + data  + "\r\n";
	}
	
	public String toHTML() {
		return "<tr><td>"+ descricao + "</td><td>" + valor + "</td><td>" + id + "</td><td>" + data + "</td></tr>";
	}
	
}