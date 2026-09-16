import {sources as original} from '../research.ts';
export type Source={id:string;title:string;publisher:string;date:string;url:string;kind:string};
export const sources:Source[]=[...original,
{id:'S32',title:'关于市政协五届四次会议第0716号提案的复函',publisher:'重庆市水利局',date:'2021-04-10',url:'https://slj.cq.gov.cn/zwgk_250/zfxxgkml/yta/zxjybl/202104/t20210410_9119754.html',kind:'部门答复·条例通过与施行日期'},
{id:'S14',title:'龙溪河流域生态修复治理建议办理答复',publisher:'重庆市农业农村委',date:'2020-05-07',url:'https://nyncw.cq.gov.cn/xxgk_161/zfxxgkml/jyta/202005/t20200507_7294406_wap.html',kind:'部门答复'},
{id:'S15',title:'垫江龙溪河再现水清岸绿好风光',publisher:'重庆市政府网',date:'2022-05-20',url:'https://www.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202205/t20220520_10739452.html',kind:'官方转载·事件报道'},
{id:'S16',title:'川渝三区县大清流河流域水环境保护联合协商座谈会',publisher:'重庆市政府网',date:'2024-12-05',url:'https://www.cq.gov.cn/zt/cyscjjq/xtfz/zjsystpz/202412/t20241205_13864768.html',kind:'官方转载·联合协商'},
{id:'S17',title:'川渝十四枚公章共治大清流河',publisher:'重庆市农业农村委',date:'2025-07-08',url:'https://nyncw.cq.gov.cn/zwxx_161/mtbb/202507/t20250708_14795549.html',kind:'官方转载·跨界治理'},
{id:'S18',title:'小安溪',publisher:'重庆市水利局',date:'2017-08-03',url:'https://slj.cq.gov.cn/ztzl_250/hzzjsst/tzgg_24017/201708/t20170803_6080749.html',kind:'河流概况·历史区划口径'},
{id:'S19',title:'铜梁：多措并举 严格落实“河长制”',publisher:'重庆市政府网',date:'2022-12-01',url:'https://www.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202212/t20221201_11349311.html',kind:'官方转载·综合治理'},
{id:'S20',title:'“九治”攻坚 推进重庆生态环境质量持续改善',publisher:'重庆市政府网',date:'2025-05-29',url:'https://wap.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202505/t20250529_14669132.html',kind:'官方转载·生态补偿'},
{id:'S21',title:'重庆市临江河水体达标整治方案的批复',publisher:'重庆市人民政府',date:'2016-09-12',url:'https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/qtgw/201609/t20160916_8613947.html',kind:'政府文件'},
{id:'S22',title:'永川 治理一条河 提升一座城',publisher:'重庆市政府网',date:'2021-01-19',url:'https://www.cq.gov.cn/ywdt/zwhd/qxdt/202101/t20210119_8830789.html',kind:'官方转载·治理回顾'},
{id:'S23',title:'永川 建设幸福河湖 映照美好生活',publisher:'重庆市政府网',date:'2023-03-22',url:'https://www.cq.gov.cn/ywdt/zwhd/qxdt/202303/t20230322_11794353.html',kind:'官方转载·智慧河长'},
{id:'S24',title:'川渝在新盛河流域首创生态环保跨界联动督察机制',publisher:'重庆市生态环境局',date:'2020-11-12',url:'https://sthjj.cq.gov.cn/ztzl_249/rdzl/zysthbdczqzxd/gzdt_38225/202011/t20201112_8454517.html',kind:'部门发布·联动督察'},
{id:'S25',title:'市五届人大五次会议第0466号建议办理答复',publisher:'重庆市生态环境局',date:'2022-07-04',url:'https://sthjj.cq.gov.cn/zwgk_249/zfxxgkml/jytabl/202207/t20220704_10882955.html',kind:'部门答复·跨界联治'},
{id:'S26',title:'关于印发《三峡库区及其上游水污染防治规划》的通知',publisher:'国家环保总局（生态环境部网站）',date:'2001-11-19',url:'https://www.mee.gov.cn/gkml/zj/wj/200910/t20091022_172056.htm',kind:'政府文件·原始发布日期'},
{id:'S27',title:'三峡库区及其上游水污染防治规划（修订本）',publisher:'环境保护部',date:'2008-01',url:'https://www.mee.gov.cn/gkml/zj/wj/200910/W020080203462094746002.pdf',kind:'规划原文'},
{id:'S28',title:'关于全面推行河长制的意见',publisher:'中办、国办（北京市政府转载）',date:'2016-12-12',url:'https://www.beijing.gov.cn/gate/big5/www.beijing.gov.cn/zhengce/gwywj/201905/t20190522_59684.html',kind:'中央政策'},
{id:'S29',title:'川渝河长制五周年合作成效新闻发布会',publisher:'重庆市水利局',date:'2025-05-09',url:'https://slj.cq.gov.cn/sy_250/slyw/202505/t20250509_14595656.html',kind:'部门发布·制度回顾'},
{id:'S30',title:'“两江四岸”治理提升实施方案',publisher:'重庆市人民政府办公厅',date:'2018-12-17',url:'https://www.cq.gov.cn/zwgk/zfxxgkml/szfwj/xzgfxwj/szfbgt/201812/t20181217_8837671_app.html',kind:'政府文件'},
{id:'S31',title:'市六届人大二次会议第0628号建议办理答复',publisher:'重庆市生态环境局',date:'2024-04-26',url:'https://sthjj.cq.gov.cn/zwgk_249/zfxxgkml/jytabl/202406/t20240617_13300164_wap.html',kind:'部门答复·三纵四横协同'}];


