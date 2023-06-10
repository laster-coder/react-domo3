// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const Cell = (props) => {
	return (
		// eslint-disable-next-line react/prop-types
		<div className="Cell" onClick={props.onClick}>
			{/* eslint-disable-next-line react/prop-types */}
			{props.text}
		</div>
	);
};

const Chessboard = function () {
	const [Cells, steCells] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [f, setF] = useState(false);
	const tell = (cells) => {
		for (let i = 0; i < 3; i++) {
			if (
				cells[i][0] == cells[i][1] &&
				cells[i][1] == cells[i][2] &&
				cells[i][0] !== null
			)
				console.log(cells[i][0] + "win");
			setF(true);
			break;
		}
		for (let i = 0; i < 3; i++) {
			if (
				cells[0][i] == cells[1][i] &&
				cells[1][i] == cells[2][i] &&
				cells[0][i] !== null
			) {
				console.log(cells[0][i] + "win");
				setF(true);
				break;
			}
		}
		if (
			cells[0][0] == cells[1][1] &&
			cells[1][1] == cells[2][2] &&
			cells[0][0] !== null
		) {
			console.log(cells[0][0] + "win");
			setF(true);
		}
		if (
			cells[0][2] == cells[1][1] &&
			cells[1][1] == cells[2][0] &&
			cells[0][2] !== null
		) {
			console.log(cells[0][2] + "win");
			setF(true);
		}
	};
	const [n, setN] = useState(0);
	const onClickCell = (row, col) => {
		console.log("行" + row);
		console.log("列" + col);
		const copy = JSON.parse(JSON.stringify(Cells));
		copy[row][col] = n % 2 == 0 ? "O" : "X";
		setN(n + 1);
		steCells(copy);
		tell(copy);
	};
	return (
		<div>
			{Cells.map((items, row) => {
				return (
					<div className="row" key={row}>
						{items.map((item, col) => {
							return (
								<div className="cell" key={item}>
									<Cell
										text={item}
										onClick={() => onClickCell(row, col)}
									/>
								</div>
							);
						})}
					</div>
				);
			})}
			{f && <div className="gameOver">GameOver</div>}
		</div>
	);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<div>
		<Chessboard />
	</div>
);
