// Dados dos vendedores — cada um responsável por estados específicos
export const salespeople = [
  {
    id: 1,
    name: 'Leandro Araujo',
    photo: '/vendedores/leandro.jpg',
    whatsapp: '5511915467196',
    states: ['MG', 'ES', 'RJ', 'AC', 'AP', 'AM', 'MA', 'PA', 'PI', 'RO', 'RR'],
    stateNames: ['Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'Acre', 'Amapá', 'Amazonas', 'Maranhão', 'Pará', 'Piauí', 'Rondônia', 'Roraima'],
  },
  {
    id: 2,
    name: 'Thiago',
    photo: '/vendedores/thiago.jpg',
    whatsapp: '5511923165330',
    states: ['MT', 'MS', 'TO', 'SE', 'PR'],
    stateNames: ['Mato Grosso', 'Mato Grosso do Sul', 'Tocantins', 'Sergipe', 'Paraná'],
  },
  {
    id: 3,
    name: 'Stefanni',
    photo: '/vendedores/stefanni.jpg',
    whatsapp: '5511923165330', // Substitua pelo número real da Stefanni
    states: ['SC', 'RS', 'GO', 'SP', 'DF'],
    stateNames: ['Santa Catarina', 'Rio Grande do Sul', 'Goiás', 'São Paulo', 'Distrito Federal'],
  },
  {
    id: 4,
    name: 'Daniela',
    photo: '/vendedores/daniela.jpg',
    whatsapp: '5511923165330', // Substitua pelo número real da Daniela
    states: ['AL', 'PE', 'CE', 'BA', 'RN', 'PB'],
    stateNames: ['Alagoas', 'Pernambuco', 'Ceará', 'Bahia', 'Rio Grande do Norte', 'Paraíba'],
  },
];

// Todos os estados brasileiros
export const brazilianStates = [
  { code: 'AC', name: 'Acre' },
  { code: 'AL', name: 'Alagoas' },
  { code: 'AP', name: 'Amapá' },
  { code: 'AM', name: 'Amazonas' },
  { code: 'BA', name: 'Bahia' },
  { code: 'CE', name: 'Ceará' },
  { code: 'DF', name: 'Distrito Federal' },
  { code: 'ES', name: 'Espírito Santo' },
  { code: 'GO', name: 'Goiás' },
  { code: 'MA', name: 'Maranhão' },
  { code: 'MT', name: 'Mato Grosso' },
  { code: 'MS', name: 'Mato Grosso do Sul' },
  { code: 'MG', name: 'Minas Gerais' },
  { code: 'PA', name: 'Pará' },
  { code: 'PB', name: 'Paraíba' },
  { code: 'PR', name: 'Paraná' },
  { code: 'PE', name: 'Pernambuco' },
  { code: 'PI', name: 'Piauí' },
  { code: 'RJ', name: 'Rio de Janeiro' },
  { code: 'RN', name: 'Rio Grande do Norte' },
  { code: 'RS', name: 'Rio Grande do Sul' },
  { code: 'RO', name: 'Rondônia' },
  { code: 'RR', name: 'Roraima' },
  { code: 'SC', name: 'Santa Catarina' },
  { code: 'SP', name: 'São Paulo' },
  { code: 'SE', name: 'Sergipe' },
  { code: 'TO', name: 'Tocantins' },
];

// Retorna o vendedor responsável pelo estado ou null se não houver
export function getSellerByState(stateCode) {
  return salespeople.find((s) => s.states.includes(stateCode)) ?? null;
}
