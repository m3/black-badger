import { useState, memo } from 'react';
import blogData from '../data/blog.json';

const BlogPostCard = memo(({ post, lang, onReadMore }) => {
  const title = post.title[lang];
  const excerpt = post.excerpt[lang];
  const isLong = excerpt.length > 120;
  const displayExcerpt = isLong ? excerpt.substring(0, 117) + '...' : excerpt;

  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="blog-card">
      <div className="blog-card-border-glow"></div>
      <div className="blog-card-inner">
        <div className="blog-card-meta">
          <span className="blog-card-category">{post.category}</span>
          <span className="blog-card-date">{formattedDate}</span>
        </div>

        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{displayExcerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <div className="blog-card-tags">
            {post.tags.slice(0, 4).map(tag => (
              <span key={tag} className="blog-tag">#{tag}</span>
            ))}
          </div>
        )}

        <div className="blog-card-footer">
          <span className="blog-card-author">
            <span className="author-dot"></span>
            {post.author}
          </span>
          <button
            className="btn-glow btn-blog-read"
            onClick={() => onReadMore(post)}
          >
            {lang === 'sv' ? 'Läs Mer' : 'Read More'}
          </button>
        </div>
      </div>
    </article>
  );
});

const BlogPostModal = memo(({ post, lang, onClose }) => {
  const title = post.title[lang];
  const content = post.content[lang];
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const renderContent = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === '') {
        key++;
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="blog-post-heading">
            {line.replace('## ', '')}
          </h2>
        );
        continue;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="blog-post-title-text">
            {line.replace('# ', '')}
          </h1>
        );
        continue;
      }

      elements.push(
        <p key={key++} className="blog-post-paragraph">{line}</p>
      );
    }

    return elements;
  };

  return (
    <div
      className="inquiry-overlay blog-post-overlay"
      onClick={(e) => {
        if (e.target.classList.contains('inquiry-overlay')) onClose();
      }}
    >
      <div className="blog-post-modal">
        <button className="btn-close-modal blog-post-close" onClick={onClose}>×</button>

        <div className="blog-post-header">
          <div className="blog-post-meta-top">
            <span className="blog-card-category">{post.category}</span>
            <span className="blog-post-date">{formattedDate}</span>
          </div>
          <h1 className="blog-post-main-title">{title}</h1>
          <div className="blog-post-author-line">
            <span className="author-dot"></span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="blog-post-body">
          {renderContent(content)}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="blog-post-tags-bottom">
            {post.tags.map(tag => (
              <span key={tag} className="blog-tag">#{tag}</span>
            ))}
          </div>
        )}

        <button className="btn-glow blog-post-back-btn" onClick={onClose}>
          {lang === 'sv' ? 'Tillbaka' : 'Back to Journal'}
        </button>
      </div>
    </div>
  );
});

export const BlogSection = ({ lang }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogT = {
    en: {
      tagline: "FROM THE WORKSHOP",
      title: "Journal",
      desc: "Technical essays, material deep-dives, and stories from the Black Badger workshop in Gothenburg."
    },
    sv: {
      tagline: "FRÅN VERKSTADEN",
      title: "Journal",
      desc: "Tekniska uppsatser, materialupptäckter och berättelser från Black Badgers verkstad i Göteborg."
    }
  };

  const bt = blogT[lang];
  const posts = blogData.posts;

  return (
    <section id="journal" className="section bg-dim">
      <div className="bb-container">
        <div className="section-header">
          <span className="section-tagline">{bt.tagline}</span>
          <h2 className="section-title">{bt.title}</h2>
          <p className="section-desc">{bt.desc}</p>
        </div>

        <div className="blog-grid">
          {posts.map(post => (
            <BlogPostCard
              key={post.id}
              post={post}
              lang={lang}
              onReadMore={setSelectedPost}
            />
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          lang={lang}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};
