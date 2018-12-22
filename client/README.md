

## 运行

> npm i 安装依赖
>
> npm run dev 开发环境
>
> npm run build 打包构建

## 后端代码目录

```
└── client
	├── app.js  # webpack 入口文件
	├── .babelrc # babel 配置文件
	├── index.html # webpack html 模板文件
	├── postcss.config.js # postcss 配置
    ├── build # webpack 配置文件
    │   ├── webpack.common.js # 配置公共部分
    │   ├── webpack.dev.config.js # 开发环境的配置
    │   └── webpack.prod.config.js # 部署配置
    ├── dist # webpack 打包出口目录
    └── src # 前端代码
    	├── assets # 存放静态资源，如图标、图片等
    	├── components 存放业务级别的 UI 组件
    	├── hocs # 存放业务级别的逻辑组件（看情况可与 components/ 合并，但建议分开）
    	├── i18n # 存放应用国际化需要的多语言文件
        ├── layouts # 存放布局级别的组件
        ├── views/pages # 存放页面级别的组件
        └── utils # 存放通用的功能性函数，如数据聚合、处理等
    
```

