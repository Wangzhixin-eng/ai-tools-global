import { notFound } from 'next/navigation';
import { aiTools, getToolById, getToolsByCategory, categories } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return aiTools.map(tool => ({ id: tool.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const tool = getToolById(id);
  if (!tool) return { title: 'Tool Not Found' };
  return { title: `${tool.name} | AI Tools Global`, description: tool.description };
}

export default async function ToolDetailPage({ params }: Props) {
  const { id } = await params;
  const tool = getToolById(id);
  
  if (!tool) notFound();

  const category = categories.find(c => c.id === tool.category);
  const relatedTools = getToolsByCategory(tool.category)
    .filter(t => t.id !== tool.id)
    .slice(0, 4);

  const pricingLabels: Record<string, { text: string; color: string }> = {
    free: { text: 'Free', color: 'bg-emerald-100 text-emerald-700' },
    freemium: { text: 'Freemium', color: 'bg-blue-100 text-blue-700' },
    paid: { text: 'Paid', color: 'bg-purple-100 text-purple-700' },
    subscription: { text: 'Subscription', color: 'bg-orange-100 text-orange-700' },
  };
  const pricing = pricingLabels[tool.pricing || 'freemium'];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
          <span>/</span>
          <a href={`/category/${tool.category}`} className="hover:text-indigo-600 transition-colors">{category?.name}</a>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium">{tool.name}</span>
        </nav>

        {/* 工具详情卡片 */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-8 md:p-10 shadow-xl shadow-slate-200/30 dark:shadow-slate-900/20">
          {/* 头部信息 */}
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-16 h-16 rounded-2xl ${category?.color} flex items-center justify-center text-3xl flex-shrink-0`}>
              {category?.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">{tool.name}</h1>
              <p className="text-lg text-slate-500">{category?.name} · {category?.nameCn}</p>
            </div>
          </div>

          {/* 价格标签 + 访问按钮 */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${pricing.color}`}>
              {pricing.text}
            </span>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
            >
              🌐 Visit Official Website →
            </a>
          </div>

          {/* 描述 */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-3">About</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{tool.description}</p>
          </div>

          {/* 标签 */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 分类信息 */}
          <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-400 block mb-1">Category</span>
                <a href={`/category/${tool.category}`} className="font-medium text-indigo-600 hover:text-indigo-700">{category?.nameCn}</a>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Pricing Model</span>
                <span className="font-medium text-slate-800 dark:text-white">{pricing.text}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 同类工具推荐 */}
        {relatedTools.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Similar Tools in {category?.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedTools.map(t => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
