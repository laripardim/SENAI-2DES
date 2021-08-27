<%@page import="ctr.BemProcesses"%>
<%@page import="vo.Bem"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="estilo.css">
<meta charset="UTF-8">
<title>Lista com todos os bens (READ)</title>
</head>
<body>
	<!--  div>
		<a href="cadastro.jsp">Cadastrar Novo</a>
		<a href="editar.jsp">Alterar ou Remover</a>
	</div-->
	<table>
		<tr>
			<th>Descrição</th>
			<th>Valor</th>
			<th>Id</th>
			<th>Data</th>
		</tr>
		<%
		BemProcesses.abrir();
		for (Bem b : BemProcesses.bens) {
			out.print(b.toHTML());
		}
		%>
	</table>
</body>
</html>