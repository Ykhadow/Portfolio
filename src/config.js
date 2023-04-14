export const particleConfig = () => {
  return {
    background: {
      zIndex: -200,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 70,
          duration: 1,
        },
      },
    },
    particles: {
      color: {
        value: "#000000",
      },
      links: {
        color: "#000000",
        distance: 300,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 5000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
};
