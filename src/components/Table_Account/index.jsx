import '../stylesTable.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Grow';
Table_Account.propTypes = {
  List: PropTypes.array,
  List_Title_Head: PropTypes.array,
};
Table_Account.defaultProps = {
  List: [],
  List_Title_Head: [],
};
export default function Table_Account(props) {
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      await document.getElementById(`${id}`).remove();
    }
  };
  const { List, List_Title_Head } = props;
  return (
    <>
      <Fade direction="up" in={true} timeout={400} className='body_page'>
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
                    <td>{item.id}</td>
                    <td className='text_over'>{item.name}</td>
                    <td className='text_over'>{item.gmail}</td>
                    <td className='text_over'>{item.phone}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        data-set={item.id}
                        onClick={() => HandleDelete(item.id)}>
                        Xóa
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-success'
                        data-set={item.id}>
                        Cập nhật
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
