import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { navLinks, companyInfo } from '../../data/navigation';
import logo from '../../assets/cosmovance_technologies_icon.png';

const MAILTO_URL = `mailto:${companyInfo.email}?subject=Project%20Inquiry%20%E2%80%94%20Cosmovance%20Technologies`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const linkClass = ({ isActive }) => `relative text-sm font-semibold transition-colors duration-200 py-2 ${isActive ? 'text-[#3B82F6]' : 'text-[#475569] hover:text-[#3B82F6]'}`;
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_8px_30px_rgba(30,41,59,.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[76px] flex items-center justify-between gap-5">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Cosmovance home">
          <img src={logo} alt="Cosmovance Technologies" className="w-11 h-11 object-contain" />
          <span className="leading-tight">
            <span className="block font-display font-extrabold tracking-wide text-[#0B0F24] text-base sm:text-lg">COSMOVANCE</span>
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[.32em] text-[#64748B] mt-1">TECHNOLOGIES</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(link => <NavLink key={link.id} to={link.href} end={link.href === '/'} className={linkClass}>{link.label}<span className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#3B82F6] to-[#A78BFA] transition-transform group-hover:scale-x-100" /></NavLink>)}
        </nav>
        <a href={MAILTO_URL} className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#3B82F6] to-[#A78BFA] shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-xl transition-all"> <Mail size={16}/> Let’s Talk <ArrowRight size={16}/></a>
        <button className="lg:hidden rounded-xl border border-[#E2E8F0] p-2.5 text-[#0B0F24] bg-white" onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      <AnimatePresence>
        {mobileOpen && <>
          <motion.button aria-label="Close menu backdrop" className="lg:hidden fixed inset-0 bg-[#0B0F24]/35 backdrop-blur-sm z-40" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setMobileOpen(false)}/>
          <motion.div className="lg:hidden absolute top-full inset-x-0 z-50 bg-white border-b border-[#E2E8F0] shadow-2xl px-5 py-5" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.2}}>
            <nav className="flex flex-col gap-1">{navLinks.map(link => <NavLink key={link.id} to={link.href} end={link.href === '/'} onClick={() => setMobileOpen(false)} className={({isActive}) => `rounded-xl px-4 py-3.5 font-semibold ${isActive ? 'bg-blue-50 text-[#2563EB]' : 'text-[#334155] hover:bg-slate-50'}`}>{link.label}<ArrowRight className="inline float-right" size={18}/></NavLink>)}</nav>
            <a href={MAILTO_URL} onClick={() => setMobileOpen(false)} className="mt-4 flex justify-center items-center gap-2 rounded-full py-3.5 text-white font-bold bg-gradient-to-r from-[#3B82F6] to-[#A78BFA]">Contact Us <ArrowRight size={17}/></a>
          </motion.div>
        </>}
      </AnimatePresence>
    </header>
  );
}
