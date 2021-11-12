import React from 'react';
import data from '../../data';
import Table_Account from '../Table_Account';
function Account(props) {
    const List_Title_Head=[
        
        {Name:"Mã số"},
        {Name:"Họ tên"},
        {Name:"Gmail"},
        {Name:"Số điện thoại"},
        {Name:"Xóa"},
        {Name:"Cập nhật"},   
]

return (    
        <Table_Account List={data.Account_data} List_Title_Head={List_Title_Head}/>
);
}



export default Account;