# 部门管理

::: tip
- 部门管理，给用户使用
- 一个用户只能归属一个部门
:::

## 功能预览
![](/system/department/department.png)
- 列表默认只显示根级别，有两个原因：
  - 全部打开占用空间太大，不利于查看；
  - 系统默认定位哪个部门都不是很合理。
- 列表展开采用懒加载方式。点开某行才开始请求下级数据。
- 禁用和删除会校验是否已被使用。
  - 如已被使用（此部门下已有用户）则不可以禁用或删除
  - 禁用或删除后，所有下级分类会一并禁用或删除

## 新增根部门
![](/system/department/department-add-root.png)
- Root选择Yes，即为根部门，所谓的一级部门。
- 新增根部门时，不显示Parent下拉框，请参考 [新增非根部门](#新增非根部门)

## 新增非根部门
![](/system/department/department-add-noroot.png)
- 非根部门需要选择他的上级Parent。比如想在电信事业部（一级部门）下新建技术研发部，则要选择非根分类，并且Parent选择电信事业部。

## 修改根部门
![](/system/department/department-edit-root.png)

## 修改非根部门
![](/system/department/department-edit-noroot.png)
