document.querySelectorAll('input[type="search"]').forEach((e,i,arr) => {
  e.click();
  document.querySelectorAll('span.ui-select-choices-row-inner')[1].click();
  document.querySelectorAll('div.ui-select-container')[i].style = 'overflow-y: scroll; height: 100px;'
});

