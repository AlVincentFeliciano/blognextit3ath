import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <hr></hr>
        <p>[
          Hi, my name is Al Vincent L. Feliciano. My hobbies are playing video games and riding a bicycle. My favorite music are OPM songs. My favorite food is fried chicken. I’m an only child and I have a cute and aggressive dog named Jaba. I really want to gain various experiences in this field. I want to be a Full Stack Developer and many more related tech careers. I expect to learn how this subject can help me grow as an aspiring Full Stack developer. I want topics to be discussed that can make me improve as a student.]</p>
        <hr></hr>
        <p>
       
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
            
      </section>
    </Layout>
  );
}