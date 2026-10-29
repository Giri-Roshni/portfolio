import { Avatar, Box, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import { ContentSection, PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';
import profilePhoto from '../assests/MyPhoto.png';

const highlights = [
  ['Backend Developer', 'REST APIs, business logic, and database-backed applications'],
  ['Python & Data Science', 'Python data analysis, machine learning, and computer vision projects'],
  ['Team Collaboration', 'Planning and delivery with a small team']
];

export default function AboutPage() {
  return <PageContainer className="about-page">
    <PageHeading eyebrow="About" title="A little about Roshani" intro="Backend Developer | Python & Data Science · Lalitpur, Nepal." />
    <div className="about-intro">
      <Reveal><Box className="about-biography"><Typography variant="h2" component="h2">Professional summary</Typography><Typography color="text.secondary">Backend-focused developer and IT engineer with a Bachelor of Engineering in Information Technology and 1.5 years of professional experience. I build and maintain REST APIs, implement business logic, and work with relational databases using the MERN stack and FastAPI. I also have hands-on experience with data science and machine learning projects. Currently leading a development team at a software startup, with experience in code reviews, debugging, and supporting releases.</Typography></Box></Reveal>
      <Reveal><Box className="about-photo-wrap"><div className="about-photo-orbit"/><Avatar className="about-photo" src={profilePhoto} alt="Er. Roshani Giri" /></Box></Reveal>
    </div>
    <Box className="about-highlights">{highlights.map(([title, text], index) => { const Icon = [CodeOutlinedIcon, QueryStatsOutlinedIcon, GroupsOutlinedIcon][index]; return <Reveal key={title}><Box className="about-highlight"><span className="highlight-icon"><Icon /></span><div><Typography component="strong">{title}</Typography><Typography variant="body2" color="text.secondary">{text}</Typography></div></Box></Reveal>; })}</Box>
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
