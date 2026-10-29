import { Box, Card, CardContent, Chip, Container, Link, Stack, Typography } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import TwoWheelerOutlinedIcon from '@mui/icons-material/TwoWheelerOutlined';

const projectIcons = {
  exam: QuizOutlinedIcon,
  hospital: LocalHospitalOutlinedIcon,
  imageForgery: ImageSearchOutlinedIcon,
  dataScience: QueryStatsOutlinedIcon,
  rideBooking: TwoWheelerOutlinedIcon
};

export function Reveal({ children, className = '', delay = 0, ...props }) {
  return <Box className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...props}>{children}</Box>;
}

export function PageHeading({ eyebrow = 'Er. Roshani Giri · Lalitpur, Nepal', title, intro }) {
  return <Reveal className="page-heading"><Typography className="eyebrow">{eyebrow}</Typography><Typography variant="h1" component="h1">{title}</Typography>{intro && <Typography color="text.secondary" className="page-intro">{intro}</Typography>}</Reveal>;
}

export function ContentSection({ title, children, intro }) {
  return <Box component="section" className="content-section"><Reveal><Typography variant="h2" component="h2" className="section-title">{title}</Typography>{intro && <Typography color="text.secondary" className="section-intro">{intro}</Typography>}</Reveal>{children}</Box>;
}

export function InfoCard({ title, children, delay = 0, className = '' }) {
  return <Reveal delay={delay}><Card className={className}><CardContent>{title && <Typography variant="h3" component="h3">{title}</Typography>}{children}</CardContent></Card></Reveal>;
}

export function SkillCard({ title, chips, icon: Icon, delay = 0 }) {
  return <Reveal delay={delay}><Card className="skill-card"><CardContent><div className="skill-card-heading"><span className="skill-icon">{Icon && <Icon />}</span><Typography variant="h3" component="h2">{title}</Typography></div><Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>{chips.map(chip => <Chip key={chip} label={chip} variant="outlined" />)}</Stack></CardContent></Card></Reveal>;
}

export function ProjectCard({ project, delay = 0 }) {
  const Icon = projectIcons[project.icon] || CodeOutlinedIcon;
  return <Reveal delay={delay}><Card className="project-card"><CardContent>
    <div className="project-card-top"><div className="project-icon"><Icon /></div><div className="project-copy"><Typography variant="h3" component="h3">{project.title}</Typography><Typography color="text.secondary">{project.text}</Typography>{project.impact && <Box component="p" className="project-impact">{project.impact}</Box>}</div></div>
    <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} className="project-chips">{project.chips.map(chip => <Chip key={chip} label={chip} variant="outlined" />)}</Stack>
    <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} className="project-actions">
      {project.live && <Link className="text-action" href={project.live} target="_blank" rel="noopener noreferrer">View Live ↗</Link>}
      {project.code?.map(([label, url]) => <Link key={url} className="text-action" href={url} target="_blank" rel="noopener noreferrer">{label} ↗</Link>)}
      {project.demo && <Typography variant="body2" color="text.secondary">Live demo: {project.demo}</Typography>}
      <span className="project-arrow" aria-hidden="true">→</span>
    </Stack>
  </CardContent></Card></Reveal>;
}

export function PageContainer({ children, className = '' }) {
  return <Container maxWidth="lg" className={`page-container ${className}`}>{children}</Container>;
}
