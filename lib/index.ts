export  function transformUrl(url:string):string{
    let ans=""
    for(let key=0;key<url.length;key++){
        if(url[key]==="\\"){
            ans+="\\\\"
        }else{
            ans+=url[key]
        }
    }
    return ans
}
