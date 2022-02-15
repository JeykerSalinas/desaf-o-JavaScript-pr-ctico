for (let i = 1; i <= document.querySelectorAll(".btn-change").length; i++) {
  const btn = document.getElementById(`btn-${i}`);
  btn.addEventListener("click", () => {
    (
      document.getElementById("caja").style.backgroundColor !=
      btn.style.backgroundColor
    ) ? 
      document.getElementById("caja").style.backgroundColor =
        btn.style.backgroundColor :
      document.getElementById("caja").style.backgroundColor = "transparent";
  });
}

