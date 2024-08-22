import cron from 'node-cron';
import sellerProductService from "../../../modules/dropshipping/sellerproduct/services/product.js"

const category_array1 = [
    "874B7C94-D225-43FE-AB79-FFAF1B800651",
    "E33443F7-144C-4CBE-8D34-C1B6256A6325",
    "F8024D10-AB96-4558-AC79-C49625F768DA",
    "7E65A403-CF6E-4B55-96FF-B7C3C376A47A",
    "4D3B9582-E92E-46BF-B00E-715E70FB4742",
    "591E8920-019B-42FA-AE0B-420052E6C4F0",
    "C62BC6BF-BA2B-41ED-AB12-599A6D7FCAA5",
    "3F3EFC96-82B8-44C1-BF7A-2E3E7083A875",
    "74B144C9-321D-4E78-986C-757BA551DD8C",
    "87A618B5-7CB0-4AF7-BCF8-9E9455F06B7E",
    "EDC3EDAF-1ED7-4776-8416-E9F8F0A5B4C6",
    "7D962F30-E20E-4DE9-8911-EB8AB078FB23",
    "D190FBF9-A352-48BD-9F4B-B6AB432988E5",
    "E3963C40-89BE-46AC-985D-A86FA417F6B8",
    "25E64DFD-1ED3-4171-86CD-0C2F40052F3B",
]
const category_array2 = [
    "76CD1BD4-2A0A-4D72-913C-6DAADD7E9EDB",
    "C019C59C-C274-44F9-B04B-5520F1EBE5FA",
    "A77A4E59-D931-4BBE-9D48-FF995C481B66",
    "40CC2ED1-8998-4515-9139-787CC25D42A7",
    "66D0D817-353B-492E-87A5-024091FF9000",
    "6DB79FAF-593D-4F52-B6FF-AB1D14331862",
    "A0D39205-3770-4F0B-91BD-65E711263577",
    "0AC6B44A-12CC-456F-831F-54064C77D303",
    "0F932A8E-47CB-4CB6-B7C3-C4D9F7CF62EC",
    "D6C23AAE-B8EE-481C-9B61-34557971D45F",
    "11D33F89-9B90-4D1A-B977-DE229BAA7E86",
    "4336FAFE-B9C9-4673-8706-BCFAE1448DA2",
    "895CF515-0F6B-481D-8A32-604EDCBEFBED",
    "C83EF2A0-8FA3-4713-9901-2FD6E4554D97",
    "AA40156F-A334-475E-9CA0-7E5520645980",

]
const category_array3 = [
    "DE5A9724-8B92-404F-B15E-1FCAD6594BAF",
    "A2B55BEF-9B7D-44A0-8E80-A14FFFBBBD94",
    "8FD4CA46-AA88-4CDC-8EBA-EBD8412152E2",
    "C1AB7563-AED4-44D8-9F01-05BD91C65307",
    "DAECCC3B-13D8-4978-86A8-61D3DF186134",
    "F34292A3-2774-4380-9ADF-78F90AB90863",
    "00134C46-B7DF-4500-A3D9-ABB7B779EFD0",
    "491E5474-524C-4666-BDD7-4E35E38900EA",
    "51D68796-F1B5-4BDC-B9E0-32C3D9FF6994",
    "B200FABB-A76B-4750-9957-FEA3DCB21F1F",
    "1EE2EA4E-87BC-4108-BBF3-0A98A4A1EF89",
    "2CF32BF2-246D-4EC7-A060-6835C7EFD4AD",
    "496A6FD1-4D2C-4E96-93B3-1BEBF5D7DA34",
    "4E8B1C9C-3126-4115-A5CA-357A8C164AD2",
    "65AC23D3-BA63-438B-B8FE-71E117D717AF",

]
const category_array4 = [
    "7CB75550-C920-47A8-8A65-27C34ED1C05E",
    "7FD2D2BD-852D-4028-870E-AEB73594A95E",
    "E6C70353-4E58-4253-A840-3760667A9BE4",
    "F77E8C4C-649A-4553-BD44-7604FADBB0BD",
    "2C46D1EB-148D-4DF3-8F23-EC0C5D5FDC1D",
    "4C9F6BA4-70BB-49BC-A350-3D5E4E685B84",
    "FF1E0375-F5BF-40D9-8B18-708F79D52E44",

]

const category_array5 = [
    "C7365895-913A-4078-9946-681EFD45D2B8",
    "D8BBE038-9ECD-4698-8CB1-DE63E27F33C7"
]

cron.schedule('30 02 * * *', () => {
    sellerProductService.uploadCJProduct(category_array3)
   
});
cron.schedule('30 04 * * *', () => {
    sellerProductService.uploadCJProduct(category_array2)
   
});
cron.schedule('30 08 * * *', () => {
    sellerProductService.uploadCJProduct(category_array4)
   
});
cron.schedule('00 07 * * *', () => {
    sellerProductService.uploadCJProduct(category_array1)
   
});

cron.schedule('40 05 * * *', () => {
    sellerProductService.uploadCJProductExclusive(category_array5)
   
});





//Cron Job for Doba 

const doba_category_array1 = [
    "WNVhvKJOCYqZ",
    "ArDYbQJMCcqf",
    "rvVgDeoYKPbZ",
   
]
const doba_category_array2 = [
    "APbHVQYMkoqW",
    "gYbSvKcyRoqp",
    "rLDtvFcfuJqI",
   
   
]
const doba_category_array3 = [
    "AzDMveYWuJVI",
    "AZvKDQJqpPbI",
    "BYVbqKJwAcDv",
    
   
]
const doba_category_array4 = [
    "rAqHVKJQMYvl",
    "ALbRDKJyQcqs",
    "WZvyDFPoeYbw",
    
   
]
const doba_category_array5 = [
    "giVaveYWBPqZ",
    "gHVQvKPDBJqF",
    "rfVWDQoMcPve",
   
   
]
const doba_category_array6 = [
    "BjVPqCYMgJDb",
    "WdVrbeoOYJDh",
    "WbvRVeJdYoqO",
   
   
]
const doba_category_array7 = [
    "AzVrqFYQeovL",
    "rEDWbYcDvJqC",
    "gNbpveYfzoqB",
    
   
]
const doba_category_array8 = [
    "gKDyqFPyiYVQ",
    "gWVdqKYOwcvR",
    "rsvMqKYRwJbA",
   
    
   
]
const doba_category_array9 = [
    "gKVRDFYtzPbk",
    "gubmDQYojJvH",
    "WUDZVFcoLPqJ",
    
    
   
]
const doba_category_array10 = [
    "BsvCbKYyzcVP",
    "rZDvVFcUyPqE",
    "gzbQVecQUYDr",
    "rDqRVCJCLovQ",
    
    
   
]
const doba_category_array11 = [
    "gHVDqQPDsYbv",
    "AsqlvePRwJDb",
    "WpDbVeYBdPvo",
    "BaVZbCPRlYDc",   
   
]
const doba_category_array12 = [
    "gUDwVQPWlYbJ",
    "WhVLvKJjScDH",
    "gADvqFPtSYbc",
    "rzbpvCJjIYDT",
    "BcDkbQPtNJqe",
    "BMbDVKPEUovc"   
]

const doba_category_array13 = [
    "ACbtvecBKYDL",
    "gYDSVFcyCPbf",
    "WYvhDeJtFcbg",
    "BCDSVeoUFYqa"
]


cron.schedule('30 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array1)
   
});
cron.schedule('35 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array2)
   
});
cron.schedule('40 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array3)
   
});
cron.schedule('45 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array4)
   
});

cron.schedule('50 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array5)
   
});

cron.schedule('55 06 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array6)
   
});
cron.schedule('00 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array7)
   
});

cron.schedule('05 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array8)
   
});

cron.schedule('10 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array9)
   
});
cron.schedule('15 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array10)
   
});

cron.schedule('20 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array11)
   
});
cron.schedule('30 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array12)
   
});

cron.schedule('35 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array12)
   
});
cron.schedule('40 07 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array13)
   
});

//secood time

cron.schedule('30 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array1)
   
});
cron.schedule('35 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array2)
   
});
cron.schedule('40 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array3)
   
});
cron.schedule('45 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array4)
   
});

cron.schedule('50 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array5)
   
});

cron.schedule('55 09 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array6)
   
});
cron.schedule('00 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array7)
   
});

cron.schedule('05 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array8)
   
});

cron.schedule('10 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array9)
   
});
cron.schedule('15 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array10)
   
});

cron.schedule('20 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array11)
   
});
cron.schedule('30 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array12)
   
});
cron.schedule('35 10 * * *', () => {
    sellerProductService.uploadDOBAProduct(doba_category_array13)
   
});
