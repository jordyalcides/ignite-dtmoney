import { ReactNode } from "react";


interface Transaction {
	id: number
	title: string
	value: number
	type: TransactionType
	category: string
	createdAt: string
}

type TransactionType = 'deposit' | 'withdraw'

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
	transactions: Transaction[]
	createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
	children: ReactNode
}