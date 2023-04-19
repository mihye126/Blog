import React, { useRef, useEffect } from 'react';
import {utterancesRepo} from '../lib/config'

const src = 'https://utteranc.es/client.js';


export const Utterances: React.FC<{
  hasCollectionView: boolean
}> = ({ hasCollectionView }) => {
 
  const commentsEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = src;
    scriptEl.setAttribute("repo", utterancesRepo);
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "preferred-color-scheme");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  if (hasCollectionView || utterancesRepo==null) {
    return null
  }


  // only display comments and page actions on blog post pages
  else{
      return <div className='notion-hr' ><div ref={commentsEl} className="utterances"/></div>;
  }

}

export default Utterances;