export const saveData=(data)=>{
    let saveLocalstorageData=JSON.parse(localStorage.getItem('donation') || []);

    const isExistData=saveLocalstorageData.find(item=>item.id === data.id);

    if(!isExistData){
        saveLocalstorageData.push(data);

        localStorage.setItem('donation',JSON.stringify(saveLocalstorageData));

        alert('okk add');
        
    }else{
        alert('alredy save');

    }
}

export const getDAta=()=>{
    const getDatas=JSON.parse(localStorage.getItem('donation') || []);
    return getDatas;
}