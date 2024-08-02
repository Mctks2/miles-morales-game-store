document.addEventListener("DOMContentLoaded", () => {
  // Cria uma nova linha do tempo (timeline) usando GSAP.
  let tl = new TimelineMax();

  // Animação para o carregador de fundo (.bg-loader)
  tl.fromTo(
    ".bg-loader",
    1,  // Duração da animação em segundos
    { width: "100%" }, // Estado inicial da largura
    { width: "0%", delay: 5, ease: Expo.easeInOut } // Estado final da largura (0%), com atraso de 5 segundos e animação suave
  )
    // Animação para o vídeo de fundo
    .fromTo(
      ".bg-video",
      2,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeInOut },
      "-=1"
    )

    // Animação para o logotipo de navegação
    .fromTo(
      ".nav-logo",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".bx",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".nav-list",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    // Animação para os ícones sociais de navegação 
    .fromTo(
      ".nav-social",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    // Animação para o item-1, item-2, item-3, item-4 e item-5
    .fromTo(
      ".item-1",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".item-2",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".item-3",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".item-4",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )

    .fromTo(
      ".item-5",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    );
});
