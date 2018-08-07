## Intención ##

La secuencia del caso de uso es la siguiente:

* un comprador pregunta por el costo de envío de un item
* el comprador le dice pide al item que calcule sus costos de envío para su nivel de loyalty
* el item le dice al nivel de loyalty del comprador que calcule los costos de envio para un item con su valor y
  sus costos de envío 
* obtenemos el costo de envío desde los calculos hechos por el nivel de loyalty del comprador
* dejamos que la respuesta del caso de uso renderee el costo de envío
