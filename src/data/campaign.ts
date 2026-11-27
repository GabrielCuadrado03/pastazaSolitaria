export interface BankDetails {
  institution: string;
  accountType: string;
  holder: string;
  number: string;
}

export interface FamilyCase {
  id: string;
  name: string;
  age?: number;
  description: string;
  image?: string;
  approved: boolean;
  bank?: BankDetails;
}

export const campaign = {
  title: 'Unidos por la Esperanza',
  subtitle: 'Pequeños gestos, grandes esperanzas.',
  community: 'Pastaza Solidaria',
  date: '26 de noviembre de 2026',
  injured: 9,
  deceased: 1,
  figuresVerified: false,
};

export const families: FamilyCase[] = [
  { id: 'genesis-reyes', image: '/images/genesis.webp', name: 'Génesis Reyes', age: 14, description: 'Tras el accidente del transporte escolar, Génesis necesita apoyo para su tratamiento quirúrgico y recuperación.', approved: true, bank: { institution: 'Banco Pichincha', accountType: 'Ahorros', holder: 'Cristina Gracia Zurita', number: '2205375618' } },
  { id: 'alan-illanes', image: '/images/alan.webp', name: 'Alan Illanes', age: 7, description: 'Unamos nuestros corazones para apoyar a Alan y su familia.', approved: true, bank: { institution: 'Banco Pichincha', accountType: 'Transaccional', holder: 'Norma Rojas', number: '2212759572' } },
  { id: 'mathias-fuentes', image: '/images/mathias.webp', name: 'Mathias Fuentes', age: 12, description: 'Cada gesto de solidaridad puede ayudar a Mathias y su familia.', approved: true, bank: { institution: 'CACPE Pastaza', accountType: 'Ahorros', holder: 'Solange Ortega', number: '170501075761' } },
];

export interface SolidarityEvent { title: string; organizer: string; status: string; description: string; image: string; location: string; contactUrl?: string; contactLabel?: string }
export const events: SolidarityEvent[] = [
  { title: 'Café con corazón', organizer: 'Amazon Coffee · Unidos por Puyo', status: 'Viernes 27 de noviembre', description: 'El 30% de las ventas del día se destinará a apoyar a los niños y familias afectadas. También habrá una alcancía solidaria en caja.', image: '/images/amazon_coffee_event.webp', location: 'Plaza Álvaro Valladares, Puyo', contactUrl: 'https://www.instagram.com/amazon_coffe/', contactLabel: 'Instagram · @amazon_coffe' },
  { title: 'Rifa solidaria', organizer: 'Consejo Estudiantil · Esperanza Eterna', status: 'Viernes 27 de noviembre · $1', description: 'Rifa a beneficio de las familias afectadas, con varios premios. Venta de boletos desde las 4:00 p.m.', image: '/images/rifa_solidaria_event.webp', location: 'Amazon Coffee, Puyo', contactUrl: 'https://wa.me/593963430421', contactLabel: 'Consultar por WhatsApp' },
  { title: 'Gran venta solidaria', organizer: 'Consejo Estudiantil · Magic School', status: 'Lunes · 12:00 m. a 2:00 p.m.', description: 'Venta de helados, gelatinas, ensaladas de frutas, cupcakes, canguil y burbujas de jabón para recaudar fondos para los niños afectados.', image: '/images/magic_school_event.webp', location: 'Magic School' },
  // Bingo solidario: incorporar cuando se confirmen sus detalles.
];

export const sources = [
  { name: 'Extra', url: 'https://www.extra.ec/noticia/ecuador/pastaza-choque-buseta-escolar-volqueta-deja-estudiante-fallecido-nueve-heridos-169013.html' },
  { name: 'El Comercio', url: 'https://www.elcomercio.com/actualidad/ecuador/choque-bus-escolar-pastaza-nino-fallecido-estudiantes-heridos/' },
  { name: 'Primicias', url: 'https://www.primicias.ec/sucesos/accidente-transito-volqueta-bus-escolar-shell-puyo-pastaza-138069/' },
  { name: 'Teleamazonas', url: 'https://www.teleamazonas.com/actualidad/noticias/ecuador/nino-murio-choque-volqueta-buseta-escolar-pastaza-134184/' },
];
