import SocialLink from '../ui/SocialLink'
import { FOOTER_BANTUAN, FOOTER_TELUSURI, SOCIAL_LINKS } from '@/constants'

const Footer = () => {
  return (
    <footer className="bg-dark-600">
      <div className="max-w-324 mx-auto py-16 border-t px-5 lg:px-0">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-18">
          <div className="flex flex-col gap-11">
            {/* Logo & Copyright - Start */}
            <div>
              <div className="text-white flex items-center gap-5 mb-5.5">
                <img src="/logo-white.svg" alt="logo" />
                <p className="font-poppins font-semibold text-3xl align-middle">
                  Berita Kini
                </p>
              </div>
              <span className="font-nunito text-white text-lg">
                © 2023 Berita Kini. All rights reserved.
              </span>
            </div>
            {/* Logo & Copyright - End */}

            {/* Social Links - Start */}
            <div>
              <p className="font-nunito font-semibold text-[22px] text-white mb-5.5">
                Ikuti Kami
              </p>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.name} {...link} />
                ))}
              </div>
            </div>
            {/* Social Links - End */}
          </div>

          {/* Telusuri - Start */}
          <div>
            <p className="font-nunito font-semibold text-[22px] text-white mb-5.5">
              Telusuri
            </p>

            <ul className="pr-6 space-y-4">
              {FOOTER_TELUSURI.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-medium-medium text-[#F2F2F2]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Telusuri - End */}

          {/* Bantuan - Start */}
          <div>
            <p className="font-nunito font-semibold text-[22px] text-white mb-5.5">
              Bantuan
            </p>
            <ul className="pr-6 space-y-4">
              {FOOTER_BANTUAN.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-medium-medium text-[#F2F2F2]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Bantuan - End */}

          {/* SendEmail - Start */}
          <div>
            <p className="font-nunito font-semibold text-[22px] text-white mb-5.5">
              Berlangganan Berita Terbaru
            </p>
            <form action="">
              <div className="bg-white p-2 rounded-lg flex items-center gap-2.5">
                <input
                  type="email"
                  placeholder="Masukan email"
                  className="w-full focus:outline-none px-2 text-[#4F4F4F] placeholder:text-[#BDBDBD]"
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-lg transition-colors shrink-0"
                >
                  <img src="/bi-send-fill.svg" alt="send" />
                </button>
              </div>
            </form>
          </div>
          {/* SendEmail - End */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
