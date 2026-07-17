const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-0 z-20 w-full border-b border-cyan-400/40 bg-[#020617]/75 px-4 py-3 text-white backdrop-blur-md sm:px-8 sm:py-4">
      <ul className="mx-auto flex w-fit items-center rounded-full border border-cyan-400/20 bg-slate-900/60 p-1 text-sm font-medium shadow-lg shadow-cyan-950/30 sm:text-base">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-full px-3 py-2 transition hover:bg-cyan-400 hover:text-slate-950 sm:px-5"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
