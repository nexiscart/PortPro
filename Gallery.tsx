import React, { useState, useEffect } from 'react';

// --- DATA FOR GALLERY ---
const galleries = [
  {
    name: 'Metal Work',
    images: [
      { id: 101, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-01.jpg', alt: 'Custom detached garage with stone archway and copper cupola' },
      { id: 102, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-02.jpg', alt: 'Fabrication of a complex multi-flue copper chimney cap' },
      { id: 103, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-03.jpg', alt: 'Custom copper pyramid roof cap ready for installation' },
      { id: 104, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-04.jpg', alt: 'Installation of hand-soldered copper valley flashing on a shingle roof' },
      { id: 105, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-05.jpg', alt: 'Close-up of watertight soldered seams on custom copper flashing' },
      { id: 106, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-06.jpg', alt: 'Patinated steel outdoor fireplace and media wall installation' },
      { id: 107, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-07.jpg', alt: 'Installation of custom patinated steel wall panels' },
      { id: 108, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-08.jpg', alt: 'Custom through-wall scupper box integrated with stone veneer' },
      { id: 109, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/metal-work-09.jpg', alt: 'Standing seam metal roof with custom flashing around HVAC curbs' },
    ]
  },
  {
    name: 'Commercial Roofing',
    images: [
      { id: 201, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-01.jpg', alt: 'Completed standing seam metal roof on a large commercial building' },
      { id: 202, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-02.jpg', alt: 'Detail of the ridge cap on a commercial standing seam metal roof' },
      { id: 203, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-03.jpg', alt: 'Preparation of a corrugated metal roof for a coating system, detailing the seams' },
      { id: 204, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-04.jpg', alt: 'Completed seam sealing on a commercial metal roof prior to coating' },
      { id: 205, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-05.jpg', alt: 'Installation of counter-flashing around a brick chimney on a commercial shingle roof' },
      { id: 206, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-06.jpg', alt: 'New construction site showing house wrap and roof underlayment' },
      { id: 207, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-07.jpg', alt: 'Newly installed modified bitumen flat roof on a commercial building' },
      { id: 208, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-08.jpg', alt: 'Close-up of the clean surface of a new flat roof system' },
      { id: 209, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-09.jpg', alt: 'Detail of a roof drain installation on a modified bitumen roof' },
      { id: 210, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-10.jpg', alt: 'Application of a white fluid-applied roofing system on a parapet wall' },
      { id: 211, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/commercial-11.jpg', alt: 'Detail of a sealed pipe penetration and parapet wall with a white coating' },
    ]
  },
  {
    name: 'Residential Projects',
    images: [
        { id: 301, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/residential-01.jpg', alt: 'Exterior of a luxury home with stone veneer and complex roof lines' },
        { id: 302, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/residential-02.jpg', alt: 'Copper accent roof over a bay window on a new construction home' },
        { id: 303, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/residential-03.jpg', alt: 'Covered outdoor patio with composite decking and custom fireplace' },
        { id: 304, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/residential-04.jpg', alt: 'Installation of architectural shingles and chimney flashing' },
        { id: 305, src: 'https://storage.googleapis.com/aistudio-hosting/workspace-assets/dante-civella/residential-05.jpg', alt: 'Newly constructed detached garage with custom doors and shingle roof' },
    ]
  }
];

interface Image {
    id: number;
    src: string;
    alt: string;
}

// --- SVG ICON COMPONENT ---
const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.152-.177.465-.067.87-.327 1.11-.71l.821-1.317a3.75 3.75 0 012.332-1.39zM12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" clipRule="evenodd" />
    </svg>
);


// --- MODAL COMPONENT ---
interface ModalProps {
  image: Image | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div
        className="relative bg-zinc-900 p-4 border border-zinc-700 rounded-lg shadow-2xl max-w-4xl max-h-[90vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center text-2xl font-bold hover:bg-sky-500 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Close image view"
        >
          &times;
        </button>
        <img src={image.src} alt={image.alt} className="max-w-full max-h-[85vh] object-contain rounded" />
        <p id="image-modal-title" className="text-center text-slate-300 mt-3 text-sm">{image.alt}</p>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};


// --- GALLERY COMPONENT ---
const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [activeTab, setActiveTab] = useState(galleries[0].name);

  const activeGallery = galleries.find(g => g.name === activeTab);

  return (
    <section>
        <h3 className="flex items-center gap-3 text-xl font-bold text-slate-200 mb-6 border-b border-zinc-700 pb-3">
            <span className="text-sky-400"><CameraIcon className="w-5 h-5" /></span>
            Project Gallery
        </h3>

        <div className="flex justify-center mb-8">
          <div className="flex p-1 rounded-lg bg-zinc-800 border border-zinc-700/50">
            {galleries.map(gallery => (
              <button
                key={gallery.name}
                onClick={() => setActiveTab(gallery.name)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                  activeTab === gallery.name ? 'text-slate-100 bg-zinc-700' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {gallery.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {activeGallery?.images.map((image) => (
                <div
                    key={image.id}
                    className="group relative cursor-pointer overflow-hidden rounded-md shadow-lg border border-zinc-800 hover:border-zinc-700 transition-all"
                    onClick={() => setSelectedImage(image)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View image: ${image.alt}`}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300 bg-zinc-800"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-center font-semibold px-4">{image.alt}</p>
                    </div>
                </div>
            ))}
        </div>
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Gallery;