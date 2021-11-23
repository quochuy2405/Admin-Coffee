import * as React from 'react';
import Table_Person from './../Table_Person/index';
import data from '../../data';
 function Sales() {
  const List_Title_Head=[
        
    {Name:"Mã số"},
    {Name:"Họ tên"},
    {Name:"Email"},
    {Name:"Số điện thoại"},
    {Name:"Xóa"},
    {Name:"Cập nhật"},   
]

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Table_Person List_Title_Head={List_Title_Head} List={data.Employees_data} />
  );
}
export default Sales