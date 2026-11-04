import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { serviceDetails } from '../../data/serviceDetails';

const SEARCH_ALIASES = {
  'web-development': [
    'website banana', 'website banwani hai', 'business website',
    'website developer', 'web development company', 'website design',
    'web site', 'web development'
  ],
  'ecommerce-development': [
    'online store', 'online shop', 'ecommerce website',
    'shopping website', 'online shopping', 'e commerce'
  ],
  'mobile-app-development': [
    'app banana', 'mobile app', 'android app', 'ios app',
    'application development'
  ],
  'custom-software': [
    'software banana', 'business software', 'custom software',
    'management software'
  ],
  'website-redesign': [
    'website redesign', 'website update', 'old website change'
  ],
  'ai-solutions': [
    'ai chatbot', 'chatbot development', 'artificial intelligence'
  ],
  'ui-ux-design': [
    'website design', 'ui design', 'ux design', 'professional designer'
  ],
  'saas-mvp': [
    'startup website', 'startup software', 'saas development'
  ],
  'business-automation': [
    'business automation', 'workflow automation', 'automate business'
  ],
};

const TYPO_CORRECTIONS = {
  websit: 'website',
  websiet: 'website',
  webiste: 'website',
  webistee: 'website',
  devlopment: 'development',
  developement: 'development',
  develpment: 'development',
  ecomerce: 'ecommerce',
  ecommers: 'ecommerce',
  softwere: 'software',
  softwear: 'software',
  softwre: 'software',
  applicaton: 'application',
  aplicaton: 'application',
  moblie: 'mobile',
  desgin: 'design',
  desginer: 'designer',
  busines: 'business',
  bussiness: 'business',
  chatboot: 'chatbot',
  chattbot: 'chatbot',
  automtion: 'automation',
  redsign: 'redesign',
};

const normalize = (value = '') =>
  value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

function correctSpelling(value) {
  return normalize(value)
    .split(' ')
    .map((word) => TYPO_CORRECTIONS[word] || word)
    .join(' ');
}

export default function SmartSearch({ className = '' }) {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const correctedQuery = useMemo(() => correctSpelling(query), [query]);
  const hasCorrection =
    normalize(query).length > 0 && normalize(query) !== correctedQuery;

  const results = useMemo(() => {
    const searchText = correctedQuery;
    if (searchText.length < 2) return [];

    const words = searchText.split(' ').filter(Boolean);

    return serviceDetails
      .map((service) => {
        const searchable = normalize([
          service.title,
          service.description,
          service.primaryKeyword,
          ...(service.secondaryKeywords || []),
          ...(SEARCH_ALIASES[service.slug] || []),
        ].join(' '));

        let score = 0;
        if (searchable.includes(searchText)) score += 10;

        words.forEach((word) => {
          if (searchable.includes(word)) score += 3;
        });

        return { service, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [correctedQuery]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setFocused(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const openService = (slug) => {
    navigate(`/services/${slug}`);
    setQuery('');
    setFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (results.length > 0) {
      openService(results[0].service.slug);
    } else {
      navigate('/services');
      setFocused(false);
    }
  };

  const showSuggestions = focused && query.trim().length >= 2;

  return (
    <div ref={wrapperRef} className={`relative w-full max-w-[280px] ${className}`}>
      <form
        onSubmit={handleSubmit}
        role="search"
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 transition-all focus-within:border-violet-400/60 focus-within:bg-white/10"
      >
        <Search className="h-4 w-4 shrink-0 text-violet-300" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search services..."
          aria-label="Search Cosmovance services"
          aria-expanded={showSuggestions}
          className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="text-slate-400 transition hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </form>

      {showSuggestions && (
        <div className="absolute left-0 right-0 top-full z-[100] mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F24] shadow-2xl shadow-black/40">
          {hasCorrection && (
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-xs text-slate-400">Did you mean?</p>
              <button
                type="button"
                onClick={() => setQuery(correctedQuery)}
                className="mt-1 text-left text-sm font-semibold text-violet-300 hover:text-white"
              >
                {correctedQuery}
              </button>
            </div>
          )}

          <div className="px-4 py-3">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Sparkles size={13} /> Suggested Services
            </p>

            {results.length > 0 ? (
              <div className="space-y-1">
                {results.map(({ service }) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => openService(service.slug)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                  >
                    <span>{service.title}</span>
                    <ArrowRight size={16} className="shrink-0 text-violet-300" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="py-3 text-sm text-slate-400">
                No matching service found. Try another keyword.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              navigate('/services');
              setFocused(false);
            }}
            className="w-full border-t border-white/10 px-4 py-3 text-left text-sm font-medium text-violet-300 transition hover:bg-white/5"
          >
            View all services <ArrowRight className="ml-1 inline" size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
