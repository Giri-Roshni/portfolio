export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'],
  ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact']
];

export const skillGroups = [
  ['Programming', ['JavaScript (ES6+)', 'Node.js', 'Python']],
  ['Backend & API Development', ['REST APIs', 'Express.js', 'FastAPI', 'JSON', 'Postman']],
  ['Frontend Development', ['React', 'Material UI (MUI)', 'HTML', 'CSS']],
  ['Databases', ['MySQL', 'MariaDB','PostgreSQL']],
  ['Data Science', ['Pandas', 'NumPy', 'Matplotlib']],
  ['AI & Machine Learning', ['Scikit-learn', 'OpenCV', 'SIFT', 'DBSCAN', 'Classification']],
  ['Testing and Debugging', ['Debugging', 'Root-cause analysis','Unit and integration testing']],
  ['Tools', ['Git', 'GitHub', 'Jira', 'Agile', 'Vite']], ['Cloud', ['Firebase', 'Vercel']], ['Design', ['Figma', 'Canva']]
];

export const projects = [
  { title: 'Shajyatri', icon: 'rideBooking', text: 'A ride-booking and vehicle-rental app that lets users book rides or rent vehicles, inspired by on-demand mobility platforms such as Pathao and inDrive.', impact: 'Brings ride booking and vehicle rental together in one app.', chips: ['Ride Booking', 'Vehicle Rental', 'On-Demand Mobility'] },
  { title: 'Agnikunda', icon: 'exam', text: 'An online examination platform built with a React interface and Node.js/Express backend.', impact: 'Full-stack project using REST APIs and MySQL.', chips: ['React', 'Node.js', 'Express.js', 'MySQL'], demo: 'Available on request' },
{
  title: 'Hospital Management System',
  icon: 'hospital',
  text: 'A comprehensive system for patient registration, OPD/IPD visits, appointments, consultations, admissions, billing, pharmacy, laboratory services, and medical records.',
  impact: 'Developed and maintained backend REST APIs, implemented business logic, integrated MySQL databases, and resolved bugs to improve system reliability.',
  chips: ['Node.js', 'Express.js', 'JavaScript', 'MySQL', 'REST APIs'],
  live: 'Beta version'
}, 
  {
    title: 'Copy-Move Image Forgery Detection',
    icon: 'imageForgery',
    text: 'An image forgery detection project that identifies duplicated regions within images using computer vision techniques.',
    impact: 'Explored image processing and feature matching with Python and OpenCV.',
    chips: ['Python', 'OpenCV', 'SIFT', 'DBSCAN', 'NumPy'],
    link: 
    'https://github.com/Giri-Roshni/cmfd_miniproject'
    
  },  
   {
    title: 'Titanic Survival Prediction',
    icon: 'dataScience',
    text: 'Machine learning project that predicts passenger survival using demographic and travel-related data.',
    impact: 'Prepared and explored data, handled missing values, and trained classification models.',
    chips: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    link:'https://github.com/Giri-Roshni/Titanic_survival_prediction'
   }
];

export const evidence = [
  ['API Development', 'REST API implementation with Express.js and FastAPI.'], ['Programming', 'JavaScript, Node.js and Python experience.'],
  ['Integration', 'API development and integration work; add a verified example if available.'], ['Unit Testing', 'Unit and integration testing experience.'],
  ['Debugging', 'Production defect investigation and root-cause analysis.'], ['Git', 'GitHub workflow and pull request reviews.'],
  ["Bachelor of Engineering in Information Technology", 'Everest Engineering College.']
];

export const certificates = [
  ['Data science', 'https://www.mindrisers.com.np/certificate/validate/MR-82015-DS'],
  
];
