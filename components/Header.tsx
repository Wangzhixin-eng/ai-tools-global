export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🏆</span>
          <span className="text-xl font-bold gradient-text">AI Tools Global</span>
        </a>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-medium">Home</a>
          <a href="/category/assistant" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-medium">Categories</a>
          <a href="#featured" className="text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-medium">Featured</a>
          <a
            href="https://github.com/Wangzhixin-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
