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
    clone.querySelector('#animalInatMetaId').value = ''
    clone.querySelector('#animalCount').value = ''
    clone.querySelector('#animalRemark').value = ''
    document.getElementById('inputsGroups').appendChild(clone)
  }
}

function removeInputGroup (e) {
  // return
  var inputGroup2List = document.querySelectorAll('#inputGroup2')
  if (inputGroup2List.length > 1) {
    if (e) {
      console.log('removing')
      console.log(e.closest('#inputGroup2'))
      el = e.closest('#inputGroup2')
      el.parentNode.removeChild(el)
    } else {
      var element = inputGroup2List[inputGroup2List.length - 1]
      element.parentNode.removeChild(element)
    }
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
    // var url1 =
    //   'https://docs.google.com/forms/d/e/1FAIpQLSep1hYt4lOvIJSpwcsXEWT3VIqN3LRFioN0mml1awGwlIADPA/formResponse?&submit=Submit?usp=pp_url'
    // var url2 =
    //   'https://docs.google.com/forms/d/e/1FAIpQLSc_dlM2JJw19OU20IzTaQmUoq5TNB9Tz0EdAptPDk7Th2hybQ/formResponse?&submit=Submit?usp=pp_url'
    var url3 =
      'https://docs.google.com/forms/d/e/1FAIpQLSduzoPUnh1-VlaGDAXs4Q4oMSxQT06Es3vq-ik6XqhYXzzRZQ/formResponse?&submit=Submit?usp=pp_url'

    var formData1 = {
      volunteerName: document.getElementById('volunteerName').value,
      teamCode: document.getElementById('teamCode').value,
      plantCode: document.getElementById('plantCode').value,
      speciesName: document.getElementById('speciesName').value,
      plantInatMetaId: document.getElementById('plantInatMetaId').value,
      treeRemark: document.getElementById('treeRemark').value,
      gbh: document.getElementById('gbh').value,
      treeLeaves: document.getElementById('treeLeaves').value,
      // treeCanopy: document.getElementById('treeCanopy').value,
      treeFlowering: document.getElementById('treeFlowering').checked,
      treeFruiting: document.getElementById('treeFruiting').checked
    }

    var inputGroup2Elements = document.querySelectorAll('#inputGroup2')

    // if (!inputGroup2Elements.length) {
    /////// this case will never occur
    // alert('no animal')
    //   submitData(url3, formData1)
    // } else
    //  if (
    //   inputGroup2Elements.length === 1 &&
    //   inputGroup2Elements[0].style.display == 'none'
    // ) {
    if (hasNoAnimal()) {
      // alert('still no animal')
      submitData(url3, formData1)
    } else {
      // alert('ANIMAL FOUND')
      {
        inputGroup2Elements.forEach(function (group) {
          console.log(group.querySelector('[name="animalSpecies"]').value)
          console.log(group.querySelector('[name="animalCount"]').value)
          console.log(group.querySelector('[name="interactionType"]').value)
          console.log(group.querySelector('[name=animalInatMetaId]').value)
          console.log(group.querySelector('[name=animalRemark]').value)

          var formData2 = {
            animalSpecies: group.querySelector('[name="animalSpecies"]').value,
            animalCount: group.querySelector('[name="animalCount"]').value,
            interactionType: group.querySelector('[name="interactionType"]')
              .value,
            animalInatMetaId: group.querySelector('[name=animalInatMetaId]')
              .value,
            animalRemark: group.querySelector('[name=animalRemark]').value
          }
          submitData(url3, { ...formData1, ...formData2 })
        })
      }
    }
    alert('Data submitted successfully.')
    next()
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

next = function () {
  while (!hasNoAnimal()) {
    removeInputGroup()
  }

  document.getElementById('plantCode').value =
    Number(document.getElementById('plantCode').value) + 1
  document.getElementById('speciesName').value = 'Unidentified / Other'
  document.getElementById('plantInatMetaId').value = ''
  document.getElementById('gbh').value = ''
  document.getElementById('treeLeaves').value = 'Unsure'
  // document.getElementById('treeCanopy').value = ''
  document.getElementById('treeFlowering').checked = false
  document.getElementById('treeFruiting').checked = false
  document.getElementById('treeRemark').value = ''
  ////
}

function submitData (url, data) {
  // return `${url}&entry.1731982848=${data.teamCode}&entry.1336780329=${data.plantCode}&entry.1634616229=${data.speciesName}&entry.965392427=${data.gbh}`;
  // return `${url}&entry.649217680=${data.associatedPlantCode}&entry.267793795=${data.animalSpecies}&entry.342920962=${data.animalCount}&entry.1901368330=${data.interactionType || "Feeding"}`

  // teamCode
  // plantCode
  // speciesName
  // plantInatMetaId
  // treeRemark
  // gbh
  // treeLeaves
  // treeCanopy
  // treeFlowering
  // treeFruiting
  // animalSpecies
  // animalCount
  // interactionType
  // animalInatMetaId
  // animalRemark

  // var url3Suffix = '&entry.1664808834=teamcode&entry.1981805346=treecode&entry.798862294=treespeciesname&entry.724347484=treeinatid&entry.1957343692=treeremarks&entry.1423009416=treegbh&entry.218206116=treeleaves&entry.1767881883=treecanopy&entry.1792652260=treeflowering&entry.1156221592=treefruiting&entry.1342359126=animalname&entry.1739765474=animalinatid&entry.1976377500=animalremarks&entry.1717792239=animalcount&entry.1852332458=animalactivity '

  // https://docs.google.com/forms/d/e/1FAIpQLSduzoPUnh1-VlaGDAXs4Q4oMSxQT06Es3vq-ik6XqhYXzzRZQ/viewform?usp=pp_url&entry.1664808834=teamCode&entry.1981805346=treeCode&entry.798862294=treeSpeciesName&entry.724347484=treeIatMetaId&entry.1957343692=treeRem&entry.1423009416=treeGbh&entry.218206116=treeLeaves&entry.1767881883=treeCanopy&entry.1792652260=treeFlowering&entry.1156221592=treeFruiting&entry.1342359126=animalName&entry.1739765474=aniamlInat&entry.1976377500=animalRem&entry.1717792239=animalCount&entry.1852332458=animalActivity

  var url3Suffix = `&entry.1664808834=${data.teamCode}&entry.1981805346=${
    data.plantCode
  }&entry.798862294=${data.speciesName}&entry.724347484=${
    data.plantInatMetaId
  }&entry.1957343692=${data.treeRemark}&entry.1423009416=${
    data.gbh
  }&entry.218206116=${data.treeLeaves}&entry.1767881883=${
    data.treeCanopy || ''
  }&entry.1792652260=${data.treeFlowering}&entry.1156221592=${
    data.treeFruiting
  }&entry.1342359126=${data.animalSpecies || ''}&entry.1739765474=${
    data.animalInatMetaId || ''
  }&entry.1976377500=${data.animalRemark || ''}&entry.1717792239=${
    data.animalCount || ''
  }&entry.1852332458=${data.interactionType || ''}&entry.455418864=${
    data.volunteerName
  } `

  var finalURL = `${url}${url3Suffix}`

  fetch(finalURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // body: encodeFormData(data)
  })
    .then(response => console.log(response))
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
Acacia auriculiformis (Earpod Wattle)
Acacia holosericea (Strap-leaved Wattle)
Acacia leucophloea (White Babool)
Acacia nilotica (Babool)
Adansonia digitata (Baobab)
Adenanthera pavonia (Red Bead Tree)
Aegle marmelos (Indian Bael)
Ailanthus excelsa (Tree of Heaven)
Alangium salvifolium (Sage-leaved Alangium)
Albizia amara (Krishna Siris)
Albizia lebbeck (Siris)
Albizia procera (White Siris)
Alstonia scholaris (Saptaparni/Scholar Tree)
Annona squamosa (Custard Apple)
Anogeissus latifolia (Axlewood)
Artocarpus altilis (Breadfruit)
Artocarpus heterophyllus (Jackfruit)
Azadirachta indica (Neem)
Barringtonia acutangula (Freshwater Mangrove)
Barringtonia racemosa (Powderpuff Mangrove)
Bauhinia purpurea (Purple Bauhinia)
Bauhinia racemosa (Jhinjheri)
Bauhinia x blakeana (Hong Kong Orchid Tree)
Bombax ceiba (Red Silk Cotton)
Borassus flabellifer (Toddy Palm)
Boswellia serrata (Indian Frankinscence)
Bridellia montana (Mountain Bridelia)
Brownea grandiceps (Rose of Venezuela)
Buchanania cochinchinensis (Chirauli Nut)
Bursera penicillata (Yucatan Rosewood)
Butea monosperma (Flame of the Forest)
Canophyllum inophyllum (Alexandrian Laurel)
Careya arborea (Wild Guava)
Caryota urens (Fish-tail Palm)
Cascabela thevetia (Yellow Oleander)
Cassia fistula (Indian Laburnum)
Cassia grandis (Pink Shower Tree)
Cassia javanica (Apple Blossom Cassia)
Cassia roxburghii (Red Cassia)
Cassine glauca (Native Olive)
Casuarina equisetifolia (Casuarina)
Ceiba pentandra (White Silk Cotton)
Ceiba speciosa (Floss Silk Tree)
Cerbera odollum (Khadi aam)
Chloroxylon swietenia (East-Indian satinwood)
Citharexylum spinosa (Fiddlewood)
Citrus maxima (Pomelo)
Clusia rosea (Autograph Tree)
Cochlospermum religiosum (Yellow Silk Cotton)
Cocos nucifera (Coconut Palm)
Coffea arabica (Mountain Coffee)
Coffea robusta (Robusta Coffee)
Conocarpus lancifolius (Button Mangrove)
Cordia dichotoma (Pink-pearl Tree/Snot Berry)
Cordia macleodi (Macleod Cordia)
Cordia sebastena (Scarlet Cordia)
Couroupita guianensis (Cannonball Tree)
Crateva adansonii subsp. odora (Garlic Pear Tree)
Dalbergia lanceolaria subsp. lanceolaria (Takoli)
Dalbergia lanceolaria subsp. paniculata (Dhobin/Phanashi)
Dalbergia latifolia (Black Rosewood)
Dalbergia sissoo (Indian rosewood)
Delonix alata (White Gulmohur)
Delonix regia (Gulmohur)
Dichrostachys cinerea (Chinese Lantern Tree)
Dillenia indica (Elephant Apple)
Diospyros chloroxylon (Green Ebony Persimmon)
Diospyros melanoxylon (Coromandel Ebony)
Diospyros montana (Bombay Ebony)
Dolichandrone falcata (Medhshingi)
Ealeocarpus serratus (Ceylon olive)
Ehretia laevis (Koda)
Erythrina variegata (Indian Coral Tree)
Ficus amplissima (Indian Bat Tree)
Ficus arnottiana (Indian Rock Fig)
Ficus benghalensis (Banyan)
Ficus benjamina (Weeping Fig)
Ficus hispida (Hairy Fig)
Ficus microcarpa (Laurel Fig)
Ficus mollis (Soft fig)
Ficus palmata (Punjab Fig)
Ficus racemosa (Country fig)
Ficus religiosa (Peepal)
Firmiana colorata (Scarlet Sterculia)
Flacourtia indica (Governor's Plum)
Garuga pinnata (Garuga)
Givotia moluccana (White Catamaran)
Gliricidia sepium (Quickstick)
Gmelina arborea (Gamhar)
Grevillea robusta (Silky Oak)
Grewia tiliifolia (Dhaman)
Guazuma ulmifolia (West Indian Elm)
Gyrocarpus americanus (Helicopter Tree)
Haldinia cordifolia (Haldu)
Heterophragma quadriloculare (Waras)
Holarrhena pubescens (Bitter Oleander)
Holoptelea integrifolia (Indian Elm)
Hydroanthus impetiginosa (PinkTrumpet Tree)
Jacaranda mimosifolia (Jacaranda)
Khaya senegalensis (African Mahogany)
Kigelia africana (Sausage Tree)
Kleinhovia hospita (Guest Tree)
Kydia calycina (Roxburgh's Kydia)
Lagerstroemia floribunda (Thai Crape Myrtle)
Lagerstroemia parviflora (Small-flowered Crape Myrtle)
Lagerstroemia speciosa (Pride of India)
Lannea coromandelica (Indian Ash)
Lantana camara (Lantana)
Lawsonia inermis (Henna)
Limonia acidissima (Wood Apple)
Litchi chinensis (Lychee)
Macaranga peltata (Shield-leaf Tree)
Madhuca longifolia (Mahua)
Magnolia champaka (Champa)
Mallotus philippensis (Kamala Tree)
Mangifera indica (Mango (all varieties))
Manilkara hexandra (Ceylon Ironwood)
Manilkara zapota (Chiku sapodilla)
Markhamia lutea (Nile Tulip)
Melaleuca viminalis (Bottle brush)
Melia dubia (Malabar Neem)
Mesua ferrea (Nag champa)
Michelia champaca (Champa)
Milletia peguensis (Moulmein Rosewood)
Milletia pinnata (Pongamia)
Millingtonia hortensis (Indian Cork Tree)
Mimusops elengi (Moulsari)
Mitragyna parvifolia (Kaim)
Monoon longifolium (Mast tree)
Morinda citrifolia (Noni)
Morinda pubescens (Indian Mulberry)
Moringa oleifera (Drumstick tree)
Morus alba (Silkworm mulberry)
Mundulea sericea (Cork Bush)
Muntingia calabura (Singapore/Jamaican cherry)
Murraya koenigii (Curry-leaf)
Neolamarckia cadamba (Kadamb)
Nerium oleander (Oleander)
Nyctanthes arbor-tristis (Night-flowering jasmine)
Oncoba spinosa (Snuff-box Tree)
Oroxylum indicum (Broken Bones Tree)
Parkia biglandulosa (Badminton-ball tree)
Parkinsonia (Jerusalem Thorn)
Peltophorum pterocarpum (Copperpod)
Phoenix sylvestris (Khajur)
Phyllanthus emblica (Amla)
Pimenta dioica (Allspice)
Pithecellobium dulce (Jungle jalebi)
Plumeria obtusa (White Farangipani)
Plumeria rubra (Frangipani)
Pongamia pinnata (Pongam)
Premna mollissima (Dusky Firebrand Teak)
Prosopis cineraria (Khejri)
Prosopis juliflora (Vilayati keekar)
Psidium guajava (Guava)
Pterocarpus marsupium (Indian Kino)
Pterospermum acerifolium (Kanak champa)
Pterospermum suberifolium (Kanak Champa)
Pterygota alata (Buddha's coconut)
Punica granatum (Pomegranate)
Putranjiva roxburghii (Putranjiva)
Reutealis trisperma (Philippine Tung Tree)
Rhus mysorensis (Indian Sumac)
Samanea saman (Rain tree)
Santalum album (Sandalwood)
Sapindus emarginatus (Notched-leaf Soapnut)
Saraca asoca (Sita Ashoka)
Semecarpus anacardium (Oriental cashew)
Senegalia chundra (Red Cutch Tree)
Senegalia polyacantha (White Thorn/White Cutch)
Senna siamea (Siamese Cassia)
Senna spectabilis (Spectacular Senna)
Senna surattensis (Scrambled-egg Tree)
Simaruba glauca (Paradise Tree)
Soymida febrifuga (Indian Redwood)
Spathodea campanulata (African Tulip Tree)
Sterculia foetida (Wild almond)
Sterculia urens (Gum Karaya/Ghost tree)
Stereospermum tetragonum (Yellow Snake Tree)
Streblus asper (Siamese Rough Bush)
Swietenia macrophylla (Big-leaf Mahogany)
Swietenia mahogany (Small-leaved Mahogany)
Syzygium cumini (Jamun)
Tabebuia aurea (Tree of Gold/Caribbean trumpet tree)
Tabebuia pallida (Pale Pink Trumpet Tree)
Tabebuia rosea (Pink poui)
Tabernaemontana crispa?? (Croaya)
Tabernaemontana divaricata (Crepe jasmine)
Tamarindus indica (Tamarind)
Tecomella undulata (Roheda)
Tectona grandis (Teak)
Terminalia arjuna (Arjuna)
Terminalia bellirica (Beheda)
Terminalia catappa (Indian Almond)
Terminalia chebula (Black myrobalan)
Terminalia tomentosa (Indian laurel)
Thespesia populnea (Indian tulip tree)
Vitex negundo (Chaste Tree/Five-leaved Vitex)
Wodyetia birfurcata (Foxtail Palm)
Wrightia tinctoria (Dyers oleander)
Zanthoxylum rhetsa (Indian Prickly Ash)
Ziziphus mauritiana (Ber)
Ziziphus xylopyrus (Kath Ber)
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
