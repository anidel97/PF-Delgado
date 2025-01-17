//Registros automáticos
const registros = [
    {
        "index": 0,
        "nombre": "Huber",
        "apellido": "Padilla",
        "direccion": "414 Heyward Street, Ahwahnee, Iowa, 9226",
        "email": "huberpadilla@eweville.com",
        "serviciosAConsultar": "Asesoramiento a distancia",
        "cantidadDeAmbientes": "1 ambiente",
        "contanosTuProyecto": "Lorem tempor est consequat Lorem aliqua cillum elit deserunt aute dolor ea incididunt. Duis deserunt minim sit consequat irure cillum consectetur ea nostrud. Ea aliquip id aliqua ipsum non.\r\n",
        "honorarios":"usd 1000",

        "presupuestoProyecto": "usd 100000",
        "fechaDeInscripcion": "2018-01-17T02:26:08 +03:00"
    },
    {
        "index": 1,
        "nombre": "Barton",
        "apellido": "Mcdaniel",
        "direccion": "486 Frost Street, Goldfield, Marshall Islands, 5225",
        "email": "bartonmcdaniel@eweville.com",
        "serviciosAConsultar":"Proyecto integral",
        "cantidadDeAmbientes":"1 ambiente",
        "contanosTuProyecto": "Incididunt officia nisi ut in sit velit excepteur adipisicing labore elit deserunt sint. Ad non tempor nulla ex veniam dolor. Voluptate veniam Lorem adipisicing ex irure laboris ex do aliqua magna laborum. Fugiat occaecat ut ea labore pariatur magna veniam consectetur nostrud esse magna. Dolor quis exercitation exercitation qui amet anim qui et laboris consequat est nulla.\r\n",
        "honorarios":"usd 2000",
        "presupuestoProyecto": "usd 10000",
        "fechaDeInscripcion": "2014-12-21T07:52:42 +03:00"
    },
    {
        "index": 2,
        "nombre": "Sheppard",
        "apellido": "Hester",
        "direccion": "381 Delevan Street, Nicut, Guam, 8018",
        "email": "sheppardhester@eweville.com",
        "serviciosAConsultar":"Arquitectura",
        "cantidadDeAmbientes":"proyecto completo",
        "contanosTuProyecto": "Anim eu minim nostrud mollit et ea exercitation pariatur nisi amet. Deserunt consequat sunt laboris laboris irure culpa officia occaecat anim exercitation. Mollit officia excepteur ex nulla sit.\r\n",
        "honorarios":"usd 500",
        "presupuestoProyecto": "usd 50000",
        "fechaDeInscripcion": "2021-02-21T02:55:11 +03:00"
    },
    {
        "index": 3,
        "nombre": "Manning",
        "apellido": "Frost",
        "direccion": "652 Cozine Avenue, Klagetoh, South Dakota, 9373",
        "email": "manningfrost@eweville.com",
        "serviciosAConsultar":"Interiorismo",
        "cantidadDeAmbientes":"2 ambientes o más",
        "contanosTuProyecto": "Consequat excepteur ipsum veniam consectetur ex duis pariatur cillum cillum aliquip et. Minim ad aliqua excepteur ad ex dolore aute irure. Ipsum ea aute laborum in tempor sit minim anim ex id reprehenderit quis. Id laboris eu in ea nulla dolor id duis incididunt tempor. Minim anim amet reprehenderit duis fugiat veniam est eiusmod dolore. Eu officia occaecat ad amet cupidatat ut non aliqua officia labore exercitation.\r\n",
        "honorarios": "usd 1000",
        "presupuestoProyecto": "usd 10000",
        "fechaDeInscripcion": "2024-06-14T08:40:52 +03:00"
    },
    {
        "index": 4,
        "nombre": "Jenny",
        "apellido": "Petersen",
        "direccion": "614 Ocean Court, Westboro, New Mexico, 5769",
        "email": "jennypetersen@eweville.com",
        "serviciosAConsultar":"Interiorismo",
        "cantidadDeAmbientes": "proyecto completo",
        "contanosTuProyecto": "Non qui laborum sit est culpa do officia ad labore laborum labore sint sunt. Ut est laboris excepteur consectetur proident ex aliqua adipisicing anim aliquip proident nisi consectetur elit. Tempor proident qui cillum fugiat voluptate non deserunt consequat non mollit pariatur. Dolore laborum tempor sint sint. Dolore enim veniam proident consectetur nulla dolore aliquip dolor eu. Enim veniam est est nisi nostrud occaecat elit dolore velit commodo cillum minim enim proident.\r\n",
        "honorarios": "usd 2000",
        "presupuestoProyecto": "+ usd 150000",
        "fechaDeInscripcion": "2021-03-23T07:05:07 +03:00"
    },
    {
        "index": 5,
        "nombre": "Orr",
        "apellido": "Pickett",
        "direccion": "955 Truxton Street, Hondah, Maryland, 383",
        "email": "orrpickett@eweville.com",
        "serviciosAConsultar": "Arquitectura",
        "cantidadDeAmbientes":"proyecto completo",
        "contanosTuProyecto": "Anim id ut ipsum ex duis Lorem reprehenderit dolore tempor occaecat pariatur nulla laborum quis. Lorem exercitation id occaecat id eu excepteur do dolore irure tempor consequat non. Sunt irure labore cillum ut quis. Ad exercitation laboris ipsum nisi dolore laboris excepteur ullamco. Ad officia id consequat incididunt et mollit esse cupidatat. Mollit minim do est ad irure nisi ea in velit fugiat enim. Culpa aute velit nulla nisi irure.\r\n",
        "honorarios": "usd 2000",
        "presupuestoProyecto": "usd 100000",
        "fechaDeInscripcion": "2017-09-21T08:31:39 +03:00"
    },
    {
        "index": 6,
        "nombre": "Dillard",
        "apellido": "Head",
        "direccion": "622 Railroad Avenue, Olney, Wyoming, 351",
        "email": "dillardhead@eweville.com",
        "serviciosAConsultar":"Interiorismo",
        "cantidadDeAmbientes": "proyecto completo",
        "contanosTuProyecto": "In dolore aliqua commodo mollit officia fugiat commodo excepteur minim sunt ipsum velit cupidatat. Reprehenderit dolor occaecat do amet sunt velit laborum do id enim voluptate quis consectetur. Lorem excepteur anim est anim ea sunt nostrud aliquip duis ipsum. Consequat minim exercitation id voluptate. Quis dolor pariatur reprehenderit consequat excepteur consequat officia ad consequat ut dolor.\r\n",
        "honorarios": "+ usd 2500",
        "presupuestoProyecto": "usd 10000",
        "fechaDeInscripcion": "2014-07-24T04:54:12 +03:00"
    }
]

//console.log(registros);
