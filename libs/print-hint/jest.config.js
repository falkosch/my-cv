module.exports = {
  name: 'print-hint',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/print-hint',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
