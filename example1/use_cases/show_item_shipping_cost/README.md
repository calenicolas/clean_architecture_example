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
Lo complicado es que el control debe estar en las capas interiores. Pero, al mismo tiempo, estas capas interiores no deben conocer a las capas exteriores (que al fin y al cabo son controladas por las capas interiores, nuestro _negocio_).

Entonces... como hacemos para que una pieza de código controle a otra que no conoce?

La capa interior propone una interfáz (diseñada con el propósito de cumplir las necesidades de esta capa) y la capa exterior
implementa esta interfaz. De esta forma, lo importante siempre es la capa interior. Codeamos para que la capa interior tenga
un código limpio. Codeamos para que la capa interior tenga todas las facilidades posibles.

Los casos donde se da esta situación en mi ejemplo son:

## Use Case y su entity gateway

El UC (use case, en mi ejemplo lo vemos en [este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/index.js)) propone una interfaz ([este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/entity_gateway.js)) _ShowItemShippingCostEntityGateway_.

Que rol cumple?
Le dá al caso de las entidades de negocio instanciadas. Y este _EntityGateway_ que recibe, tiene la firma que le conviene al
caso de uso. Evita que el caso se uso se preoupe por instanciar entidades, interpretar los DTO's desde otras capas y etc.
El caso de uso quiere entidades para hacerlas interactuar. Lo que conoce del proyecto son las entidades, y las saca de un 
_EntityGateway_ específico para él. 

Por ej: 
Que le conviene mas al caso de uso, invocarle un método al request, o directamente dárselo al _EntityGateway_?

Ej:
```javascript
entityGw.findItemById(request.getItemId());
```
vs 
```javascript
entityGw.findItemRequest(request);
```
Desde mi perspectiva, la segunda evita hacer un paso en el caso de uso. Mismo, evita el hecho de q si mañana queremos 
encontrar un item por su `id` y por su `variation_id`, esa lógica agnóstica al caso de uso. No le interesa como se busan los
items. El caso de uso quiere un item, el item que el usuario quiso buscar en su request. Listo. 
- UC: "Che Entity gato, tirame un item para este ameo queriendo comprar"
- EntGw: "Toma viejita. Un item con variación."

Por qué un solo _EntityGateway_ ?
Lo mismo que antes. Le conviene al caso de uso tener una firma con varios _EntityGateway_'s ? Dejaríamos de pensar en el 
negocio por un segundo y nos pondríamos a pensar en que entidad sale de que _EntityGateway_. Mismo, en casos de uso 
complejos, quedaria una firma con varios _EntityGateway_'s.

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/UC%20Entity%20GW%20Boundary.png?raw=true)

## El resultado del UC y su presenter

El UC (use case, en mi ejemplo lo vemos en [este file](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/index.js)) propone una interfaz ((este file)[https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/item_shipping_cost_response.js]) en la cuál va a renderear su resultado. Es una sola interfaz.

Al presenter le pasamos un resultado del caso de uso para renderear. El resultado del caso de uso es una combinado de varias
representaciones de los objetos de negocio. En este caso, el resultado del caso de uso es la representación del costo de
envío de un item. 
![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/UC%20Result%20Boundary.png?raw=true)

## Las entidades de negocio y sus representaciones

Las entidades saben representarse por si mismas. Pero... cómo hacen esto sin violar su encapsulamiento?
Mediante el mismo patrón que vimos hasta ahora. _Humble Object_!.
Bien. Cada entidad (o familia de entidades) que requiera ser representada, propone una interfaz que le queda cómoda a la entidad. Todos sus métodos estan totalmente orientados a los própositos que la entidad tenga a la hora de representarse. Del otro lado, el resultado del caso de uso implementa esta interfaz. 
El resultado del caso de uso arma un DTO interno mediante la implementación de la interfaz de representación de la(s) 
entidades que quiera mostrar.

Por qué no usar un extension method? (aka asJSON, o getters)
Antes de responder esto, quiero hacer otra pregunta... Que es un extension method ?
A decir verdad, es un getter con esteroides. Cuando aparecen los getters( y sobretodo, sobre las entidades de negocio)
comenzamos algo que no sabemos como va a terminar. Un objeto de negocio, al exponer algun atributo de si mismo, pierde el 
control sobre el mismo. La lógica de negocio del objeto de negocio queda potencialmente distribuída en otras entidades.
Con los métodos de extensión como asJSON() o cosas así, lo que terrmino encontrando es que luego alguien hace cosas con las 
propiedades de esa extensión generada.
Dado estos puntos negativos... no querríamos desarrollar un concepto de arquitectura que evite escribir getters / métodos de 
extensión en nuestras entidades de negocio?

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/Entity%20Boundary.png?raw=true)

## De donde saqué todo esto?
Capítulo 23 de clean architecture - Conclusión:
_At each architectural boundary, we are likely to find the Humble Object pattern lurking somewhere nearby. The communication across that boundary will almost always involve some kind of simple data structure, and the boundary will frequently divide something that is hard to test from something that is easy to test. The use of this pattern at architectural boundaries vastly increases the testability of the entire system._

![alt text](https://github.com/calenicolas/clean_architecture_example/blob/es5/example1/use_cases/show_item_shipping_cost/inversion%20control.jpg?raw=true)

Isolar el cliente de service impl mediante una interfaz permite variar la implementacion del servicio sin afectar a sus clientes. Los clientes de las capas interiores son las exteriores. Al tener las interfaces con intenciones que benefician siempre a las capas interiores, lo de afuera siempre queda siendo un cliente y sus intenciones son servir a la capa interior. 
