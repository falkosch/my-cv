module.exports = {
  name: 'cv-model',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cv-model',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
