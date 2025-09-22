
<section class="min-h-screen text-white px-6 py-24 max-w-5xl mx-auto leading-relaxed space-y-24">
  <!-- Project Title -->
  <div class="text-center space-y-6">
    <h1 class="text-6xl sm:text-7xl font-bold gradient-text ">SmartMail</h1>
    <p class="text-lg text-slate-300 max-w-3xl mx-auto">
      An IoT device combining <span class="gradient-text">ESP8266</span>,
      <span class="gradient-text">Raspberry Pi</span>,
      <span class="gradient-text">PHP</span>, and
      <span class="gradient-text">MariaDB</span> to create a connected mailbox with
      servo control, PIR sensor detection, and a responsive web dashboard.
    </p>
    <img
      src="/images/SmartMailbox.png"
      alt="Image of our finished SmartMail project"
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
      For our IoT course, a classmate and I created a “Smart Mailbox” to demonstrate
      our understanding of sensors, servos, databases, and device-to-device communication.
      The system uses an <span class="gradient-text">ESP8266</span> to handle hardware
      control and a <span class="gradient-text">Raspberry Pi 4</span> to host both a
      <span class="gradient-text">MariaDB</span> database and a
      <span class="gradient-text">web dashboard</span>.  
      We wanted a project that was simple enough to complete alongside other coursework,
      but complex enough to tie together everything we’d learned.
    </p>
  </div>

  <!-- The Pi -->
  <div>
    <div
      class="flex flex-col gap-2 text-center relative
             before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
             before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
             after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
             after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
             py-4 mb-12"
    >
      <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">The Pi</h2>
    </div>
    <img
      src="/images/SmartMail2.png"
      alt="Internal components of the SmartMail project"
      class="rounded-xl shadow-2xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300"
    />
    <p class="text-lg text-slate-200 leading-8">
      Our Raspberry Pi acted as both the <span class="gradient-text">web server</span>
      and the <span class="gradient-text">database host</span>. We built the database in
      <a href="https://raspberrytips.com/install-mariadb-raspberry-pi/"
         target="_blank"
         class="underline text-purple-400 hover:text-purple-300">MariaDB</a>, storing
      timestamps and device data whenever mail was detected.  
      The dashboard was built with <span class="gradient-text">HTML</span>,
      <span class="gradient-text">PHP</span>, and <span class="gradient-text">JavaScript</span>,
      displaying a table of deliveries and offering buttons to enable/disable the sensor and
      lock. It also showed live status of the mailbox lock and sensor state.
    </p>
  </div>

  <!-- The Database -->
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
    <p class="text-lg text-slate-200 leading-8">
      Using MariaDB, we created a table called <code class="bg-slate-800/70 px-2 py-1 rounded">Readings</code>
      that stored <strong>device names</strong> and <strong>timestamps</strong>.  
      When motion was detected by the PIR sensor, the ESP8266 posted an entry to the database.
      This integration gave us persistent logging of every mailbox interaction and a clear history
      accessible from the dashboard.
    </p>
  </div>

  <!-- The ESP8266 -->
  <div>
    <div
      class="flex flex-col gap-2 text-center relative
             before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
             before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
             after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
             after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
             py-4 mb-12"
    >
      <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">The ESP8266</h2>
    </div>
    <img
      src="/images/ESP8266.png"
      alt="Our ESP8266 board"
      class="rounded-xl shadow-2xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300"
    />
    <p class="text-lg text-slate-200 leading-8">
      The ESP8266 controlled the <span class="gradient-text">PIR sensor</span> and
      <span class="gradient-text">servos</span>, while also making
      <span class="gradient-text">HTTP requests</span> to the Pi.  
      Initially we wired the PIR sensor incorrectly, inverting its signals. With help from our professor,
      we corrected it and tuned its sensitivity.  
      The firmware, written in the <span class="gradient-text">Arduino IDE</span>, let the ESP8266
      post sensor data in JSON via <strong>POST requests</strong>, and fetch updated status via
      <strong>GET requests</strong>. This allowed the dashboard to control the lock state remotely.
    </p>
  </div>

  <!-- Video Demo & Conclusion -->
  <div>
    <div
      class="flex flex-col gap-2 text-center relative
             before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 
             before:bg-gradient-to-r before:from-pink-400 before:via-purple-500 before:to-indigo-600
             after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 
             after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600
             py-4 mb-12"
    >
      <h2 class="text-4xl sm:text-5xl font-semibold gradient-text">Video Demo & Conclusion</h2>
    </div>
    <div class="video-container rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto mb-8">
      <video controls class="w-full">
        <source src="/videos/videoDemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="text-lg text-slate-200 leading-8">
      In our live demo at Baldwin Wallace, the system successfully detected motion,
      unlocked the mailbox, logged the delivery in MariaDB, and updated the web dashboard.
      This project gave us hands-on experience with IoT, databases, and embedded hardware,
      and showed how multiple systems can work together in real-time.
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
