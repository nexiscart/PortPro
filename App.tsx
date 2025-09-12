import React, { useState } from 'react';
import Capabilities from './Capabilities';
import About from './About';
import ContactCard from './ContactCard';

// --- DATA CONSTANTS ---

const personalInfo = {
  name: "Dante Civella",
  location: "Kansas City, MO",
  phone: "816-519-5696",
  emails: ["Dantec@proroofingkc.com"],
};

const experienceData = [
  {
    company: 'Pro Roofing KC',
    role: 'Department Manager',
    division: 'Commercial Division',
    description: 'Responsible for managing the entire commercial division, overseeing projects, teams, and client relations to ensure successful project delivery.'
  },
  {
    company: 'C&M Construction',
    role: 'Owner',
    description: 'Managed all aspects of the business, including commercial sub-contracting and residential projects. Specialized in full roof installations, complex leak investigations, and comprehensive repairs.'
  },
  {
    company: 'Kaw Roofing and Sheet Metal',
    role: 'Service Department Foreman',
    description: 'Led a crew in day-to-day maintenance, repairs, patch work, and leak inspections. Promoted to Service Foreman, managing crew assignments and job execution independently.'
  },
  {
    company: 'Kaw Roofing and Sheet Metal',
    role: 'Commercial Roofer (Labor)',
    description: 'Key member of a crew performing full roof tear-offs and lay-ups with various materials including TPO, PVC, EPDM, Built-up, Hot Tile, Metal, and Gravel Ballistic systems.'
  },
    {
    company: 'Pro Roofing KC',
    role: 'Sales Department',
    description: 'Handled insurance claims, managed job installations from start to finish, conducted final walk-throughs, and ensured high levels of customer service and satisfaction.'
  },
];

const educationData = [
    {
        institution: 'United Workers, Roofers and Waterproofers',
        program: '4 Year Apprenticeship',
        description: 'Completed a comprehensive apprenticeship covering all specifications for diverse roofing systems from major manufacturers. Gained expertise in detailed work, various draining systems, and ensuring all installations meet rigorous industry standards.'
    },
    {
        institution: 'Industry Experience',
        program: 'Roofing Since 2017',
        description: 'Bringing years of practical, hands-on experience from the field to management, ensuring a deep understanding of every phase of a roofing project.'
    }
];

const skillsData = [
    "Commercial Roofing", "Carpentry Work", "Siding (Vinyl, Stucco, Metal, Wood)",
    "Pole Barns/Metal Buildings", "Decks and Fences", "Painting"
];

const certificationsData = [
    "Forklift Certified", "Skid Steer Certified", "Telehandler Certified",
    "OSHA 30 Certified", "Commercial Waterproofer Certified", "Asbestos Certified",
    "GAF Commercial Contractor", "IKO Commercial Contractor", "JM Commercial Contractor",
    "Gaco Certified Installer"
];

const projectsData = [
    "Plaza Timebuilding", "Plaza Shake Shack", "Plaza McCormick and Smiths", "Plaza Zoes Kitchen",
    "Plaza Pot Bellys", "Plaza P.F. Changs", "Kansas City Star", "Burns and McDonalds",
    "Courtyard Inn", "Quality Suites", "Holiday Express", "Liberty High School",
    "Blue Valley School District (42 Schools)", "Blue Valley High School", "Blue Valley North High School",
    "Blue Valley Northwest", "Mid Cont Library Grandview", "Mid Cont Library Parkville",
    "Security Bank Lee Summit", "Ascension Catholic Church", "Spira Care", "Phillips 66 Gas Station",
    "Quick Way Gas Station", "Security Bank Legends", "Chase Bank", "Academy Bank",
    "Shawnee Mission High School", "Shawnee Mission Northwest High School", "Hawthorne Elementary School",
    "Parkville High School", "Federal Building Downtown", "AT&T Building", "Union Station",
    "St. Frances Church", "KU Warehouse", "KU Library", "Penn Valley", "Cummings Dispatch",
    "Santa Fe Elementary", "Holy Trinity", "Prairie Star Elementary", "Prairie Star Middle School",
    "Police Athletic League"
];

const aboutData = {
    trainings: [
        "Trained through Firestone for TPO, EPDM, and Modified Bitumen systems.",
        "Trained through Versco for TPO systems.",
        "Trained through Carlisle for TPO and EPDM systems.",
        "Trained through Derbigum for Modified Bitumen systems.",
        "Asbestos Certified through E3 & OSHA.",
        "Trained on OSHA Crane Signals.",
        "Certa Trained by the NRCA."
    ],
    philosophy: "My main focus is safety, quality, then quantity. I do not know everything, always looking for ways to learn and get better."
};

// --- SVG ICON COMPONENTS ---

const IconProps = {
  className: "w-5 h-5"
};

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M7.5 5.25A2.25 2.25 0 019.75 3h4.5a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0v-.75z" clipRule="evenodd" /><path d="M2.25 9.75A2.25 2.25 0 014.5 7.5h15A2.25 2.25 0 0121.75 9.75v7.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25v-7.5zm4.5 3a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" /></svg>
);

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11.7 2.018a.75.75 0 01.6 0l6.25 3.124a.75.75 0 01.428.654v5.242a.75.75 0 01-.22.53l-6.25 6.25a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 01-.22-.53V5.796a.75.75 0 01.428-.654L11.7 2.018zM12 4.21L6.75 6.832v3.746L12 15.79l5.25-5.212V6.832L12 4.21z" /><path d="M5.313 14.195l.437.437a.75.75 0 01-1.06 1.06l-.437-.437a.75.75 0 011.06-1.06zM18.687 14.195a.75.75 0 011.06 1.06l-.437.437a.75.75 0 01-1.06-1.06l.437-.437zM12 21.75a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V22.5a.75.75 0 01.75-.75z" /></svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" /><path d="M5.26 17.242a.75.75 0 10-1.06-1.06 7.5 7.5 0 00-1.95 5.454.75.75 0 00.75.75h3a.75.75 0 100-1.5h-1.736a6 6 0 011.59-4.598z" /></svg>
);

const BuildingOfficeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM7.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM10.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM15 2.25h-1.5a.75.75 0 000 1.5h1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 000-1.5H15zM19.5 2.25h-1.5a.75.75 0 000 1.5h1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 000-1.5H19.5z" clipRule="evenodd" /></svg>
);

const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" /></svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.552a.75.75 0 001.256-.279l.545-1.217a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 10.75V4.5z" clipRule="evenodd" /></svg>
);
const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
);
const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.242 12.082 12.082 0 00-4.162-13.045c-1.631-1.304-3.636-2.156-5.828-2.156s-4.2.852-5.828 2.156A12.082 12.082 0 002.25 18.108a16.975 16.975 0 005.16 4.242l.07.04.028.016.004.002a.759.759 0 00.723 0l.004-.002.028-.015.071-.041zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
);


// --- UI COMPONENTS ---

const Header: React.FC = () => (
  <header className="mb-12">
    <div className="flex justify-between items-start">
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">{personalInfo.name}</h1>
            <h2 className="mt-2 text-xl font-medium text-sky-400">Commercial Roofing & Construction Professional</h2>
        </div>
        <div className="text-right text-sm text-slate-400 space-y-1">
            <div className="flex items-center justify-end gap-2">
                <span>{personalInfo.location}</span>
                <LocationIcon className="w-4 h-4 text-slate-500" />
            </div>
            <div className="flex items-center justify-end gap-2">
                 <a href={`tel:${personalInfo.phone}`} className="hover:text-sky-300 transition-colors">{personalInfo.phone}</a>
                <PhoneIcon className="w-4 h-4 text-slate-500" />
            </div>
            {personalInfo.emails.map(email => (
            <div key={email} className="flex items-center justify-end gap-2">
                <a href={`mailto:${email}`} className="hover:text-sky-300 transition-colors">{email}</a>
                <MailIcon className="w-4 h-4 text-slate-500" />
            </div>
            ))}
        </div>
    </div>
  </header>
);

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <section className="mb-14">
    <h3 className="flex items-center gap-3 text-xl font-bold text-slate-200 mb-6 border-b border-zinc-700 pb-3">
      <span className="text-sky-400">{icon}</span>
      {title}
    </h3>
    {children}
  </section>
);

const ResumeAbout: React.FC = () => (
  <Section title="Specialized Training & Philosophy" icon={<UserCircleIcon {...IconProps} />}>
      <div className="space-y-4">
          <ul className="space-y-2 list-disc list-inside text-slate-300 columns-2">
              {aboutData.trainings.map((training, index) => <li key={index}>{training}</li>)}
          </ul>
          <blockquote className="border-l-4 border-sky-500 pl-4 py-2 bg-zinc-800/50 italic text-slate-200">
              {aboutData.philosophy}
          </blockquote>
      </div>
  </Section>
);

const Experience: React.FC = () => (
    <Section title="Professional Experience" icon={<BriefcaseIcon {...IconProps} />}>
        <div className="relative border-l-2 border-zinc-700 pl-8 space-y-10">
            {experienceData.map((job, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[40px] top-1 h-3 w-3 rounded-full bg-zinc-600 border-2 border-zinc-900 ring-4 ring-zinc-900"></div>
                    <h4 className="text-lg font-semibold text-slate-100">{job.role}</h4>
                    <p className="text-sm text-sky-400 font-medium">{job.company} {job.division && ` - ${job.division}`}</p>
                    <p className="mt-2 text-slate-400 text-sm leading-6">{job.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Education: React.FC = () => (
    <Section title="Education & Apprenticeship" icon={<AcademicCapIcon {...IconProps} />}>
         <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md space-y-6">
            {educationData.map((edu, index) => (
                <div key={index} className={index < educationData.length - 1 ? "border-b border-zinc-700 pb-6" : ""}>
                    <h4 className="text-lg font-semibold text-slate-100">{edu.program}</h4>
                    <p className="text-sm text-sky-400 mb-2 font-medium">{edu.institution}</p>
                    <p className="text-slate-400 text-sm leading-6">{edu.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Skills: React.FC = () => (
  <Section title="Skills & Certifications" icon={<SparklesIcon {...IconProps} />}>
    <div>
        <h4 className="text-base font-semibold text-slate-200 mb-3">Core Skills</h4>
        <div className="flex flex-wrap gap-2">
            {skillsData.map(skill => (
                <span key={skill} className="bg-zinc-700 text-slate-200 px-3 py-1 rounded-md text-xs font-medium">{skill}</span>
            ))}
        </div>
    </div>
    <div className="mt-6">
        <h4 className="text-base font-semibold text-slate-200 mb-3">Certifications</h4>
        <div className="flex flex-wrap gap-2">
            {certificationsData.map(cert => (
                <span key={cert} className="bg-sky-900/80 text-sky-300 px-3 py-1 rounded-md text-xs font-medium">{cert}</span>
            ))}
        </div>
    </div>
  </Section>
);

const Projects: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 15);

    return (
        <Section title="Notable Buildings & Projects" icon={<BuildingOfficeIcon {...IconProps} />}>
            <div className="columns-2 md:columns-3 gap-x-6 text-slate-400 text-sm">
                {visibleProjects.map((project, index) => (
                    <p key={index} className="mb-1 break-inside-avoid">{project}</p>
                ))}
            </div>
            {projectsData.length > 15 && (
                 <div className="text-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-zinc-700 text-slate-200 font-semibold py-2 px-6 rounded-md hover:bg-zinc-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                 </div>
            )}
        </Section>
    );
};

const ResumeContent: React.FC = () => (
    <>
        <ResumeAbout />
        <Experience />
        <Education />
        <Skills />
        <Projects />
    </>
);


// --- MAIN APP COMPONENT ---

type View = 'resume' | 'capabilities' | 'about';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('about');

  const navButtonClasses = (view: View) => 
    `px-5 py-2 text-sm font-semibold rounded-md transition-colors duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900`;

  const activeClasses = 'text-slate-100';
  const inactiveClasses = 'text-slate-400 hover:text-slate-200';

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Header />
        <ContactCard />

        <nav className="flex justify-center mt-8 mb-12">
            <div className="relative flex p-1 rounded-lg bg-zinc-800 border border-zinc-700/50">
                <button
                    onClick={() => setActiveView('about')}
                    className={`${navButtonClasses('about')} ${activeView === 'about' ? activeClasses : inactiveClasses}`}
                >
                    About Me
                </button>
                <button
                    onClick={() => setActiveView('resume')}
                    className={`${navButtonClasses('resume')} ${activeView === 'resume' ? activeClasses : inactiveClasses}`}
                >
                    Resume
                </button>
                <button
                    onClick={() => setActiveView('capabilities')}
                    className={`${navButtonClasses('capabilities')} ${activeView === 'capabilities' ? activeClasses : inactiveClasses}`}
                >
                    Capabilities
                </button>

                <div
                    className="absolute top-1 bottom-1 bg-zinc-700/80 rounded-md transition-all duration-300 ease-in-out"
                    style={{
                        width: `calc(${100 / 3}% - 4px)`,
                        left: activeView === 'about' ? '2px' : activeView === 'resume' ? `calc(${100/3}% + 2px)` : `calc(${200/3}% + 2px)`
                    }}
                ></div>
            </div>
        </nav>

        {activeView === 'about' && <About />}
        {activeView === 'resume' && <ResumeContent />}
        {activeView === 'capabilities' && <Capabilities />}
        
      </main>
      <footer className="text-center py-8 text-zinc-500 text-xs border-t border-zinc-800">
        <p>&copy; {new Date().getFullYear()} Dante Civella. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;