import React, { useState, createContext } from 'react';
import MemoForm from '../components/MemoForm';
import MemoList from '../components/MemoList';
import firebase from '../firebase';
import 'firebase/firestore';

export const MemosContext = createContext();

const Memo = () => {
	const [memos, setMemos] = useState([]);
	const getMemos = async () => {
		var arr = [];
		const db = firebase.firestore()
		const data = await db.collection('memos').get();
		data.forEach(doc => {
			arr.push(doc.data());
		});
		setMemos(arr);
	}
	return (
		<MemosContext.Provider value={[memos, setMemos, getMemos]}>
			<div>
				<p>memo</p>
				<MemoForm />
				<MemoList />
			</div>
		</MemosContext.Provider>
	);
};

export default Memo;