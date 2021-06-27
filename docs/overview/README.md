# 总览

::: tip
本章节主要介绍系统整体布局以及各个功能区中通用的功能。
:::

## 登录
![overview](/login.png)
- 用户名和密码登录方式。
- 验证码为图片加混淆，极大降低机器登录可能。
- 验证码为简单算数，有 + - x 三种方式，前后数字都是0~9范围。

## 整体布局
![overview](/overview/overview-all.png)
- 红色框（左）：左侧logo和菜单布局位
- 蓝色框（右上）：面包屑导航，快速导航区，功能操作区（搜索菜单、全屏、用户中心、退出登录等）
- 绿色框（右中）：业务操作区，分为：查询区域、新增按钮、列表区域、分页区域
- 黄色框（右上）：版权信息

## 功能操作区
![center](/overview/overview-operate.png)
- （左一）：搜索框，搜索菜单使用。并非全局搜索。
- （左二）：全屏按钮，可以隐藏浏览器地址等。
- （右一）：用户中心和退出按钮。用户中心自行修改密码和邮箱等。

## 业务操作区
![center](/overview/overview-business.png)
- 编号①：搜索区域。可组合查询。基本就是三类：文本框查询、下拉框查询、日期框查询。
- 编号②：整体操作，包含3个内容：隐藏搜索区域、刷新列表、自定义列表内容。
- 编号③：列表区域，含分页。每页10条记录，超过10条记录后分页。
- 编号④：操作区，每行都有各自的操作功能。大部分功能都有编辑和删除两个功能。有些会根据当前行的某字段去禁用编辑或删除。
- 其他：新增按钮在1和3之间。比如，新增仓库、新增库位等等都是通过此按钮。
