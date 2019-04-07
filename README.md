# react-ellipsis-with-css
- 文本超出容器后自动添加省略号，同时适用于单行、多行文本；
- 纯css实现；

# 安装
```shell
  npm install react-ellipsis-with-css -S
```

# 使用
```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Ellipsis from './ellipsis';
  ReactDOM.render(<Ellipsis rows={2} lineHeight={30}>我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！我是一段文本！</Ellipsis>,document.getElementById('root'));
```

# 参数
目前仅支持三个参数

> rows 

必填，规定显示的行数，超出指定行数在尾部添加省略号；

> lineHeight 

必填，文字的行高；

> unit 

选填，默认为“px”；
