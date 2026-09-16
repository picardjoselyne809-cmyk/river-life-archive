import {cases} from '../research.ts';
export type GovernanceEvent={id:string;riverId:string;date:string;title:string;text:string;sources:string[];stage:string};
export const events:GovernanceEvent[]=[...cases.flatMap(c=>c.events.map((e,i)=>({id:`${c.id}-${i}`,riverId:c.id,date:e.time,title:e.text.split('，')[0],text:e.text,sources:e.sources,stage:c.id==='liangtan'?(i===0?'责任治水':i===1?'工程治水':'数字治水'):'数字治水'}))),
{id:'longxi-plan',riverId:'longxi',date:'2017—2025 · 规划期',title:'三区县进入共同治理方案',text:'生态修复与治理试点方案统筹空间、产业和防洪工程。此处为方案期，不表示全部项目已经完成。',sources:['S14'],stage:'流域协同'},
{id:'longxi-pipe',riverId:'longxi',date:'2022.04 · 报道回溯',title:'巡河发现管网老化',text:'高安食品工业园污水外溢经基层河长上报，河长办跟踪督办，要求园区更换老化管网。',sources:['S15'],stage:'责任治水'},
{id:'daqingliu-talk',riverId:'daqingliu',date:'2024.12.05 · 报道',title:'三地联合协商',text:'安岳、东兴与荣昌的政协委员和政府部门代表交流水环境问题，签署联合协商备忘录。',sources:['S16'],stage:'流域协同'},
{id:'daqingliu-law',riverId:'daqingliu',date:'2025.07.08 · 报道',title:'跨界执法与生态损害赔偿',text:'报道记录两地共同参与非法捕捞案件的生态环境损害赔偿磋商。该日期是报道日期，非案件发生时刻。',sources:['S17'],stage:'流域协同'},
{id:'xiaoan-industry',riverId:'xiaoan',date:'2021 · 工作启动',title:'造纸产业污染整治',text:'铜梁从造纸产业切入，统筹城镇生活、工业和农村面源污染治理任务。',sources:['S19'],stage:'工程治水'},
{id:'xiaoan-compensation',riverId:'xiaoan',date:'2025.05.29 · 报道',title:'上下游横向生态补偿',text:'双桥经开区与永川、铜梁、合川签订协议，明确职责和义务，以水质考核促进协作。',sources:['S20'],stage:'流域协同'},
{id:'linjiang-plan',riverId:'linjiang',date:'2016.09.12',title:'达标整治方案获批',text:'市政府向永川、江津批复临江河水体达标整治方案。',sources:['S21'],stage:'工程治水'},
{id:'linjiang-action',riverId:'linjiang',date:'2017',title:'“一号民生工程”启动',text:'永川成立流域综合治理指挥部，将设施整治与河段责任衔接。',sources:['S22'],stage:'责任治水'},
{id:'linjiang-digital',riverId:'linjiang',date:'2023.03.22 · 报道',title:'智慧河长与网格队伍连接',text:'共享多部门数据，将巡护、河库管理等资源组织到一张图。',sources:['S23'],stage:'数字治水'},
{id:'xinsheng-list',riverId:'xinsheng',date:'2020.08—09',title:'形成跨界问题清单',text:'联合摸排形成梁平19项、开江15项问题；9月7日印发联动督察工作方案。',sources:['S24','S25'],stage:'流域协同'},
{id:'xinsheng-feedback',riverId:'xinsheng',date:'2022.07.04 · 答复',title:'答复确认整改进展',text:'部门答复记载34项问题已完成整改，联盟桥国考断面稳定保持Ⅲ类以上。此为该答复时点的口径。',sources:['S25'],stage:'流域协同'},
{id:'longhe-alert',riverId:'longhe',date:'2024.11.12 · 报道',title:'一条预警触达两地与街道',text:'石柱、丰都相关生态环境人员及下路街道工作人员同时收到湖海场断面异常预警。报道未给出事件精确日期及完整结案过程。',sources:['S08'],stage:'数字治水'},
{id:'sanxia-plan',riverId:'sanxia',date:'2001.11.19',title:'从库区向上游组织治理',text:'规划印发，要求各地区和部门制定实施计划。',sources:['S26'],stage:'工程治水'},
{id:'sanxia-revision',riverId:'sanxia',date:'2008.01',title:'规划修订与项目调整',text:'总结前期实施情况，修订城镇污染处理、工业治理和保障措施。',sources:['S27'],stage:'工程治水'}];

