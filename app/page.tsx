'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { aiTools, categories, searchTools } from '@/data/tools';
import CategoryCard from '@/components/CategoryCard';
import ToolCard from '@/components/ToolCard';
import FeaturedSection from '@/components/FeaturedSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    let tools = aiTools;
    if (activeCategory) {
      tools = tools.filter(t => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tools = tools.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return tools;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - 金字塔风格 */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-950" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* 标题 */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="gradient-text">2026 Best AI Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-3 font-medium">
            Curated Pyramid Selection
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            The definitive collection of {aiTools.length} premium AI tools across {categories.length} categories — handpicked for quality and impact
          </p>

          {/* 搜索框 */}
          <div className="max-w-xl mx-auto relative mb-8">
            <input
              type="text"
              placeholder="🔍 Search AI tools... (e.g. ChatGPT, video, coding)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg text-lg shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all"
            />
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-50 max-h-80 overflow-y-auto">
                {filteredTools.slice(0, 8).map(tool => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-2xl">{categories.find(c => c.id === tool.category)?.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{tool.name}</div>
                      <div className="text-sm text-slate-500">{tool.tags.slice(0, 2).join(' · ')}</div>
                    </div>
                  </Link>
                ))}
                {filteredTools.length === 0 && (
                  <div className="px-4 py-6 text-center text-slate-400">No tools found</div>
                )}
              </div>
            )}
          </div>

          {/* 分类筛选标签 */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCategory 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                  : 'bg-white/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
              }`}
            >
              ✨ All ({aiTools.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id 
                    ? `${cat.color} text-white shadow-lg` 
                    : 'bg-white/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                {cat.icon} {cat.nameCn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 精选推荐 */}
      {!searchQuery && !activeCategory && <FeaturedSection />}

      {/* 分类卡片网格 */}
      {!searchQuery && !activeCategory && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link key={cat.id} href={`/category/${cat.id}`}>
                <CategoryCard category={cat} toolCount={aiTools.filter(t => t.category === cat.id).length} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 工具列表 */}
      {(searchQuery || activeCategory) && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">
            {activeCategory ? `${categories.find(c => c.id === activeCategory)?.icon} ${categories.find(c => c.id === activeCategory)?.name}` : `Search Results (${filteredTools.length})`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          {filteredTools.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl">No tools found matching your criteria</p>
            </div>
          )}
        </section>
      )}

      <Footer />
    </div>
  );
}
