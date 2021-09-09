<%@page import="java.util.ArrayList"%>
<%@page import="control.EstoqueControl"%>
<%@page import="model.Estoque"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Test</title>
</head>
<body>
	<% 
		
		EstoqueControl fc = new EstoqueControl();
	
	    String nome = request.getParameter("nome");
		String desc = request.getParameter("descricao");
		String valor = request.getParameter("valor");
		String quantidade = request.getParameter("quantidade");
		String tipo = request.getParameter("tipo");
	
		if(nome != null && desc != null && valor != null && quantidade != null) {
			Estoque f = new Estoque();
			f.setNome(nome);
			f.setValor(Integer.parseInt (valor));
			f.setDesc(desc);
			f.setQuantidade(Integer.parseInt(quantidade));
			
			switch(tipo) {
				case "0":
					fc.cadastrar(f);
					break;
				case "1":
					fc.editar(f);
					break;
				case "2":
					fc.excluir(f);
			}
			
		}
	%>
	<form action="index.jsp" method="POST">
	    <input type="text" name="nome" id="nome" placeholder="Nome"><br>
	    <input type="text" name="descricao" id="desc" placeholder="Descricao"><br>
	    <input type="text" name="valor" id="valor" placeholder="Valor"><br>
	    <input type="text" name="quantidade" id="quant" placeholder="Quantidade"><br>
	    <input type="hidden" name="tipo" value="0" id="tipo">
	    <input type="submit" value="Cadastrar">
	</form>
	<table>
	    <thead>
	        <th>Nome</th>
	        <th>Descrição</th>
	        <th>Quantidade</th>
	        <th>Valor</th>
	    </thead>
	    <tbody>
    		<%
		        ArrayList<String> data = fc.lista();
		        for(String linha : data) {
		            String[] tmp = linha.split(";");
		            out.print("<tr>");
		            out.print("<td>"+tmp[0]+"</td>");
		            out.print("<td>"+tmp[3]+"</td>");
		            out.print("<td>"+tmp[1]+"</td>");
		            out.print("<td>"+tmp[2]+"</td>");
		            out.print("<td><button onclick='edita(this)'>Editar</button></td>");
		            out.print("<td><button onclick='excluir(this)'>Excluir</button></td>");
		            out.print("</tr>");
        		}
    		%>
		</tbody>
	</table>
</body>
<script src="script.js"></script>
</html>