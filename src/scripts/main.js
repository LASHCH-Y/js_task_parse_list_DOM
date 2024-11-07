'use strict';

const employeeList = document.querySelector('ul');

function sortList(listContainer) {
  const listElements = Array.from(listContainer.children);

  listElements.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElements.forEach((item) => listContainer.appendChild(item));
}

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

sortList(employeeList);
