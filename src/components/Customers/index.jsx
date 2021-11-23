/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import data from '../../data';
import Table_Person from './../Table_Person/index';
function Customers(props) {
    const List_Title_Head=[
        
        {Name:"Mã số"},
        {Name:"Họ tên"},
        {Name:"Địa chỉ"},
        {Name:"Số điện thoại"},
        {Name:"Xóa"},
        {Name:"Cập nhật"},   
]

        return (    
                <Table_Person List={data.Cutomers_data} List_Title_Head={List_Title_Head}/>
        );
}

export default Customers;