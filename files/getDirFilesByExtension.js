function getDirFilesByExtension(extensions, filePath){
  return new Promise((resolve, reject)=>{
    fs.readdir( filePath , (err,files)=>{
      if(err){
        reject(err);
        return;
      }
      else{
        var obj={};
        files.map((file)=>{
          return path.join(p,file);
        })
        .filter(
          (file)=>{
            return extensions.indexOf(path.extname(file))!== -1 && fs.stat.isFile(file);
        })
        .forEach((file)=>{
          var ext=path.extname(file);
          var fileName=path.basename(file);
          if( !obj.hasOwnProperty(ext) ){
            obj[ext]={}
          }
          obj[ext][fileName]={};
          obj[ext][fileName].path=p
          obj[ext][fileName].content=fs.readFileSync(file)
        })
        resolve(obj)
      }
    })
  })
}
