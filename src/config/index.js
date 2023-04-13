module.exports = {
  particles: {
    particles: {
      number: { 
        value: 30,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: { value: ['#7a9cbc'] },
      shape: {
        type: ["images"],
        image: [{
          src: "https://molokomokubedi.s3.af-south-1.amazonaws.com/aws.png",
          width: 100,
          height: 100
        },
        {
          src: "https://molokomokubedi.s3.af-south-1.amazonaws.com/terraform-hashicorp+logo+only.png",
          width: 500,
          height: 500
        },
        {
          src: "https://molokomokubedi.s3.af-south-1.amazonaws.com/linux-logo-png-transparent-background-png-download.png",
          width: 200,
          height: 200
        },
        {
          src: "https://molokomokubedi.s3.af-south-1.amazonaws.com/docker.png",
          width: 200,
          height: 200
        }]
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 0.3,
          sync: true,
        },
      },
      size: {
        value: 40,
        random: false,
      },
      line_linked: {
        enable: true,
        distance: 450,
        color: '#FFFFFF',
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: false,
        straight: false,
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      // activate
      events: {
        onhover: {
          enable: false,
          mode: ['bubble'],
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 17,
          duration: 1,
          opacity: 0.8,
          speed: 2,
        },
      },
    },
    retina_detect: true,
  },
}
