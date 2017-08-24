function conv(str){
    return JSON.stringify(str.replace(/\\/g, '\\\\').replace(/    /g, '\t').split('\n'))
}