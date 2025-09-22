<script>
  import { onMount } from 'svelte';

  let greetings = ['Hello!', 'Bonjour!', 'Hola!', 'Ciao!', 'こんにちは!', '안녕하세요!', 'Привет!', 'مرحبا!', 'Olá!'];
  let index = 0;
  let current = greetings[0];

  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length;
      current = greetings[index];
    }, 2000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <style>
    body {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #1e293b 50%, #0f172a 100%);
      min-height: 100vh;
    }

    .gradient-text {
      background: linear-gradient(135deg, #e879f9 0%, #c084fc 25%, #a855f7 50%, #8b5cf6 75%, #7c3aed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
      filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.4)) 
              drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))
              drop-shadow(0 0 60px rgba(124, 58, 237, 0.2));
    }

    .gradient-icon {
      background: linear-gradient(135deg, #e879f9 0%, #c084fc 25%, #a855f7 50%, #8b5cf6 75%, #7c3aed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 0 12px rgba(139, 92, 246, 0.5));
    }

    .card-hover {
      transition: all 0.3s ease;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(71, 85, 105, 0.5);
    }

    .card-hover:hover {
      transform: translateY(-8px);
      background: rgba(30, 41, 59, 0.9);
      border-color: rgba(139, 92, 246, 0.3);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
  </style>
</svelte:head>

<!-- Hero Section with animated greeting -->
<section id="home" class="h-screen flex flex-col justify-center items-center text-center px-4 relative">
  <h1 class="text-9xl lg:text-[12rem] font-bold gradient-text tracking-tight">
    {current}
  </h1>

  <!-- Chevron Down -->
  <div class="absolute bottom-20 chevron-bounce mt-32">
    <svg class="w-10 h-10 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="flex flex-col p-4 py-20 lg:py-32 gap-24 text-white">
  <div class="flex flex-col gap-2 text-center">
    <h6 class="text-lg sm:text-xl md:text-2xl">
      A few of my creative endeavors.
    </h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
      Curious to <span class="gradient-text">see</span> my work?
    </h3>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
    <!-- Card 1 --->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center justify-between text-center h-full">
      <i class="fa-solid fa-robot text-5xl gradient-icon mb-4 text-center"></i>
      <h4 class="text-2xl font-bold mb-4">Connect 4 AI</h4>
      <p>
        Connect 4 AI is a <strong class="gradient-text">Python</strong> project
        developed for an Intelligent Systems class. It uses minimax/alpha-beta
        pruning algorithms to create an intelligent agent capable of playing Connect 4
        almost perfectly against another player or itself. Performance
        at different depth levels to improve move quality/speed.
      </p>
      <div class="flex justify-end mt-auto w-full">
        <a href="/Connect4Project" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center justify-between text-center h-full">
      <i class="fa-solid fa-envelope text-5xl gradient-icon mb-4 text-center"></i>
      <h4 class="text-2xl font-bold mb-4">IoT Mailbox</h4>
      <p>
        SmartMail is an IoT device using <strong class="gradient-text">HTML/CSS</strong>,
        <strong class="gradient-text">PHP + MariaDB</strong> &
        <strong class="gradient-text">Arduino IDE</strong>. It features a responsive
        web dashboard for mailbox control and status updates, an ESP8266 Arduino board
        for servos + PIR sensor detection, and a MariaDB database on a Raspberry Pi for
        storing timestamps and device data.
      </p>
      <div class="flex justify-end mt-auto w-full">
        <a href="/SmartMail" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center justify-between text-center h-full">
      <i class="fa-solid fa-mobile-screen text-5xl gradient-icon mb-4 text-center"></i>
      <h4 class="text-2xl font-bold mb-4">Air Quality App</h4>
      <p>
        MOPS Air is an Android app built with <strong class="gradient-text">Java, Kotlin,
        and the Android SDK</strong>. It enables real-time air quality monitoring with an
        interactive <strong class="gradient-text">Google Maps SDK</strong> map to show
        sensor locations, detailed chart visualizations via third-party libraries, and a
        user-friendly interface designed with UX/UI collaboration.
      </p>
      <div class="flex justify-end mt-6 w-full">
  <!-- <a href="AQApp.html" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a> -->
      </div>
    </div>

  <!-- Card 4 -->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center text-center">
      <i class="fa-solid fa-square-parking text-5xl gradient-icon mb-4"></i>
      <h4 class="text-2xl font-bold mb-4">BeeWise Parking App</h4>
      <p>
        BeeWise Parking App is an Android project built with
        <strong class="gradient-text">Java</strong>, <strong class="gradient-text">PHP</strong>, and <strong class="gradient-text">XML</strong>. 
        Developed in a team of three, the app communicates with a
        <strong class="gradient-text">web service</strong> to
        <strong class="gradient-text">GET/POST data</strong> to a database, 
        demonstrating full integration between a mobile frontend and backend service.
        This project strengthened my skills in Android Studio development,
        web service communication, and database interaction.
      </p>
      <div class="flex justify-end mt-auto w-full">
        <a href="/BWParking" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a>
      </div>
    </div>
  
    <!-- Card 5 -->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center text-center">
      <i class="fa-brands fa-raspberry-pi text-5xl gradient-icon mb-4"></i>
      <h4 class="text-2xl font-bold mb-4">Pi Thermometer</h4>
      <p>
        Raspberry Pi Temperature & Humidity Monitor is an IoT project built with 
        <strong class="gradient-text">Raspberry Pi + Python</strong>, and GPIO peripherals. 
        It connects a temperature/humidity sensor, servo, and buzzer to monitor room temperature, 
        adjust a servo indicator, and provide audio cues for new readings. 
        This project introduced me to sensor integration on the Raspberry Pi and
        laid the foundation for future IoT systems with web dashboards.
      </p>
      <div class="flex justify-end mt-auto w-full">
        <a href="/PiThermo" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a>
      </div>
    </div>

    <!-- Card 6 -->
    <div class="p-6 rounded-2xl card-hover flex flex-col items-center justify-between text-center h-full">
      <i class="fa-solid fa-file text-5xl gradient-icon mb-4 text-center"></i>
      <h4 class="text-2xl font-bold mb-4">Job Tracker</h4>
      <p>
        JobTracker is a full-stack web application built with 
        <strong class="gradient-text">Java & Spring Boot</strong>, 
        <strong class="gradient-text">PostgreSQL</strong>, and 
        <strong class="gradient-text">React + TailwindCSS</strong>. 
        It features a <strong class="gradient-text">RESTful API</strong> with full 
        <strong class="gradient-text">CRUD operations</strong> using Spring Data JPA, 
        a <strong class="gradient-text">Dockerized PostgreSQL database</strong> for 
        environment-based configurations, and a
        <strong class="gradient-text">responsive frontend</strong> designed with TailwindCSS.

      </p>
      <div class="flex justify-end mt-auto w-full">
        <a href="https://github.com/JCollado02/MyJobTracker-FE" class="btn btn-primary cursor-pointer hover:text-purple-400 duration-200 ">Learn More &rarr;</a>
      </div>
    </div>
  </div>
</section>
<section
  id="about"
  class="flex flex-col flex-1 p-4 py-10 sm:gap-20 md:gap-24 relative text-white"
>
  <!-- Heading with gradient lines -->
<div
  class="flex flex-col gap-2 text-center relative
         before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
         before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
         after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
         after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
         py-4"
>
  <h6 class="text-large sm:text-xl md:text-2xl">
    Want to know more?
  </h6>
  <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
    A bit <span class="gradient-text">about</span> me.
  </h3>
</section>

<section>

  <!-- Profile Picture with Gradient Ring -->
  <div class="relative w-48 h-48 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 shadow-lg">
  <img 
    src="/images/profile.jpg" 
    alt="Profile picture" 
    class="w-full h-full object-cover object-[50%_30%] rounded-full border-4 border-slate-900"
  />
</div>
<!-- About Me Content -->
<div class="max-w-6xl mx-auto bg-slate-800/80 rounded-3xl p-12 lg:p-20 shadow-2xl border border-slate-700 text-xl leading-loose">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    
    <!-- Left Column: Intro -->
    <div class="space-y-8 text-center lg:text-left">
      <p>
        Hello World! I’m <span class="gradient-text font-bold">Jim Collado</span>,
        a focused and quick-learning graduate in Computer Science with experience in
        <span class="gradient-text">Java</span>, <span class="gradient-text">Python</span>,
        and <span class="gradient-text">C</span>. I’ve built projects spanning
        mobile apps, web services, and IoT devices during my time at Baldwin Wallace.
      </p>
      <p>
        I bring strong <span class="gradient-text">problem-solving</span> and
        <span class="gradient-text">teamwork</span> skills, and I’m eager to
        contribute to meaningful projects while continuing to grow technically.
      </p>
    </div>

    <!-- Right Column: Highlights -->
    <div class="space-y-6">
      <h4 class="font-semibold text-2xl gradient-text">Highlights</h4>
      <ul class="space-y-3 text-slate-200 text-lg list-disc list-inside">
        <li>Explored diverse areas of computer science and programming</li>
        <li>Developed web apps, mobile apps, and IoT devices as projects</li>
        <li>Hands-on experience with algorithms, data structures, and systems</li>
        <li>Progressively tackled larger and more complex software challenges</li>
      </ul>
    </div>

  </div>
</div>

</section>

<!-- Education Section -->
<section
  id="education"
  class="flex flex-col flex-1 p-4 py-20 lg:py-32 gap-16 sm:gap-20 md:gap-24 relative text-white"
>
  <!-- Heading with gradient lines -->
  <div
    class="flex flex-col gap-2 text-center relative
           before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
           before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
           after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
           after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
           py-4"
  >
    <h6 class="text-large sm:text-xl md:text-2xl">Background</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
      <span class="gradient-text">Education</span>
    </h3>
  </div>

  <!-- Education Card -->
  <div class="max-w-6xl mx-auto bg-slate-800/80 rounded-3xl p-12 lg:p-20 shadow-2xl border border-slate-700 text-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Left Column: School Info -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
        <i class="fa-solid fa-graduation-cap text-6xl gradient-icon mb-6"></i>
        <h4 class="text-3xl font-bold">Baldwin Wallace University</h4>
        <p class="text-slate-300 text-lg">Berea, OH</p>
        <p class="italic text-slate-400 text-lg">Aug. 2020 – May 2024</p>
      </div>

      <!-- Right Column: Degree Details -->
      <div class="text-center lg:text-left space-y-6">
        <p class="text-2xl">
          <span class="gradient-text font-semibold">Bachelor of Science</span> in Computer Science
        </p>
        <p class="text-xl text-slate-300">Minor in Mathematics</p>
        <ul class="space-y-3 text-slate-200 text-lg list-disc list-inside">
          <li>Focused on software development, algorithms, and systems design</li>
          <li>Hands-on projects: web apps, IoT devices, and mobile applications</li>
          <li>Strong foundation in mathematics and problem solving</li>
        </ul>
      </div>

    </div>
  </div>
</section>



<!-- Skills Section -->
<section
  id="skills"
  class="flex flex-col flex-1 p-4 py-20 lg:py-32 gap-16 sm:gap-20 md:gap-24 relative text-white"
>
  <!-- Heading with gradient lines -->
  <div
    class="flex flex-col gap-2 text-center relative
           before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
           before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
           after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
           after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
           py-4"
  >
    <h6 class="text-large sm:text-xl md:text-2xl">Technical Skills</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
      My <span class="gradient-text">Toolkit</span>
    </h3>
  </div>

  <!-- Skills Grid -->
  <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center">
    
    <!-- Languages -->
    <div class="p-8 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700">
      <i class="fa-solid fa-code text-6xl gradient-icon mb-6"></i>
      <h4 class="text-2xl font-bold mb-4">Languages</h4>
      <p class="text-slate-200 text-lg">
        Java, Python, C, JavaScript, Kotlin, HTML, CSS, SQL
      </p>
    </div>

    <!-- Frameworks -->
    <div class="p-8 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700">
      <i class="fa-solid fa-layer-group text-6xl gradient-icon mb-6"></i>
      <h4 class="text-2xl font-bold mb-4">Frameworks</h4>
      <p class="text-slate-200 text-lg">
        Spring Boot, React, TailwindCSS, Jetpack (AndroidX)
      </p>
    </div>

    <!-- Databases -->
    <div class="p-8 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700">
      <i class="fa-solid fa-database text-6xl gradient-icon mb-6"></i>
      <h4 class="text-2xl font-bold mb-4">Databases</h4>
      <p class="text-slate-200 text-lg">PostgreSQL, MariaDB</p>
    </div>

    <!-- Tools -->
    <div class="p-8 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700">
      <i class="fa-solid fa-wrench text-6xl gradient-icon mb-6"></i>
      <h4 class="text-2xl font-bold mb-4">Developer Tools</h4>
      <p class="text-slate-200 text-lg">
        Git, GitHub, Docker, IntelliJ, VS Code, Android Studio
      </p>
    </div>

    <!-- Concepts -->
    <div class="p-10 rounded-3xl bg-slate-800/80 shadow-2xl border border-slate-700 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
      <i class="fa-solid fa-lightbulb text-6xl gradient-icon mb-6"></i>
      <h4 class="text-2xl font-bold mb-4">Concepts</h4>
      <p class="text-slate-200 text-lg">
        Full-Stack Development, REST APIs, Backend Development, IoT, Database Management,
        OOP, Software Testing & Debugging, Data Structures & Algorithms, Web & Mobile Development
      </p>
    </div>
    
  </div>
</section>

