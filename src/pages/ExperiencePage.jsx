import { Box, Card, CardContent, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import { PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';

export default function ExperiencePage() {
  return <PageContainer className="experience-page">
    <div className="experience-intro"><PageHeading eyebrow="Experience" title="Experience" intro="Backend development, AI and machine learning, and collaborative team delivery." />
      <Reveal className="experience-art" aria-hidden="true"><div className="experience-orbit orbit-a"/><div className="experience-orbit orbit-b"/><div className="work-icon work-code"><CodeOutlinedIcon /></div><div className="work-icon work-settings"><SettingsOutlinedIcon /></div><div className="work-icon work-checklist"><ChecklistOutlinedIcon /></div><div className="work-icon work-chat"><ForumOutlinedIcon /></div><div className="work-icon work-team"><GroupsOutlinedIcon /></div><span className="experience-art-dot dot-a"/><span className="experience-art-dot dot-b"/></Reveal>
    </div>
    <Reveal><Box className="timeline experience-timeline"><Card className="experience-card"><CardContent><div className="experience-marker"><span><GroupsOutlinedIcon /></span></div><div className="experience-copy"><Typography variant="h3" component="h2">Backend Developer at Blackmoon Pvt. Ltd.</Typography><Typography color="text.secondary" className="role-meta">Kusunti, Lalitpur · 1.5 years to present</Typography><Box component="ul" className="experience-list"><li>Develop and maintain backend features and REST APIs based on approved requirements and designs.</li><li>Implement business logic and database queries with validation and error handling.</li><li>Collaborate with teammates to plan work, share progress, and coordinate delivery using Jira.</li><li>Review code through pull requests and address QA and security findings.</li><li>Investigate defects, maintain compatibility with existing services, and support releases.</li><li>Apply Python data-science and AI/ML fundamentals in academic projects, including data preparation and model exploration.</li></Box></div></CardContent></Card></Box></Reveal>
    <Box className="experience-highlights">{[
      [CodeOutlinedIcon, 'Backend Development', 'Build and maintain REST APIs, implement business logic, and work with databases.'],
      [QueryStatsOutlinedIcon, 'AI/ML & Data Science', 'Use Python for data preparation and machine-learning exploration in academic projects.'],
      [GroupsOutlinedIcon, 'Team Collaboration', 'Plan work, communicate progress, review code, and coordinate delivery with the team.']
    ].map(([Icon, title, text]) => <Reveal key={title}><div className="experience-highlight"><span className="experience-highlight-icon"><Icon /></span><div><Typography component="h3">{title}</Typography><Typography color="text.secondary">{text}</Typography></div></div></Reveal>)}</Box>
  </PageContainer>;
}
