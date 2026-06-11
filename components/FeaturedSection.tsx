import { getFeaturedTools, categories } from '@/data/tools';
import ToolCard from './ToolCard';

export default function FeaturedSection() {
  const featured = getFeaturedTools();

  return (
    <section id="featured" className="max-w-6xl mx-auto px-4 pb-16">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold mb-3">
          ⭐ Top Picks of 2026
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          Featured AI Tools
        </h2>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          The cream of the crop — these tools define the state of the art in 2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featured.map(tool => (
          <div key={tool.id} className="relative">
            <ToolCard tool={tool} />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
              ⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
