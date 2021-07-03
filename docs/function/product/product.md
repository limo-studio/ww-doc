# 商品管理

::: tip
- 商品管理，整个ERP核心功能。需要先维护好商品。
- 商品管理依赖：[分类管理](../basic/category)、[字典管理（产地、标签等）](../basic/dict)，
- 依赖商品管理功能的有：[入库库存](../stock/stockIn)、[订单管理](../order/order)等等。
:::

## 功能预览
![](/product/product.png)
- 列表，`搜索、列表、分页`，功能有：`新增`、`编辑`、`删除`
- Status是个切换开关，可以决定是否禁用

## 新增商品-基本信息
![](/product/product-add-basic.png)
- 分类Category是级联选择，具体请参考 [分类选择](#新增商品-分类选择)
- Name, Code, Barcode都是唯一的。Barcode是条形码。Code是某商品的缩写，便于员工查找
- Sell Type, VAT, Status都是字典中来的数据。
- Sell Price 1~5，是根据客户不同星级而设定的不同的价格。
- Limit Price 1~5，是不同星级的最低限价。按设定来说，限价要低于对应的售价。
- Base Info页的所有属性都是必填项。

## 新增商品-属性信息
![](/product/product-add-attr.png)
- 产地Origin, 标签Label, 是否外部采购Foreign 都是字典中来的数据。
- 产地Origin，单选
- 标签Label，可多选
- Sell Online 是线上售价，即下期做的线上的商城，由客户自行可下单的售价预留
- Sell Offline 是线下售价，即超市的售价，也是预留
- Limit Online，是线上售价的限价，不能再低于此价格了。
- Limit Offline，是线下售价的限价，不能再低于此价格了。
- Split Product，是本商品拆包后的商品。下拉框选择。选择的内容是之前所有添加过的可用的商品。
- Split Number, 商品拆包后，数量是多少。比如本商品是一箱24罐的可乐，整箱出售。那Split的设定就是：Product选择单罐可乐的商品，Number写24.
- Foreign Address是外部采购地址，一般维护的是某超市的名字等，并非具体多行的配送地址。

## 新增商品-分类选择
![](/product/product-category.png)

## 修改商品-基本信息
![](/product/product-edit-basic.png)

## 修改商品-属性信息
![](/product/product-edit-attr.png)

