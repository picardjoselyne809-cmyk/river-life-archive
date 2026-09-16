import Link from 'next/link';
export default function NotFound(){return <main id="main-content" className="content-body"><p className="kicker">404 / 档案未找到</p><h1>这份档案尚未收录。</h1><p>可以返回河流档案库，从河流名称、地区或治理问题继续查找。</p><Link href="/rivers" className="ink-button">进入河流档案库 →</Link></main>}
