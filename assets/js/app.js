particlesJS('particles-js', {
    'particles': {
      'number': {'value': 100, 'density': {'enable': true, 'value_area': 1025.908125981517}},
      'color': {'value': '#fed100'},
      'shape': {
        'type': 'circle',
        'stroke': {'width': 0, 'color': '#000000'},
        'polygon': {'nb_sides': 5},
        'image': {'src': 'img/github.svg', 'width': 100, 'height': 100}
      },
      'opacity': {
        'value': 0.5,
        'random': false,
        'anim': {'enable': false, 'speed': 1, 'opacity_min': 0.1, 'sync': false}
      },
      'size': {
        'value': 2,
        'random': true,
        'anim': {'enable': false, 'speed': 40, 'size_min': 0.1, 'sync': false}
      },
      'line_linked': {
        'enable': true,
        'distance': 150.02125301084325,
        'color': '#009b3a',
        'opacity': 1,
        'width': 1.5
      },
      'move': {
        'enable': true,
        'speed': 5,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {'enable': false, 'rotateX': 600, 'rotateY': 1200}
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {'enable': true, 'mode': 'repulse'},
        'onclick': {'enable': true, 'mode': 'push'},
        'resize': true
      },
      'modes': {
        'grab': {'distance': 400, 'line_linked': {'opacity': 1}},
        'bubble': {'distance': 400, 'size': 40, 'duration': 2, 'opacity': 8, 'speed': 3},
        'repulse': {'distance': 200, 'duration': 0.4},
        'push': {'particles_nb': 4},
        'remove': {'particles_nb': 2}
      }
    },
    'retina_detect': true
  });

  setInterval(function(){
    
    var toggle = $(".text").hasClass("toggled");
     $(".text_1").animate({opacity: toggle ? 1 : 0});
     $(".text_2").animate({opacity: toggle ? 0 : 1});
     $(".text").toggleClass("toggled");
 
 }, 1000);
