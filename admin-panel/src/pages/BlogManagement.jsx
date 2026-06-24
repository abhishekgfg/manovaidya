import { useEffect, useMemo, useState } from 'react';
import { Activity, AlertCircle, BrainCircuit, CheckCircle2, Edit2, Info, Plus, Search, Target, Trash2, TrendingUp, X, Zap } from 'lucide-react';
import BlogForm from '../components/blogs/BlogForm';
import api from '../api/axiosInstance';

const getScoreTone = (score) => {
  if (score >= 85) return { label: 'Excellent', text: 'text-emerald-700', background: 'bg-emerald-50', border: 'border-emerald-200', color: '#10b981' };
  if (score >= 70) return { label: 'Good', text: 'text-blue-700', background: 'bg-blue-50', border: 'border-blue-200', color: '#3b82f6' };
  if (score >= 50) return { label: 'Needs work', text: 'text-amber-700', background: 'bg-amber-50', border: 'border-amber-200', color: '#f59e0b' };
  return { label: 'Weak', text: 'text-red-700', background: 'bg-red-50', border: 'border-red-200', color: '#ef4444' };
};

const calculateSeoScore = (blog) => {
  const parser = new DOMParser();
  const documentNode = parser.parseFromString(blog.content || '', 'text/html');
  const textContent = documentNode.body.textContent?.replace(/\s+/g, ' ').trim() || '';
  const words = textContent ? textContent.split(' ').filter(Boolean) : [];
  const keyword = blog.focusKeyword?.trim().toLowerCase() || '';
  const title = (blog.metaTitle || blog.title || '').trim();
  const description = (blog.metaDescription || '').trim();
  const links = [...documentNode.querySelectorAll('a[href]')];
  const contentImages = [...documentNode.querySelectorAll('img')];
  const canonicalOrigin = (() => {
    try { return new URL(blog.canonicalUrl).origin; } catch { return ''; }
  })();
  const internalLinks = links.filter((link) => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('/') || (canonicalOrigin && href.startsWith(canonicalOrigin));
  });
  const externalLinks = links.filter((link) => /^https?:\/\//i.test(link.getAttribute('href') || '') && (!canonicalOrigin || !link.getAttribute('href').startsWith(canonicalOrigin)));
  const allImagesHaveAlt = (!blog.image || Boolean(blog.imageAlt?.trim())) && contentImages.every((image) => Boolean(image.getAttribute('alt')?.trim()));
  let schemaIsValid = false;
  if (blog.schemaMarkup?.trim()) {
    try { JSON.parse(blog.schemaMarkup); schemaIsValid = true; } catch { schemaIsValid = false; }
  }

  const checks = [];
  const addCheck = (label, points, maxPoints, recommendation) => {
    checks.push({ label, points, maxPoints, recommendation, status: points === maxPoints ? 'pass' : points > 0 ? 'partial' : 'fail' });
  };

  addCheck('Meta title added', title ? 8 : 0, 8, 'Unique meta title add karein.');
  addCheck('Meta title length', title.length >= 45 && title.length <= 60 ? 4 : title.length >= 30 && title.length <= 65 ? 2 : 0, 4, 'Meta title 45–60 characters rakhein.');
  addCheck('Meta description added', description ? 8 : 0, 8, 'Search result ke liye meta description add karein.');
  addCheck('Meta description length', description.length >= 120 && description.length <= 160 ? 4 : description.length >= 80 && description.length <= 170 ? 2 : 0, 4, 'Meta description 120–160 characters rakhein.');
  addCheck('Focus keyword selected', keyword ? 6 : 0, 6, 'Ek clear focus keyword select karein.');
  addCheck('Keyword in title', keyword && title.toLowerCase().includes(keyword) ? 5 : 0, 5, 'Focus keyword ko title mein naturally use karein.');
  addCheck('Keyword in URL slug', keyword && (blog.slug || '').toLowerCase().includes(keyword.replace(/\s+/g, '-')) ? 4 : 0, 4, 'Focus keyword ko short URL slug mein use karein.');
  addCheck('Keyword in introduction', keyword && (blog.shortDescription || '').toLowerCase().includes(keyword) ? 4 : 0, 4, 'Focus keyword ko short description/introduction mein use karein.');
  addCheck('Keyword in content', keyword && textContent.toLowerCase().includes(keyword) ? 3 : 0, 3, 'Keyword ko content mein naturally use karein; stuffing na karein.');

  const contentPoints = words.length >= 1000 ? 12 : words.length >= 600 ? 8 : words.length >= 300 ? 4 : 0;
  addCheck(`Content depth (${words.length} words)`, contentPoints, 12, 'Detailed article ke liye roughly 1000+ useful words target karein.');
  addCheck('H2/H3 heading structure', documentNode.querySelectorAll('h2, h3').length >= 2 ? 6 : documentNode.querySelectorAll('h2, h3').length ? 3 : 0, 6, 'Content ko descriptive H2/H3 headings mein structure karein.');
  addCheck('Internal links', internalLinks.length >= 2 ? 5 : internalLinks.length ? 3 : 0, 5, 'Kam se kam 2 relevant internal pages/blogs link karein.');
  addCheck('Useful external source', externalLinks.length ? 3 : 0, 3, 'Ek credible external source/reference link karein.');
  addCheck('Relevant image', blog.image || contentImages.length ? 3 : 0, 3, 'Relevant cover/content image add karein.');
  addCheck('Image alt text', allImagesHaveAlt && (blog.image || contentImages.length) ? 4 : 0, 4, 'Har image par descriptive alt text add karein.');
  addCheck('Canonical URL', /^https?:\/\//i.test(blog.canonicalUrl || '') ? 5 : 0, 5, 'Correct absolute canonical URL set karein.');
  addCheck('Valid JSON-LD schema', schemaIsValid ? 5 : 0, 5, 'BlogPosting JSON-LD generate aur validate karein.');
  addCheck('Helpful FAQs', (blog.faq?.length || 0) >= 2 ? 3 : blog.faq?.length ? 2 : 0, 3, 'Relevant user questions ke 2+ FAQs add karein.');
  addCheck('Open Graph sharing', blog.ogTitle && blog.ogDescription && (blog.ogImage || blog.image) ? 4 : blog.ogTitle || blog.ogDescription ? 2 : 0, 4, 'OG title, description aur 1200×630 image add karein.');
  addCheck('Indexable robots setting', blog.robots === 'index,follow' ? 2 : 0, 2, 'Ranking page ke liye robots ko index,follow rakhein.');
  addCheck('Twitter/X card', blog.twitterTitle && blog.twitterDescription && (blog.twitterImage || blog.ogImage || blog.image) ? 2 : 0, 2, 'Twitter title, description aur image add karein.');

  const score = Math.min(100, checks.reduce((total, check) => total + check.points, 0));
  return {
    score,
    tone: getScoreTone(score),
    checks,
    wordCount: words.length,
    passed: checks.filter((check) => check.status === 'pass').length,
    improvements: checks.filter((check) => check.status !== 'pass').sort((a, b) => (b.maxPoints - b.points) - (a.maxPoints - a.points))
  };
};

const getDisplayedSeo = (blog, localAnalysis) => {
  const hasAiScore = Number.isFinite(blog.aiSeoScore);
  const score = hasAiScore ? blog.aiSeoScore : localAnalysis.score;
  return {
    score,
    tone: getScoreTone(score),
    source: hasAiScore ? 'AI deep audit' : 'Preliminary audit'
  };
};

export default function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [seoDetails, setSeoDetails] = useState(null);
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [searchMetrics, setSearchMetrics] = useState(null);
  const [searchMetricsLoading, setSearchMetricsLoading] = useState(false);
  const [searchMetricsError, setSearchMetricsError] = useState('');
  const [aiReview, setAiReview] = useState(null);
  const [aiReviewLoading, setAiReviewLoading] = useState(false);
  const [aiReviewError, setAiReviewError] = useState('');

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/blogs');
      if (data.success) {
        setBlogs(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial API load for the dashboard table.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlogs();
    api.get('/seo/integrations/status')
      .then(({ data }) => setIntegrationStatus(data.data))
      .catch(() => setIntegrationStatus(null));
  }, []);

  const loadAiReviewForBlog = async (blog) => {
    if (!blog?._id) return;
    try {
      setAiReviewLoading(true);
      setAiReviewError('');
      const { data } = await api.post(`/blogs/${blog._id}/gemini-seo-review`);
      const result = data.data;
      const savedAudit = {
        aiSeoScore: result.review.overallScore,
        aiSeoAudit: result.review,
        aiSeoModel: result.model,
        aiSeoAnalyzedAt: result.analyzedAt
      };
      setAiReview(result);
      setBlogs((current) => current.map((item) => item._id === blog._id ? { ...item, ...savedAudit } : item));
      setSeoDetails((current) => current?._id === blog._id ? {
        ...current,
        ...savedAudit,
        seoDisplay: {
          score: result.review.overallScore,
          tone: getScoreTone(result.review.overallScore),
          source: 'AI deep audit'
        }
      } : current);
    } catch (err) {
      setAiReviewError(err.response?.data?.message || err.message);
    } finally {
      setAiReviewLoading(false);
    }
  };

  const openSeoDetails = (blog) => {
    setSeoDetails(blog);
    setSearchMetrics(null);
    setSearchMetricsError('');
    setAiReviewError('');
    if (blog.aiSeoAudit) {
      setAiReview({
        model: blog.aiSeoModel,
        review: blog.aiSeoAudit,
        analyzedAt: blog.aiSeoAnalyzedAt,
        searchMetricsIncluded: Boolean(blog.aiSeoAudit.analysisBasis?.searchConsoleIncluded)
      });
    } else {
      setAiReview(null);
      void loadAiReviewForBlog(blog);
    }
  };

  const loadSearchMetrics = async () => {
    if (!seoDetails) return;
    try {
      setSearchMetricsLoading(true);
      setSearchMetricsError('');
      const { data } = await api.get(`/blogs/${seoDetails._id}/search-console?days=28`);
      setSearchMetrics(data.data);
    } catch (err) {
      setSearchMetricsError(err.response?.data?.message || err.message);
    } finally {
      setSearchMetricsLoading(false);
    }
  };

  const loadAiReview = async () => {
    await loadAiReviewForBlog(seoDetails);
  };

  const handleAddNew = () => {
    setSelectedBlog(null);
    setIsFormOpen(true);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const { data } = await api.delete(`/blogs/${id}`);
      
      if (data.success) {
        setBlogs(prev => prev.filter(b => b._id !== id));
      } else {
        alert(data.message || 'Failed to delete blog');
      }
    } catch (err) {
      alert('Error deleting blog: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleFormSave = () => {
    setIsFormOpen(false);
    fetchBlogs(); // Refresh list to get updated data
  };

  const scoredBlogs = useMemo(() => blogs.map((blog) => {
    const seoAnalysis = calculateSeoScore(blog);
    return { ...blog, seoAnalysis, seoDisplay: getDisplayedSeo(blog, seoAnalysis) };
  }), [blogs]);
  const averageSeoScore = scoredBlogs.length
    ? Math.round(scoredBlogs.reduce((total, blog) => total + blog.seoDisplay.score, 0) / scoredBlogs.length)
    : 0;
  const searchConsoleConfigured = Boolean(
    integrationStatus?.searchConsole?.siteConfigured
    && integrationStatus?.searchConsole?.credentialsConfigured
  );
  const filteredBlogs = scoredBlogs.filter(blog => 
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.authorName?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const activeSeoScore = aiReview?.review?.overallScore ?? seoDetails?.seoAnalysis?.score ?? 0;
  const activeSeoTone = getScoreTone(activeSeoScore);

  if (loading && blogs.length === 0) {
    return <div className="p-8 text-center">Loading blogs...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Blog Management</h1>
          <p className="mt-1 text-sm text-slate-500">Create, edit, and manage your blog posts.</p>
        </div>
        
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add New Blog
        </button>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
        <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-violet-100 p-2.5 text-violet-700"><Info size={20} /></div>
            <div>
              <h2 className="font-semibold text-slate-900">SEO Score vs. Google Rank</h2>
              <p className="mt-1 text-xs leading-5 text-slate-600">Gemini provides a deep 100-point SEO score by auditing content evidence, search intent, metadata, keywords, and E-E-A-T. Your exact Google rank will be available after domain deployment and Search Console verification.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${searchConsoleConfigured ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>Google: {searchConsoleConfigured ? 'Configured' : 'After deployment'}</span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${integrationStatus?.gemini?.configured ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>Gemini: {integrationStatus?.gemini?.configured ? integrationStatus.gemini.model : 'Setup required'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">Average saved score</span><Activity size={18} className="text-violet-600" /></div>
          <p className="mt-2 text-3xl font-bold text-slate-900">{averageSeoScore}<span className="text-sm font-medium text-slate-400">/100</span></p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">Excellent blogs</span><TrendingUp size={18} className="text-emerald-600" /></div>
          <p className="mt-2 text-3xl font-bold text-slate-900">{scoredBlogs.filter((blog) => blog.seoDisplay.score >= 85).length}<span className="text-sm font-medium text-slate-400">/{blogs.length}</span></p>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-100 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search blogs by title, category, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-700">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">SEO Score</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4">{blog.authorName}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                        {blog.category || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => openSeoDetails(blog)}
                        className={`group flex min-w-32 items-center gap-3 rounded-xl border px-3 py-2 text-left transition hover:-translate-y-0.5 hover:shadow-md ${blog.seoDisplay.tone.background} ${blog.seoDisplay.tone.border}`}
                        title="View SEO score details"
                      >
                        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-800" style={{ background: `conic-gradient(${blog.seoDisplay.tone.color} ${blog.seoDisplay.score * 3.6}deg, #e2e8f0 0deg)` }}>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">{blog.seoDisplay.score}</span>
                        </span>
                        <span><span className={`block text-xs font-semibold ${blog.seoDisplay.tone.text}`}>{blog.seoDisplay.tone.label}</span><span className="block text-[10px] text-slate-500">{blog.seoDisplay.source}</span></span>
                      </button>
                    </td>
                    <td className="px-6 py-4">{blog.views}</td>
                    <td className="px-6 py-4">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="rounded-lg p-1.5 text-blue-600 hover:bg-blue-50"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="rounded-lg p-1.5 text-red-600 hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-8 text-center text-slate-500">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isFormOpen && (
        <BlogForm
          blog={selectedBlog}
          onClose={() => setIsFormOpen(false)}
          onSave={handleFormSave}
        />
      )}

      {seoDetails && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">On-page SEO audit</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{seoDetails.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{seoDetails.seoAnalysis.wordCount} words · {seoDetails.seoAnalysis.passed}/{seoDetails.seoAnalysis.checks.length} checks fully passed</p>
              </div>
              <button type="button" onClick={() => setSeoDetails(null)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><X size={20} /></button>
            </div>

            <div className="max-h-[calc(90vh-96px)] overflow-y-auto p-5">
              <div className={`mb-5 flex items-center justify-between rounded-2xl border p-5 ${activeSeoTone.background} ${activeSeoTone.border}`}>
                <div><p className={`text-sm font-semibold ${activeSeoTone.text}`}>{activeSeoTone.label}</p><p className="mt-1 text-xs text-slate-600">{aiReview ? `Gemini deep audit · ${aiReview.review.confidence || 'medium'} confidence` : aiReviewLoading ? 'AI evidence analyze कर रहा है…' : 'Preliminary content-field audit'}</p></div>
                <p className="text-4xl font-bold text-slate-900">{activeSeoScore}<span className="text-base text-slate-400">/100</span></p>
              </div>

              <div className="mb-6 grid gap-4 xl:grid-cols-2">
                <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div><h4 className="text-sm font-bold text-slate-900">Google Search Console</h4><p className="mt-1 text-xs text-slate-500">{searchConsoleConfigured ? 'Exact page · last 28 available days' : 'Production domain required'}</p></div>
                    <button type="button" onClick={loadSearchMetrics} disabled={!searchConsoleConfigured || searchMetricsLoading} className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500">{!searchConsoleConfigured ? 'After deployment' : searchMetricsLoading ? 'Loading...' : searchMetrics ? 'Refresh' : 'Load ranking'}</button>
                  </div>
                  {!searchConsoleConfigured && <p className="mt-3 rounded-lg border border-blue-100 bg-white p-3 text-xs leading-5 text-slate-600">Google localhost pages को index या rank-track नहीं करता। Domain live होने पर property URL और credentials configure करके यह automatically enable हो जाएगा.</p>}
                  {searchMetricsError && <p className="mt-3 rounded-lg bg-red-100 p-2.5 text-xs text-red-700">{searchMetricsError}</p>}
                  {searchMetrics && (
                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-2">
                        <div className="rounded-xl bg-white p-3"><p className="text-[10px] uppercase text-slate-400">Avg position</p><p className="mt-1 text-xl font-bold text-blue-700">{searchMetrics.position ?? '—'}</p></div>
                        <div className="rounded-xl bg-white p-3"><p className="text-[10px] uppercase text-slate-400">Impressions</p><p className="mt-1 text-xl font-bold text-slate-900">{searchMetrics.impressions}</p></div>
                        <div className="rounded-xl bg-white p-3"><p className="text-[10px] uppercase text-slate-400">Clicks</p><p className="mt-1 text-xl font-bold text-slate-900">{searchMetrics.clicks}</p></div>
                        <div className="rounded-xl bg-white p-3"><p className="text-[10px] uppercase text-slate-400">CTR</p><p className="mt-1 text-xl font-bold text-slate-900">{searchMetrics.ctr}%</p></div>
                      </div>
                      {!searchMetrics.hasData && <p className="mt-3 text-xs text-slate-500">इस exact canonical page के लिए selected period में Search Console data नहीं मिला.</p>}
                      {searchMetrics.topQueries.length > 0 && (
                        <div className="mt-3"><p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">Top queries</p><div className="space-y-1.5">{searchMetrics.topQueries.slice(0, 5).map((item) => <div key={item.query} className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-2 text-xs"><span className="truncate text-slate-700">{item.query}</span><span className="shrink-0 font-semibold text-blue-700">#{item.position}</span></div>)}</div></div>
                      )}
                    </div>
                  )}
                </section>

                <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div><h4 className="text-sm font-bold text-slate-900">Gemini SEO Strategist</h4><p className="mt-1 text-xs text-slate-500">Content + available GSC data review</p></div>
                    <button type="button" onClick={loadAiReview} disabled={aiReviewLoading} className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-700 disabled:opacity-60">{aiReviewLoading ? 'Analyzing...' : aiReview ? 'Run again' : 'Generate review'}</button>
                  </div>
                  {aiReviewError && <p className="mt-3 rounded-lg bg-red-100 p-2.5 text-xs text-red-700">{aiReviewError}</p>}
                  {aiReview && (
                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-violet-100 bg-white p-4">
                        <div className="flex items-start gap-3"><BrainCircuit size={20} className="mt-0.5 shrink-0 text-violet-600" /><div><p className="text-xs leading-5 text-slate-700">{aiReview.review.summary}</p><p className="mt-2 text-[11px] font-medium text-violet-700">{aiReview.review.scoreRationale}</p></div></div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-xl bg-white p-3"><p className="text-[9px] font-bold uppercase text-slate-400">AI SEO score</p><p className="mt-1 text-2xl font-bold text-violet-700">{aiReview.review.overallScore}<span className="text-xs text-slate-400">/100</span></p></div>
                        <div className="rounded-xl bg-white p-3"><p className="text-[9px] font-bold uppercase text-slate-400">Intent match</p><p className="mt-1 text-2xl font-bold text-blue-700">{aiReview.review.searchIntent?.matchScore ?? '—'}<span className="text-xs text-slate-400">/100</span></p></div>
                        <div className="rounded-xl bg-white p-3"><p className="text-[9px] font-bold uppercase text-slate-400">Readiness</p><p className="mt-1 text-2xl font-bold text-emerald-700">{aiReview.review.rankingPotential?.score ?? '—'}<span className="text-xs text-slate-400">/100</span></p></div>
                      </div>

                      <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">AI score breakdown</p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {(aiReview.review.categoryScores || []).map((category) => (
                            <div key={category.category} className="rounded-xl border border-violet-100 bg-white p-3">
                              <div className="flex items-center justify-between gap-2"><p className="text-xs font-semibold text-slate-800">{category.category}</p><span className="text-xs font-bold text-violet-700">{category.score}/{category.maxScore}</span></div>
                              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-500" style={{ width: `${Math.min(100, (category.score / category.maxScore) * 100)}%` }} /></div>
                              <p className="mt-2 text-[10px] leading-4 text-slate-500">{category.verdict}</p>
                              {category.actions?.[0] && <p className="mt-1 text-[10px] font-medium leading-4 text-violet-700">Next: {category.actions[0]}</p>}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-white p-4">
                        <div className="flex items-center justify-between gap-2"><p className="text-[10px] font-bold uppercase text-violet-600">Metadata & SERP preview</p><span className="text-[10px] text-slate-400">Title {aiReview.review.metadataAudit?.titleScore ?? '—'} · Description {aiReview.review.metadataAudit?.descriptionScore ?? '—'}</span></div>
                        <div className="mt-3 rounded-lg border border-slate-200 p-3"><p className="text-sm font-medium text-blue-700">{aiReview.review.metadataAudit?.serpPreviewTitle || aiReview.review.suggestedMetaTitle}</p><p className="mt-1 text-xs leading-5 text-slate-600">{aiReview.review.metadataAudit?.serpPreviewDescription || aiReview.review.suggestedMetaDescription}</p><p className="mt-1 text-[10px] text-emerald-700">/{aiReview.review.suggestedSlug}</p></div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2"><div><p className="text-[10px] font-bold text-slate-700">Title issues</p><ul className="mt-1 list-disc space-y-1 pl-4 text-[10px] leading-4 text-slate-500">{(aiReview.review.metadataAudit?.titleIssues || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="text-[10px] font-bold text-slate-700">Description issues</p><ul className="mt-1 list-disc space-y-1 pl-4 text-[10px] leading-4 text-slate-500">{(aiReview.review.metadataAudit?.descriptionIssues || []).map((item) => <li key={item}>{item}</li>)}</ul></div></div>
                        <p className="mt-3 text-[11px] text-violet-700">Primary keyword: <strong>{aiReview.review.suggestedFocusKeyword}</strong></p>
                        <p className="mt-1 text-[10px] text-slate-500">Meta keywords: {(aiReview.review.suggestedMetaKeywords || []).join(', ')}</p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white p-4"><div className="flex items-center gap-2"><Target size={16} className="text-blue-600" /><p className="text-xs font-bold text-slate-800">Search intent</p></div><p className="mt-2 text-[11px] leading-5 text-slate-600"><strong>{aiReview.review.searchIntent?.primaryIntent}</strong> · {aiReview.review.searchIntent?.targetAudience}</p><p className="mt-2 text-[10px] leading-4 text-blue-700">{aiReview.review.searchIntent?.recommendedAngle}</p><div className="mt-2 flex flex-wrap gap-1">{(aiReview.review.searchIntent?.likelySearchQueries || []).slice(0, 5).map((item) => <span key={item} className="rounded-full bg-blue-50 px-2 py-1 text-[9px] text-blue-700">{item}</span>)}</div></div>
                        <div className="rounded-xl bg-white p-4"><div className="flex items-center gap-2"><Zap size={16} className="text-amber-500" /><p className="text-xs font-bold text-slate-800">Keyword strategy</p></div><p className="mt-2 text-[11px] leading-5 text-slate-600">{aiReview.review.keywordStrategy?.placementAssessment}</p><p className="mt-2 text-[10px] text-slate-500">Stuffing risk: <strong>{aiReview.review.keywordStrategy?.stuffingRisk}</strong></p><div className="mt-2 flex flex-wrap gap-1">{(aiReview.review.keywordStrategy?.semanticTerms || []).slice(0, 8).map((item) => <span key={item} className="rounded-full bg-amber-50 px-2 py-1 text-[9px] text-amber-700">{item}</span>)}</div></div>
                      </div>

                      <div><p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-500">Priority actions</p><div className="space-y-2">{(aiReview.review.priorityActions || []).map((action, index) => <div key={`${action.title}-${index}`} className="rounded-xl border border-violet-100 bg-white p-3"><div className="flex items-center gap-2"><span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${action.priority === 'high' ? 'bg-red-100 text-red-700' : action.priority === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{action.priority}</span><p className="text-xs font-semibold text-slate-800">{action.title}</p></div><p className="mt-1 text-[10px] leading-4 text-slate-500">{action.reason}</p><p className="mt-1 text-[11px] font-medium leading-5 text-violet-700">{action.exactRecommendation}</p></div>)}</div></div>

                      <details className="rounded-xl bg-white p-4 text-xs"><summary className="cursor-pointer font-semibold text-violet-700">Open complete deep audit</summary><div className="mt-4 grid gap-4 text-slate-600 sm:grid-cols-2"><div><p className="font-semibold text-slate-800">Content gaps</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.contentGaps || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="font-semibold text-slate-800">Suggested headings</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.suggestedHeadings || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="font-semibold text-slate-800">Internal links</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.internalLinkIdeas || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="font-semibold text-slate-800">E-E-A-T & trust</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.eeatRecommendations || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="font-semibold text-slate-800">Ranking blockers</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.rankingPotential?.blockers || []).map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="font-semibold text-slate-800">Quick wins</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.rankingPotential?.quickWins || []).map((item) => <li key={item}>{item}</li>)}</ul></div>{(aiReview.review.riskFlags || []).length > 0 && <div><p className="font-semibold text-red-700">Risk flags</p><ul className="mt-1 list-disc space-y-1 pl-5">{aiReview.review.riskFlags.map((item) => <li key={item}>{item}</li>)}</ul></div>}<div><p className="font-semibold text-slate-800">Data limitations</p><ul className="mt-1 list-disc space-y-1 pl-5">{(aiReview.review.analysisBasis?.limitations || []).map((item) => <li key={item}>{item}</li>)}</ul></div></div></details>
                      <p className="text-[10px] text-slate-400">Model: {aiReview.model} · Analyzed: {aiReview.analyzedAt ? new Date(aiReview.analyzedAt).toLocaleString() : 'now'} · GSC evidence: {aiReview.searchMetricsIncluded ? 'Included' : 'Not available'}</p>
                    </div>
                  )}
                </section>
              </div>

              <h4 className="mb-3 text-sm font-semibold text-slate-900">Audit breakdown</h4>
              <div className="space-y-2">
                {seoDetails.seoAnalysis.checks.map((check) => (
                  <div key={check.label} className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                    {check.status === 'pass' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" /> : <AlertCircle size={18} className={`mt-0.5 shrink-0 ${check.status === 'partial' ? 'text-amber-500' : 'text-red-500'}`} />}
                    <div className="min-w-0 flex-1"><p className="text-sm font-medium text-slate-800">{check.label}</p>{check.status !== 'pass' && <p className="mt-0.5 text-xs leading-5 text-slate-500">{check.recommendation}</p>}</div>
                    <span className="shrink-0 text-xs font-bold text-slate-600">{check.points}/{check.maxPoints}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <button type="button" onClick={() => { setSeoDetails(null); handleEdit(seoDetails); }} className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"><Edit2 size={16} /> Improve this blog</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
