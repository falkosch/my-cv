module.exports = {
  collectCoverage: true,
  coverageReporters: ['text', 'lcovonly', 'cobertura'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/InlineFilesTransformer',
        'jest-preset-angular/StripStylesTransformer',
      ],
    },
  },
  reporters: ['default', 'jest-junit'],
  resolver: '@nrwl/jest/plugins/resolver',
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
};
