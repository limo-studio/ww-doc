module.exports = {
  title: 'W&W ERP',
  description: 'Document Center',
  plugins: ['@vuepress/back-to-top'],
  // Header导航
  themeConfig: {
    // navbar: false,
    nav: require('./nav/zh'),
    displayAllHeaders: true,
    sidebar: {
      '/function/': getFunctionSidebar('基础管理', '系统管理', '库存管理', '商品管理', '打印管理', '报表管理', '售后管理', '监控管理', '财务管理'),
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

function getFunctionSidebar (groupBasic, groupSystem, groupStock, groupProduct, groupPrint, groupReport, groupAftersale, groupMonitor, groupFinance) {
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
      title: groupStock,
      collapsable: true,
      children: [
        'stock/',
        'stock/stockIn'
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
      title: groupPrint,
      collapsable: true,
      children: [
        'print/',
        'print/OrderPrint',
        'print/pickup'
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
      title: groupAftersale,
      collapsable: true,
      children: [
        'aftersale/',
        'aftersale/salesReturn'
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
    },
    {
      title: groupFinance,
      collapsable: true,
      children: [
        'finance/',
        'finance/payment'
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