import React from 'react';

// --- SVG ICON COMPONENTS ---
const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM5.25 12.375a3.375 3.375 0 00-3.375 3.375v2.25a.75.75 0 00.75.75h12.75a.75.75 0 00.75-.75v-2.25a3.375 3.375 0 00-3.375-3.375H5.25zM15 13.125c.621 0 1.22.102 1.775.284a.75.75 0 01.425 1.285A3.37 3.37 0 0018 15.75v1.5a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-1.5a3.375 3.375 0 00-3.375-3.375H15z" />
  </svg>
);

const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 4.533a8.25 8.25 0 011.023.442l1.523-1.523a.75.75 0 011.06 0l.157.157a.75.75 0 010 1.06l-1.523 1.523A8.25 8.25 0 0115.75 8.25v.442l1.523-1.523a.75.75 0 011.06 0l.157.157a.75.75 0 010 1.06l-1.523 1.523c.12.337.22.686.301 1.042h.442a.75.75 0 01.75.75v.157a.75.75 0 01-.75.75h-.442a8.25 8.25 0 01-1.023.442l1.523 1.523a.75.75 0 010 1.06l-.157.157a.75.75 0 01-1.06 0l-1.523-1.523a8.25 8.25 0 01-.442 1.023v.442a.75.75 0 01-.75.75h-.157a.75.75 0 01-.75-.75v-.442a8.25 8.25 0 01-.442-1.023l-1.523 1.523a.75.75 0 01-1.06 0l-.157-.157a.75.75 0 010-1.06l1.523-1.523a8.25 8.25 0 01-1.023-.442h-.442a.75.75 0 01-.75-.75v-.157a.75.75 0 01.75-.75h.442c-.12-.337-.22-.686-.301-1.042H8.25a.75.75 0 01-.75-.75v-.157a.75.75 0 01.75-.75h.442A8.25 8.25 0 018.25 8.25V7.808l-1.523 1.523a.75.75 0 01-1.06 0l-.157-.157a.75.75 0 010-1.06l1.523-1.523A8.25 8.25 0 018.25 4.533zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
    </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.552a.75.75 0 001.256-.279l.545-1.217a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 01-3 3h-2.25C6.55 22.5 1.5 17.45 1.5 10.75V4.5z" clipRule="evenodd" /></svg>
);

// --- DATA CONSTANTS ---
const contactData = {
    company: 'Pro Roofing KC',
    website: 'https://www.proroofingkc.com',
    websiteDisplay: 'www.proroofingkc.com',
    emails: ['info@proroofingkc.com', 'commercial@proroofingkc.com'],
    phone: '(816) 429-7663',
    phoneHref: 'tel:816-429-7663'
};

// --- CONTACT CARD COMPONENT ---
const ContactCard: React.FC = () => (
    <section className="mb-8">
        <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 rounded-md transition-all hover:border-sky-500/50 hover:bg-zinc-800">
            <div className="flex items-start gap-4">
                <UsersIcon className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-1">Contact My Team at {contactData.company}</h4>
                    <p className="text-slate-400 text-sm mb-4">For estimates, consultations, or project inquiries, please reach out to my professional team.</p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <GlobeAltIcon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                            <a href={contactData.website} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-300 transition-colors text-sm font-medium break-all">{contactData.websiteDisplay}</a>
                        </div>
                            <div className="flex items-center gap-3">
                            <PhoneIcon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                            <a href={contactData.phoneHref} className="text-slate-300 hover:text-sky-300 transition-colors text-sm font-medium">{contactData.phone}</a>
                        </div>
                        {contactData.emails.map(email => (
                            <div key={email} className="flex items-center gap-3">
                                <MailIcon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                                <a href={`mailto:${email}`} className="text-slate-300 hover:text-sky-300 transition-colors text-sm font-medium break-all">{email}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactCard;
