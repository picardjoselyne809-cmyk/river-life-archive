export type Source={id:string;title:string;publisher:string;date:string;url:string;kind:string};
export const sources:Source[]=[
{id:'S01',title:'“巴渝治水”经验在全国推广',publisher:'重庆市政府网 / 重庆日报',date:'2024-04-13',url:'https://www.cq.gov.cn/ywdt/jrcq/202404/t20240413_13128165.html',kind:'官方转载·事件报道'},
{id:'S02',title:'铜钵河：美丽河湖优秀案例',publisher:'生态环境部',date:'2025-07-17',url:'https://www.mee.gov.cn/home/ztbd/2023/mlhh2/yxal3/cq/202507/t20250717_1123691.shtml',kind:'部门发布·案例总结'},
{id:'S03',title:'十年攻坚 梁滩河“活”过来了',publisher:'重庆市政府网 / 重庆日报',date:'2026-05-06',url:'https://www.cq.gov.cn/zjcq/lszq/ltbsjtbwz/202605/t20260506_15650949.html',kind:'官方转载·长期回顾'},
{id:'S04',title:'梁滩河沙坪坝段污水治理工作座谈会',publisher:'重庆市生态环境局',date:'2019-07-22',url:'https://sthjj.cq.gov.cn/ztzl_249/rdzl/zysthbdczqzxd/gzdt_38225/201907/t20190722_7036834.html',kind:'部门网站·工作报道'},
{id:'S05',title:'“巴渝治水” 用AI+守护一江碧水',publisher:'重庆市政府网 / 重庆日报',date:'2025-10-30',url:'https://www.cq.gov.cn/zt/szzqjs/fngxnzl/sthj/wrfz/202510/t20251030_15126097.html',kind:'官方转载·蒲河与AI进展'},
{id:'S06',title:'重庆举行全面推行河长制新闻发布会',publisher:'重庆市水利局',date:'2017-04-21',url:'https://slj.cq.gov.cn/ztzl_250/hzzjsst/hzdt/201704/t20170421_6079831.html',kind:'部门发布·制度'},
{id:'S07',title:'三年发三“令”！深入打好碧水保卫战',publisher:'重庆市政府网',date:'2021-06-18',url:'https://wap.cq.gov.cn/zwgk/zfxxgkml/zcjd_120614/mtsj/202106/t20210618_9408329.html',kind:'官方解读·条例生效'},
{id:'S08',title:'重庆以数字化赋能生态环境治理',publisher:'重庆市政府网 / 重庆日报',date:'2024-11-12',url:'https://www.cq.gov.cn/zwgk/zfxxgkml/zdlyxxgk/stbh/hjbh/202411/t20241112_13790773.html',kind:'官方转载·建设时间线'},
{id:'S09',title:'2026年全市水利工作会议召开',publisher:'重庆市水利局',date:'2026-01-19',url:'https://slj.cq.gov.cn/sy_250/slyw/202601/t20260119_15332833.html',kind:'工作部署·非验收报告'},
{id:'S10',title:'“十五五”美丽重庆建设规划解读新闻发布会',publisher:'重庆市政府网',date:'2026-09-02',url:'https://wap.cq.gov.cn/zwgk/zfxxgkml/zcjd_120614/jdfb/202609/t20260902_16023406.html',kind:'规划解读·迭代方向'},
{id:'S11',title:'綦江自然地理',publisher:'重庆市綦江区政府',date:'访问于2026-09-05',url:'https://www.cqqj.gov.cn/zjqj_159/zrdl/',kind:'官方概况·空间关系'},
{id:'S12',title:'綦江—万盛一体化发展规划',publisher:'重庆市政府办公厅',date:'2021-07-01',url:'https://wap.cq.gov.cn/zwgk/zfxxgkzl/fdzdgknr/ghxx/qygh/202107/t20210701_9444416.html',kind:'规划·联合巡河与设施共享'},
{id:'S13',title:'DataV GeoAtlas 行政区边界',publisher:'阿里云 DataV',date:'下载于2026-09-05',url:'https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json',kind:'公开空间数据·非现行区划认定'},
];
export type CaseRecord={id:string;name:string;number:string;theme:string;regions:string;rq:string;summary:string;regionNames:string[];anchor:number[];sections:{title:string;text:string;sources:string[]}[];events:{time:string;text:string;sources:string[]}[]};
export const cases:CaseRecord[]=[
{id:'tongbo',name:'铜钵河',number:'01',theme:'跨行政区域智能协同',regions:'四川大竹 ↔ 重庆梁平',rq:'RQ1 / RQ2',summary:'同一条河的风险，如何变成两地共同的行动？',regionNames:['大竹县','梁平区'],anchor:[107.55,30.68],sections:[
{title:'A / 河流是谁',text:'发源于四川大竹，流经达州与重庆梁平。生态环境部2025年案例记载干流27.5公里，其中川渝共界河段14公里。',sources:['S02']},
{title:'B / 为什么难治',text:'跨界与共界交织，管辖权、资源投入和利益诉求不同；沿河管网与养殖设施的风险，需要两地分别核实。',sources:['S02','S01']},
{title:'C / 制度如何形成',text:'两地建立联席会商、信息共享和联合执法机制，采用共考断面，并推进污水互接处理。共同规则为数字交办提供制度基础。',sources:['S02']},
{title:'D / 数字如何介入',text:'断面异常触发预警，模型压缩排查范围，清单推动两地同步行动，现场核实后再反馈、销号。',sources:['S01']},
{title:'F / 案例说明什么',text:'RQ1：流域连通不等于行政责任连通。RQ2：平台把共同风险转成可交办、可追踪的任务；数字协同仍依赖协议、人员与实体设施。',sources:['S01','S02']},
],events:[{time:'2024.03.19 09:30',text:'上河坝断面氨氮、高锰酸盐指数异常，平台预警。',sources:['S01']},{time:'2024.03.19 11:30',text:'梁平现场排查，大竹同步沿河排查。',sources:['S01']},{time:'2024.03.21',text:'水质达标，申请并获同意销号；报道概括全过程不到两天。',sources:['S01']}]},
{id:'liangtan',name:'梁滩河',number:'02',theme:'从综合整治到数字监管',regions:'重庆高新区 → 沙坪坝 → 北碚',rq:'RQ1 / RQ2',summary:'十年治理，为什么不能只靠一项技术？',regionNames:['九龙坡区','沙坪坝区','北碚区'],anchor:[106.38,29.69],sections:[
{title:'A / 河流是谁',text:'嘉陵江支流，串联重庆高新区、沙坪坝区与北碚区。地图行政底图不单列高新区，以文字说明管理空间。',sources:['S03']},
{title:'B / 为什么难治',text:'2019年沙坪坝段面临居住人口多、企业分布广、治污设施不足的问题。上下游行动必须与管网、污水厂建设衔接。',sources:['S04']},
{title:'C / 制度如何形成',text:'2017年启动综合整治，以市级河长统筹沿线治理。2019年要求排查和补建管网、推动污水厂扩容，并统筹规划用地。',sources:['S03','S04']},
{title:'D / 数字如何介入',text:'2026年回顾报道提及北碚排污口溯源、自动监测站与AI摄像头。这是长期工程和责任体系上的监管补强，不能把十年改善单归因于AI。',sources:['S03']},
{title:'F / 案例说明什么',text:'RQ2：治理能力是叠加形成的。工程承接污水，河长协调责任，跨区共同执行，数字工具帮助发现新的异常。',sources:['S03','S04']},
],events:[{time:'2017',text:'以河长制统筹全流域综合整治。',sources:['S03']},{time:'2019.07',text:'管网排查、污水厂扩容与规划保障进入协同议程。',sources:['S04']},{time:'2026.05 报道',text:'记录设施建设、三区协同与智慧监管共同推进的长期变化。',sources:['S03']}]},
{id:'puhe',name:'蒲河',number:'03',theme:'跨部门联动与水量调度',regions:'南川 / 巴南 / 万盛 → 綦江',rq:'RQ2',summary:'发现异常之后，谁能把分散的部门组织起来？',regionNames:['南川区','巴南区','綦江区'],anchor:[106.78,29.03],sections:[
{title:'A / 河流是谁',text:'蒲河水系经南川、巴南、万盛等区域，在綦江三江汇入綦江。事件聚焦綦江区寨溪大桥断面；点位没有核实坐标。',sources:['S11','S05']},
{title:'B / 为什么难治',text:'识别水质问题与实施水电站调度分属不同工作环节。信息抵达生态环境部门后，还需组织水利、街道与基层治理中心。',sources:['S05']},
{title:'C / 制度如何形成',text:'2021年綦江—万盛一体化规划提出流域综合治理、联合巡河与污水设施共建共享，为跨域水治理提供制度背景。',sources:['S12']},
{title:'D / 数字如何介入',text:'2025年事件由预警和链式溯源形成线索，区治理中心组织水利部门，并通过基层治理中心直达三江街道核实。',sources:['S05']},
{title:'F / 案例说明什么',text:'RQ2：数据链提供排查线索，治理链配置行动主体。两家污水厂是疑似线索，报道未公布最终归责，不能据此确认违法排污。',sources:['S05']},
],events:[{time:'2025.08.30—09.01',text:'寨溪大桥断面溶解氧日均值连续异常。报道未提供浓度与异常方向。',sources:['S05']},{time:'随后（未公开时刻）',text:'模型识别两个疑似排污口、关联两家污水厂，治理中心协调现场核实。',sources:['S05']},{time:'处置结果',text:'经水电站调度水质恢复；报道用“不到3天”概括处置，非本原型测算。',sources:['S05']}]}];
export const stages=[
{year:'长期基础',name:'工程治水',question:'有没有能力治理？',problem:'污水直排，收集和处理能力不足。',method:'建设管网、污水厂，整治河岸与修复生态。',ability:'把污染接住、处理掉。',caseId:'liangtan',sources:['S04']},
{year:'2017 / 2021',name:'责任治水',question:'谁来负责？',problem:'多头管理难以形成持续责任。',method:'全面推行河长制；2021年河长制条例施行。',ability:'明确牵头责任，建立长期督促机制。',caseId:'liangtan',sources:['S06','S07']},
{year:'持续深化',name:'协同治水',question:'跨界后如何共同治理？',problem:'自然流域与行政边界不重合。',method:'联防联治、联合排查、设施共享与共考断面。',ability:'上游下游围绕共同目标协商行动。',caseId:'tongbo',sources:['S02','S12']},
{year:'2023—2024',name:'数字治水',question:'信息如何变成行动？',problem:'线索碎片化，发现与联动存在时间差。',method:'2023年12月试点上线巴渝治水；预警、溯源、清单交办。',ability:'把发现、处置与反馈串成可追踪闭环。',caseId:'tongbo',sources:['S08','S01']},
{year:'2025—2026',name:'智能治理',question:'能否提前研判、辅助决策？',problem:'仅处理单次事件，难以积累预防能力。',method:'2025年报道AI预测与月度复盘；2026年部署进一步迭代。',ability:'从事件响应走向预测和辅助研判，仍需人工核实。',caseId:'puhe',sources:['S05','S09','S10']},
];
export const eventSteps=[
{title:'断面出现异常',time:'03.19 · 09:30',text:'上河坝国控断面氨氮、高锰酸盐指数日均值异常。没有公开连续浓度，本页仅展示状态。',actor:'自动监测断面',kind:'报道事实'},
{title:'识别水质风险',time:'预警阶段 · 顺序示意',text:'平台弹出预警，识别需关注的下游空间。风险识别与监测触发在报道中紧密相连。',actor:'巴渝治水',kind:'报道事实 / 叙事拆分'},
{title:'研判下游传播',time:'当时预测 · 12小时后',text:'系统预测污染物12小时后到达下游断面。动画不表示实际流速，也不表示污染已经到达。',actor:'模型研判',kind:'报道中的预测'},
{title:'形成排查线索',time:'随后 · 未公开精确时刻',text:'疑似清单涉及2家污水厂、4家工业企业、15个雨水排口、10家养殖场。疑似不等于确认污染。',actor:'平台溯源',kind:'报道事实'},
{title:'两地共同响应',time:'随后 · 未公开精确时刻',text:'预警与问题清单交给梁平，梁平向大竹派发清单，组织跨省同步排查。',actor:'梁平生态环境部门 ↔ 大竹生态环境部门',kind:'报道事实'},
{title:'同步现场排查',time:'03.19 · 11:30',text:'梁平组织执法、监测和碧山镇现场排查，大竹同时沿河核查。信息流转成为实地行动。',actor:'两地现场队伍',kind:'报道事实'},
{title:'定位问题并处置',time:'排查后 · 未公开精确时刻',text:'梁平修复破损二级管网；大竹发现养殖场粪污储存设施破损，采取阻断外排和升级设施措施。',actor:'住建 / 镇街 / 生态环境 / 农业部门',kind:'报道事实'},
{title:'反馈、复核、销号',time:'03.21 · 水质达标',text:'上河坝达标后申请销号；平台确认稳定达标且未影响下游，市生态环境局同意销号。报道概括为不到两天。',actor:'梁平申请 → 市生态环境局复核',kind:'报道事实'},
];
export const mechanisms={
past:{label:'过去',tag:'简化对照 · 非全部历史',nodes:['人工巡查','人工发现','层层上报','事后处置'],details:['发现依赖人员到达现场。','异常未必立即成为跨部门线索。','逐层传递时，责任和信息可能分离。','处置后经验不一定进入持续规划。'],summary:'线性处置：发现与协调之间存在时间差。'},
present:{label:'现在',tag:'已报道案例能力 · 有适用范围',nodes:['智能感知','数据融合','风险识别','跨域协同','现场处置','结果反馈'],details:['传感器与人工线索共同发现问题。','关联监测、污染源和行政责任数据。','模型提出风险与疑似清单，人员核实。','平台将问题转为多部门、跨区域任务。','人员修复设施或实施调度。','复核水质、申请销号；已有月度复盘报道。'],summary:'事件闭环：发现、责任、行动与结果连在一起。'},
future:{label:'未来',tag:'研究设想 · 非全面实现的事实',nodes:['持续感知','AI分析','辅助决策','资源协同','治理执行','效果反馈','规划配置','再感知'],details:['持续监测并记录数据不确定性。','融合历史事件，识别变化与风险。','给出备选方案，由有权主体审议决策。','在部门职责约束下协调人员、设施和预算。','执行行动并保留责任和操作记录。','比较目标与结果，评估非预期影响。','把验证过的经验纳入管网、用地和资源安排。','监测新安排的影响，纠偏并进入下一轮。'],summary:'治理基础设施：让经过验证的反馈进入下一轮规划。'},
};
export type Mode=keyof typeof mechanisms;
export function simulate(values:number[]){const [a,c,s,r]=values.map(v=>v/100);return {exposure:Math.round(100*(1-.45*a)*(1-.25*s)*(1-.2*r)),response:Math.round(100/(1+.55*a+.9*c+.85*s)),cost:Math.round(100*(1-.6*c)*(1+.2*r)),effect:Math.round(100*(1-(1-.5*r)*(1-.25*a)*(1-.3*s)*(1-.2*c)))};}
