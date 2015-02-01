module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/*.js'], //input
        dest: 'js/build/global.min.js' //output
      }
    },

    sass: {                      
      dist: {                            
        options: {                     
          style: 'compressed'
        },
        files: {                         
          'css/build/global-unprefixed.css': 'css/global.scss',       
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
          'svgs/build/svg-defs.svg': ['svgs/*.svg'],
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      single_file: {
        src: 'css/build/global-unprefixed.css',
        dest: 'css/build/global.css'
      },
    },

    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'images/',
              src: ['*.{png,jpg,gif}'],
              dest: 'images/build/'
          }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },

      site: {
        files: ['index.php', 'Gruntfile.js']
      },

      svg: {
        files: ['svgs/*.svg'],
        tasks: ['svgstore']
      },

      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },

      js: {
        files: ['js/*.js'],
        tasks: ['uglify']
      },

      images: {
        files: ['images/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['uglify', 'svgstore', 'sass', 'autoprefixer']);

};
