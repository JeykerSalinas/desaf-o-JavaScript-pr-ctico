// Métodos clásicos de Arreglos en Javascript

// Tres preguntas fundamentales para los métodos
// 1. ¿A qué tipo de dato se aplica este método?
// 2. ¿Qué argumentos recibe este método?
// 3. ¿Qué retorna o devuelve este método?

/*
1. .push()

2. .pop()

3. .shift()

4. .unshift()

5. .forEach()
*/

const getData = async () => {
    const URL = "https://us-central1-api-natural.cloudfunctions.net/api"
    try {
      const req = await fetch(URL);
      return await req.json();
    } catch(error) {
      console.error(error)
    }
  }
  
  const execution = (async () => {
    const data = await getData();
  
    
    // Utilizar esto para explicar los métodos:
    /*
      1. .push()
  
      2. .pop()
  
      3. .shift()
  
      4. .unshift()
  
      5. .forEach()
     */
      let myArr = data.plantas.almendra.propiedades
   myArr.forEach(element,index => {
     console.log(index)
     element.contraindicaciones = "ninguna"
     element.descripcion = element.descripcion + " mas algo"
   }) 
   
    console.log(data.plantas.almendra.propiedades)
     
  })()