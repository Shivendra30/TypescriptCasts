import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('hi there')
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(info: string) {
  return (target: Plane, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata('secret', info, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const meta = Reflect.getMetadata('secret', target.prototype, key);
    console.log(meta);
  }
}
