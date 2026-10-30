import { useEffect, useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Link, Stack, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigation } from '../data/portfolio.js';
import resumePdf from '../assests/Roshani_resume.pdf';

export const pageHref = (page) => `#/${page}`;

export default function SiteLayout({ page, children }) {
  const [scrolled, setScrolled] = useState(window.scrollY > 8);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const nav = <Stack component="nav" direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 0 : 1} aria-label="Main navigation">
    {navigation.map(([label, slug]) => <Link key={slug} href={pageHref(slug)} underline="none" className={`nav-link ${page === slug ? 'active' : ''}`} aria-current={page === slug ? 'page' : undefined} onClick={() => setMobileOpen(false)}>{label}</Link>)}
    <Button component="a" href={resumePdf} download="Roshani_resume.pdf" variant="outlined" className="resume-button">Download Resume (PDF)</Button>
  </Stack>;

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <AppBar position="sticky" color="inherit" elevation={0} className={scrolled ? 'appbar scrolled' : 'appbar'}>
      <Container maxWidth="lg"><Toolbar disableGutters className="toolbar">
        <Link href={pageHref('home')} underline="none" className="brand">Er. Roshani Giri</Link>
        {isMobile && <IconButton aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileOpen(value => !value)}>{mobileOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>}
        {!isMobile && nav}
      </Toolbar>{isMobile && mobileOpen && <Box className="mobile-nav">{nav}</Box>}</Container>
    </AppBar>
    <Box component="main" id="main" key={page} className="route-main"><div className="route-curtain" />{children}</Box>
    <Box component="footer" className="footer"><Container maxWidth="lg"><span>© {new Date().getFullYear()} Er. Roshani Giri. All rights reserved.</span><Link href={pageHref('home')} onClick={() => { if (page === 'home') window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }}>Back to home ↑</Link></Container></Box>
  </>;
}
