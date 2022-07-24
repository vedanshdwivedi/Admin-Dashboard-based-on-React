import { React, useState } from 'react';
import './userList.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{
			field: 'user',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				return (
					<>
						<div className="username">
							<img className="usernameImage" src={params.row.avatar} alt="" />
							<span className="usernameName">{params.row.username}</span>
						</div>
					</>
				);
			},
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 150,
		},
		{
			field: 'status',
			headerName: 'Account Status',
			width: 130,
			renderCell: (params) => {
				return <div className={'statusCol ' + params.row.status}>{params.row.status}</div>;
			},
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			width: 100,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 400,
			renderCell: (params) => {
				return (
					<div className="buttonRow">
						<Link to={'/user/' + params.row.id}>
							<button className="userListEdit">
								<i className="userListEditIcon fa-solid fa-pen-to-square"></i>Edit
							</button>
						</Link>
						<button
							className="userListDelete"
							onClick={() => {
								handleDelete(params.row.id);
							}}
						>
							<i className="userListDeleteIcon fa-solid fa-circle-minus"></i>Delete
						</button>
					</div>
				);
			},
		},
	];

	return (
		<>
			<div className="users">
				<DataGrid
					rows={data}
					columns={columns}
					pageSize={8}
					disableSelectionOnClick
					checkboxSelection
				/>
			</div>
		</>
	);
}