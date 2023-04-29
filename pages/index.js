import Head from 'next/head';

import FeaturedProjects from '../components/featured-projects';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const projects = [
  {
    id: 1,
    title: 'Bible Search',
    description: 'What does the Bible say about ...? This is a semantic search tool to surface relevant verses and chapters in the Bible for a topic of interest using embeddings and Question-Answering models. Yes, this was made before ChatGPT exploded; I worked on it sparingly on-and-off since 2020. I\'m hoping to get around to looking for ways to improve this with ChatGPT\'s API soon. But if anything, this should run much faster, and displays whole chapters for better context!',
    image: "/images/bible_search.PNG",
    githubUrl: 'https://github.com/alronlam/bible-search',
    demoUrl: 'https://huggingface.co/spaces/alronlam/bible-search',
    tags: ["NLP"]
  },
  {
    id: 2,
    title: 'UNICEF AI4D Poverty Mapping for SEA',
    description: 'Relative wealth estimates for 9 SEA countries. This is similar to <a href="https://beta.povertymaps.net" target="_blank">Meta\'s Realtive Wealth Index estimates</a>, but utilizing only open datasets and low-cost Random Forest models. We made this as a baseline work for SEA with an emphasis on replicability to spur further research in the region and beyond.',
    image: "/images/sea_poverty_mapping.PNG",
    githubUrl: 'https://github.com/thinkingmachines/unicef-ai4d-poverty-mapping',
    demoUrl: 'https://studio.foursquare.com/public/590c4ab2-b855-463a-90dd-9917b97b8b57',
    tags: ["Geospatial"]
  },
  {
    id: 2,
    title: 'GeoWrangler',
    description: 'Python library to cut down dev time for geo-data processing and feature engineering so Data Scientists can focus on analysis or ML modelling. We made this to support common geo-data wrangling steps in our client projects, including our SEA Poverty Mapping work with UNICEF.',
    image: "/images/geowrangler.PNG",
    githubUrl: 'https://github.com/thinkingmachines/geowrangler',
    demoUrl: 'https://geowrangler.thinkingmachin.es/overview.poverty_mapping_demo.html',
    tags: ["Geospatial"]
  },
  {
    id: 2,
    title: 'Less Than Three (<3)',
    description: 'Javascript game made for a 2013 Valentine\'s Day Hackathon. Your objective is to find the one for you within the time limit given clues to what they\'re wearing. Once you find them, you have to answer correctly to pass the "compatibility" test. Every character is dynamically generated for each new run of the game. Warning: The game is unpolished as this was made in ~24 hours and was our team\'s first hackathon. No game engine was used; this was pure HTML/CSS/Javascript!',
    image: "/images/less_than_three.png",
    githubUrl: 'https://github.com/alronlam/less-than-three',
    demoUrl: 'https://alronlam.github.io/less-than-three/',
    tags: ["Game"]
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my portfolio website! I am a <b>Machine Learning Consultant</b> and <b>Engineering Manager for the Geospatial Team</b> at <a href="https://thinkingmachin.es/" target="_blank" rel="noopener noreferrer">Thinking Machines Data Science</a> with a passion for cutting-edge technologies and their real-world applications.
        </p>
        <p>
          My expertise lies in Machine Learning, Natural Language Processing, and Geospatial Data Science, which I have applied in various projects throughout my career. In addition, I enjoy exploring the world of game development in my spare time.
        </p>
        <p>
          Most of my works in corporate are understandably confidential, so I created this website to share side-projects that are fit for public consumption. I hope you enjoy looking through them as much as I enjoyed creating them.
        </p>
        ---
        <p>
          <i>Fun fact: I used ChatGPT in creating this Next.js portfolio website, despite being more of a backend dev in my career and using this framework for the first time. As a practitioner who's worked on NLP applications since 2017, it's still mind-blowing!</i> 🤯
        </p>
      </section>
      <section>
        <FeaturedProjects projects={projects} />
      </section>


    </Layout >
  );
}