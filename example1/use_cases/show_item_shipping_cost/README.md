# Intención

La secuencia del caso de uso es la siguiente:

* un comprador pregunta por el costo de envío de un item
* el comprador le dice pide al item que calcule sus costos de envío para su nivel de loyalty
* el item le dice al nivel de loyalty del comprador que calcule los costos de envio para un item con su valor y
  sus costos de envío 
* obtenemos el costo de envío desde los calculos hechos por el nivel de loyalty del comprador
* dejamos que la respuesta del caso de uso renderee el costo de envío

# Boundaries

Qué es lo complicado en los límites entre capas?
Lo complicado es que, el control debe estar en las capas interiores. Pero, al mismo tiempo, estas capas interiores no deben conocer a las capas exteriores. Entonces... como hacemos para que, una pieza de código controle a otra que no conoce?
_Humble Object Pattern_.
Lo qué?!
Bueno, básicamente es asi: La capa interior propone una interfáz (diseñada con el propósito de cumplir las necesidades de esta capa) y la capa exterior implementa esta interfaz.
Los casos donde se da esta situación en mi ejemplo son:

## Use Case y su entity gateway

El UC (use case, en mi ejemplo lo vemos en [este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/index.js)) propone una interfaz ([este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/entity_gateway.js)) de la cuál va a sacar las entidades que el caso de uso necesita hacer interactuar. Es una sola interfaz. Del otro lado puede ser implementada por un composite / facade de varias otras cosas. Bleh. Al caso de uso le interesa tener un lugar donde pedir un buyer y un item.
Le pasa la consulta del caso de uso y que el entityGw se curta.

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/UC%20Entity%20GW%20Boundary.png?raw=true)

## El resultado del UC y su presenter

El UC (use case, en mi ejemplo lo vemos en [este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/index.js)) propone una interfaz ((este file)[https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/item_shipping_cost_response.js]) en la cuál va a renderear su resultado. Es una sola interfaz. Del otro lado puede ser implementada por un composite / facade de varias otras cosas. Bleh. Al caso de uso le interesa tener un lugar donde renderear su resultado.

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/UC%20Result%20Boundary.png?raw=true)

## Las entidades de negocio y sus representaciones

Las entidades saben representarse por si mismas. Pero... cómo hacen esto sin violar su encapsulamiento?
Mediante el mismo patrón que vimos hasta ahora. _Humble Object_!.
Bien. Cada entidad (o familia de entidades) que requiera ser representada, propone una interfaz que le queda cómoda a la entidad y que sus métodos estan totalmente orientados a los própositos que la entidad tenga a la hora de representarse. Del otro lado, el resultado del caso de uso implementa esta interfaz.

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/Entity%20Boundary.png?raw=true)

## De donde saqué todo esto?
Capítulo 23 de clean architecture - Conclusión:
_At each architectural boundary, we are likely to find the Humble Object pattern lurking somewhere nearby. The communication across that boundary will almost always involve some kind of simple data structure, and the boundary will frequently divide something that is hard to test from something that is easy to test. The use of this pattern at architectural boundaries vastly increases the testability of the entire system._
![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/inversion%20control.jpg?raw=true)
