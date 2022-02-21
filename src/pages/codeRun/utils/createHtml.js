/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const base = '/code-run-online/';

// 生成html结构
export default (
  htmlStr,
  jsStr,
  cssStr,
  cssResources,
  jsResources,
  openAlmightyConsole
) => {
  // 添加依赖资源
  // const _cssResources = cssResources
  //   .map((item) => `<link href="${item.url}" rel="stylesheet">`)
  //   .join('\n');
  // const _jsResources = jsResources
  //   .map((item) => `<script src="${item.url}"></script>`)
  //   .join('\n');
  // const head = `
  //     <title>预览</title>
  //     <style type="text/css">
  //         ${cssStr}
  //     </style>
  //     ${_cssResources}
  //     <script src="${base}base/index.js"></script>
  //     <script src="${base}console/compile.js"></script>
  //   `;
  // const body = `
  //     ${htmlStr}
  //     ${_jsResources}
  //     ${openAlmightyConsole ? `<script src="${base}eruda/eruda.js"></script>` : ''}
  //     <script>
  //         ${openAlmightyConsole ? 'eruda.init();' : ''}
  //         try {
  //           ${jsStr}
  //         } catch (err) {
  //           console.error('js代码运行出错')
  //           console.error(err)
  //         }
  //     </script>
  //   `;

  const body = `
      <script>
          try {
            ${jsStr}
          } catch (err) {
            console.error('js代码运行出错')
            console.error(err)
          }
      </script>
    `;

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link href="/libs/find-react/1.0.9/find-react.light.min.css" rel="stylesheet" data-theme="light"/>
      <title>插件</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <script>
        if (typeof process === 'undefined') {
          window.process = {};
        }
      </script>
      <script src="/libs/react/17.0.1/react.production.min.js"></script>
      <script src="/libs/react-dom/17.0.1/react-dom.production.min.js"></script>
      <script src="/libs/react-router-dom/5.1.2/react-router-dom.min.js"></script>
      <script src="/libs/mobx/5.15.4/mobx.min.js"></script>
      <script src="/libs/mobx-react-lite/1.5.1/mobx-react-lite.min.js"></script>
      <script src="/libs/mobx-react/6.1.5/mobx-react.min.js"></script>
      <script src="/libs/lodash/4.17.15/lodash.min.js"></script>
      <script src="/libs/moment/2.24.0/moment-with-locales.min.js"></script>
      <script src="/libs/axios/0.19.2/axios.min.js"></script>
      <script src="/libs/find-react/1.0.9/find-with-locales.js"></script>
      <script src="/jdc-mfe.config.js"></script>
      <script>
        (function() {
          var _LIB_ARR = [
            { key: 'react', value: 'React' },
            { key: 'react-dom', value: 'ReactDOM' },
            { key: 'react-router-dom', value: 'ReactRouterDOM' },
            { key: 'mobx', value: 'mobx' },
            { key: 'mobx-react', value: 'mobxReact' },
            { key: 'mobx-react-lite', value: 'mobxReactLite' },
            { key: 'lodash', value: '_' },
            { key: 'moment', value: 'moment' },
            { key: 'axios', value: 'axios' },
            { key: 'antd', value: '@jd/find-react' }
          ];
          for (var i = 0; i < _LIB_ARR.length; i++) {
            window[_LIB_ARR[i].key] = window[_LIB_ARR[i].value];
          }
        })();
      </script>
      <div id="root"></div>
      ${body}
    </body>
  </html>
  `;
};
