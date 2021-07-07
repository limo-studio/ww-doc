module.exports = {
  base: '/ww-doc/',
  title: 'W&W ERP',
  description: 'Document Center',
  plugins: ['@vuepress/back-to-top'],
  // Header导航
  themeConfig: {
    // navbar: false,
    nav: require('./.vuepress/nav/zh'),
    displayAllHeaders: true,
    sidebar: {
      '/function/': getFunctionSidebar('基础管理', '系统管理', '商品管理', '库存管理', '订单管理', '打印管理', '财务管理', '售后管理', '报表管理', '监控管理'),
      '/overview/': getOverviewSidebar(),
      '/framework/': getFrameworkSidebar(),
      '/deploy/': getDeploySidebar()
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
}

function getFunctionSidebar (groupBasic, groupSystem, groupProduct, groupStock, groupOrder, groupPrint, groupFinance, groupAftersale, groupReport, groupMonitor) {
  return [
    {
      title: groupBasic,
      collapsable: true,
      children: [
        'basic/',
        'basic/dict',
        'basic/line',
        'basic/customer',
        'basic/referral',
        'basic/category',
        'basic/warehouse',
        'basic/location',
        'basic/supplier'
      ]
    },
    {
      title: groupSystem,
      collapsable: true,
      children: [
        'system/',
        'system/department',
        'system/job',
        'system/menu',
        'system/role',
        'system/user'
      ]
    },
    {
      title: groupProduct,
      collapsable: true,
      children: [
        'product/',
        'product/product',
        'product/productFile'
      ]
    },
    {
      title: groupStock,
      collapsable: true,
      children: [
        'stock/',
        'stock/stock',
        'stock/stockIn'
      ]
    },
    {
      title: groupOrder,
      collapsable: true,
      children: [
        'order/',
        'order/order'
      ]
    },
    {
      title: groupPrint,
      collapsable: true,
      children: [
        'print/',
        'print/OrderPrint',
        'print/pickup'
      ]
    },
    {
      title: groupFinance,
      collapsable: true,
      children: [
        'finance/',
        'finance/payment'
      ]
    },
    {
      title: groupAftersale,
      collapsable: true,
      children: [
        'aftersale/',
        'aftersale/salesReturn'
      ]
    },
    {
      title: groupReport,
      collapsable: true,
      children: [
        'report/',
        'report/driverReport',
        'report/pickupReport',
        'report/sellerReport',
        'report/salesProfit'
      ]
    },
    {
      title: groupMonitor,
      collapsable: true,
      children: [
        'monitor/',
        'monitor/log',
        'monitor/errLog',
        'monitor/onlineUser'
      ]
    }
  ]
}

function getOverviewSidebar () {
  return [
    ''
  ]
}

function getFrameworkSidebar () {
  return [
    ''
  ]
}

function getDeploySidebar () {
  return [
    ''
  ]
}