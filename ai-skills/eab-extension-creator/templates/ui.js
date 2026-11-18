$(function () {
  'use strict';

  if (typeof API_EAB_init === 'function') {
    API_EAB_init();
  }

  $('#btn-run').on('click', function () {
    $('#status').text('Extension executed successfully.');
    if (typeof API_EAB_log === 'function') {
      API_EAB_log('info', 'My Extension ran.');
    }
  });
});
