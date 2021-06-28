# 分类管理

::: tip
- 商品分类，用于商品管理中。可以在新增商品时按Cascader方式选取。
- 商品分类理论支持无限级别。但推荐小于五级，否则页面效果可能会出现错乱。
:::

## 功能预览
![](/basic/category/category.png)
- 分类没有搜索区域。
- 列表默认只显示根级别，有两个原因：
  - 全部打开占用空间太大，不利于查看；
  - 系统默认定位哪个分类都不是很合理。
- 列表展开采用懒加载方式。点开某行才开始请求下级数据。
- 禁用和删除会校验是否已被使用。
  - 如已被使用（此分类下已有商品）则不可以禁用或删除
  - 禁用或删除后，所有下级分类会一并禁用或删除

## 新增根分类
![](/basic/category/category-add-root.png)
- Root选择Yes，即为根分类，所谓的一级分类。
- 根分类时，不显示Parent下拉框，请参考 [新增非根分类](#新增非根分类)

## 新增非根分类
![](/basic/category/category-add-noroot.png)
- 非根分类需要选择他的上级Parent。比如想在中外名酒（一级分类）下新建泸州老窖，则要选择非根分类，并且Parent选择中外名酒。

## 修改根分类
![](/basic/category/category-add-root.png)

## 修改非根分类
![](/basic/category/category-add-noroot.png)

## 商品管理中分类的操作
![](/basic/category/category-product.png)
- 分类按层级选择。选择后，分类框里显示出每一层的信息和关系。

