import { Box, Card, CardContent, Divider, Link, Stack, Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';
import { certificates } from '../data/portfolio.js';

function EducationFact({ icon, label, children }) {
  return <Stack direction="row" spacing={1.5} className="education-fact" alignItems="flex-start"><Box className="education-fact-icon">{icon}</Box><Box><Typography className="fact-label">{label}</Typography><Typography color="text.secondary">{children}</Typography></Box></Stack>;
}

export default function EducationPage() {
  return <PageContainer className="education-page">
    <Box className="education-intro">
      <PageHeading eyebrow="Education" title={<>Academic background<br className="desktop-break" /> &amp; achievements</>} intro="My academic journey gave me a foundation in technology and problem-solving, which I continue to build through hands-on work and professional learning." />
      <Reveal className="education-illustration" aria-hidden="true"><div className="illustration-orbit orbit-one"/><div className="illustration-orbit orbit-two"/><div className="illustration-books"><span/><span/><span/></div><div className="illustration-cap"><SchoolOutlinedIcon /></div><div className="illustration-spark">✦</div></Reveal>
    </Box>

    <Reveal>
      <Card className="education-card"><CardContent className="education-card-content">
        <div className="education-main">
          <div className="education-track"><div className="education-track-icon"><SchoolOutlinedIcon /></div><span/></div>
          <div className="education-details">
            <Typography variant="h3" component="h2" className="degree-title">Bachelor of Engineering in Information Technology</Typography>
            <EducationFact icon={<ApartmentOutlinedIcon />} label="Institution">Everest Engineering College, Lalitpur · Pokhara University</EducationFact>
            <EducationFact icon={<CalendarMonthOutlinedIcon />} label="Study period">2022–2026</EducationFact>
            <Divider className="education-divider" />
            <Typography variant="h3" component="h3" className="certificate-heading"><WorkspacePremiumOutlinedIcon /> Certificates</Typography>
            <Box className="certificate-grid">{certificates.map(([name, url]) => <Link className="certificate-link" key={url} href={url} target="_blank" rel="noopener noreferrer"><span className="certificate-link-icon">↗</span><span>{name}<small>Data Science</small></span></Link>)}</Box>
          </div>
        </div>
        <aside className="education-summary" aria-label="Degree summary">
          <EducationFact icon={<SchoolOutlinedIcon />} label="Degree">Bachelor of Engineering in Information Technology</EducationFact>
          <Divider />
          <EducationFact icon={<ApartmentOutlinedIcon />} label="College / University">Everest Engineering College<br/>Pokhara University</EducationFact>
          <Divider />
          <EducationFact icon={<CalendarMonthOutlinedIcon />} label="Years">2022–2026</EducationFact>
        </aside>
      </CardContent></Card>
    </Reveal>
  </PageContainer>;
}
