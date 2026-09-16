export type Policy={id:string;date:string;stage:string;title:string;text:string;ability:string;riverIds:string[];sources:string[];pending?:boolean};
export const policies:Policy[]=[
{id:'p2001',date:'2001.11',stage:'工程治水',title:'三峡库区及上游水污染防治规划',text:'规划经批准印发，要求各地区、部门制定实施计划。',ability:'将处理设施与上游污染治理组织到跨区域规划中。',riverIds:['sanxia'],sources:['S26']},
{id:'p2009',date:'2009',stage:'工程治水',title:'重点次级河流综合治理',text:'历史线索：渝府发〔2009〕38号及次级河流考核办法。当前未取得完整原始文件，数量、目标与实施结果暂不展示。',ability:'待核：从工程项目推进到流域治理考核的制度连接。',riverIds:['liangtan'],sources:[],pending:true},
{id:'p2016',date:'2016.12',stage:'责任治水',title:'全国全面推行河长制',text:'中央印发意见，构建责任明确、协调有序的河湖管理保护机制。',ability:'通过责任体系连接多部门管理。',riverIds:['linjiang','liangtan'],sources:['S28']},
{id:'p2017',date:'2017.04',stage:'责任治水',title:'重庆全面推行河长制',text:'重庆召开全面推行河长制新闻发布会，公布组织体系与工作安排。',ability:'把河流分级分段责任纳入治理组织。',riverIds:['liangtan','longxi'],sources:['S06']},
{id:'p2020',date:'2020',stage:'流域协同',title:'川渝联防联控与跨界联动督察',text:'联合河长制合作逐步建立；新盛河联动督察形成两地问题清单。',ability:'跨省问题从各自处理转为共同发现、分别整改和反馈。',riverIds:['xinsheng','daqingliu'],sources:['S24','S29']},
{id:'p2021',date:'2020 / 2021',stage:'责任治水',title:'河长制条例：立法与施行',text:'2020年通过条例，2021年1月1日起施行。区分通过与生效时间，避免把两个节点混写。',ability:'为河长制持续履职提供法治保障。',riverIds:['longxi','liangtan'],sources:['S07','S32']},
{id:'p2023a',date:'2023.04',stage:'数字治水',title:'巴渝治水谋划开发',text:'市生态环境局依托一体化智能化公共数据平台谋划应用。',ability:'以统一平台组织分散信息。',riverIds:['tongbo'],sources:['S08']},
{id:'p2023b',date:'2023.12',stage:'数字治水',title:'巴渝治水试点上线',text:'2024年官方报道回溯记载2023年12月试点上线。',ability:'连接态势、问题、任务与协同处置。',riverIds:['tongbo','longhe'],sources:['S08']},
{id:'p2024',date:'2024.03',stage:'数字治水',title:'铜钵河异常触发跨省协同',text:'平台发现异常、形成线索，两地同步排查，完成处置与复核销号。',ability:'将同一个风险转为跨省可追踪的行动链。',riverIds:['tongbo'],sources:['S01']},
{id:'p2025',date:'2025.10 · 报道',stage:'智能智治',title:'AI预测与治理复盘',text:'公开报道AI智能体、水质预测和月度复盘，以及蒲河问题的跨部门处置。',ability:'从发现异常向辅助研判、反馈分析延伸。',riverIds:['puhe'],sources:['S05']},
{id:'p2026',date:'2026.01 / 09',stage:'智能智治',title:'AI+河库智管与应用迭代',text:'工作会议与规划解读提出深化AI融合、迭代应用。属于建设方向，非全域自主治理已实现的证明。',ability:'研究延伸：把经过验证的反馈纳入规划与资源配置。',riverIds:['puhe','longhe'],sources:['S09','S10']}];

