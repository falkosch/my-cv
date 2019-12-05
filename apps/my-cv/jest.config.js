module.exports = {
  name: 'my-cv',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-cv',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
