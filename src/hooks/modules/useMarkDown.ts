import { Marked } from 'marked';
import { useRef } from 'react';
import hljs from 'highlight.js';
import { markedHighlight } from 'marked-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export const useMarkDown = () => {
  const marked = new Marked();

  marked.use(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value;
        }
        return hljs.highlightAuto(code).value;
      },
    }),
  );

  const MarkDownRef = useRef<HTMLDivElement>(null);

  const parseMarkDownHtml = async (markdownString: string) => {
    if (MarkDownRef.current) {
      MarkDownRef.current.innerHTML = await marked.parse(markdownString);
    }
  };

  return {
    MarkDownRef,
    parseMarkDownHtml,
  };
};
