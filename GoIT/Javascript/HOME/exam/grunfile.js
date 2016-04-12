// Обязательная обёртка
module.exports = function(grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
    concat: {
      main: {
        src: [
          'src/js/app.js',
          'src/js/partials/**/*.js'  // Все JS-файлы в папке
        ],
        dest: 'dist/js/main.min.js'
      }
    },
    // Сжимаем
    uglify: {
      main: {
        files: {
          // Результат задачи concat
          'dist/js/main.min.js'        }
      }
    }
  });
  less: {
  development: {
    options: {
      paths: ["src/css"]
    },
    files: {
      "dist/css/main.min.css": "src/css/Less/style.less"
    }
  },
  production: {
    options: {
      paths: ["src/css"],
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        new (require('less-plugin-clean-css'))(cleanCssOptions)
      ],
      modifyVars: {
        imgPath: '"http://mycdn.com/path/to/images"',
        bgColor: 'red'
      }
    },
    files: {
      "dist/css/main.min.css": "src/css/Less/style.less"
    }
  }
};
 watch: {
    less: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['css/*.less'],
      tasks: ['less'],
    },
  }
};

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Задача по умолчанию
  grunt.registerTask('default', ['concat', 'uglify', 'less']);
};