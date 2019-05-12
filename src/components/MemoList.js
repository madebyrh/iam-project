import React, { useState, useContext, useEffect } from 'react';
import { MemosContext } from '../pages/Memo';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const MemoList = () => {
	const [memos, setMemos, getMemos] = useContext(MemosContext);
	useEffect(() => {
		getMemos();
		console.log(memos);
	}, []);

	

	return (
		<div>
			{memos
				.filter(memo => !memo.hidden)
				.map((memo, index) => (
					<ExpansionPanel
						key={index}
						disabled={memo.disabled}
					>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>{memo.title}</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>{memo.content}</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))}
		</div>
	);
};

export default MemoList;