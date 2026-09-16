import type {Metadata} from 'next';
import {SiteHeader,SiteFooter} from '@/components/site-shell';
import './globals.css';
import './archive.css';
export const metadata:Metadata={title:{default:'河流生命档案——流域治理交互式案例知识平台',template:'%s · 河流生命档案'},description:'以河流为索引，探索重庆与川渝流域的空间、时间、主体、制度、事件和数字治理过程。',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><a className="skip-link" href="#main-content">跳转到主要内容</a><SiteHeader/>{children}<SiteFooter/></body></html>}
