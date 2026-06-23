import React, { useState, useEffect, useRef } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import JoditEditor from 'jodit-react';

const initialFormData = {
  title: '',
  slug: '',
  category: '',
  image: '',
  shortDescription: '',
  content: '',
  authorName: '',
  status: 'published',
  faq: []
};

export default function BlogForm({ blog, onClose, onSave }) {
  const editor = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editorConfig = {
    readonly: false,
    placeholder: 'Start typing your blog content...',
    height: 400,
  };

  useEffect(() => {
    if (blog) {
      setFormData(blog);
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleFaqChange = (index, field, value) => {
    const newFaq = [...formData.faq];
    newFaq[index][field] = value;
    setFormData(prev => ({ ...prev, faq: newFaq }));
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faq: [...prev.faq, { question: '', answer: '' }]
    }));
  };

  const removeFaq = (index) => {
    setFormData(prev => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = blog 
        ? `http://localhost:5003/api/blogs/${blog._id}`
        : 'http://localhost:5003/api/blogs';
      
      const method = blog ? 'PUT' : 'POST';

      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'faq') {
          submitData.append(key, JSON.stringify(formData[key]));
        } else if (key !== 'image') {
          submitData.append(key, formData[key]);
        }
      });

      if (imageFile) {
        submitData.append('image', imageFile);
      } else if (typeof formData.image === 'string') {
        submitData.append('image', formData.image);
      }

      const response = await fetch(url, {
        method,
        body: submitData, // Browser sets Content-Type to multipart/form-data with correct boundary
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Something went wrong');
      }

      onSave(data.data || data); // pass back saved blog
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 p-4">
      <div className="relative w-full max-w-4xl rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b p-4 md:p-5">
          <h3 className="text-xl font-semibold text-slate-800">
            {blog ? 'Edit Blog' : 'Add New Blog'}
          </h3>
          <button
            onClick={onClose}
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-slate-400 hover:bg-slate-200 hover:text-slate-900"
          >
            <X size={24} />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-4 md:p-5">
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Title <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="Leave empty to auto-generate"
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Author Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">Blog Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-blue-700 hover:file:bg-blue-100"
                />
                {!imageFile && formData.image && (
                  <p className="mt-2 text-xs text-slate-500">
                    Current image: <a href={`http://localhost:5003${formData.image}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View</a>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-900">Short Description</label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="2"
                className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="pb-12">
              <label className="mb-2 block text-sm font-medium text-slate-900">Content <span className="text-red-500">*</span></label>
              <JoditEditor
                ref={editor}
                value={formData.content}
                config={editorConfig}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => handleContentChange(newContent)}
                onChange={newContent => {}}
              />
            </div>

            {/* FAQs Section */}
            <div className="mt-6 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-medium text-slate-800">FAQs</h4>
                <button
                  type="button"
                  onClick={addFaq}
                  className="flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-700"
                >
                  <Plus size={16} /> Add FAQ
                </button>
              </div>

              {formData.faq.map((item, index) => (
                <div key={index} className="relative mb-4 rounded-lg border border-slate-200 p-4">
                  <button
                    type="button"
                    onClick={() => removeFaq(index)}
                    className="absolute right-2 top-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Question</label>
                      <input
                        type="text"
                        value={item.question}
                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                        required
                        className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Answer</label>
                      <textarea
                        value={item.answer}
                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                        required
                        rows="2"
                        className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-sm text-slate-900"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {formData.faq.length === 0 && (
                <p className="text-sm text-slate-500">No FAQs added yet.</p>
              )}
            </div>

            <div className="flex items-center justify-end space-x-3 border-t pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
