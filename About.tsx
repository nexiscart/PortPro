import React from 'react';

// --- SVG ICON COMPONENT ---
const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" /></svg>
);

// --- UI COMPONENTS ---
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

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-lg font-bold text-sky-400 mt-8 mb-4">{children}</h3>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-slate-300 mb-4 leading-relaxed text-sm">{children}</p>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <strong className="font-semibold text-slate-100 block mb-2 text-base">{children}</strong>
);


// --- ABOUT ME COMPONENT ---

const About: React.FC = () => (
    <Section title="About Dante Civella" icon={<UserCircleIcon className="w-5 h-5" />}>
        <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 sm:p-8 rounded-md">
            <Paragraph>
                I approach commercial roofing with operational discipline and engineering precision. My framework prioritizes <strong className="font-semibold text-slate-100">Safety → Quality → Schedule → Cost</strong>, ensuring field-tested solutions that are both data-driven and results-focused.
            </Paragraph>

            <Heading>Professional Philosophy</Heading>
            <Paragraph>
                <SubHeading>Engineering-Driven Problem Solving</SubHeading>
                I analyze roofing challenges through systematic evaluation of load paths, drainage systems, thermal movement, attachment methodologies, and failure modes. Every problem receives thorough root cause analysis, corrective action planning, and verification protocols—eliminating guesswork through structured problem-solving.
            </Paragraph>
            <Paragraph>
                <SubHeading>Decisive Leadership</SubHeading>
                Operating under the principle "I Can't, Never Could," I take ownership of critical decisions, assume calculated risks, and deliver measurable results without delegating accountability for complex challenges.
            </Paragraph>
            <Paragraph>
                <SubHeading>Standards-First Approach</SubHeading>
                I maintain uncompromising adherence to specifications, safety protocols, and warranty requirements. When conflicts arise, I reset project parameters to ensure clean execution rather than accepting compromised outcomes.
            </Paragraph>
            <Paragraph>
                <SubHeading>Operational Excellence</SubHeading>
                My project management incorporates comprehensive pre-task planning, logistics coordination, lift planning, site controls, manufacturer walk-throughs, and systematic punch-list resolution across all project phases.
            </Paragraph>

            <Heading>Service Capabilities</Heading>
            <Paragraph>
                <SubHeading>Specification-Compliant Systems</SubHeading>
                I deliver TPO (including fleeceback), PVC, EPDM, modified bitumen, built-up roofing, and metal systems built precisely to manufacturer specifications with complete documentation for audit compliance.
            </Paragraph>
            <Paragraph>
                <SubHeading>Complex Site Management</SubHeading>
                I execute projects in occupied facilities including hotels, educational institutions, financial centers, and healthcare facilities, managing guest and tenant safety protocols, noise and dust mitigation windows, crane scheduling, and seamless project handoffs.
            </Paragraph>
            <Paragraph>
                <SubHeading>Quality-Assured Delivery</SubHeading>
                My closeout process includes comprehensive probe testing, pull testing, moisture verification (where applicable), manufacturer sign-offs, and organized documentation packages that withstand detailed scrutiny.
            </Paragraph>

            <Heading>Operational Framework</Heading>
            <Paragraph>
                <SubHeading>Field-Informed Planning</SubHeading>
                Project scopes reflect actual substrate conditions, utility constraints, and staging realities rather than theoretical assumptions, ensuring realistic timelines and budgets.
            </Paragraph>
            <Paragraph>
                <SubHeading>Production Optimization</SubHeading>
                I coordinate crew composition, work sequencing, and vendor management to protect critical path activities while compressing lead times without compromising specification compliance.
            </Paragraph>
            <Paragraph>
                <SubHeading>Transparent Change Management</SubHeading>
                Change orders are documented with factual evidence, priced equitably, and processed transparently to maintain project trust and relationships.
            </Paragraph>
            <Paragraph>
                <SubHeading>Integrated Quality Control</SubHeading>
                Quality assurance protocols, photographic documentation, and verification procedures are embedded in daily operations rather than applied as final inspections.
            </Paragraph>

            <Heading>Technology Integration</Heading>
            <Paragraph>
                I leverage technology to enhance accuracy and efficiency while maintaining professional judgment. AI-assisted quantity takeoffs, submittal cross-referencing, and estimating algorithms accelerate delivery while ensuring specification compliance. Professional-grade project management platforms, standardized templates, and supplier integrations maintain current pricing, material alignment, and documentation accuracy, resulting in reduced surprises, optimized schedules, and enhanced warranty protection.
            </Paragraph>

            <Heading>Portfolio Management Expertise</Heading>
            <Paragraph>
                My practice is designed for multi-property portfolio execution, managing diverse stakeholder groups, compressed schedules, and public-facing environments. I coordinate owners, general contractors, manufacturers, and suppliers around unified project information, enabling decisive action and first-time-right completion.
            </Paragraph>

            <Heading>Client Experience</Heading>
            <Paragraph>
                <SubHeading>Direct Communication</SubHeading>
                I provide factual project status updates and recommendations based on field realities rather than convenient narratives.
            </Paragraph>
            <Paragraph>
                <SubHeading>Proactive Risk Management</SubHeading>
                I identify and mitigate weather exposure, access limitations, hazardous materials, crane operations, and occupant safety risks early in the project lifecycle with comprehensive documentation.
            </Paragraph>
            <Paragraph>
                <SubHeading>Complete Documentation</SubHeading>
                I deliver organized, audit-ready packages including submittals, RFI/RFC correspondence, progress photography, daily logs, manufacturer approvals, and warranty documentation.
            </Paragraph>

            <Heading>Summary</Heading>
            <Paragraph>
                I combine engineering analysis, general contracting operations, and master-level roofing execution. For organizations seeking a commercial roofing partner who develops accurate project scopes, maintains clean execution, and provides accountable results, I welcome the opportunity to discuss your requirements.
            </Paragraph>

            <p className="mt-8 italic text-slate-400 text-xs">
                Note: Detailed credentials, certifications, and project portfolio are available in the accompanying résumé. This profile focuses on operational methodology and professional standards.
            </p>
        </div>
    </Section>
);

export default About;