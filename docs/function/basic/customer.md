# 客户管理

::: tip
- 客户管理，最核心的客户信息管理。涉及后续下单、返佣等。
- 客户类型有：`客户(Customer)`、`飞机仔(Van boy)`
- 客户可以有子账户，飞单使用。具体飞单操作请查看 [订单管理](../order/order)
- 客户地址更新为5行组成。其中Line1，City，Postcode必填
:::

## 功能预览
![Customer](/basic/customer/customer-20210722.png)
- 列表，`搜索、列表、分页`，功能有：`新增`、`编辑`、`删除`
- 列表字段更新，目前设定为更有意义的内容
- Status是个切换开关，可以决定是否禁用
- Credit由系统自动管理。代表此客户的余额。目前只在财务订单还款超过订单金额时才会放入到Credit中。
- 禁用的客户无法继续下单。但不影响之前的订单。

## 新增客户
![customer-add](/basic/customer/customer-add-20210722.png)
- Line 设定每天的线路，按星期设置。设置后，每星期一都是同一个线路。
- Referral，是推荐人。具体请参考[推荐人管理](../basic/referral)
- Child Customer是子账户，目的是飞单使用。所以，为了关联，需要先创建个子账号，再用正常账号去关联子账号。**某客户无子账户，则无法下飞单**
- Delivery Address 非常重要，请认真填写。后续会根据配送地址进行分组打印配送单。
- 星级Star是必填项，在下单时会根据客户星级进行不同的折扣。按计划是星级越高，折扣越大。具体请参考 [商品管理](../product/product#新增商品-基本信息)

## 修改客户
![customer-edit](/basic/customer/customer-edit-20210722.png)

