import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';
import 'firebase/firestore';
import { MemosContext } from '../pages/Memo';
const MemoForm = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [memos, setMemos, getMemos] = useContext(MemosContext);
	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeContent = (e) => {
		setContent(e.target.value);
	};

	const addMemo = (e) => {
		e.preventDefault();
		const db = firebase.firestore();
		db.collection('memos').add({
			title: title,
			content: content
		});
		setTitle('');
		setContent('');
		getMemos();
		console.log(memos);

	};
	return (
		<div>
			<form onSubmit={addMemo} >
				<TextField
					label="title"
					value={title}
					onChange={handleChangeTitle}
				/>

				<TextField
					multiline
					label="content"
					value={content}
					rows="4"
					onChange={handleChangeContent}
				/>
				<Button type="submit" variant="contained" color="primary">Regist</Button>
			
			</form>

		</div>
	);
};

export default MemoForm;