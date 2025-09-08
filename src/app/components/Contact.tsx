'use client';

import { useEffect } from 'react';

export default function Contact() {

  useEffect(() => {}, []);
  return (
  <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
  <h2 className="font-bold text-center mb-12 text-base">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-base font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-base font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-surface"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
