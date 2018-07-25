# Proyecto chat: websockets vanilla

El primer proyecto para practicar que haremos será un chat sencillo con websocket y nodeJS. 

El chat tendrá las siguientes características: 
Un usuario accede a nuestra web y verá el chat con un input para poder entrar con su usuario (mientras no meta su usuario no podrá acceder al chat).
Cuando acceda el nombre de usuario el usuario ya podrá chatear tranquilamente.
En el chat se podrán ver los usuarios que han accedido al chat (se verán los que están online).

El proyecto aparenta simple pero no es tan simple como parece.

Al iniciar encontraremos con el problema de que no irá el webscoket cuando hagamos pruebas, hay que resolver este paso.

Cuando logremos hacer el handshake con el servidor ya tendremos permiso para usar el socket entre el servidor y el cliente, pero encontraremos otro problema más.

El socket aunque esté abierto las comunicaciones se realizan en un lenguaje alien y desconocido para todos los mortales ignorantes que creemos que JS es jQuery.
Habrá que resolver el problema anterior y crear una librería que nos ayude traducir el datagrama (gamma pero no sé qué cojones es datagrama). 
Cuando tengamos la librería para poder traducir este datagrama pues nos tocará resolver un problemita pequeñito.
Vemos que no se pueden acceder a más de dos usuarios y tendremos un chat soso con un solo usuario (aunque si se abre dos ventanas puedes ver lo guay que funciona comunicandote contigo mismo).

A este punto tendremos que crear la lógica de usuarios en donde cada usuario se registra en nodeJS y queda persistente hasta que decida irse.

NOTA: Todo lo anterior es solo conjetura, puede ser que realmente no sea así y todo vaya tan guay que nos flipemos y creemos el siguiente Discord con electron.
