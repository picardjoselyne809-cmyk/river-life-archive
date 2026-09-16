import RiverExplorer from '@/components/river-explorer';
export const metadata={title:'河流档案库'};
export default function Rivers(){return <main id="main-content"><header className="page-intro"><p className="kicker">ARCHIVE INDEX / 持续整理的流域知识</p><h1>沿着一条河，开始探索。</h1><p>这里收录重庆与川渝的九条河流，以及三峡库区区域历史档案。按地点或治理问题查找，走进每份档案的事件、主体与证据。</p></header><section className="page-section library-section"><RiverExplorer library/></section></main>}
