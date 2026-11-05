import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-[65vh] flex items-center justify-center px-5 pt-32 pb-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">404 · Page not found</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900">This page moved or doesn't exist.</h1>
        <p className="mt-5 text-base leading-7 text-slate-600">The link may be outdated. Visit our services or return to the Cosmovance homepage.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}
