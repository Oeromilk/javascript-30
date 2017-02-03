const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//console.log(checkBoxes);

let lastChecked;

function handleCheck(e){
  // comapres against the node list of checkboxes.
  let inBetween = false;

  if(e.shiftKey && this.checked){
    checkBoxes.forEach(checkBox => {
      console.log(checkBox);

      if (checkBox === this || checkBox === lastChecked){
        inBetween = ! inBetween
        console.log('Start of inbetween');
      };

      if (inBetween){
        checkBox.checked = true;
      };
    });
  };
  lastChecked = this;
};

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
