var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

var compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions
);

compilerOptions.module = 'CommonJs';

module.exports = function(wallaby) {
  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'wallabyTest.js',
      'apps/**/*spec.js',
      'libs/**/*spec.js'
    ],

    module: {
      rules: [{
        test: /\.css$/,
        loader: ['raw-loader']
      },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.ts$/,
          loader: '@ngtools/webpack',
          include: /node_modules/,
          query: {
            tsConfigPath: 'tsconfig.json'
          }
        },
        {
          test: /\.js$/,
          loader: 'angular2-template-loader',
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          loaders: ['raw-loader', 'stylus-loader']
        },
        {
          test: /\.less$/,
          loaders: [
            'raw-loader',
            {
              loader: 'less-loader',
              options: {
                paths: [__dirname]
              }
            }
          ]
        },
        {
          test: /\.scss$|\.sass$/,
          loaders: ['raw-loader', 'sass-loader']
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader?limit=128000'
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'apps'),
        path.join(wallaby.projectCacheDir, 'libs'),
        'node_modules'
      ],
      alias: {
        '@spawntech/components/badge-icon': path.join(wallaby.projectCacheDir, 'libs/components/badge-icon/src/index.ts'),
        '@spawntech/components/coming-soon': path.join(wallaby.projectCacheDir, 'libs/components/coming-soon/src/index.ts'),
        '@spawntech/components/info': path.join(wallaby.projectCacheDir, 'libs/components/info/src/index.ts'),
        '@spawntech/components/licenses': path.join(wallaby.projectCacheDir, 'libs/components/licenses/src/index.ts'),
        '@spawntech/components/master-slave': path.join(wallaby.projectCacheDir, 'libs/components/master-slave/src/index.ts'),
        '@spawntech/components/profile': path.join(wallaby.projectCacheDir, 'libs/components/profile/src/index.ts'),
        '@spawntech/components/selection-list': path.join(wallaby.projectCacheDir, 'libs/components/selection-list/src/index.ts'),
        '@spawntech/components/timeline': path.join(wallaby.projectCacheDir, 'libs/components/timeline/src/index.ts'),
        '@spawntech/components/uploader': path.join(wallaby.projectCacheDir, 'libs/components/uploader/src/index.ts'),
        '@spawntech/core/backend': path.join(wallaby.projectCacheDir, 'libs/core/backend/src/index.ts'),
        '@spawntech/core/features/accounts': path.join(wallaby.projectCacheDir, 'libs/core/features/accounts/src/index.ts'),
        '@spawntech/core/features/auth': path.join(wallaby.projectCacheDir, 'libs/core/features/auth/src/index.ts'),
        '@spawntech/core/features/billing': path.join(wallaby.projectCacheDir, 'libs/core/features/billing/src/index.ts'),
        '@spawntech/core/features/disabled': path.join(wallaby.projectCacheDir, 'libs/core/features/disabled/src/index.ts'),
        '@spawntech/core/features/get-started': path.join(wallaby.projectCacheDir, 'libs/core/features/get-started/src/index.ts'),
        '@spawntech/core/features/recycle-bin': path.join(wallaby.projectCacheDir, 'libs/core/features/recycle-bin/src/index.ts'),
        '@spawntech/core/features/user-settings': path.join(wallaby.projectCacheDir, 'libs/core/features/user-settings/src/index.ts'),
        '@spawntech/core/forms': path.join(wallaby.projectCacheDir, 'libs/core/forms/src/index.ts'),
        '@spawntech/core/help': path.join(wallaby.projectCacheDir, 'libs/core/help/src/index.ts'),
        '@spawntech/core/hooks': path.join(wallaby.projectCacheDir, 'libs/core/hooks/src/index.ts'),
        '@spawntech/core/models': path.join(wallaby.projectCacheDir, 'libs/core/models/src/index.ts'),
        '@spawntech/core/router': path.join(wallaby.projectCacheDir, 'libs/core/router/src/index.ts'),
        '@spawntech/core/types': path.join(wallaby.projectCacheDir, 'libs/core/types/src/index.ts'),
        '@spawntech/core/ui': path.join(wallaby.projectCacheDir, 'libs/core/ui/src/index.ts'),
        '@spawntech/core/utils': path.join(wallaby.projectCacheDir, 'libs/core/utils/src/index.ts'),
        '@spawntech/cxfi/features/dashboard': path.join(wallaby.projectCacheDir, 'libs/cxfi/features/dashboard/src/index.ts'),
        '@spawntech/cxfi/features/ideas': path.join(wallaby.projectCacheDir, 'libs/cxfi/features/ideas/src/index.ts'),
        '@spawntech/cxfi/features/projects': path.join(wallaby.projectCacheDir, 'libs/cxfi/features/projects/src/index.ts'),
        '@spawntech/cxfi/models': path.join(wallaby.projectCacheDir, 'libs/cxfi/models/src/index.ts'),
        '@spawntech/cxfi/types': path.join(wallaby.projectCacheDir, 'libs/cxfi/types/src/index.ts'),
        '@spawntech/pipes/money': path.join(wallaby.projectCacheDir, 'libs/pipes/money/src/index.ts'),
        '@spawntech/pipes/truncate': path.join(wallaby.projectCacheDir, 'libs/pipes/truncate/src/index.ts'),
        '@spawntech/components/metadata-chip': path.join(wallaby.projectCacheDir, 'libs/components/metadata-chip/src/index.ts'),
        '@spawntech/charts': path.join(wallaby.projectCacheDir, 'libs/charts/src/index.ts')
      }
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
  });

  return {
    files: [{
      pattern: 'wallabyTest.ts',
      load: false
    },
      {
        pattern: 'apps/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)',
        load: false
      },
      {
        pattern: 'apps/**/*.d.ts',
        ignore: true
      },
      {
        pattern: 'apps/**/*spec.ts',
        ignore: true
      },
      {
        pattern: 'libs/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)',
        load: false
      },
      {
        pattern: 'libs/**/*.d.ts',
        ignore: true
      },
      {
        pattern: 'libs/**/*spec.ts',
        ignore: true
      },
      {
        pattern: 'apps/**/*-e2e/**',
        ignore: true
      },
      {
        pattern: 'libs/**/*-e2e/**',
        ignore: true
      }
    ],

    tests: [{
      pattern: 'apps/**/*spec.ts',
      load: false
    },
      {
        pattern: 'libs/**/*spec.ts',
        load: false
      },
      {
        pattern: 'apps/**/*-e2e/**',
        ignore: true
      },
      {
        pattern: 'libs/**/*-e2e/**',
        ignore: true
      }
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    env: {
      kind: 'chrome'
    },

    postprocessor: webpackPostprocessor,

    setup: function() {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};