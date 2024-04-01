import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import classes from './post-content.module.css';
import Link from 'next/link';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/blog/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
       return (
         <Image
          src={`/images/blog/${post.slug}/${image.src}`}
           alt={image.alt}
           width={600}
           height={300}
         />
       );
     },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/blog/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className?.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <Image src={imagePath} width={800} height={600} alt={post.title} />
      <h1>{post.title}</h1>
      <br/>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      <Link href={`/blog`}>Back to blogs</Link>
    </article>
  );
}

export default PostContent;
