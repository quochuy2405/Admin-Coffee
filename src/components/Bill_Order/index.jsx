/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Table_Bill from '../Table_Bill';
import data from '../../data';
function Analytis() {
    const List_Title_Head=[
        
            {Name:"Mã số"},
            {Name:"Họ tên"},
            {Name:"Địa chỉ"},
            {Name:"Tổng hóa đơn"},
            {Name:"Trạng thái"},
            {Name:"Hủy giao"},
            {Name:"Hoàn tất giao"},   
    ]
    
    return (    
            <Table_Bill List={data.Analytis_data} List_Title_Head={List_Title_Head}/>
    );
}

export default Analytis;