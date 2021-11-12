import React from 'react';
import data from '../../data';
import Table_Account from '../Table_Account';

function Sales(props) {
    const List_Title_Head=[
        
        {Name:"Mã số"},
        {Name:"Họ tên"},
        {Name:"Gmail"},
        {Name:"Số điện thoại"},
        {Name:"Xóa"},
        {Name:"Cập nhật"},   
]

        return (    
                <Table_Account List={data.Employees_data} List_Title_Head={List_Title_Head}/>
        );
}


export default Sales;