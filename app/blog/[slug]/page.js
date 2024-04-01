import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React, { Fragment } from 'react'
import fs from 'fs'
import matter from "gray-matter"
import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from '@/lib/posts-util';
import Head from "next/head"
import FrontEndLayout from "@/components/layouts/FrontEndLayout"





export default function BlogPage(props) {

    const slug = props.params.slug
    const post = getPostData(slug)

    return (
        <FrontEndLayout>
        <Head>
          <title>{post.title}</title>
          <meta name='description' content={post.excerpt} />
        </Head>
        <main>
        <section id="blog" className="blog">
    <div className="container" data-aos="fade-up">
        <PostContent post={post} />
        </div>
        </section>
        </main>
      </FrontEndLayout>
    )
}