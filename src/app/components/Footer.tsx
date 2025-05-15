export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Courtney Beka. All rights reserved.
          </p>
          <p className="text-sm">
            <a href="mailto:courtneybekadesigns@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
              courtneybekadesigns@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 