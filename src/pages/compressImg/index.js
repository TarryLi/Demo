/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import style from './index.module.less';

export default () => {
  const file2Image = (file, callback) => {
    const image = new Image();
    const URL = window.webkitURL || window.URL;
    if (URL) {
      const url = URL.createObjectURL(file);
      image.onload = function () {
        callback(image);
        URL.revokeObjectURL(url);
      };
      image.src = url;
    }
  };

  const image2Canvas = (img, scale) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width * scale;
    canvas.height = img.height * scale;

    ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
    return canvas;
  };

  const canvas2Blob = (canvas, callback, quality, type) => {
    canvas.toBlob((blob) => {
      callback(blob);
    }, type || 'image/jpeg', quality || 0.8);
  };

  const file2DataUrl = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const blob2DataUrl = (blob, callback) => {
    file2DataUrl(blob, callback);
  };

  const compressImg = () => {
    const file = document.getElementById('file').files[0];
    const quality = 0.8;
    const scale = 1;

    console.log('压缩之前图片尺寸大小: ', file.size);

    file2Image(file, (img) => {
      const canvas = image2Canvas(img, scale);
      canvas2Blob(canvas, (blob) => {
        console.log('压缩之后图片尺寸大小: ', blob.size);
        console.log('压缩率: ', `${((blob.size / file.size) * 100).toFixed(2)}%`);

        blob.width = canvas.width;
        blob.height = canvas.height;
        blob2DataUrl(blob, (url) => {
          document.getElementById('imgPreview').src = url;
        });
      }, quality, file.type);
    });
  };

  return <div className={style.wrap}>
    <input id="file" type="file" />
    <img src="" alt="" id="imgPreview" />
    <input type="button" value="压缩图像" onClick={compressImg} />
  </div>;
};
