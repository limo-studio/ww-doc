# 订单支付

::: tip
- 订单支付，订单回款，由财务人员操作。
:::

## 功能预览
![](/finance/orderPayment.png)
- 列表，`搜索、列表、分页`，功能有：`新增`、`编辑`、`删除`、`Post`
- Post后，订单支付的金额正式生效。
- Post后，此支付记录不允许修改。
- Payment Type 有：`Automatic`、`Manual`，Manual（手动），意味着需要自己选择要给客户的哪个订单还款。而Automatic是不需要选择订单，交给系统去决定
- 列表中 Pay Total 会把所有还款方式都列出来，每种还款多少。比较清楚的展示了还款的明细。

## 新增-自动
![](/finance/orderPayment-add-automatic.png)
- 可以看到，Payment Type 选择`Automatic`时，下方是不出现订单选择的区域的。
- 还款支付的方式有几种：`Cash（现金）`、`Bank Transfer（银行转账）`、`Credit（账户余额）`、`Balance Off（自己冲账）`、`Check（支票）`
- 自动还款，系统会自动排序，先还较早的订单，再还较近的订单。

## 新增-手动
![](/finance/orderPayment-add-manual.png)
- 可以看到，Payment Type 选择`Manual`时，下方出现了订单选择的区域。
- 还款支付的方式有几种：`Cash（现金）`、`Bank Transfer（银行转账）`、`Credit（账户余额）`、`Balance Off（自己冲账）`、`Check（支票）`
- 手工还款，需要选择此客户下要还款的订单。可以选择多个订单，通过绿色和红色按钮去操控。
- 需要这5种还款方式的总金额大于等于(**>=**)所选择订单的还款总额。同时，超出订单的还款总额会增加到客户的Credit（账户余额）上。此处可参考[客户管理](../basic/customer)

## 修改
![](/finance/orderPayment-edit.png)
- 未Post前都是可以修改的。

## Post
- Post时会有确认弹出框。
- Post后，此支付记录不可更改。并且用户的Amounts会实时更新。