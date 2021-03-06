# 拣货单

::: tip
- 订单打印功能，主要是通过多选查询的订单，去打印拣货单，或者批量打印发票
- `拣货单`打印后，会在拣货单管理中生成一个拣货单，供后续业务开展。
- `发票`，可以单独多次打印
:::

## 功能预览
![](/print/pickup.png)
- `拣货单`有几种状态：`Printed`、`Picked`、`Checked`、`Posted`、`Deleted`，会对订单产生积极影响。
- `打印发票`，这里的打印发票只能是根据拣货单进行批量打印。如果想单个订单的发票打印，请去[订单打印](../print/OrderPrint)

**按钮或功能说明：**
- `打印外部采购单（Outsourced goods）`，当前拣货单对应的外部采购单。两种单据的订单列表是相同的。
- `打印装车单（Loading orders）`，装车单，是整合拣货单和外部拣货单的所有货品，根据线路分组。
- `打印配送单（Delivery note）`，属于给司机的。一般来说每个配送地址或每个客户是一张单子。即使有空白位置也不再打印其他地址的内容。
- `打印发票（Inovice）`，每个订单一张发票。
- `查看拣货单（View）`，查看之前打印的拣货单。查看的Dialog还可以再次进行[系统级打印](../print/OrderPrint#系统级打印)，不对订单或拣货单有任何状态影响了。
- `删除拣货单（Delete）`，Post前（`Printed`、`Picked`、`Checked`）的拣货单是可以删除的。
- `完成拣货（Finish）`，拣货单完成拣货。拣货单状态变更为 `Picked`
- `完成审核（Check）`，拣货单完成审核。拣货单状态变更为 `Checked`
- `Post拣货单（Post）`，拣货单Post。Post的拣货单不再可以删除。拣货单状态变更为 `Posted`，对应的订单都更新成`Posted`。

**按钮跟着拣货单状态而不同，具体如下表所示**
- 这几个按钮会一直可用，不管拣货单状态是什么：[View](#view)，[Outsourced goods](#outsourced-goods)，[Loading orders](#loading-orders)，[Delivery note](#delivery-note)，[Inovice](#inovice)

|  拣货单状态 |   可用按钮  |   禁用或不显示按钮  |   对订单状态影响  |
|  --- |   ---  |   ---  |   ---  |
|  `Printed`  | [Delete](#delete)<br>[Finish](#finish)<br>| [Check](#check)<br>[Post](#post)  | 对订单状态无影响<br>[订单状态](../order/order#订单状态流转说明)是`Pending` |
|  `Picked`  | [Delete](#delete)<br>[Check](#check) | [Finish](#finish)<br>[Post](#post) | 同上↑ |
|  `Checked`  | [Delete](#delete)<br>[Post](#post) | [Finish](#finish)<br>[Check](#check) | 同上↑ |
|  `Posted`  | - | [Check](#check)<br>[Post](#post)<br>[Delete](#delete)<br>[Finish](#finish) | 订单会被批量Post<br>[订单状态](../order/order#订单状态流转说明)是`Posted` |
|  `Deleted`  | - | [Check](#check)<br>[Post](#post) | 对订单状态无影响<br>[订单状态](../order/order#订单状态流转说明)是`Pending` |
- **请注意，同一个订单如果多次打印拣货单，即使多个拣货单都Post，那此订单也只会Post一次。**

## View
![](/print/pickup-view.png)
- 可以随时打印。可参考 [系统级打印](../print/OrderPrint#系统级打印)

## Delete
![](/print/pickup-delete.png)
- 确认提示框

## Finish
![](/print/pickup-finish.png)
- Employee Id（拣货人Id），是[用户管理](../system/user#新增用户)中维护的信息。员工有个自己的条码，这里可以用扫码枪扫码进行快速录入。

## Check
![](/print/pickup-check.png)
- Employee Id（审核人Id），是[用户管理](../system/user#新增用户)中维护的信息。员工有个自己的条码，这里可以用扫码枪扫码进行快速录入。

## Post
![](/print/pickup-post.png)

## Outsourced-goods
![](/print/outsourced-goods.png)

## Loading-orders
![](/print/loading-order.png)

## Delivery-note
- TODO
## Inovice
- TODO