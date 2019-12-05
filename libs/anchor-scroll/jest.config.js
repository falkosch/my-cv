module.exports = {
  name: 'anchor-scroll',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/anchor-scroll',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
