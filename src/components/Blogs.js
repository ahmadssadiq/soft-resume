import React from 'react';
import './Blogs.css';

const BLOGS = [
    {
        title: "Why AI Search Is the Next Frontier",
        subtitle: 'AI-driven SEO',
        url: 'https://substack.com/home/post/p-167306788',
        readTime: '6m read',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Unsplash: person holding white android smartphone
    },
];

const PLACEHOLDER_COUNT = 7;

function Blogs() {
    return (
        <section className="blogs-section">
            <h2>Blogs</h2>
            <div className="blogs-grid">
                {BLOGS.map((blog, idx) => (
                    <a
                        className={`blog-card blog-card-bg${(idx % 3) + 1}`}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                    >
                        <div className="blog-card-img">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <div className="blog-card-content">
                            <span className="blog-card-subtitle">{blog.subtitle}</span>
                            <h3 className="blog-card-title">{blog.title}</h3>
                            <span className="blog-card-readtime">{blog.readTime}</span>
                        </div>
                    </a>
                ))}
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, idx) => (
                    <div className="blog-card-placeholder" key={`placeholder-${idx}`}></div>
                ))}
            </div>
        </section>
    );
}

export default Blogs; 