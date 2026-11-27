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

export const events = [
  { title: 'Rifa solidaria', status: 'Viernes 27 de noviembre de 2026 · $1', description: 'Rifa de la Unidad Educativa Esperanza Eterna para apoyar a las familias afectadas. Muchos premios. Consulta con los organizadores cómo participar.' },
  // Bingo solidario: reactivar cuando se confirmen fecha, lugar, hora y valor.
  // { title: 'Bingo solidario', status: 'Próximamente', description: 'Fecha, lugar, hora y valor pendientes de confirmación.' },
];

export const sources = [
  { name: 'Extra', url: 'https://www.extra.ec/noticia/ecuador/pastaza-choque-buseta-escolar-volqueta-deja-estudiante-fallecido-nueve-heridos-169013.html' },
  { name: 'El Comercio', url: 'https://www.elcomercio.com/actualidad/ecuador/choque-bus-escolar-pastaza-nino-fallecido-estudiantes-heridos/' },
  { name: 'Primicias', url: 'https://www.primicias.ec/sucesos/accidente-transito-volqueta-bus-escolar-shell-puyo-pastaza-138069/' },
  { name: 'Teleamazonas', url: 'https://www.teleamazonas.com/actualidad/noticias/ecuador/nino-murio-choque-volqueta-buseta-escolar-pastaza-134184/' },
];
