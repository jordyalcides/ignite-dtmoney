import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

	useEffect(() => {
		api.get('transactions')
			.then(response => console.log(response.data))
	}, [])

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<td>Título</td>
						<td>Valor</td>
						<td>Categoria</td>
						<td>Data</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de Website</td>
						<td className="deposit">R$12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					<tr>
						<td>Internet</td>
						<td className="withdraw">- R$300,00</td>
						<td>Moradia</td>
						<td>01/04/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
}