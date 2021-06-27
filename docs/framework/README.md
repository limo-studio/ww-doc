# 架构

::: tip
本章节主要介绍系统架构设计、部署架构设计。
:::

## 系统架构
![Architecture](/Architecture.png)
- 系统采用前后端分离架构。
- 前端：Vue, Element Ui
- 后端：Springboot及相关技术
- 持久层：Spring-data-JPA, Redis, SeaweeDFS(文件存储，未来做商品图片相关存储)
- 数据库：Mysql, Redis

## 部署架构
![Deploy](/deploy.png)
- 前后端分离架构，服务都采用云上部署。
- 后端集群部署，单节点推荐 8C16G 虚拟机。
- Mysql两台服务器，主从备份。
- Redis，采用官方Redis-cluster集群方案。
- Nginx反向代理，代理前端和后端服务，类似这样：前端wms.poe.xin，后端wms-backend.poe.xin