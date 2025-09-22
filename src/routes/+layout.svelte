<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../app.css";

  let y; // scroll position
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

      /* Fix clipping */
      line-height: 1.2;     /* add breathing room */
      padding-bottom: 0.15em; /* small bump */
      
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

<div class="relative flex flex-col min-h-screen w-full mx-auto">
  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} />
