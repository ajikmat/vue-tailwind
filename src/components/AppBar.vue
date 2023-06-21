<template>
  <div class="navbar bg-primary text-white">
    <div class="flex-none">
      <div class="drawer z-10">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><router-link to="/">Home</router-link></li>
            <li>
              <router-link to="/pinia">Pinia State Management</router-link>
            </li>
            <li>
              <router-link to="/page-view">Page View</router-link>
            </li>
            <li>
              <router-link to="/">Axios</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Todolify</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style></style>
