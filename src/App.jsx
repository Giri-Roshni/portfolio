import { useEffect, useState } from 'react';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const routes = { home: HomePage, about: AboutPage, skills: SkillsPage, experience: ExperiencePage, projects: ProjectsPage, education: EducationPage, contact: ContactPage };
function currentPage() {
  const candidate = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return routes[candidate] ? candidate : 'home';
}

export default function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const update = () => setPage(currentPage());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    const nodes = document.querySelectorAll('.reveal');
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .1 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [page]);
  const Page = routes[page];
  return <SiteLayout page={page}><Page key={page} /></SiteLayout>;
}
