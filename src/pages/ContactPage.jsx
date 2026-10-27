import { useState } from 'react';
import { Box, Button, Card, CardContent, Link, TextField, Typography } from '@mui/material';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { PageContainer, PageHeading, Reveal } from '../components/PortfolioUI.jsx';

function ContactDetail({ icon, label, children }) {
  return <div className="contact-detail"><span className="contact-detail-icon" aria-hidden="true">{icon}</span><div><Typography className="fact-label">{label}</Typography>{children}</div></div>;
}

export default function ContactPage() {
  const [status, setStatus] = useState('');
  function submitContact(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const senderEmail = data.get('email');
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
    const replyTo = encodeURIComponent(senderEmail);
    const body = encodeURIComponent(`From: ${data.get('name')} (${senderEmail})\n\n${data.get('message')}`);
    setStatus('Opening your email app. Review the message there and press Send.');
    window.location.href = `mailto:simathapa3333@gmail.com?subject=${subject}&reply-to=${replyTo}&body=${body}`;
  }

  return <PageContainer className="contact-page">
    <div className="contact-intro"><PageHeading eyebrow="Contact" title="Let’s connect" intro="For opportunities, technical discussions or a project walkthrough, please get in touch." />
      <Reveal className="contact-art" aria-hidden="true"><div className="contact-art-orbit"/><div className="contact-envelope"><div className="envelope-letter"><i/><i/><i/></div><div className="envelope-flap"/><div className="envelope-front"/></div><span className="contact-art-at">@</span><span className="contact-art-spark">✦</span><span className="contact-art-dot dot-one"/><span className="contact-art-dot dot-two"/></Reveal>
    </div>
    <Box className="contact-layout">
      <Reveal><Card className="contact-details-card"><CardContent><div className="contact-card-heading"><span className="contact-heading-icon"><PersonOutlineOutlinedIcon /></span><div><Typography variant="h3" component="h2">Contact details</Typography><Typography color="text.secondary">Feel free to reach out through any of the following channels.</Typography></div></div>
        <ContactDetail icon={<AlternateEmailOutlinedIcon />} label="Email"><Typography><Link href="mailto:simathapa3333@gmail.com">simathapa3333@gmail.com</Link></Typography></ContactDetail>
        <ContactDetail icon={<PhoneIphoneOutlinedIcon />} label="Phone"><Typography><Link href="tel:+9779704831889">+977-9704831889</Link></Typography></ContactDetail>
        <ContactDetail icon={<LocationOnOutlinedIcon />} label="Location"><Typography color="text.secondary">Lalitpur, Nepal</Typography></ContactDetail>
      </CardContent></Card></Reveal>
      <Reveal><Card className="contact-form-card"><CardContent><div className="contact-card-heading"><span className="contact-heading-icon"><SendOutlinedIcon /></span><div><Typography variant="h3" component="h2">Send a message</Typography><Typography color="text.secondary">Your email app opens with this message addressed to Sima and your address set as Reply-To.</Typography></div></div><Box component="form" onSubmit={submitContact} className="contact-form" aria-label="Contact Sima by email">
        <TextField label="Your name" name="name" placeholder="Enter your name" autoComplete="name" required fullWidth inputProps={{ maxLength: 100 }} />
        <TextField label="Your email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required fullWidth inputProps={{ maxLength: 254 }} />
        <TextField className="message-field" label="Message" name="message" placeholder="Write your message here..." multiline minRows={5} required fullWidth inputProps={{ maxLength: 3000 }} />
        <Button className="contact-submit" type="submit" variant="contained" startIcon={<EmailOutlinedIcon />}>Prepare email</Button>
        <Typography variant="body2" color="text.secondary">Your email app opens with this message addressed to Sima and your address set as Reply-To.</Typography>
        <Typography className="form-status" role="status" aria-live="polite" color="text.secondary">{status}</Typography>
      </Box></CardContent></Card></Reveal>
    </Box>
  </PageContainer>;
}
