import React from 'react';

// --- SVG ICON COMPONENTS ---
const WrenchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 5.25H9.049c-.652 0-1.196.392-1.436.962L6.37 8.618H4.5c-.828 0-1.5.672-1.5 1.5v3c0 .828.672 1.5 1.5 1.5h1.87l1.243 2.486c.24.57.784.964 1.436.964h.001l.178 1.432c.151.904.933 1.567 1.85 1.567h1.844c.917 0 1.699-.663 1.85-1.567l.178-1.432h.001c.652 0 1.196-.392 1.436-.964l1.243-2.486H19.5c.828 0 1.5-.672 1.5-1.5v-3c0 .828-.672-1.5-1.5-1.5h-1.87l-1.243-2.486a1.875 1.875 0 00-1.436-.964h-.001l-.178-1.432A1.875 1.875 0 0012.922 2.25h-1.844zM12 9.75a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
    </svg>
);

const SystemsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.927 0l-7.5 4.25a.75.75 0 000 1.329l7.5 4.25a.75.75 0 001.927 0l7.5-4.25a.75.75 0 000-1.329l-7.5-4.25zM11.25 4.509l-6 3.409v6.582l6 3.409 6-3.409V7.918l-6-3.409z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.963 12.286a.75.75 0 00-1.927 0l-7.5 4.25a.75.75 0 000 1.329l7.5 4.25a.75.75 0 001.927 0l7.5-4.25a.75.75 0 000-1.329l-7.5-4.25zM11.25 14.509l-6 3.409v.001l6 3.409 6-3.409v-.001l-6-3.409z" clipRule="evenodd" />
  </svg>
);

const IconProps = {
  className: "w-5 h-5"
};

// --- DATA CONSTANTS ---

const jobTypesData = [
    {
        title: 'New Construction',
        description: 'Expertise in installing high-performance roofing systems for new commercial buildings, ensuring long-term durability and compliance with all architectural specifications.'
    },
    {
        title: 'Roof Replacement & Re-Roofing',
        description: 'Comprehensive services for full tear-offs and replacement of existing roof systems, addressing underlying structural issues and upgrading to modern, energy-efficient materials.'
    },
    {
        title: 'Leak Investigation & Repair',
        description: 'Specialized services for diagnosing and repairing complex leaks. We provide both emergency and scheduled repairs to extend the life of your existing roof and prevent property damage.'
    },
    {
        title: 'Preventative Maintenance',
        description: 'Proactive maintenance programs designed to identify and address potential issues before they become costly problems, ensuring optimal roof longevity and performance.'
    },
    {
        title: 'Commercial Sub-Contracting',
        description: 'Collaborating with general contractors on large-scale projects, providing specialized roofing expertise as a reliable and efficient sub-contractor.'
    },
];

const roofingSystemsData = [
    {
        title: 'Single-Ply Membranes (TPO, PVC, EPDM)',
        description: 'Installation and maintenance of leading single-ply systems. These materials offer excellent weather resistance, energy efficiency, and flexibility for various commercial applications.'
    },
    {
        title: 'Modified Bitumen',
        description: 'Expertise in multi-ply modified bitumen roofing, ideal for high-traffic and heavy-duty applications that require superior strength and puncture resistance.'
    },
    {
        title: 'Built-Up Roofing (BUR)',
        description: 'Installation of traditional hot-tar and gravel systems, providing durable and redundant layers of waterproofing protection for long-term reliability.'
    },
    {
        title: 'Architectural & Structural Metal Roofing',
        description: 'Installation of standing seam, corrugated, and custom architectural metal roofs that offer longevity, durability, and a modern aesthetic.'
    },
    {
        title: 'Fluid-Applied Coatings & Waterproofing',
        description: 'Application of advanced liquid-applied membranes and coatings to restore existing roofs, creating a seamless, waterproof barrier that extends service life.'
    }
];

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

const Capabilities: React.FC = () => {
    return (
        <div>
            <Section title="Core Service Offerings" icon={<WrenchIcon {...IconProps} />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobTypesData.map((job, index) => (
                        <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md transition-all hover:border-sky-500/50 hover:bg-zinc-800">
                            <h4 className="text-lg font-semibold text-slate-100 mb-2">{job.title}</h4>
                            <p className="text-slate-400 text-sm leading-6">{job.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Roofing System Expertise" icon={<SystemsIcon {...IconProps} />}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {roofingSystemsData.map((system, index) => (
                        <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md transition-all hover:border-sky-500/50 hover:bg-zinc-800">
                            <h4 className="text-lg font-semibold text-slate-100 mb-2">{system.title}</h4>
                            <p className="text-slate-400 text-sm leading-6">{system.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Capabilities;