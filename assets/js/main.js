window.onload = wrapTable();

// Wrap tables in a div so that they scroll responsively. 
function wrapTable() {
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
      const tableWrapper = document.createElement('div');
      tableWrapper.className = 'table-wrapper';
      table.parentElement.replaceChild(tableWrapper, table);
      tableWrapper.appendChild(table);
    });
  };

