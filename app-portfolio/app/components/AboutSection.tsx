export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a full-stack developer with a passion for creating digital experiences that make a difference.
              With expertise in modern web technologies, I love turning complex problems into simple, beautiful solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career focused on building
              scalable applications, mentoring others, and staying at the forefront of technological innovation.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  JJ
                </div>
                <p className="text-gray-600 dark:text-gray-400">Profile Photo</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Learning</h4>
            <p className="text-gray-600 dark:text-gray-400">Quickly adapt to new technologies and frameworks</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Player</h4>
            <p className="text-gray-600 dark:text-gray-400">Collaborate effectively with cross-functional teams</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quality Focus</h4>
            <p className="text-gray-600 dark:text-gray-400">Deliver high-quality, maintainable code</p>
          </div>
        </div>
      </div>
    </section>
  );
}
