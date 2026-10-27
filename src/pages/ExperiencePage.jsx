import { Box, Card, CardContent, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';

export default function ExperiencePage() {
  return <PageContainer className="experience-page">
    <div className="experience-intro"><PageHeading eyebrow="Experience" title="Experience" intro="Team delivery, backend development and ongoing product support." />
      <Reveal className="experience-art" aria-hidden="true"><div className="experience-orbit orbit-a"/><div className="experience-orbit orbit-b"/><div className="work-icon work-code"><CodeOutlinedIcon /></div><div className="work-icon work-settings"><SettingsOutlinedIcon /></div><div className="work-icon work-checklist"><ChecklistOutlinedIcon /></div><div className="work-icon work-chat"><ForumOutlinedIcon /></div><div className="work-icon work-team"><GroupsOutlinedIcon /></div><span className="experience-art-dot dot-a"/><span className="experience-art-dot dot-b"/></Reveal>
    </div>
    <Reveal><Box className="timeline experience-timeline"><Card className="experience-card"><CardContent><div className="experience-marker"><span><GroupsOutlinedIcon /></span></div><div className="experience-copy"><Typography variant="h3" component="h2">Team Lead · Blackmoon Pvt. Ltd.</Typography><Typography color="text.secondary" className="role-meta">Kusunti, Lalitpur · 1.5 years to present</Typography><Box component="ul" className="experience-list"><li>Lead a small team and track work in Jira.</li><li>Implement features and REST APIs from approved requirements and designs.</li><li>Write and optimize database queries with validation and error handling.</li><li>Review code through pull requests and address QA and security findings.</li><li>Investigate defects and maintain compatibility with existing services.</li><li>Prepare releases, verify deployments and maintain documentation.</li></Box></div></CardContent></Card></Box></Reveal>
    <Box className="experience-highlights">{[
      [GroupsOutlinedIcon, 'Leadership', 'Lead a small team, plan work and track progress in Jira.'],
      [CodeOutlinedIcon, 'Backend Development', 'Build features and REST APIs, write optimized queries and handle errors.'],
      [SettingsOutlinedIcon, 'Product Support', 'Review code, investigate defects and maintain documentation and releases.']
    ].map(([Icon, title, text]) => <Reveal key={title}><div className="experience-highlight"><span className="experience-highlight-icon"><Icon /></span><div><Typography component="h3">{title}</Typography><Typography color="text.secondary">{text}</Typography></div></div></Reveal>)}</Box>
  </PageContainer>;
}
