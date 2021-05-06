import Link from 'next/link'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData, Post } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

interface PostProps {
    postData: Post;
}

export default function SinglePost({ postData }: PostProps) {
    return (
        <Layout home={false}>
            <Head>
                <title>{ postData.title }</title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{ postData.title }</h1>
                
                <div className={utilStyles.lightText}>
                    <em><Date dateString={ postData.date } /></em>
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </article>
        </Layout>
    )
}
