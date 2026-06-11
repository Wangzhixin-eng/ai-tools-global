import Link from 'next/link';
import { AITool, categories } from '@/data/tools';

interface ToolCardProps {
  tool: AITool;
}

const pricingLabels = {
  free: { text: 'Free', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  freemium: { text: 'Freemium', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  paid: { text: 'Paid', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  subscription: { text: 'Subscription', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
};

export default function ToolCard({ tool }: ToolCardProps) {
  const category = categories.find(c => c.id === tool.category);
  const pricing = pricingLabels[tool.pricing || 'freemium'];

  return (
    <div className="tool-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden h-full flex flex-col">
      {/* 头部 */}
      <div className="p-5 pb-3 flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl ${category?.color || 'bg-slate-500'} flex items-center justify-center text-2xl flex-shrink-0`}>
          {category?.icon || '🔧'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{tool.name}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{category?.nameCn}</p>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${pricing.color} flex-shrink-0`}>
          {pricing.text}
        </span>
      </div>

      {/* 描述 */}
      <p className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed flex-1">
        {tool.description}
      </p>

      {/* 标签 */}
      <div className="px-5 pb-4 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* 底部操作 */}
      <div className="px-5 pb-4 pt-2 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
        <Link
          href={`/tools/${tool.id}`}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          View Details →
        </Link>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
