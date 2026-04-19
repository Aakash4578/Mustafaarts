import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const csvURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT6vjZMj6NTjhnEKN3WdpqI0MWyOnvfTIrvN8mjS_X0DWqHvXnhCvKOKFWHrsZlHufNwejfQbb1apDK/pub?output=csv";

    fetch(csvURL)
      .then(res => res.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        setBlogs(results.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h2>
              <p className="text-gray-700 flex-grow">{blog.content}</p>
              <span className="text-gray-500 text-sm mt-4">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;