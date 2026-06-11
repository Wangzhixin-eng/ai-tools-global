import { notFound } from 'next/navigation';
import { categories, getToolsByCategory, aiTools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categories.map(cat => ({ id: cat.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const category = categories.find(c => c.id === id);
  if (!category) return { title: 'Category Not Found' };
  return { title: `${category.name} | AI Tools Global`, description: category.description };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = categories.find(c => c.id === id);
  
  if (!category) notFound();

  const tools = getToolsByCategory(id);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* 分类头部 */}
        <div className={`${category.color} rounded-3xl p-8 md:p-12 text-white mb-10 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <span className="text-6xl mb-4 block">{category.icon}</span>
            <h1 className="text-4xl md:text-5xl font-black mb-2">{category.name}</h1>
            <p className="text-xl opacity-90 mb-4">{category.nameCn}</p>
            <p className="text-base opacity-80 max-w-2xl leading-relaxed">{category.description}</p>
            <div className="mt-6 text-sm opacity-75">
              {tools.length} tools in this category
            </div>
          </div>
        </div>

        {/* 工具列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {tools.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl">No tools in this category yet</p>
          </div>
        )}

        {/* 其他分类 */}
        <section className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(c => c.id !== id).map(cat => {
              const count = aiTools.filter(t => t.category === cat.id).length;
              return (
                <a
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className={`p-4 ${cat.color} rounded-xl text-white text-center hover:scale-105 transition-transform`}
                >
                  <span className="text-2xl block mb-1">{cat.icon}</span>
                  <span className="text-xs font-medium block">{cat.nameCn}</span>
                  <span className="text-xs opacity-60">{count}</span>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
