
<section class="min-h-screen text-white px-6 py-24 max-w-5xl mx-auto leading-relaxed space-y-24">
  <!-- Project Title -->
  <div class="text-center space-y-6">
    <h1 class="text-6xl sm:text-7xl font-bold gradient-text">BeeWise Parking</h1>
    <p class="text-lg text-slate-300 max-w-3xl mx-auto">
      An Android app built for <span class="gradient-text">Web & Mobile Programming</span>,
      enabling stewards to manage parking violations with <span class="gradient-text">Java</span>,
      <span class="gradient-text">PHP</span>, <span class="gradient-text">JSON</span>, and
      a <span class="gradient-text">MySQL Database</span>.
    </p>
    <img
      src="/images/portfolioImage4.png"
      alt="BeeWise Parking App Logo"
      class="rounded-2xl shadow-2xl mx-auto max-w-3xl w-full border border-slate-700 hover:scale-[1.02] transition-transform duration-300"
    />
  </div>

  <!-- Section Wrapper -->
  <div class="space-y-20">
    <!-- What We Did -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">What We Did</h2>
      </div>
      <p class="text-lg text-slate-200 leading-8">
        For my Web & Mobile Programming course, I worked with two teammates to create an
        Android app that let Parking Stewards <span class="gradient-text">submit, view,
        modify, and delete violations</span> for vehicles in a connected database.
        The app also supported adding new vehicles via a <span class="gradient-text">barcode ID scanner</span>.
        This final project brought together everything we learned in class, from databases to
        <span class="gradient-text">MVC architecture</span> and securing web services.
      </p>
    </div>

    <!-- Developing the App -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Developing the App</h2>
      </div>
      <img
        src="/images/bwScreens.png"
        alt="BeeWise Parking App Screens"
        class="rounded-xl shadow-2xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300"
      />
      <p class="text-lg text-slate-200 leading-8 mb-6">
        The project idea came from real experiences with campus parking at Baldwin Wallace.
        We envisioned a system where stewards could log violations digitally, tied to the
        school’s platform for student payments. Our development began mid-semester, with new
        features added weekly. 
      </p>
      <p class="text-lg text-slate-200 leading-8">
        My main contributions included building the <span class="gradient-text">RecyclerView</span>
        for displaying violations, helping with the login system, and implementing
        <span class="gradient-text">HTTP methods</span> to communicate with the web service.
        Teammates handled the barcode scanner and database management. Through collaboration
        and weekly stand-ups, we built the app into a fully functioning Android solution
        using <span class="gradient-text">Java, PHP, JSON, and HTTP</span>.
      </p>
    </div>

    <!-- Database -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">The Database</h2>
      </div>
      <img
        src="/images/ListView.png"
        alt="App database list view"
        class="rounded-xl shadow-2xl mx-auto mb-8 w-64 hover:scale-[1.02] transition-transform duration-300"
      />
      <p class="text-lg text-slate-200 leading-8">
        We built a <span class="gradient-text">relational database</span> with tables for
        user accounts (with hashed passwords), car information, and violations.
        Development tools included <span class="gradient-text">PHPStorm</span> for web services
        and <span class="gradient-text">Postman</span> for testing.
        While tying the cars and violations tables together was challenging at first,
        we refined the schema and linked them successfully.
      </p>
    </div>

    <!-- Conclusion -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Conclusion</h2>
      </div>
      <p class="text-lg text-slate-200 leading-8">
        BeeWise Parking was a fun and challenging way to apply
        <span class="gradient-text">Java, MySQL, PHP, and JSON</span> to real-world app development.
        From designing the UI to securing the web services, the project gave me hands-on
        experience in <span class="gradient-text">mobile development and backend integration</span>.
        It remains one of my strongest portfolio pieces from university.
      </p>
    </div>
  </div>

  <!-- Back Button -->
  <div class="text-center mt-24">
    <a href="/#projects"
       class="btn btn-primary px-8 py-3 text-lg hover:text-purple-400 duration-200 shadow-lg">
       ← Back to Projects
    </a>
  </div>
</section>
