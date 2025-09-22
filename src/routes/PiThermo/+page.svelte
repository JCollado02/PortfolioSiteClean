<section class="min-h-screen text-white px-6 py-24 max-w-5xl mx-auto leading-relaxed space-y-24">
  <!-- Project Title -->
  <div class="text-center space-y-6">
    <h1 class="text-6xl sm:text-7xl font-bold gradient-text">Pi Temperature & Humidity Thermometer</h1>
    <p class="text-lg text-slate-300 max-w-3xl mx-auto">
      An IoT project built with <span class="gradient-text">Raspberry Pi</span>,
      <span class="gradient-text">Python</span>, and GPIO sensors. Features a
      <span class="gradient-text">servo-driven thermometer</span>, a buzzer for
      alerts, and a real-time dashboard for data monitoring.
    </p>
    <img
      src="/images/portfolioImage3.png"
      alt="Image of the thermometer I created for my Pi's Temperature & Humidity Sensor"
      class="rounded-2xl shadow-2xl mx-auto max-w-3xl w-full border border-slate-700 hover:scale-[1.02] transition-transform duration-300"
    />
  </div>

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
      This project was one of the first assignments in my IoT course at Baldwin Wallace.
      My goal was to build a <span class="gradient-text">web dashboard</span> for
      displaying real-time temperature and humidity readings from a Pi-connected sensor.
      I also added a <span class="gradient-text">servo mechanism</span> to act as a
      physical thermometer and a <span class="gradient-text">buzzer</span> that sounded
      every 10 seconds to indicate a new reading.
      This was my first hands-on experience combining Raspberry Pi hardware with
      software-driven visualization.
    </p>
  </div>

  <!-- Sensor + Servo -->
  <div>
    <div
      class="flex flex-col gap-2 text-center relative
             before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
             before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
             after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
             after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
             py-4 mb-12"
    >
      <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Creating the Temp & Humidity Sensor</h2>
    </div>
    <p class="text-lg text-slate-200 leading-8">
      Using <span class="gradient-text">Python</span> on the Pi, I wrote a loop that
      captured readings every 10 seconds. Each cycle:
    </p>
    <ul class="list-disc list-inside text-slate-300 text-lg leading-8 mt-4 space-y-2">
      <li>Rotated the servo to display the temperature on a physical dial</li>
      <li>Triggered the buzzer for a short tone</li>
      <li>Sent the new reading to the dashboard for live monitoring</li>
    </ul>
    <p class="text-lg text-slate-200 leading-8 mt-6">
      While simple, this project taught me core IoT skills like working with
      <span class="gradient-text">GPIO</span>, integrating sensors, and building
      <span class="gradient-text">real-time feedback loops</span>. I even 3D-printed
      the thermometer casing to complete the project.
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
      This project was a great introduction to Raspberry Pi development and gave me
      valuable experience in <span class="gradient-text">hardware-software integration</span>.
      The skills I learned here carried over into larger projects, including the
      <a href="/SmartMail" class="underline text-purple-400 hover:text-purple-300">Smart Mailbox</a>.
      It reinforced my interest in IoT and inspired me to continue building connected devices.
    </p>
  </div>

  <!-- Back Button -->
  <div class="text-center mt-24">
    <a href="/#projects"
       class="btn btn-primary px-8 py-3 text-lg hover:text-purple-400 duration-200 shadow-lg">
       ← Back to Projects
    </a>
  </div>
</section>
