export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🏆</span>
              <span className="font-bold text-lg gradient-text">AI Tools Global</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Curated directory of the best AI tools in 2026. 
              Handpicked from the pyramid of excellence — only the tools that truly matter.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/category/assistant" className="hover:text-indigo-600 transition-colors">🤖 AI Assistants</a></li>
              <li><a href="/category/dev" className="hover:text-indigo-600 transition-colors">💻 Development & Coding</a></li>
              <li><a href="/category/content" className="hover:text-indigo-600 transition-colors">✍️ Content Creation</a></li>
              <li><a href="/category/productivity" className="hover:text-indigo-600 transition-colors">⚡ Productivity</a></li>
              <li><a href="/category/creative" className="hover:text-indigo-600 transition-colors">🎨 Design & Video</a></li>
              <li><a href="/category/automation" className="hover:text-indigo-600 transition-colors">🔗 Automation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-3">About</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              This project is a curated collection of the most impactful AI tools in 2026. 
              Not sponsored — just genuinely useful tools organized for easy discovery.
            </p>
            <p className="text-xs text-slate-400 mt-4">
              © 2026 AI Tools Global. Built with Next.js & ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
