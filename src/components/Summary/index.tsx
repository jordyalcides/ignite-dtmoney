import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/Transactions';

import { Container } from "./styles";

export function Summary() {
	const { transactions } = useTransactions()

	const totalDeposits = transactions.reduce((total, transaction) => {
		return transaction.type === 'deposit'
			? total+transaction.value
			: total
	}, 0)

	const totalWithdraws = transactions.reduce((total, transaction) => {
		return transaction.type === 'withdraw'
			? total+transaction.value
			: total
	}, 0)

	const summary = transactions.reduce((acc, transaction) => {
		return transaction.type === 'deposit'
			? {
				deposit: acc.deposit+transaction.value,
				withdraw: acc.withdraw,
				total: acc.total+transaction.value,
			}
			: {
				deposit: acc.deposit,
				withdraw: acc.withdraw+transaction.value,
				total: acc.total-transaction.value
			}
	}, {
		deposit: 0,
		withdraw: 0,
		total: 0
	})

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas"/>
				</header>
				<strong>{
				new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.deposit)}</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas"/>
				</header>
				<strong>-{
				new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.withdraw)}</strong>
			</div>
			<div className="highlight-background" >
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total"/>
				</header>
				<strong>{
				new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(summary.total)}</strong>
			</div>
		</Container>
	)
}