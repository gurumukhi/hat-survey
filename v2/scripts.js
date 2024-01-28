// Add your custom scripts here

function hasNoAnimal () {
  var inputGroup2List = document.querySelectorAll('#inputGroup2')
  return (
    inputGroup2List.length == 1 && inputGroup2List[0].style.display == 'none'
  )
}

function addInputGroup () {
  console.log('adding')
  if (hasNoAnimal()) {
    var inputGroup2List = document.querySelectorAll('#inputGroup2')
    inputGroup2List[0].style.display = 'block'
    document.querySelector('#removeBtn').style.opacity = 1
  } else {
    var clone = document.getElementById('inputGroup2').cloneNode(true)
    document.getElementById('inputsGroups').appendChild(clone)
  }
}

function removeInputGroup () {
  console.log('removing')
  var inputGroup2List = document.querySelectorAll('#inputGroup2')
  if (inputGroup2List.length > 1) {
    var element = inputGroup2List[inputGroup2List.length - 1]
    element.parentNode.removeChild(element)
  } else if (inputGroup2List.length == 1) {
    var element = inputGroup2List[inputGroup2List.length - 1]
    element.style.display = 'none'
    document.querySelector('#removeBtn').style.opacity = 0.3

    let group = inputGroup2List[0]
    group.querySelector('[name="animalSpecies"]').value =
      'Other Insects / Animals'
    group.querySelector('[name="animalCount"]').value = ''
    group.querySelector('[name="interactionType"]').value = 'None'
    group.querySelector('[name=animalInatMetaId]').value = ''
    group.querySelector('[name=animalRemark]').value = ''
  }
}

function submitForm () {
  try {
    console.log('hi')
    var url1 =
      'https://docs.google.com/forms/d/e/1FAIpQLSep1hYt4lOvIJSpwcsXEWT3VIqN3LRFioN0mml1awGwlIADPA/formResponse?&submit=Submit?usp=pp_url'
    var url2 =
      'https://docs.google.com/forms/d/e/1FAIpQLSc_dlM2JJw19OU20IzTaQmUoq5TNB9Tz0EdAptPDk7Th2hybQ/formResponse?&submit=Submit?usp=pp_url'
    var url3 =
      'https://docs.google.com/forms/d/e/1FAIpQLSduzoPUnh1-VlaGDAXs4Q4oMSxQT06Es3vq-ik6XqhYXzzRZQ/formResponse?&submit=Submit?usp=pp_url'

    console.log('data1')
    var formData1 = {
      teamCode: document.getElementById('teamCode').value,
      plantCode: document.getElementById('plantCode').value,
      speciesName: document.getElementById('speciesName').value,
      plantInatMetaId: document.getElementById('plantInatMetaId').value,
      treeRemark: document.getElementById('treeRemark').value,
      gbh: document.getElementById('gbh').value,
      treeLeaves: document.getElementById('treeLeaves').value,
      treeCanopy: document.getElementById('treeCanopy').value,
      treeFlowering: document.getElementById('treeFlowering').checked,
      treeFruiting: document.getElementById('treeFruiting').checked
    }

    var inputGroup2Elements = document.querySelectorAll('#inputGroup2')
    var formData2Array = []

    inputGroup2Elements.forEach(function (group) {
      var data = {
        teamCode: document.getElementById('teamCode').value,
        plantCode: document.getElementById('plantCode').value,
        speciesName: group.querySelector('[name="animalSpecies"]').value,
        plantInatMetaId: group.querySelector('[name="animalInatMetaId"]').value,
        treeRemark: group.querySelector('[name="animalRemark"]').value,
        gbh: group.querySelector('[name="animalGbh"]').value,
        treeLeaves: group.querySelector('[name="animalLeaves"]').value,
        treeCanopy: group.querySelector('[name="animalCanopy"]').value,
        treeFlowering: group.querySelector('[name="animalFlowering"]').checked,
        treeFruiting: group.querySelector('[name="animalFruiting"]').checked
      }
      formData2Array.push(data)
    })

    console.log('data2')
    formData1['data2'] = formData2Array

    console.log('submitting1')
    submitData(url1, formData1)

    console.log('submitting2')
    submitData(url2, formData1)

    console.log('submitting3')
    submitData(url3, formData1)
  } catch (e) {
    console.error(e)
  }
}

function submitData (url, data) {
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeFormData(data)
  })
    .then(response => console.log('Form submitted successfully'))
    .catch(error => console.error('Error submitting the form', error))
}

function encodeFormData (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function showHideHelpText (elementId) {
  var element = document.getElementById(elementId)
  element.style.display = element.style.display == 'block' ? 'none' : 'block'
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addBtn').addEventListener('click', addInputGroup)
  document
    .getElementById('removeBtn')
    .addEventListener('click', removeInputGroup)
  document.getElementById('submitBtn').addEventListener('click', submitForm)
  document.getElementById('showHelp1').addEventListener('click', function () {
    showHideHelpText('helpText1')
  })
  document.getElementById('showHelp2').addEventListener('click', function () {
    showHideHelpText('helpText2')
  })
})

function loadTreeData () {
  //  const csvFileName = 'trees.csv';
  //   fetch(csvFileName)
  //   .then(response => response.text())
  //   .then(csvData => {
  // Parse CSV to JSON using Papaparse
  csvData = `CommonName
African tulip tree
Amla
Arjuna
Axlewood
Babool
Badminton-ball tree
Banyan
Beheda
Ber
Black myrobalan
Bottle brush
Broken Bones Tree
Cannonball Tree
Caribbean trumpet tree
Champa
Chandada
Chiku sapodilla
Chinaberry
Chinese Lantern Tree
Chirauli Nut
Coconut Palm
Copperpod
Country fig
Crepe jasmine
Croaya
Curry-leaf
Custard Apple
Devil Tree
Drumstick tree
Dyers oleander
East-Indian satinwood
Elephant Apple
False white teak
Fish-tail Palm
Five-leaved Vitex
Flame of the Forest
Floss Silk Tree
Frangipani
Gamar
Garlic Pear Tree
Garuga
Ghost tree
Guava
Guh-de
Gulmohur
Henna
Indian almond
Indian ash tree
Indian coral tree
Indian cork tree
Indian elm
Indian Frankinscence
Indian Kino
Indian Laburnum
Indian laurel
Indian Mulberry
Indian Prickly Ash
Indian rosewood
Indian tulip tree
Jacaranda
Jackfruit
Jamun
Jhinjheri
Jungle jalebi
Kadamb
Kaim
Kanak champa
Khadi aam
Khajur
Khejri
Krishna Siris
Lantana
Lychee
Mahua
Mango (all varieties)
Mast tree
Moulsari
Mountain Coffee
Nag champa
Neem
Night-flowering jasmine
Noni
Oleander
Oriental cashew
Peepal
Pink poui
Pink-pearl tree
Pomegranate
Pomelo
Pongam
Powderpuff Mangrove
Pride of India
Punjab Fig
Purple Bauhinia
Quickstick
Rain tree
Red Silk Cotton
Robusta Coffee
Roheda
Roxburgh's Kydia
Sandalwood
Sausage tree
Silkworm mulberry
Singapore cherry
Siris
Soft fig
Takoli
Tamarind
Teak
Toddy Palm
Tree of Heaven
True Ashoka
Vilayati keekar
White Babool
White Silk Cotton
White Siris
Wild almond
Wood Apple
Yellow Oleander
Yellow Silk Cotton
Unidentified / Other`

  // const jsonData = Papa.parse(csvData, { header: true }).data;
  function parseCSV (csvData) {
    const lines = csvData.split('\n')
    const headers = lines[0].split(';')
    const jsonDataList = []
    console.log('parsing')
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(';')
      const row = {}

      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = currentLine[j]
      }

      jsonDataList.push(row)
    }
    console.log(jsonDataList)
    return jsonDataList
  }

  const jsonData = parseCSV(csvData, { header: true })
  console.log(jsonData)

  const treeNames = jsonData.map(row => row['CommonName']) // Replace 'TreeName' with the actual column header

  const dropdown = document.getElementById('speciesName')

  // Populate the dropdown
  treeNames.forEach(name => {
    const option = document.createElement('option')
    option.value = name
    option.text = name
    if (name === 'Unidentified / Other') {
      option.selected = true
    }
    dropdown.appendChild(option)
  })
  // })
  // .catch(error => {
  //   console.error('Error fetching or parsing CSV data: ', error);
  // });
}

// Load tree data when the page is loaded
window.onload = loadTreeData
