 export function serializeObjectToQueryParams(obj){
const queryParams = []

for (const key in obj){
    if(obj.hasOwnProperty(key) && Boolean(obj[key])){
        const value= obj[key]
        if(value !== undefined){
            queryParams.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            )
        }
    }
}
return '?'+ queryParams.join('&')
}