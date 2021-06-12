import { useTransactions } from "../../hooks/Transactions";
import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions()

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{
                new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
