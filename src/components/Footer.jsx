import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer({ variant = 'orange' }) {
  const accentColor = variant === 'gold' ? 'text-atomi-gold' : 'text-atomi-orange';
  const accentBg = variant === 'gold' ? 'bg-atomi-gold' : 'bg-atomi-orange';
  const borderColor = variant === 'gold' ? 'border-atomi-gold/20' : 'border-atomi-orange/20';

  return (
    <footer className="bg-black border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/atomi-logo.png"
              alt="Atomi"
              className="h-10 w-auto mb-3"
            />

            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">
              Fabricando as melhores scooters e bikes elétricas do mundo desde 2000.
              Mais de 20 países. Qualidade certificada.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaWhatsapp, href: 'https://wa.me/5511915467196' },
                { Icon: FaInstagram, href: 'https://www.instagram.com/atomiscooterbrasil/' },
                { Icon: FaFacebook, href: 'https://www.facebook.com/atomiscooters/' },
                { Icon: FaXTwitter, href: 'https://x.com/atomiscooters' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full border ${borderColor} flex items-center justify-center text-gray-400 hover:${accentColor} hover:border-current transition-colors duration-200`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Produtos</h3>
            <ul className="space-y-2">
              {['ATOMI M201', 'ATOMI L10', 'ATOMI ZX202', 'ATOMI ZX201', 'ATOMI ZX161', 'ATOMI C1'].map((p) => (
                <li key={p}>
                  <a href="#produtos" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <MdEmail className={accentColor} size={16} />
                leandro.nivelatomi@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MdPhone className={accentColor} size={16} />
                <a href="https://wa.me/5511915467196" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
                  +55 11 91546-7196
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MdLocationOn className={`${accentColor} mt-0.5`} size={16} />
                <a href="https://www.atomiscooters.com/pt-br" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">
                  www.atomiscooters.com
                </a>
              </li>
            </ul>

            <div className={`mt-5 p-3 border ${borderColor} rounded-xl`}>
              <p className="text-gray-400 text-xs font-medium mb-1">🚨 PROMOÇÃO VÁLIDA ATÉ</p>
              <p className={`${accentColor} font-bold text-sm`}>30 de Abril de 2026</p>
              <p className="text-gray-600 text-xs mt-1">Mínimo 4 unidades por pedido</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center">
            © 2026 Atomi. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center">
            Desenvolvido por <span className="text-gray-400 font-semibold">Thiago Gramuglia</span>
            <span className="text-gray-700 mx-1">·</span>
            <span className="text-gray-600">CNPJ 64.828.611/0001-05</span>
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Certificações:
            <span className={`${accentColor} font-semibold`}>RoHS · CE · BSCI · UL2272 · ISO 9001</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
