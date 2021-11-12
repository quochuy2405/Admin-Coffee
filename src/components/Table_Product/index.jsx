import '../stylesTable.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProDetails from './../ProDetails/index';
import { Link } from 'react-router-dom';

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
      await document.getElementById(`${id}`).remove();
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
    <div className='body_page'>
      <table className='itemTable'>
        <thead className='headerTable'>
          <tr>
            {List_Title_Head.map((item, index) => (
              <th key={index}>{item.Name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {List.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>{item.id}</td>
              <td className='text_over'>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.origin}</td>
              <td>{item.rate}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-set={item.id}
                  onClick={() => HandleDelete(item.id)}>
                  Xóa
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-warning'
                  data-set={item.id}>
                  Cập nhật
                </button>
              </td>
              <td>
                <button
                  type='button'
                  className='btn btn-success'
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
    <nav aria-label='Page navigation' className="Page navigation">
        <ul className='pagination'>
          <li className='page-item'>
            <Link className='page-link' to="/" aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'>Previous</span>
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              1
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/">
              3
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to="/" aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'>Next</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
