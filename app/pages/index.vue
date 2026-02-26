<template>
  <div class="wrapper">
    <div class="container">
      <h1>Nuxt PWA Working 🚀</h1>
      <p>This app can be installed on mobile and desktop.</p>
    </div>
  </div>
</template>

<style>
/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Full screen responsive gradient */
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: calc(20px + env(safe-area-inset-top));
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Glass card */
.container {
  width: 100%;
  max-width: 520px;
  padding: clamp(25px, 5vw, 50px);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: white;
  font-family: 'Inter', system-ui, sans-serif;
  animation: fadeIn 0.8s ease-out;
}

/* Responsive typography */
h1 {
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  margin-bottom: 16px;
}

p {
  font-size: clamp(1rem, 3.5vw, 1.1rem);
  opacity: 0.9;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Responsive button */
.btn {
  width: 100%;
  max-width: 250px;
  background: white;
  color: #764ba2;
  border: none;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

/* Small mobile adjustments */
@media (max-width: 480px) {
  .container {
    border-radius: 18px;
  }

  .btn {
    font-size: 0.95rem;
    padding: 12px 20px;
  }
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>