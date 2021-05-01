 const http=require('http');
const url=require('url');
const fs=require('fs');



const mime = {

   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :  'audio/mpeg3',
   'mp4'  : 'video/mp4'
};



const cache={};
const servidor=http.createServer((pedido, respuesta) => {
    const objetourl = url.parse(pedido.url);

  let camino='/web'+objetourl.pathname;
  if (camino=='/web')
    camino='web/index.html';

  if (cache[camino]) {
    const vec = camino.split('.');
    const extension=vec[vec.length-1];
    const mimearchivo=mime[extension];

    respuesta.writeHead(200, {'Content-Type': mimearchivo});
    respuesta.write(cache[camino]);
    respuesta.end();
    console.log('Recurso recuperado del cache:'+camino);           

    if (error) {
        respuesta.writeHead(500, {'Content-Type': 'text/plain'});
        respuesta.write('Error interno');
        respuesta.end();          
          
         } else {
        
        cache[camino]=contenido;
         const vec = camino.split('.');
        const extension=vec[vec.length-1];
        const mimearchivo=mime[extension];
        
        respuesta.writeHead(200, {'Content-Type': mimearchivo});
        respuesta.write(contenido);
        respuesta.end();
        console.log('Recurso leido del disco:'+camino);
            }
        
        
        }else{
        respuesta.writeHead(404, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');    
        respuesta.end();
                }
            });
        
        function recuperar(pedido, respuesta){
        let info='';
        pedido.on('data',datosparciales=>{
            info+=datosparciales
        })
        pedido.on('end', ()=>{
            const formulario=querystring.parse(info);
            respuesta.writeHead(200, {'Content-type':'text/html'});
            const pagina = `<!doctype html><html><head></head><body>Nombre de usuario: ${formulario['nombre']}<br> Clave: ${formulario['clave']}<br>
            <a href="index.html">Retornar</a>
              </body></html>`;
              respuesta.end(pagina);
        })
        }


servidor.listen(8888);
console.log('Servidor web iniciado');

  