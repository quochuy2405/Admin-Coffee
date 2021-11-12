import React from 'react';
import data from '../../data';
import Table_Product from './../Table_Product/index';
function Product_List(props) {
    const List_Title_Head=[
        
        {Name:"Mã số"},
        {Name:"Tiêu đề"},
        {Name:"Giá"},
        {Name:"Nơi sản xuất"},
        {Name:"Đánh giá"},   
        {Name:"Xóa"},
        {Name:"Cập nhật"}, 
        {Name:"Chi tiết"}, 
]

        return (    
                <Table_Product List={data.Product_data} List_Title_Head={List_Title_Head}/>
        );
}

export default Product_List;