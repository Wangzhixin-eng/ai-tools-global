import { categories } from '@/data/tools';

interface CategoryCardProps {
  category: (typeof categories)[0];
  toolCount: number;
}

export default function CategoryCard({ category, toolCount }: CategoryCardProps) {
  return (
    <div className={`category-card ${category.color} rounded-2xl p-6 text-white cursor-pointer h-full`}>
      <div className="text-4xl mb-3">{category.icon}</div>
      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
      <p className="text-sm opacity-90 mb-2">{category.nameCn}</p>
      <p className="text-sm opacity-75 leading-relaxed mb-4">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm bg-white/20 px-3 py-1 rounded-full font-medium">
          {toolCount} tools
        </span>
        <span className="text-lg opacity-60">→</span>
      </div>
    </div>
  );
}
