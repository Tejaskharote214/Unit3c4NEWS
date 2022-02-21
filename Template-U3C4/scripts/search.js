async function storeSearchterm(term) {
         
    try {

        let res = await fetch(term);
    
        let data = await res.json();
        // console.log(data);

        return data;
        
    } catch (error) {
        console.log(error);
        
    }
    

}

export  {storeSearchterm};
