import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase from '../firebase';
import 'firebase/firestore';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { ExpensiesContext } from '../pages/Money';
const ExpenseForm = () => {
	const [expensies, setExpensies, getexpensies] = useContext(ExpensiesContext)
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');
	const [categories, setCategories] = useState([
		{ label: 'food', id: 1},
		{ label: 'other', id: 2},
		{ label: 'another', id: 3}
	]);

	const [date, setDate] = useState(new Date());
	const addExpense = (e) => {
		e.preventDefault();
		console.log(amount);
		console.log(category);
		console.log(date);
		//firestoreに登録
		const db = firebase.firestore();
		db.collection('expenses').add({
			amount: amount,
			category: category,
			date: date
		});			
		setAmount('');
		setCategory('');
		getexpensies();

	};
	const handleDateChange = (e) =>{
		console.log(e.timeStamp);
		const inputDate = new Date(e.target.value);
		setDate(inputDate);
	};

	const handleChangeAmount = (e) => {
		setAmount(e.target.value);
	};
	const handleChangeCategory = (e) => {
		console.log(e.target.value);
		setCategory(e.target.value);
	};

	return (
		<div>
			Money
			<form onSubmit={addExpense}>

				<TextField
					label="Amount"
					value={amount}
					onChange={handleChangeAmount}
				/>
				<TextField
					select
					label="Category"
					value={category}
					onChange={handleChangeCategory}
				>
					{categories.map(option => (
						<MenuItem id={option.id} value={option.label}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="date"
					label="date"
					type="datetime-local"
					defaultValue={date}
					onChange={handleDateChange}
				/>
				<Button type="submit" variant="contained" color="primary">Regist</Button>
				</form>
				<div>
					<h3>List Area</h3>
				</div>
			</div>
		);
	};

	export default ExpenseForm;
