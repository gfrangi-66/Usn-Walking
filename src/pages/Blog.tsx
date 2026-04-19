import { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    'all',
    'Salute',
    'Tecnica',
    'Eventi',
    'Inclusione',
    'Allenamento',
    'Nutrizione',
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  const categoryColors: { [key: string]: string } = {
    'Salute': 'bg-red-100 text-red-700',
    'Tecnica': 'bg-blue-100 text-blue-700',
    'Eventi': 'bg-purple-100 text-purple-700',
    'Inclusione': 'bg-green-100 text-green-700',
    'Allenamento': 'bg-orange-100 text-orange-700',
    'Nutrizione': 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#0D3B5E] to-[#00838F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black italic mb-6">
              Blog & News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Articoli, approfondimenti e aggiornamenti dal mondo del walking
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#3DA535] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'Tutti gli Articoli' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#3DA535] border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Caricamento articoli...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nessun articolo trovato in questa categoria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  <div className="relative h-56 bg-gray-200 overflow-hidden">
                    {post.image_url ? (
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3DA535] to-[#00838F]">
                        <span className="text-white text-4xl font-black">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-black text-[#0D3B5E] mb-3 line-clamp-2 group-hover:text-[#3DA535] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="flex items-center space-x-2 text-[#3DA535] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Leggi di più</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black italic text-[#0D3B5E] mb-6">
            Vuoi Ricevere le Ultime News?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Iscriviti alla nostra newsletter per rimanere aggiornato su articoli, eventi e novità
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3DA535] focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#3DA535] hover:bg-emerald-600 text-white rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
