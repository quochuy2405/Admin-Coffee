import '../stylesTable.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProDetails from './../ProDetails/index';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Grow';
Table_Product.propTypes = {
  List: PropTypes.array,
  List_Title_Head: PropTypes.array,
};
Table_Product.defaultProps = {
  List: [],
  List_Title_Head: [],
};
export default function Table_Product(props) {
  const HandleDelete = async (id) => {
    if (window.confirm('Bạn đã chắc chắn muốn xóa?')) {
      await document.getElementById(`${id}`)?.remove();
    }
  };
  const { List, List_Title_Head } = props;
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  function handleDetaits(params) {
    console.log(params);
    setOpen(true);
    setDetails(params);
  }
  return (
    <>
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
                    <td>{item.id}</td>
                    <td className='text_over'>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>{item.origin}</td>
                    <td>{item.rate}</td>
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
                    <td>
                      <button
                        type='button'
                        className='btn btn-outline-warning'
                        data-set={item.id}
                        onClick={() =>
                          handleDetaits({
                            link_img: item.link_img,
                            id: item.id,
                            title: item.title,
                            desc: item.desc,
                            price: item.price,
                          })
                        }>
                        Xem chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ProDetails open={open} setOpen={setOpen} Item={details} />
          </div>
        </Paper>
      </Fade>
    </>
  );
}
