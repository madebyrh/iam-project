import React, { useState, createContext } from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

export const ExpensiesContext = createContext();

const Money = ({ classes }) => {
	const [expensies, setExpensies] = useState([]);
	const getexpenses = async () => {
		var arr = [];
		const db = firebase.firestore();
		const data = await db.collection('expenses').get();
		data.forEach(doc => {
			//arr.push(doc.data());
			arr.push({
				amount: doc.data().amount,
				category: doc.data().category,
				date: doc.data().date.toDate()
			});
			console.log(doc.data().date.toDate())
		})
		console.log(arr);
		setExpensies(arr);
		//console.log(expenses);
	}


	return (
		<ExpensiesContext.Provider value={[expensies, setExpensies, getexpenses]}>
		<div>
				<ExpenseForm />
				<ExpenseList />
		</div>
		</ExpensiesContext.Provider>
	);
};

export default Money;

