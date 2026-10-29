import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Container, Link, Stack, Typography } from '@mui/material';
import { PageContainer, PageHeading, ProjectCard, Reveal } from '../components/PortfolioUI.jsx';
import { projects } from '../data/portfolio.js';
import { pageHref } from '../components/SiteLayout.jsx';
import profilePhoto from '../assests/MyPhoto.png';

function Stat({ value, label, count = false, suffix = '' }) {
  const [shown, setShown] = useState(count ? 0 : value);
  useEffect(() => {
    if (!count) return;
    const node = document.getElementById('home-stats');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (reduced) setShown(value);
      else {
        const start = performance.now();
        const frame = now => { const p = Math.min((now - start) / 750, 1); setShown(value * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(frame); };
        requestAnimationFrame(frame);
      }
      observer.disconnect();
    }, { threshold: .5 });
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [count, value]);
  const formatted = Number.isInteger(value) ? Math.round(shown) : Number(shown).toFixed(1);
  return <Card className="stat-card"><CardContent><Typography variant="h4" component="strong">{count ? `${formatted}${suffix}` : shown}</Typography><Typography color="text.secondary">{label}</Typography></CardContent></Card>;
}

export default function HomePage() {
  return <>
    <Container maxWidth="lg"><Box className="hero">
      <Reveal className="hero-copy"><Typography className="eyebrow">Lalitpur, Nepal</Typography><Typography variant="h1" component="h1">Er. Roshani Giri</Typography>
        <Typography variant="h5" component="h2" className="hero-title">Backend Developer | Python &amp; Data Science</Typography>
        <Typography className="role-line" aria-label="Backend-developer">Building reliable APIs and data-informed applications</Typography>
        <Typography color="text.secondary" className="hero-description">Backend-focused developer with 1.5 years of experience building REST APIs, implementing business logic, and working with relational databases. I also build full-stack applications and explore data science and machine learning.</Typography>
        <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap" className="hero-actions"><Button component="a" href={pageHref('projects')} variant="contained">Explore Projects</Button><Button component="a" href={pageHref('contact')} variant="outlined">Contact Me</Button></Stack>
        <Stack direction="row" spacing={2} className="social-links"><Link href="https://www.linkedin.com/in/roshni-giri-1467092a7/" target="_blank" rel="noopener noreferrer">GitHub ↗</Link><Link href="https://www.linkedin.com/in/roshni-giri-1467092a7/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</Link></Stack>
      </Reveal>
      <Reveal className="avatar-wrap"><div className="avatar-halo" /><Avatar className="hero-avatar" src={profilePhoto} alt="Er. Roshani Giri" imgProps={{ loading: 'eager', fetchPriority: 'high' }} /></Reveal>
    </Box></Container>
    <Container maxWidth="lg" id="home-stats"><Box className="stats-grid"><Stat value={1.5} count suffix="+" label="years of experience" /><Stat value={3} count suffix="+" label="client projects delivered" /><Stat value={3} count suffix="+" label="academic projects" /><Stat value="Backend" label="development focus" /></Box></Container>
    <PageContainer><section className="home-feature"><PageHeading eyebrow="A little about me" title="Engineering with care." intro="I turn requirements into reliable features, maintainable APIs and clear delivery practices." /><Stack direction="row" useFlexGap flexWrap="wrap" gap={1}><Button component="a" href={pageHref('about')} variant="outlined">More about Roshani</Button><Button component="a" href={pageHref('experience')} variant="text">View experience →</Button></Stack></section>
      <section className="home-projects"><div className="row-heading"><Typography variant="h2" component="h2">Selected work</Typography><Link href={pageHref('projects')}>All projects →</Link></div><div className="projects-grid">{projects.slice(0, 2).map((project, i) => <ProjectCard key={project.title} project={project} index={i} delay={i * 80} />)}</div></section>
    </PageContainer>
  </>;
}
