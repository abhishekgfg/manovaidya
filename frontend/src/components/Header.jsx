import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  ChevronDown,
  HeartPulse,
  Menu,
  PhoneCall,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../images/manovaidya-logo (2).png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    hasMenu: true,
    submenu: [
      { label: "About Doctor", href: "/about/doctor" },
      { label: "About Manovaidya", href: "/about/manovaidya" },
      { label: "Our Approach", href: "/about/approach" },
    ],
  },
  { label: "Conditions", href: "#conditions", hasMenu: true },
  { label: "Programs", href: "#programs", hasMenu: true },
  { label: "Resources", href: "#resources", hasMenu: true },
  { label: "Our Approach", href: "/about/approach" },
  { label: "Success Stories", href: "#stories" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 shadow-[0_8px_20px_rgba(91,55,183,0.07)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-5 lg:px-7">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="ManoVaidya home"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="ManoVaidya"
              className="h-auto w-[clamp(155px,28vw,200px)] object-contain object-left"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center font-bold gap-[clamp(16px,1.55vw,28px)] whitespace-nowrap text-[clamp(15px,1.08vw,18px)] font-black text-[#272047] xl:flex">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="group relative">
                  <Link to={item.href} className="inline-flex items-center text-violet-700">
                    {item.label}
                    <ChevronDown className="ml-0.5 h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-56 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-xl border border-violet-100 bg-white p-2 shadow-[0_18px_42px_rgba(45,27,95,0.16)]">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block rounded-lg px-4 py-3 text-[14px] font-black text-[#272047] transition hover:bg-violet-50 hover:text-[#8B43BA]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                    </div>
                  </div>
                </div>
              ) : item.href.startsWith("/") ? (
                <Link key={item.label} to={item.href} className="text-violet-700">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="transition hover:text-violet-700">
                  {item.label}
                  {item.hasMenu ? <ChevronDown className="ml-0.5 inline h-4 w-4" /> : null}
                </a>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#consultation"
              className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-md bg-[#8b43ba] px-5 text-[14px] font-black text-white shadow-[0_10px_18px_rgba(139,67,186,0.24)] transition hover:bg-[#7835a4] xl:inline-flex"
            >
              <CalendarDays className="h-4 w-4" />
              Book Consultation
            </a>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-violet-200 bg-violet-50 text-violet-800 shadow-sm transition hover:border-violet-300 hover:bg-violet-100 xl:hidden"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-[60] bg-[#120b2a]/45 backdrop-blur-[2px] xl:hidden"
          onClick={closeMenu}
        />
      ) : null}

      <aside
        className={`fixed right-0 top-0 z-[70] h-dvh w-[min(86vw,380px)] transform bg-white shadow-[-24px_0_60px_rgba(45,27,95,0.25)] transition-transform duration-300 xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-5 py-5">
            <div className="flex items-center justify-between gap-4">
              <img
                src={logo}
                alt="ManoVaidya"
                className="h-auto w-[min(56vw,210px)] object-contain object-left"
              />
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-violet-800 shadow-sm ring-1 ring-violet-100"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 rounded-lg border border-violet-100 bg-white/75 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold leading-5 text-[#302650]">
                  Neuro-Ayurveda care for every mind and every stage.
                </p>
              </div>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-2 px-5 py-5">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="rounded-lg bg-violet-50/70 px-3 py-2">
                  <Link
                    to={item.href}
                    className="flex items-center justify-between rounded-lg px-1 py-2 text-base font-black text-violet-700"
                    onClick={closeMenu}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="mt-1 grid gap-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="rounded-lg px-4 py-2.5 text-sm font-black text-[#272047] transition hover:bg-white hover:text-[#8B43BA]"
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-black text-violet-700 transition hover:bg-violet-50"
                  onClick={closeMenu}
                >
                  {item.label}
                  <Sparkles className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-black text-[#272047] transition hover:bg-violet-50 hover:text-violet-700"
                  onClick={closeMenu}
                >
                  {item.label}
                  {item.hasMenu ? <ChevronDown className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-violet-200" />}
                </a>
              )
            )}
          </nav>

          <div className="border-t border-violet-100 p-5">
            <a
              href="#consultation"
              className="flex h-12 items-center justify-center gap-2 rounded-md bg-violet-700 px-5 text-sm font-black text-white shadow-[0_12px_22px_rgba(93,46,202,0.25)] transition hover:bg-violet-800"
              onClick={closeMenu}
            >
              <CalendarDays className="h-4 w-4" />
              Book Consultation
            </a>
            <a
              href="tel:+919523435814"
              className="mt-3 flex h-12 items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-5 text-sm font-black text-violet-800 transition hover:bg-violet-50"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Header;
