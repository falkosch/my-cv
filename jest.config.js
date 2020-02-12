module.exports = {
  coverageReporters: ['html'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/InlineFilesTransformer',
        'jest-preset-angular/StripStylesTransformer',
      ],
    },
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  passWithNoTests: true,
  resolver: '@nrwl/jest/plugins/resolver',
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
};
