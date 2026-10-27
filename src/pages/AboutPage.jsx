import { Avatar, Box, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { ContentSection, PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';
import profilePhoto from '../assests/MyPhoto.png';

const highlights = [
  ['MERN + FastAPI', 'Web applications and REST APIs'],
  ['Team Lead', 'Planning and delivery with a small team'],
  ['Quality practices', 'Code reviews, debugging and documentation']
];

export default function AboutPage() {
  return <PageContainer className="about-page">
    <PageHeading eyebrow="About" title="A little about Sima" intro="Full-Stack (MERN) Developer and Team Lead from Lalitpur, Nepal." />
    <div className="about-intro">
      <Reveal><Box className="about-biography"><Typography variant="h2" component="h2">Professional summary</Typography><Typography color="text.secondary">IT engineer with a Bachelor's in IT Engineering and 1.5 years of professional experience building web applications and REST APIs with the MERN stack and FastAPI. Currently leading a development team at a software startup. Experienced in turning requirements into working features, writing database queries with validation and error handling, taking part in code reviews, fixing production defects and maintaining documentation.</Typography></Box></Reveal>
      <Reveal><Box className="about-photo-wrap"><div className="about-photo-orbit"/><Avatar className="about-photo" src={profilePhoto} alt="Er. Sima Thapa" /></Box></Reveal>
    </div>
    <Box className="about-highlights">{highlights.map(([title, text], index) => { const Icon = [CodeOutlinedIcon, GroupsOutlinedIcon, VerifiedUserOutlinedIcon][index]; return <Reveal key={title}><Box className="about-highlight"><span className="highlight-icon"><Icon /></span><div><Typography component="strong">{title}</Typography><Typography variant="body2" color="text.secondary">{text}</Typography></div></Box></Reveal>; })}</Box>
    <ContentSection title="How I work" intro="A practical approach from understanding the requirement through supporting a release.">
      <Box className="how-work-grid">
        {[
          [AssignmentTurnedInOutlinedIcon, 'Plan from requirements', 'Turn approved requirements and designs into working features, while tracking team work in Jira.'],
          [BuildOutlinedIcon, 'Build and review', 'Develop APIs and database queries with validation and error handling, then review code and address QA findings.'],
          [PublishedWithChangesOutlinedIcon, 'Release and support', 'Verify deployments, investigate production defects, maintain compatibility and keep documentation current.']
        ].map(([Icon, title, text]) => <Reveal key={title}><div className="how-work-card"><span className="how-work-icon"><Icon /></span><Typography component="h3">{title}</Typography><Typography color="text.secondary">{text}</Typography></div></Reveal>)}
      </Box>
    </ContentSection>
  </PageContainer>;
}
