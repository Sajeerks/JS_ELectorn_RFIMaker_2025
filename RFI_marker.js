

const AddRFINamestoFRontSheet = document.getElementById("AddRFINamestoFRontSheet")
const outputhere = document.getElementById("outputhere")


const combinePDFs = document.getElementById("combinePDFs")



// AddRFINamestoFRontSheet.addEventListener("click", e=>{
//     console.log("clcicked");
// })

// outputhere.innerText="ssssssssssssssssssss"


AddRFINamestoFRontSheet.addEventListener('click', async () => {

    console.log("clllledd");

 await   window.electronAPI.openFILEDailogForRFIfrontSheet("thissi is from rfi maker")

    // await window.electronAPI.selcalleingafterGeetingFrontFilePDfs()

   
  })




  combinePDFs.addEventListener("click", ()=>{
    

    window.electronAPI.CombineAllRFItoONEFile("thissi is from rfi maker")
    

  })