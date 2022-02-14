for (let i = 1; i <= document.querySelectorAll(".btn-change").length; i++) {
  const btn = document.getElementById(`btn-${i}`);
  btn.addEventListener(
    "click",
    () =>
      document.getElementById("caja").style.background =
        btn.style.backgroundColor
  );
}

const btnChange = document.getElementById("reset")
btnChange.addEventListener("click", ()=>document.getElementById("caja").style.background =
"transparent" )




