module.exports = {
  name: 'watch-store',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/watch-store',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
