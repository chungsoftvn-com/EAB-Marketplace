$(function () {
  'use strict';

  function setOutput(html) {
    $('#hw-output').html(html);
  }

  async function initHostInfo() {
    if (typeof API_EAB_version !== 'undefined') {
      $('#hw-api-ver').text('v' + API_EAB_version);
    }

    if (typeof API_EAB_init === 'function') {
      await API_EAB_init();
    }

    if (typeof API_EAB_getHostTheme === 'function') {
      var themeRes = await API_EAB_getHostTheme();
      if (themeRes && themeRes.ok && themeRes.theme) {
        $('#hw-theme').text(themeRes.theme.name || themeRes.theme.id || 'default');
      }
    }

    if (typeof API_EAB_getWorkingDir === 'function') {
      var wdRes = await API_EAB_getWorkingDir();
      if (wdRes && wdRes.ok && wdRes.path) {
        $('#hw-workdir').text(wdRes.path);
      }
    }
  }

  $('#hw-greet-btn').on('click', function () {
    var name = ($('#hw-name-input').val() || '').trim() || 'World';
    var msg = 'Hello, ' + name + '! Greeting sent from com.chungsoftvn.hello-world.';
    setOutput('<strong>Greeting:</strong> ' + $('<div>').text(msg).html());
    if (typeof API_EAB_log === 'function') {
      API_EAB_log('info', msg);
    }
  });

  $('#hw-pick-btn').on('click', async function () {
    if (typeof API_EAB_pickFile !== 'function') {
      setOutput('EAB Host API not available (running outside eab_tools.exe).');
      return;
    }
    var res = await API_EAB_pickFile({ title: 'Select any file' });
    if (res && res.ok && res.path) {
      setOutput('<strong>Selected file:</strong> <code>' + $('<div>').text(res.path).html() + '</code>');
    } else {
      setOutput('File selection cancelled.');
    }
  });

  initHostInfo();
});
