import { toast } from "react-toastify";



export const saveData=(data)=>{
    let saveLocalstorageData=JSON.parse(localStorage.getItem('donation')) || [];

    const isExistData=saveLocalstorageData.find(item=>item.id === data.id);

    if(!isExistData){
        saveLocalstorageData.push(data);

        localStorage.setItem('donation',JSON.stringify(saveLocalstorageData));

        toast.success('donation added')

        
    }else{
        toast.warning('donation allredy doned')

    }
}

export const getDAta=()=>{
    const readData = localStorage.getItem('donation')
    let getDatas = [];
    if(readData )
        getDatas=JSON.parse(readData);
        return getDatas;
    }