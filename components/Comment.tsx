import React, { useRef, useEffect } from 'react';
import {utterancesRepo} from '../lib/config'

export const GithubComment: React.FC<{
  isBlogPost: boolean
}> = ({ isBlogPost }) => {
 
  if (! isBlogPost && utterancesRepo==null) {
    return null
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost && utterancesRepo!=null) {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const scriptEl  = document.createElement("script");
      scriptEl.async = true;
      scriptEl.src = "https://utteranc.es/client.js";
      scriptEl.setAttribute("repo", utterancesRepo);
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute("theme", "github-light");
      scriptEl.setAttribute("crossorigin", "anonymous");
      containerRef.current?.appendChild(scriptEl );
    }, [isBlogPost]);
  

  console.log(containerRef)
  return <div className='notion-hr' ><div ref={containerRef} className="utterances"/></div>;
  }

}

export default GithubComment;