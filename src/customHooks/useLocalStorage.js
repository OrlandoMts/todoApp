import React from 'react'

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(()=>{
        setTimeout(()=>{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if(!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                // Convierte el string a un objeto js
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
        }, 2000)
    }, [])
    
    
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }
    // si son mas de dos elementos, React recomienda retornar un objeto y no un array  
    return {item, saveItem, loading};
}

export { useLocalStorage }
