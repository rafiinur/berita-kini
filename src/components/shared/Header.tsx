import { useEffect, useState } from 'react'
import { Link, useRouter } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants'

const NavLink = ({
  link,
  isScrolled,
  onClick,
  isMobile = false,
}: {
  link: { name: string; href: string }
  isScrolled: boolean
  onClick?: () => void
  isMobile?: boolean
}) => {
  const router = useRouter()
  const isHome = link.href === '/'
  const currentPath = router.state.location.pathname
  const isActive = isHome
    ? currentPath === '/'
    : currentPath.startsWith(link.href)

  if (isHome) {
    return (
      <Link
        to="/"
        className={
          isMobile
            ? `block body-medium-medium py-2 hover:text-brand transition-colors text-[#828282] ${isActive ? 'text-brand !font-bold' : ''}`
            : `body-medium-medium transition-colors duration-100 ${
                isScrolled
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#828282] hover:text-brand'
              } ${isActive ? (isScrolled ? '!text-white !font-bold' : 'text-brand !font-bold') : ''}`
        }
        onClick={onClick}
      >
        {link.name}
      </Link>
    )
  }

  const category = link.href.slice(1) // Remove leading slash
  return (
    <Link
      to="/$category"
      params={{ category }}
      className={
        isMobile
          ? `block body-medium-medium py-2 hover:text-brand transition-colors text-[#828282] ${isActive ? 'text-brand !font-bold' : ''}`
          : `body-medium-medium transition-colors duration-100 ${
              isScrolled
                ? 'text-white/80 hover:text-white'
                : 'text-[#828282] hover:text-brand'
            } ${isActive ? (isScrolled ? '!text-white !font-bold' : 'text-brand !font-bold') : ''}`
      }
      onClick={onClick}
    >
      {link.name}
    </Link>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`transition-all duration-300 z-50 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 w-full bg-brand py-4 shadow-lg'
            : 'mx-auto py-8 bg-white relative'
        }`}
      >
        <div
          className={`max-w-324 mx-auto flex items-center justify-between px-4 md:px-0`}
        >
          {/* Logo - Start */}
          <div className="flex items-center gap-3">
            <img
              src={isScrolled ? '/logo-white.svg' : '/logo.svg'}
              alt="logo"
            />
            <span
              className={`font-poppins font-semibold text-xl align-middle ${
                isScrolled ? 'text-white' : ''
              }`}
            >
              Berita Kini
            </span>
          </div>
          {/* Logo - End */}

          {/* Desktop Navigation - Start */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 pr-0 lg:pr-7">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink link={link} isScrolled={isScrolled} />
                </li>
              ))}
            </ul>
          </nav>
          {/* Desktop Navigation - End */}

          {/* Mobile Menu Button - Start */}
          <button
            className={`lg:hidden p-2 focus:outline-none ${
              isScrolled ? 'text-white' : 'text-gray-600'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Mobile Menu Button - End */}
        </div>

        {/* Mobile Navigation Dropdown - Start */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 py-4 px-4 border-t border-gray-100">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    link={link}
                    isScrolled={false}
                    isMobile
                    onClick={() => setIsMenuOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* Mobile Navigation Dropdown - End */}
      </header>
    </>
  )
}
