import Head from 'next/head'

import Layout from '../components/layout'
import Demo from '../components/demo';

export default function Native() {
    return (
        <Layout home>
            <Head>
                <title>Native Sample</title>
            </Head>

            <Demo />
        </Layout>
    )
}
