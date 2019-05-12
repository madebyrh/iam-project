import React, { useState, useEffect, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import 'firebase/firestore';
import { ExpensiesContext } from '../pages/Money';

const styles = {
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
};

const ExpenseList = ({ classes }) => {
	const [expensies, setExpensies, getexpenses] = useContext(ExpensiesContext);
	useEffect(() => {
		getexpenses();
	},[])
	return (
		<div>
			<Paper className={classes.root}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Amount</TableCell>
							<TableCell>Category</TableCell>
							<TableCell>Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{expensies.map(expense => (
							<TableRow>
								<TableCell component="th" scope="row">
									{expense.amount}
								</TableCell>
								<TableCell align="left">
									{expense.category}
								</TableCell>
								<TableCell align="left">
									{expense.date.toString()}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			<Button 
				type="button"
				variant="contained"
				color="primary"
				onClick={getexpenses}
			>
				Get List
			</Button>
		</div>
	);
};

export default withStyles(styles)(ExpenseList);