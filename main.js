let resume=document.querySelector(".Resume")
resume.addEventListener("click",function(){
    resume.textContent="Downloaded"
    var link = document.createElement('a');

      // Set the link's attributes
      link.href = 'CV.jpg';
      link.download = 'CV.jpg';

      // Programmatically trigger the download
      link.click();
})