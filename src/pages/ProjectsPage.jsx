import { Box, Button, Stack, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { PageContainer, PageHeading, ProjectCard, Reveal } from '../components/PortfolioUI.jsx';
import { projects } from '../data/portfolio.js';
import { pageHref } from '../components/SiteLayout.jsx';

export default function ProjectsPage() {
  return <PageContainer className="projects-page">
    <Box className="projects-intro"><PageHeading eyebrow="My work" title="Projects" intro="Selected work across business applications, public information and online services. These projects reflect my experience building web applications and APIs." />
      <Reveal className="projects-art" aria-hidden="true"><div className="projects-art-orbit"/><div className="project-window"><div className="window-dots"><i/><i/><i/></div><CodeOutlinedIcon /></div><div className="art-gear"><SettingsOutlinedIcon /></div><div className="art-bulb"><LightbulbOutlinedIcon /></div><span className="art-spark">✦</span></Reveal>
    </Box>
    <Box className="projects-grid">{projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} delay={i * 65} />)}
      <Reveal><Box className="projects-cta"><LightbulbOutlinedIcon className="cta-bulb"/><div><Typography variant="h3" component="h2">More projects</Typography><Typography color="text.secondary">Ask me about my work or request an architecture walkthrough.</Typography><Button component="a" href={pageHref('contact')} variant="outlined" startIcon={<MailOutlineIcon />}>Get in touch</Button></div><span className="cta-orbit" aria-hidden="true">↗</span></Box></Reveal>
    </Box>
    <Reveal><Typography className="confidential-note">Client work is shown at a high level because of confidentiality agreements. Architecture walkthroughs are available on request.</Typography></Reveal>
  </PageContainer>;
}
