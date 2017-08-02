// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();






let fields = document.getElementById("fields")
// -------- Your Code Goes Below this Line --------
let inputDat = [];
let textArea1 = [];
let selectL = [];

for (i = 0; i < formData.length; i++) {
  if (formData[i].type === "text" || formData[i].type === "tel" || formData[i].type === "email") {
    inputDat.push(formData[i]);
  } else if (formData[i].type === "textarea") {
    textArea1.push(formData[i]);
  } else if (formData[i].type === "select") {
    selectL.push(formData[i]);
  }
}

function makeSelectList ({ type, label, id, options}) {
  let selectContainerElement = document.createElement("div");
  let selectElement = document.createElement("select");
  selectElement.id = id;
  selectElement.text = label;
  selectContainerElement.appendChild(selectElement);

  options.forEach(function (optionObject) {
    let optionElement = document.createElement('option');
    optionElement.value = optionObject.value;
    optionElement.text = optionObject.label;
    selectElement.appendChild(optionElement);
  });

  return selectContainerElement;
}


function makeInput({
  type,
  label,
  id
}) {

  let divEl = document.createElement("div");
  let inputDatElement = document.createElement("input");

  divEl.appendChild(inputDatElement);

  inputDatElement.setAttribute("type", type);
  inputDatElement.setAttribute("label", label);
  inputDatElement.setAttribute("placeholder", label);

  divEl.append(inputDatElement);

  return divEl;
}

function makeTextArea({
  type,
  label,
  id
}) {

  let divEl = document.createElement("div");
  let inputDatElement = document.createElement("textarea");

  divEl.appendChild(inputDatElement);

  inputDatElement.setAttribute("type", type);
  inputDatElement.setAttribute("label", label);
  inputDatElement.setAttribute("placeholder", label);

  divEl.append(inputDatElement);

  return divEl;
}

const formDom = document.querySelector('#fields');
for (let i = 0; i < inputDat.length; i++) {
  let currentInput = makeInput(inputDat[i]);
  formDom.appendChild(currentInput);
}
for (let i = 0; i < textArea1.length; i++) {
  let currentInput = makeTextArea(textArea1[i]);
  formDom.appendChild(currentInput);
}
for (let i = 0; i < selectL.length; i++) {
  let currentInput = makeSelectList(selectL[i]);
  formDom.appendChild(currentInput);
}
