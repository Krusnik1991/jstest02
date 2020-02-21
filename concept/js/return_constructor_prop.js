/* Можно вернуть объекту Foo.prototype свойство .constructor, если вы хотите, чтобы свойство соответствовало стандартному поведению и было не перечислимым  */

function Foo() { /* .. */ }

Foo.prototype = { /* .. */ }; // создаем новый объект-прототип

// Необходимо правильно "пофиксить" отсутствующее свойство `.constructor`
// у нового объекта, выступающего в роли `Foo.prototype`.
// См. главу 3 про `defineProperty(..)`.
Object.defineProperty( Foo.prototype, "constructor" , {
	enumerable: false,
	writable: true,
	configurable: true,
	value: Foo    // `.constructor` теперь указывает на `Foo`
} );

