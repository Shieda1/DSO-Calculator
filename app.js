// https://www.omnicalculator.com/finance/days-sales-outstanding

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const DSORadio = document.getElementById('DSORadio');
const beginningaccountsreceivableRadio = document.getElementById('beginningaccountsreceivableRadio');
const endaccountsreceivableRadio = document.getElementById('endaccountsreceivableRadio');
const annualsalesRadio = document.getElementById('annualsalesRadio');
const daysinaccountingperiodRadio = document.getElementById('daysinaccountingperiodRadio');

let DSO;
let beginningaccountsreceivable = v1;
let endaccountsreceivable = v2;
let annualsales = v3;
let daysinaccountingperiod = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

DSORadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning accounts receivable';
  variable2.textContent = 'End accounts receivable';
  variable3.textContent = 'Annual sales';
  variable4.textContent = 'Days in accounting period';
  beginningaccountsreceivable = v1;
  endaccountsreceivable = v2;
  annualsales = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

beginningaccountsreceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'DSO';
  variable2.textContent = 'End accounts receivable';
  variable3.textContent = 'Annual sales';
  variable4.textContent = 'Days in accounting period';
  DSO = v1;
  endaccountsreceivable = v2;
  annualsales = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

endaccountsreceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'DSO';
  variable2.textContent = 'Beginning accounts receivable';
  variable3.textContent = 'Annual sales';
  variable4.textContent = 'Days in accounting period';
  DSO = v1;
  beginningaccountsreceivable = v2;
  annualsales = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

annualsalesRadio.addEventListener('click', function() {
  variable1.textContent = 'DSO';
  variable2.textContent = 'Beginning accounts receivable';
  variable3.textContent = 'End accounts receivable';
  variable4.textContent = 'Days in accounting period';
  DSO = v1;
  beginningaccountsreceivable = v2;
  endaccountsreceivable = v3;
  daysinaccountingperiod = v4;
  result.textContent = '';
});

daysinaccountingperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'DSO';
  variable2.textContent = 'Beginning accounts receivable';
  variable3.textContent = 'End accounts receivable';
  variable4.textContent = 'Annual sales';
  DSO = v1;
  beginningaccountsreceivable = v2;
  endaccountsreceivable = v3;
  annualsales = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(DSORadio.checked)
    result.textContent = `DSO = ${computeDSO().toFixed(2)}`;

  else if(beginningaccountsreceivableRadio.checked)
    result.textContent = `Beginning accounts receivable = ${computebeginningaccountsreceivable().toFixed(2)}`;

  else if(endaccountsreceivableRadio.checked)
    result.textContent = `End accounts receivable = ${computeendaccountsreceivable().toFixed(2)}`;

  else if(annualsalesRadio.checked)
    result.textContent = `Annual sales = ${computeannualsales().toFixed(2)}`;

  else if(daysinaccountingperiodRadio.checked)
    result.textContent = `Days in accounting period = ${computedaysinaccountingperiod().toFixed(2)}`;
})

// calculation

function computeDSO() {
  return (((Number(beginningaccountsreceivable.value) + Number(endaccountsreceivable.value)) / 2) / Number(annualsales.value)) * Number(daysinaccountingperiod.value);
}

function computebeginningaccountsreceivable() {
  return (((Number(DSO.value) / Number(daysinaccountingperiod.value)) * Number(annualsales.value)) * 2) - Number(endaccountsreceivable.value);
}

function computeendaccountsreceivable() {
  return (((Number(DSO.value) / Number(daysinaccountingperiod.value)) * Number(annualsales.value)) * 2) - Number(beginningaccountsreceivable.value);
}

function computeannualsales() {
  return ((Number(beginningaccountsreceivable.value) + Number(endaccountsreceivable.value)) / 2) / (Number(DSO.value) / Number(daysinaccountingperiod.value));
}

function computedaysinaccountingperiod() {
  return Number(DSO.value) / (((Number(beginningaccountsreceivable.value) + Number(endaccountsreceivable.value)) / 2) / Number(annualsales.value));
}