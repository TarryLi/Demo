/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import transform from './transform';

export default async ({
  htmlLanguage = 'html', jsLanguage = 'javascript', cssLanguage = 'css',
  htmlContent = '', jsContent = '', cssContent = ''
}) => {
  // await load([htmlLanguage, jsLanguage, cssLanguage]);
  const htmlTransform = transform.html(htmlLanguage, htmlContent);
  const jsTransform = transform.js(jsContent);
  const cssTransform = transform.css(cssLanguage, cssContent);
  return new Promise((resolve, reject) => {
    Promise.all([htmlTransform, jsTransform, cssTransform])
      .then(([htmlStr, jsStr, cssStr]) => {
        resolve({
          html: htmlStr,
          js: jsStr,
          css: cssStr
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
