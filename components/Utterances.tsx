import React, { createRef, useLayoutEffect} from 'react';
import {utterancesRepo} from '../lib/config'

const src = 'https://utteranc.es/client.js';

export const Utterances: React.FC<{
  isBlogPost: boolean
}> = ({ isBlogPost }) => {

  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
        src,
        'repo':utterancesRepo,
        'issue-term': 'pathname',
        label: 'comment',
        theme: 'github-light',
        crossOrigin: 'anonymous',
        async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
}, [utterancesRepo]);

  if (! isBlogPost || utterancesRepo==null) {
    return null
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost && utterancesRepo!=null) {
    
 

  return <div className='notion-hr' ><div ref={containerRef} className="utterances"/></div>;
  }

}

export default Utterances;