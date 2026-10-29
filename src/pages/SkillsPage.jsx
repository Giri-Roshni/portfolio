import { Box } from '@mui/material';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { PageContainer, PageHeading, SkillCard } from '../components/PortfolioUI.jsx';
import { skillGroups } from '../data/portfolio.js';

const categoryIcons = [CodeOutlinedIcon, ApiOutlinedIcon, WebOutlinedIcon, StorageOutlinedIcon, QueryStatsOutlinedIcon, PsychologyOutlinedIcon, BugReportOutlinedIcon, AccountTreeOutlinedIcon, CloudOutlinedIcon, DrawOutlinedIcon];

export default function SkillsPage() {
  return <PageContainer className="skills-page"><PageHeading eyebrow="Technical toolkit" title="Skills" intro="Technologies and tools I use to build, integrate, test and support web applications." /><Box className="skills-grid">{skillGroups.map(([title, chips], index) => <SkillCard key={title} title={title} chips={chips} icon={categoryIcons[index]} delay={(index % 2) * 70} />)}</Box></PageContainer>;
}
