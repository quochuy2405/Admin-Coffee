/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { storage } from '../firebase_uploadimg';
//"firebase": "^4.8.0",
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import './styles.scss';
function AddProduct(props) {
  const {router}=props;
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState();
  const [urlImage, setUrlimage] = useState(undefined);
  var HandleChange = (e) => {
    const file = e.target.files[0];
    const fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
      enqueueSnackbar('Sai định dạng', { variant: 'error' });
      setUrlimage(undefined);
    } else {
      if (file) {
        file.preview = URL.createObjectURL(file);
        setImage(file);
      }
    }
  };
  const HandleUpload = () => {
    if (image) {
      enqueueSnackbar('Tải lên thành công', { variant: 'success' });
      // const UploadTask = storage.ref(`imageProducts/${image.name}`).put(image);
      // UploadTask.on(
      //   'state_changed',
      //   (snapshot) => {},
      //   (error) => {
      //     console.log(error);
      //   },
      //   () => {
      //     storage
      //       .ref('imageProducts')
      //       .child(image.name)
      //       .getDownloadURL()
      //       .then((url) => {
      //         setUrlimage(url);
      //         console.log('Image:', urlImage);
      //         enqueueSnackbar('Tải lên thành công', { variant: 'success' });
      //       })
      //       .catch((error) => {
      //         enqueueSnackbar('Tải lên thất bại', { variant: 'error' });
      //       });
      //   }
      // );
    } else {
      enqueueSnackbar('Hãy chọn tệp tin', { variant: 'warning' });
    }
  };
  console.log('Image:', urlImage);
  return (
    <div className='AddProduct'>
      <input type='file' id='inputFile' onChange={HandleChange} />
      <label htmlFor='inputFile'>
        <p>Hình ảnh mô tả</p>
        <div className='box_input'>
          {image && <img className='img_preview' src={image.preview} />}
          <i className='fad fa-plus-circle iconUpLoad'></i>
        </div>
      </label>
      <div className='title content'>
        <p>Tiêu đề</p>
        <input type='text' />
      </div>

      <div className='description content'>
        <p>Mô tả sản phẩm</p>
        <textarea></textarea>
      </div>
      <div className='price content'>
        <p>Giá</p>
        <input type='text' />
      </div>

      <button
        type='button'
        onClick={HandleUpload}
        className='btn_submit btn btn-warning'>
        Tải lên
        
      </button>
    </div>
  );
}

export default AddProduct;
