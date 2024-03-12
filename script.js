
var image = document.getElementById('inputImagem');
image.addEventListener("change", function(){
  var file = this.files[0];
  console.log("TESTE")
  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var imagem = document.createElement('img');
      imagem.src = e.target.result;
      imagem.style.maxWidth = '100%'; // Largura máxima de 100% do contêiner pai
      imagem.style.height = 'auto'; // Altura automática para manter a proporção original
      document.getElementById('imagemContainer').innerHTML = '';
      document.getElementById('imagemContainer').appendChild(imagem);
    };
    reader.readAsDataURL(file);
  }
});
