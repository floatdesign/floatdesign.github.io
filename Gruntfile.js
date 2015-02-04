module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/jquery.min.js', 'js/get_vars.js', 'js/reset_vars.js', 'js/dot_nav.js', 'js/fade_at_top.js', 'js/logo_fill.js', 'js/mobile_nav.js', 'js/parallax.js', 'js/scroll_page.js', 'js/sticky_nav.js', 'js/works_slider.js', 'js/function_calls.js'],
        dest: 'js/build/js-concat.js',
      },
    },
    uglify: {
      build: {
        src: ['js/build/js-concat.js'], //input
        dest: 'js/build/global.min.js' //output
      }
    },

    sass: {                      
      dist: {                            
        options: {                     
          style: 'compressed'
        },
        files: {                         
          'css/global-unprefixed.css': 'scss/global.scss',       
        }
      }
    },

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each <symbol> ID
        svg: {
          style: 'position: absolute; top: 0;'
        }
      },
      default : {
        files: {
          '_includes/svg-defs.svg': ['svgs/*.svg'],
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      single_file: {
        src: 'css/global-unprefixed.css',
        dest: 'css/global.css'
      },
    },

    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images-pre-min/',
              src: ['*.{png,jpg,gif}'],
              dest: 'images/'
          }]
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve"
      },
      jekyllBuild: {
        command: "jekyll build"
      }
    },

    watch: {
      options: {
        livereload: true,
      },

      site: {
        files: ['index.html', '_includes/*', '_layouts/*'],
        tasks: ['shell:jekyllBuild']
      },

      svg: {
        files: ['svgs/*.svg'],
        tasks: ['svgstore', 'shell:jekyllBuild']
      },

      css: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'shell:jekyllBuild']
      },

      js: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify']
      },

      images: {
        files: ['images/*.{png,jpg,gif}'],
        tasks: ['imagemin', 'shell:jekyllBuild']
      },
    }
  });

  // Load the plugins
  require('load-grunt-tasks')(grunt);

  // Default tasks
  grunt.registerTask('serve', ['shell:jekyllServe']);
  grunt.registerTask('default', ['concat', 'uglify', 'svgstore', 'sass', 'autoprefixer', 'imagemin', 'shell:jekyllBuild', 'watch']);

};
