import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://thelinkinmybio/preview.jpg'
  };
  return (
    <>
      <Seo page={page} />
      <ThemeToggleButton />
      <WebLinks />
    </>
  )
}
