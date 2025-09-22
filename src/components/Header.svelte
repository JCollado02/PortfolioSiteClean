<script>
  export let y;

  let tabs = [
    { name: 'Projects', link: '/#projects' },
    { name: 'About Me', link: '/#about' },
    { name: 'Contact', link: '/#contact' },
  ];
</script>

<header
  class={"fixed top-0 left-0 w-full z-50 duration-200 px-6 flex items-center justify-between " +
    (y > 0
      ? " py-4 backdrop-blur-md bg-[rgba(30,27,75,0.8)] shadow-md"
      : " py-6 bg-transparent")}
>
  <!-- Logo -->
  <a href="/#home" class="font-medium tracking-wide flex items-center">
    <b class="font-bold poppins gradient-text">Jim</b>
    <span class="ml-1">Collado</span>
  </a>

  <!-- Nav Links -->
  <div class="sm:flex ml-auto pr-4 items-center gap-8 hidden">
    {#each tabs as tab}
      <a
        href={tab.link}
        class="relative duration-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-500 after:to-indigo-600 after:transition-all"
      >
        {tab.name}
      </a>
    {/each}
  </div>

  <!-- CTA Button -->
  <a
    href="mailto:jimcollado25@gmail.com"
    class="relative overflow-hidden px-5 py-2 rounded-full font-semibold text-sm
           bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600
           text-white shadow-lg hover:brightness-110 transition duration-300"
  >
    Get in touch
  </a>
</header>

<style>
  .gradient-text {
    background: linear-gradient(135deg, #e879f9, #c084fc, #a855f7, #8b5cf6, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
