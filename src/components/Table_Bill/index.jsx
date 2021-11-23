import '../stylesTable.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Grow';

Table_Bill.propTypes = {
  List: PropTypes.array,
  List_Title_Head: PropTypes.array,
};
Table_Bill.defaultProps = {
  List: [],
  List_Title_Head: [],
};
export default function Table_Bill(props) {
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      document.getElementById(`${id}`).remove();
    }
  };
  const { List, List_Title_Head } = props;
  return (
    <>
      {' '}
      <Fade in={true} timeout={400} className='body_page'>
        <Paper>
          <div>
            <table className='itemTable'>
              <thead className='headerTable'>
                <tr>
                <th >STT</th>
                  {List_Title_Head.map((item, index) => (
                    <th key={index}>{item.Name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {List.map((item, index) => (
                  <tr key={index} id={item.id}>
                    <td>{index}</td>
                    <td>{item.invoice}</td>
                    <td className='text_over'>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.amount}</td>
                    <td className='status status-delivering'>{item.status}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        data-set={item.id}
                        onClick={() => HandleDelete(item.id)}>
                        Hủy
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-success'
                        data-set={item.id}>
                        Hoàn Tất
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Paper>
      </Fade>
    </>
  );
}
