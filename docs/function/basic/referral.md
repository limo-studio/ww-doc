# 推荐人管理

::: tip
- 推荐人管理，目的是客户下单时，知道某客户的推荐人，从而进行下单后的返佣。返佣就涉及到比例，就是某客户的Band字段。
- 推荐人类型有：`客户(Customer)`、`员工(Employee)`。具体请参考 [新增推荐人](#新增推荐人)
- Band在字典中维护，请参考 [字典管理](../basic/dict)
:::

## 功能预览
![Referral](/basic/referral/referral.png)
- 列表，`搜索、列表、分页`，功能有：`新增`、`编辑`、`删除`
- Status是个切换开关，可以决定是否禁用

## 新增推荐人
![Referral-add](/basic/referral/referral-add.png)
- Type：选择Customer后，只能从已有的Customer中选择。具体请参考 [客户管理](../basic/customer)
- Type：选择Employee后，只能从已有的User中选择。具体请参考 [用户管理](../system/user)
- Code唯一，且不可为空

## 修改推荐人
![Referral-edit](/basic/referral/referral-edit.png)

