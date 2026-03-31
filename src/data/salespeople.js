// Dados dos vendedores — cada um responsável por estados específicos
export const salespeople = [
  {
    id: 1,
    name: 'Leandro Araujo',
    photo: '/vendedores/leandro.jpg',
    whatsapp: '5511915467196',
    states: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'PA', 'PB', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'SE', 'SP', 'TO'],
    stateNames: ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Sergipe', 'São Paulo', 'Tocantins'],
  },
  {
    id: 2,
    name: 'Thiago',
    photo: '/vendedores/thiago.jpg',
    whatsapp: '5511923165330', // Thiago
    states: ['MS', 'MT', 'PR', 'RS', 'SC'],
    stateNames: ['Mato Grosso do Sul', 'Mato Grosso', 'Paraná', 'Rio Grande do Sul', 'Santa Catarina'],
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
