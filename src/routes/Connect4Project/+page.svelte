
<section class="min-h-screen text-white px-6 py-24 max-w-5xl mx-auto leading-relaxed space-y-24">
  <!-- Project Title -->
  <div class="text-center space-y-6">
    <h1 class="text-6xl sm:text-7xl font-bold gradient-text">Connect 4 AI</h1>
    <p class="text-lg text-slate-300 max-w-3xl mx-auto">
      An intelligent agent for Connect 4, built with <span class="gradient-text">Python</span>,
      <span class="gradient-text">Minimax</span>, and <span class="gradient-text">Alpha-Beta Pruning</span>.
    </p>
    <img
      src="/images/portfolioImage1.png"
      alt="Project thumbnail image of two robots playing a board game"
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
        For my Intelligent Systems class, I worked with two other students to create an
        AI player for Connect 4 using the <span class="gradient-text">Minimax Algorithm</span>.
        We optimized performance with <span class="gradient-text">Alpha-Beta Pruning</span>.
        The AI evaluates moves recursively, applying heuristics to balance offense and defense.
        Results showed our agent consistently outperformed other strategies—even holding its own against human players.
        (<a href="https://en.wikipedia.org/wiki/Connect_Four" target="_blank" class="underline text-purple-400 hover:text-purple-300">Learn more about Connect 4</a>)
      </p>
    </div>

    <!-- Implementation -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Our Implementation</h2>
      </div>
      <img
        src="/images/Ai Code Snippet.png"
        alt="Snippet of our implementation"
        title="Minimax Algorithm used within our Connect 4 Project"
        class="rounded-xl shadow-2xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300"
      />
      <p class="text-lg text-slate-200 leading-8">
        We started with a human vs. human version of Connect 4 using
        <a href="https://www.pygame.org" target="_blank" class="underline text-purple-400 hover:text-purple-300">Pygame</a>.
        Then we replaced one player with a basic AI making random moves, and finally implemented
        <a href="https://en.wikipedia.org/wiki/Minimax" target="_blank" class="underline text-purple-400 hover:text-purple-300">Minimax</a>.
        The challenge was designing an evaluation function to score game states and guide the AI’s decisions.
      </p>
    </div>

    <!-- Evaluation Function -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Evaluation Function</h2>
      </div>
      <p class="text-lg text-slate-200 leading-8 mb-6">
        The evaluation function assigns scores to board states by checking connected pieces,
        blocking opponent threats, and rewarding moves that build toward four-in-a-row.
        While effective, computation became slow as tree depth increased.
      </p>
      <p class="text-lg text-slate-200 leading-8">
        To make deeper searches practical, we optimized Minimax with
        <a href="https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/#"
           target="_blank"
           class="underline text-purple-400 hover:text-purple-300">Alpha-Beta Pruning</a>,
        reducing redundant calculations and improving efficiency.
      </p>
    </div>

    <!-- Alpha-Beta -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Alpha-Beta Pruning</h2>
      </div>
      <p class="text-lg text-slate-200 leading-8">
        Alpha-Beta pruning allowed us to prune entire branches of the search tree that would never affect the outcome.
        With it, our agent could reliably search to depth 8 without unacceptable delays.
        This upgrade made the AI noticeably stronger and more competitive.
      </p>
    </div>

    <!-- Bitboards -->
    <div>
      <div
        class="flex flex-col gap-2 text-center relative
               before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
               before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
               after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
               after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
               py-4 mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Bitboards</h2>
      </div>
      <img
        src="/images/Bitboard Representation.png"
        alt="Visualization of the Connect 4 board using the Bitboard Method"
        title="Visualization of the Connect 4 board using the Bitboard Method"
        class="rounded-xl shadow-2xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300"
      />
      <p class="text-lg text-slate-200 leading-8">
        We explored <a href="https://en.wikipedia.org/wiki/Bitboard" target="_blank"
        class="underline text-purple-400 hover:text-purple-300">bitboards</a> to further
        optimize performance. Representing the board in binary allowed faster checks with
        bitwise operations instead of nested loops. Although our bitboard implementation
        was incomplete, it highlighted exciting future potential for AI efficiency.
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
        Developing the Connect 4 AI was challenging and rewarding.
        By combining Minimax, Alpha-Beta pruning, and custom evaluation functions,
        we built an agent capable of competitive play.
        This project deepened our understanding of algorithms, heuristics,
        and optimizations in AI game design.
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
