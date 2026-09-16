'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const links=[['/rivers','河流档案库'],['/timeline','重庆治水史'],['/network','治理网络'],['/bayu','巴渝治水'],['/assistant','治理助手'],['/about','关于项目']];
export function SiteHeader(){const path=usePathname();return <header className="site-header"><Link href="/" className="site-brand"><span className="brand-mark">川</span><span>河流生命档案<small>RIVER LIFE ARCHIVE</small></span></Link><nav aria-label="主导航">{links.map(([href,label])=><Link key={href} href={href} aria-current={path.startsWith(href)?'page':undefined}>{label}</Link>)}</nav><span className="edition">重庆 · 川渝 / 2026</span></header>}
export function SiteFooter(){return <footer className="site-footer"><div><strong>河流生命档案</strong><p>流域治理交互式案例知识平台</p></div><p>以河流为索引，阅读空间、制度与行动。<br/>案例教学与研究 · 非实时业务系统</p><Link href="/about#evidence">资料、方法与影像授权 ↗</Link></footer>}
