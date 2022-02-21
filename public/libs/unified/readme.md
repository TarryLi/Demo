# cityos-jssdk使用说明

## 方法说明

### init

```
Usage: window.__generateTopNavigation__.init()

Params:
  appCode {String}: 应用编码【required】
  accessToken {String}: 鉴权信息【required】
  menuRouteMode {String}: 左侧菜单路由模式 hash|history, 默认hash
  baseURL {String}: 内部接口前缀，默认/api/cityos
  autoGoLogin {Boolean}: 接口请求401时，是否自动跳登录页，默认true
  autoGoNoAuth {Boolean}: 页面无权限时，是否自动跳无权限页，默认true（使用sdk渲染菜单时生效）
  topHeaderContainer {String|HTMLElement}: 顶部页头容器，可传入选择器或html元素，自定义渲染不必传
  leftMenuContainer {String|HTMLElement}: 左侧菜单容器，可传入选择器或html元素，自定义渲染不必传
  helpPrefix {String}: 帮助文档前缀，默认 /docs
  logoIcon {String}: logo图标地址
  logoText {String}: logo说明文字
  hideNav {Boolean}: 是否隐藏导航入口，默认false
  hideMsg {Boolean}: 是否隐藏消息入口，默认false
  hideHelp {Boolean}: 是否隐藏帮助入口，默认false
  hideLeftHead {Boolean}: 是否隐藏左侧菜单头部， 默认false
  goHome {Function}: 点击logo的响应函数
  onUserDataChange {Function}: 用户数据变更时触发，用于获取当前用户数据
  onMenuFoldChange {Function}: 左侧菜单展开收起时触发，用户获取当前菜单展开收起状态
  onMenuDataChange {Function}: 左侧菜单数据变化时触发，用于获取菜单相关数据
  onMenuClicck {Function}: 点击菜单时调用(非外链)
  onThemeChange {Function}: 主题变更时触发
  onOverviewProjectsChange {Function}: 项目概览变更时触发（初始化查询、删除时）

Proxy:

app.use(proxy('/api', {
  target: 'http://10.241.241.58/',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  }
}));
```

### goLogin

> 跳转统一登录页面

```
Usage: window.__generateTopNavigation__.goLogin()

Params:
  returnUrl {String|Boolean}: false(直接跳登录，不带回跳地址)，字符串(回跳地址)，不传（获取当前地址做为回跳地址）
```

### goNoAuth

> 跳转统一无权限页面

```
Usage: window.__generateTopNavigation__.goNoAuth()
```
