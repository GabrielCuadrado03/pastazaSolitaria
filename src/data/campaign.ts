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
  { id: 'familia-1', name: 'Familia 01', description: 'Acompañemos a esta familia con solidaridad y respeto.', approved: false },
  { id: 'familia-2', name: 'Familia 02', description: 'Cada gesto de apoyo puede hacer la diferencia.', approved: false },
  { id: 'familia-3', name: 'Familia 03', description: 'Unamos nuestros corazones para apoyar su recuperación.', approved: false },
];

export const events = [
  { title: 'Rifa solidaria', status: 'Información por confirmar', description: 'Consulta con los organizadores la vigencia de la actividad, el horario y la forma de participación.' },
  // Bingo solidario: reactivar cuando se confirmen fecha, lugar, hora y valor.
  // { title: 'Bingo solidario', status: 'Próximamente', description: 'Fecha, lugar, hora y valor pendientes de confirmación.' },
];

export const sources = [
  { name: 'Extra', url: 'https://www.extra.ec/noticia/ecuador/pastaza-choque-buseta-escolar-volqueta-deja-estudiante-fallecido-nueve-heridos-169013.html' },
  { name: 'El Comercio', url: 'https://www.elcomercio.com/actualidad/ecuador/choque-bus-escolar-pastaza-nino-fallecido-estudiantes-heridos/' },
  { name: 'Primicias', url: 'https://www.primicias.ec/sucesos/accidente-transito-volqueta-bus-escolar-shell-puyo-pastaza-138069/' },
  { name: 'Teleamazonas', url: 'https://www.teleamazonas.com/actualidad/noticias/ecuador/nino-murio-choque-volqueta-buseta-escolar-pastaza-134184/' },
];
