import * as Babel from '@babel/standalone';

const html = (preprocessor, code) => new Promise((resolve, reject) => {
  try {
    switch (preprocessor) {
      case 'html':
        resolve(code);
        break;
      case 'pug':
        resolve(window.pug.render(code));
        break;
      default:
        resolve('');
        break;
    }
  } catch (error) {
    reject(error);
  }
});

const js = (code) => new Promise((resolve, reject) => {
  try {
    let _code = '';
    _code = Babel.transform(code, {
      presets: [
        'es2015',
        'es2016',
        'es2017',
        'react'
      ]
    }).code;
    // console.log(code);
    resolve(_code);
  } catch (error) {
    reject(error);
  }
});

let sass = null;
const css = (preprocessor, code) => new Promise((resolve, reject) => {
  try {
    switch (preprocessor) {
      case 'css':
        resolve(code);
        break;
      case 'less':
        window.less.render(code)
          .then((output) => {
            resolve(output.css);
          },
          (error) => {
            reject(error);
          });
        break;
      case 'sass':
      case 'scss':
        if (!sass) {
          sass = new window.Sass();
        }
        sass.compile(code, {
          indentedSyntax: preprocessor === 'sass'
        }, (result) => {
          resolve(result.text);
        });
        break;
      case 'stylus':
        window.stylus.render(code, (err, _css) => {
          if (err) {
            reject(err);
          } else {
            resolve(_css);
          }
        });
        break;
      case 'postcss':
        window.postcss([window.cssnext]).process(code).then(result => {
          resolve(result.css);
        });
        break;
      default:
        resolve('');
        break;
    }
  } catch (error) {
    reject(error);
  }
});

export default { html, js, css };
